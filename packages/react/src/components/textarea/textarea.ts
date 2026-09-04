import { ark } from "@ark-ui/react";
import { styled } from "../../styled-system/jsx";
import { textareaRecipe } from "../../styled-system/recipes";

export const Textarea = styled(ark.textarea, textareaRecipe, {
	forwardProps: ["rows", "columns"],
});
Textarea.displayName = "Textarea";
