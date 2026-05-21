import { useLocation } from "@tanstack/react-router";
import { findNeighbour, type Root } from "fumadocs-core/page-tree";
import type { TOCItemType } from "fumadocs-core/toc";
import {
	type ActionDispatch,
	createContext,
	type PropsWithChildren,
	useContext,
	useEffect,
	useReducer,
} from "react";
import { getSystemTheme } from "@/utils/theme";

export type DocsLayoutState = {
	toc: TOCItemType[];
	pageTree: Root;
};

type DocsLayoutAction = {
	type: "SET_STATE";
	payload?: Partial<DocsLayoutState>;
};

type LayoutContextValue = {
	state: DocsLayoutState;
	setState: ActionDispatch<[DocsLayoutAction]>;
};

const DocsLayoutContext = createContext<LayoutContextValue | null>(null);

export const useDocsLayoutContext = () => {
	const context = useContext(DocsLayoutContext)!;
	const pathname = useLocation({ select: (l) => l.pathname });

	switch (true) {
		case context === null: {
			throw new Error("DocsLayout context is not initialized");
		}
		default: {
			if (!context.state.pageTree) {
				return {
					...context,
					next: undefined,
					previous: undefined,
				};
			}

			const neighbour = findNeighbour(context.state.pageTree, pathname);

			return {
				...context,
				...neighbour,
			};
		}
	}
};

function docsLayoutReducer(
	state: DocsLayoutState,
	action: DocsLayoutAction,
): DocsLayoutState {
	switch (action.type) {
		case "SET_STATE":
			return { ...state, ...action.payload };
		default:
			return state;
	}
}

export type DocsLayoutProviderProps = PropsWithChildren<
	Pick<DocsLayoutState, "pageTree">
>;
export function DocsLayoutProvider(props: DocsLayoutProviderProps) {
	const { children, pageTree = { children: [] } } = props;

	const [state, dispatch] = useReducer(docsLayoutReducer, {
		pageTree: pageTree as Root,
		toc: [],
	});

	return (
		<DocsLayoutContext.Provider value={{ state, setState: dispatch }}>
			{children}
		</DocsLayoutContext.Provider>
	);
}

type ThemeState = {
	mode: string;
	radius: number;
	colors: {
		base: string;
		accent: string;
	};
};

type ThemeAction = { type: "UPDATE"; payload: Partial<ThemeState> };

const ThemeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
	return { ...state, ...action.payload };
};

type ThemeContextValue = {
	theme: ThemeState;
	setTheme: ActionDispatch<[ThemeAction]>;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useThemeContext() {
	const context = useContext(ThemeContext);
	if (!context)
		throw new Error("useThemeContext must be used within a ThemeProvider");
	return context;
}

type Props = {
	children: React.ReactNode;
	defaultTheme?: Partial<ThemeState>;
};

const STORAGE_KEY = "moto-ui-theme";

const DEFAULT_THEME: ThemeState = {
	radius: 16,
	mode: getSystemTheme(),
	colors: {
		base: "neutral",
		accent: "blue",
	},
};

export function ThemeProvider(props: Props) {
	const { children, defaultTheme } = props;

	const [state, dispatch] = useReducer(
		ThemeReducer,
		{
			...DEFAULT_THEME,
			...defaultTheme,
		},
		(initial) => {
			if (typeof window === "undefined") return initial;
			const saved = localStorage.getItem(STORAGE_KEY);
			if (saved) {
				try {
					return { ...initial, ...JSON.parse(saved) };
				} catch (error) {
					console.warn(error instanceof Error ? error.message : String(error));
					return initial;
				}
			}
			return initial;
		},
	);

	useEffect(() => {
		const node = document.body;

		node.style.setProperty("--theme-mode", state.mode);
		node.style.setProperty("--theme-radius", `${state.radius}px`);
		node.style.setProperty("--theme-colors-base", state.colors.base);
		node.style.setProperty("--theme-colors-accent", state.colors.accent);

		localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
	}, [state]);

	return (
		<ThemeContext.Provider value={{ theme: state, setTheme: dispatch }}>
			{children}
		</ThemeContext.Provider>
	);
}
