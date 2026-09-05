import { ark, type HTMLProps } from "@ark-ui/react/factory";
import type React from "react";
import { styled } from "../../styled-system/jsx";
import { checkmarkRecipe } from "../../styled-system/recipes";
import { Icon } from "../icon";

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
	{
		defaultProps: {
			fallback: <Icon icon="tabler:minus" width="12" height="12" />,
			children: <Icon icon="tabler:check" width="12" height="12" />,
		},
	},
);
Checkmark.displayName = "Checkmark";
