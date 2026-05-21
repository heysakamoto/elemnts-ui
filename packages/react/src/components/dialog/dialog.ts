import { Dialog } from "@ark-ui/react/dialog";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { dialogRecipe } from "@moto-ui/styled-system/recipes";

const { withRootProvider, withContext } = createStyleContext(dialogRecipe);

export const DialogRootProvider = withRootProvider(Dialog.RootProvider);
DialogRootProvider.displayName = "DialogRootProvider";

export const DialogRoot = withRootProvider(Dialog.Root);
DialogRoot.displayName = "DialogRoot";

export const DialogTrigger = withContext(Dialog.Trigger, "trigger");
DialogTrigger.displayName = "DialogTrigger";

export const DialogBackdrop = withContext(Dialog.Backdrop, "backdrop");
DialogBackdrop.displayName = "DialogBackdrop";

export const DialogPositioner = withContext(Dialog.Positioner, "positioner");
DialogPositioner.displayName = "DialogPositioner";

export const DialogContent = withContext(Dialog.Content, "content");
DialogContent.displayName = "DialogContent";

export const DialogTitle = withContext(Dialog.Title, "title");
DialogTitle.displayName = "DialogTitle";

export const DialogDescription = withContext(Dialog.Description, "description");
DialogDescription.displayName = "DialogDescription";

export const DialogCloseTrigger = withContext(
	Dialog.CloseTrigger,
	"closeTrigger",
);
DialogCloseTrigger.displayName = "DialogCloseTrigger";

export const DialogContext = Dialog.Context;
