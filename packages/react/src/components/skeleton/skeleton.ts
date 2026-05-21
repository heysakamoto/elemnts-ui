import { ark } from "@ark-ui/react/factory";
import { styled } from "@moto-ui/styled-system/jsx";
import { skeletonRecipe } from "@moto-ui/styled-system/recipes";

export const Skeleton = styled(ark.span, skeletonRecipe);
Skeleton.displayName = "Skeleton";
