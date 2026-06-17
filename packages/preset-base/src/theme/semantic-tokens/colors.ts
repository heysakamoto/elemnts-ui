import { defineSemanticTokens } from "@pandacss/dev";

const surface = {
	1: {
		value: {
			_light: "{colors.white}",
			_dark: "{colors.neutral.100}",
		},
	},
	2: {
		value: {
			_light: "{colors.white}",
			_dark: "color-mix(in oklab, {colors.neutral.100}, 4% {colors.white})",
		},
	},
	3: {
		value: {
			_light: "{colors.white}",
			_dark: "color-mix(in oklab, {colors.neutral.100}, 8% {colors.white})",
		},
	},
	4: {
		value: {
			_light: "{colors.white}",
			_dark: "color-mix(in oklab, {colors.neutral.100}, 12% {colors.white})",
		},
	},
	5: {
		value: {
			_light: "{colors.white}",
			_dark: "color-mix(in oklab, {colors.neutral.100}, 16% {colors.white})",
		},
	},
	6: {
		value: {
			_light: "{colors.white}",
			_dark: "color-mix(in oklab, {colors.neutral.100}, 20% {colors.white})",
		},
	},
	7: {
		value: {
			_light: "color-mix(in oklab, {colors.neutral.100}, 98% {colors.white})",
			_dark: "color-mix(in oklab, {colors.neutral.100}, 24% {colors.white})",
		},
	},
	8: {
		value: {
			_light: "color-mix(in oklab, {colors.neutral.100}, 96% {colors.white})",
			_dark: "color-mix(in oklab, {colors.neutral.100}, 28% {colors.white})",
		},
	},
};

const bg = {
	primary: {
		value: {
			_light: "{colors.white}",
			_dark: "{colors.neutral.100}",
		},
	},
	secondary: {
		value: {
			_light:
				"color-mix(in oklab, {colors.neutral.100}, 94% {colors.transparent})",
			_dark: "color-mix(in oklab, {colors.white}, 94% {colors.transparent})",
		},
	},
	tertiary: {
		value: {
			_light: "{colors.white}",
			_dark: "color-mix(in oklab, {colors.white}, 94% {colors.transparent})",
		},
	},
};

const fg = {
	primary: {
		value: {
			_light: "{colors.neutral.100}",
			_dark: "{colors.neutral.10}",
		},
	},
	secondary: {
		value: {
			_light: "{colors.neutral.80}",
			_dark: "{colors.neutral.40}",
		},
	},
	tertiary: {
		value: {
			_light: "{colors.neutral.60}",
			_dark: "{colors.neutral.50}",
		},
	},
};

const stroke = {
	primary: {
		value: {
			_light: "{colors.neutral.30}",
			_dark: "{colors.neutral.90}",
		},
	},
	secondary: {
		value: {
			_light:
				"color-mix(in oklab, {colors.neutral.100}, 92% {colors.transparent})",
			_dark: "color-mix(in oklab, {colors.white}, 92% {colors.transparent})",
		},
	},
	tertiary: {
		value: {
			_light:
				"color-mix(in oklab, {colors.neutral.100}, 95% {colors.transparent})",
			_dark: "color-mix(in oklab, {colors.white}, 95% {colors.transparent})",
		},
	},
};

const icon = {
	primary: {
		value: {
			_light: "{colors.neutral.100}",
			_dark: "{colors.neutral.20}",
		},
	},
	secondary: {
		value: {
			_light: "{colors.neutral.60}",
			_dark: "{colors.neutral.50}",
		},
	},
	tertiary: {
		value: {
			_light: "{colors.neutral.50}",
			_dark: "{colors.neutral.60}",
		},
	},
};

const neutral = {
	primary: {
		value: {
			_light: "{colors.neutral.100}",
			_dark: "{colors.neutral.10}",
		},
	},
	secondary: {
		value: {
			_light:
				"color-mix(in oklab, {colors.neutral.primary}, 94% {colors.transparent})",
			_dark:
				"color-mix(in oklab, {colors.neutral.primary}, 94% {colors.transparent})",
			_osDark:
				"color-mix(in oklab, {colors.neutral.primary}, 94% {colors.transparent})",
		},
	},
	tertiary: {
		value: {
			_light: "{colors.white}",
			_dark: "{colors.neutral.100}",
		},
	},
};

const accent = {
	primary: {
		value: {
			_light: "{colors.blue.80}",
			_dark: "{colors.blue.60}",
		},
	},
	secondary: {
		value: {
			_light: "{colors.blue.20}",
			_dark: "{colors.blue.100}",
		},
	},
	tertiary: {
		value: {
			_light: "{colors.white}",
			_dark: "{colors.white}",
		},
	},
};

const success = {
	primary: {
		value: {
			_light: "{colors.green.80}",
			_dark: "{colors.green.60}",
		},
	},
	secondary: {
		value: {
			_light: "{colors.green.20}",
			_dark: "{colors.green.100}",
		},
	},
	tertiary: {
		value: {
			_light: "{colors.white}",
			_dark: "{colors.white}",
		},
	},
};

const destructive = {
	primary: {
		value: {
			_light: "{colors.red.70}",
			_dark: "{colors.red.60}",
		},
	},
	secondary: {
		value: {
			_light: "{colors.red.20}",
			_dark: "{colors.red.100}",
		},
	},
	tertiary: {
		value: {
			_light: "{colors.white}",
			_dark: "{colors.white}",
		},
	},
};

const warning = {
	primary: {
		value: {
			_light: "{colors.amber.80}",
			_dark: "{colors.amber.60}",
		},
	},
	secondary: {
		value: {
			_light: "{colors.amber.20}",
			_dark: "{colors.amber.100}",
		},
	},
	tertiary: {
		value: {
			_light: "{colors.white}",
			_dark: "{colors.white}",
		},
	},
};

export const colors = defineSemanticTokens.colors({
	bg,
	fg,
	icon,
	accent,
	warning,
	success,
	destructive,
	stroke,
	surface,
	neutral,
});
