import { type QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import type { PropsWithChildren } from "react";

import { getQueryClient } from "./lib/query-client";
import { routeTree } from "./routeTree.gen";

type ComponentProps = PropsWithChildren<{
	queryClient: QueryClient;
}>;

function Component({ children, queryClient }: ComponentProps) {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}

export function getRouter() {
	const queryClient = getQueryClient();

	const router = createTanStackRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		trailingSlash: "never",
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,
		Wrap: ({ children }) => (
			<Component queryClient={queryClient}>{children}</Component>
		),
	});

	return router;
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}
