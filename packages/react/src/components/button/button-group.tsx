import { type Assign, ark, type PolymorphicProps } from "@ark-ui/react";
import {
	createStyleContext,
	type HTMLStyledProps,
} from "@moto-ui/styled-system/jsx";
import {
	type ButtonRecipeVariantProps,
	buttonGroupRecipe,
	buttonRecipe,
} from "@moto-ui/styled-system/recipes";
import { createContext, forwardRef, useContext } from "react";

type ButtonGroupContextValue = ButtonRecipeVariantProps;
const ButtonGroupContext = createContext<ButtonGroupContextValue>({});

export function useButtonGroupContext() {
	return useContext(ButtonGroupContext);
}

const { withProvider, withContext } = createStyleContext(buttonGroupRecipe);

const ButtonGroupRootBase = withProvider(ark.div, "root");

type ButtonGroupRootProps = Assign<
	HTMLStyledProps<"div">,
	ButtonGroupContextValue & PolymorphicProps
>;
export const ButtonGroupRoot = forwardRef<HTMLDivElement, ButtonGroupRootProps>(
	(props, ref) => {
		const [buttonVariantProps, restProps] =
			buttonRecipe.splitVariantProps(props);

		return (
			<ButtonGroupContext.Provider value={buttonVariantProps}>
				<ButtonGroupRootBase
					{...restProps}
					ref={ref}
				/>
			</ButtonGroupContext.Provider>
		);
	},
);
ButtonGroupRoot.displayName = "ButtonGroupRoot";

export const ButtonGroupSeparator = withContext(ark.span, "separator");
ButtonGroupSeparator.displayName = "ButtonGroupSeparator";
