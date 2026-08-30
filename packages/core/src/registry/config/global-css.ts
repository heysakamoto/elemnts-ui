import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
	":root": {
		colorPalette: "accent",
		colorScheme: "light dark",
	},

	// Reset & Base Styles
	"*": {
		borderWidth: "0px",
		borderStyle: "solid",
		margin: "{spacing.0}",
		padding: "{spacing.0}",
		boxSizing: "border-box",
		borderColor: "{colors.stroke.primary}",
		WebkitTapHighlightColor: "transparent",

		// Typography optimizations
		fontSynthesis: "none",

		// Mozilla scrollbar customization
		scrollbarWidth: "thin",
		scollbarColor: "{colors.neutral.secondary}",
	},

	// WebKit scrollbar customization
	"::-webkit-scrollbar": {
		width: "8px",
		height: "8px",
	},

	// Scrollbar track
	"::-webkit-scrollbar-track": {
		bgColor: "{colors.transparent}",
	},

	// Scrollbar thumb
	"::-webkit-scrollbar-thumb": {
		bgColor: "{colors.transparent}",
		"&:hover": {
			bgColor: "{colors.neutral.secondary}",
		},
	},

	html: {
		scrollBehavior: "smooth",
		fontFamily: "{fonts.sans}",
		textSizeAdjust: "{sizes.full}",
		MozOsxFontSmoothing: "antialiased",
		WebkitFontSmoothing: "antialiased",
	},

	body: {
		fontWeight: "400",
		textAlign: "start",
		minHeight: "100dvh",
		letterSpacing: "sm",
		fontSize: "{fontSizes.16}",
		color: "{colors.fg.primary}",
		lineHeight: "{lineHeights.md}",
		bgColor: "{colors.surface.1}",
		fontVariantNumeric: "tabular-nums",
	},

	"body[data-hide-scrollbar]": {
		overflowY: "hidden",
		overscrollBehavior: "contain",
		overscrollBehaviorY: "contain",
	},

	"h1, h2, h3, h4, h5, h6": {
		fontWeight: "500",
		lineHeight: "{lineHeights.sm}",
	},

	p: {
		textAlign: "start",
	},

	span: {
		color: "inherit",
		lineHeight: "inherit",
	},

	// Interactive Elements
	"button, [type='button'], [type='reset'], [type='submit']": {
		userSelect: "none",
		border: "none",
		outline: "none",
		cursor: "pointer",
		appearance: "button",
		fontFamily: "inherit",
		backgroundImage: "none",
		backgroundColor: "transparent",
	},

	a: {
		color: "inherit",
		textDecoration: "none",
	},

	// Form Elements
	label: {
		fontSize: "{fontSizes.14}",
		color: "{colors.fg.primary}",
		lineHeight: "{lineHeights.xs}",
	},

	"input, textarea, select": {
		border: "none",
		font: "inherit",
		outline: "none",
		color: "inherit",
		appearance: "none",
		overflowY: "hidden",
		fontFamily: "inherit",
		backgroundColor: "transparent",

		"&::-moz-focus-inner": {
			border: 0,
			padding: 0,
		},

		"&:-internal-autofill-selected": {
			color: "inherit",
			bgColor: "inherit",
		},
	},

	// Autofill styles
	"input:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ntextarea:-webkit-autofill,\ntextarea:-webkit-autofill:hover,\ntextarea:-webkit-autofill:focus,\nselect:-webkit-autofill,\nselect:-webkit-autofill:hover,\nselect:-webkit-autofill:focus":
		{
			rounded: "{radii.0}",
			WebkitTextFillColor: "inherit",
			transition: "background-color 5000s ease-in-out 0s",
			WebkitBoxShadow: "0 0 0 1000px {colors.transparent} inset",
		},

	// Media Elements
	"img, picture, video, canvas": {
		maxWidth: "100%",
		height: "auto",
	},

	svg: {
		display: "inline-block",
		verticalAlign: "middle",
	},

	// Lists
	"ul, ol": {
		listStyle: "none",
		margin: "{spacing.0}",
		padding: "{spacing.0}",
	},

	// Accessibility
	":is([dir='rtl'])": {
		textAlign: "end",
		direction: "rtl",
	},

	// Table Elements
	table: {
		borderSpacing: 0,
		borderCollapse: "collapse",
	},

	// Selection Styles
	"::selection": {
		textShadow: "none",
		color: "{colors.accent.tertiary}",
		bgColor: "{colors.accent.primary}",
	},

	// Scrollbar Styles
	"@media (pointer: fine)": {
		"::-webkit-scrollbar": {
			width: "12px",
			height: "12px",
		},

		"::-webkit-scrollbar-track": {
			bgColor: "{colors.bg.tertiary}",
		},

		"::-webkit-scrollbar-thumb": {
			borderRadius: "6px",
			bgColor: "{colors.fg.secondary}",
			border: "3px solid {colors.bg.tertiary}",
		},

		"::-webkit-scrollbar-thumb:hover": {
			bgColor: "{colors.fg.tertiary}",
		},
	},

	"strong, bold": {
		fontWeight: "500",
	},

	// Print Styles
	"@media print": {
		body: {
			color: "{colors.black}",
			bgColor: "{colors.white}",
		},

		"a[href]::after": {
			content: '" (" attr(href) ")"',
		},
	},

	// Hidden
	"[hidden]": {
		display: "none !important",
	},

	// Table
	tr: {
		display: "table-row",
		unicodeBidi: "isolate",
		verticalAlign: "inherit",
	},
	td: {
		display: "table-cell",
		verticalAlign: "inherit",
	},
});
