import { SignaturePad } from "@ark-ui/react/signature-pad";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { signaturePadRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(signaturePadRecipe);

export const SignaturePadRootProvider = withProvider(
	SignaturePad.RootProvider,
	"root",
);
SignaturePadRootProvider.displayName = "SignaturePadRootProvider";

export const SignaturePadRoot = withProvider(SignaturePad.Root, "root");
SignaturePadRoot.displayName = "SignaturePadRoot";

export const SignaturePadClearTrigger = withContext(
	SignaturePad.ClearTrigger,
	"clearTrigger",
);
SignaturePadClearTrigger.displayName = "SignaturePadClearTrigger";

export const SignaturePadContext = SignaturePad.Context;

export const SignaturePadControl = withContext(SignaturePad.Control, "control");
SignaturePadControl.displayName = "SignaturePadControl";

export const SignaturePadGuide = withContext(SignaturePad.Guide, "guide");
SignaturePadGuide.displayName = "SignaturePadGuide";

export const SignaturePadHiddenInput = SignaturePad.HiddenInput;
SignaturePadHiddenInput.displayName = "SignaturePadHiddenInput";

export const SignaturePadLabel = withContext(SignaturePad.Label, "label");
SignaturePadLabel.displayName = "SignaturePadLabel";

export const SignaturePadSegment = withContext(SignaturePad.Segment, "segment");
SignaturePadSegment.displayName = "SignaturePadSegment";
