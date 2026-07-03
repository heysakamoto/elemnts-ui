import { ark, type HTMLArkProps } from "@ark-ui/react";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { sidebarRecipe } from "@moto-ui/styled-system/recipes";
import { forwardRef, type ReactNode } from "react";

import {
	SidebarContextProvider,
	type UseSidebarProps,
	useSidebar,
	useSidebarContext,
} from "./client";

const { withProvider, withContext } = createStyleContext(sidebarRecipe);

type SidebarRootProviderProps = Omit<HTMLArkProps<"div">, "value"> & {
	value: ReturnType<typeof useSidebarContext>;
};

const SidebarRootProviderBase = forwardRef<
	HTMLDivElement,
	SidebarRootProviderProps
>((props, ref) => {
	const { value, ...restProps } = props;

	return (
		<SidebarContextProvider value={value}>
			<ark.div
				ref={ref}
				{...restProps}
			/>
		</SidebarContextProvider>
	);
});
export const SidebarRootProvider = withProvider(
	SidebarRootProviderBase,
	"root",
);
SidebarRootProvider.displayName = "SidebarRootProvider";

type SidebarRootBaseProps = HTMLArkProps<"div"> & UseSidebarProps;
const SidebarRootBase = forwardRef<HTMLDivElement, SidebarRootBaseProps>(
	(props, ref) => {
		const { collapsed, onCollapsedChange, ...restProps } = props;

		const value = useSidebar({
			collapsed,
			onCollapsedChange,
		});

		return (
			<SidebarContextProvider value={value}>
				<ark.div
					ref={ref}
					{...restProps}
				/>
			</SidebarContextProvider>
		);
	},
);

export const SidebarRoot = withProvider(SidebarRootBase, "root");
SidebarRoot.displayName = "SidebarRoot";

type SidebarTriggerProps = HTMLArkProps<"button">;
const SidebarTriggerBase = forwardRef<HTMLButtonElement, SidebarTriggerProps>(
	(props, ref) => {
		const { onClick, ...restProps } = props;
		const { toggle } = useSidebarContext();

		function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
			toggle();
			onClick?.(e);
		}

		return (
			<ark.button
				ref={ref}
				{...restProps}
				onClick={handleClick}
			/>
		);
	},
);
export const SidebarTrigger = withContext(SidebarTriggerBase, "trigger");
SidebarTrigger.displayName = "SidebarTrigger";

export const SidebarContent = withContext(ark.div, "content");
SidebarContent.displayName = "SidebarContent";

export const SidebarHeader = withContext(ark.div, "header");
SidebarHeader.displayName = "SidebarHeader";

export const SidebarFooter = withContext(ark.div, "footer");
SidebarFooter.displayName = "SidebarFooter";

export const SidebarGroup = withContext(ark.section, "group");
SidebarGroup.displayName = "SidebarGroup";

export const SidebarItem = withContext(ark.div, "item");
SidebarItem.displayName = "SidebarItem";

type SidebarContextProps = {
	children:
		| ((ctx: ReturnType<typeof useSidebarContext>) => ReactNode)
		| ReactNode;
};
export const SidebarContext = (props: SidebarContextProps) => {
	const { children } = props;
	const ctx = useSidebarContext();

	return typeof children === "function" ? children(ctx) : children;
};
