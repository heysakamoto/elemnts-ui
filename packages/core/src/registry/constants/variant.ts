export const variant = {
	primary: {
		color: "{colors.colorPalette.tertiary}",
		backgroundColor: "{colors.colorPalette.primary}",

		_hover: {
			backgroundColor:
				"color-mix(in oklab, {colors.colorPalette.primary}, {colors.mix.hover})",
		},
		_active: {
			backgroundColor:
				"color-mix(in oklab, {colors.colorPalette.primary}, {colors.mix.active})",
		},
	},
	secondary: {
		color: "{colors.colorPalette.primary}",
		backgroundColor: "{colors.colorPalette.secondary}",

		_active: {
			backgroundColor:
				"color-mix(in oklab, {colors.colorPalette.secondary}, {colors.mix.active})",
		},
		_hover: {
			backgroundColor:
				"color-mix(in oklab, {colors.colorPalette.secondary}, {colors.mix.hover})",
		},
	},
	tertiary: {
		color: "{colors.colorPalette.primary}",
		backgroundColor: "{colors.transparent}",
		borderColor: "{colors.colorPalette.stroke}",

		_active: {
			backgroundColor:
				"color-mix(in oklab, {colors.colorPalette.secondary}, {colors.mix.active})",
		},
		_hover: {
			backgroundColor:
				"color-mix(in oklab, {colors.colorPalette.secondary}, {colors.mix.hover})",
		},
	},
	ghost: {
		backgroundColor: "{colors.transparent}",
		color: "{colors.colorPalette.primary}",

		_active: {
			backgroundColor:
				"color-mix(in oklab, {colors.colorPalette.secondary}, {colors.mix.active})",
		},
		_hover: {
			backgroundColor:
				"color-mix(in oklab, {colors.colorPalette.secondary}, {colors.mix.hover})",
		},
	},
	surface: {
		backgroundColor: "{colors.colorPalette.secondary}",
		color: "{colors.colorPalette.primary}",
		borderColor: "{colors.colorPalette.stroke}",

		_active: {
			backgroundColor:
				"color-mix(in oklab, {colors.colorPalette.secondary}, {colors.mix.active})",
		},
		_hover: {
			backgroundColor:
				"color-mix(in oklab, {colors.colorPalette.secondary}, {colors.mix.hover})",
		},
	},
	plain: {
		backgroundColor: "{colors.transparent}",
		color: "{colors.colorPalette.primary}",
	},
};
