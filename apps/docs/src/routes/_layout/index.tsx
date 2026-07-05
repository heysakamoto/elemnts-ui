import { createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react";

import { LandingFeature } from "@/features/landing/components";

export const Route = createFileRoute("/_layout/")({
	component: App,
	head: () => ({
		meta: [{ title: "Moto UI | High-Performance, Accessible Components" }],
	}),
});

function App() {
	return (
		<Fragment>
			<LandingFeature.Hero />
			<LandingFeature.Install />
		</Fragment>
	);
}
