import { Clipboard } from "@ark-ui/react/clipboard";

import { createStyleContext } from "../../../styled-system/jsx";
import { clipboardRecipe } from "../../../styled-system/recipes";
import { Icon } from "../icon";

const { withProvider, withContext } = createStyleContext(clipboardRecipe);

export const ClipboardRootProvider = withProvider(
	Clipboard.RootProvider,
	"root",
);
ClipboardRootProvider.displayName = "ClipboardRootProvider";

export const ClipboardRoot = withProvider(Clipboard.Root, "root");
ClipboardRoot.displayName = "ClipboardRoot";

export const ClipboardLabel = withContext(Clipboard.Label, "label");
ClipboardLabel.displayName = "ClipboardLabel";

export const ClipboardControl = withContext(Clipboard.Control, "control");
ClipboardControl.displayName = "ClipboardControl";

export const ClipboardInput = withContext(Clipboard.Input, "input");
ClipboardInput.displayName = "ClipboardInput";

export const ClipboardTrigger = withContext(Clipboard.Trigger, "trigger");
ClipboardTrigger.displayName = "ClipboardTrigger";

export const ClipboardIndicator = withContext(
	Clipboard.Indicator,
	"indicator",
	{
		defaultProps: {
			copied: (
				<Icon
					icon="tabler:check"
					width={14}
					height={14}
				/>
			),
			children: (
				<Icon
					icon="tabler:copy"
					width={14}
					height={14}
				/>
			),
		},
	},
);
ClipboardIndicator.displayName = "ClipboardIndicator";

export const ClipboardValueText = withContext(Clipboard.ValueText, "valueText");
ClipboardValueText.displayName = "ClipboardValueText";

export const ClipboardContext = Clipboard.Context;
