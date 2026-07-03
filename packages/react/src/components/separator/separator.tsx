import { type Assign, ark, type PolymorphicProps } from "@ark-ui/react";
import { type HTMLStyledProps, styled } from "@moto-ui/styled-system/jsx";
import {
	type SeparatorRecipeVariantProps,
	separatorRecipe,
} from "@moto-ui/styled-system/recipes";
import { forwardRef } from "react";

import { useSeparatorGroupContext } from "./separator-group";

const SeparatorBase = styled(ark.div, separatorRecipe);

type SeparatorProps = Assign<
	HTMLStyledProps<"div">,
	SeparatorRecipeVariantProps & PolymorphicProps
>;
export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
	(props, ref) => {
		const baseVariantProps = useSeparatorGroupContext();

		const mergedProps = { ...baseVariantProps, ...props };

		return (
			<SeparatorBase
				ref={ref}
				{...mergedProps}
			/>
		);
	},
);
