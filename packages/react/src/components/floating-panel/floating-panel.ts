import { FloatingPanel } from "@ark-ui/react/floating-panel";

import { createStyleContext } from "../../../styled-system/jsx";
import { floatingPanelRecipe } from "../../../styled-system/recipes";

const { withRootProvider, withProvider, withContext } =
	createStyleContext(floatingPanelRecipe);

export const FloatingPanelRootProvider = withRootProvider(
	FloatingPanel.RootProvider,
);
FloatingPanelRootProvider.displayName = "FloatingPanelRootProvider";

export const FloatingPanelRoot = withProvider(FloatingPanel.Root, "root");
FloatingPanelRoot.displayName = "FloatingPanelRoot";

export const FloatingPanelTrigger = withContext(
	FloatingPanel.Trigger,
	"trigger",
);
FloatingPanelTrigger.displayName = "FloatingPanelTrigger";

export const FloatingPanelPositioner = withContext(
	FloatingPanel.Positioner,
	"positioner",
);
FloatingPanelPositioner.displayName = "FloatingPanelPositioner";

export const FloatingPanelContent = withContext(
	FloatingPanel.Content,
	"content",
);
FloatingPanelContent.displayName = "FloatingPanelContent";

export const FloatingPanelHeader = withContext(FloatingPanel.Header, "header");
FloatingPanelHeader.displayName = "FloatingPanelHeader";

export const FloatingPanelBody = withContext(FloatingPanel.Body, "body");
FloatingPanelBody.displayName = "FloatingPanelBody";

export const FloatingPanelTitle = withContext(FloatingPanel.Title, "title");
FloatingPanelTitle.displayName = "FloatingPanelTitle";

export const FloatingPanelControl = withContext(
	FloatingPanel.Control,
	"control",
);
FloatingPanelControl.displayName = "FloatingPanelControl";

export const FloatingPanelCloseTrigger = withContext(
	FloatingPanel.CloseTrigger,
	"closeTrigger",
);
FloatingPanelCloseTrigger.displayName = "FloatingPanelCloseTrigger";

export const FloatingPanelDragTrigger = withContext(
	FloatingPanel.DragTrigger,
	"dragTrigger",
);
FloatingPanelDragTrigger.displayName = "FloatingPanelDragTrigger";

export const FloatingPanelResizeTrigger = withContext(
	FloatingPanel.ResizeTrigger,
	"resizeTrigger",
);
FloatingPanelResizeTrigger.displayName = "FloatingPanelResizeTrigger";

export const FloatingPanelStageTrigger = withContext(
	FloatingPanel.StageTrigger,
	"stageTrigger",
);
FloatingPanelStageTrigger.displayName = "FloatingPanelStageTrigger";

export const FloatingPanelContext = FloatingPanel.Context;
