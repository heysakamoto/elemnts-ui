import { type Assign, ark, type PolymorphicProps } from "@ark-ui/react";
import { createContext, forwardRef, useContext } from "react";
import {
	createStyleContext,
	type HTMLStyledProps,
} from "../../styled-system/jsx";
import {
	type SeparatorGroupRecipeVariantProps,
	type SeparatorRecipeVariantProps,
	separatorGroupRecipe,
	separatorRecipe,
} from "../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(separatorGroupRecipe);

const SeparatorGroupRootBase = withProvider(ark.div, "root", {
	dataAttr: true,
	defaultProps: {
		"data-part": "root",
		"data-scope": "separator-group",
	},
});

type SeparatorGroupContextValue = SeparatorRecipeVariantProps;
const SeperatorGroupContext = createContext<SeparatorGroupContextValue>({
	orientation: "horizontal",
});

export function useSeparatorGroupContext() {
	const ctx = useContext(SeperatorGroupContext);
	return ctx;
}

type SeparatorGroupRootProps = Assign<
	HTMLStyledProps<"div">,
	SeparatorGroupContextValue &
		SeparatorGroupRecipeVariantProps &
		PolymorphicProps
>;
export const SeparatorGroupRoot = forwardRef<
	HTMLDivElement,
	SeparatorGroupRootProps
>((props, ref) => {
	const [separatorVariantProps, restProps] =
		separatorRecipe.splitVariantProps(props);

	return (
		<SeperatorGroupContext.Provider value={separatorVariantProps}>
			<SeparatorGroupRootBase {...restProps} ref={ref} />
		</SeperatorGroupContext.Provider>
	);
});
SeparatorGroupRoot.displayName = "SeparatorGroupRoot";

export const SeparatorGroupCaption = withContext(ark.span, "caption", {
	defaultProps: {
		"data-part": "caption",
		"data-scope": "separator-group",
	},
});
SeparatorGroupCaption.displayName = "SeparatorGroupCaption";
