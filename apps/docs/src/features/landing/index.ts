import { LandingHero } from "./components/landing-hero";
import { LandingInstall } from "./components/landing-install";
import { LandingRoot } from "./components/landing-root";

export const Landing = Object.assign(LandingRoot, {
	Hero: LandingHero,
	Install: LandingInstall,
});
