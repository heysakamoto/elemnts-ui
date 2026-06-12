import type { ComponentProps } from "react";
import {
	SurfaceAddon,
	SurfaceContent,
	SurfaceDescription,
	SurfaceFooter,
	SurfaceHeader,
	SurfaceRoot,
	SurfaceTitle,
} from "./surface";

export type SurfaceContentProps = ComponentProps<typeof SurfaceContent>;
export type SurfaceDescriptionProps = ComponentProps<typeof SurfaceDescription>;
export type SurfaceFooterProps = ComponentProps<typeof SurfaceFooter>;
export type SurfaceHeaderProps = ComponentProps<typeof SurfaceHeader>;
export type SurfaceRootProps = ComponentProps<typeof SurfaceRoot>;
export type SurfaceTitleProps = ComponentProps<typeof SurfaceTitle>;
export type SurfaceAddonProps = ComponentProps<typeof SurfaceAddon>;

export const Surface = Object.assign(SurfaceRoot, {
	Content: SurfaceContent,
	Description: SurfaceDescription,
	Footer: SurfaceFooter,
	Header: SurfaceHeader,
	Root: SurfaceRoot,
	Title: SurfaceTitle,
	Addon: SurfaceAddon,
});

export type Surface = {
	Props: SurfaceRootProps;
	ContentProps: SurfaceContentProps;
	DescriptionProps: SurfaceDescriptionProps;
	FooterProps: SurfaceFooterProps;
	HeaderProps: SurfaceHeaderProps;
	RootProps: SurfaceRootProps;
	TitleProps: SurfaceTitleProps;
	AddonProps: SurfaceAddonProps;
};

export {
	SurfaceAddon,
	SurfaceContent,
	SurfaceDescription,
	SurfaceFooter,
	SurfaceHeader,
	SurfaceRoot,
	SurfaceTitle,
};
