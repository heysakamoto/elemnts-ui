import { Highlight as ArkHighlight } from "@ark-ui/react";

import { styled } from "../../../styled-system/jsx";
import { highlightRecipe } from "../../../styled-system/recipes";

export const Highlight = styled(ArkHighlight, highlightRecipe);
Highlight.displayName = "Highlight";
