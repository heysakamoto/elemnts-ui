import {
	Button,
	Icon,
	Item,
	Menu,
	Portal,
	Surface,
	useLockedDisclosure,
} from "@moto-ui/react";
import { Link, useLocation } from "@tanstack/react-router";
import { replaceSlug } from "@/utils/url";

const prompt = `Read this component documentation: slug. Review its structure, props, examples, styles, and answer the following question.

- Question 1
- Question 2
- Question 3`;

const encodedPrompt = encodeURIComponent(prompt);

const options = [
	{
		icon: "ph:markdown-logo",
		label: "View as markdown",
		value: "markdown",
		url: "slug.mdx",
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

export function AIMenu() {
	const { open, setOpen } = useLockedDisclosure();
	const pathname = useLocation({ select: (l) => l.pathname });

	const VITE_URL = import.meta.env.VITE_URL;
	const url = `${VITE_URL}${pathname}`;

	return (
		<Menu
			open={open}
			onOpenChange={(d) => setOpen(d.open)}
			positioning={{
				placement: "bottom-end",
				offset: { mainAxis: 0, crossAxis: 40 },
			}}
		>
			<Menu.Trigger asChild>
				<Button
					iconOnly
					roundedEnd="16"
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
													slug: `${url}`,
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
