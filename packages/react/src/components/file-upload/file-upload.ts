import { FileUpload } from "@ark-ui/react/file-upload";

import { createStyleContext } from "../../../styled-system/jsx";
import { fileUploadRecipe } from "../../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(fileUploadRecipe);

export const FileUploadRootProvider = withProvider(
	FileUpload.RootProvider,
	"root",
);
FileUploadRootProvider.displayName = "FileUploadRootProvider";

export const FileUploadRoot = withProvider(FileUpload.Root, "root");
FileUploadRoot.displayName = "FileUploadRoot";

export const FileUploadClearTrigger = withContext(
	FileUpload.ClearTrigger,
	"clearTrigger",
);
FileUploadClearTrigger.displayName = "FileUploadClearTrigger";

export const FileUploadContext = FileUpload.Context;

export const FileUploadDropzone = withContext(FileUpload.Dropzone, "dropzone");
FileUploadDropzone.displayName = "FileUploadDropzone";

export const FileUploadHiddenInput = FileUpload.HiddenInput;

export const FileUploadItem = withContext(FileUpload.Item, "item");
FileUploadItem.displayName = "FileUploadItem";

export const FileUploadItemDeleteTrigger = withContext(
	FileUpload.ItemDeleteTrigger,
	"itemDeleteTrigger",
);
FileUploadItemDeleteTrigger.displayName = "FileUploadItemDeleteTrigger";

export const FileUploadItemGroup = withContext(
	FileUpload.ItemGroup,
	"itemGroup",
);
FileUploadItemGroup.displayName = "FileUploadItemGroup";

export const FileUploadItemName = withContext(FileUpload.ItemName, "itemName");
FileUploadItemName.displayName = "FileUploadItemName";

export const FileUploadItemPreview = withContext(
	FileUpload.ItemPreview,
	"itemPreview",
);
FileUploadItemPreview.displayName = "FileUploadItemPreview";

export const FileUploadItemPreviewImage = withContext(
	FileUpload.ItemPreviewImage,
	"itemPreviewImage",
);
FileUploadItemPreviewImage.displayName = "FileUploadItemPreviewImage";

export const FileUploadItemSizeText = withContext(
	FileUpload.ItemSizeText,
	"itemSizeText",
);
FileUploadItemSizeText.displayName = "FileUploadItemSizeText";

export const FileUploadLabel = withContext(FileUpload.Label, "label");
FileUploadLabel.displayName = "FileUploadLabel";

export const FileUploadTrigger = withContext(FileUpload.Trigger, "trigger");
FileUploadTrigger.displayName = "FileUploadTrigger";
