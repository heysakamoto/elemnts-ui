import { Avatar } from "@ark-ui/react/avatar";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { avatarRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(avatarRecipe);

export const AvatarRootProvider = withProvider(Avatar.RootProvider, "root");
AvatarRootProvider.displayName = "AvatarRootProvider";

export const AvatarRoot = withProvider(Avatar.Root, "root");
AvatarRoot.displayName = "AvatarRoot";

export const AvatarFallback = withContext(Avatar.Fallback, "fallback");
AvatarFallback.displayName = "AvatarFallback";

export const AvatarImage = withContext(Avatar.Image, "image");
AvatarImage.displayName = "AvatarImage";

export const AvatarContext = Avatar.Context;
