import { ark, type HTMLProps } from "@ark-ui/react/factory";
import { styled } from "@moto-ui/styled-system/jsx";
import { checkmarkRecipe } from "@moto-ui/styled-system/recipes";
import type React from "react";

export const Checkmark = styled(
	(
		props: HTMLProps<"div"> & {
			checked?: boolean;
			disabled?: boolean;
			indeterminate?: boolean;
			fallback?: React.ReactNode;
			ref?: React.Ref<HTMLDivElement>;
		},
	) => {
		const { checked, children, indeterminate, disabled, fallback, ...rest } =
			props;

		return (
			<ark.div
				aria-checked={checked}
				aria-disabled={disabled}
				data-checked={checked ? "" : undefined}
				data-disabled={disabled ? "" : undefined}
				data-indeterminate={checked || indeterminate ? "" : undefined}
				data-state={
					checked ? "checked" : indeterminate ? "indeterminate" : "unchecked"
				}
				{...rest}
			>
				{indeterminate ? fallback : checked ? children : null}
			</ark.div>
		);
	},
	checkmarkRecipe,
);
Checkmark.displayName = "Checkmark";
