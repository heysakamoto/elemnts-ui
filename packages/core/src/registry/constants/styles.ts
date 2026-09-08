import { defineStyles } from "@pandacss/dev";

export const positionerStyle = defineStyles({
  left: 0,
  top: 0,
  display: "flex",
  width: "{sizes.full}",
  position: "absolute",
  alignItems: "center",
  pointerEvents: "none",
  justifyContent: "center",
});

export const contentStyle = defineStyles({
  top: 0,
  left: 0,
  width: "max-content",
  position: "absolute",

  _open: {
    animation: "scale-in 150ms ease-out",
  },
  _closed: {
    animation: "scale-out 150ms ease-in",
  },
});

export const triggerStyle = defineStyles({});

export const labelStyle = defineStyles({});

export const titleStyle = defineStyles({
	fontSize: "16",
	display: "flex",
	fontWeight: "500",
	alignItems: "center",
	gap: "calc({spacing.4} * 1.5)",
});

export const descriptionStyle = defineStyles({});

export const backdropStyle = defineStyles({});

export const linkStyle = defineStyles({
  gap: "8",
  display: "flex",
  alignItems: "center",
});

export const popoverStyle = defineStyles({
  zIndex: 50,
});
