export const variant = {
  primary: {
    color: "{colors.colorPalette.tertiary}",
    backgroundColor: "{colors.colorPalette.primary}",

    _hover: {
      backgroundColor:
        "color-mix(in oklab, {colors.colorPalette.primary}, var(--mix-dark-hover))",
    },
    _active: {
      backgroundColor:
        "color-mix(in oklab, {colors.colorPalette.primary}, var(--mix-dark-active))",
    },
  },
  secondary: {
    backgroundColor: "{colors.colorPalette.secondary}",
    color: "{colors.colorPalette.primary}",

    _active: {
      backgroundColor:
        "color-mix(in oklab, {colors.colorPalette.secondary}, var(--mix-dark-active))",
    },
    _hover: {
      backgroundColor:
        "color-mix(in oklab, {colors.colorPalette.secondary}, var(--mix-dark-hover))",
    },
  },
  tertiary: {
    backgroundColor: "{colors.transparent}",
    color: "{colors.colorPalette.primary}",
    border: "1px solid {colors.colorPalette.stroke}",

    _active: {
      backgroundColor:
        "color-mix(in oklab, {colors.transparent}, var(--mix-dark-active))",
    },
    _hover: {
      backgroundColor:
        "color-mix(in oklab, {colors.transparent}, var(--mix-dark-hover))",
    },
  },
  ghost: {
    backgroundColor: "{colors.transparent}",
    color: "{colors.colorPalette.primary}",

    _active: {
      backgroundColor:
        "color-mix(in oklab, {colors.transparent}, var(--mix-dark-active))",
    },
    _hover: {
      backgroundColor:
        "color-mix(in oklab, {colors.transparent}, var(--mix-dark-hover))",
    },
  },
  surface: {
    backgroundColor: "{colors.colorPalette.secondary}",
    color: "{colors.colorPalette.primary}",
    border: "1px solid {colors.colorPalette.stroke}",

    _active: {
      backgroundColor:
        "color-mix(in oklab, {colors.colorPalette.secondary}, var(--mix-dark-active))",
    },
    _hover: {
      backgroundColor:
        "color-mix(in oklab, {colors.colorPalette.secondary}, var(--mix-dark-hover))",
    },
  },
  plain: {
    backgroundColor: "{colors.transparent}",
    color: "{colors.colorPalette.primary}",
  },
};
