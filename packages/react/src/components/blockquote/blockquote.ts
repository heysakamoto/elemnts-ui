import { ark } from "@ark-ui/react";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { blockquoteRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(blockquoteRecipe);

export const BlockquoteRoot = withProvider(ark.figure, "root", {
	dataAttr: true,
	defaultProps: {
		"data-part": "root",
		"data-scope": "blockquote",
	},
});
BlockquoteRoot.displayName = "BlockquoteRoot";

export const BlockquoteContent = withContext(ark.blockquote, "content", {
	dataAttr: true,
	defaultProps: {
		"data-part": "content",
		"data-scope": "blockquote",
	},
});
BlockquoteContent.displayName = "BlockquoteContent";

export const BlockquoteCite = withContext(ark.cite, "cite", {
	dataAttr: true,
	defaultProps: {
		"data-part": "cite",
		"data-scope": "blockquote",
	},
});
BlockquoteCite.displayName = "BlockquoteCite";

export const BlockquoteCaption = withContext(ark.figcaption, "caption", {
	dataAttr: true,
	defaultProps: {
		"data-part": "caption",
		"data-scope": "blockquote",
	},
});
BlockquoteCaption.displayName = "BlockquoteCaption";

export const BlockquoteIndicator = withContext(ark.span, "indicator", {
	dataAttr: true,
	defaultProps: {
		"data-part": "indicator",
		"data-scope": "blockquote",
	},
});
BlockquoteIndicator.displayName = "BlockquoteIndicator";
