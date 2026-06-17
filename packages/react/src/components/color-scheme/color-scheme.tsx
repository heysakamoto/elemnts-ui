import { ark } from "@ark-ui/react";
import { cx } from "@moto-ui/styled-system/css";
import { type HTMLStyledProps, styled } from "@moto-ui/styled-system/jsx";
import { forwardRef, type PropsWithChildren } from "react";
import {
	type ColorSchemeContextValue,
	ColorSchemeRootProvider,
	type UseColorSchemeProps,
	useColorScheme,
	useColorSchemeContext,
} from "./client";

type ColorSchemeRootProps = PropsWithChildren<UseColorSchemeProps>;

export function ColorSchemeRoot(props: ColorSchemeRootProps) {
	const { children, ...rest } = props;

	const value = useColorScheme(rest);

	return (
		<ColorSchemeRootProvider value={value}>{children}</ColorSchemeRootProvider>
	);
}
ColorSchemeRoot.displayName = "ColorSchemeRoot";

type ColorSchemeLightProps = HTMLStyledProps<"div">;
export const ColorSchemeLight = forwardRef<
	HTMLDivElement,
	ColorSchemeLightProps
>((props, ref) => {
	const { children, className, ...restProps } = props;
	const value = useColorScheme({ forcedScheme: "light" });

	return (
		<ColorSchemeRootProvider value={value}>
			<styled.div
				ref={ref}
				{...restProps}
				className={cx("light", className)}
			>
				{children}
			</styled.div>
		</ColorSchemeRootProvider>
	);
});
ColorSchemeLight.displayName = "ColorSchemeLight";

const StyledColorSchemeDark = styled(ark.div);

type ColorSchemeDarkProps = HTMLStyledProps<"div">;
export const ColorSchemeDark = forwardRef<HTMLDivElement, ColorSchemeDarkProps>(
	(props, ref) => {
		const { children, className, ...restProps } = props;
		const value = useColorScheme({ forcedScheme: "dark" });

		return (
			<ColorSchemeRootProvider value={value}>
				<StyledColorSchemeDark
					ref={ref}
					{...restProps}
					className={cx("dark", className)}
				>
					{children}
				</StyledColorSchemeDark>
			</ColorSchemeRootProvider>
		);
	},
);
ColorSchemeDark.displayName = "ColorSchemeDark";

type ColorSchemeContextProps = {
	children:
		| ((props: ColorSchemeContextValue) => React.ReactNode)
		| React.ReactNode;
};

export const ColorSchemeContext = (props: ColorSchemeContextProps) => {
	const { children } = props;
	const ctx = useColorSchemeContext();

	return typeof children === "function" ? children(ctx) : children;
};
ColorSchemeContext.displayName = "ColorSchemeContext";
