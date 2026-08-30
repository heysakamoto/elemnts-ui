import { SponsorHeader } from "./components/sponsor.header";
import { SponsorContent } from "./components/sponsor-content";
import { SponsorFooter } from "./components/sponsor-footer";
import { SponsorRoot } from "./components/sponsor-root";

export const Sponsor = Object.assign(SponsorRoot, {
	Root: SponsorRoot,
	Header: SponsorHeader,
	Content: SponsorContent,
	Footer: SponsorFooter,
});
