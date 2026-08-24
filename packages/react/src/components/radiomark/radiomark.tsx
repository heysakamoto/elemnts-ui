import { ark, type HTMLProps } from "@ark-ui/react/factory";
import type React from "react";

import { styled } from "../../../styled-system/jsx";
import { radiomarkRecipe } from "../../../styled-system/recipes";

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
