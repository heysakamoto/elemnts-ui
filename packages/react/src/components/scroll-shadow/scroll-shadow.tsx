import { type ComponentProps, forwardRef } from "react";

import { useScrollShadow } from "./client";
import { styled } from "../../../styled-system/jsx";
import { scrollShadowRecipe } from "../../../styled-system/recipes";

const Styled = styled("div", scrollShadowRecipe);

type ScrollShadowBaseProps = ComponentProps<typeof Styled> & {
	size?: number;
};

export const ScrollShadow = forwardRef<HTMLDivElement, ScrollShadowBaseProps>(
	(props, forwardedRef) => {
		const { size = 40, style = {}, ...rest } = props;

    const {
      ref,
      atTop,
      atLeft,
      atRight,
      atBottom,
      hasOverflowY,
      hasOverflowX,
    } = useScrollShadow<HTMLDivElement>();

		const STYLE = {
			"--scroll-shadow-size": `${size}px`,
			...style,
		};

		const dataset = {
			"data-shadow-size": size,
			"data-overflow-x": hasOverflowX || undefined,
			"data-overflow-y": hasOverflowY || undefined,
			"data-at-top": hasOverflowY && atTop ? "" : undefined,
			"data-at-left": hasOverflowX && atLeft ? "" : undefined,
			"data-at-right": hasOverflowX && atRight ? "" : undefined,
			"data-at-bottom": hasOverflowY && atBottom ? "" : undefined,
		};

		return (
			<Styled
				ref={(node) => {
					ref.current = node;

					if (typeof forwardedRef === "function") {
						forwardedRef(node);
					} else if (forwardedRef) {
						forwardedRef.current = node;
					}
				}}
				style={STYLE}
				{...dataset}
				{...rest}
			/>
		);
	},
);

ScrollShadow.displayName = "ScrollShadow";
