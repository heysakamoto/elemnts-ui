import {
	Button,
	ButtonGroup,
	Icon,
	Item,
	Menu,
	Portal,
	Surface,
	VisuallyHidden,
} from "@elemnts-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "@tanstack/react-router";
import { CopyButton } from "@/components/mdx/copy-button";
import { slugsToMarkdownPath } from "@/utils/markdown";

function CopyMarkdownButton() {
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
			iconOnly={false}
			roundedEnd="0"
			value={data ?? ""}
			variant="secondary"
			css={{
				"& svg": {
					ml: "-1",
					mb: "-1",
				},
			}}
		>
			Copy
		</CopyButton>
	);
}

function MenuOptions() {
	const pathname = useLocation({ select: (l) => l.pathname });

	const handleMdPath = (path: string) => {
		let actualPath: string;
		if (path === "/docs") {
			actualPath = `/docs/index.md`;
		} else {
			actualPath = `${path}.md`;
		}
		window.open(actualPath, "_blank", "noreferrer,noopener");
	};

	const handleAiPath = (path: string) => {
		const url = window.location.href;
		const prompt = `Read the documentation at ${url}; I'll ask questions about it.`;
		const actualPath = `${path}${encodeURIComponent(prompt)}`;
		window.open(actualPath, "_blank", "noreferrer,noopener");
	};

	return (
		<Menu positioning={{ placement: "bottom-end" }}>
			<Menu.Trigger asChild>
				<Button
					iconOnly
					roundedStart="0"
					css={{
						"&:not(:hover)": {
							color: "icon.secondary",
						},
					}}
				>
					<VisuallyHidden>Open</VisuallyHidden>
					<Icon width={16} height={16} icon="tabler:chevron-down" />
				</Button>
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content asChild>
						<Surface
							p="4"
							delta={1}
							w="12rem"
							rounded="12"
							colorPalette="neutral"
						>
							<Surface.Content gap="2">
								<MenuItem
									value="view-mdx"
									label="View markdown"
									icon="ph:markdown-logo"
									onClick={() => handleMdPath(pathname)}
								/>
								<MenuItem
									value="ask-chatgpt"
									label="Ask ChatGPT"
									icon="ri:openai-fill"
									onClick={() => handleAiPath("https://chatgpt.com/?q=")}
								/>
								<MenuItem
									value="ask-claude"
									label="Ask Claude"
									icon="ri:claude-fill"
									onClick={() => handleAiPath("https://claude.ai/new?q=")}
								/>
								<MenuItem
									value="ask-perplexity"
									label="Ask Perplexity"
									icon="ri:perplexity-fill"
									onClick={() =>
										handleAiPath("https://perplexity.ai/search?q=")
									}
								/>
							</Surface.Content>
						</Surface>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu>
	);
}

type MenuItemProps = {
	icon: string;
	label: string;
	value: string;
	onClick: () => void;
};
function MenuItem(props: MenuItemProps) {
	const { icon, label, value, onClick } = props;
	return (
		<Menu.Item asChild value={value} onClick={onClick}>
			<Item
				size="sm"
				variant="secondary"
				css={{
					"&:not(:hover)": {
						"& svg": {
							color: "icon.secondary",
						},
					},
				}}
			>
				<Menu.ItemIndicator>
					<Icon ml="-2" width={18} height={18} icon={icon} />
				</Menu.ItemIndicator>
				<Menu.ItemText>{label}</Menu.ItemText>
			</Item>
		</Menu.Item>
	);
}

export function DocsLayoutAiButtons() {
	return (
		<ButtonGroup attached size="sm" variant="secondary">
			<CopyMarkdownButton />
			<MenuOptions />
		</ButtonGroup>
	);
}
