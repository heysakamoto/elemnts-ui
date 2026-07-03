import { createFileRoute, Outlet } from "@tanstack/react-router";

import { RootLayout } from "@/layouts/root";

export const Route = createFileRoute("/_layout")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<RootLayout>
			<RootLayout.Header />
			<RootLayout.Page>
				<Outlet />
			</RootLayout.Page>
			<RootLayout.Footer />
		</RootLayout>
	);
}
