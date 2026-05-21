import { ark } from "@ark-ui/react";
import { styled } from "@moto-ui/styled-system/jsx";
import { textareaRecipe } from "@moto-ui/styled-system/recipes";

export const Textarea = styled(ark.textarea, textareaRecipe, {
	forwardProps: ["rows", "columns"],
});
Textarea.displayName = "Textarea";
