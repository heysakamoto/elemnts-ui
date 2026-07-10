import { useSponsor, useSponsorContext } from "./components/client";
import { SponsorRoot } from "./components/sponsor-root";

export const Sponsor = Object.assign(SponsorRoot, {
	use: useSponsor,
	useContext: useSponsorContext,
});
