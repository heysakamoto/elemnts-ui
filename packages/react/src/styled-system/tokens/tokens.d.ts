/* eslint-disable */
export type Token = `aspectRatios.${AspectRatioToken}` | `animations.${AnimationToken}` | `blurs.${BlurToken}` | `borders.${BorderToken}` | `durations.${DurationToken}` | `easings.${EasingToken}` | `fonts.${FontToken}` | `fontSizes.${FontSizeToken}` | `fontWeights.${FontWeightToken}` | `letterSpacings.${LetterSpacingToken}` | `lineHeights.${LineHeightToken}` | `radii.${RadiusToken}` | `spacing.${SpacingToken}` | `sizes.${SizeToken}` | `zIndex.${ZIndexToken}` | `cursor.${CursorToken}` | `colors.${ColorToken}` | `breakpoints.${BreakpointToken}` | `shadows.${ShadowToken}`

export type ColorPalette = "current" | "transparent" | "white" | "black" | "amber" | "blue" | "green" | "neutral" | "orange" | "red" | "fg" | "icon" | "accent" | "warning" | "success" | "destructive" | "stroke" | "surface" | "mix"

export type AspectRatioToken = "1/1" | "4/3" | "3/4" | "16/9" | "16/10" | "1.618/1" | "21/9" | "18/5" | "32/9" | "9/16" | "2/3" | "4/5" | "1.85/1" | "2.39/1"

export type AnimationToken = "spin" | "ping" | "pulse" | "bounce"

export type BlurToken = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"

export type BorderToken = "none" | "xs" | "sm" | "md" | "lg" | "xl"

export type DurationToken = "fastest" | "faster" | "fast" | "moderate" | "slow" | "slower" | "slowest"

export type EasingToken = "ease-in" | "ease-out" | "ease-in-out" | "ease-in-smooth"

export type FontToken = "sans" | "mono"

export type FontSizeToken = "8" | "10" | "12" | "13" | "14" | "16" | "18" | "20" | "24" | "28" | "32" | "36" | "40" | "48" | "56" | "64" | "80" | "96" | "128"

export type FontWeightToken = "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black"

export type LetterSpacingToken = "xs" | "sm" | "none" | "md" | "lg" | "xl"

export type LineHeightToken = "none" | "xs" | "sm" | "md" | "lg" | "xl"

export type RadiusToken = "0" | "2" | "4" | "6" | "8" | "10" | "12" | "16" | "20" | "24" | "32" | "40" | "48" | "none" | "circle" | "full"

export type SpacingToken = "0" | "1" | "2" | "4" | "6" | "8" | "10" | "12" | "16" | "20" | "24" | "32" | "40" | "56" | "64" | "80" | "96" | "120" | "144" | "160" | "192" | "224" | "256" | "288" | "320" | "auto" | "-0" | "-1" | "-2" | "-4" | "-6" | "-8" | "-10" | "-12" | "-16" | "-20" | "-24" | "-32" | "-40" | "-56" | "-64" | "-80" | "-96" | "-120" | "-144" | "-160" | "-192" | "-224" | "-256" | "-288" | "-320" | "-auto"

export type SizeToken = "0" | "1" | "2" | "4" | "6" | "8" | "10" | "12" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "48" | "56" | "64" | "72" | "80" | "auto" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "max" | "min" | "fit" | "full" | "dvh" | "svh" | "lvh" | "dvw" | "svw" | "lvw" | "vw" | "vh" | "breakpoint-xs" | "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type ZIndexToken = "hide" | "base" | "sticky" | "dropdown" | "overlay" | "modal" | "toast" | "max"

export type CursorToken = "button" | "grab" | "disabled"

export type ColorToken = "current" | "transparent" | "white.a10" | "white.a20" | "white.a30" | "white.a40" | "white.a50" | "white.a60" | "white.a70" | "white.a80" | "white.a90" | "white.a95" | "white.a100" | "white" | "black.a10" | "black.a20" | "black.a30" | "black.a40" | "black.a50" | "black.a60" | "black.a70" | "black.a80" | "black.a90" | "black.a95" | "black.a100" | "black" | "amber.10" | "amber.20" | "amber.30" | "amber.40" | "amber.50" | "amber.60" | "amber.70" | "amber.80" | "amber.90" | "amber.95" | "amber.100" | "blue.10" | "blue.20" | "blue.30" | "blue.40" | "blue.50" | "blue.60" | "blue.70" | "blue.80" | "blue.90" | "blue.95" | "blue.100" | "green.10" | "green.20" | "green.30" | "green.40" | "green.50" | "green.60" | "green.70" | "green.80" | "green.90" | "green.95" | "green.100" | "neutral.10" | "neutral.20" | "neutral.30" | "neutral.40" | "neutral.50" | "neutral.60" | "neutral.70" | "neutral.80" | "neutral.90" | "neutral.95" | "neutral.100" | "orange.10" | "orange.20" | "orange.30" | "orange.40" | "orange.50" | "orange.60" | "orange.70" | "orange.80" | "orange.90" | "orange.95" | "orange.100" | "red.10" | "red.20" | "red.30" | "red.40" | "red.50" | "red.60" | "red.70" | "red.80" | "red.90" | "red.95" | "red.100" | "fg.primary" | "fg.secondary" | "fg.tertiary" | "icon.primary" | "icon.secondary" | "icon.tertiary" | "accent.primary" | "accent.secondary" | "accent.tertiary" | "accent.stroke" | "warning.primary" | "warning.secondary" | "warning.tertiary" | "warning.stroke" | "success.primary" | "success.secondary" | "success.tertiary" | "success.stroke" | "destructive.primary" | "destructive.secondary" | "destructive.tertiary" | "destructive.stroke" | "stroke.primary" | "stroke.secondary" | "stroke.tertiary" | "surface.1" | "surface.2" | "surface.3" | "surface.4" | "surface.5" | "surface.6" | "surface.7" | "surface.8" | "neutral.primary" | "neutral.secondary" | "neutral.tertiary" | "neutral.stroke" | "mix.hover" | "mix.active" | "mix.selected" | "colorPalette" | "colorPalette.a10" | "colorPalette.a20" | "colorPalette.a30" | "colorPalette.a40" | "colorPalette.a50" | "colorPalette.a60" | "colorPalette.a70" | "colorPalette.a80" | "colorPalette.a90" | "colorPalette.a95" | "colorPalette.a100" | "colorPalette.10" | "colorPalette.20" | "colorPalette.30" | "colorPalette.40" | "colorPalette.50" | "colorPalette.60" | "colorPalette.70" | "colorPalette.80" | "colorPalette.90" | "colorPalette.95" | "colorPalette.100" | "colorPalette.primary" | "colorPalette.secondary" | "colorPalette.tertiary" | "colorPalette.stroke" | "colorPalette.1" | "colorPalette.2" | "colorPalette.3" | "colorPalette.4" | "colorPalette.5" | "colorPalette.6" | "colorPalette.7" | "colorPalette.8" | "colorPalette.hover" | "colorPalette.active" | "colorPalette.selected"

export type BreakpointToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

export type ShadowToken = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8"

export type Tokens = {
		aspectRatios: AspectRatioToken
		animations: AnimationToken
		blurs: BlurToken
		borders: BorderToken
		durations: DurationToken
		easings: EasingToken
		fonts: FontToken
		fontSizes: FontSizeToken
		fontWeights: FontWeightToken
		letterSpacings: LetterSpacingToken
		lineHeights: LineHeightToken
		radii: RadiusToken
		spacing: SpacingToken
		sizes: SizeToken
		zIndex: ZIndexToken
		cursor: CursorToken
		colors: ColorToken
		breakpoints: BreakpointToken
		shadows: ShadowToken
} & { [token: string]: never }

export type TokenCategory = "aspectRatios" | "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "cursor" | "shadows" | "spacing" | "radii" | "borders" | "borderWidths" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"