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

export const FRAMEWORKS = [
	{
		id: "react",
		label: "React",
		disabled: false,
		icon: "logos:react",
		url: "https://reactjs.org/",
		description: "Use with react apps",
	},
	{
		id: "vue",
		label: "Vue",
		disabled: true,
		icon: "devicon:vuejs",
		url: "https://www.solidjs.com/",
		description: "Use with vue apps",
	},
	{
		id: "solid",
		label: "Solid",
		disabled: true,
		icon: "devicon:solidjs",
		url: "https://www.solidjs.com/",
		description: "Use with solid apps",
	},
	{
		id: "svelte",
		label: "Svelte",
		disabled: true,
		icon: "logos:svelte-icon",
		url: "https://svelte.dev/",
		description: "Use with svelte apps",
	},
];

export const urls = [
	{
		id: "doc",
		label: "Docs",
		target: "_self",
		url: "https://pro.moto-ui.app",
	},
	{
		id: "storybook",
		label: "Storybook",
		target: "_blank",
		url: "https://storybook.moto-ui.app",
	},
	{
		id: "pro",
		label: "Pro",
		target: "_blank",
		url: "https://pro.moto-ui.app",
	},
];

const prompt = `Read the documentation; I'll ask questions about it.`;

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
