import { ark } from "@ark-ui/react";
import { styled } from "../../styled-system/jsx";
import { gridRecipe } from "../../styled-system/recipes";

export const Grid = styled(ark.div, gridRecipe);
Grid.displayName = "Grid";

export const GridItem = styled(ark.div);
GridItem.displayName = "GridItem";
