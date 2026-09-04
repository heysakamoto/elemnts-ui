import { type Assign, ark, type PolymorphicProps } from "@ark-ui/react";
import { forwardRef } from "react";
import { type HTMLStyledProps, styled } from "../../styled-system/jsx";
import {
	type KbdRecipeVariantProps,
	kbdRecipe,
} from "../../styled-system/recipes";
import { useKbdGroupContext } from "./kbd-group";

const KbdBase = styled(ark.div, kbdRecipe);

type KbdProps = Assign<
	HTMLStyledProps<"div">,
	KbdRecipeVariantProps & PolymorphicProps
>;
export const Kbd = forwardRef<HTMLDivElement, KbdProps>((props, ref) => {
	const api = useKbdGroupContext();

	const mergedProps = {
		...api,
		...props,
	};

	return (
		<KbdBase
			ref={ref}
			{...mergedProps}
		/>
	);
});
Kbd.displayName = "Kbd";
