import { defineSlotRecipe } from "@pandacss/dev";

export const skipNavRecipe = defineSlotRecipe({
	className: "",
	slots: ["root", "link", "content"],
	base: {
		content: {
			outline: "none",
		},
		link: {
			p: 0,
			m: "-1px",
			boxSize: "1px",
			borderWidth: 0,
			overflow: "hidden",
			whiteSpace: "nowrap",
			position: "absolute",
			clip: "rect(0, 0, 0, 0)",

			_focus: {
				margin: 0,
				zIndex: 999,
				clip: "auto",
				width: "auto",
				height: "auto",
				position: "fixed",
				overflow: "visible",
				whiteSpace: "normal",
				textDecoration: "none",
				padding: "0.75rem 1rem",
				inset: "1rem auto auto 1rem",
			},
		},
	},
});
