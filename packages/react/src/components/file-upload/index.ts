import type { ComponentProps } from "react";
import {
	FileUploadClearTrigger,
	FileUploadContext,
	FileUploadDropzone,
	FileUploadHiddenInput,
	FileUploadItem,
	FileUploadItemDeleteTrigger,
	FileUploadItemGroup,
	FileUploadItemName,
	FileUploadItemPreview,
	FileUploadItemPreviewImage,
	FileUploadItemSizeText,
	FileUploadLabel,
	FileUploadRoot,
	FileUploadRootProvider,
	FileUploadTrigger,
} from "./file-upload";

export type FileUploadClearTriggerProps = ComponentProps<
	typeof FileUploadClearTrigger
>;
export type FileUploadContextProps = ComponentProps<typeof FileUploadContext>;
export type FileUploadDropzoneProps = ComponentProps<typeof FileUploadDropzone>;
export type FileUploadHiddenInputProps = ComponentProps<
	typeof FileUploadHiddenInput
>;
export type FileUploadItemProps = ComponentProps<typeof FileUploadItem>;
export type FileUploadItemDeleteTriggerProps = ComponentProps<
	typeof FileUploadItemDeleteTrigger
>;
export type FileUploadItemGroupProps = ComponentProps<
	typeof FileUploadItemGroup
>;
export type FileUploadItemNameProps = ComponentProps<typeof FileUploadItemName>;
export type FileUploadItemPreviewProps = ComponentProps<
	typeof FileUploadItemPreview
>;
export type FileUploadItemPreviewImageProps = ComponentProps<
	typeof FileUploadItemPreviewImage
>;
export type FileUploadItemSizeTextProps = ComponentProps<
	typeof FileUploadItemSizeText
>;
export type FileUploadLabelProps = ComponentProps<typeof FileUploadLabel>;
export type FileUploadRootProps = ComponentProps<typeof FileUploadRoot>;
export type FileUploadRootProviderProps = ComponentProps<
	typeof FileUploadRootProvider
>;
export type FileUploadTriggerProps = ComponentProps<typeof FileUploadTrigger>;

export const FileUpload = Object.assign(FileUploadRoot, {
	ClearTrigger: FileUploadClearTrigger,
	Context: FileUploadContext,
	Dropzone: FileUploadDropzone,
	HiddenInput: FileUploadHiddenInput,
	Item: FileUploadItem,
	ItemDeleteTrigger: FileUploadItemDeleteTrigger,
	ItemGroup: FileUploadItemGroup,
	ItemName: FileUploadItemName,
	ItemPreview: FileUploadItemPreview,
	ItemPreviewImage: FileUploadItemPreviewImage,
	ItemSizeText: FileUploadItemSizeText,
	Label: FileUploadLabel,
	Root: FileUploadRoot,
	RootProvider: FileUploadRootProvider,
	Trigger: FileUploadTrigger,
});

export type FileUpload = {
	RootProviderProps: FileUploadRootProviderProps;
	ClearTriggerProps: FileUploadClearTriggerProps;
	ContextProps: FileUploadContextProps;
	DropzoneProps: FileUploadDropzoneProps;
	HiddenInputProps: FileUploadHiddenInputProps;
	ItemProps: FileUploadItemProps;
	ItemDeleteTriggerProps: FileUploadItemDeleteTriggerProps;
	ItemGroupProps: FileUploadItemGroupProps;
	ItemNameProps: FileUploadItemNameProps;
	ItemPreviewProps: FileUploadItemPreviewProps;
	ItemPreviewImageProps: FileUploadItemPreviewImageProps;
	ItemSizeTextProps: FileUploadItemSizeTextProps;
	LabelProps: FileUploadLabelProps;
	RootProps: FileUploadRootProps;
	TriggerProps: FileUploadTriggerProps;
	Props: FileUploadRootProps;
};

export type {
	FileUploadFileAcceptDetails,
	FileUploadFileChangeDetails,
	FileUploadFileRejectDetails,
	UseFileUploadContext,
	UseFileUploadProps,
	UseFileUploadReturn,
} from "@ark-ui/react/file-upload";

export { useFileUpload, useFileUploadContext } from "@ark-ui/react/file-upload";

export {
	FileUploadClearTrigger,
	FileUploadContext,
	FileUploadDropzone,
	FileUploadHiddenInput,
	FileUploadItem,
	FileUploadItemDeleteTrigger,
	FileUploadItemGroup,
	FileUploadItemName,
	FileUploadItemPreview,
	FileUploadItemPreviewImage,
	FileUploadItemSizeText,
	FileUploadLabel,
	FileUploadRoot,
	FileUploadRootProvider,
	FileUploadTrigger,
};
