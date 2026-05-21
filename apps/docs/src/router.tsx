import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import type { PropsWithChildren } from "react";
import { routeTree } from "./routeTree.gen";

const queryClient = new QueryClient();

type ComponentProps = PropsWithChildren;
function Component(props: ComponentProps) {
	const { children } = props;
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}

export function getRouter() {
	const router = createTanStackRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		trailingSlash: "never",
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,
		Wrap: Component,
	});

	return router;
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}
