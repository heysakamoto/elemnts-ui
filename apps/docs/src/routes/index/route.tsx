import { createFileRoute } from "@tanstack/react-router";
import { Components } from "./-components/components";
import { Hero } from "./-components/hero";
import { Layout } from "./-layout";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<Layout>
			<Hero />
			<Components />
		</Layout>
	);
}
