import { ark } from "@ark-ui/react";

import { styled } from "../../../styled-system/jsx";
import { imageRecipe } from "../../../styled-system/recipes";

export const Image = styled(ark.img, imageRecipe, {
	forwardProps: ["width", "height"],
});
Image.displayName = "Image";
