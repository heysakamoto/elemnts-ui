import { type Assign, ark, type HTMLArkProps } from "@ark-ui/react";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import {
	type ButtonGroupRecipeVariantProps,
	type ButtonRecipeVariantProps,
	buttonGroupRecipe,
	buttonRecipe,
} from "@moto-ui/styled-system/recipes";
import type { HTMLStyledProps } from "@moto-ui/styled-system/types";
import { createContext, forwardRef, useContext } from "react";

type ButtonGroupContextValue = ButtonRecipeVariantProps;
const ButtonGroupContext = createContext<ButtonGroupContextValue>({});

export function useButtonGroupContext() {
	return useContext(ButtonGroupContext);
}

const { withProvider, withContext } = createStyleContext(buttonGroupRecipe);

const Styled = withProvider(ark.div, "root");

type ButtonGroupRootProps = Assign<
	HTMLArkProps<"div">,
	HTMLStyledProps<"div"> &
		ButtonGroupContextValue &
		ButtonGroupRecipeVariantProps
>;
export const ButtonGroupRoot = forwardRef<HTMLDivElement, ButtonGroupRootProps>(
	(props, ref) => {
		const [variantProps, restProps] = buttonRecipe.splitVariantProps(props);

		const value = {
			...variantProps,
		};

		return (
			<ButtonGroupContext.Provider value={value}>
				<Styled
					ref={ref}
					{...restProps}
				/>
			</ButtonGroupContext.Provider>
		);
	},
);
ButtonGroupRoot.displayName = "ButtonGroupRoot";

export const ButtonGroupSeparator = withContext(ark.span, "separator");
ButtonGroupSeparator.displayName = "ButtonGroupSeparator";
