import {
	Button,
	ButtonGroup,
	For,
	Icon,
	Item,
	Menu,
	Portal,
	Surface,
	VisuallyHidden,
} from "@moto-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "@tanstack/react-router";
import type { PropsWithChildren } from "react";
import { CopyButton } from "@/components/mdx/copy-button";
import { slugsToMarkdownPath } from "@/utils/markdown";
import { replaceSlug } from "@/utils/url";
import { AIOptions } from "./constant";

function CopyTrigger() {
	const splat = useParams({
		from: "/docs/$",
		select: (p) => p._splat || "index",
	});
	const mdPath = slugsToMarkdownPath(splat.split("/")).url;

	const { data } = useQuery({
		queryKey: [`copy-md`, splat],
		queryFn: async () => {
			const response = await fetch(`${mdPath}`, {
				method: "GET",
			});
			return await response.text();
		},
	});

	return (
		<CopyButton
			rounded="0"
			iconOnly={false}
			roundedStart="12"
			value={data ?? ""}
			variant="secondary"
			css={{
				"& svg": {
					ml: "-2",
					mt: "-1",
				},
			}}
		>
			Copy
		</CopyButton>
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
							w="12rem"
						>
							<Surface.Content gap="2">
								<For each={AIOptions}>
									{(option) => (
										<Menu.Item
											key={option.label}
											value={option.value}
											asChild
										>
											<Item
												asChild
												size="xs"
												rounded="20"
												fontSize="14"
												variant="secondary"
												colorPalette="neutral"
												css={{
													"&:not(:hover)": {
														"& svg": {
															color: "icon.secondary",
														},
													},
												}}
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
															ml="-2"
															width={16}
															height={16}
															icon={option.icon}
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

function ButtonsRoot(props: PropsWithChildren) {
	const { children } = props;

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
	CopyTrigger,
	MenuOptions,
});
