export const socials = [
	{
		id: "github",
		label: "GitHub",
		icon: "bi:github",
		url: "https://github.com/heysakamoto/moto-ui",
	},
	{
		id: "twitter",
		label: "Twitter",
		icon: "bi:twitter-x",
		url: "https://x.com/hey__sakamoto",
	},
];

export const urls = [
	{
		id: "storybook",
		label: "Storybook",
		disabled: false,
		url: "https://storybook.moto-ui.app",
	},
	{
		id: "pro",
		label: "Pro",
		disabled: true,
		url: "https://pro.moto-ui.app",
	},
	{
		id: "blocks",
		label: "Blocks",
		disabled: true,
		url: "https://blocks.moto-ui.app",
	},
];

const prompt = `“Read the documentation slug; I'll ask questions about it.”`;

export const AIOptions = [
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
		url: `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`,
	},
	{
		icon: "ri:claude-fill",
		label: "Open in Claude",
		value: "claude",
		url: `https://claude.ai/new?q=${encodeURIComponent(prompt)}`,
	},
	{
		icon: "ri:perplexity-fill",
		label: "Open in Perplexity",
		value: "perplexity",
		url: `https://perplexity.ai/search?q=${encodeURIComponent(prompt)}`,
	},
	{
		icon: "academicons:scirate",
		label: "Open in Scira",
		value: "scira",
		url: `https://scira.ai/?q=${encodeURIComponent(prompt)}`,
	},
];
