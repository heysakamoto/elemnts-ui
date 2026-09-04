import { Toc } from "@ark-ui/react/toc";
import { createStyleContext } from "../../styled-system/jsx";
import { tocRecipe } from "../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(tocRecipe);

export const TocRootProvider = withProvider(Toc.RootProvider, "root");
TocRootProvider.displayName = "TocRootProvider";

export const TocRoot = withProvider(Toc.Root, "root");
TocRoot.displayName = "TocRoot";

export const TocContent = withContext(Toc.Content, "root");
TocContent.displayName = "TocContent";

export const TocNav = withContext(Toc.Nav, "nav");
TocNav.displayName = "TocNav";

export const TocList = withContext(Toc.List, "list");
TocList.displayName = "TocList";

export const TocItem = withContext(Toc.Item, "item");
TocItem.displayName = "TocItem";

export const TocIndicator = withContext(Toc.Indicator, "indicator");
TocIndicator.displayName = "TocIndicator";

export const TocLink = withContext(Toc.Link, "link");
TocLink.displayName = "TocLink";

export const TocTitle = withContext(Toc.Title, "title");
TocTitle.displayName = "TocTitle";

export const TocContext = Toc.Context;
