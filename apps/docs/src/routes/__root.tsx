import { ColorScheme } from "@moto-ui/react";
import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";

import { NotFound } from "@/components/base/not-found";
import css from "../styles.css?url";

const baseUrl = import.meta.env.VITE_URL || "https://moto-ui.com";

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
						"Moto UI is a high-performance, accessible component library engineered for speed and scalability.",
				},
				//--- Open Graph Tags
				{
					property: "og:title",
					content: "Moto UI | High-Performance, Accessible Components",
				},
				{
					property: "og:description",
					content:
						"Moto UI is a high-performance, accessible component library engineered for speed and scalability, built on Ark UI and Panda CSS.",
				},
				{
					property: "og:type",
					content: "website",
				},
				{
					property: "og:image",
					content: `${baseUrl}/posters/og-image.png`,
				},
				// --- Twitter Card Tags
				{
					name: "twitter:card",
					content: "summary_large_image",
				},
				{
					name: "twitter:image",
					content: `${baseUrl}/posters/og-image.png`,
				},
			],
			links: [
				{
					href: css,
					rel: "stylesheet",
				},
				{
					rel: "icon",
					type: "image/svg+xml",
					href: "/logo/favicon-light.svg",
					media: "(prefers-color-scheme: light)",
				},
				{
					rel: "icon",
					type: "image/svg+xml",
					href: "/logo/favicon-dark.svg",
					media: "(prefers-color-scheme: dark)",
				},
				// --- Font preloads
				{
					as: "font",
					rel: "preload",
					type: "font/woff2",
					crossOrigin: "anonymous",
					href: "/fonts/instrumentserif-regular.woff2",
				},
				{
					as: "font",
					rel: "preload",
					type: "font/woff2",
					crossOrigin: "anonymous",
					href: "/fonts/inter-regular.woff2",
				},
				{
					as: "font",
					rel: "preload",
					type: "font/woff2",
					crossOrigin: "anonymous",
					href: "/fonts/inter-medium.woff2",
				},
				{
					as: "font",
					rel: "preload",
					type: "font/woff2",
					crossOrigin: "anonymous",
					href: "/fonts/jetbrainsmono-regular.woff2",
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
				<ColorScheme>{children}</ColorScheme>
				<Scripts />
			</body>
		</html>
	);
}
