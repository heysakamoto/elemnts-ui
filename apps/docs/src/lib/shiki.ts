// lib/shiki.ts
// lib/shiki.ts - return HTML string, not JSX
import { createHighlighter } from "shiki";

const highlighterInstance = createHighlighter({
	themes: ["github-dark", "github-light"],
	langs: ["tsx", "ts", "js", "jsx"],
});

export async function codeToHtml(
	code: string,
	options: { lang: string },
): Promise<string> {
	const h = await highlighterInstance;

	return h.codeToHtml(code, {
		lang: options.lang,
		themes: {
			dark: "github-dark",
			light: "github-light",
		},
		defaultColor: false,
	});
}
