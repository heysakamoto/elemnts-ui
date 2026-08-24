import { createServerFn } from "@tanstack/react-start";

import { highlightCode } from "@/lib/shiki";

type HighlightCodeInput = { code: string; lang: string };

export const highlightCodeServerFn = createServerFn({ method: "POST" })
	.validator((data: HighlightCodeInput) => data)
	.handler(async ({ data }) => {
		return highlightCode(data.code, { lang: data.lang });
	});
