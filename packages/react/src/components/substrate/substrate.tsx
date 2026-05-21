import { type ComponentProps, createContext, useContext } from "react";

const SubstrateContext = createContext(1);

/**
 * Returns the current substrate level from the nearest `Substrate` provider.
 * @returns The current substrate level, a number between 1 and 8.
 */
export const useSubstrate = () => {
	return useContext(SubstrateContext);
};

/**
 * Provides a substrate level to its children via context.
 * The substrate level is clamped between 1 and 8.
 *
 * @param props - The component props.
 * @param props.value - The substrate level to provide. Will be clamped between 1 and 8.
 * @param props.children - The child elements to render within the substrate context.
 */
export const Substrate = (
	props: ComponentProps<typeof SubstrateContext.Provider>,
) => {
	const { children, value } = props;

	return (
		<SubstrateContext.Provider value={Math.max(1, Math.min(8, value))}>
			{children}
		</SubstrateContext.Provider>
	);
};
Substrate.displayName = "Substrate";
