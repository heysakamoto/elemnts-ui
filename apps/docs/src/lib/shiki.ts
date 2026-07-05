import { createHighlighterCore } from "shiki/core";
import { createOnigurumaEngine } from "shiki/engine/oniguruma";

const highlighterInstance = createHighlighterCore({
	themes: [
		await import("shiki/themes/github-dark.mjs"),
		await import("shiki/themes/github-light.mjs"),
	],
	langs: [
		await import("shiki/langs/ts.mjs"),
		await import("shiki/langs/tsx.mjs"),
		await import("shiki/langs/bash.mjs"),
	],
	engine: createOnigurumaEngine(import("shiki/wasm")),
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
