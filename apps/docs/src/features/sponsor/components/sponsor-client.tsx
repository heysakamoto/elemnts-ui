import { createContext, use, useState } from "react";

export type UseSponsorProps = {
	defaultValue?: string;
};
export function useSponsor(props?: UseSponsorProps) {
	const { defaultValue = "" } = props ?? {};

	const [value, setValue] = useState(defaultValue);

	return { value, setValue };
}

export type UseSponsorReturn = ReturnType<typeof useSponsor>;

export const SponsorContext = createContext<UseSponsorReturn | undefined>(
	undefined,
);

export function useSponsorContext() {
	const ctx = use(SponsorContext);
	if (!ctx) {
		throw new Error("useSponsorContext must be used within a SponsorProvider");
	}
	return ctx;
}
