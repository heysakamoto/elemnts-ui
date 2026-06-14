import { ark } from "@ark-ui/react";
import { styled } from "@moto-ui/styled-system/jsx";
import { visuallyHiddenRecipe } from "@moto-ui/styled-system/recipes";

export const VisuallyHidden = styled(ark.span, visuallyHiddenRecipe);
VisuallyHidden.displayName = "VisuallyHidden";
