import {
	createContext,
	type PropsWithChildren,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";

export type UseSidebarProps = {
	collapsed?: boolean;
	defaultCollapsed?: boolean;
	onCollapsedChange?: (details: { collapsed: boolean }) => void;
};

export type SidebarContextValue = ReturnType<typeof useSidebar>;

const SidebarContext = createContext<SidebarContextValue | null>(null);

export const SidebarContextProvider = SidebarContext.Provider;

export function useSidebar(props?: UseSidebarProps) {
	const {
		collapsed: controlledCollapsed,
		defaultCollapsed = false,
		onCollapsedChange,
	} = props || {};

	const [uncontrolledCollapsed, setUncontrolledCollapsed] =
		useState(defaultCollapsed);

	const isControlled = controlledCollapsed !== undefined;

	const collapsed = isControlled ? controlledCollapsed : uncontrolledCollapsed;

	const setCollapsed = useCallback(
		(details: { collapsed: boolean }) => {
			const { collapsed } = details;
			if (!isControlled) {
				setUncontrolledCollapsed(collapsed);
			}

			onCollapsedChange?.({ collapsed });
		},
		[isControlled, onCollapsedChange],
	);

	const toggle = useCallback(() => {
		setCollapsed({ collapsed: !collapsed });
	}, [collapsed, setCollapsed]);

	return useMemo(
		() => ({
			toggle,
			collapsed,
			onCollapsedChange: setCollapsed,
		}),
		[collapsed, setCollapsed, toggle],
	);
}

export function useSidebarContext() {
	const context = useContext(SidebarContext);

	if (!context) {
		throw new Error("Sidebar components must be inside SidebarRootProvider");
	}

	return context;
}

export type SidebarRootProviderProps = PropsWithChildren<{
	value: SidebarContextValue;
}>;

export function SidebarRootProvider(props: SidebarRootProviderProps) {
	const { value, children } = props;

	return (
		<SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
	);
}
