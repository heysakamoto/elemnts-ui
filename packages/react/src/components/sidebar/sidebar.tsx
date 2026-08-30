import { ark, type HTMLArkProps } from "@ark-ui/react";
import { forwardRef, type ReactNode } from "react";
import { createStyleContext } from "../../../styled-system/jsx";
import { sidebarRecipe } from "../../../styled-system/recipes";
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
			<ark.aside
				ref={ref}
				hidden={!value.open}
				data-open={value.open ? "open" : "closed"}
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
		const { open, defaultOpen, onOpenChange, ...restProps } = props;

		const value = useSidebar({
			open,
			defaultOpen,
			onOpenChange,
		});

		return (
			<SidebarRootProviderBase
				ref={ref}
				value={value}
				{...restProps}
			/>
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

export const SidebarAddon = withContext(ark.div, "addon");
SidebarAddon.displayName = "SidebarAddon";

export const SidebarNav = withContext(ark.nav, "nav");
SidebarNav.displayName = "SidebarNav";

export const SidebarGroup = withContext(ark.section, "group");
SidebarGroup.displayName = "SidebarGroup";

export const SidebarList = withContext(ark.ul, "list");
SidebarList.displayName = "SidebarList";

export const SidebarLabel = withContext(ark.span, "label");
SidebarLabel.displayName = "SidebarLabel";

export const SidebarItem = withContext(ark.li, "item");
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
