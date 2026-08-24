import { defineTokens } from "@pandacss/dev";

export const aspectRatios = defineTokens.aspectRatios({
	// Square & Standard
	"1/1": { value: "1 / 1" },
	"4/3": { value: "4 / 3" },
	"3/4": { value: "3 / 4" },

	// Widescreen & Golden Ratio
	"16/9": { value: "16 / 9" },
	"16/10": { value: "16 / 10" },
	"1.618/1": { value: "1.618 / 1" },

	// Cinematic & Ultra-wide
	"21/9": { value: "21 / 9" },
	"18/5": { value: "18 / 5" },
	"32/9": { value: "32 / 9" },

	// Mobile & Social Media
	"9/16": { value: "9 / 16" },
	"2/3": { value: "2 / 3" },
	"4/5": { value: "4 / 5" },

	// Video Formats
	"1.85/1": { value: "1.85 / 1" },
	"2.39/1": { value: "2.39 / 1" },
});
