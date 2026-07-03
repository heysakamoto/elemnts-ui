import { defineSlotRecipe } from "@pandacss/dev";

export const qrCodeRecipe = defineSlotRecipe({
	className: "qr-code",
	slots: ["root", "overlay", "frame", "pattern", "downloadTrigger"],
	base: {
		root: {
			display: "flex",
			flexDirection: "column",
		},
		frame: { boxSize: "200px" },
		overlay: {
			display: "flex",
			alignItems: "center",
			rounded: "{radii.full}",
			bgColor: "{colors.bg.primary}",
			justifyContent: "center",
			boxSize: "calc({sizes.4} * 10)",
		},
		pattern: { fill: "{colors.fg.primary}" },
	},
});
