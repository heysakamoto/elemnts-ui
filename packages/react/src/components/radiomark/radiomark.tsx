import { ark, type HTMLProps } from "@ark-ui/react/factory";
import { styled } from "@moto-ui/styled-system/jsx";
import { radiomarkRecipe } from "@moto-ui/styled-system/recipes";
import type React from "react";

export const Radiomark = styled(
	(
		props: HTMLProps<"span"> &
			React.RefAttributes<HTMLSpanElement> & {
				checked?: boolean;
				disabled?: boolean;
			},
	) => {
		const { checked = false, disabled = false, ...rest } = props;

		return (
			<ark.span
				aria-checked={checked}
				aria-disabled={disabled}
				data-checked={checked ? "" : undefined}
				data-disabled={disabled ? "" : undefined}
				data-state={checked ? "checked" : "unchecked"}
				{...rest}
			/>
		);
	},
	radiomarkRecipe,
);
Radiomark.displayName = "radiomark";
