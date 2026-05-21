import {
	amber,
	blackAlpha,
	blue,
	cyan,
	emerald,
	fuchsia,
	gray,
	green,
	indigo,
	lime,
	mauve,
	mist,
	neutral,
	olive,
	orange,
	pink,
	purple,
	red,
	rose,
	sky,
	slate,
	stone,
	taupe,
	teal,
	violet,
	whiteAlpha,
	yellow,
	zinc,
} from "@moto-ui/colors";
import { defineTokens } from "@pandacss/dev";
import { createColorTokens } from "../../utils";

export const colors = defineTokens.colors({
	current: { value: "currentColor" },
	transparent: { value: "transparent" },
	white: {
		...createColorTokens({
			alpha: whiteAlpha,
		}),
		DEFAULT: { value: "#FFFFFF" },
	},
	black: {
		...createColorTokens({
			alpha: blackAlpha,
		}),
		DEFAULT: { value: "#09090B" },
	},
	amber: createColorTokens({
		base: amber,
	}),

	blue: createColorTokens({
		base: blue,
	}),
	cyan: createColorTokens({
		base: cyan,
	}),
	emerald: createColorTokens({
		base: emerald,
	}),
	fuchsia: createColorTokens({
		base: fuchsia,
	}),
	gray: createColorTokens({
		base: gray,
	}),
	green: createColorTokens({
		base: green,
	}),
	indigo: createColorTokens({
		base: indigo,
	}),
	lime: createColorTokens({
		base: lime,
	}),
	neutral: createColorTokens({
		base: neutral,
	}),
	orange: createColorTokens({
		base: orange,
	}),
	pink: createColorTokens({
		base: pink,
	}),
	purple: createColorTokens({
		base: purple,
	}),
	red: createColorTokens({
		base: red,
	}),
	rose: createColorTokens({
		base: rose,
	}),
	sky: createColorTokens({
		base: sky,
	}),
	slate: createColorTokens({
		base: slate,
	}),
	stone: createColorTokens({
		base: stone,
	}),
	teal: createColorTokens({
		base: teal,
	}),
	violet: createColorTokens({
		base: violet,
	}),
	yellow: createColorTokens({
		base: yellow,
	}),
	zinc: createColorTokens({
		base: zinc,
	}),
	mauve: createColorTokens({
		base: mauve,
	}),
	mist: createColorTokens({
		base: mist,
	}),
	olive: createColorTokens({
		base: olive,
	}),
	taupe: createColorTokens({
		base: taupe,
	}),
});
