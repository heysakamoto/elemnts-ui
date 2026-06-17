import { type Assign, ark } from "@ark-ui/react";
import { cx } from "@moto-ui/styled-system/css";
import { type HTMLStyledProps, styled } from "@moto-ui/styled-system/jsx";
import { themeRecipe } from "@moto-ui/styled-system/recipes";
import { forwardRef } from "react";

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
