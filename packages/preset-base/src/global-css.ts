import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
	":root": {
		colorPalette: "accent",
		colorScheme: "light dark",
	},

	// Reset & Base Styles
	"*": {
		margin: "{spacing.0}",
		padding: "{spacing.0}",
		boxSizing: "border-box",
		WebkitTapHighlightColor: "transparent",

		// Typography optimizations
		fontSynthesis: "none",
		textRendering: "optimizeLegibility",
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
		bg: "{colors.bg.primary}",
		fontSize: "{fontSizes.16}",
		color: "{colors.fg.primary}",
		lineHeight: "{lineHeights.md}",
		fontVariantNumeric: "tabular-nums",
	},

	"body[data-hide-scrollbar]": {
		overflowY: "hidden",
		overscrollBehavior: "contain",
		overscrollBehaviorY: "contain",
	},

	"h1, h2, h3, h4, h5, h6": {
		fontWeight: "500",
		color: "{colors.fg.primary}",
		lineHeight: "{lineHeights.sm}",
	},

	p: {
		color: "inherit",
		textAlign: "start",
		lineHeight: "{lineHeights.md}",
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
		margin: "{spacing.0}",
		padding: "{spacing.0}",
		fontFamily: "inherit",
		backgroundImage: "none",
		backgroundColor: "transparent",

		_disabled: {
			opacity: 0.5,
			cursor: "not-allowed !important",
		},
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
			backgroundColor: "inherit",
		},
	},

	//  Invalid styles
	"input[data-invalid], input:invalid, input[aria-invalid=true], textarea[data-invalid], textarea:invalid, textarea[aria-invalid=true]":
		{
			boxShadow: "0 0 0 2px {colors.destructive.primary}",
		},

	// focus
	":focus, [data-focus]": {
		shadow: "none",
		outline: "none",
	},

	"button:focus-visible, a[href]:focus-visible, input:focus-visible, textarea:focus-visible, select:focus-visible, summary:focus-visible, [tabindex]:not([tabindex='-1']):focus-visible, [role='button']:focus-visible, [role='link']:focus-visible, [role='menuitem']:focus-visible, [role='tab']:focus-visible, [role='checkbox']:focus-visible, [role='radio']:focus-visible, [role='switch']:focus-visible, [data-focus-visible]":
		{
			shadow: "0 0 0 2px {colors.accent.primary}",
		},

	// Disabled styles
	"[data-disabled], :disabled, [aria-disabled=true]": {
		opacity: 0.5,
		userSelect: "none",
		pointerEvents: "none",
		cursor: "not-allowed !important",
	},

	// Read only styles
	":is([data-readonly], [readonly])": {
		opacity: 0.7,
		userSelect: "none",
		pointerEvents: "none",
	},

	// Placeholder styles
	"::placeholder": {
		opacity: 0.8,
		color: "{colors.fg.tertiary}",
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

	//Hidden
	":is([hidden], [data-hidden])": {
		display: "none !important",
	},

	// Selection Styles
	"::selection": {
		textShadow: "none",
		color: "{colors.accent.tertiary}",
		backgroundColor: "{colors.accent.primary}",
	},

	// Scrollbar Styles
	"@media (pointer: fine)": {
		"::-webkit-scrollbar": {
			width: "12px",
			height: "12px",
		},

		"::-webkit-scrollbar-track": {
			backgroundColor: "{colors.bg.tertiary}",
		},

		"::-webkit-scrollbar-thumb": {
			backgroundColor: "{colors.fg.secondary}",
			borderRadius: "6px",
			border: "3px solid {colors.bg.tertiary}",
		},

		"::-webkit-scrollbar-thumb:hover": {
			backgroundColor: "{colors.fg.tertiary}",
		},
	},

	// Print Styles
	"@media print": {
		body: {
			color: "{colors.black}",
			backgroundColor: "{colors.white}",
		},

		"a[href]::after": {
			content: '" (" attr(href) ")"',
		},
	},
});
