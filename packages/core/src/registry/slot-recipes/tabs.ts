import { defineSlotRecipe } from "@pandacss/dev";

import { segmentGroupRecipe } from "./segment-group";

export const tabsRecipe = defineSlotRecipe({
	className: "tabs",
	slots: ["root", "content", "list", "trigger", "indicator", "panel"],
	base: {
		root: {
			...segmentGroupRecipe.base?.root,

			w: "{sizes.full}",
			alignItems: "start",

			_vertical: {
				flexDirection: "row",
			},
			_horizontal: {
				flexDirection: "column",
			},
		},
		list: {
			display: "flex",
			position: "relative",
			p: "calc({spacing.2} * 0.5)",

			_vertical: {
				h: "{sizes.fit}",
				flexDirection: "column",
			},
		},
		trigger: {
			zIndex: 1,
			...segmentGroupRecipe.base?.item,
		},
		indicator: {
			...segmentGroupRecipe.base?.indicator,
		},
		content: {
			display: "flex",
			w: "{sizes.full}",
			flexDirection: "column",
		},
	},
	variants: {
		size: {
			xs: {
				trigger: {
					...segmentGroupRecipe.variants?.size?.xs?.item,
				},
			},
			sm: {
				trigger: {
					...segmentGroupRecipe.variants?.size?.sm?.item,
				},
			},
			md: {
				trigger: {
					...segmentGroupRecipe.variants?.size?.md?.item,
				},
			},
			lg: {
				trigger: {
					...segmentGroupRecipe.variants?.size?.lg?.item,
				},
			},
			xl: {
				trigger: {
					...segmentGroupRecipe.variants?.size?.xl?.item,
				},
			},
		},
		variant: {
			primary: {
				trigger: {
					_selected: {
						...segmentGroupRecipe.variants?.variant?.primary?.item?.[
							"_checked" as "&:checked"
						],
					},
				},
				indicator: {
					...segmentGroupRecipe.variants?.variant?.primary?.indicator,
				},
			},
			secondary: {
				trigger: {
					_selected: {
						...segmentGroupRecipe.variants?.variant?.secondary?.item?.[
							"_checked" as "&:checked"
						],
					},
				},
				indicator: {
					...segmentGroupRecipe.variants?.variant?.secondary?.indicator,
				},
			},
			tertiary: {
				trigger: {
					_selected: {
						...segmentGroupRecipe.variants?.variant?.tertiary?.item?.[
							"_checked" as "&:checked"
						],
					},
				},
				indicator: {
					...segmentGroupRecipe.variants?.variant?.tertiary?.indicator,
				},
			},
		},
	},
	defaultVariants: {
		size: "md",
		variant: "primary",
	},
});
