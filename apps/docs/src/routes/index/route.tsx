import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "./-components/hero";
import { Layout } from "./-layout";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<Layout>
			<Hero />
		</Layout>
	);
}
