import { defineSemanticTokens } from "@pandacss/dev";

const mix = {
	hover: {
		value: {
			base: "rgba(0, 0, 0, 0.06)",
			_dark: "rgba(255, 255, 255, 0.08)",
		},
	},
	active: {
		value: {
			base: "rgba(0, 0, 0, 0.10)",
			_dark: "rgba(255, 255, 255, 0.16)",
		},
	},
	selected: {
		value: {
			base: "rgba(0, 0, 0, 0.08)",
			_dark: "rgba(255, 255, 255, 0.10)",
		},
	},
};

const surface = {
	1: {
		value: {
			base: "{colors.white}",
			_dark: "{colors.neutral.100}",
		},
	},
	2: {
		value: {
			base: "{colors.white}",
			_dark: "color-mix(in oklab, {colors.neutral.100}, 4% {colors.white})",
		},
	},
	3: {
		value: {
			base: "{colors.white}",
			_dark: "color-mix(in oklab, {colors.neutral.100}, 8% {colors.white})",
		},
	},
	4: {
		value: {
			base: "{colors.white}",
			_dark: "color-mix(in oklab, {colors.neutral.100}, 12% {colors.white})",
		},
	},
	5: {
		value: {
			base: "{colors.white}",
			_dark: "color-mix(in oklab, {colors.neutral.100}, 16% {colors.white})",
		},
	},
	6: {
		value: {
			base: "{colors.white}",
			_dark: "color-mix(in oklab, {colors.neutral.100}, 20% {colors.white})",
		},
	},
	7: {
		value: {
			base: "color-mix(in oklab, {colors.neutral.100}, 98% {colors.white})",
			_dark: "color-mix(in oklab, {colors.neutral.100}, 24% {colors.white})",
		},
	},
	8: {
		value: {
			base: "color-mix(in oklab, {colors.neutral.100}, 96% {colors.white})",
			_dark: "color-mix(in oklab, {colors.neutral.100}, 28% {colors.white})",
		},
	},
};

const fg = {
	primary: {
		value: {
			base: "{colors.neutral.100}",
			_dark: "{colors.neutral.10}",
		},
	},
	secondary: {
		value: {
			base: "{colors.neutral.70}",
			_dark: "{colors.neutral.40}",
		},
	},
	tertiary: {
		value: {
			base: "{colors.neutral.60}",
			_dark: "{colors.neutral.50}",
		},
	},
};

const stroke = {
	primary: {
		value: {
			base: "{colors.neutral.30}",
			_dark: "{colors.neutral.90}",
		},
	},
	secondary: {
		value: {
			base: "color-mix(in oklab, {colors.stroke.primary}, 24% {colors.white})",
			_dark: "color-mix(in oklab, {colors.stroke.primary}, 12% {colors.black})",
		},
	},
	tertiary: {
		value: {
			base: "color-mix(in oklab, {colors.stroke.primary}, 40% {colors.white})",
			_dark: "color-mix(in oklab, {colors.stroke.primary}, 20% {colors.black})",
		},
	},
};

const icon = {
	primary: {
		value: {
			base: "{colors.neutral.100}",
			_dark: "{colors.neutral.20}",
		},
	},
	secondary: {
		value: {
			base: "{colors.neutral.50}",
			_dark: "{colors.neutral.50}",
		},
	},
	tertiary: {
		value: {
			base: "{colors.neutral.40}",
			_dark: "{colors.neutral.60}",
		},
	},
};

const neutral = {
	primary: {
		value: {
			base: "{colors.neutral.100}",
			_dark: "{colors.neutral.10}",
		},
	},
	secondary: {
		value: {
			base: "color-mix(in oklab, {colors.neutral.100}, 96% {colors.white})",
			_dark: "color-mix(in oklab, {colors.neutral.100}, 20% {colors.white})",
		},
	},
	tertiary: {
		value: {
			base: "{colors.white}",
			_dark: "{colors.neutral.100}",
		},
	},
	stroke: {
		value: {
			base: "{colors.neutral.30}",
			_dark: "{colors.neutral.70}",
		},
	},
};

const accent = {
	primary: {
		value: {
			base: "{colors.blue.80}",
			_dark: "{colors.blue.60}",
		},
	},
	secondary: {
		value: {
			base: "{colors.blue.20}",
			_dark: "{colors.blue.100}",
		},
	},
	tertiary: {
		value: {
			base: "{colors.white}",
			_dark: "{colors.white}",
		},
	},
	stroke: {
		value: {
			base: "{colors.blue.40}",
			_dark: "{colors.blue.50}",
		},
	},
};

const success = {
	primary: {
		value: {
			base: "{colors.green.80}",
			_dark: "{colors.green.60}",
		},
	},
	secondary: {
		value: {
			base: "{colors.green.20}",
			_dark: "{colors.green.100}",
		},
	},
	tertiary: {
		value: {
			base: "{colors.white}",
			_dark: "{colors.white}",
		},
	},
	stroke: {
		value: {
			base: "{colors.green.40}",
			_dark: "{colors.green.50}",
		},
	},
};

const destructive = {
	primary: {
		value: {
			base: "{colors.red.70}",
			_dark: "{colors.red.60}",
		},
	},
	secondary: {
		value: {
			base: "{colors.red.20}",
			_dark: "{colors.red.100}",
		},
	},
	tertiary: {
		value: {
			base: "{colors.white}",
			_dark: "{colors.white}",
		},
	},
	stroke: {
		value: {
			base: "{colors.red.40}",
			_dark: "{colors.red.70}",
		},
	},
};

const warning = {
	primary: {
		value: {
			base: "{colors.amber.70}",
			_dark: "{colors.amber.60}",
		},
	},
	secondary: {
		value: {
			base: "{colors.amber.20}",
			_dark: "{colors.amber.100}",
		},
	},
	tertiary: {
		value: {
			base: "{colors.white}",
			_dark: "{colors.white}",
		},
	},
	stroke: {
		value: {
			base: "{colors.amber.40}",
			_dark: "{colors.amber.50}",
		},
	},
};

export const colors = defineSemanticTokens.colors({
	fg,
	icon,
	accent,
	warning,
	success,
	destructive,
	stroke,
	surface,
	neutral,
	mix,
});
