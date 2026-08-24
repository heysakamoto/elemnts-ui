import { type Assign, ark, type PolymorphicProps } from "@ark-ui/react";
import { createContext, forwardRef, useContext } from "react";

import {
	createStyleContext,
	type HTMLStyledProps,
} from "../../../styled-system/jsx";
import {
	type ButtonGroupRecipeVariantProps,
	type ButtonRecipeVariantProps,
	buttonGroupRecipe,
	buttonRecipe,
} from "../../../styled-system/recipes";

type ButtonGroupContextValue = ButtonRecipeVariantProps;
const ButtonGroupContext = createContext<ButtonGroupContextValue>({
	size: "md",
});

export function useButtonGroupContext() {
	return useContext(ButtonGroupContext);
}

const { withProvider, withContext } = createStyleContext(buttonGroupRecipe);

const ButtonGroupRootBase = withProvider(ark.div, "root");

type ButtonGroupRootProps = Assign<
	HTMLStyledProps<"div">,
	ButtonGroupContextValue & ButtonGroupRecipeVariantProps & PolymorphicProps
>;
export const ButtonGroupRoot = forwardRef<HTMLDivElement, ButtonGroupRootProps>(
	(props, ref) => {
		const [buttonVariantProps, restProps] =
			buttonRecipe.splitVariantProps(props);

		return (
			<ButtonGroupContext.Provider value={buttonVariantProps}>
        <ButtonGroupRootBase
					ref={ref}
          {...restProps}
          fullWidth={props.fullWidth}
				/>
			</ButtonGroupContext.Provider>
		);
	},
);
ButtonGroupRoot.displayName = "ButtonGroupRoot";

export const ButtonGroupSeparator = withContext(ark.span, "separator");
ButtonGroupSeparator.displayName = "ButtonGroupSeparator";
