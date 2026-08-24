import { ark, type HTMLArkProps } from "@ark-ui/react";
import { forwardRef, type PropsWithChildren, type ReactNode } from "react";

import {
  ColorThemeContextProvider,
  type ColorThemeContextValue,
  type UseColorThemeProps,
  useColorTheme,
  useColorThemeContext,
} from "./client";
import { cx } from "../../../styled-system/css";
import { createStyleContext } from "../../../styled-system/jsx";
import { colorThemeRecipe } from "../../../styled-system/recipes";
import { Show } from "../show";

const { withRootProvider, withContext } = createStyleContext(colorThemeRecipe);

export const ColorThemeRootProvider = withRootProvider(
  ColorThemeContextProvider,
);

type ColorThemeRootBaseProps = PropsWithChildren<UseColorThemeProps>;
const ColorThemeRootBase = (props: ColorThemeRootBaseProps) => {
  const { children, ...restProps } = props;
  const value = useColorTheme(restProps);

  return (
    <ColorThemeRootProvider value={value}>{children}</ColorThemeRootProvider>
  );
};
export const ColorThemeRoot = withRootProvider(ColorThemeRootBase);
ColorThemeRoot.displayName = "ColorThemeRoot";

type ColorThemeContextProps = {
  children:
    ((props: ColorThemeContextValue) => React.ReactNode) | React.ReactNode;
};

export const ColorThemeContext = (props: ColorThemeContextProps) => {
  const { children } = props;
  const ctx = useColorThemeContext();

  return typeof children === "function" ? children(ctx) : children;
};
ColorThemeContext.displayName = "ColorThemeContext";

type ColorThemeScopeBaseProps = HTMLArkProps<"div"> & {
  theme?: "light" | "dark";
};
const ColorThemeScopeBase = forwardRef<
  HTMLDivElement,
  ColorThemeScopeBaseProps
>((props: ColorThemeScopeBaseProps, ref) => {
  const { theme, className, ...restProps } = props;

  return <ark.div ref={ref} className={cx(theme, className)} {...restProps} />;
});
export const ColorThemeScope = withContext(ColorThemeScopeBase, "scope");
ColorThemeScope.displayName = "ColorThemeScope";

type ColorThemeTriggerBaseProps = HTMLArkProps<"button">;
const ColorThemeTriggerBase = forwardRef<
  HTMLButtonElement,
  ColorThemeTriggerBaseProps
>((props, ref) => {
  const { children, onClick, ...restProps } = props;
  const { toggle } = useColorThemeContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // e.preventDefault();
    toggle();
    onClick?.(e);
  };

  return (
    <ark.button ref={ref} onClick={handleClick} {...restProps}>
      {children}
    </ark.button>
  );
});
export const ColorThemeTrigger = withContext(ColorThemeTriggerBase, "trigger");
ColorThemeTrigger.displayName = "ColorThemeTrigger";

type ColorThemeIndicatorBaseProps = HTMLArkProps<"span"> & {
  fallback?: ReactNode;
};
const ColorThemeIndicatorBase = forwardRef<
  HTMLSpanElement,
  ColorThemeIndicatorBaseProps
>((props, ref) => {
  const { theme } = useColorThemeContext();
  const { children, fallback, ...restProps } = props;

  return (
    <ark.span ref={ref} {...restProps}>
      <Show fallback={children} when={theme === "dark"}>
        {fallback}
      </Show>
    </ark.span>
  );
});
export const ColorThemeIndicator = withContext(
  ColorThemeIndicatorBase,
  "indicator",
);
ColorThemeIndicator.displayName = "ColorThemeIndicator";
