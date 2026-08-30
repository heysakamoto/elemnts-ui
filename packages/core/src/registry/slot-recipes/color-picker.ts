import { defineSlotRecipe } from "@pandacss/dev";

export const colorPickerRecipe = defineSlotRecipe({
	className: "color",
	slots: [
		"root",
		"trigger",
		"content",
		"control",
		"label",
		"area",
		"positioner",
		"areaThumb",
		"valueText",
		"areaBackground",
		"channelSlider",
		"channelSliderLabel",
		"channelSliderTrack",
		"channelSliderThumb",
		"channelSliderValueText",
		"channelInput",
		"transparencyGrid",
		"swatchGroup",
		"swatchTrigger",
		"swatchIndicator",
		"swatch",
		"eyeDropperTrigger",
		"formatTrigger",
		"formatSelect",
		"view",
		"channelSliderControl",
	],
	base: {
		control: {
			display: "flex",
		},
		view: {
			display: "flex",
			flexDirection: "column",
		},
		channelSliderValueText: {
			fontSize: "{fontSizes.14}",
		},
		content: {
			position: "relative",
			transformOrigin: "var(--transform-origin, top)",
			zIndex: "calc(var(--z-index, 9) + var(--layer-index, 0))",

			_open: {
				animation: "scale-fade-in 200ms ease-out",
			},
			_closed: {
				animation: "scale-fade-out 200ms ease-in",
			},
		},
		channelInput: {
			textTransform: "uppercase",
		},
		area: {
			w: "14rem",
			aspectRatio: "1",
			overflow: "clip",
			rounded: "{radii.16}",
			shadow: "{shadows.2}",
			cornerShape: "squircle",
			border: "1px solid {colors.stroke.tertiary}",
		},
		areaBackground: {
			boxSize: "{sizes.full}",
		},
		areaThumb: {
			rounded: "{radii.16}",
			boxSize: "{sizes.16}",
			shadow: "{shadows.2}",
			cornerShape: "squircle",
			willChange: "width, height",
			border: "3px solid {colors.white}",
			transition: `
        width 150ms ease-out,
        height 150ms ease-out
      `,

			_active: {
				boxSize: "{sizes.20}",
			},

			_focusVisible: {
				outline: "none",
			},
		},
		channelSlider: {
			display: "flex",
			overflow: "clip",
			flexDirection: "column",
		},
		channelSliderControl: {
			position: "relative",
		},
		channelSliderTrack: {
			overflow: "clip",
			rounded: "{radii.16}",
			cornerShape: "squircle",

			_horizontal: {
				w: "{sizes.full}",
				h: "{sizes.20}",
			},

			_vertical: {
				h: "{sizes.full}",
				w: "{sizes.20}",
			},
		},
		transparencyGrid: {},
		channelSliderThumb: {
			translate: "0% -50%",
			boxSize: "{sizes.16}",
			shadow: "{shadows.sm}",
			rounded: "{radii.16}",
			cornerShape: "squircle",
			border: "3px solid {colors.white}",

			_hover: {
				cursor: "grab",
			},
			_active: {
				cursor: "grabbing",
			},

			_focusVisible: {
				outline: "none",
			},
		},
		swatchGroup: {
			display: "flex",
			gap: "{spacing.8}",
			alignItems: "center",
		},
		swatchTrigger: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		swatchIndicator: {
			display: "inline-flex",
		},
		swatch: {
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "center",
			transformOrigin: "center",
			transition: "transform 250ms ease-out",

			_checked: {
				transform: "scale(1.1)",
			},

			"&:not([data-state='checked'])": {
				_hover: {
					transform: "scale(0.9)",
				},
			},
		},
	},
});
