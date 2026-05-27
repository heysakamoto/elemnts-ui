import { ark } from "@ark-ui/react";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { blockquoteRecipe } from "@moto-ui/styled-system/recipes";

export const { withProvider, withContext } =
	createStyleContext(blockquoteRecipe);

export const BlockquoteRoot = withProvider(ark.figure, "root", {
	dataAttr: true,
	defaultProps: {
		"data-part": "root",
		"data-scope": "blockquote",
	},
});

export const BlockquoteContent = withContext(ark.blockquote, "content", {
	dataAttr: true,
	defaultProps: {
		"data-part": "content",
		"data-scope": "blockquote",
	},
});

export const BlockquoteCite = withContext(ark.cite, "cite", {
	dataAttr: true,
	defaultProps: {
		"data-part": "cite",
		"data-scope": "blockquote",
	},
});

export const BlockquoteCaption = withContext(ark.figcaption, "caption", {
	dataAttr: true,
	defaultProps: {
		"data-part": "caption",
		"data-scope": "blockquote",
	},
});

export const BlockquoteIndicator = withContext(ark.span, "indicator", {
	dataAttr: true,
	defaultProps: {
		"data-part": "indicator",
		"data-scope": "blockquote",
	},
});
