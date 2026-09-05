import { type Assign, ark, type HTMLArkProps } from "@ark-ui/react";
import {
	createContext,
	forwardRef,
	type PropsWithChildren,
	useContext,
} from "react";
import { styled } from "../../styled-system/jsx";
import { elevatedRecipe } from "../../styled-system/recipes";

const ElevatedContext = createContext(1);

export function useElevatedContext() {
	const context = useContext(ElevatedContext);
	return context;
}

function ElevatedContextProvider(props: PropsWithChildren<{ value: number }>) {
	const { children, value } = props;

	return (
		<ElevatedContext.Provider value={Math.max(1, Math.min(8, value))}>
			{children}
		</ElevatedContext.Provider>
	);
}

/**
 * Props for the `Elevated` component.
 *
 * @property {number} delta - The elevation delta to add to the current substrate level.
 * @property {number} [shadowLevel] - Optional override for the shadow level. Defaults to the computed substrate level.
 */
type ElevatedBaseProps = Assign<
	HTMLArkProps<"div">,
	{
		delta?: number;
		shadowLevel?: number;
	}
>;

/**
 * `Elevated` is a layout component that raises the elevation level of its children
 * by a given `delta` relative to the current substrate level.
 *
 * It computes a new substrate level by adding `delta` to the current substrate level,
 * capping the result at a maximum of `3`. The computed level is applied via the
 * `Substrate` context provider and exposed through data attributes.
 *
 * @example
 * ```tsx
 * <Elevated delta={1}>
 *   <Stack />
 * </Elevated>
 * ```
 *
 * @param props - The component props including `delta` and optional `shadowLevel`.
 * @param ref - A forwarded ref to the underlying `div` element.
 */
export const ElevatedBase = forwardRef<HTMLDivElement, ElevatedBaseProps>(
	(props, ref) => {
		const { delta = 1, shadowLevel, style, children, ...restProps } = props;
		const ctx = useElevatedContext();

		const level = Math.min(ctx + delta, 8);
		const shadow = shadowLevel ?? level;

		const dataProps = {
			"data-elevation": level,
			"data-elevation-delta": delta,
			"data-elevation-shadow": shadow,
		};

		const computedStyle = {
			...style,
			"--elevation": level,
			"--elevation-delta": delta,
			"--elevation-shadow": shadow,
		};

		return (
			<ElevatedContextProvider value={level}>
				<ark.div ref={ref} style={computedStyle} {...dataProps} {...restProps}>
					{children}
				</ark.div>
			</ElevatedContextProvider>
		);
	},
);
ElevatedBase.displayName = "ElevatedBase";

export const Elevated = styled(ElevatedBase, elevatedRecipe);
Elevated.displayName = "Elevated";
