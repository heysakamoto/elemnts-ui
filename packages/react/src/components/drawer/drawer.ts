import { Drawer } from "@ark-ui/react";
import { createStyleContext } from "../../styled-system/jsx";
import { drawerRecipe } from "../../styled-system/recipes";

const { withContext, withRootProvider } = createStyleContext(drawerRecipe);

export const DrawerRootProvider = withRootProvider(Drawer.RootProvider);
DrawerRootProvider.displayName = "DrawerRootProvider";

export const DrawerRoot = withRootProvider(Drawer.Root);
DrawerRoot.displayName = "DrawerRoot";

export const DrawerTrigger = withContext(Drawer.Trigger, "trigger");
DrawerTrigger.displayName = "DrawerTrigger";

export const DrawerContent = withContext(Drawer.Content, "content");
DrawerContent.displayName = "DrawerContent";

export const DrawerTitle = withContext(Drawer.Title, "title");
DrawerTitle.displayName = "DrawerTitle";

export const DrawerDescription = withContext(Drawer.Description, "description");
DrawerDescription.displayName = "DrawerDescription";

export const DrawerBackdrop = withContext(Drawer.Backdrop, "backdrop");
DrawerBackdrop.displayName = "DrawerBackdrop";

export const DrawerPositioner = withContext(Drawer.Positioner, "positioner");
DrawerPositioner.displayName = "DrawerPositioner";

export const DrawerCloseTrigger = withContext(
	Drawer.CloseTrigger,
	"closeTrigger",
);
DrawerCloseTrigger.displayName = "DrawerCloseTrigger";

export const DrawerGrabber = withContext(Drawer.Grabber, "grabber");
DrawerGrabber.displayName = "DrawerGrabber";

export const DrawerGrabberIndicator = withContext(
	Drawer.GrabberIndicator,
	"grabberIndicator",
);
DrawerGrabberIndicator.displayName = "DrawerGrabberIndicator";

export const DrawerIndent = withContext(Drawer.Indent, "indent");
DrawerIndent.displayName = "DrawerIndent";

export const DrawerIndentBackground = withContext(
	Drawer.IndentBackground,
	"indentBackground",
);
DrawerIndentBackground.displayName = "DrawerIndentBackground";

export const DrawerStack = withContext(Drawer.Stack, "stack");
DrawerStack.displayName = "DrawerStack";

export const DrawerSwipeArea = withContext(Drawer.SwipeArea, "swipeArea");
DrawerSwipeArea.displayName = "DrawerSwipeArea";

export const DrawerContext = Drawer.Context;
