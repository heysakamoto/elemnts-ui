import { ImageCropper } from "@ark-ui/react/image-cropper";

import { createStyleContext } from "../../../styled-system/jsx";
import { imageCropperRecipe } from "../../../styled-system/recipes";

const { withContext, withProvider } = createStyleContext(imageCropperRecipe);

export const ImageCropperRootProvider = withProvider(
	ImageCropper.RootProvider,
	"root",
);
ImageCropperRootProvider.displayName = "ImageCropperRootProvider";

export const ImageCropperRoot = withProvider(ImageCropper.Root, "root", {
	forwardProps: ["aspectRatio"],
});
ImageCropperRoot.displayName = "ImageCropperRoot";

export const ImageCropperViewport = withContext(
	ImageCropper.Viewport,
	"viewport",
);
ImageCropperViewport.displayName = "ImageCropperViewport";

export const ImageCropperSelection = withContext(
	ImageCropper.Selection,
	"selection",
);
ImageCropperSelection.displayName = "ImageCropperSelection";

export const ImageCropperHandle = withContext(ImageCropper.Handle, "handle", {
	forwardProps: ["position"],
});
ImageCropperHandle.displayName = "ImageCropperHandle";

export const ImageCropperGrid = withContext(ImageCropper.Grid, "grid");
ImageCropperGrid.displayName = "ImageCropperGrid";

export const ImageCropperImage = withContext(ImageCropper.Image, "image");
ImageCropperImage.displayName = "ImageCropperImage";

export const ImageCropperContext = ImageCropper.Context;

export const ImageCropperHandles = ImageCropper.handles;
