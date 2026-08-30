import type { PropsWithChildren } from "react";

import { SponsorContext, type UseSponsorReturn } from "./sponsor-client";

type SponsorRootProviderProps = PropsWithChildren<{ value: UseSponsorReturn }>;

export function SponsorRootProvider(prop: SponsorRootProviderProps) {
	const { children, value } = prop;
	return (
		<SponsorContext.Provider value={value}>{children}</SponsorContext.Provider>
	);
}
