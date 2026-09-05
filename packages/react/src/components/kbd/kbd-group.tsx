import { type Assign, ark, type PolymorphicProps } from "@ark-ui/react";
import { createContext, forwardRef, useContext } from "react";
import {
	createStyleContext,
	type HTMLStyledProps,
} from "../../styled-system/jsx";
import {
	type KbdGroupRecipeVariantProps,
	type KbdRecipeVariantProps,
	kbdGroupRecipe,
	kbdRecipe,
} from "../../styled-system/recipes";

type KbdGroupContextValue = KbdRecipeVariantProps;
const KbdGroupContext = createContext<KbdGroupContextValue>({
	size: "md",
});

export function useKbdGroupContext() {
	return useContext(KbdGroupContext);
}

const { withProvider, withContext } = createStyleContext(kbdGroupRecipe);

const KbdGroupRootBase = withProvider(ark.div, "root");

type KbdGroupRootProps = Assign<
	HTMLStyledProps<"div">,
	KbdGroupContextValue & KbdGroupRecipeVariantProps & PolymorphicProps
>;
export const KbdGroupRoot = forwardRef<HTMLDivElement, KbdGroupRootProps>(
	(props, ref) => {
		const [variantsProps, restProps] = kbdRecipe.splitVariantProps(props);

		return (
			<KbdGroupContext.Provider value={variantsProps}>
				<KbdGroupRootBase ref={ref} {...restProps} />
			</KbdGroupContext.Provider>
		);
	},
);
KbdGroupRoot.displayName = "KbdGroupRoot";

export const KbdGroupSeparator = withContext(ark.span, "separator");
KbdGroupSeparator.displayName = "KbdGroupSeparator";
