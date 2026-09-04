import { ark } from "@ark-ui/react";
import { Accordion } from "@ark-ui/react/accordion";
import { createStyleContext } from "../../styled-system/jsx";
import { accordionRecipe } from "../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(accordionRecipe);

export const AccordionRootProvider = withProvider(
	Accordion.RootProvider,
	"root",
);
AccordionRootProvider.displayName = "AccordionRootProvider";

export const AccordionRoot = withProvider(Accordion.Root, "root");
AccordionRoot.displayName = "AccordionRoot";

export const AccordionItem = withContext(Accordion.Item, "item");
AccordionItem.displayName = "AccordionItem";

export const AccordionItemTrigger = withContext(
	Accordion.ItemTrigger,
	"itemTrigger",
);
AccordionItemTrigger.displayName = "AccordionItemTrigger";

export const AccordionSeparator = withContext(ark.div, "separator");
AccordionSeparator.displayName = "AccordionSeparator";

export const AccordionItemContent = withContext(
	Accordion.ItemContent,
	"itemContent",
);
AccordionItemContent.displayName = "AccordionItemContent";

export const AccordionItemIndicator = withContext(
	Accordion.ItemIndicator,
	"itemIndicator",
);
AccordionItemIndicator.displayName = "AccordionItemIndicator";

export const AccordionItemContext = Accordion.ItemContext;

export const AccordionContext = Accordion.Context;
