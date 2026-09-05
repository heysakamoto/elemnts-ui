import { ark, type HTMLArkProps } from "@ark-ui/react";
import { forwardRef } from "react";
import { createStyleContext } from "../../styled-system/jsx";
import { skipNavRecipe } from "../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(skipNavRecipe);

export const SkipNavRoot = withProvider(ark.div, "root", {
	dataAttr: true,
	defaultProps: {
		"data-part": "root",
		"data-scope": "skip-nav",
	},
});
SkipNavRoot.displayName = "SkipNavRoot";

type SkipNavLinkProps = HTMLArkProps<"a">;
export const SkipNavLink = withContext(
	forwardRef<HTMLAnchorElement, SkipNavLinkProps>((props, ref) => {
		const { id = "Elemnts-skip-nav", ...restProps } = props;

		return <ark.a id={id} ref={ref} href={`#${id}`} {...restProps} />;
	}),
	"link",
	{
		dataAttr: true,
		defaultProps: {
			"data-part": "link",
			"data-scope": "skip-nav",
		},
	},
);
SkipNavLink.displayName = "SkipNavLink";

type SkipNavContentProps = HTMLArkProps<"div">;
export const SkipNavContent = withContext(
	forwardRef<HTMLDivElement, SkipNavContentProps>((props, ref) => {
		const { id = "Elemnts-skip-nav", ...restProps } = props;

		return <ark.div id={id} ref={ref} tabIndex={-1} {...restProps} />;
	}),
	"content",
	{
		dataAttr: true,
		defaultProps: {
			"data-part": "content",
			"data-scope": "skip-nav",
		},
	},
);
SkipNavContent.displayName = "SkipNavContent";
