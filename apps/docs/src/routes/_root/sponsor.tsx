import { createFileRoute } from "@tanstack/react-router";

import { Sponsor } from "@/features/sponsor";

export const Route = createFileRoute("/_root/sponsor")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Sponsor>
			<Sponsor.Header />
			<Sponsor.Content />
			<Sponsor.Footer />
		</Sponsor>
	);
}
