import { type Assign, ark, type HTMLArkProps } from "@ark-ui/react";
import { type HTMLStyledProps, styled } from "@moto-ui/styled-system/jsx";
import {
	type ButtonRecipeVariantProps,
	buttonRecipe,
} from "@moto-ui/styled-system/recipes";
import { forwardRef } from "react";
import { useButtonGroupContext } from "./button-group";

const Styled = styled(ark.button, buttonRecipe);

type ButtonProps = Assign<
	HTMLArkProps<"div">,
	HTMLStyledProps<"button"> & ButtonRecipeVariantProps
>;
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		const api = useButtonGroupContext();

		const mergedProps = {
			...api,
			...props,
		};

		return (
			<Styled
				ref={ref}
				{...mergedProps}
			/>
		);
	},
);
Button.displayName = "Button";
