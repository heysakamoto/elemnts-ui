import {
	Button,
	ButtonGroup,
	Icon,
	Item,
	Menu,
	Portal,
	Surface,
	useClipboard,
} from "@moto-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation, useParams } from "@tanstack/react-router";
import type { PropsWithChildren } from "react";
import { replaceSlug } from "@/utils/url";

function CopyButton() {
	const splat = useParams({ from: "/docs/$", select: (p) => p._splat ?? "" });

	const { data } = useQuery({
		queryKey: [`copy-markdown`, splat],
		queryFn: async () => {
			const md = await fetch(`/docs/${splat}.md`, {
				method: "GET",
			}).then((r) => r.text());

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
				icon={icons[String(api.copied) as keyof typeof icons]}
				width={14}
				height={14}
			/>
			Copy
		</Button>
	);
}

const prompt = `“Read the documentation slug; I'll ask questions about it.”`;

const encodedPrompt = encodeURIComponent(prompt);

const options = [
	{
		icon: "ph:markdown-logo",
		label: "View as markdown",
		value: "markdown",
		url: "slug",
	},
	{
		icon: "ri:openai-fill",
		label: "Open in ChatGPT",
		value: "chatgpt",
		url: `https://chatgpt.com/?q=${encodedPrompt}`,
	},
	{
		icon: "ri:claude-fill",
		label: "Open in Claude",
		value: "claude",
		url: `https://claude.ai/new?q=${encodedPrompt}`,
	},
	{
		icon: "ri:perplexity-fill",
		label: "Open in Perplexity",
		value: "perplexity",
		url: `https://perplexity.ai/search?q=${encodedPrompt}`,
	},
	{
		icon: "academicons:scirate",
		label: "Open in Scira",
		value: "scira",
		url: `https://scira.ai/?q=${encodedPrompt}`,
	},
];

function MenuOptions() {
	const pathname = useLocation({ select: (l) => l.pathname });

	const VITE_URL = import.meta.env.VITE_URL;
	const url = `${VITE_URL}${pathname}`;

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
								{options.map((option) => (
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
													slug: `${url}.md`,
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
								))}
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
