import { defineSlotRecipe } from "@pandacss/dev";

export const scrollAreaRecipe = defineSlotRecipe({
	className: "scroll-area",
	slots: ["root", "viewport", "content", "scrollbar", "thumb", "corner"],

	base: {
		root: {},

		viewport: {
			overflow: "auto",
			scrollbarWidth: "none",
			boxSize: "{sizes.full}",
			overscrollBehavior: "contain",

			"&::-webkit-scrollbar": {
				display: "none",
			},
		},

		scrollbar: {
			"--scroll-area-track-size": "",
			"--scroll-area-track-color": "{colors.stroke.primary}",
			"--scroll-area-thumb-color": "{colors.fg.tertiary}",

			opacity: 0,
			display: "flex",
			rounded: "{radii.full}",
			transition: "opacity 100ms ease-in-out",
			bgColor: "var(--scroll-area-track-color)",

			_before: {
				content: "''",
				position: "absolute",
			},

			_horizontal: {
				w: "{sizes.full}",
				h: "var(--scroll-area-track-size)",

				_before: {
					left: 0,
					right: 0,
					h: "{sizes.20}",
					w: "{sizes.full}",
				},
			},

			_vertical: {
				w: "var(--scroll-area-track-size)",
				h: "{sizes.full}",

				_before: {
					left: "50%",
					w: "{sizes.20}",
					h: "{sizes.full}",
					transform: "translateX(-50%)",
				},
			},
		},

		thumb: {
			opacity: ".5",
			rounded: "{radii.full}",
			bgColor: "var(--scroll-area-thumb-color)",

			_vertical: {
				w: "{sizes.full}",
			},

			_horizontal: {
				h: "{sizes.full}",
			},
		},

		content: {
			display: "flex",
			flexDirection: "column",
		},
	},

	variants: {
		variant: {
			hover: {
				scrollbar: {
					"&:is([data-hover], [data-scrolling])": {
						opacity: 1,
					},
				},
			},
			always: {
				scrollbar: {
					opacity: 1,
				},
			},
		},
		size: {
			xs: {
				scrollbar: { "--scroll-area-track-size": "{sizes.2}" },
			},
			sm: {
				scrollbar: { "--scroll-area-track-size": "{sizes.4}" },
			},
			md: {
				scrollbar: { "--scroll-area-track-size": "calc({sizes.4} * 1.5)" },
			},
			lg: {
				scrollbar: { "--scroll-area-track-size": "calc({sizes.4} * 2)" },
			},
			xl: {
				scrollbar: { "--scroll-area-track-size": "calc({sizes.4} * 2.5)" },
			},
		},
	},

	defaultVariants: {
		size: "sm",
		variant: "hover",
	},
});
