import { createFileRoute } from "@tanstack/react-router";

import { Landing } from "@/features/landing";

export const Route = createFileRoute("/_root/")({
	component: App,
	head: () => ({
		meta: [{ title: "Moto UI | High-Performance, Accessible Components" }],
	}),
});

function App() {
	return (
		<Landing>
			<Landing.Hero />
			<Landing.Install />
		</Landing>
	);
}
