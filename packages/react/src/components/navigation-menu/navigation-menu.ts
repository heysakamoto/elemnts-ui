import { NavigationMenu } from "@ark-ui/react/navigation-menu";
import { createStyleContext } from "../../styled-system/jsx";
import { navigationMenuRecipe } from "../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(navigationMenuRecipe);

export const NavigationMenuRootProvider = withProvider(
	NavigationMenu.RootProvider,
	"root",
);
NavigationMenuRootProvider.displayName = "NavigationMenuRootProvider";

export const NavigationMenuRoot = withContext(NavigationMenu.Root, "root");
NavigationMenuRoot.displayName = "NavigationMenuRoot";

export const NavigationMenuArrow = withContext(NavigationMenu.Arrow, "root");
NavigationMenuArrow.displayName = "NavigationMenuArrow";

export const NavigationMenuContent = withContext(
	NavigationMenu.Content,
	"content",
);
NavigationMenuContent.displayName = "NavigationMenuContent";

export const NavigationMenuIndicator = withContext(
	NavigationMenu.Indicator,
	"indicator",
);
NavigationMenuIndicator.displayName = "NavigationMenuIndicator";

export const NavigationMenuItemIndicator = withContext(
	NavigationMenu.ItemIndicator,
	"itemIndicator",
);
NavigationMenuItemIndicator.displayName = "NavigationMenuItemIndicator";

export const NavigationMenuItem = withContext(NavigationMenu.Item, "item");
NavigationMenuItem.displayName = "NavigationMenuItem";

export const NavigationMenuLink = withContext(NavigationMenu.Link, "link");
NavigationMenuLink.displayName = "NavigationMenuLink";

export const NavigationMenuList = withContext(NavigationMenu.List, "list");
NavigationMenuList.displayName = "NavigationMenuList";

export const NavigationMenuTrigger = withContext(
	NavigationMenu.Trigger,
	"trigger",
);
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

export const NavigationMenuViewportPositioner = withContext(
	NavigationMenu.ViewportPositioner,
	"viewportPositioner",
);
NavigationMenuViewportPositioner.displayName =
	"NavigationMenuViewportPositioner";

export const NavigationMenuViewport = withContext(
	NavigationMenu.Viewport,
	"viewport",
);
NavigationMenuViewport.displayName = "NavigationMenuViewport";

export const NavigationMenuContext = NavigationMenu.Context;
