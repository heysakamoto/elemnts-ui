import { Marquee } from "@ark-ui/react";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { marqueeRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(marqueeRecipe);

export const MarqueeRootProvider = withProvider(Marquee.RootProvider, "root");
MarqueeRootProvider.displayName = "MarqueeRootProvider";

export const MarqueeRoot = withProvider(Marquee.Root, "root");
MarqueeRoot.displayName = "MarqueeRoot";

export const MarqueeContent = withContext(Marquee.Content, "content");
MarqueeContent.displayName = "MarqueeContent";

export const MarqueeEdge = withContext(Marquee.Edge, "edge");
MarqueeEdge.displayName = "MarqueeEdge";

export const MarqueeItem = withContext(Marquee.Item, "item");
MarqueeItem.displayName = "MarqueeItem";

export const MarqueeViewport = withContext(Marquee.Viewport, "viewport");
MarqueeViewport.displayName = "MarqueeViewport";

export const MarqueeContext = Marquee.Context;
