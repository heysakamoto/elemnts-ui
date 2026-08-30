import {
	createContext,
	type PropsWithChildren,
	use,
	useCallback,
	useMemo,
	useState,
} from "react";

export type UseSidebarProps = {
	open?: boolean;
	defaultOpen?: boolean;
	onOpenChange?: (details: { open: boolean }) => void;
};

export function useSidebar(props?: UseSidebarProps) {
	const {
		open: controlledOpen,
		defaultOpen = true,
		onOpenChange,
	} = props || {};

	const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);

	const isControlled = controlledOpen !== undefined;
	const open = isControlled ? controlledOpen : uncontrolledOpen;

	const setOpen = useCallback(
		(details: { open: boolean }) => {
			const { open } = details;
			if (!isControlled) {
				setUncontrolledOpen(open);
			}

			onOpenChange?.({ open });
		},
		[isControlled, onOpenChange],
	);

	const toggle = useCallback(() => {
		setOpen({ open: !open });
	}, [open, setOpen]);

	return useMemo(
		() => ({
			open,
			toggle,
			onOpenChange: setOpen,
		}),
		[open, setOpen, toggle],
	);
}

export type SidebarContextValue = ReturnType<typeof useSidebar>;

const SidebarContext = createContext<SidebarContextValue | null>(null);

export const SidebarContextProvider = SidebarContext.Provider;

export function useSidebarContext() {
	const context = use(SidebarContext);
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
