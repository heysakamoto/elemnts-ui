import { Menu } from "@ark-ui/react/menu";

import { createStyleContext } from "../../../styled-system/jsx";
import { menuRecipe } from "../../../styled-system/recipes";

const { withRootProvider, withContext } = createStyleContext(menuRecipe);

export const MenuRootProvider = withRootProvider(Menu.RootProvider);
MenuRootProvider.displayName = "MenuRootProvider";

export const MenuRoot = withRootProvider(Menu.Root);
MenuRoot.displayName = "MenuRoot";

export const MenuTrigger = withContext(Menu.Trigger, "trigger");
MenuTrigger.displayName = "MenuTrigger";

export const MenuPositioner = withContext(Menu.Positioner, "positioner");
MenuPositioner.displayName = "MenuPositioner";

export const MenuContent = withContext(Menu.Content, "content");
MenuContent.displayName = "MenuContent";

export const MenuIndicator = withContext(Menu.Indicator, "indicator");
MenuIndicator.displayName = "MenuIndicator";

export const MenuArrow = withContext(Menu.Arrow, "arrow");
MenuArrow.displayName = "MenuArrow";

export const MenuArrowTip = withContext(Menu.ArrowTip, "arrowTip");
MenuArrowTip.displayName = "MenuArrowTip";

export const MenuItem = withContext(Menu.Item, "item");
MenuItem.displayName = "MenuItem";

export const MenuItemGroup = withContext(Menu.ItemGroup, "itemGroup");
MenuItemGroup.displayName = "MenuItemGroup";

export const MenuItemGroupLabel = withContext(
	Menu.ItemGroupLabel,
	"itemGroupLabel",
);
MenuItemGroupLabel.displayName = "MenuItemGroupLabel";

export const MenuItemText = withContext(Menu.ItemText, "itemText");
MenuItemText.displayName = "MenuItemText";

export const MenuItemIndicator = withContext(
	Menu.ItemIndicator,
	"itemIndicator",
);
MenuItemIndicator.displayName = "MenuItemIndicator";

export const MenuSeparator = withContext(Menu.Separator, "separator");
MenuSeparator.displayName = "MenuSeparator";

export const MenuContext = Menu.Context;

export const MenuItemContext = Menu.ItemContext;

export const MenuContextTrigger = withContext(
	Menu.ContextTrigger,
	"contextTrigger",
);
MenuContextTrigger.displayName = "MenuContextTrigger";

export const MenuTriggerItem = withContext(Menu.TriggerItem, "triggerItem");
MenuTriggerItem.displayName = "MenuTriggerItem";

export const MenuRadioItemGroup = withContext(
	Menu.RadioItemGroup,
	"radioItemGroup",
);
MenuRadioItemGroup.displayName = "MenuRadioItemGroup";

export const MenuRadioItem = withContext(Menu.RadioItem, "radioItem");
MenuRadioItem.displayName = "MenuRadioItem";

export const MenuCheckboxItem = withContext(Menu.CheckboxItem, "checkboxItem");
MenuCheckboxItem.displayName = "MenuCheckboxItem";
