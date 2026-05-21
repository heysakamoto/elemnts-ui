import type { ComponentProps } from "react";
import {
	QrCodeContext,
	QrCodeDownloadTrigger,
	QrCodeFrame,
	QrCodeOverlay,
	QrCodePattern,
	QrCodeRoot,
	QrCodeRootProvider,
} from "./qr-code";

export type QrCodeRootProviderProps = ComponentProps<typeof QrCodeRootProvider>;
export type QrCodeRootProps = ComponentProps<typeof QrCodeRoot>;
export type QrCodeContextProps = ComponentProps<typeof QrCodeContext>;
export type QrCodeFrameProps = ComponentProps<typeof QrCodeFrame>;
export type QrCodeOverlayProps = ComponentProps<typeof QrCodeOverlay>;
export type QrCodePatternProps = ComponentProps<typeof QrCodePattern>;
export type QrCodeDownloadTriggerProps = ComponentProps<
	typeof QrCodeDownloadTrigger
>;

export const QrCode = Object.assign(QrCodeRoot, {
	Context: QrCodeContext,
	DownloadTrigger: QrCodeDownloadTrigger,
	Frame: QrCodeFrame,
	Overlay: QrCodeOverlay,
	Pattern: QrCodePattern,
	Root: QrCodeRoot,
	RootProvider: QrCodeRootProvider,
});

export type QrCode = {
	RootProviderProps: QrCodeRootProviderProps;
	RootProps: QrCodeRootProps;
	ContextProps: QrCodeContextProps;
	FrameProps: QrCodeFrameProps;
	OverlayProps: QrCodeOverlayProps;
	PatternProps: QrCodePatternProps;
	DownloadTriggerProps: QrCodeDownloadTriggerProps;
	Props: QrCodeRootProps;
};

export type {
	UseQrCodeContext,
	UseQrCodeProps,
	UseQrCodeReturn,
} from "@ark-ui/react/qr-code";

export { useQrCode, useQrCodeContext } from "@ark-ui/react/qr-code";

export {
	QrCodeContext,
	QrCodeDownloadTrigger,
	QrCodeFrame,
	QrCodeOverlay,
	QrCodePattern,
	QrCodeRoot,
	QrCodeRootProvider,
};
