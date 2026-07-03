import {
	amber,
	blackAlpha,
	blue,
	green,
	neutral,
	orange,
	red,
	whiteAlpha,
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
	green: createColorTokens({
		base: green,
	}),
	neutral: createColorTokens({
		base: neutral,
	}),
	orange: createColorTokens({
		base: orange,
	}),
	red: createColorTokens({
		base: red,
	}),
});
