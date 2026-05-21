import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import { NotFound } from "@/components/base/not-found";
import css from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
	{
		notFoundComponent: NotFound,
		head: () => ({
			meta: [
				{
					charSet: "utf-8",
				},
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					title: "Moto UI",
				},
			],
			links: [
				{
					rel: "stylesheet",
					href: css,
				},
			],
		}),
		shellComponent: RootDocument,
	},
);

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<head>
				<HeadContent />
				<link
					rel="preconnect"
					href="https://cdn.aviosans.lerbb.com/"
				/>
				<link
					rel="stylesheet"
					href="https://cdn.aviosans.lerbb.com/avio-sans.css"
				/>
				<link
					rel="icon"
					type="image/svg+xml"
					href="/favicon.svg"
				/>
			</head>
			<body>
				{children}
				<Scripts />
				<script
					dangerouslySetInnerHTML={{
						__html: `
					(function(){
						const STORAGE_KEY = "theme";

						const saved = localStorage.getItem(STORAGE_KEY);

						const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
						? "dark"
						: "light";

						const theme = saved === "system" || !saved
						? systemTheme
						: saved;


						document.documentElement.setAttribute("data-theme", theme);
					})();
				`,
					}}
				/>
			</body>
		</html>
	);
}
