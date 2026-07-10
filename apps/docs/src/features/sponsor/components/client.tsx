import { createContext, useContext, useState } from "react";

export const SponsorContext = createContext<UseSponsorReturnType | null>(null);

export type UseSponsorProps = {
	defaultOpen?: boolean;
};

export type UseSponsorReturnType = ReturnType<typeof useSponsor>;

export function useSponsor(props: UseSponsorProps = {}) {
	const { defaultOpen = false } = props;
	const [open, setOpen] = useState(defaultOpen);

	return {
		open,
		setOpen,
	};
}

export function useSponsorContext() {
	const context = useContext(SponsorContext);
	if (!context) {
		throw new Error("useSponsorContext must be used within a SponsorProvider");
	}
	return context;
}
