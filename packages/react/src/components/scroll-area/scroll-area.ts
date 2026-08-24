import { ScrollArea } from "@ark-ui/react/scroll-area";

import { createStyleContext } from "../../../styled-system/jsx";
import { scrollAreaRecipe } from "../../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(scrollAreaRecipe);

export const ScrollAreaRootProvider = withProvider(
	ScrollArea.RootProvider,
	"root",
);
ScrollAreaRootProvider.displayName = "ScrollAreaRootProvider";

export const ScrollAreaRoot = withProvider(ScrollArea.Root, "root");
ScrollAreaRoot.displayName = "ScrollAreaRoot";

export const ScrollAreaContext = ScrollArea.Context;

export const ScrollAreaViewport = withContext(ScrollArea.Viewport, "viewport");
ScrollAreaViewport.displayName = "ScrollAreaViewport";

export const ScrollAreaContent = withContext(ScrollArea.Content, "content");
ScrollAreaContent.displayName = "ScrollAreaContent";

export const ScrollAreaScrollbar = withContext(
	ScrollArea.Scrollbar,
	"scrollbar",
);
ScrollAreaScrollbar.displayName = "ScrollAreaScrollbar";

export const ScrollAreaThumb = withContext(ScrollArea.Thumb, "thumb");
ScrollAreaThumb.displayName = "ScrollAreaThumb";

export const ScrollAreaCorner = withContext(ScrollArea.Corner, "corner");
ScrollAreaCorner.displayName = "ScrollAreaCorner";
