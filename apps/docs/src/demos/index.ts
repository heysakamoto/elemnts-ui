import { type ComponentType, lazy } from "react";

export type DemoItem = {
	component: ComponentType;
	file: string;
};

export const demos: Record<string, DemoItem> = {
	"accordion:basic": {
		component: lazy(() =>
			import("./accordion/basic").then((m) => ({ default: m.Basic })),
		),
		file: "accordion/basic.tsx",
	},
	"accordion:disabled": {
		component: lazy(() =>
			import("./accordion/disabled").then((m) => ({ default: m.Disabled })),
		),
		file: "accordion/disabled.tsx",
	},
	"accordion:multiple": {
		component: lazy(() =>
			import("./accordion/multiple").then((m) => ({ default: m.Multiple })),
		),
		file: "accordion/multiple.tsx",
	},
	"accordion:with-icon": {
		component: lazy(() =>
			import("./accordion/with-icon").then((m) => ({ default: m.WithIcon })),
		),
		file: "accordion/with-icon.tsx",
	},
	"alert:basic": {
		component: lazy(() =>
			import("./alert/basic").then((m) => ({ default: m.Basic })),
		),
		file: "alert/basic.tsx",
	},
	"alert:control": {
		component: lazy(() =>
			import("./alert/control").then((m) => ({ default: m.Control })),
		),
		file: "alert/control.tsx",
	},
	"alert:description": {
		component: lazy(() =>
			import("./alert/description").then((m) => ({ default: m.Description })),
		),
		file: "alert/description.tsx",
	},
	"alert:palettes": {
		component: lazy(() =>
			import("./alert/palettes").then((m) => ({ default: m.Palettes })),
		),
		file: "alert/palettes.tsx",
	},
	"anchor:basic": {
		component: lazy(() =>
			import("./anchor/basic").then((m) => ({ default: m.Basic })),
		),
		file: "anchor/basic.tsx",
	},
	"anchor:routers": {
		component: lazy(() =>
			import("./anchor/routers").then((m) => ({ default: m.Routers })),
		),
		file: "anchor/routers.tsx",
	},
	"anchor:variants": {
		component: lazy(() =>
			import("./anchor/variants").then((m) => ({ default: m.Variants })),
		),
		file: "anchor/variants.tsx",
	},
	"anchor:within-text": {
		component: lazy(() =>
			import("./anchor/within-text").then((m) => ({ default: m.WithinText })),
		),
		file: "anchor/within-text.tsx",
	},
	"aspect-ratio:basic": {
		component: lazy(() =>
			import("./aspect-ratio/basic").then((m) => ({ default: m.Basic })),
		),
		file: "aspect-ratio/basic.tsx",
	},
	"avatar:basic": {
		component: lazy(() =>
			import("./avatar/basic").then((m) => ({ default: m.Basic })),
		),
		file: "avatar/basic.tsx",
	},
	"avatar:colors": {
		component: lazy(() =>
			import("./avatar/colors").then((m) => ({ default: m.Colors })),
		),
		file: "avatar/colors.tsx",
	},
	"avatar:ring": {
		component: lazy(() =>
			import("./avatar/ring").then((m) => ({ default: m.Ring })),
		),
		file: "avatar/ring.tsx",
	},
	"avatar:shapes": {
		component: lazy(() =>
			import("./avatar/shapes").then((m) => ({ default: m.Shapes })),
		),
		file: "avatar/shapes.tsx",
	},
	"avatar:sizes": {
		component: lazy(() =>
			import("./avatar/sizes").then((m) => ({ default: m.Sizes })),
		),
		file: "avatar/sizes.tsx",
	},
	"avatar:variants": {
		component: lazy(() =>
			import("./avatar/variants").then((m) => ({ default: m.Variants })),
		),
		file: "avatar/variants.tsx",
	},
	"avatar:with-badge": {
		component: lazy(() =>
			import("./avatar/with-badge").then((m) => ({ default: m.WithBadge })),
		),
		file: "avatar/with-badge.tsx",
	},
	"badge:basic": {
		component: lazy(() =>
			import("./badge/basic").then((m) => ({ default: m.Basic })),
		),
		file: "badge/basic.tsx",
	},
	"badge:content": {
		component: lazy(() =>
			import("./badge/content").then((m) => ({ default: m.Content })),
		),
		file: "badge/content.tsx",
	},
	"badge:placements": {
		component: lazy(() =>
			import("./badge/placements").then((m) => ({ default: m.Placements })),
		),
		file: "badge/placements.tsx",
	},
	"badge:sizes": {
		component: lazy(() =>
			import("./badge/sizes").then((m) => ({ default: m.Sizes })),
		),
		file: "badge/sizes.tsx",
	},
	"badge:variants": {
		component: lazy(() =>
			import("./badge/variants").then((m) => ({ default: m.Variants })),
		),
		file: "badge/variants.tsx",
	},
	"box:basic": {
		component: lazy(() =>
			import("./box/basic").then((m) => ({ default: m.Basic })),
		),
		file: "box/basic.tsx",
	},
	"box:pseudo-props": {
		component: lazy(() =>
			import("./box/pseudo-props").then((m) => ({ default: m.PseudoProps })),
		),
		file: "box/pseudo-props.tsx",
	},
	"box:shorthand": {
		component: lazy(() =>
			import("./box/shorthand").then((m) => ({ default: m.Shorthand })),
		),
		file: "box/shorthand.tsx",
	},
	"button:basic": {
		component: lazy(() =>
			import("./button/basic").then((m) => ({ default: m.Basic })),
		),
		file: "button/basic.tsx",
	},
	"button:icon": {
		component: lazy(() =>
			import("./button/icon").then((m) => ({ default: m.Icon })),
		),
		file: "button/icon.tsx",
	},
	"button:sizes": {
		component: lazy(() =>
			import("./button/sizes").then((m) => ({ default: m.Sizes })),
		),
		file: "button/sizes.tsx",
	},
	"button:variants": {
		component: lazy(() =>
			import("./button/variants").then((m) => ({ default: m.Variants })),
		),
		file: "button/variants.tsx",
	},
	"button:disabled": {
		component: lazy(() =>
			import("./button/disabled").then((m) => ({ default: m.Disabled })),
		),
		file: "button/disabled.tsx",
	},
	"button-group:basic": {
		component: lazy(() =>
			import("./button-group/basic").then((m) => ({ default: m.Basic })),
		),
		file: "button-group/basic.tsx",
	},
	"button-group:full-width": {
		component: lazy(() =>
			import("./button-group/full-width").then((m) => ({
				default: m.FullWidth,
			})),
		),
		file: "button-group/full-width.tsx",
	},
	"button-group:orientation": {
		component: lazy(() =>
			import("./button-group/orientation").then((m) => ({
				default: m.Orientation,
			})),
		),
		file: "button-group/orientation.tsx",
	},
	"button-group:palettes": {
		component: lazy(() =>
			import("./button-group/palettes").then((m) => ({ default: m.Palettes })),
		),
		file: "button-group/palettes.tsx",
	},
	"button-group:sizes": {
		component: lazy(() =>
			import("./button-group/sizes").then((m) => ({ default: m.Sizes })),
		),
		file: "button-group/sizes.tsx",
	},
	"button-group:variants": {
		component: lazy(() =>
			import("./button-group/variants").then((m) => ({ default: m.Variants })),
		),
		file: "button-group/variants.tsx",
	},
	"carousel:autoplay": {
		component: lazy(() =>
			import("./carousel/autoplay").then((m) => ({ default: m.Autoplay })),
		),
		file: "carousel/autoplay.tsx",
	},
	"carousel:basic": {
		component: lazy(() =>
			import("./carousel/basic").then((m) => ({ default: m.Basic })),
		),
		file: "carousel/basic.tsx",
	},
	"carousel:spacing": {
		component: lazy(() =>
			import("./carousel/spacing").then((m) => ({ default: m.Spacing })),
		),
		file: "carousel/spacing.tsx",
	},
	"carousel:vertical": {
		component: lazy(() =>
			import("./carousel/vertical").then((m) => ({ default: m.Vertical })),
		),
		file: "carousel/vertical.tsx",
	},
	"checkbox:basic": {
		component: lazy(() =>
			import("./checkbox/basic").then((m) => ({ default: m.Basic })),
		),
		file: "checkbox/basic.tsx",
	},
	"checkbox:group": {
		component: lazy(() =>
			import("./checkbox/group").then((m) => ({ default: m.Group })),
		),
		file: "checkbox/group.tsx",
	},
	"checkmark:basic": {
		component: lazy(() =>
			import("./checkmark/basic").then((m) => ({ default: m.Basic })),
		),
		file: "checkmark/basic.tsx",
	},
	"checkmark:indeterminate": {
		component: lazy(() =>
			import("./checkmark/indeterminate").then((m) => ({
				default: m.Indeterminate,
			})),
		),
		file: "checkmark/indeterminate.tsx",
	},
	"checkmark:variants": {
		component: lazy(() =>
			import("./checkmark/variants").then((m) => ({ default: m.Variants })),
		),
		file: "checkmark/variants.tsx",
	},
	"chip:basic": {
		component: lazy(() =>
			import("./chip/basic").then((m) => ({ default: m.Basic })),
		),
		file: "chip/basic.tsx",
	},
	"chip:sizes": {
		component: lazy(() =>
			import("./chip/sizes").then((m) => ({ default: m.Sizes })),
		),
		file: "chip/sizes.tsx",
	},
	"chip:variants": {
		component: lazy(() =>
			import("./chip/variants").then((m) => ({ default: m.Variants })),
		),
		file: "chip/variants.tsx",
	},
	"chip:with-icon": {
		component: lazy(() =>
			import("./chip/with-icon").then((m) => ({ default: m.WithIcon })),
		),
		file: "chip/with-icon.tsx",
	},
	"clipboard:basic": {
		component: lazy(() =>
			import("./clipboard/basic").then((m) => ({ default: m.Basic })),
		),
		file: "clipboard/basic.tsx",
	},
	"clipboard:timeout": {
		component: lazy(() =>
			import("./clipboard/timeout").then((m) => ({ default: m.Timeout })),
		),
		file: "clipboard/timeout.tsx",
	},
	"clipboard:with-button": {
		component: lazy(() =>
			import("./clipboard/with-button").then((m) => ({
				default: m.WithButton,
			})),
		),
		file: "clipboard/with-button.tsx",
	},
	"clipboard:with-input": {
		component: lazy(() =>
			import("./clipboard/with-input").then((m) => ({ default: m.WithInput })),
		),
		file: "clipboard/with-input.tsx",
	},
	"collapsible:basic": {
		component: lazy(() =>
			import("./collapsible/basic").then((m) => ({ default: m.Basic })),
		),
		file: "collapsible/basic.tsx",
	},
	"collapsible:default-open": {
		component: lazy(() =>
			import("./collapsible/default-open").then((m) => ({
				default: m.DefaultOpen,
			})),
		),
		file: "collapsible/default-open.tsx",
	},
	"collapsible:disabled": {
		component: lazy(() =>
			import("./collapsible/disabled").then((m) => ({ default: m.Disabled })),
		),
		file: "collapsible/disabled.tsx",
	},
	"collapsible:partial-height": {
		component: lazy(() =>
			import("./collapsible/partial-height").then((m) => ({
				default: m.PartialHeight,
			})),
		),
		file: "collapsible/partial-height.tsx",
	},
	"color-picker:area-channels": {
		component: lazy(() =>
			import("./color-picker/area-channels").then((m) => ({
				default: m.AreaChannels,
			})),
		),
		file: "color-picker/area-channels.tsx",
	},
	"color-picker:basic": {
		component: lazy(() =>
			import("./color-picker/basic").then((m) => ({ default: m.Basic })),
		),
		file: "color-picker/basic.tsx",
	},
	"color-picker:channel-slider-alpha": {
		component: lazy(() =>
			import("./color-picker/channel-slider-alpha").then((m) => ({
				default: m.ChannelSliderAlpha,
			})),
		),
		file: "color-picker/channel-slider-alpha.tsx",
	},
	"color-picker:channel-sliders-rgb": {
		component: lazy(() =>
			import("./color-picker/channel-sliders-rgb").then((m) => ({
				default: m.ChannelSlidersRGB,
			})),
		),
		file: "color-picker/channel-sliders-rgb.tsx",
	},
	"color-picker:swatch-grid": {
		component: lazy(() =>
			import("./color-picker/swatch-grid").then((m) => ({
				default: m.SwatchGrid,
			})),
		),
		file: "color-picker/swatch-grid.tsx",
	},
	"combobox:basic": {
		component: lazy(() =>
			import("./combobox/basic").then((m) => ({ default: m.Basic })),
		),
		file: "combobox/basic.tsx",
	},
	"combobox:disabled": {
		component: lazy(() =>
			import("./combobox/disabled").then((m) => ({ default: m.Disabled })),
		),
		file: "combobox/disabled.tsx",
	},
	"combobox:highlight-matching-text": {
		component: lazy(() =>
			import("./combobox/highlight-matching-text").then((m) => ({
				default: m.HighlightMatchingText,
			})),
		),
		file: "combobox/highlight-matching-text.tsx",
	},
	"combobox:multiple": {
		component: lazy(() =>
			import("./combobox/multiple").then((m) => ({ default: m.Multiple })),
		),
		file: "combobox/multiple.tsx",
	},
	"combobox:open-on-click": {
		component: lazy(() =>
			import("./combobox/open-on-click").then((m) => ({
				default: m.OpenOnClick,
			})),
		),
		file: "combobox/open-on-click.tsx",
	},
	"container:basic": {
		component: lazy(() =>
			import("./container/basic").then((m) => ({ default: m.Basic })),
		),
		file: "container/basic.tsx",
	},
	"container:fluid": {
		component: lazy(() =>
			import("./container/fluid").then((m) => ({ default: m.Fluid })),
		),
		file: "container/fluid.tsx",
	},
	"container:sizes": {
		component: lazy(() =>
			import("./container/sizes").then((m) => ({ default: m.Sizes })),
		),
		file: "container/sizes.tsx",
	},
	"date-picker:basic": {
		component: lazy(() =>
			import("./date-picker/basic").then((m) => ({ default: m.Basic })),
		),
		file: "date-picker/basic.tsx",
	},
	"date-picker:range": {
		component: lazy(() =>
			import("./date-picker/range").then((m) => ({ default: m.Range })),
		),
		file: "date-picker/range.tsx",
	},
	"decorative-box:basic": {
		component: lazy(() =>
			import("./decorative-box/basic").then((m) => ({ default: m.Basic })),
		),
		file: "decorative-box/basic.tsx",
	},
	"decorative-box:variants": {
		component: lazy(() =>
			import("./decorative-box/variants").then((m) => ({
				default: m.Variants,
			})),
		),
		file: "decorative-box/variants.tsx",
	},
	"dialog:basic": {
		component: lazy(() =>
			import("./dialog/basic").then((m) => ({ default: m.Basic })),
		),
		file: "dialog/basic.tsx",
	},
	"dialog:cover": {
		component: lazy(() =>
			import("./dialog/cover").then((m) => ({ default: m.Cover })),
		),
		file: "dialog/cover.tsx",
	},
	"dialog:fullscreen": {
		component: lazy(() =>
			import("./dialog/fullscreen").then((m) => ({ default: m.Fullscreen })),
		),
		file: "dialog/fullscreen.tsx",
	},
	"dialog:placements": {
		component: lazy(() =>
			import("./dialog/placements").then((m) => ({ default: m.Placements })),
		),
		file: "dialog/placements.tsx",
	},
	"dialog:sizes": {
		component: lazy(() =>
			import("./dialog/sizes").then((m) => ({ default: m.Sizes })),
		),
		file: "dialog/sizes.tsx",
	},
	"download:asynchronous-data": {
		component: lazy(() =>
			import("./download/asynchronous-data").then((m) => ({
				default: m.AsynchronousData,
			})),
		),
		file: "download/asynchronous-data.tsx",
	},
	"download:basic": {
		component: lazy(() =>
			import("./download/basic").then((m) => ({ default: m.Basic })),
		),
		file: "download/basic.tsx",
	},
	"download:file-size": {
		component: lazy(() =>
			import("./download/file-size").then((m) => ({ default: m.FileSize })),
		),
		file: "download/file-size.tsx",
	},
	"download:svg": {
		component: lazy(() =>
			import("./download/svg").then((m) => ({ default: m.Svg })),
		),
		file: "download/svg.tsx",
	},
	"editable:basic": {
		component: lazy(() =>
			import("./editable/basic").then((m) => ({ default: m.Basic })),
		),
		file: "editable/basic.tsx",
	},
	"editable:custom-controls": {
		component: lazy(() =>
			import("./editable/custom-controls").then((m) => ({
				default: m.CustomControls,
			})),
		),
		file: "editable/custom-controls.tsx",
	},
	"elevated:basic": {
		component: lazy(() =>
			import("./elevated/basic").then((m) => ({ default: m.Basic })),
		),
		file: "elevated/basic.tsx",
	},
	"elevated:no-border": {
		component: lazy(() =>
			import("./elevated/no-border").then((m) => ({ default: m.NoBorder })),
		),
		file: "elevated/no-border.tsx",
	},
	"elevated:shadow-override": {
		component: lazy(() =>
			import("./elevated/shadow-override").then((m) => ({
				default: m.ShadowOverride,
			})),
		),
		file: "elevated/shadow-override.tsx",
	},
	"environment:basic": {
		component: lazy(() =>
			import("./environment/basic").then((m) => ({ default: m.Basic })),
		),
		file: "environment/basic.tsx",
	},
	"field:basic": {
		component: lazy(() =>
			import("./field/basic").then((m) => ({ default: m.Basic })),
		),
		file: "field/basic.tsx",
	},
	"field:disabled": {
		component: lazy(() =>
			import("./field/disabled").then((m) => ({ default: m.Disabled })),
		),
		file: "field/disabled.tsx",
	},
	"field:helper-text": {
		component: lazy(() =>
			import("./field/helper-text").then((m) => ({ default: m.HelperText })),
		),
		file: "field/helper-text.tsx",
	},
	"field:invalid": {
		component: lazy(() =>
			import("./field/invalid").then((m) => ({ default: m.Invalid })),
		),
		file: "field/invalid.tsx",
	},
	"fieldset:basic": {
		component: lazy(() =>
			import("./fieldset/basic").then((m) => ({ default: m.Basic })),
		),
		file: "fieldset/basic.tsx",
	},
	"fieldset:disabled": {
		component: lazy(() =>
			import("./fieldset/disabled").then((m) => ({ default: m.Disabled })),
		),
		file: "fieldset/disabled.tsx",
	},
	"fieldset:invalid": {
		component: lazy(() =>
			import("./fieldset/invalid").then((m) => ({ default: m.Invalid })),
		),
		file: "fieldset/invalid.tsx",
	},
	"file-upload:basic": {
		component: lazy(() =>
			import("./file-upload/basic").then((m) => ({ default: m.Basic })),
		),
		file: "file-upload/basic.tsx",
	},
	"file-upload:dropzone": {
		component: lazy(() =>
			import("./file-upload/dropzone").then((m) => ({ default: m.Dropzone })),
		),
		file: "file-upload/dropzone.tsx",
	},
	"floating-panel:basic": {
		component: lazy(() =>
			import("./floating-panel/basic").then((m) => ({ default: m.Basic })),
		),
		file: "floating-panel/basic.tsx",
	},
	"format:byte": {
		component: lazy(() =>
			import("./format/byte").then((m) => ({ default: m.Byte })),
		),
		file: "format/byte.tsx",
	},
	"format:number": {
		component: lazy(() =>
			import("./format/integer").then((m) => ({ default: m.Integer })),
		),
		file: "format/integer.tsx",
	},
	"format:relative-time": {
		component: lazy(() =>
			import("./format/relative-time").then((m) => ({
				default: m.RelativeTime,
			})),
		),
		file: "format/relative-time.tsx",
	},
	"grid:basic": {
		component: lazy(() =>
			import("./grid/basic").then((m) => ({ default: m.Basic })),
		),
		file: "grid/basic.tsx",
	},
	"grid:col-span": {
		component: lazy(() =>
			import("./grid/col-span").then((m) => ({ default: m.ColSpan })),
		),
		file: "grid/col-span.tsx",
	},
	"grid:row-span": {
		component: lazy(() =>
			import("./grid/row-span").then((m) => ({ default: m.RowSpan })),
		),
		file: "grid/row-span.tsx",
	},
	"group:attached": {
		component: lazy(() =>
			import("./group/attached").then((m) => ({ default: m.Attached })),
		),
		file: "group/attached.tsx",
	},
	"group:basic": {
		component: lazy(() =>
			import("./group/basic").then((m) => ({ default: m.Basic })),
		),
		file: "group/basic.tsx",
	},
	"group:button": {
		component: lazy(() =>
			import("./group/button").then((m) => ({ default: m.ButtonGroup })),
		),
		file: "group/button.tsx",
	},
	"group:full-width": {
		component: lazy(() =>
			import("./group/full-width").then((m) => ({ default: m.FullWidth })),
		),
		file: "group/full-width.tsx",
	},
	"highlight:basic": {
		component: lazy(() =>
			import("./highlight/basic").then((m) => ({ default: m.Basic })),
		),
		file: "highlight/basic.tsx",
	},
	"highlight:multiple": {
		component: lazy(() =>
			import("./highlight/multiple").then((m) => ({ default: m.Multiple })),
		),
		file: "highlight/multiple.tsx",
	},
	"highlight:search-query": {
		component: lazy(() =>
			import("./highlight/search-query").then((m) => ({
				default: m.SearchQuery,
			})),
		),
		file: "highlight/search-query.tsx",
	},
	"highlight:squiggle": {
		component: lazy(() =>
			import("./highlight/squiggle").then((m) => ({ default: m.Squiggle })),
		),
		file: "highlight/squiggle.tsx",
	},
	"hover-card:basic": {
		component: lazy(() =>
			import("./hover-card/basic").then((m) => ({ default: m.Basic })),
		),
		file: "hover-card/basic.tsx",
	},
	"hover-card:delays": {
		component: lazy(() =>
			import("./hover-card/delays").then((m) => ({ default: m.Delays })),
		),
		file: "hover-card/delays.tsx",
	},
	"icon:basic": {
		component: lazy(() =>
			import("./icon/basic").then((m) => ({ default: m.Basic })),
		),
		file: "icon/basic.tsx",
	},
	"icon:collections": {
		component: lazy(() =>
			import("./icon/collections").then((m) => ({ default: m.Collections })),
		),
		file: "icon/collections.tsx",
	},
	"icon:custom": {
		component: lazy(() =>
			import("./icon/custom").then((m) => ({ default: m.Custom })),
		),
		file: "icon/custom.tsx",
	},
	"icon:storage": {
		component: lazy(() =>
			import("./icon/storage").then((m) => ({ default: m.Storage })),
		),
		file: "icon/storage.tsx",
	},
	"image:basic": {
		component: lazy(() =>
			import("./image/basic").then((m) => ({ default: m.Basic })),
		),
		file: "image/basic.tsx",
	},
	"image:circular": {
		component: lazy(() =>
			import("./image/circular").then((m) => ({ default: m.Circular })),
		),
		file: "image/circular.tsx",
	},
	"image:height": {
		component: lazy(() =>
			import("./image/height").then((m) => ({ default: m.Height })),
		),
		file: "image/height.tsx",
	},
	"image-cropper:basic": {
		component: lazy(() =>
			import("./image-cropper/basic").then((m) => ({ default: m.Basic })),
		),
		file: "image-cropper/basic.tsx",
	},
	"image-cropper:controls": {
		component: lazy(() =>
			import("./image-cropper/controls").then((m) => ({ default: m.Controls })),
		),
		file: "image-cropper/controls.tsx",
	},
	"input-group:basic": {
		component: lazy(() =>
			import("./input-group/basic").then((m) => ({ default: m.Basic })),
		),
		file: "input-group/basic.tsx",
	},
	"input-group:sizes": {
		component: lazy(() =>
			import("./input-group/sizes").then((m) => ({ default: m.Sizes })),
		),
		file: "input-group/sizes.tsx",
	},
	"input-group:variants": {
		component: lazy(() =>
			import("./input-group/variants").then((m) => ({ default: m.Variants })),
		),
		file: "input-group/variants.tsx",
	},
	"input:basic": {
		component: lazy(() =>
			import("./input/basic").then((m) => ({ default: m.Basic })),
		),
		file: "input/basic.tsx",
	},
	"input:disabled": {
		component: lazy(() =>
			import("./input/disabled").then((m) => ({ default: m.Disabled })),
		),
		file: "input/disabled.tsx",
	},
	"input:sizes": {
		component: lazy(() =>
			import("./input/sizes").then((m) => ({ default: m.Sizes })),
		),
		file: "input/sizes.tsx",
	},
	"input:variants": {
		component: lazy(() =>
			import("./input/variants").then((m) => ({ default: m.Variants })),
		),
		file: "input/variants.tsx",
	},
	"item:basic": {
		component: lazy(() =>
			import("./item/basic").then((m) => ({ default: m.Basic })),
		),
		file: "item/basic.tsx",
	},
	"item:icon-only": {
		component: lazy(() =>
			import("./item/icon-only").then((m) => ({ default: m.IconOnly })),
		),
		file: "item/icon-only.tsx",
	},
	"item:variants": {
		component: lazy(() =>
			import("./item/variants").then((m) => ({ default: m.Variants })),
		),
		file: "item/variants.tsx",
	},
	"json-tree-view:basic": {
		component: lazy(() =>
			import("./json-tree-view/basic").then((m) => ({ default: m.Basic })),
		),
		file: "json-tree-view/basic.tsx",
	},
	"json-tree-view:custom-value-rendering": {
		component: lazy(() =>
			import("./json-tree-view/custom-value-rendering").then((m) => ({
				default: m.CustomValueRendering,
			})),
		),
		file: "json-tree-view/custom-value-rendering.tsx",
	},
	"json-tree-view:expanded-depth": {
		component: lazy(() =>
			import("./json-tree-view/expanded-depth").then((m) => ({
				default: m.ExpandedDepth,
			})),
		),
		file: "json-tree-view/expanded-depth.tsx",
	},
	"kbd:basic": {
		component: lazy(() =>
			import("./kbd/basic").then((m) => ({ default: m.Basic })),
		),
		file: "kbd/basic.tsx",
	},
	"kbd:inline": {
		component: lazy(() =>
			import("./kbd/inline").then((m) => ({ default: m.Inline })),
		),
		file: "kbd/inline.tsx",
	},
	"kbd:navigation-keys": {
		component: lazy(() =>
			import("./kbd/navigation-keys").then((m) => ({
				default: m.NavigationKeys,
			})),
		),
		file: "kbd/navigation-keys.tsx",
	},
	"kbd:palettes": {
		component: lazy(() =>
			import("./kbd/palettes").then((m) => ({ default: m.Palettes })),
		),
		file: "kbd/palettes.tsx",
	},
	"kbd:sizes": {
		component: lazy(() =>
			import("./kbd/sizes").then((m) => ({ default: m.Sizes })),
		),
		file: "kbd/sizes.tsx",
	},
	"kbd:variants": {
		component: lazy(() =>
			import("./kbd/variants").then((m) => ({ default: m.Variants })),
		),
		file: "kbd/variants.tsx",
	},
	"listbox:basic": {
		component: lazy(() =>
			import("./listbox/basic").then((m) => ({ default: m.Basic })),
		),
		file: "listbox/basic.tsx",
	},
	"listbox:checkmark": {
		component: lazy(() =>
			import("./listbox/with-checkmark").then((m) => ({
				default: m.WithCheckmark,
			})),
		),
		file: "listbox/with-checkmark.tsx",
	},
	"listbox:disabled": {
		component: lazy(() =>
			import("./listbox/disabled").then((m) => ({ default: m.Disabled })),
		),
		file: "listbox/disabled.tsx",
	},
	"locale:basic": {
		component: lazy(() =>
			import("./locale/basic").then((m) => ({ default: m.Basic })),
		),
		file: "locale/basic.tsx",
	},
	"locale:rtl": {
		component: lazy(() =>
			import("./locale/rtl").then((m) => ({ default: m.RTL })),
		),
		file: "locale/rtl.tsx",
	},
	"marquee:basic": {
		component: lazy(() =>
			import("./marquee/basic").then((m) => ({ default: m.Basic })),
		),
		file: "marquee/basic.tsx",
	},
	"marquee:edges": {
		component: lazy(() =>
			import("./marquee/edges").then((m) => ({ default: m.Edges })),
		),
		file: "marquee/edges.tsx",
	},
	"marquee:reversed": {
		component: lazy(() =>
			import("./marquee/reversed").then((m) => ({ default: m.Reversed })),
		),
		file: "marquee/reversed.tsx",
	},
	"marquee:vertical": {
		component: lazy(() =>
			import("./marquee/vertical").then((m) => ({ default: m.Vertical })),
		),
		file: "marquee/vertical.tsx",
	},
	"menu:basic": {
		component: lazy(() =>
			import("./menu/basic").then((m) => ({ default: m.Basic })),
		),
		file: "menu/basic.tsx",
	},
	"menu:command": {
		component: lazy(() =>
			import("./menu/command").then((m) => ({ default: m.Command })),
		),
		file: "menu/command.tsx",
	},
	"menu:context-menu": {
		component: lazy(() =>
			import("./menu/context-menu").then((m) => ({ default: m.ContextMenu })),
		),
		file: "menu/context-menu.tsx",
	},
	"menu:group": {
		component: lazy(() =>
			import("./menu/group").then((m) => ({ default: m.Group })),
		),
		file: "menu/group.tsx",
	},
	"menu:submenu": {
		component: lazy(() =>
			import("./menu/submenu").then((m) => ({ default: m.Submenu })),
		),
		file: "menu/submenu.tsx",
	},
	"number-input:basic": {
		component: lazy(() =>
			import("./number-input/basic").then((m) => ({ default: m.Basic })),
		),
		file: "number-input/basic.tsx",
	},
	"number-input:min-max": {
		component: lazy(() =>
			import("./number-input/min-max").then((m) => ({ default: m.MinMax })),
		),
		file: "number-input/min-max.tsx",
	},
	"number-input:scrubber": {
		component: lazy(() =>
			import("./number-input/scrubber").then((m) => ({ default: m.Scrubber })),
		),
		file: "number-input/scrubber.tsx",
	},
	"number-input:step": {
		component: lazy(() =>
			import("./number-input/step").then((m) => ({ default: m.Step })),
		),
		file: "number-input/step.tsx",
	},
	"pagination:attached": {
		component: lazy(() =>
			import("./pagination/attached").then((m) => ({ default: m.Attached })),
		),
		file: "pagination/attached.tsx",
	},
	"pagination:basic": {
		component: lazy(() =>
			import("./pagination/basic").then((m) => ({ default: m.Basic })),
		),
		file: "pagination/basic.tsx",
	},
	"pagination:sibling-count": {
		component: lazy(() =>
			import("./pagination/sibling-count").then((m) => ({
				default: m.SiblingCount,
			})),
		),
		file: "pagination/sibling-count.tsx",
	},
	"pagination:store": {
		component: lazy(() =>
			import("./pagination/store").then((m) => ({ default: m.Store })),
		),
		file: "pagination/store.tsx",
	},
	"password-input:basic": {
		component: lazy(() =>
			import("./password-input/basic").then((m) => ({ default: m.Basic })),
		),
		file: "password-input/basic.tsx",
	},
	"password-input:with-field": {
		component: lazy(() =>
			import("./password-input/with-field").then((m) => ({
				default: m.WithField,
			})),
		),
		file: "password-input/with-field.tsx",
	},
	"pin-input:basic": {
		component: lazy(() =>
			import("./pin-input/basic").then((m) => ({ default: m.Basic })),
		),
		file: "pin-input/basic.tsx",
	},
	"pin-input:masking": {
		component: lazy(() =>
			import("./pin-input/masking").then((m) => ({ default: m.Masking })),
		),
		file: "pin-input/masking.tsx",
	},
	"pin-input:otp-mode": {
		component: lazy(() =>
			import("./pin-input/otp-mode").then((m) => ({ default: m.OTPMode })),
		),
		file: "pin-input/otp-mode.tsx",
	},
	"pin-input:with-field": {
		component: lazy(() =>
			import("./pin-input/with-field").then((m) => ({ default: m.WithField })),
		),
		file: "pin-input/with-field.tsx",
	},
	"popover:basic": {
		component: lazy(() =>
			import("./popover/basic").then((m) => ({ default: m.Basic })),
		),
		file: "popover/basic.tsx",
	},
	"popover:same-width": {
		component: lazy(() =>
			import("./popover/same-width").then((m) => ({ default: m.SameWidth })),
		),
		file: "popover/same-width.tsx",
	},
	"portal:basic": {
		component: lazy(() =>
			import("./portal/basic").then((m) => ({ default: m.Basic })),
		),
		file: "portal/basic.tsx",
	},
	"portal:custom-container": {
		component: lazy(() =>
			import("./portal/custom-container").then((m) => ({
				default: m.CustomContainer,
			})),
		),
		file: "portal/custom-container.tsx",
	},
	"portal:disabled": {
		component: lazy(() =>
			import("./portal/disabled").then((m) => ({ default: m.Disabled })),
		),
		file: "portal/disabled.tsx",
	},
	"presence:basic": {
		component: lazy(() =>
			import("./presence/basic").then((m) => ({ default: m.Basic })),
		),
		file: "presence/basic.tsx",
	},
	"presence:lazy-mount": {
		component: lazy(() =>
			import("./presence/lazy-mount").then((m) => ({ default: m.LazyMount })),
		),
		file: "presence/lazy-mount.tsx",
	},
	"presence:unmount": {
		component: lazy(() =>
			import("./presence/unmount").then((m) => ({ default: m.Unmount })),
		),
		file: "presence/unmount.tsx",
	},
	"progress-circle:basic": {
		component: lazy(() =>
			import("./progress-circle/basic").then((m) => ({ default: m.Basic })),
		),
		file: "progress-circle/basic.tsx",
	},
	"progress-circle:indeterminate": {
		component: lazy(() =>
			import("./progress-circle/indeterminate").then((m) => ({
				default: m.Indeterminate,
			})),
		),
		file: "progress-circle/indeterminate.tsx",
	},
	"progress:basic": {
		component: lazy(() =>
			import("./progress/basic").then((m) => ({ default: m.Basic })),
		),
		file: "progress/basic.tsx",
	},
	"progress:indeterminate": {
		component: lazy(() =>
			import("./progress/indeterminate").then((m) => ({
				default: m.Indeterminate,
			})),
		),
		file: "progress/indeterminate.tsx",
	},
	"progress:with-label": {
		component: lazy(() =>
			import("./progress/with-label").then((m) => ({ default: m.WithLabel })),
		),
		file: "progress/with-label.tsx",
	},
	"qr-code:basic": {
		component: lazy(() =>
			import("./qr-code/basic").then((m) => ({ default: m.Basic })),
		),
		file: "qr-code/basic.tsx",
	},
	"qr-code:download": {
		component: lazy(() =>
			import("./qr-code/download").then((m) => ({ default: m.Download })),
		),
		file: "qr-code/download.tsx",
	},
	"qr-code:fill": {
		component: lazy(() =>
			import("./qr-code/fill").then((m) => ({ default: m.Fill })),
		),
		file: "qr-code/fill.tsx",
	},
	"qr-code:logo-overlay": {
		component: lazy(() =>
			import("./qr-code/logo-overlay").then((m) => ({
				default: m.LogoOverlay,
			})),
		),
		file: "qr-code/logo-overlay.tsx",
	},
	"radio-group:basic": {
		component: lazy(() =>
			import("./radio-group/basic").then((m) => ({ default: m.Basic })),
		),
		file: "radio-group/basic.tsx",
	},
	"radio-group:disabled": {
		component: lazy(() =>
			import("./radio-group/disabled").then((m) => ({ default: m.Disabled })),
		),
		file: "radio-group/disabled.tsx",
	},
	"radio-group:horizontal": {
		component: lazy(() =>
			import("./radio-group/horizontal").then((m) => ({
				default: m.Horizontal,
			})),
		),
		file: "radio-group/horizontal.tsx",
	},
	"radiomark:basic": {
		component: lazy(() =>
			import("./radiomark/basic").then((m) => ({ default: m.Basic })),
		),
		file: "radiomark/basic.tsx",
	},
	"radiomark:variants": {
		component: lazy(() =>
			import("./radiomark/variants").then((m) => ({ default: m.Variants })),
		),
		file: "radiomark/variants.tsx",
	},
	"rating-group:basic": {
		component: lazy(() =>
			import("./rating-group/basic").then((m) => ({ default: m.Basic })),
		),
		file: "rating-group/basic.tsx",
	},
	"rating-group:disabled": {
		component: lazy(() =>
			import("./rating-group/disabled").then((m) => ({ default: m.Disabled })),
		),
		file: "rating-group/disabled.tsx",
	},
	"rating-group:half-rating": {
		component: lazy(() =>
			import("./rating-group/half-rating").then((m) => ({
				default: m.HalfRating,
			})),
		),
		file: "rating-group/half-rating.tsx",
	},
	"rating-group:palette": {
		component: lazy(() =>
			import("./rating-group/palette").then((m) => ({ default: m.Palette })),
		),
		file: "rating-group/palette.tsx",
	},
	"rating-group:read-only": {
		component: lazy(() =>
			import("./rating-group/read-only").then((m) => ({ default: m.ReadOnly })),
		),
		file: "rating-group/read-only.tsx",
	},
	"scroll-area:basic": {
		component: lazy(() =>
			import("./scroll-area/basic").then((m) => ({ default: m.Basic })),
		),
		file: "scroll-area/basic.tsx",
	},
	"scroll-area:horizontal": {
		component: lazy(() =>
			import("./scroll-area/horizontal").then((m) => ({
				default: m.Horizontal,
			})),
		),
		file: "scroll-area/horizontal.tsx",
	},
	"scroll-area:rtl": {
		component: lazy(() =>
			import("./scroll-area/rtl").then((m) => ({ default: m.Rtl })),
		),
		file: "scroll-area/rtl.tsx",
	},
	"scroll-area:sizes": {
		component: lazy(() =>
			import("./scroll-area/sizes").then((m) => ({ default: m.Sizes })),
		),
		file: "scroll-area/sizes.tsx",
	},
	"scroll-area:variants": {
		component: lazy(() =>
			import("./scroll-area/variants").then((m) => ({ default: m.Variants })),
		),
		file: "scroll-area/variants.tsx",
	},
	"scroll-shadow:basic": {
		component: lazy(() =>
			import("./scroll-shadow/basic").then((m) => ({ default: m.Basic })),
		),
		file: "scroll-shadow/basic.tsx",
	},
	"scroll-shadow:custom-size": {
		component: lazy(() =>
			import("./scroll-shadow/custom-size").then((m) => ({
				default: m.CustomSize,
			})),
		),
		file: "scroll-shadow/custom-size.tsx",
	},
	"scroll-shadow:orientation": {
		component: lazy(() =>
			import("./scroll-shadow/orientation").then((m) => ({
				default: m.Orientation,
			})),
		),
		file: "scroll-shadow/orientation.tsx",
	},
	"scroll-shadow:with-surface": {
		component: lazy(() =>
			import("./scroll-shadow/with-surface").then((m) => ({
				default: m.WithSurface,
			})),
		),
		file: "scroll-shadow/with-surface.tsx",
	},
	"section:basic": {
		component: lazy(() =>
			import("./section/basic").then((m) => ({ default: m.Basic })),
		),
		file: "section/basic.tsx",
	},
	"segment-group:basic": {
		component: lazy(() =>
			import("./segment-group/basic").then((m) => ({ default: m.Basic })),
		),
		file: "segment-group/basic.tsx",
	},
	"segment-group:sizes": {
		component: lazy(() =>
			import("./segment-group/sizes").then((m) => ({ default: m.Sizes })),
		),
		file: "segment-group/sizes.tsx",
	},
	"segment-group:variants": {
		component: lazy(() =>
			import("./segment-group/variants").then((m) => ({ default: m.Variants })),
		),
		file: "segment-group/variants.tsx",
	},
	"segment-group:vertical": {
		component: lazy(() =>
			import("./segment-group/vertical").then((m) => ({ default: m.Vertical })),
		),
		file: "segment-group/vertical.tsx",
	},
	"select:basic": {
		component: lazy(() =>
			import("./select/basic").then((m) => ({ default: m.Basic })),
		),
		file: "select/basic.tsx",
	},
	"select:disabled": {
		component: lazy(() =>
			import("./select/disabled").then((m) => ({ default: m.Disabled })),
		),
		file: "select/disabled.tsx",
	},
	"select:group": {
		component: lazy(() =>
			import("./select/group").then((m) => ({ default: m.Group })),
		),
		file: "select/group.tsx",
	},
	"select:with-icons": {
		component: lazy(() =>
			import("./select/with-icons").then((m) => ({ default: m.WithIcons })),
		),
		file: "select/with-icons.tsx",
	},
	"separator:basic": {
		component: lazy(() =>
			import("./separator/basic").then((m) => ({ default: m.Basic })),
		),
		file: "separator/basic.tsx",
	},
	"separator:label": {
		component: lazy(() =>
			import("./separator/label").then((m) => ({ default: m.Label })),
		),
		file: "separator/label.tsx",
	},
	"separator:sizes": {
		component: lazy(() =>
			import("./separator/sizes").then((m) => ({ default: m.Sizes })),
		),
		file: "separator/sizes.tsx",
	},
	"separator:vertical": {
		component: lazy(() =>
			import("./separator/vertical").then((m) => ({ default: m.Vertical })),
		),
		file: "separator/vertical.tsx",
	},
	"signature-pad:basic": {
		component: lazy(() =>
			import("./signature-pad/basic").then((m) => ({ default: m.Basic })),
		),
		file: "signature-pad/basic.tsx",
	},
	"skeleton:basic": {
		component: lazy(() =>
			import("./skeleton/basic").then((m) => ({ default: m.Basic })),
		),
		file: "skeleton/basic.tsx",
	},
	"skeleton:text-only": {
		component: lazy(() =>
			import("./skeleton/text-only").then((m) => ({ default: m.TextOnly })),
		),
		file: "skeleton/text-only.tsx",
	},
	"skeleton:variants": {
		component: lazy(() =>
			import("./skeleton/variants").then((m) => ({ default: m.Variants })),
		),
		file: "skeleton/variants.tsx",
	},
	"slider:basic": {
		component: lazy(() =>
			import("./slider/basic").then((m) => ({ default: m.Basic })),
		),
		file: "slider/basic.tsx",
	},
	"slider:minmax": {
		component: lazy(() =>
			import("./slider/minmax").then((m) => ({ default: m.MinMax })),
		),
		file: "slider/minmax.tsx",
	},
	"slider:range": {
		component: lazy(() =>
			import("./slider/range").then((m) => ({ default: m.Range })),
		),
		file: "slider/range.tsx",
	},
	"spinner:basic": {
		component: lazy(() =>
			import("./spinner/basic").then((m) => ({ default: m.Basic })),
		),
		file: "spinner/basic.tsx",
	},
	"spinner:custom-icon": {
		component: lazy(() =>
			import("./spinner/custom-icon").then((m) => ({ default: m.CustomIcon })),
		),
		file: "spinner/custom-icon.tsx",
	},
	"spinner:variants": {
		component: lazy(() =>
			import("./spinner/variants").then((m) => ({ default: m.Variants })),
		),
		file: "spinner/variants.tsx",
	},
	"splitter:basic": {
		component: lazy(() =>
			import("./splitter/basic").then((m) => ({ default: m.Basic })),
		),
		file: "splitter/basic.tsx",
	},
	"splitter:disabled-resize": {
		component: lazy(() =>
			import("./splitter/disabled-resize").then((m) => ({
				default: m.DisabledResize,
			})),
		),
		file: "splitter/disabled-resize.tsx",
	},
	"splitter:multiple-panels": {
		component: lazy(() =>
			import("./splitter/multiple-panels").then((m) => ({
				default: m.MultiplePanels,
			})),
		),
		file: "splitter/multiple-panels.tsx",
	},
	"splitter:separator-only": {
		component: lazy(() =>
			import("./splitter/separator-only").then((m) => ({
				default: m.SeparatorOnly,
			})),
		),
		file: "splitter/separator-only.tsx",
	},
	"splitter:vertical": {
		component: lazy(() =>
			import("./splitter/vertical").then((m) => ({ default: m.Vertical })),
		),
		file: "splitter/vertical.tsx",
	},
	"stack:basic": {
		component: lazy(() =>
			import("./stack/basic").then((m) => ({ default: m.Basic })),
		),
		file: "stack/basic.tsx",
	},
	"stack:responsive-direction": {
		component: lazy(() =>
			import("./stack/responsive-direction").then((m) => ({
				default: m.ResponsiveDirection,
			})),
		),
		file: "stack/responsive-direction.tsx",
	},
	"stack:vertical": {
		component: lazy(() =>
			import("./stack/vertical").then((m) => ({ default: m.Vertical })),
		),
		file: "stack/vertical.tsx",
	},
	"status:basic": {
		component: lazy(() =>
			import("./status/basic").then((m) => ({ default: m.Basic })),
		),
		file: "status/basic.tsx",
	},
	"status:only-indicator": {
		component: lazy(() =>
			import("./status/only-indicator").then((m) => ({
				default: m.OnlyIndicator,
			})),
		),
		file: "status/only-indicator.tsx",
	},
	"status:sizes": {
		component: lazy(() =>
			import("./status/sizes").then((m) => ({ default: m.Sizes })),
		),
		file: "status/sizes.tsx",
	},
	"steps:basic": {
		component: lazy(() =>
			import("./steps/basic").then((m) => ({ default: m.Basic })),
		),
		file: "steps/basic.tsx",
	},
	"substrate:basic": {
		component: lazy(() =>
			import("./substrate/basic").then((m) => ({ default: m.Basic })),
		),
		file: "substrate/basic.tsx",
	},
	"surface:basic": {
		component: lazy(() =>
			import("./surface/basic").then((m) => ({ default: m.Basic })),
		),
		file: "surface/basic.tsx",
	},
	"surface:variants": {
		component: lazy(() =>
			import("./surface/variants").then((m) => ({ default: m.Variants })),
		),
		file: "surface/variants.tsx",
	},
	"swap:basic": {
		component: lazy(() =>
			import("./swap/basic").then((m) => ({ default: m.Basic })),
		),
		file: "swap/basic.tsx",
	},
	"swap:fade": {
		component: lazy(() =>
			import("./swap/fade").then((m) => ({ default: m.Fade })),
		),
		file: "swap/fade.tsx",
	},
	"swap:flip": {
		component: lazy(() =>
			import("./swap/flip").then((m) => ({ default: m.Flip })),
		),
		file: "swap/flip.tsx",
	},
	"swap:rotate": {
		component: lazy(() =>
			import("./swap/rotate").then((m) => ({ default: m.Rotate })),
		),
		file: "swap/rotate.tsx",
	},
	"swap:scale": {
		component: lazy(() =>
			import("./swap/scale").then((m) => ({ default: m.Scale })),
		),
		file: "swap/scale.tsx",
	},
	"swatch:basic": {
		component: lazy(() =>
			import("./swatch/basic").then((m) => ({ default: m.Basic })),
		),
		file: "swatch/basic.tsx",
	},
	"swatch:sizes": {
		component: lazy(() =>
			import("./swatch/sizes").then((m) => ({ default: m.Sizes })),
		),
		file: "swatch/sizes.tsx",
	},
	"switch:basic": {
		component: lazy(() =>
			import("./switch/basic").then((m) => ({ default: m.Basic })),
		),
		file: "switch/basic.tsx",
	},
	"switch:disabled": {
		component: lazy(() =>
			import("./switch/disabled").then((m) => ({ default: m.Disabled })),
		),
		file: "switch/disabled.tsx",
	},
	"switch:with-label": {
		component: lazy(() =>
			import("./switch/with-label").then((m) => ({ default: m.WithLabel })),
		),
		file: "switch/with-label.tsx",
	},
	"tabs:basic": {
		component: lazy(() =>
			import("./tabs/basic").then((m) => ({ default: m.Basic })),
		),
		file: "tabs/basic.tsx",
	},
	"tabs:disabled": {
		component: lazy(() =>
			import("./tabs/disabled").then((m) => ({ default: m.Disabled })),
		),
		file: "tabs/disabled.tsx",
	},
	"tabs:sizes": {
		component: lazy(() =>
			import("./tabs/sizes").then((m) => ({ default: m.Sizes })),
		),
		file: "tabs/sizes.tsx",
	},
	"tabs:variants": {
		component: lazy(() =>
			import("./tabs/variants").then((m) => ({ default: m.Variants })),
		),
		file: "tabs/variants.tsx",
	},
	"tabs:vertical": {
		component: lazy(() =>
			import("./tabs/vertical").then((m) => ({ default: m.Vertical })),
		),
		file: "tabs/vertical.tsx",
	},
	"tag:basic": {
		component: lazy(() =>
			import("./tag/basic").then((m) => ({ default: m.Basic })),
		),
		file: "tag/basic.tsx",
	},
	"tag:variants": {
		component: lazy(() =>
			import("./tag/variants").then((m) => ({ default: m.Variants })),
		),
		file: "tag/variants.tsx",
	},
	"tag:with-icon": {
		component: lazy(() =>
			import("./tag/with-icon").then((m) => ({ default: m.WithIcon })),
		),
		file: "tag/with-icon.tsx",
	},
	"tags-input:basic": {
		component: lazy(() =>
			import("./tags-input/basic").then((m) => ({ default: m.Basic })),
		),
		file: "tags-input/basic.tsx",
	},
	"tags-input:clearable": {
		component: lazy(() =>
			import("./tags-input/clearable").then((m) => ({ default: m.Clearable })),
		),
		file: "tags-input/clearable.tsx",
	},
	"text:basic": {
		component: lazy(() =>
			import("./text/basic").then((m) => ({ default: m.Basic })),
		),
		file: "text/basic.tsx",
	},
	"text:line-clamp": {
		component: lazy(() =>
			import("./text/line-clamp").then((m) => ({ default: m.LineClamp })),
		),
		file: "text/line-clamp.tsx",
	},
	"text:sizes": {
		component: lazy(() =>
			import("./text/sizes").then((m) => ({ default: m.Sizes })),
		),
		file: "text/sizes.tsx",
	},
	"text:truncate": {
		component: lazy(() =>
			import("./text/truncate").then((m) => ({ default: m.Truncate })),
		),
		file: "text/truncate.tsx",
	},
	"text:weights": {
		component: lazy(() =>
			import("./text/weights").then((m) => ({ default: m.Weights })),
		),
		file: "text/weights.tsx",
	},
	"textarea:basic": {
		component: lazy(() =>
			import("./textarea/basic").then((m) => ({ default: m.Basic })),
		),
		file: "textarea/basic.tsx",
	},
	"textarea:disabled": {
		component: lazy(() =>
			import("./textarea/disabled").then((m) => ({ default: m.Disabled })),
		),
		file: "textarea/disabled.tsx",
	},
	"textarea:sizes": {
		component: lazy(() =>
			import("./textarea/sizes").then((m) => ({ default: m.Sizes })),
		),
		file: "textarea/sizes.tsx",
	},
	"textarea:variants": {
		component: lazy(() =>
			import("./textarea/variants").then((m) => ({ default: m.Variants })),
		),
		file: "textarea/variants.tsx",
	},
	"tile:basic": {
		component: lazy(() =>
			import("./tile/basic").then((m) => ({ default: m.Basic })),
		),
		file: "tile/basic.tsx",
	},
	"tile:orientation": {
		component: lazy(() =>
			import("./tile/orientation").then((m) => ({ default: m.Orientation })),
		),
		file: "tile/orientation.tsx",
	},
	"tile:variants": {
		component: lazy(() =>
			import("./tile/variants").then((m) => ({ default: m.Variants })),
		),
		file: "tile/variants.tsx",
	},
	"timer:basic": {
		component: lazy(() =>
			import("./timer/basic").then((m) => ({ default: m.Basic })),
		),
		file: "timer/basic.tsx",
	},
	"timer:countdown": {
		component: lazy(() =>
			import("./timer/countdown").then((m) => ({ default: m.Countdown })),
		),
		file: "timer/countdown.tsx",
	},
	"toast:basic": {
		component: lazy(() =>
			import("./toast/basic").then((m) => ({ default: m.Basic })),
		),
		file: "toast/basic.tsx",
	},
	"toast:custom-icon": {
		component: lazy(() =>
			import("./toast/custom-icon").then((m) => ({ default: m.CustomIcon })),
		),
		file: "toast/custom-icon.tsx",
	},
	"toast:dismissable": {
		component: lazy(() =>
			import("./toast/dismissable").then((m) => ({ default: m.Dismissable })),
		),
		file: "toast/dismissable.tsx",
	},
	"toast:duration": {
		component: lazy(() =>
			import("./toast/duration").then((m) => ({ default: m.Duration })),
		),
		file: "toast/duration.tsx",
	},
	"toast:type": {
		component: lazy(() =>
			import("./toast/type").then((m) => ({ default: m.Type })),
		),
		file: "toast/type.tsx",
	},
	"toggle:basic": {
		component: lazy(() =>
			import("./toggle/basic").then((m) => ({ default: m.Basic })),
		),
		file: "toggle/basic.tsx",
	},
	"toggle:controlled": {
		component: lazy(() =>
			import("./toggle/controlled").then((m) => ({ default: m.Controlled })),
		),
		file: "toggle/controlled.tsx",
	},
	"toggle:disabled": {
		component: lazy(() =>
			import("./toggle/disabled").then((m) => ({ default: m.Disabled })),
		),
		file: "toggle/disabled.tsx",
	},
	"toggle:indicator": {
		component: lazy(() =>
			import("./toggle/indicator").then((m) => ({ default: m.Indicator })),
		),
		file: "toggle/indicator.tsx",
	},
	"toggle-group:attached": {
		component: lazy(() =>
			import("./toggle-group/attached").then((m) => ({ default: m.Attached })),
		),
		file: "toggle-group/attached.tsx",
	},
	"toggle-group:basic": {
		component: lazy(() =>
			import("./toggle-group/basic").then((m) => ({ default: m.Basic })),
		),
		file: "toggle-group/basic.tsx",
	},
	"toggle-group:controlled": {
		component: lazy(() =>
			import("./toggle-group/controlled").then((m) => ({
				default: m.Controlled,
			})),
		),
		file: "toggle-group/controlled.tsx",
	},
	"toggle-group:disabled": {
		component: lazy(() =>
			import("./toggle-group/disabled").then((m) => ({ default: m.Disabled })),
		),
		file: "toggle-group/disabled.tsx",
	},
	"toggle-group:multiple": {
		component: lazy(() =>
			import("./toggle-group/multiple").then((m) => ({ default: m.Multiple })),
		),
		file: "toggle-group/multiple.tsx",
	},
	"toggle-group:orientation": {
		component: lazy(() =>
			import("./toggle-group/orientation").then((m) => ({
				default: m.Orientation,
			})),
		),
		file: "toggle-group/orientation.tsx",
	},
	"tooltip:basic": {
		component: lazy(() =>
			import("./tooltip/basic").then((m) => ({ default: m.Basic })),
		),
		file: "tooltip/basic.tsx",
	},
	"tooltip:delay": {
		component: lazy(() =>
			import("./tooltip/delay").then((m) => ({ default: m.Delay })),
		),
		file: "tooltip/delay.tsx",
	},
	"tooltip:interactive": {
		component: lazy(() =>
			import("./tooltip/interactive").then((m) => ({ default: m.Interactive })),
		),
		file: "tooltip/interactive.tsx",
	},
	"tree-view:basic": {
		component: lazy(() =>
			import("./tree-view/basic").then((m) => ({ default: m.Basic })),
		),
		file: "tree-view/basic.tsx",
	},
	"tree-view:checkbox": {
		component: lazy(() =>
			import("./tree-view/checkbox").then((m) => ({ default: m.Checkbox })),
		),
		file: "tree-view/checkbox.tsx",
	},
	"wheel-picker:basic": {
		component: lazy(() =>
			import("./wheel-picker/basic").then((m) => ({ default: m.Basic })),
		),
		file: "wheel-picker/basic.tsx",
	},
	"wheel-picker:variants": {
		component: lazy(() =>
			import("./wheel-picker/variants").then((m) => ({ default: m.Variants })),
		),
		file: "wheel-picker/variants.tsx",
	},
	"wheel-picker:radius": {
		component: lazy(() =>
			import("./wheel-picker/radius").then((m) => ({ default: m.Radius })),
		),
		file: "wheel-picker/radius.tsx",
	},
};

export function getDemo(name: string): DemoItem | undefined {
	return demos[name];
}
