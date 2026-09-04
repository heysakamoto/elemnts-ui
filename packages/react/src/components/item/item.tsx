import { ark, type HTMLArkProps } from "@ark-ui/react";
import type React from "react";
import { styled } from "../../styled-system/jsx";
import { itemRecipe } from "../../styled-system/recipes";

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
