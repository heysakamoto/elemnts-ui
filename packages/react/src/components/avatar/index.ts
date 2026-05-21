import type { ComponentProps } from "react";
import {
	AvatarContext,
	AvatarFallback,
	AvatarImage,
	AvatarRoot,
	AvatarRootProvider,
} from "./avatar";

export type AvatarRootProviderProps = ComponentProps<typeof AvatarRootProvider>;
export type AvatarRootProps = ComponentProps<typeof AvatarRoot>;
export type AvatarFallbackProps = ComponentProps<typeof AvatarFallback>;
export type AvatarImageProps = ComponentProps<typeof AvatarImage>;
export type AvatarContextProps = ComponentProps<typeof AvatarContext>;

export const Avatar = Object.assign(AvatarRoot, {
	RootProvider: AvatarRootProvider,
	Fallback: AvatarFallback,
	Image: AvatarImage,
	Root: AvatarRoot,
	Context: AvatarContext,
});

export type Avatar = {
	RootProviderProps: AvatarRootProviderProps;
	RootProps: AvatarRootProps;
	FallbackProps: AvatarFallbackProps;
	ImageProps: AvatarImageProps;
	ContextProps: AvatarContextProps;
	Props: AvatarRootProps;
};

export type {
	AvatarStatusChangeDetails,
	UseAvatarContext,
	UseAvatarProps,
	UseAvatarReturn,
} from "@ark-ui/react/avatar";

export { useAvatar, useAvatarContext } from "@ark-ui/react/avatar";

export {
	AvatarRootProvider,
	AvatarRoot,
	AvatarFallback,
	AvatarImage,
	AvatarContext,
};
