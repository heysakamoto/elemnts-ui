import { QueryClient } from "@tanstack/react-query";

function makeQueryClient(): QueryClient {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 60 * 1000,
			},
		},
	});
}

let browserQueryClient: QueryClient | undefined;

export function getQueryClient(): QueryClient {
	if (typeof window === "undefined") {
		// Server: always create a new client to avoid cross-request data leaks
		return makeQueryClient();
	}
	// Browser: reuse the same client across re-renders
	if (!browserQueryClient) browserQueryClient = makeQueryClient();
	return browserQueryClient;
}
