import { ark } from "@ark-ui/react/factory";

import { styled } from "../../../styled-system/jsx";
import { chipRecipe } from "../../../styled-system/recipes";

export const Chip = styled(ark.span, chipRecipe);
Chip.displayName = "Chip";
