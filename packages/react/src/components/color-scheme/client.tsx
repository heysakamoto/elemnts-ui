import {
	createContext,
	type PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from "react";

export type ColorScheme = "light" | "dark" | "system";

export type UseColorSchemeProps = {
	defaultScheme?: ColorScheme;
	forcedScheme?: ColorScheme;
	storage?: {
		enabled?: boolean;
		key?: string;
	};
};

export function useColorScheme(props?: UseColorSchemeProps) {
	const { defaultScheme = "system", forcedScheme, storage } = props ?? {};
	const storageEnabled = storage?.enabled ?? false;
	const storageKey = storage?.key ?? "theme";

	const [colorScheme, setColorScheme] = useState<ColorScheme>(() => {
		if (typeof window === "undefined") return defaultScheme;

		if (storageEnabled) {
			const saved = localStorage.getItem(storageKey) as ColorScheme | null;
			if (saved === "light" || saved === "dark" || saved === "system") {
				return saved;
			}
		}
		return defaultScheme;
	});

	const activeScheme = forcedScheme ?? colorScheme;

	useEffect(() => {
		if (typeof window === "undefined") return;

		const root = window.document.documentElement;

		const isDark =
			activeScheme === "dark" ||
			(activeScheme === "system" &&
				window.matchMedia("(prefers-color-scheme: dark)").matches);

		root.classList.remove("light", "dark");
		root.classList.add(isDark ? "dark" : "light");

		if (storageEnabled) {
			localStorage.setItem(storageKey, activeScheme);
		}
	}, [activeScheme, storageEnabled, storageKey]);

	useEffect(() => {
		if (activeScheme !== "system" || typeof window === "undefined") return;

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

		const handleChange = (e: MediaQueryListEvent) => {
			const root = window.document.documentElement;
			root.classList.remove("light", "dark");
			root.classList.add(e.matches ? "dark" : "light");
		};

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [activeScheme]);

	function toggleColorScheme() {
		setColorScheme((prev) => {
			if (prev === "light") return "dark";
			if (prev === "dark") return "light";

			if (typeof window === "undefined") return "light";

			return window.matchMedia("(prefers-color-scheme: dark)").matches
				? "light"
				: "dark";
		});
	}

	return {
		toggleColorScheme,
		colorScheme: activeScheme,
		onColorSchemeChange: setColorScheme,
	};
}

export type UseColorSchemeReturn = ReturnType<typeof useColorScheme>;
export type ColorSchemeContextValue = UseColorSchemeReturn;
export const ColorSchemeContext = createContext<ColorSchemeContextValue | null>(
	null,
);

export function useColorSchemeContext() {
	const context = useContext(ColorSchemeContext);
	if (context === null)
		throw new Error(
			"useColorSchemeContext must be used within a ColorSchemeProvider",
		);
	return context;
}

export function useColorSchemeValue() {
	const { colorScheme } = useColorSchemeContext();
	return colorScheme;
}

type ColorSchemeRootProviderProps = PropsWithChildren<{
	value: ColorSchemeContextValue;
}>;

export function ColorSchemeRootProvider(props: ColorSchemeRootProviderProps) {
	const { value, children } = props;

	return (
		<ColorSchemeContext.Provider value={value}>
			{children}
		</ColorSchemeContext.Provider>
	);
}
