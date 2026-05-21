import { QrCode } from "@ark-ui/react/qr-code";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { qrCodeRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(qrCodeRecipe);

export const QrCodeRootProvider = withProvider(QrCode.RootProvider, "root");
QrCodeRootProvider.displayName = "QrCodeRootProvider";

export const QrCodeRoot = withProvider(QrCode.Root, "root");
QrCodeRoot.displayName = "QrCodeRoot";

export const QrCodeContext = QrCode.Context;

export const QrCodeDownloadTrigger = withContext(
	QrCode.DownloadTrigger,
	"downloadTrigger",
);
QrCodeDownloadTrigger.displayName = "QrCodeDownloadTrigger";

export const QrCodeFrame = withContext(QrCode.Frame, "frame");
QrCodeFrame.displayName = "QrCodeFrame";

export const QrCodeOverlay = withContext(QrCode.Overlay, "overlay");
QrCodeOverlay.displayName = "QrCodeOverlay";

export const QrCodePattern = withContext(QrCode.Pattern, "pattern");
QrCodePattern.displayName = "QrCodePattern";
