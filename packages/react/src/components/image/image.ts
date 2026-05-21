import { ark } from "@ark-ui/react";
import { styled } from "@moto-ui/styled-system/jsx";
import { imageRecipe } from "@moto-ui/styled-system/recipes";

export const Image = styled(ark.img, imageRecipe, {
	forwardProps: ["width", "height"],
});
Image.displayName = "Image";
