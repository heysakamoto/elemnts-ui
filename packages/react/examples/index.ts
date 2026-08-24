export type DemoItem = {
  name: string;
  path: string;
};

export const examples: Record<string, DemoItem> = {
  "base:introduction": {
    name: "base:introduction",
    path: "base/introduction.tsx",
  },
  "base:animations": { name: "base-animations", path: "base/animations.tsx" },
  "base:colors": { name: "base-colors", path: "base/colors.tsx" },
  "base:design-principles": {
    name: "base-design-principles",
    path: "base/design-principles.tsx",
  },
  "base:surfaces-base": {
    name: "base-surfaces-base",
    path: "base/surfaces-base.tsx",
  },
  "base:surfaces-all": {
    name: "base-surfaces-all",
    path: "base/surfaces-all.tsx",
  },
  "accordion:basic": { name: "accordion-basic", path: "accordion/basic.tsx" },
  "accordion:disabled": {
    name: "accordion-disabled",
    path: "accordion/disabled.tsx",
  },
  "accordion:multiple": {
    name: "accordion-multiple",
    path: "accordion/multiple.tsx",
  },
  "accordion:with-icon": {
    name: "accordion-with-icon",
    path: "accordion/with-icon.tsx",
  },
  "alert:basic": { name: "alert-basic", path: "alert/basic.tsx" },
  "alert:control": { name: "alert-control", path: "alert/control.tsx" },
  "alert:description": {
    name: "alert-description",
    path: "alert/description.tsx",
  },
  "alert:status": { name: "alert-status", path: "alert/status.tsx" },
  "alert:variants": { name: "alert-variants", path: "alert/variants.tsx" },
  "anchor:basic": { name: "anchor-basic", path: "anchor/basic.tsx" },
  "anchor:routers": { name: "anchor-routers", path: "anchor/routers.tsx" },
  "anchor:variants": { name: "anchor-variants", path: "anchor/variants.tsx" },
  "anchor:within-text": {
    name: "anchor-within-text",
    path: "anchor/within-text.tsx",
  },
  "aspect-ratio:basic": {
    name: "aspect-ratio-basic",
    path: "aspect-ratio/basic.tsx",
  },
  "avatar:basic": { name: "avatar-basic", path: "avatar/basic.tsx" },
  "avatar:colors": { name: "avatar-colors", path: "avatar/colors.tsx" },
  "avatar:ring": { name: "avatar-ring", path: "avatar/ring.tsx" },
  "avatar:shapes": { name: "avatar-shapes", path: "avatar/shapes.tsx" },
  "avatar:sizes": { name: "avatar-sizes", path: "avatar/sizes.tsx" },
  "avatar:variants": { name: "avatar-variants", path: "avatar/variants.tsx" },
  "avatar:with-badge": {
    name: "avatar-with-badge",
    path: "avatar/with-badge.tsx",
  },
  "badge:basic": { name: "badge-basic", path: "badge/basic.tsx" },
  "badge:content": { name: "badge-content", path: "badge/content.tsx" },
  "badge:placements": {
    name: "badge-placements",
    path: "badge/placements.tsx",
  },
  "badge:sizes": { name: "badge-sizes", path: "badge/sizes.tsx" },
  "badge:variants": { name: "badge-variants", path: "badge/variants.tsx" },
  "blockquote:basic": {
    name: "blockquote-basic",
    path: "blockquote/basic.tsx",
  },
  "box:basic": { name: "box-basic", path: "box/basic.tsx" },
  "box:pseudo-props": {
    name: "box-pseudo-props",
    path: "box/pseudo-props.tsx",
  },
  "box:shorthand": { name: "box-shorthand", path: "box/shorthand.tsx" },
  "breadcrumb:basic": {
    name: "breadcrumb-basic",
    path: "breadcrumb/basic.tsx",
  },
  "breadcrumb:collapsed": {
    name: "breadcrumb-collapsed",
    path: "breadcrumb/collapsed.tsx",
  },
  "breadcrumb:custom-separator": {
    name: "breadcrumb-custom-separator",
    path: "breadcrumb/custom-separator.tsx",
  },
  "button:basic": { name: "button-basic", path: "button/basic.tsx" },
  "button:icon": { name: "button-icon", path: "button/icon.tsx" },
  "button:sizes": { name: "button-sizes", path: "button/sizes.tsx" },
  "button:variants": { name: "button-variants", path: "button/variants.tsx" },
  "button:disabled": { name: "button-disabled", path: "button/disabled.tsx" },
  "button-group:basic": {
    name: "button-group-basic",
    path: "button-group/basic.tsx",
  },
  "button-group:full-width": {
    name: "button-group-full-width",
    path: "button-group/full-width.tsx",
  },
  "button-group:orientation": {
    name: "button-group-orientation",
    path: "button-group/orientation.tsx",
  },
  "button-group:palettes": {
    name: "button-group-palettes",
    path: "button-group/palettes.tsx",
  },
  "button-group:sizes": {
    name: "button-group-sizes",
    path: "button-group/sizes.tsx",
  },
  "button-group:variants": {
    name: "button-group-variants",
    path: "button-group/variants.tsx",
  },
  "carousel:autoplay": {
    name: "carousel-autoplay",
    path: "carousel/autoplay.tsx",
  },
  "carousel:basic": { name: "carousel-basic", path: "carousel/basic.tsx" },
  "carousel:spacing": {
    name: "carousel-spacing",
    path: "carousel/spacing.tsx",
  },
  "carousel:vertical": {
    name: "carousel-vertical",
    path: "carousel/vertical.tsx",
  },
  "carousel:thumbnail": {
    name: "carousel-thumbnail",
    path: "carousel/thumbnail.tsx",
  },

  "checkbox:basic": { name: "checkbox-basic", path: "checkbox/basic.tsx" },
  "checkbox:group": { name: "checkbox-group", path: "checkbox/group.tsx" },
  "checkmark:basic": { name: "checkmark-basic", path: "checkmark/basic.tsx" },
  "checkmark:indeterminate": {
    name: "checkmark-indeterminate",
    path: "checkmark/indeterminate.tsx",
  },
  "checkmark:variants": {
    name: "checkmark-variants",
    path: "checkmark/variants.tsx",
  },
  "checkmark:sizes": {
    name: "checkmark-sizes",
    path: "checkmark/sizes.tsx",
  },
  "chip:basic": { name: "chip-basic", path: "chip/basic.tsx" },
  "chip:sizes": { name: "chip-sizes", path: "chip/sizes.tsx" },
  "chip:variants": { name: "chip-variants", path: "chip/variants.tsx" },
  "chip:with-icon": { name: "chip-with-icon", path: "chip/with-icon.tsx" },
  "client-only:basic": {
    name: "client-only-basic",
    path: "client-only/basic.tsx",
  },
  "client-only:fallback": {
    name: "client-only-fallback",
    path: "client-only/fallback.tsx",
  },
  "client-only:render-fn": {
    name: "client-only-render-fn",
    path: "client-only/render-fn.tsx",
  },
  "clipboard:basic": { name: "clipboard-basic", path: "clipboard/basic.tsx" },
  "clipboard:timeout": {
    name: "clipboard-timeout",
    path: "clipboard/timeout.tsx",
  },
  "clipboard:with-input": {
    name: "clipboard-with-input",
    path: "clipboard/with-input.tsx",
  },
  "color-theme:basic": {
    name: "color-theme-basic",
    path: "color-theme/basic.tsx",
  },
  "color-theme:forced": {
    name: "color-theme-forced",
    path: "color-theme/forced.tsx",
  },
  "code:basic": { name: "code-basic", path: "code/basic.tsx" },
  "code:sizes": { name: "code-sizes", path: "code/sizes.tsx" },
  "code:variants": { name: "code-variants", path: "code/variants.tsx" },
  "collapsible:basic": {
    name: "collapsible-basic",
    path: "collapsible/basic.tsx",
  },
  "collapsible:default-open": {
    name: "collapsible-default-open",
    path: "collapsible/default-open.tsx",
  },
  "collapsible:disabled": {
    name: "collapsible-disabled",
    path: "collapsible/disabled.tsx",
  },
  "collapsible:partial-height": {
    name: "collapsible-partial-height",
    path: "collapsible/partial-height.tsx",
  },
  "color-picker:area-channels": {
    name: "color-picker-area-channels",
    path: "color-picker/area-channels.tsx",
  },
  "color-picker:basic": {
    name: "color-picker-basic",
    path: "color-picker/basic.tsx",
  },
  "color-picker:channel-slider-alpha": {
    name: "color-picker-channel-slider-alpha",
    path: "color-picker/channel-slider-alpha.tsx",
  },
  "color-picker:channel-sliders-rgb": {
    name: "color-picker-channel-sliders-rgb",
    path: "color-picker/channel-sliders-rgb.tsx",
  },
  "color-picker:swatch-grid": {
    name: "color-picker-swatch-grid",
    path: "color-picker/swatch-grid.tsx",
  },
  "combobox:basic": { name: "combobox-basic", path: "combobox/basic.tsx" },
  "combobox:disabled": {
    name: "combobox-disabled",
    path: "combobox/disabled.tsx",
  },
  "combobox:highlight-matching-text": {
    name: "combobox-highlight-matching-text",
    path: "combobox/highlight-matching-text.tsx",
  },
  "combobox:multiple": {
    name: "combobox-multiple",
    path: "combobox/multiple.tsx",
  },
  "container:basic": { name: "container-basic", path: "container/basic.tsx" },
  "container:fluid": { name: "container-fluid", path: "container/fluid.tsx" },
  "container:sizes": { name: "container-sizes", path: "container/sizes.tsx" },
  "data-list:basic": { name: "data-list-basic", path: "data-list/basic.tsx" },
  "data-list:horizontal": {
    name: "data-list-horizontal",
    path: "data-list/horizontal.tsx",
  },
  "date-input:basic": {
    name: "date-input-basic",
    path: "date-input/basic.tsx",
  },
  "date-input:disabled": {
    name: "date-input-disabled",
    path: "date-input/disabled.tsx",
  },
  "date-input:with-field": {
    name: "date-input-with-field",
    path: "date-input/with-field.tsx",
  },
  "date-picker:basic": {
    name: "date-picker-basic",
    path: "date-picker/basic.tsx",
  },
  "date-picker:range": {
    name: "date-picker-range",
    path: "date-picker/range.tsx",
  },
  "decorative-box:basic": {
    name: "decorative-box-basic",
    path: "decorative-box/basic.tsx",
  },
  "decorative-box:variants": {
    name: "decorative-box-variants",
    path: "decorative-box/variants.tsx",
  },
  "dialog:basic": { name: "dialog-basic", path: "dialog/basic.tsx" },
  "dialog:cover": { name: "dialog-cover", path: "dialog/cover.tsx" },
  "dialog:fullscreen": {
    name: "dialog-fullscreen",
    path: "dialog/fullscreen.tsx",
  },
  "dialog:placements": {
    name: "dialog-placements",
    path: "dialog/placements.tsx",
  },
  "dialog:sizes": { name: "dialog-sizes", path: "dialog/sizes.tsx" },
  "drawer:basic": { name: "drawer-basic", path: "drawer/basic.tsx" },
  "drawer:controlled": {
    name: "drawer-controlled",
    path: "drawer/controlled.tsx",
  },
  "drawer:swipe-directions": {
    name: "drawer-swipe-directions",
    path: "drawer/swipe-directions.tsx",
  },
  "download:asynchronous-data": {
    name: "download-asynchronous-data",
    path: "download/asynchronous-data.tsx",
  },
  "download:basic": { name: "download-basic", path: "download/basic.tsx" },
  "download:file-size": {
    name: "download-file-size",
    path: "download/file-size.tsx",
  },
  "download:svg": { name: "download-svg", path: "download/svg.tsx" },
  "empty-state:basic": {
    name: "empty-state-basic",
    path: "empty-state/basic.tsx",
  },
  "empty-state:custom-icon": {
    name: "empty-state-custom-icon",
    path: "empty-state/custom-icon.tsx",
  },
  "empty-state:with-action": {
    name: "empty-state-with-action",
    path: "empty-state/with-action.tsx",
  },
  "editable:basic": { name: "editable-basic", path: "editable/basic.tsx" },
  "editable:custom-controls": {
    name: "editable-custom-controls",
    path: "editable/custom-controls.tsx",
  },
  "elevated:basic": { name: "elevated-basic", path: "elevated/basic.tsx" },
  "elevated:no-border": {
    name: "elevated-no-border",
    path: "elevated/no-border.tsx",
  },
  "elevated:shadow-override": {
    name: "elevated-shadow-override",
    path: "elevated/shadow-override.tsx",
  },
  "environment:basic": {
    name: "environment-basic",
    path: "environment/basic.tsx",
  },
  "field:basic": { name: "field-basic", path: "field/basic.tsx" },
  "field:disabled": { name: "field-disabled", path: "field/disabled.tsx" },
  "field:helper-text": {
    name: "field-helper-text",
    path: "field/helper-text.tsx",
  },
  "field:invalid": { name: "field-invalid", path: "field/invalid.tsx" },
  "fieldset:basic": { name: "fieldset-basic", path: "fieldset/basic.tsx" },
  "fieldset:disabled": {
    name: "fieldset-disabled",
    path: "fieldset/disabled.tsx",
  },
  "fieldset:invalid": {
    name: "fieldset-invalid",
    path: "fieldset/invalid.tsx",
  },
  "file-upload:basic": {
    name: "file-upload-basic",
    path: "file-upload/basic.tsx",
  },
  "file-upload:dropzone": {
    name: "file-upload-dropzone",
    path: "file-upload/dropzone.tsx",
  },
  "floating-panel:basic": {
    name: "floating-panel-basic",
    path: "floating-panel/basic.tsx",
  },
  "focus-trap:basic": {
    name: "focus-trap-basic",
    path: "focus-trap/basic.tsx",
  },
  "for:basic": { name: "for-basic", path: "for/basic.tsx" },
  "for:fallback": { name: "for-fallback", path: "for/fallback.tsx" },
  "format:byte": { name: "format-byte", path: "format/byte.tsx" },
  "format:number": { name: "format-number", path: "format/number.tsx" },
  "format:relative-time": {
    name: "format-relative-time",
    path: "format/relative-time.tsx",
  },
  "frame:basic": { name: "frame-basic", path: "frame/basic.tsx" },
  "frame:head": { name: "frame-head", path: "frame/head.tsx" },
  "grid:basic": { name: "grid-basic", path: "grid/basic.tsx" },
  "grid:col-span": { name: "grid-col-span", path: "grid/col-span.tsx" },
  "grid:row-span": { name: "grid-row-span", path: "grid/row-span.tsx" },
  "group:attached": { name: "group-attached", path: "group/attached.tsx" },
  "group:basic": { name: "group-basic", path: "group/basic.tsx" },
  "group:button": { name: "group-button", path: "group/button.tsx" },
  "group:full-width": {
    name: "group-full-width",
    path: "group/full-width.tsx",
  },
  "highlight:basic": { name: "highlight-basic", path: "highlight/basic.tsx" },
  "highlight:multiple": {
    name: "highlight-multiple",
    path: "highlight/multiple.tsx",
  },
  "highlight:search-query": {
    name: "highlight-search-query",
    path: "highlight/search-query.tsx",
  },
  "highlight:squiggle": {
    name: "highlight-squiggle",
    path: "highlight/squiggle.tsx",
  },
  "hover-card:basic": {
    name: "hover-card-basic",
    path: "hover-card/basic.tsx",
  },
  "hover-card:delays": {
    name: "hover-card-delays",
    path: "hover-card/delays.tsx",
  },
  "icon:basic": { name: "icon-basic", path: "icon/basic.tsx" },
  "icon:collections": {
    name: "icon-collections",
    path: "icon/collections.tsx",
  },
  "icon:custom": { name: "icon-custom", path: "icon/custom.tsx" },
  "icon:storage": { name: "icon-storage", path: "icon/storage.tsx" },
  "image:basic": { name: "image-basic", path: "image/basic.tsx" },
  "image:circular": { name: "image-circular", path: "image/circular.tsx" },
  "image:height": { name: "image-height", path: "image/height.tsx" },
  "image-cropper:basic": {
    name: "image-cropper-basic",
    path: "image-cropper/basic.tsx",
  },
  "image-cropper:controls": {
    name: "image-cropper-controls",
    path: "image-cropper/controls.tsx",
  },
  "input-group:basic": {
    name: "input-group-basic",
    path: "input-group/basic.tsx",
  },
  "input-group:sizes": {
    name: "input-group-sizes",
    path: "input-group/sizes.tsx",
  },
  "input-group:variants": {
    name: "input-group-variants",
    path: "input-group/variants.tsx",
  },
  "input:basic": { name: "input-basic", path: "input/basic.tsx" },
  "input:disabled": { name: "input-disabled", path: "input/disabled.tsx" },
  "input:sizes": { name: "input-sizes", path: "input/sizes.tsx" },
  "input:variants": { name: "input-variants", path: "input/variants.tsx" },
  "item:basic": { name: "item-basic", path: "item/basic.tsx" },
  "item:icon-only": { name: "item-icon-only", path: "item/icon-only.tsx" },
  "item:variants": { name: "item-variants", path: "item/variants.tsx" },
  "json-tree-view:basic": {
    name: "json-tree-view-basic",
    path: "json-tree-view/basic.tsx",
  },
  "json-tree-view:custom-value-rendering": {
    name: "json-tree-view-custom-value-rendering",
    path: "json-tree-view/custom-value-rendering.tsx",
  },
  "json-tree-view:expanded-depth": {
    name: "json-tree-view-expanded-depth",
    path: "json-tree-view/expanded-depth.tsx",
  },
  "kbd:basic": { name: "kbd-basic", path: "kbd/basic.tsx" },
  "kbd:inline": { name: "kbd-inline", path: "kbd/inline.tsx" },
  "kbd:navigation-keys": {
    name: "kbd-navigation-keys",
    path: "kbd/navigation-keys.tsx",
  },
  "kbd:palettes": { name: "kbd-palettes", path: "kbd/palettes.tsx" },
  "kbd:sizes": { name: "kbd-sizes", path: "kbd/sizes.tsx" },
  "kbd:variants": { name: "kbd-variants", path: "kbd/variants.tsx" },
  "label:basic": { name: "label-basic", path: "label/basic.tsx" },
  "list:basic": { name: "list-basic", path: "list/basic.tsx" },
  "list:nested": { name: "list-nested", path: "list/nested.tsx" },
  "list:ordered": { name: "list-ordered", path: "list/ordered.tsx" },
  "list:with-indicator": {
    name: "list-with-indicator",
    path: "list/with-indicator.tsx",
  },
  "listbox:basic": { name: "listbox-basic", path: "listbox/basic.tsx" },
  "listbox:checkmark": {
    name: "listbox-checkmark",
    path: "listbox/checkmark.tsx",
  },
  "listbox:disabled": {
    name: "listbox-disabled",
    path: "listbox/disabled.tsx",
  },
  "locale:basic": { name: "locale-basic", path: "locale/basic.tsx" },
  "locale:rtl": { name: "locale-rtl", path: "locale/rtl.tsx" },
  "mark:basic": { name: "mark-basic", path: "mark/basic.tsx" },
  "mark:palettes": { name: "mark-palettes", path: "mark/palettes.tsx" },
  "mark:variants": { name: "mark-variants", path: "mark/variants.tsx" },
  "marquee:basic": { name: "marquee-basic", path: "marquee/basic.tsx" },
  "marquee:edges": { name: "marquee-edges", path: "marquee/edges.tsx" },
  "marquee:reversed": {
    name: "marquee-reversed",
    path: "marquee/reversed.tsx",
  },
  "marquee:vertical": {
    name: "marquee-vertical",
    path: "marquee/vertical.tsx",
  },
  "menu:basic": { name: "menu-basic", path: "menu/basic.tsx" },
  "menu:command": { name: "menu-command", path: "menu/command.tsx" },
  "menu:context-menu": {
    name: "menu-context-menu",
    path: "menu/context-menu.tsx",
  },
  "menu:group": { name: "menu-group", path: "menu/group.tsx" },
  "menu:submenu": { name: "menu-submenu", path: "menu/submenu.tsx" },
  "number-input:basic": {
    name: "number-input-basic",
    path: "number-input/basic.tsx",
  },
  "number-input:min-max": {
    name: "number-input-min-max",
    path: "number-input/min-max.tsx",
  },
  "number-input:scrubber": {
    name: "number-input-scrubber",
    path: "number-input/scrubber.tsx",
  },
  "number-input:step": {
    name: "number-input-step",
    path: "number-input/step.tsx",
  },
  "pagination:attached": {
    name: "pagination-attached",
    path: "pagination/attached.tsx",
  },
  "pagination:basic": {
    name: "pagination-basic",
    path: "pagination/basic.tsx",
  },
  "pagination:sibling-count": {
    name: "pagination-sibling-count",
    path: "pagination/sibling-count.tsx",
  },
  "pagination:store": {
    name: "pagination-store",
    path: "pagination/store.tsx",
  },
  "password-input:basic": {
    name: "password-input-basic",
    path: "password-input/basic.tsx",
  },
  "password-input:with-field": {
    name: "password-input-with-field",
    path: "password-input/with-field.tsx",
  },
  "pin-input:basic": { name: "pin-input-basic", path: "pin-input/basic.tsx" },
  "pin-input:masking": {
    name: "pin-input-masking",
    path: "pin-input/masking.tsx",
  },
  "pin-input:otp-mode": {
    name: "pin-input-otp-mode",
    path: "pin-input/otp-mode.tsx",
  },
  "pin-input:with-field": {
    name: "pin-input-with-field",
    path: "pin-input/with-field.tsx",
  },
  "popover:basic": { name: "popover-basic", path: "popover/basic.tsx" },
  "popover:same-width": {
    name: "popover-same-width",
    path: "popover/same-width.tsx",
  },
  "portal:basic": { name: "portal-basic", path: "portal/basic.tsx" },
  "portal:custom-container": {
    name: "portal-custom-container",
    path: "portal/custom-container.tsx",
  },
  "portal:disabled": { name: "portal-disabled", path: "portal/disabled.tsx" },
  "presence:basic": { name: "presence-basic", path: "presence/basic.tsx" },
  "presence:lazy-mount": {
    name: "presence-lazy-mount",
    path: "presence/lazy-mount.tsx",
  },
  "presence:unmount": {
    name: "presence-unmount",
    path: "presence/unmount.tsx",
  },
  "progress-circle:basic": {
    name: "progress-circle-basic",
    path: "progress-circle/basic.tsx",
  },
  "progress-circle:indeterminate": {
    name: "progress-circle-indeterminate",
    path: "progress-circle/indeterminate.tsx",
  },
  "progress:basic": { name: "progress-basic", path: "progress/basic.tsx" },
  "progress:indeterminate": {
    name: "progress-indeterminate",
    path: "progress/indeterminate.tsx",
  },
  "progress:with-label": {
    name: "progress-with-label",
    path: "progress/with-label.tsx",
  },
  "prose:basic": { name: "prose-basic", path: "prose/basic.tsx" },
  "qr-code:basic": { name: "qr-code-basic", path: "qr-code/basic.tsx" },
  "qr-code:download": {
    name: "qr-code-download",
    path: "qr-code/download.tsx",
  },
  "qr-code:fill": { name: "qr-code-fill", path: "qr-code/fill.tsx" },
  "qr-code:logo-overlay": {
    name: "qr-code-logo-overlay",
    path: "qr-code/logo-overlay.tsx",
  },
  "radio-group:basic": {
    name: "radio-group-basic",
    path: "radio-group/basic.tsx",
  },
  "radio-group:disabled": {
    name: "radio-group-disabled",
    path: "radio-group/disabled.tsx",
  },
  "radio-group:horizontal": {
    name: "radio-group-horizontal",
    path: "radio-group/horizontal.tsx",
  },
  "radiomark:basic": { name: "radiomark-basic", path: "radiomark/basic.tsx" },
  "radiomark:variants": {
    name: "radiomark-variants",
    path: "radiomark/variants.tsx",
  },
  "rating-group:basic": {
    name: "rating-group-basic",
    path: "rating-group/basic.tsx",
  },
  "rating-group:disabled": {
    name: "rating-group-disabled",
    path: "rating-group/disabled.tsx",
  },
  "rating-group:half-rating": {
    name: "rating-group-half-rating",
    path: "rating-group/half-rating.tsx",
  },
  "rating-group:palette": {
    name: "rating-group-palette",
    path: "rating-group/palette.tsx",
  },
  "rating-group:read-only": {
    name: "rating-group-read-only",
    path: "rating-group/read-only.tsx",
  },
  "scroll-area:basic": {
    name: "scroll-area-basic",
    path: "scroll-area/basic.tsx",
  },
  "scroll-area:horizontal": {
    name: "scroll-area-horizontal",
    path: "scroll-area/horizontal.tsx",
  },
  "scroll-area:rtl": { name: "scroll-area-rtl", path: "scroll-area/rtl.tsx" },
  "scroll-area:sizes": {
    name: "scroll-area-sizes",
    path: "scroll-area/sizes.tsx",
  },
  "scroll-area:variants": {
    name: "scroll-area-variants",
    path: "scroll-area/variants.tsx",
  },
  "scroll-shadow:basic": {
    name: "scroll-shadow-basic",
    path: "scroll-shadow/basic.tsx",
  },
  "scroll-shadow:custom-size": {
    name: "scroll-shadow-custom-size",
    path: "scroll-shadow/custom-size.tsx",
  },
  "scroll-shadow:orientation": {
    name: "scroll-shadow-orientation",
    path: "scroll-shadow/orientation.tsx",
  },
  "scroll-shadow:with-surface": {
    name: "scroll-shadow-with-surface",
    path: "scroll-shadow/with-surface.tsx",
  },
  "section:basic": { name: "section-basic", path: "section/basic.tsx" },
  "segment-group:basic": {
    name: "segment-group-basic",
    path: "segment-group/basic.tsx",
  },
  "segment-group:sizes": {
    name: "segment-group-sizes",
    path: "segment-group/sizes.tsx",
  },
  "segment-group:variants": {
    name: "segment-group-variants",
    path: "segment-group/variants.tsx",
  },
  "segment-group:vertical": {
    name: "segment-group-vertical",
    path: "segment-group/vertical.tsx",
  },
  "select:basic": { name: "select-basic", path: "select/basic.tsx" },
  "select:disabled": { name: "select-disabled", path: "select/disabled.tsx" },
  "select:group": { name: "select-group", path: "select/group.tsx" },
  "select:with-icons": {
    name: "select-with-icons",
    path: "select/with-icons.tsx",
  },
  "separator:basic": { name: "separator-basic", path: "separator/basic.tsx" },
  "separator:label": { name: "separator-label", path: "separator/label.tsx" },
  "separator:sizes": { name: "separator-sizes", path: "separator/sizes.tsx" },
  "separator:vertical": {
    name: "separator-vertical",
    path: "separator/vertical.tsx",
  },
  "separator-group:basic": {
    name: "separator-group-basic",
    path: "separator-group/basic.tsx",
  },
  "separator-group:caption": {
    name: "separator-group-caption",
    path: "separator-group/caption.tsx",
  },
  "show:basic": { name: "show-basic", path: "show/basic.tsx" },
  "show:fallback": { name: "show-fallback", path: "show/fallback.tsx" },
  "show:nested": { name: "show-nested", path: "show/nested.tsx" },
  "show:render-fn": { name: "show-render-fn", path: "show/render-fn.tsx" },
  "signature-pad:basic": {
    name: "signature-pad-basic",
    path: "signature-pad/basic.tsx",
  },
  "skip-nav:basic": { name: "skip-nav-basic", path: "skip-nav/basic.tsx" },
  "skeleton:basic": { name: "skeleton-basic", path: "skeleton/basic.tsx" },
  "skeleton:text-only": {
    name: "skeleton-text-only",
    path: "skeleton/text-only.tsx",
  },
  "skeleton:variants": {
    name: "skeleton-variants",
    path: "skeleton/variants.tsx",
  },
  "sortable:basic": { name: "sortable-basic", path: "sortable/basic.tsx" },
  "sortable:horizontal": {
    name: "sortable-horizontal",
    path: "sortable/horizontal.tsx",
  },
  "sortable:with-handle-icon": {
    name: "sortable-with-handle-icon",
    path: "sortable/with-handle-icon.tsx",
  },
  "slider:basic": { name: "slider-basic", path: "slider/basic.tsx" },
  "slider:minmax": { name: "slider-minmax", path: "slider/minmax.tsx" },
  "slider:range": { name: "slider-range", path: "slider/range.tsx" },
  "spinner:basic": { name: "spinner-basic", path: "spinner/basic.tsx" },
  "spinner:custom-icon": {
    name: "spinner-custom-icon",
    path: "spinner/custom-icon.tsx",
  },
  "spinner:variants": {
    name: "spinner-variants",
    path: "spinner/variants.tsx",
  },
  "splitter:basic": { name: "splitter-basic", path: "splitter/basic.tsx" },
  "splitter:disabled-resize": {
    name: "splitter-disabled-resize",
    path: "splitter/disabled-resize.tsx",
  },
  "splitter:multiple-panels": {
    name: "splitter-multiple-panels",
    path: "splitter/multiple-panels.tsx",
  },
  "splitter:separator-only": {
    name: "splitter-separator-only",
    path: "splitter/separator-only.tsx",
  },
  "splitter:vertical": {
    name: "splitter-vertical",
    path: "splitter/vertical.tsx",
  },
  "stack:basic": { name: "stack-basic", path: "stack/basic.tsx" },
  "stack:responsive-direction": {
    name: "stack-responsive-direction",
    path: "stack/responsive-direction.tsx",
  },
  "stack:vertical": { name: "stack-vertical", path: "stack/vertical.tsx" },
  "stat:basic": { name: "stat-basic", path: "stat/basic.tsx" },
  "stat:indicator": { name: "stat-indicator", path: "stat/indicator.tsx" },
  "stat:unit": { name: "stat-unit", path: "stat/unit.tsx" },
  "status:basic": { name: "status-basic", path: "status/basic.tsx" },
  "status:only-indicator": {
    name: "status-only-indicator",
    path: "status/only-indicator.tsx",
  },
  "status:sizes": { name: "status-sizes", path: "status/sizes.tsx" },
  "steps:basic": { name: "steps-basic", path: "steps/basic.tsx" },
  "substrate:basic": { name: "substrate-basic", path: "substrate/basic.tsx" },
  "surface:basic": { name: "surface-basic", path: "surface/basic.tsx" },
  "surface:variants": {
    name: "surface-variants",
    path: "surface/variants.tsx",
  },
  "swap:basic": { name: "swap-basic", path: "swap/basic.tsx" },
  "swap:fade": { name: "swap-fade", path: "swap/fade.tsx" },
  "swap:flip": { name: "swap-flip", path: "swap/flip.tsx" },
  "swap:rotate": { name: "swap-rotate", path: "swap/rotate.tsx" },
  "swap:scale": { name: "swap-scale", path: "swap/scale.tsx" },
  "swatch:basic": { name: "swatch-basic", path: "swatch/basic.tsx" },
  "swatch:sizes": { name: "swatch-sizes", path: "swatch/sizes.tsx" },
  "switch:basic": { name: "switch-basic", path: "switch/basic.tsx" },
  "switch:disabled": { name: "switch-disabled", path: "switch/disabled.tsx" },
  "switch:with-label": {
    name: "switch-with-label",
    path: "switch/with-label.tsx",
  },
  "tabs:basic": { name: "tabs-basic", path: "tabs/basic.tsx" },
  "tabs:disabled": { name: "tabs-disabled", path: "tabs/disabled.tsx" },
  "tabs:sizes": { name: "tabs-sizes", path: "tabs/sizes.tsx" },
  "tabs:variants": { name: "tabs-variants", path: "tabs/variants.tsx" },
  "tabs:vertical": { name: "tabs-vertical", path: "tabs/vertical.tsx" },
  "table:alternating-rows": {
    name: "table-alternating-rows",
    path: "table/alternating-rows.tsx",
  },
  "table:basic": { name: "table-basic", path: "table/basic.tsx" },
  "table:column-dividers": {
    name: "table-column-dividers",
    path: "table/column-dividers.tsx",
  },
  "table:interactive": {
    name: "table-interactive",
    path: "table/interactive.tsx",
  },
  "table:pinned-header": {
    name: "table-pinned-header",
    path: "table/pinned-header.tsx",
  },
  "table:sizes": { name: "table-sizes", path: "table/sizes.tsx" },
  "table:variants": { name: "table-variants", path: "table/variants.tsx" },
  "table:with-caption": {
    name: "table-with-caption",
    path: "table/with-caption.tsx",
  },
  "table:with-footer": {
    name: "table-with-footer",
    path: "table/with-footer.tsx",
  },
  "tag:basic": { name: "tag-basic", path: "tag/basic.tsx" },
  "tag:variants": { name: "tag-variants", path: "tag/variants.tsx" },
  "tag:with-icon": { name: "tag-with-icon", path: "tag/with-icon.tsx" },
  "tags-input:basic": {
    name: "tags-input-basic",
    path: "tags-input/basic.tsx",
  },
  "tags-input:clearable": {
    name: "tags-input-clearable",
    path: "tags-input/clearable.tsx",
  },
  "timeline:basic": { name: "timeline-basic", path: "timeline/basic.tsx" },
  "timeline:outline": {
    name: "timeline-outline",
    path: "timeline/outline.tsx",
  },
  "timeline:with-icon": {
    name: "timeline-with-icon",
    path: "timeline/with-icon.tsx",
  },
  "text:basic": { name: "text-basic", path: "text/basic.tsx" },
  "text:line-clamp": { name: "text-line-clamp", path: "text/line-clamp.tsx" },
  "text:sizes": { name: "text-sizes", path: "text/sizes.tsx" },
  "text:truncate": { name: "text-truncate", path: "text/truncate.tsx" },
  "text:weights": { name: "text-weights", path: "text/weights.tsx" },
  "textarea:basic": { name: "textarea-basic", path: "textarea/basic.tsx" },
  "textarea:disabled": {
    name: "textarea-disabled",
    path: "textarea/disabled.tsx",
  },
  "textarea:sizes": { name: "textarea-sizes", path: "textarea/sizes.tsx" },
  "textarea:variants": {
    name: "textarea-variants",
    path: "textarea/variants.tsx",
  },
  "theme:basic": { name: "theme-basic", path: "theme/basic.tsx" },
  "tile:basic": { name: "tile-basic", path: "tile/basic.tsx" },
  "tile:orientation": {
    name: "tile-orientation",
    path: "tile/orientation.tsx",
  },
  "tile:variants": { name: "tile-variants", path: "tile/variants.tsx" },
  "timer:basic": { name: "timer-basic", path: "timer/basic.tsx" },
  "timer:countdown": { name: "timer-countdown", path: "timer/countdown.tsx" },
  "toast:basic": { name: "toast-basic", path: "toast/basic.tsx" },
  "toast:custom-icon": {
    name: "toast-custom-icon",
    path: "toast/custom-icon.tsx",
  },
  "toast:dismissable": {
    name: "toast-dismissable",
    path: "toast/dismissable.tsx",
  },
  "toast:duration": { name: "toast-duration", path: "toast/duration.tsx" },
  "toast:type": { name: "toast-type", path: "toast/type.tsx" },
  "toggle:basic": { name: "toggle-basic", path: "toggle/basic.tsx" },
  "toggle:controlled": {
    name: "toggle-controlled",
    path: "toggle/controlled.tsx",
  },
  "toggle:disabled": { name: "toggle-disabled", path: "toggle/disabled.tsx" },
  "toggle:indicator": {
    name: "toggle-indicator",
    path: "toggle/indicator.tsx",
  },
  "toggle-group:attached": {
    name: "toggle-group-attached",
    path: "toggle-group/attached.tsx",
  },
  "toggle-group:basic": {
    name: "toggle-group-basic",
    path: "toggle-group/basic.tsx",
  },
  "toggle-group:controlled": {
    name: "toggle-group-controlled",
    path: "toggle-group/controlled.tsx",
  },
  "toggle-group:disabled": {
    name: "toggle-group-disabled",
    path: "toggle-group/disabled.tsx",
  },
  "toggle-group:multiple": {
    name: "toggle-group-multiple",
    path: "toggle-group/multiple.tsx",
  },
  "toggle-group:orientation": {
    name: "toggle-group-orientation",
    path: "toggle-group/orientation.tsx",
  },
  "tooltip:basic": { name: "tooltip-basic", path: "tooltip/basic.tsx" },
  "tooltip:delay": { name: "tooltip-delay", path: "tooltip/delay.tsx" },
  "tooltip:interactive": {
    name: "tooltip-interactive",
    path: "tooltip/interactive.tsx",
  },
  "tree-view:basic": { name: "tree-view-basic", path: "tree-view/basic.tsx" },
  "tree-view:checkbox": {
    name: "tree-view-checkbox",
    path: "tree-view/checkbox.tsx",
  },
  "virtual-list:basic": {
    name: "virtual-list-basic",
    path: "virtual-list/basic.tsx",
  },
  "virtual-list:variable-height": {
    name: "virtual-list-variable-height",
    path: "virtual-list/variable-height.tsx",
  },
  "visually-hidden:basic": {
    name: "visually-hidden-basic",
    path: "visually-hidden/basic.tsx",
  },
  "visually-hidden:with-icon": {
    name: "visually-hidden-with-icon",
    path: "visually-hidden/with-icon.tsx",
  },
  "wheel-picker:basic": {
    name: "wheel-picker-basic",
    path: "wheel-picker/basic.tsx",
  },
  "wheel-picker:variants": {
    name: "wheel-picker-variants",
    path: "wheel-picker/variants.tsx",
  },
  "wheel-picker:radius": {
    name: "wheel-picker-radius",
    path: "wheel-picker/radius.tsx",
  },
};
