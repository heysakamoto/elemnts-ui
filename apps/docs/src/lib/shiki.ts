import { createHighlighterCore, type HighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

let highlighterPromise: Promise<HighlighterCore> | null = null;

function getHighlighter() {
	if (!highlighterPromise) {
		highlighterPromise = createHighlighterCore({
			themes: [
				import("shiki/themes/github-dark.mjs"),
				import("shiki/themes/github-light.mjs"),
			],
			langs: [
				import("shiki/langs/ts.mjs"),
				import("shiki/langs/tsx.mjs"),
				import("shiki/langs/bash.mjs"),
			],
			engine: createJavaScriptRegexEngine(),
		});
	}
	return highlighterPromise;
}

export async function highlightCode(
	code: string,
	options: { lang: string },
): Promise<string> {
	const highlightCode = await getHighlighter();

	return highlightCode.codeToHtml(code, {
		lang: options.lang,
		defaultColor: false,
		themes: {
			dark: "github-dark",
			light: "github-light",
		},
	});
}
