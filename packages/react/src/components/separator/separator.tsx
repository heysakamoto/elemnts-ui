import { type Assign, ark, type PolymorphicProps } from "@ark-ui/react";
import { forwardRef } from "react";
import { type HTMLStyledProps, styled } from "../../styled-system/jsx";
import {
	type SeparatorRecipeVariantProps,
	separatorRecipe,
} from "../../styled-system/recipes";
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

		return <SeparatorBase ref={ref} {...mergedProps} />;
	},
);
