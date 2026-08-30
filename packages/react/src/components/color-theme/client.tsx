import {
	createContext,
	type PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from "react";

export type ColorTheme = "light" | "dark" | "system";

export type UseColorThemeProps = {
	theme?: ColorTheme;
	defaultTheme?: ColorTheme;
	storage?: {
		key?: string;
		enabled?: boolean;
	};
};

export function useColorTheme(props?: UseColorThemeProps) {
	const { defaultTheme = "system", theme: forcedTheme, storage } = props ?? {};
	const storageEnabled = storage?.enabled ?? false;
	const storageKey = storage?.key ?? "theme";

	const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
		if (typeof window === "undefined") return defaultTheme;

		if (storageEnabled) {
			const saved = localStorage.getItem(storageKey) as ColorTheme | null;
			if (saved === "light" || saved === "dark" || saved === "system") {
				return saved;
			}
		}
		return defaultTheme;
	});

	const activeTheme = forcedTheme ?? colorTheme;

	useEffect(() => {
		if (typeof window === "undefined") return;

		const root = window.document.documentElement;

		const isDark =
			activeTheme === "dark" ||
			(activeTheme === "system" &&
				window.matchMedia("(prefers-color-scheme: dark)").matches);

		root.classList.remove("light", "dark");
		root.classList.add(isDark ? "dark" : "light");

		if (storageEnabled) {
			localStorage.setItem(storageKey, activeTheme);
		}
	}, [activeTheme, storageEnabled, storageKey]);

	useEffect(() => {
		if (activeTheme !== "system" || typeof window === "undefined") return;

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

		const handleChange = (e: MediaQueryListEvent) => {
			const root = window.document.documentElement;
			root.classList.remove("light", "dark");
			root.classList.add(e.matches ? "dark" : "light");
		};

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [activeTheme]);

	function toggle() {
		setColorTheme((prev) => {
			if (prev === "light") return "dark";
			if (prev === "dark") return "light";

			if (typeof window === "undefined") return "light";

			return window.matchMedia("(prefers-color-scheme: dark)").matches
				? "light"
				: "dark";
		});
	}

	return {
		toggle,
		theme: activeTheme,
		onThemeChange: setColorTheme,
	};
}

export type UseColorThemeReturn = ReturnType<typeof useColorTheme>;
export type ColorThemeContextValue = UseColorThemeReturn;
export const ColorThemeContext = createContext<ColorThemeContextValue | null>(
	null,
);

export function useColorThemeContext() {
	const context = useContext(ColorThemeContext);
	if (context === null)
		throw new Error(
			"useColorThemeContext must be used within a ColorThemeProvider",
		);
	return context;
}

type ColorThemeContextProviderProps = PropsWithChildren<{
	value: ColorThemeContextValue;
}>;

export function ColorThemeContextProvider(
	props: ColorThemeContextProviderProps,
) {
	const { value, children } = props;

	return (
		<ColorThemeContext.Provider value={value}>
			{children}
		</ColorThemeContext.Provider>
	);
}
