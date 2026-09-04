import { FocusTrap as ArkFocusTrap } from "@ark-ui/react";

import { styled } from "../../styled-system/jsx";
import { focusTrapRecipe } from "../../styled-system/recipes";

export const FocusTrap = styled(ArkFocusTrap, focusTrapRecipe);
FocusTrap.displayName = "FocusTrap";
