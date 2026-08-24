import { defineSlotRecipe } from "@pandacss/dev";

export const drawerRecipe = defineSlotRecipe({
	className: "drawer",
	slots: [
		"trigger",
		"content",
		"backdrop",
		"positioner",
		"grabber",
		"title",
		"indent",
		"stack",
		"swipeArea",
		"indentBackground",
		"closeTrigger",
		"description",
		"grabberIndicator",
	],
	base: {
		backdrop: {
			inset: 0,
			w: "100vw",
			h: "100vh",
			position: "fixed",
			backdropFilter: "blur(10px)",
			bgColor: "{colors.white.a50}",
			zIndex: "calc({zIndex.modal} - 1)",

			_dark: {
				bgColor: "{colors.black.a50}",
			},

			_open: {
				animation: "fade-in 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
			},

			_closed: {
				animation: "fade-out 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
			},
		},
		positioner: {
			inset: 0,
			display: "flex",
			position: "fixed",
			alignItems: "flex-end",
			justifyContent: "center",
			zIndex: "{zIndex.modal}",

			'&[data-swipe-direction="up"]': {
				alignItems: "flex-start",
			},
			'&[data-swipe-direction="left"]': {
				justifyContent: "flex-start",
				alignItems: "stretch",
			},
			'&[data-swipe-direction="right"]': {
				justifyContent: "flex-end",
				alignItems: "stretch",
			},
		},

		content: {
			"--bleed": "calc({sizes.4} * 12)",

			maxH: "96svh",
			outline: "none",
			w: "{sizes.full}",
			h: "{sizes.full}",
			position: "relative",
			animationDuration: "0.5s",
			hyphenateCharacter: "{sizes.full}",
			transition: "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
			animationTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",

			"&::after": {
				top: "100%",
				content: '""',
				insetInline: 0,
				position: "absolute",
				pointerEvents: "none",
				height: "var(--bleed)",
				bgColor: "inherit",
			},

			_open: {
				animationName: "slide-in-bottom",
			},

			_closed: {
				animation: "slide-out-bottom 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
			},

			'&[data-swipe-direction="up"]': {
				_after: {
					top: "auto",
					bottom: "100%",
				},

				_open: {
					animationName: "slide-in-top",
				},

				_closed: {
					animation: "slide-out-top 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
				},
			},

			'&[data-swipe-direction="left"]': {
				maxH: "none",
				maxW: "400px",

				_after: {
					top: 0,
					h: "auto",
					right: "100%",
					insetBlock: 0,
					insetInline: "auto",
					width: "var(--bleed)",
				},

				_open: {
					animationName: "slide-in-left",
				},

				_closed: {
					animation: "slide-out-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
				},
			},

			'&[data-swipe-direction="right"]': {
				maxH: "none",
				maxW: "400px",

				_after: {
					top: 0,
					h: "auto",
					left: "100%",
					insetBlock: 0,
					insetInline: "auto",
					width: "var(--bleed)",
				},

				_open: {
					animationName: "slide-in-right",
				},

				_closed: {
					animation: "slide-out-right 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
				},
			},
		},

		grabber: {
			flexShrink: 0,
			cursor: "grab",
			display: "flex",
			w: "{sizes.full}",
			padding: "20px 0",
			userSelect: "none",
			touchAction: "none",
			alignItems: "center",
			justifyContent: "center",

			_active: {
				cursor: "grabbing",
			},

			_hover: {
				"&[data-part=grabber-indicator]": {
					bgColor: "{colors.stroke.primary}",
				},
			},
		},

		grabberIndicator: {
			rounded: "{radii.full}",
			h: "calc({sizes.4} * 1)",
			w: "calc({sizes.4} * 10)",
			bgColor: "{colors.stroke.secondary}",
		},

		title: {
			margin: 0,
			fontWeight: 500,
			marginBottom: "0.5rem",
			fontSize: "{fontSizes.20}",
			lineHeight: "{lineHeights.sm}",
			color: "var(--demo-neutral-fg)",
		},

		description: {
			lineHeight: 1.5,
			margin: "0.25rem 0 0",
			fontSize: "{fontSizes.14}",
			color: "{colors.fg.secondary}",
		},

		closeTrigger: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},

		trigger: {
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
		},
	},
});
