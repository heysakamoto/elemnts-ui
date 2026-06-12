import type { ComponentProps } from "react";
import {
	MenuArrow,
	MenuArrowTip,
	MenuCheckboxItem,
	MenuContent,
	MenuContext,
	MenuContextTrigger,
	MenuIndicator,
	MenuItem,
	MenuItemContext,
	MenuItemGroup,
	MenuItemGroupLabel,
	MenuItemIndicator,
	MenuItemText,
	MenuPositioner,
	MenuRadioItem,
	MenuRadioItemGroup,
	MenuRoot,
	MenuRootProvider,
	MenuSeparator,
	MenuTrigger,
	MenuTriggerItem,
} from "./menu";

export type MenuRootProviderProps = ComponentProps<typeof MenuRootProvider>;
export type MenuRootProps = ComponentProps<typeof MenuRoot>;
export type MenuArrowProps = ComponentProps<typeof MenuArrow>;
export type MenuArrowTipProps = ComponentProps<typeof MenuArrowTip>;
export type MenuCheckboxItemProps = ComponentProps<typeof MenuCheckboxItem>;
export type MenuContentProps = ComponentProps<typeof MenuContent>;
export type MenuContextProps = ComponentProps<typeof MenuContext>;
export type MenuContextTriggerProps = ComponentProps<typeof MenuContextTrigger>;
export type MenuItemProps = ComponentProps<typeof MenuItem>;
export type MenuItemContextProps = ComponentProps<typeof MenuItemContext>;
export type MenuItemGroupProps = ComponentProps<typeof MenuItemGroup>;
export type MenuItemGroupLabelProps = ComponentProps<typeof MenuItemGroupLabel>;
export type MenuItemIndicatorProps = ComponentProps<typeof MenuItemIndicator>;
export type MenuItemTextProps = ComponentProps<typeof MenuItemText>;
export type MenuPositionerProps = ComponentProps<typeof MenuPositioner>;
export type MenuRadioItemProps = ComponentProps<typeof MenuRadioItem>;
export type MenuRadioItemGroupProps = ComponentProps<typeof MenuRadioItemGroup>;
export type MenuSeparatorProps = ComponentProps<typeof MenuSeparator>;
export type MenuTriggerProps = ComponentProps<typeof MenuTrigger>;
export type MenuTriggerItemProps = ComponentProps<typeof MenuTriggerItem>;
export type MenuIndicatorProps = ComponentProps<typeof MenuIndicator>;

export const Menu = Object.assign(MenuRoot, {
	RootProvider: MenuRootProvider,
	Root: MenuRoot,
	Arrow: MenuArrow,
	ArrowTip: MenuArrowTip,
	CheckboxItem: MenuCheckboxItem,
	Content: MenuContent,
	Context: MenuContext,
	ContextTrigger: MenuContextTrigger,
	Item: MenuItem,
	ItemContext: MenuItemContext,
	ItemGroup: MenuItemGroup,
	Indicator: MenuIndicator,
	ItemGroupLabel: MenuItemGroupLabel,
	ItemIndicator: MenuItemIndicator,
	ItemText: MenuItemText,
	Positioner: MenuPositioner,
	RadioItem: MenuRadioItem,
	RadioItemGroup: MenuRadioItemGroup,
	Separator: MenuSeparator,
	Trigger: MenuTrigger,
	TriggerItem: MenuTriggerItem,
});

export type Menu = {
	RootProviderProps: MenuRootProviderProps;
	RootProps: MenuRootProps;
	ArrowProps: MenuArrowProps;
	ArrowTipProps: MenuArrowTipProps;
	CheckboxItemProps: MenuCheckboxItemProps;
	ContentProps: MenuContentProps;
	ContextProps: MenuContextProps;
	IndicatorProps: MenuIndicatorProps;
	ContextTriggerProps: MenuContextTriggerProps;
	ItemProps: MenuItemProps;
	ItemContextProps: MenuItemContextProps;
	ItemGroupProps: MenuItemGroupProps;
	ItemGroupLabelProps: MenuItemGroupLabelProps;
	ItemIndicatorProps: MenuItemIndicatorProps;
	ItemTextProps: MenuItemTextProps;
	PositionerProps: MenuPositionerProps;
	RadioItemProps: MenuRadioItemProps;
	RadioItemGroupProps: MenuRadioItemGroupProps;
	SeparatorProps: MenuSeparatorProps;
	TriggerProps: MenuTriggerProps;
	TriggerItemProps: MenuTriggerItemProps;
	Props: MenuRootProps;
};

export type {
	MenuHighlightChangeDetails,
	MenuOpenChangeDetails,
	MenuSelectionDetails,
	MenuValueChangeDetails,
	UseMenuContext,
	UseMenuItemContext,
	UseMenuProps,
	UseMenuReturn,
} from "@ark-ui/react/menu";

export {
	useMenu,
	useMenuContext,
	useMenuItemContext,
} from "@ark-ui/react/menu";

export {
	MenuArrow,
	MenuArrowTip,
	MenuCheckboxItem,
	MenuContent,
	MenuContext,
	MenuContextTrigger,
	MenuIndicator,
	MenuItem,
	MenuItemContext,
	MenuItemGroup,
	MenuItemGroupLabel,
	MenuItemIndicator,
	MenuItemText,
	MenuPositioner,
	MenuRadioItem,
	MenuRadioItemGroup,
	MenuRoot,
	MenuRootProvider,
	MenuSeparator,
	MenuTrigger,
	MenuTriggerItem,
};
