import * as AccordionDemos from "./accordion";
import * as AlertDemos from "./alert";
import * as AnchorDemos from "./anchor";
import * as AspectRatioDemos from "./aspect-ratio";
import * as AvatarDemos from "./avatar";
import * as BadgeDemos from "./badge";
import * as BoxDemos from "./box";
import * as ButtonDemos from "./button";
import * as ButtonGroupDemos from "./button-group";
import * as CarouselDemos from "./carousel";
import * as CheckboxDemos from "./checkbox";
import * as CheckmarkDemos from "./checkmark";
import * as ChipDemos from "./chip";
import * as ClipboardDemos from "./clipboard";
import * as CollapsibleDemos from "./collapsible";
import * as ColorPickerDemos from "./color-picker";
import * as ComboboxDemos from "./combobox";
import * as ContainerDemos from "./container";
import * as DatePickerDemos from "./date-picker";
import * as DecorativeBoxDemos from "./decorative-box";
import * as DialogDemos from "./dialog";
import * as DownloadDemos from "./download";
import * as EditableDemos from "./editable";
import * as ElevatedDemos from "./elevated";
import * as EnvironmentDemos from "./environment";
import * as FieldDemos from "./field";
import * as FieldsetDemos from "./fieldset";
import * as FileUploadDemos from "./file-upload";
import * as FloatingPanelDemos from "./floating-panel";
import * as FormatDemos from "./format";
import * as GridDemos from "./grid";
import * as GroupDemos from "./group";
import * as HighlightDemos from "./highlight";
import * as HoverCardDemos from "./hover-card";
import * as IconDemos from "./icon";
import * as ImageDemos from "./image";
import * as ImageCropperDemos from "./image-cropper";
import * as InputDemos from "./input";
import * as InputGroupDemos from "./input-group";
import * as ItemDemos from "./item";
import * as JsonTreeViewDemos from "./json-tree-view";
import * as KbdDemos from "./kbd";
import * as ListboxDemos from "./listbox";
import * as LocaleDemos from "./locale";
import * as MarqueeDemos from "./marquee";
import * as MenuDemos from "./menu";
import * as NumberInputDemos from "./number-input";
import * as PaginationDemos from "./pagination";
import * as PasswordInputDemos from "./password-input";
import * as PinInputDemos from "./pin-input";
import * as PopoverDemos from "./popover";
import * as PortalDemos from "./portal";
import * as PresenceDemos from "./presence";
import * as ProgressDemos from "./progress";
import * as ProgressCircleDemos from "./progress-circle";
import * as QRCodeDemos from "./qr-code";
import * as RadioGroupDemos from "./radio-group";
import * as RadiomarkDemos from "./radiomark";
import * as RatingGroupDemos from "./rating-group";
import * as ScrollAreaDemos from "./scroll-area";
import * as ScrollShadowDemos from "./scroll-shadow";
import * as SectionDemos from "./section";
import * as SegmentGroupDemos from "./segment-group";
import * as SelectDemos from "./select";
import * as SeparatorDemos from "./separator";
import * as SignaturePadDemos from "./signature-pad";
import * as SkeletonDemos from "./skeleton";
import * as SliderDemos from "./slider";
import * as SpinnerDemos from "./spinner";
import * as SplitterDemos from "./splitter";
import * as StackDemos from "./stack";
import * as StatusDemos from "./status";
import * as StepsDemos from "./steps";
import * as SubstrateDemos from "./substrate";
import * as SurfaceDemos from "./surface";
import * as SwapDemos from "./swap";
import * as SwatchDemos from "./swatch";
import * as SwitchDemos from "./switch";
import * as TabsDemos from "./tabs";
import * as TagDemos from "./tag";
import * as TagsInputDemos from "./tags-input";
import * as TextDemos from "./text";
import * as TextareaDemos from "./textarea";
import * as TileDemos from "./tile";
import * as TimerDemos from "./timer";
import * as ToastDemos from "./toast";
import * as ToggleDemos from "./toggle";
import * as ToggleGroupDemos from "./toggle-group";
import * as TooltipDemos from "./tooltip";
import * as TreeDemos from "./tree-view";
import * as WheelPickerDemos from "./wheel-picker";

export type DemoItem = {
	component: React.ComponentType;
	file: string;
};

export const demos: Record<string, DemoItem> = {
	"accordion:basic": {
		component: AccordionDemos.Basic,
		file: "accordion/basic.tsx",
	},
	"accordion:disabled": {
		component: AccordionDemos.Disabled,
		file: "accordion/disabled.tsx",
	},
	"accordion:multiple": {
		component: AccordionDemos.Multiple,
		file: "accordion/multiple.tsx",
	},
	"accordion:with-icon": {
		component: AccordionDemos.WithIcon,
		file: "accordion/with-icon.tsx",
	},
	"alert:basic": {
		component: AlertDemos.Basic,
		file: "alert/basic.tsx",
	},
	"alert:control": {
		component: AlertDemos.Control,
		file: "alert/control.tsx",
	},
	"alert:description": {
		component: AlertDemos.Description,
		file: "alert/description.tsx",
	},
	"alert:palettes": {
		component: AlertDemos.Palettes,
		file: "alert/palettes.tsx",
	},
	"anchor:basic": {
		component: AnchorDemos.Basic,
		file: "anchor/basic.tsx",
	},
	"anchor:routers": {
		component: AnchorDemos.Routers,
		file: "anchor/routers.tsx",
	},
	"anchor:variants": {
		component: AnchorDemos.Variants,
		file: "anchor/variants.tsx",
	},
	"anchor:within-text": {
		component: AnchorDemos.WithinText,
		file: "anchor/within-text.tsx",
	},
	"aspect-ratio:basic": {
		component: AspectRatioDemos.Basic,
		file: "aspect-ratio/basic.tsx",
	},
	"avatar:basic": {
		component: AvatarDemos.Basic,
		file: "avatar/basic.tsx",
	},
	"avatar:colors": {
		component: AvatarDemos.Colors,
		file: "avatar/colors.tsx",
	},
	"avatar:ring": {
		component: AvatarDemos.Ring,
		file: "avatar/ring.tsx",
	},
	"avatar:shapes": {
		component: AvatarDemos.Shapes,
		file: "avatar/shapes.tsx",
	},
	"avatar:sizes": {
		component: AvatarDemos.Sizes,
		file: "avatar/sizes.tsx",
	},
	"avatar:variants": {
		component: AvatarDemos.Variants,
		file: "avatar/variants.tsx",
	},
	"avatar:with-badge": {
		component: AvatarDemos.WithBadge,
		file: "avatar/with-badge.tsx",
	},
	"badge:basic": {
		component: BadgeDemos.Basic,
		file: "badge/basic.tsx",
	},
	"badge:content": {
		component: BadgeDemos.Content,
		file: "badge/content.tsx",
	},
	"badge:placements": {
		component: BadgeDemos.Placements,
		file: "badge/placements.tsx",
	},
	"badge:sizes": {
		component: BadgeDemos.Sizes,
		file: "badge/sizes.tsx",
	},
	"badge:variants": {
		component: BadgeDemos.Variants,
		file: "badge/variants.tsx",
	},
	"box:basic": {
		component: BoxDemos.Basic,
		file: "box/basic.tsx",
	},
	"box:pseudo-props": {
		component: BoxDemos.PseudoProps,
		file: "box/pseudo-props.tsx",
	},
	"box:shorthand": {
		component: BoxDemos.Shorthand,
		file: "box/shorthand.tsx",
	},
	"button:basic": {
		component: ButtonDemos.Basic,
		file: "button/basic.tsx",
	},
	"button:icon": {
		component: ButtonDemos.Icon,
		file: "button/icon.tsx",
	},
	"button:sizes": {
		component: ButtonDemos.Sizes,
		file: "button/sizes.tsx",
	},
	"button:variants": {
		component: ButtonDemos.Variants,
		file: "button/variants.tsx",
	},
	"button:disabled": {
		component: ButtonDemos.Disabled,
		file: "button/disabled.tsx",
	},
	"button-group:basic": {
		component: ButtonGroupDemos.Basic,
		file: "button-group/basic.tsx",
	},
	"button-group:full-width": {
		component: ButtonGroupDemos.FullWidth,
		file: "button-group/full-width.tsx",
	},
	"button-group:orientation": {
		component: ButtonGroupDemos.Orientation,
		file: "button-group/orientation.tsx",
	},
	"button-group:palettes": {
		component: ButtonGroupDemos.Palettes,
		file: "button-group/palettes.tsx",
	},
	"button-group:sizes": {
		component: ButtonGroupDemos.Sizes,
		file: "button-group/sizes.tsx",
	},
	"button-group:variants": {
		component: ButtonGroupDemos.Variants,
		file: "button-group/variants.tsx",
	},
	"carousel:autoplay": {
		component: CarouselDemos.Autoplay,
		file: "carousel/autoplay.tsx",
	},
	"carousel:basic": {
		component: CarouselDemos.Basic,
		file: "carousel/basic.tsx",
	},
	"carousel:spacing": {
		component: CarouselDemos.Spacing,
		file: "carousel/spacing.tsx",
	},
	"carousel:vertical": {
		component: CarouselDemos.Vertical,
		file: "carousel/vertical.tsx",
	},
	"checkbox:basic": {
		component: CheckboxDemos.Basic,
		file: "checkbox/basic.tsx",
	},
	"checkbox:group": {
		component: CheckboxDemos.Group,
		file: "checkbox/group.tsx",
	},
	"checkmark:basic": {
		component: CheckmarkDemos.Basic,
		file: "checkmark/basic.tsx",
	},
	"checkmark:indeterminate": {
		component: CheckmarkDemos.Indeterminate,
		file: "checkmark/indeterminate.tsx",
	},
	"checkmark:variants": {
		component: CheckmarkDemos.Variants,
		file: "checkmark/variants.tsx",
	},
	"chip:basic": {
		component: ChipDemos.Basic,
		file: "chip/basic.tsx",
	},
	"chip:sizes": {
		component: ChipDemos.Sizes,
		file: "chip/sizes.tsx",
	},
	"chip:variants": {
		component: ChipDemos.Variants,
		file: "chip/variants.tsx",
	},
	"chip:with-icon": {
		component: ChipDemos.WithIcon,
		file: "chip/with-icon.tsx",
	},
	"clipboard:basic": {
		component: ClipboardDemos.Basic,
		file: "clipboard/basic.tsx",
	},
	"clipboard:timeout": {
		component: ClipboardDemos.Timeout,
		file: "clipboard/timeout.tsx",
	},
	"clipboard:with-button": {
		component: ClipboardDemos.WithButton,
		file: "clipboard/with-button.tsx",
	},
	"clipboard:with-input": {
		component: ClipboardDemos.WithInput,
		file: "clipboard/with-input.tsx",
	},
	"collapsible:basic": {
		component: CollapsibleDemos.Basic,
		file: "collapsible/basic.tsx",
	},
	"collapsible:default-open": {
		component: CollapsibleDemos.DefaultOpen,
		file: "collapsible/default-open.tsx",
	},
	"collapsible:disabled": {
		component: CollapsibleDemos.Disabled,
		file: "collapsible/disabled.tsx",
	},
	"collapsible:partial-height": {
		component: CollapsibleDemos.PartialHeight,
		file: "collapsible/partial-height.tsx",
	},
	"color-picker:area-channels": {
		component: ColorPickerDemos.AreaChannels,
		file: "color-picker/area-channels.tsx",
	},
	"color-picker:basic": {
		component: ColorPickerDemos.Basic,
		file: "color-picker/basic.tsx",
	},
	"color-picker:channel-slider-alpha": {
		component: ColorPickerDemos.ChannelSliderAlpha,
		file: "color-picker/channel-slider-alpha.tsx",
	},
	"color-picker:channel-sliders-rgb": {
		component: ColorPickerDemos.ChannelSlidersRGB,
		file: "color-picker/channel-sliders-rgb.tsx",
	},
	"color-picker:swatch-grid": {
		component: ColorPickerDemos.SwatchGrid,
		file: "color-picker/swatch-grid.tsx",
	},
	"combobox:basic": {
		component: ComboboxDemos.Basic,
		file: "combobox/basic.tsx",
	},
	"combobox:disabled": {
		component: ComboboxDemos.Disabled,
		file: "combobox/disabled.tsx",
	},
	"combobox:highlight-matching-text": {
		component: ComboboxDemos.HighlightMatchingText,
		file: "combobox/highlight-matching-text.tsx",
	},
	"combobox:multiple": {
		component: ComboboxDemos.Multiple,
		file: "combobox/multiple.tsx",
	},
	"combobox:open-on-click": {
		component: ComboboxDemos.OpenOnClick,
		file: "combobox/open-on-click.tsx",
	},
	"container:basic": {
		component: ContainerDemos.Basic,
		file: "container/basic.tsx",
	},
	"container:fluid": {
		component: ContainerDemos.Fluid,
		file: "container/fluid.tsx",
	},
	"container:sizes": {
		component: ContainerDemos.Sizes,
		file: "container/sizes.tsx",
	},
	"date-picker:basic": {
		component: DatePickerDemos.Basic,
		file: "date-picker/basic.tsx",
	},
	"date-picker:range": {
		component: DatePickerDemos.Range,
		file: "date-picker/range.tsx",
	},
	"decorative-box:basic": {
		component: DecorativeBoxDemos.Basic,
		file: "decorative-box/basic.tsx",
	},
	"decorative-box:variants": {
		component: DecorativeBoxDemos.Variants,
		file: "decorative-box/variants.tsx",
	},
	"dialog:basic": {
		component: DialogDemos.Basic,
		file: "dialog/basic.tsx",
	},
	"dialog:cover": {
		component: DialogDemos.Cover,
		file: "dialog/cover.tsx",
	},
	"dialog:fullscreen": {
		component: DialogDemos.Fullscreen,
		file: "dialog/fullscreen.tsx",
	},
	"dialog:placements": {
		component: DialogDemos.Placements,
		file: "dialog/placements.tsx",
	},
	"dialog:sizes": {
		component: DialogDemos.Sizes,
		file: "dialog/sizes.tsx",
	},
	"download:asynchronous-data": {
		component: DownloadDemos.AsynchronousData,
		file: "download/asynchronous-data.tsx",
	},
	"download:basic": {
		component: DownloadDemos.Basic,
		file: "download/basic.tsx",
	},
	"download:file-size": {
		component: DownloadDemos.FileSize,
		file: "download/file-size.tsx",
	},
	"download:svg": {
		component: DownloadDemos.Svg,
		file: "download/svg.tsx",
	},
	"editable:basic": {
		component: EditableDemos.Basic,
		file: "editable/basic.tsx",
	},
	"editable:custom-controls": {
		component: EditableDemos.CustomControls,
		file: "editable/custom-controls.tsx",
	},
	"elevated:basic": {
		component: ElevatedDemos.Basic,
		file: "elevated/basic.tsx",
	},
	"elevated:no-border": {
		component: ElevatedDemos.NoBorder,
		file: "elevated/no-border.tsx",
	},
	"elevated:shadow-override": {
		component: ElevatedDemos.ShadowOverride,
		file: "elevated/shadow-override.tsx",
	},
	"environment:basic": {
		component: EnvironmentDemos.Basic,
		file: "environment/basic.tsx",
	},
	"field:basic": {
		component: FieldDemos.Basic,
		file: "field/basic.tsx",
	},
	"field:disabled": {
		component: FieldDemos.Disabled,
		file: "field/disabled.tsx",
	},
	"field:helper-text": {
		component: FieldDemos.HelperText,
		file: "field/helper-text.tsx",
	},
	"field:invalid": {
		component: FieldDemos.Invalid,
		file: "field/invalid.tsx",
	},
	"fieldset:basic": {
		component: FieldsetDemos.Basic,
		file: "fieldset/basic.tsx",
	},
	"fieldset:disabled": {
		component: FieldsetDemos.Disabled,
		file: "fieldset/disabled.tsx",
	},
	"fieldset:invalid": {
		component: FieldsetDemos.Invalid,
		file: "fieldset/invalid.tsx",
	},
	"file-upload:basic": {
		component: FileUploadDemos.Basic,
		file: "file-upload/basic.tsx",
	},
	"file-upload:dropzone": {
		component: FileUploadDemos.Dropzone,
		file: "file-upload/dropzone.tsx",
	},
	"floating-panel:basic": {
		component: FloatingPanelDemos.Basic,
		file: "floating-panel/basic.tsx",
	},
	"format:byte": {
		component: FormatDemos.Byte,
		file: "format/byte.tsx",
	},
	"format:number": {
		component: FormatDemos.Integer,
		file: "format/integer.tsx",
	},
	"format:relative-time": {
		component: FormatDemos.RelativeTime,
		file: "format/relative-time.tsx",
	},
	"grid:basic": {
		component: GridDemos.Basic,
		file: "grid/basic.tsx",
	},
	"grid:col-span": {
		component: GridDemos.ColSpan,
		file: "grid/col-span.tsx",
	},
	"grid:row-span": {
		component: GridDemos.RowSpan,
		file: "grid/row-span.tsx",
	},
	"group:attached": {
		component: GroupDemos.Attached,
		file: "group/attached.tsx",
	},
	"group:basic": {
		component: GroupDemos.Basic,
		file: "group/basic.tsx",
	},
	"group:button": {
		component: GroupDemos.ButtonGroup,
		file: "group/button.tsx",
	},
	"group:full-width": {
		component: GroupDemos.FullWidth,
		file: "group/full-width.tsx",
	},
	"highlight:basic": {
		component: HighlightDemos.Basic,
		file: "highlight/basic.tsx",
	},
	"highlight:multiple": {
		component: HighlightDemos.Multiple,
		file: "highlight/multiple.tsx",
	},
	"highlight:search-query": {
		component: HighlightDemos.SearchQuery,
		file: "highlight/search-query.tsx",
	},
	"highlight:squiggle": {
		component: HighlightDemos.Squiggle,
		file: "highlight/squiggle.tsx",
	},
	"hover-card:basic": {
		component: HoverCardDemos.Basic,
		file: "hover-card/basic.tsx",
	},
	"hover-card:delays": {
		component: HoverCardDemos.Delays,
		file: "hover-card/delays.tsx",
	},
	"icon:basic": {
		component: IconDemos.Basic,
		file: "icon/basic.tsx",
	},
	"icon:collections": {
		component: IconDemos.Collections,
		file: "icon/collections.tsx",
	},
	"icon:custom": {
		component: IconDemos.Custom,
		file: "icon/custom.tsx",
	},
	"icon:storage": {
		component: IconDemos.Storage,
		file: "icon/storage.tsx",
	},
	"image:basic": {
		component: ImageDemos.Basic,
		file: "image/basic.tsx",
	},
	"image:circular": {
		component: ImageDemos.Circular,
		file: "image/circular.tsx",
	},
	"image:height": {
		component: ImageDemos.Height,
		file: "image/height.tsx",
	},
	"image-cropper:basic": {
		component: ImageCropperDemos.Basic,
		file: "image-cropper/basic.tsx",
	},
	"image-cropper:controls": {
		component: ImageCropperDemos.Controls,
		file: "image-cropper/controls.tsx",
	},
	"input-group:basic": {
		component: InputGroupDemos.Basic,
		file: "input-group/basic.tsx",
	},
	"input-group:sizes": {
		component: InputGroupDemos.Sizes,
		file: "input-group/sizes.tsx",
	},
	"input-group:variants": {
		component: InputGroupDemos.Variants,
		file: "input-group/variants.tsx",
	},
	"input:basic": {
		component: InputDemos.Basic,
		file: "input/basic.tsx",
	},
	"input:disabled": {
		component: InputDemos.Disabled,
		file: "input/disabled.tsx",
	},
	"input:sizes": {
		component: InputDemos.Sizes,
		file: "input/sizes.tsx",
	},
	"input:variants": {
		component: InputDemos.Variants,
		file: "input/variants.tsx",
	},
	"item:basic": {
		component: ItemDemos.Basic,
		file: "item/basic.tsx",
	},
	"item:icon-only": {
		component: ItemDemos.IconOnly,
		file: "item/icon-only.tsx",
	},
	"item:variants": {
		component: ItemDemos.Variants,
		file: "item/variants.tsx",
	},
	"json-tree-view:basic": {
		component: JsonTreeViewDemos.Basic,
		file: "json-tree-view/basic.tsx",
	},
	"json-tree-view:custom-value-rendering": {
		component: JsonTreeViewDemos.CustomValueRendering,
		file: "json-tree-view/custom-value-rendering.tsx",
	},
	"json-tree-view:expanded-depth": {
		component: JsonTreeViewDemos.ExpandedDepth,
		file: "json-tree-view/expanded-depth.tsx",
	},
	"kbd:basic": {
		component: KbdDemos.Basic,
		file: "kbd/basic.tsx",
	},
	"kbd:inline": {
		component: KbdDemos.Inline,
		file: "kbd/inline.tsx",
	},
	"kbd:navigation-keys": {
		component: KbdDemos.NavigationKeys,
		file: "kbd/navigation-keys.tsx",
	},
	"kbd:palettes": {
		component: KbdDemos.Palettes,
		file: "kbd/palettes.tsx",
	},
	"kbd:sizes": {
		component: KbdDemos.Sizes,
		file: "kbd/sizes.tsx",
	},
	"kbd:variants": {
		component: KbdDemos.Variants,
		file: "kbd/variants.tsx",
	},
	"listbox:basic": {
		component: ListboxDemos.Basic,
		file: "listbox/basic.tsx",
	},
	"listbox:checkmark": {
		component: ListboxDemos.WithCheckmark,
		file: "listbox/with-checkmark.tsx",
	},
	"listbox:disabled": {
		component: ListboxDemos.Disabled,
		file: "listbox/disabled.tsx",
	},
	"locale:basic": {
		component: LocaleDemos.Basic,
		file: "locale/basic.tsx",
	},
	"locale:rtl": {
		component: LocaleDemos.RTL,
		file: "locale/rtl.tsx",
	},
	"marquee:basic": {
		component: MarqueeDemos.Basic,
		file: "marquee/basic.tsx",
	},
	"marquee:edges": {
		component: MarqueeDemos.Edges,
		file: "marquee/edges.tsx",
	},
	"marquee:reversed": {
		component: MarqueeDemos.Reversed,
		file: "marquee/reversed.tsx",
	},
	"marquee:vertical": {
		component: MarqueeDemos.Vertical,
		file: "marquee/vertical.tsx",
	},
	"menu:basic": {
		component: MenuDemos.Basic,
		file: "menu/basic.tsx",
	},
	"menu:command": {
		component: MenuDemos.Command,
		file: "menu/command.tsx",
	},
	"menu:context-menu": {
		component: MenuDemos.ContextMenu,
		file: "menu/context-menu.tsx",
	},
	"menu:group": {
		component: MenuDemos.Group,
		file: "menu/group.tsx",
	},
	"menu:submenu": {
		component: MenuDemos.Submenu,
		file: "menu/submenu.tsx",
	},
	"number-input:basic": {
		component: NumberInputDemos.Basic,
		file: "number-input/basic.tsx",
	},
	"number-input:min-max": {
		component: NumberInputDemos.MinMax,
		file: "number-input/min-max.tsx",
	},
	"number-input:scrubber": {
		component: NumberInputDemos.Scrubber,
		file: "number-input/scrubber.tsx",
	},
	"number-input:step": {
		component: NumberInputDemos.Step,
		file: "number-input/step.tsx",
	},
	"pagination:attached": {
		component: PaginationDemos.Attached,
		file: "pagination/attached.tsx",
	},
	"pagination:basic": {
		component: PaginationDemos.Basic,
		file: "pagination/basic.tsx",
	},
	"pagination:sibling-count": {
		component: PaginationDemos.SiblingCount,
		file: "pagination/sibling-count.tsx",
	},
	"pagination:store": {
		component: PaginationDemos.Store,
		file: "pagination/store.tsx",
	},
	"password-input:basic": {
		component: PasswordInputDemos.Basic,
		file: "password-input/basic.tsx",
	},
	"password-input:with-field": {
		component: PasswordInputDemos.WithField,
		file: "password-input/with-field.tsx",
	},
	"pin-input:basic": {
		component: PinInputDemos.Basic,
		file: "pin-input/basic.tsx",
	},
	"pin-input:masking": {
		component: PinInputDemos.Masking,
		file: "pin-input/masking.tsx",
	},
	"pin-input:otp-mode": {
		component: PinInputDemos.OTPMode,
		file: "pin-input/otp-mode.tsx",
	},
	"pin-input:with-field": {
		component: PinInputDemos.WithField,
		file: "pin-input/with-field.tsx",
	},
	"popover:basic": {
		component: PopoverDemos.Basic,
		file: "popover/basic.tsx",
	},
	"popover:same-width": {
		component: PopoverDemos.SameWidth,
		file: "popover/same-width.tsx",
	},
	"portal:basic": {
		component: PortalDemos.Basic,
		file: "portal/basic.tsx",
	},
	"portal:custom-container": {
		component: PortalDemos.CustomContainer,
		file: "portal/custom-container.tsx",
	},
	"portal:disabled": {
		component: PortalDemos.Disabled,
		file: "portal/disabled.tsx",
	},
	"presence:basic": {
		component: PresenceDemos.Basic,
		file: "presence/basic.tsx",
	},
	"presence:lazy-mount": {
		component: PresenceDemos.LazyMount,
		file: "presence/lazy-mount.tsx",
	},
	"presence:unmount": {
		component: PresenceDemos.Unmount,
		file: "presence/unmount.tsx",
	},
	"progress-circle:basic": {
		component: ProgressCircleDemos.Basic,
		file: "progress-circle/basic.tsx",
	},
	"progress-circle:indeterminate": {
		component: ProgressCircleDemos.Indeterminate,
		file: "progress-circle/indeterminate.tsx",
	},
	"progress:basic": {
		component: ProgressDemos.Basic,
		file: "progress/basic.tsx",
	},
	"progress:indeterminate": {
		component: ProgressDemos.Indeterminate,
		file: "progress/indeterminate.tsx",
	},
	"progress:with-label": {
		component: ProgressDemos.WithLabel,
		file: "progress/with-label.tsx",
	},
	"qr-code:basic": {
		component: QRCodeDemos.Basic,
		file: "qr-code/basic.tsx",
	},
	"qr-code:download": {
		component: QRCodeDemos.Download,
		file: "qr-code/download.tsx",
	},
	"qr-code:fill": {
		component: QRCodeDemos.Fill,
		file: "qr-code/fill.tsx",
	},
	"qr-code:logo-overlay": {
		component: QRCodeDemos.LogoOverlay,
		file: "qr-code/logo-overlay.tsx",
	},
	"radio-group:basic": {
		component: RadioGroupDemos.Basic,
		file: "radio-group/basic.tsx",
	},
	"radio-group:disabled": {
		component: RadioGroupDemos.Disabled,
		file: "radio-group/disabled.tsx",
	},
	"radio-group:horizontal": {
		component: RadioGroupDemos.Horizontal,
		file: "radio-group/horizontal.tsx",
	},
	"radiomark:basic": {
		component: RadiomarkDemos.Basic,
		file: "radiomark/basic.tsx",
	},
	"radiomark:variants": {
		component: RadiomarkDemos.Variants,
		file: "radiomark/variants.tsx",
	},
	"rating-group:basic": {
		component: RatingGroupDemos.Basic,
		file: "rating-group/basic.tsx",
	},
	"rating-group:disabled": {
		component: RatingGroupDemos.Disabled,
		file: "rating-group/disabled.tsx",
	},
	"rating-group:half-rating": {
		component: RatingGroupDemos.HalfRating,
		file: "rating-group/half-rating.tsx",
	},
	"rating-group:palette": {
		component: RatingGroupDemos.Palette,
		file: "rating-group/palette.tsx",
	},
	"rating-group:read-only": {
		component: RatingGroupDemos.ReadOnly,
		file: "rating-group/read-only.tsx",
	},
	"scroll-area:basic": {
		component: ScrollAreaDemos.Basic,
		file: "scroll-area/basic.tsx",
	},
	"scroll-area:horizontal": {
		component: ScrollAreaDemos.Horizontal,
		file: "scroll-area/horizontal.tsx",
	},
	"scroll-area:rtl": {
		component: ScrollAreaDemos.Rtl,
		file: "scroll-area/rtl.tsx",
	},
	"scroll-area:sizes": {
		component: ScrollAreaDemos.Sizes,
		file: "scroll-area/sizes.tsx",
	},
	"scroll-area:variants": {
		component: ScrollAreaDemos.Variants,
		file: "scroll-area/variants.tsx",
	},
	"scroll-shadow:basic": {
		component: ScrollShadowDemos.Basic,
		file: "scroll-shadow/basic.tsx",
	},
	"scroll-shadow:custom-size": {
		component: ScrollShadowDemos.CustomSize,
		file: "scroll-shadow/custom-size.tsx",
	},
	"scroll-shadow:orientation": {
		component: ScrollShadowDemos.Orientation,
		file: "scroll-shadow/orientation.tsx",
	},
	"scroll-shadow:with-surface": {
		component: ScrollShadowDemos.WithSurface,
		file: "scroll-shadow/with-surface.tsx",
	},
	"section:basic": {
		component: SectionDemos.Basic,
		file: "section/basic.tsx",
	},
	"segment-group:basic": {
		component: SegmentGroupDemos.Basic,
		file: "segment-group/basic.tsx",
	},
	"segment-group:sizes": {
		component: SegmentGroupDemos.Sizes,
		file: "segment-group/sizes.tsx",
	},
	"segment-group:variants": {
		component: SegmentGroupDemos.Variants,
		file: "segment-group/variants.tsx",
	},
	"segment-group:vertical": {
		component: SegmentGroupDemos.Vertical,
		file: "segment-group/vertical.tsx",
	},
	"select:basic": {
		component: SelectDemos.Basic,
		file: "select/basic.tsx",
	},
	"select:disabled": {
		component: SelectDemos.Disabled,
		file: "select/disabled.tsx",
	},
	"select:group": {
		component: SelectDemos.Group,
		file: "select/group.tsx",
	},
	"select:with-icons": {
		component: SelectDemos.WithIcons,
		file: "select/with-icons.tsx",
	},
	"separator:basic": {
		component: SeparatorDemos.Basic,
		file: "separator/basic.tsx",
	},
	"separator:label": {
		component: SeparatorDemos.Label,
		file: "separator/label.tsx",
	},
	"separator:sizes": {
		component: SeparatorDemos.Sizes,
		file: "separator/sizes.tsx",
	},
	"separator:vertical": {
		component: SeparatorDemos.Vertical,
		file: "separator/vertical.tsx",
	},
	"signature-pad:basic": {
		component: SignaturePadDemos.Basic,
		file: "signature-pad/basic.tsx",
	},
	"skeleton:basic": {
		component: SkeletonDemos.Basic,
		file: "skeleton/basic.tsx",
	},
	"skeleton:text-only": {
		component: SkeletonDemos.TextOnly,
		file: "skeleton/text-only.tsx",
	},
	"skeleton:variants": {
		component: SkeletonDemos.Variants,
		file: "skeleton/variants.tsx",
	},
	"slider:basic": {
		component: SliderDemos.Basic,
		file: "slider/basic.tsx",
	},
	"slider:minmax": {
		component: SliderDemos.MinMax,
		file: "slider/minmax.tsx",
	},
	"slider:range": {
		component: SliderDemos.Range,
		file: "slider/range.tsx",
	},
	"spinner:basic": {
		component: SpinnerDemos.Basic,
		file: "spinner/basic.tsx",
	},
	"spinner:custom-icon": {
		component: SpinnerDemos.CustomIcon,
		file: "spinner/custom-icon.tsx",
	},
	"spinner:variants": {
		component: SpinnerDemos.Variants,
		file: "spinner/variants.tsx",
	},
	"splitter:basic": {
		component: SplitterDemos.Basic,
		file: "splitter/basic.tsx",
	},
	"splitter:disabled-resize": {
		component: SplitterDemos.DisabledResize,
		file: "splitter/disabled-resize.tsx",
	},
	"splitter:multiple-panels": {
		component: SplitterDemos.MultiplePanels,
		file: "splitter/multiple-panels.tsx",
	},
	"splitter:separator-only": {
		component: SplitterDemos.SeparatorOnly,
		file: "splitter/separator-only.tsx",
	},
	"splitter:vertical": {
		component: SplitterDemos.Vertical,
		file: "splitter/vertical.tsx",
	},
	"stack:basic": {
		component: StackDemos.Basic,
		file: "stack/basic.tsx",
	},
	"stack:responsive-direction": {
		component: StackDemos.ResponsiveDirection,
		file: "stack/responsive-direction.tsx",
	},
	"stack:vertical": {
		component: StackDemos.Vertical,
		file: "stack/vertical.tsx",
	},
	"status:basic": {
		component: StatusDemos.Basic,
		file: "status/basic.tsx",
	},
	"status:only-indicator": {
		component: StatusDemos.OnlyIndicator,
		file: "status/only-indicator.tsx",
	},
	"status:sizes": {
		component: StatusDemos.Sizes,
		file: "status/sizes.tsx",
	},
	"steps:basic": {
		component: StepsDemos.Basic,
		file: "steps/basic.tsx",
	},
	"substrate:basic": {
		component: SubstrateDemos.Basic,
		file: "substrate/basic.tsx",
	},
	"surface:basic": {
		component: SurfaceDemos.Basic,
		file: "surface/basic.tsx",
	},
	"surface:variants": {
		component: SurfaceDemos.Variants,
		file: "surface/variants.tsx",
	},
	"swap:basic": {
		component: SwapDemos.Basic,
		file: "swap/basic.tsx",
	},
	"swap:fade": {
		component: SwapDemos.Fade,
		file: "swap/fade.tsx",
	},
	"swap:flip": {
		component: SwapDemos.Flip,
		file: "swap/flip.tsx",
	},
	"swap:rotate": {
		component: SwapDemos.Rotate,
		file: "swap/rotate.tsx",
	},
	"swap:scale": {
		component: SwapDemos.Scale,
		file: "swap/scale.tsx",
	},
	"swatch:basic": {
		component: SwatchDemos.Basic,
		file: "swatch/basic.tsx",
	},
	"swatch:variants": {
		component: SwatchDemos.Sizes,
		file: "swatch/variants.tsx",
	},
	"switch:basic": {
		component: SwitchDemos.Basic,
		file: "switch/basic.tsx",
	},
	"switch:disabled": {
		component: SwitchDemos.Disabled,
		file: "switch/disabled.tsx",
	},
	"switch:with-label": {
		component: SwitchDemos.WithLabel,
		file: "switch/with-label.tsx",
	},
	"tabs:basic": {
		component: TabsDemos.Basic,
		file: "tabs/basic.tsx",
	},
	"tabs:disabled": {
		component: TabsDemos.Disabled,
		file: "tabs/disabled.tsx",
	},
	"tabs:sizes": {
		component: TabsDemos.Sizes,
		file: "tabs/sizes.tsx",
	},
	"tabs:variants": {
		component: TabsDemos.Variants,
		file: "tabs/variants.tsx",
	},
	"tabs:vertical": {
		component: TabsDemos.Vertical,
		file: "tabs/vertical.tsx",
	},
	"tag:basic": {
		component: TagDemos.Basic,
		file: "tag/basic.tsx",
	},
	"tag:variants": {
		component: TagDemos.Variants,
		file: "tag/variants.tsx",
	},
	"tag:with-icon": {
		component: TagDemos.WithIcon,
		file: "tag/with-icon.tsx",
	},
	"tags-input:basic": {
		component: TagsInputDemos.Basic,
		file: "tags-input/basic.tsx",
	},
	"tags-input:clearable": {
		component: TagsInputDemos.Clearable,
		file: "tags-input/clearable.tsx",
	},
	"text:basic": {
		component: TextDemos.Basic,
		file: "text/basic.tsx",
	},
	"text:line-clamp": {
		component: TextDemos.LineClamp,
		file: "text/line-clamp.tsx",
	},
	"text:sizes": {
		component: TextDemos.Sizes,
		file: "text/sizes.tsx",
	},
	"text:truncate": {
		component: TextDemos.Truncate,
		file: "text/truncate.tsx",
	},
	"text:weights": {
		component: TextDemos.Weights,
		file: "text/weights.tsx",
	},
	"textarea:basic": {
		component: TextareaDemos.Basic,
		file: "textarea/basic.tsx",
	},
	"textarea:disabled": {
		component: TextareaDemos.Disabled,
		file: "textarea/disabled.tsx",
	},
	"textarea:sizes": {
		component: TextareaDemos.Sizes,
		file: "textarea/sizes.tsx",
	},
	"textarea:variants": {
		component: TextareaDemos.Variants,
		file: "textarea/variants.tsx",
	},
	"tile:basic": {
		component: TileDemos.Basic,
		file: "tile/basic.tsx",
	},
	"tile:orientation": {
		component: TileDemos.Orientation,
		file: "tile/orientation.tsx",
	},
	"tile:variants": {
		component: TileDemos.Variants,
		file: "tile/variants.tsx",
	},
	"timer:basic": {
		component: TimerDemos.Basic,
		file: "timer/basic.tsx",
	},
	"timer:countdown": {
		component: TimerDemos.Countdown,
		file: "timer/countdown.tsx",
	},
	"toast:basic": {
		component: ToastDemos.Basic,
		file: "toast/basic.tsx",
	},
	"toast:custom-icon": {
		component: ToastDemos.CustomIcon,
		file: "toast/custom-icon.tsx",
	},
	"toast:dismissable": {
		component: ToastDemos.Dismissable,
		file: "toast/dismissable.tsx",
	},
	"toast:duration": {
		component: ToastDemos.Duration,
		file: "toast/duration.tsx",
	},
	"toast:type": {
		component: ToastDemos.Type,
		file: "toast/type.tsx",
	},
	"toggle:basic": {
		component: ToggleDemos.Basic,
		file: "toggle/basic.tsx",
	},
	"toggle:controlled": {
		component: ToggleDemos.Controlled,
		file: "toggle/controlled.tsx",
	},
	"toggle:disabled": {
		component: ToggleDemos.Disabled,
		file: "toggle/disabled.tsx",
	},
	"toggle:indicator": {
		component: ToggleDemos.Indicator,
		file: "toggle/indicator.tsx",
	},
	"toggle-group:attached": {
		component: ToggleGroupDemos.Attached,
		file: "toggle-group/attached.tsx",
	},
	"toggle-group:basic": {
		component: ToggleGroupDemos.Basic,
		file: "toggle-group/basic.tsx",
	},
	"toggle-group:controlled": {
		component: ToggleGroupDemos.Controlled,
		file: "toggle-group/controlled.tsx",
	},
	"toggle-group:disabled": {
		component: ToggleGroupDemos.Disabled,
		file: "toggle-group/disabled.tsx",
	},
	"toggle-group:multiple": {
		component: ToggleGroupDemos.Multiple,
		file: "toggle-group/multiple.tsx",
	},
	"toggle-group:orientation": {
		component: ToggleGroupDemos.Orientation,
		file: "toggle-group/orientation.tsx",
	},
	"tooltip:basic": {
		component: TooltipDemos.Basic,
		file: "tooltip/basic.tsx",
	},
	"tooltip:delay": {
		component: TooltipDemos.Delay,
		file: "tooltip/delay.tsx",
	},
	"tooltip:interactive": {
		component: TooltipDemos.Interactive,
		file: "tooltip/interactive.tsx",
	},
	"tree-view:basic": {
		component: TreeDemos.Basic,
		file: "tree-view/basic.tsx",
	},
	"tree-view:checkbox": {
		component: TreeDemos.Checkbox,
		file: "tree-view/checkbox.tsx",
	},
	"wheel-picker:basic": {
		component: WheelPickerDemos.Basic,
		file: "wheel-picker/basic.tsx",
	},
	"wheel-picker:variants": {
		component: WheelPickerDemos.Variants,
		file: "wheel-picker/variants.tsx",
	},
	"wheel-picker:radius": {
		component: WheelPickerDemos.Radius,
		file: "wheel-picker/radius.tsx",
	},
};

export function getDemo(name: string): DemoItem | undefined {
	return demos[name];
}
