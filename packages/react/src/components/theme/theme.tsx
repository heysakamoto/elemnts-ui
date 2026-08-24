import { type Assign, ark } from "@ark-ui/react";
import { forwardRef } from "react";

import { cx } from "../../../styled-system/css";
import { type HTMLStyledProps, styled } from "../../../styled-system/jsx";
import { themeRecipe } from "../../../styled-system/recipes";

type ThemeAppearance = "light" | "dark";

const Styled = styled(ark.div, themeRecipe);

type ThemeProps = Assign<
	HTMLStyledProps<"div">,
	{ appearance?: ThemeAppearance }
>;
export const Theme = forwardRef<HTMLDivElement, ThemeProps>((props, ref) => {
	const { appearance, className, ...restProps } = props;

	return (
		<Styled
			ref={ref}
			{...restProps}
			data-color-scheme={appearance}
			className={cx(appearance, className)}
		/>
	);
});

Theme.displayName = "Theme";
