import { ark, type HTMLArkProps } from "@ark-ui/react";
import { styled } from "@moto-ui/styled-system/jsx";
import { tagRecipe } from "@moto-ui/styled-system/recipes";
import type React from "react";

export const Tag = styled(
	(
		props: HTMLArkProps<"div"> &
			React.RefAttributes<HTMLDivElement> & {
				disabled?: boolean;
				selected?: boolean;
			},
	) => {
		const { disabled, selected, ...rest } = props;

		return (
			<ark.div
				aria-disabled={disabled}
				aria-selected={selected}
				data-disabled={disabled ? true : undefined}
				data-selected={selected ? true : undefined}
				{...rest}
			/>
		);
	},
	tagRecipe,
);
Tag.displayName = "Tag";
