import { defineKeyframes } from "@pandacss/dev";
export const keyframes = defineKeyframes({
	pulse: {
		"0%, 100%": {
			backgroundColor:
				"color-mix(in oklab, {colors.bg.secondary}, transparent 0%)",
		},
		"50%": {
			backgroundColor:
				"color-mix(in oklab, {colors.bg.secondary}, transparent 50%)",
		},
	},

	// marquee
	"marquee-x": {
		"0%": { transform: "translateX(0%)" },
		"100%": { transform: "translateX(var(--marquee-translate))" },
	},
	"marquee-y": {
		"0%": { transform: "translateY(0%)" },
		"100%": { transform: "translateY(var(--marquee-translate))" },
	},

	// fades
	"fade-in": {
		"0%": { opacity: 0 },
		"100%": { opacity: 1 },
	},
	"fade-out": {
		"0%": { opacity: 1 },
		"100%": { opacity: 0 },
	},

	// rotate
	"rotate-in": {
		from: { transform: "rotate(-90deg)" },
		to: { transform: "rotate(0deg)" },
	},
	"rotate-out": {
		from: { transform: "rotate(0deg)" },
		to: { transform: "rotate(90deg)" },
	},
	spin: {
		"0%": { transform: "rotate(0deg)" },
		"100%": { transform: "rotate(360deg)" },
	},
	ping: {
		"0%": { transform: "scale(1)", opacity: "1" },
		"75%": { transform: "scale(1.1)", opacity: "0.75" },
		"100%": { transform: "scale(1)", opacity: "0" },
	},
	bounce: {
		"0%, 100%": { transform: "translateY(0)" },
		"50%": { transform: "translateY(-15px)" },
	},
	shake: {
		"0%, 100%": { transform: "translateX(0)" },
		"20%": { transform: "translateX(-4px)" },
		"40%": { transform: "translateX(4px)" },
		"60%": { transform: "translateX(-2px)" },
		"80%": { transform: "translateX(2px)" },
	},
	"nudge-up": {
		"0%": { transform: "translateY(0)" },
		"50%": { transform: "translateY(-4px)" },
		"100%": { transform: "translateY(0)" },
	},
	press: {
		"0%": { transform: "scale(1)" },
		"100%": { transform: "scale(0.97)" },
	},
	pop: {
		"0%": { transform: "scale(0.95)" },
		"100%": { transform: "scale(1)" },
	},

	// slide
	"slide-up": {
		"0%": { opacity: 0, transform: "height(8px)" },
		"100%": { opacity: 1, transform: "translateY(0)" },
	},
	"slide-down": {
		"0%": { opacity: 0, transform: "translateY(-8px)" },
		"100%": { opacity: 1, transform: "translateY(0)" },
	},
	"slide-left": {
		"0%": { opacity: 0, transform: "translateX(8px)" },
		"100%": { opacity: 1, transform: "translateX(0)" },
	},
	"slide-right": {
		"0%": { opacity: 0, transform: "translateX(-8px)" },
		"100%": { opacity: 1, transform: "translateX(0)" },
	},
	"slide-down-fade": {
		from: { height: 0, opacity: 0 },
		to: { opacity: 1, height: "var(--height, auto)" },
	},
	"slide-up-fade": {
		to: { opacity: 0, height: 0 },
		from: { opacity: 1, height: "var(--height, auto)" },
	},
	"slide-in-bottom": {
		from: { transform: "translate3d(0, 100%, 0)" },
		to: {
			transform:
				"translate3d(var(--drawer-translate-x, 0), var(--drawer-translate-y, 0), 0)",
		},
	},
	"slide-out-bottom": {
		from: {
			transform:
				"translate3d(var(--drawer-translate-x, 0), var(--drawer-translate-y, 0), 0)",
		},
		to: { transform: "translate3d(0, 100%, 0)" },
	},
	"slide-in-top": {
		from: { transform: "translate3d(0, -100%, 0)" },
		to: {
			transform:
				"translate3d(var(--drawer-translate-x, 0), var(--drawer-translate-y, 0), 0)",
		},
	},
	"slide-out-top": {
		from: {
			transform:
				"translate3d(var(--drawer-translate-x, 0), var(--drawer-translate-y, 0), 0)",
		},
		to: { transform: "translate3d(0, -100%, 0)" },
	},
	"slide-in-left": {
		from: { transform: "translate3d(-100%, 0, 0)" },
		to: {
			transform:
				"translate3d(var(--drawer-translate-x, 0), var(--drawer-translate-y, 0), 0)",
		},
	},
	"slide-out-left": {
		from: {
			transform:
				"translate3d(var(--drawer-translate-x, 0), var(--drawer-translate-y, 0), 0)",
		},
		to: { transform: "translate3d(-100%, 0, 0)" },
	},
	"slide-in-right": {
		from: { transform: "translate3d(100%, 0, 0)" },
		to: {
			transform:
				"translate3d(var(--drawer-translate-x, 0), var(--drawer-translate-y, 0), 0)",
		},
	},
	"slide-out-right": {
		from: {
			transform:
				"translate3d(var(--drawer-translate-x, 0), var(--drawer-translate-y, 0), 0)",
		},
		to: { transform: "translate3d(100%, 0, 0)" },
	},

	// scale
	"scale-in": {
		"0%": { opacity: 0, transform: "scale(0)" },
		"100%": { opacity: 1, transform: "scale(1)" },
	},
	"scale-out": {
		"0%": { opacity: 1, transform: "scale(1)" },
		"100%": { opacity: 0, transform: "scale(0)" },
	},
	"scale-fade-in": {
		"0%": { opacity: 0, transform: "scale(0.96)" },
		"100%": { opacity: 1, transform: "scale(1)" },
	},
	"scale-fade-out": {
		"0%": { opacity: 1, transform: "scale(1)" },
		"100%": { opacity: 0, transform: "scale(0.96)" },
	},

	// flip
	"flip-in": {
		from: { transform: "rotateY(180deg)" },
		to: { transform: "rotateY(0deg)" },
	},
	"flip-out": {
		from: { transform: "rotateY(0deg)" },
		to: { transform: "rotateY(180deg)" },
	},

	shine: {
		"100%": { transform: "translateX(200%)" },
	},
	float: {
		"0%, 100%": { transform: "translateY(0)" },
		"50%": { transform: "translateY(-6px)" },
	},
	breath: {
		"0%, 100%": { opacity: 1 },
		"50%": { opacity: 0.85 },
	},

	// collapse
	"expand-height": {
		from: { height: "var(--collapsed-height, 0)" },
		to: { height: "var(--height)" },
	},
	"collapse-height": {
		from: { height: "var(--height)" },
		to: { height: "var(--collapsed-height, 0)" },
	},
	"expand-width": {
		from: { width: "var(--collapsed-width, 0)" },
		to: { width: "var(--width)" },
	},
	"collapse-width": {
		from: { width: "var(--width)" },
		to: { width: "var(--collapsed-width, 0)" },
	},

	// progress
	"progress-linear": {
		"0%": { transform: "translateX(-100%) scaleX(0.2)" },
		"50%": { transform: "translateX(0%) scaleX(0.5)" },
		"100%": { transform: "translateX(100%) scaleX(0.2)" },
	},
	"progress-circular": {
		"0%": { strokeDasharray: "1, 200", strokeDashoffset: "0" },
		"50%": { strokeDasharray: "89, 200", strokeDashoffset: "-35" },
		"100%": { strokeDasharray: "89, 200", strokeDashoffset: "-124" },
	},
});
