import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import { NotFound } from "@/components/base/not-found";
import css from "../styles.css?url";

const baseUrl = import.meta.env.VITE_URL || "https://motoui.com";

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
				{
					name: "description",
					content:
						"Moto UI is a high-performance, accessible React component library engineered for speed and scalability.",
				},
				//--- Open Graph Tags
				{
					property: "og:title",
					content: "Moto UI | High-Performance, Accessible React Components",
				},
				{
					property: "og:description",
					content:
						"Moto UI is a high-performance, accessible React component library engineered for speed and scalability, built on Ark UI and Panda CSS.",
				},
				{
					property: "og:type",
					content: "website",
				},
				{
					property: "og:image",
					content: `${baseUrl}/og-image.png`,
				},
				// --- Twitter Card Tags
				{
					name: "twitter:card",
					content: "summary_large_image",
				},
				{
					name: "twitter:image",
					content: `${baseUrl}/og-image.png`,
				},
			],
			links: [
				{
					rel: "stylesheet",
					href: css,
				},
				{
					rel: "preconnect",
					href: "https://cdn.aviosans.lerbb.com/",
				},
				{
					rel: "stylesheet",
					href: "https://cdn.aviosans.lerbb.com/avio-sans.css",
				},
				{
					rel: "icon",
					type: "image/png",
					href: "/favicon/light.png",
					media: "(prefers-color-scheme: light)",
				},
				{
					rel: "icon",
					type: "image/png",
					href: "/favicon/dark.png",
					media: "(prefers-color-scheme: dark)",
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
