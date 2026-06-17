const THEME_KEY = "theme";

export type Theme = "light" | "dark" | "system";

export function getSystemTheme(): Theme {
	if (typeof window === "undefined") {
		return "light";
	}

	const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null;

	switch (savedTheme) {
		case "light":
			return "light";

		case "dark":
			return "dark";

		default:
			return window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light";
	}
}

export function resolveTheme(theme: Theme): Theme {
	if (theme === "system") return getSystemTheme();
	return theme;
}

export function applyTheme(theme: Theme) {
	const resolved = resolveTheme(theme);
	const root = document.documentElement;
	root.classList.remove("light", "dark");
	root.classList.add(resolved);
	localStorage.setItem(THEME_KEY, theme);
}
