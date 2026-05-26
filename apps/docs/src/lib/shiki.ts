import { createHighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
import tsx from "shiki/langs/tsx.mjs";

import githubDark from "shiki/themes/github-dark.mjs";
import githubLight from "shiki/themes/github-light.mjs";

const jsEngine = createJavaScriptRegexEngine();

const highlighterInstance = createHighlighterCore({
	themes: [githubDark, githubLight],
	langs: [tsx],
	engine: jsEngine,
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
