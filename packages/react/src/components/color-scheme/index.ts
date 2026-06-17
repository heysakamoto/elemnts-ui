import type { ComponentProps } from "react";
import {
	type ColorSchemeContextValue,
	ColorSchemeRootProvider,
	type UseColorSchemeProps,
	type UseColorSchemeReturn,
	useColorScheme,
	useColorSchemeContext,
	type useColorSchemeValue,
} from "./client";
import {
	ColorSchemeContext,
	ColorSchemeDark,
	ColorSchemeLight,
	ColorSchemeRoot,
} from "./color-scheme";

export type ColorSchemeRootProps = ComponentProps<typeof ColorSchemeRoot>;
export type ColorSchemeDarkProps = ComponentProps<typeof ColorSchemeDark>;
export type ColorSchemeLightProps = ComponentProps<typeof ColorSchemeLight>;
export type ColorSchemeContextProps = ComponentProps<typeof ColorSchemeContext>;
export type ColorSchemeRootProviderProps = ComponentProps<
	typeof ColorSchemeRootProvider
>;

export const ColorScheme = Object.assign(ColorSchemeRoot, {
	RootProvider: ColorSchemeRootProvider,
	Root: ColorSchemeRoot,
	Dark: ColorSchemeDark,
	Context: ColorSchemeContext,
	Light: ColorSchemeLight,
});

export type ColorScheme = {
	Props: ColorSchemeRootProps;
	DarkProps: ColorSchemeDarkProps;
	RootProps: ColorSchemeRootProps;
	LightProps: ColorSchemeLightProps;
	RootProviderProps: ColorSchemeRootProviderProps;
	ContextProps: ColorSchemeContextProps;
};

export type {
	ColorSchemeContextValue,
	UseColorSchemeProps,
	UseColorSchemeReturn,
	useColorSchemeValue,
};
export {
	ColorSchemeContext,
	ColorSchemeDark,
	ColorSchemeLight,
	ColorSchemeRoot,
	ColorSchemeRootProvider,
	useColorScheme,
	useColorSchemeContext,
};
