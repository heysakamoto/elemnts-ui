import {
	Button,
	ButtonGroup,
	For,
	Icon,
	Item,
	Menu,
	Portal,
	Surface,
	useClipboard,
	VisuallyHidden,
} from "@moto-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "@tanstack/react-router";
import type { PropsWithChildren } from "react";

import { AIOptions } from "./constant";
import { slugsToMarkdownPath } from "@/utils/markdown";
import { replaceSlug } from "@/utils/url";

function CopyButton() {
	const splat = useParams({
		from: "/docs/$",
		select: (p) => p._splat || "index",
	});
	const markdownPath = slugsToMarkdownPath(splat.split("/")).url;

	const { data } = useQuery({
		queryKey: [`copy-markdown`, splat],
		queryFn: async () => {
			const response = await fetch(`${markdownPath}`, {
				method: "GET",
			});

			const md = await response.text();

			return md;
		},
	});

	const api = useClipboard({ value: data || "" });

	const icons = {
		true: "tabler:check",
		false: "tabler:copy",
	};

	return (
		<Button
			roundedStart="12"
			disabled={!data || api.copied}
			_notHover={{ "& svg": { color: "icon.secondary" } }}
			{...api.getTriggerProps()}
		>
			<Icon
				ml="-2"
				width={14}
				height={14}
				icon={icons[String(api.copied) as keyof typeof icons]}
			/>
			Copy
		</Button>
	);
}

function MenuOptions() {
	const splat = useParams({ from: "/docs/$", select: (p) => p._splat ?? "" });
	const markdownPath = slugsToMarkdownPath(splat ? splat.split("/") : []).url;

	return (
		<Menu
			positioning={{
				strategy: "fixed",
				placement: "bottom-end",
				offset: { mainAxis: 0, crossAxis: 40 },
			}}
		>
			<Menu.Trigger asChild>
				<Button
					iconOnly
					roundedEnd="12"
					aria-label="Open AI menu"
					css={{
						"&:not(:hover)": {
							color: "icon.secondary",
						},
					}}
				>
					<VisuallyHidden>Open AI menu</VisuallyHidden>
					<Icon
						width={16}
						height={16}
						icon="tabler:chevron-down"
					/>
				</Button>
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content asChild>
						<Surface
							mt="8"
							p="4"
							delta={1}
							rounded="24"
						>
							<Surface.Content>
								<For each={AIOptions}>
									{(option) => (
										<Menu.Item
											key={option.label}
											value={option.value}
											asChild
										>
											<Item
												asChild
												rounded="20"
												variant="secondary"
												colorPalette="neutral"
												_notHover={{ "& svg": { color: "icon.secondary" } }}
											>
												<Link
													target="_blank"
													rel="noopener noreferrer"
													to={replaceSlug(option.url, {
														find: "slug",
														slug: markdownPath,
													})}
												>
													<Menu.ItemIndicator>
														<Icon
															icon={option.icon}
															width={18}
															height={18}
														/>
													</Menu.ItemIndicator>
													<Menu.ItemText>{option.label}</Menu.ItemText>
												</Link>
											</Item>
										</Menu.Item>
									)}
								</For>
							</Surface.Content>
						</Surface>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu>
	);
}

function ButtonsRoot({ children }: PropsWithChildren) {
	return (
		<ButtonGroup
			size="sm"
			attached
			variant="secondary"
			colorPalette="neutral"
		>
			{children}
		</ButtonGroup>
	);
}

export const DocsLayoutAiButtons = Object.assign(ButtonsRoot, {
	CopyButton,
	MenuOptions,
});
