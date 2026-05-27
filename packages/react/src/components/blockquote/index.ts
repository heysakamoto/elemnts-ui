import type { ComponentProps } from "react";
import {
	BlockquoteCaption,
	BlockquoteCite,
	BlockquoteContent,
	BlockquoteIndicator,
	BlockquoteRoot,
} from "./blockquote";

export type BlockquoteRootProps = ComponentProps<typeof BlockquoteRoot>;
export type BlockquoteCaptionProps = ComponentProps<typeof BlockquoteCaption>;
export type BlockquoteCiteProps = ComponentProps<typeof BlockquoteCite>;
export type BlockquoteContentProps = ComponentProps<typeof BlockquoteContent>;
export type BlockquoteIndicatorProps = ComponentProps<
	typeof BlockquoteIndicator
>;

export const Blockquote = Object.assign(BlockquoteRoot, {
	Cite: BlockquoteCite,
	Root: BlockquoteRoot,
	Caption: BlockquoteCaption,
	Content: BlockquoteContent,
	Indicator: BlockquoteIndicator,
});

export type Blockquote = {
	Props: BlockquoteRootProps;
	Cite: typeof BlockquoteCite;
	Root: typeof BlockquoteRoot;
	Caption: typeof BlockquoteCaption;
	Content: typeof BlockquoteContent;
	Indicator: typeof BlockquoteIndicator;
};

export {
	BlockquoteRoot,
	BlockquoteCaption,
	BlockquoteCite,
	BlockquoteContent,
	BlockquoteIndicator,
};
