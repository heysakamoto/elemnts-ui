import { type Assign, ark, type PolymorphicProps } from "@ark-ui/react";
import { type HTMLStyledProps, styled } from "@moto-ui/styled-system/jsx";
import {
	type ButtonRecipeVariantProps,
	buttonRecipe,
} from "@moto-ui/styled-system/recipes";
import { forwardRef } from "react";

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

		return (
			<ButtonBase
				ref={ref}
				{...mergedProps}
			/>
		);
	},
);
Button.displayName = "Button";
