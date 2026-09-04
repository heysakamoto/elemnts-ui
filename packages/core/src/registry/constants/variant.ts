export const variant = {
	primary: {
		color: "{colors.colorPalette.tertiary}",
		backgroundColor: "{colors.colorPalette.primary}",

		_hover: {
			backgroundColor:
				"color-mix(in oklab, {colors.colorPalette.primary}, 8% {colors.mix.hover})",
		},
		_active: {
			backgroundColor:
				"color-mix(in oklab, {colors.colorPalette.primary}, 8% {colors.mix.active})",
		},
		_selected: {
			backgroundColor:
				"color-mix(in oklab, {colors.colorPalette.primary}, 8% {colors.mix.selected})",
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
		_selected: {
			backgroundColor:
				"color-mix(in oklab, {colors.colorPalette.secondary}, {colors.mix.selected})",
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
		_selected: {
			backgroundColor:
				"color-mix(in oklab, {colors.colorPalette.secondary}, {colors.mix.selected})",
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
		_selected: {
			backgroundColor:
				"color-mix(in oklab, {colors.colorPalette.secondary}, {colors.mix.selected})",
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
		_selected: {
			backgroundColor:
				"color-mix(in oklab, {colors.colorPalette.secondary}, {colors.mix.selected})",
		},
	},
	plain: {
		backgroundColor: "{colors.transparent}",
		color: "{colors.colorPalette.primary}",
	},
};
