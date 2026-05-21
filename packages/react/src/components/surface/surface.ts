import { ark } from "@ark-ui/react";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { surfaceRecipe } from "@moto-ui/styled-system/recipes";
import { BaseElevated } from "../elevated";

const { withProvider, withContext } = createStyleContext(surfaceRecipe);

export const SurfaceRoot = withProvider(BaseElevated, "root");
SurfaceRoot.displayName = "SurfaceRoot";

export const SurfaceHeader = withContext(ark.div, "header");
SurfaceHeader.displayName = "SurfaceHeader";

export const SurfaceContent = withContext(ark.div, "content");
SurfaceContent.displayName = "SurfaceContent";

export const SurfaceFooter = withContext(ark.div, "footer");
SurfaceFooter.displayName = "SurfaceFooter";

export const SurfaceTitle = withContext(ark.h3, "title");
SurfaceTitle.displayName = "SurfaceTitle";

export const SurfaceDescription = withContext(ark.div, "description");
SurfaceDescription.displayName = "SurfaceDescription";

export const SurfaceAddon = withContext(ark.div, "addon");
SurfaceAddon.displayName = "SurfaceAddon";
