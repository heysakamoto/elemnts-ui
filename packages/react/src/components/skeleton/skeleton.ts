import { ark } from "@ark-ui/react/factory";
import { styled } from "../../styled-system/jsx";
import { skeletonRecipe } from "../../styled-system/recipes";

export const Skeleton = styled(ark.span, skeletonRecipe);
Skeleton.displayName = "Skeleton";
