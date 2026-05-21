import type { ComponentProps } from "react";
import {
	TileContent,
	TileControl,
	TileDescription,
	TileIndicator,
	TileRoot,
	TileTitle,
} from "./tile";

export type TileContentProps = ComponentProps<typeof TileContent>;
export type TileControlProps = ComponentProps<typeof TileControl>;
export type TileDescriptionProps = ComponentProps<typeof TileDescription>;
export type TileRootProps = ComponentProps<typeof TileRoot>;
export type TileTitleProps = ComponentProps<typeof TileTitle>;
export type TileIndicatorProps = ComponentProps<typeof TileIndicator>;

export const Tile = Object.assign(TileRoot, {
	Content: TileContent,
	Description: TileDescription,
	Root: TileRoot,
	Title: TileTitle,
	Indicator: TileIndicator,
	Control: TileControl,
});

export type Tile = {
	Props: TileRootProps;
	ContentProps: TileContentProps;
	ControlProps: TileControlProps;
	DescriptionProps: TileDescriptionProps;
	TitleProps: TileTitleProps;
	RootProps: TileRootProps;
	IndicatorProps: TileIndicatorProps;
};

export {
	TileContent,
	TileDescription,
	TileRoot,
	TileTitle,
	TileIndicator,
	TileControl,
};
