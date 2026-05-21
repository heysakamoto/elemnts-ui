import { Highlight as ArkHighlight } from "@ark-ui/react";
import { styled } from "@moto-ui/styled-system/jsx";
import { highlightRecipe } from "@moto-ui/styled-system/recipes";

export const Highlight = styled(ArkHighlight, highlightRecipe);
Highlight.displayName = "Highlight";
