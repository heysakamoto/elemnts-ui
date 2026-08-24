import { ark, type HTMLArkProps } from "@ark-ui/react";
import type React from "react";

import { styled } from "../../../styled-system/jsx";
import { tagRecipe } from "../../../styled-system/recipes";

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
