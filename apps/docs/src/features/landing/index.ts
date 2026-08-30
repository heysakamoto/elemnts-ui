import { LandingHero } from "./components/landing-hero";
import { LandingRoot } from "./components/landing-root";

export const Landing = Object.assign(LandingRoot, {
	Hero: LandingHero,
});
