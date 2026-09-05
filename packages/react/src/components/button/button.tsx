import { type Assign, ark, type PolymorphicProps } from "@ark-ui/react";
import { forwardRef } from "react";
import { type HTMLStyledProps, styled } from "../../styled-system/jsx";
import {
	type ButtonRecipeVariantProps,
	buttonRecipe,
} from "../../styled-system/recipes";
import { useButtonGroupContext } from "./button-group";

const ButtonBase = styled(ark.button, buttonRecipe);

type ButtonProps = Assign<
	HTMLStyledProps<"button">,
	ButtonRecipeVariantProps & PolymorphicProps
>;
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		const api = useButtonGroupContext();

		const mergedProps = {
			...api,
			...props,
		};

		return <ButtonBase ref={ref} {...mergedProps} />;
	},
);
Button.displayName = "Button";
