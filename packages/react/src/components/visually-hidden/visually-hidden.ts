import { ark } from "@ark-ui/react";
import { styled } from "../../styled-system/jsx";
import { visuallyHiddenRecipe } from "../../styled-system/recipes";

export const VisuallyHidden = styled(ark.span, visuallyHiddenRecipe);
VisuallyHidden.displayName = "VisuallyHidden";
