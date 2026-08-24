import type { ColorScale } from "../../colors";

type Props = {
	base?: ColorScale;
	alpha?: ColorScale;
};

const COLOR_STEPS = [
	"10",
	"20",
	"30",
	"40",
	"50",
	"60",
	"70",
	"80",
	"90",
	"95",
	"100",
] as const;

type ColorStep =
	| (typeof COLOR_STEPS)[number]
	| `a${(typeof COLOR_STEPS)[number]}`;
type ColorScaleKey = keyof ColorScale;

type ColorToken = Record<ColorStep, { value: string }>;

export const createColorTokens = (props: Props) => {
	const { base, alpha } = props;

	const colors = {} as ColorToken;

	if (base) {
		Object.keys(base).forEach((key, idx) => {
			const step = COLOR_STEPS[idx];
			if (step) {
				colors[step] = {
					value: base[key as unknown as ColorScaleKey],
				};
			}
		});
	}

	if (alpha) {
		Object.keys(alpha).forEach((key, idx) => {
			const step = COLOR_STEPS[idx];
			if (step) {
				colors[`a${step}`] = {
					value: alpha[key as unknown as ColorScaleKey],
				};
			}
		});
	}

	return colors;
};
