import { ark } from "@ark-ui/react";
import { styled } from "@moto-ui/styled-system/jsx";
import { gridRecipe } from "@moto-ui/styled-system/recipes";

export const Grid = styled(ark.div, gridRecipe);
Grid.displayName = "Grid";

export const GridItem = styled(ark.div);
GridItem.displayName = "GridItem";
