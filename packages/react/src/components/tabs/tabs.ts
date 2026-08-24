import { Tabs } from "@ark-ui/react/tabs";

import { createStyleContext } from "../../../styled-system/jsx";
import { tabsRecipe } from "../../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(tabsRecipe);

export const TabsRootProvider = withProvider(Tabs.RootProvider, "root");
TabsRootProvider.displayName = "TabsRootProvider";

export const TabsRoot = withProvider(Tabs.Root, "root");
TabsRoot.displayName = "TabsRoot";

export const TabsContent = withContext(Tabs.Content, "content");
TabsContent.displayName = "TabsContent";

export const TabsContext = Tabs.Context;

export const TabsIndicator = withContext(Tabs.Indicator, "indicator");
TabsIndicator.displayName = "TabsIndicator";

export const TabsList = withContext(Tabs.List, "list");
TabsList.displayName = "TabsList";

export const TabsPanel = withContext("div", "panel");
TabsPanel.displayName = "TabsPanel";

export const TabsTrigger = withContext(Tabs.Trigger, "trigger");
TabsTrigger.displayName = "TabsTrigger";
