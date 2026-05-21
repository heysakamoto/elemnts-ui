import { ark, type HTMLArkProps } from "@ark-ui/react";
import { styled } from "@moto-ui/styled-system/jsx";
import { itemRecipe } from "@moto-ui/styled-system/recipes";
import type React from "react";

export const Item = styled(
	(
		props: HTMLArkProps<"div"> &
			React.RefAttributes<HTMLDivElement> & {
				selected?: boolean;
				disabled?: boolean;
			},
	) => {
		const { selected, disabled, ...rest } = props;

		return (
			<ark.div
				data-selected={selected ? "" : undefined}
				data-disabled={disabled ? "" : undefined}
				aria-selected={selected ? true : undefined}
				aria-disabled={disabled ? true : undefined}
				{...rest}
			/>
		);
	},
	itemRecipe,
);
Item.displayName = "Item";
