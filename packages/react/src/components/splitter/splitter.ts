import { Splitter } from "@ark-ui/react/splitter";
import { createStyleContext } from "../../styled-system/jsx";
import { splitterRecipe } from "../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(splitterRecipe);

export const SplitterRootProvider = withProvider(Splitter.RootProvider, "root");
SplitterRootProvider.displayName = "SplitterRootProvider";

export const SplitterRoot = withProvider(Splitter.Root, "root");
SplitterRoot.displayName = "SplitterRoot";

export const SplitterContext = Splitter.Context;

export const SplitterPanel = withContext(Splitter.Panel, "panel");
SplitterPanel.displayName = "SplitterPanel";

export const SplitterResizeTrigger = withContext(
	Splitter.ResizeTrigger,
	"resizeTrigger",
);
SplitterResizeTrigger.displayName = "SplitterResizeTrigger";

export const SplitterResizeTriggerIndicator = withContext(
	Splitter.ResizeTriggerIndicator,
	"resizeTriggerIndicator",
);
SplitterResizeTriggerIndicator.displayName = "SplitterResizeTriggerIndicator";
