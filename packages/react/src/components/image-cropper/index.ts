import type { ComponentProps } from "react";
import {
	ImageCropperContext,
	ImageCropperGrid,
	ImageCropperHandle,
	ImageCropperHandles,
	ImageCropperImage,
	ImageCropperRoot,
	ImageCropperRootProvider,
	ImageCropperSelection,
	ImageCropperViewport,
} from "./image-cropper";

export type ImageCropperRootProviderProps = ComponentProps<
	typeof ImageCropperRootProvider
>;
export type ImageCropperRootProps = ComponentProps<typeof ImageCropperRoot>;
export type ImageCropperViewportProps = ComponentProps<
	typeof ImageCropperViewport
>;
export type ImageCropperSelectionProps = ComponentProps<
	typeof ImageCropperSelection
>;
export type ImageCropperHandleProps = ComponentProps<typeof ImageCropperHandle>;
export type ImageCropperGridProps = ComponentProps<typeof ImageCropperGrid>;
export type ImageCropperImageProps = ComponentProps<typeof ImageCropperImage>;
export type ImageCropperContextProps = ComponentProps<
	typeof ImageCropperContext
>;

export type ImageCropperHandlesProps = typeof ImageCropperHandles;

export const ImageCropper = Object.assign(ImageCropperRoot, {
	Root: ImageCropperRoot,
	RootProvider: ImageCropperRootProvider,
	handles: ImageCropperHandles,
	Viewport: ImageCropperViewport,
	Selection: ImageCropperSelection,
	Handle: ImageCropperHandle,
	Grid: ImageCropperGrid,
	Image: ImageCropperImage,
	Context: ImageCropperContext,
});

export type ImageCropper = {
	Props: ImageCropperRootProps;
	RootProps: ImageCropperRootProps;
	RootProviderProps: ImageCropperRootProviderProps;
	handles: ImageCropperHandlesProps;
	ViewportProps: ImageCropperViewportProps;
	SelectionProps: ImageCropperSelectionProps;
	HandleProps: ImageCropperHandleProps;
	GridProps: ImageCropperGridProps;
	ImageProps: ImageCropperImageProps;
	ContextProps: ImageCropperContextProps;
};

export type {
	UseImageCropperContext,
	UseImageCropperProps,
	UseImageCropperReturn,
} from "@ark-ui/react/image-cropper";

export {
	useImageCropper,
	useImageCropperContext,
} from "@ark-ui/react/image-cropper";

export {
	ImageCropperContext,
	ImageCropperGrid,
	ImageCropperHandle,
	ImageCropperImage,
	ImageCropperRoot,
	ImageCropperRootProvider,
	ImageCropperSelection,
	ImageCropperViewport,
};
