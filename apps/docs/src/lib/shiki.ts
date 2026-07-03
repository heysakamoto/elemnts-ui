import { createHighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
import bash from "shiki/langs/bash.mjs";
import ts from "shiki/langs/ts.mjs";
import tsx from "shiki/langs/tsx.mjs";
import darkTheme from "shiki/themes/github-dark.mjs";
import lightTheme from "shiki/themes/github-light.mjs";

const jsEngine = createJavaScriptRegexEngine();

const highlighterInstance = createHighlighterCore({
	themes: [darkTheme, lightTheme],
	langs: [ts, tsx, bash],
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
