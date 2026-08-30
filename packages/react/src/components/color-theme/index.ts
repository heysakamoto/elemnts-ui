import type { ComponentProps } from "react";

import {
	type ColorThemeContextValue,
	type UseColorThemeProps,
	type UseColorThemeReturn,
	useColorTheme,
	useColorThemeContext,
} from "./client";
import {
	ColorThemeContext,
	ColorThemeIndicator,
	ColorThemeRoot,
	ColorThemeRootProvider,
	ColorThemeScope,
	ColorThemeTrigger,
} from "./color-theme";

export type ColorThemeRootProviderProps = ComponentProps<
	typeof ColorThemeRootProvider
>;
export type ColorThemeIndicatorProps = ComponentProps<
	typeof ColorThemeIndicator
>;
export type ColorThemeRootProps = ComponentProps<typeof ColorThemeRoot>;
export type ColorThemeContextProps = ComponentProps<typeof ColorThemeContext>;
export type ColorThemeTriggerProps = ComponentProps<typeof ColorThemeTrigger>;
export type ColorThemeScopeProps = ComponentProps<typeof ColorThemeScope>;

export const ColorTheme = Object.assign(ColorThemeRoot, {
	RootProvider: ColorThemeRootProvider,
	Root: ColorThemeRoot,
	Indicator: ColorThemeIndicator,
	Context: ColorThemeContext,
	Trigger: ColorThemeTrigger,
	Scope: ColorThemeScope,
});

export type ColorTheme = {
	Props: ColorThemeRootProps;
	IndicatorProps: ColorThemeIndicatorProps;
	RootProps: ColorThemeRootProps;
	TriggerProps: ColorThemeTriggerProps;
	ScopeProps: ColorThemeScopeProps;
	RootProviderProps: ColorThemeRootProviderProps;
	ContextProps: ColorThemeContextProps;
};

export type { ColorThemeContextValue, UseColorThemeProps, UseColorThemeReturn };
export {
	ColorThemeContext,
	ColorThemeIndicator,
	ColorThemeRoot,
	ColorThemeRootProvider,
	ColorThemeScope,
	ColorThemeTrigger,
	useColorTheme,
	useColorThemeContext,
};
