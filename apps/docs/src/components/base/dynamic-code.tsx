import { Box } from "@moto-ui/react";
import { css } from "@moto-ui/styled-system/css";
import { useQuery } from "@tanstack/react-query";

import { codeToHtml } from "@/lib/shiki";

const styles = css.raw({
	"& pre": {},
	"& code": {
		w: "auto",
		fontSize: "13",
		lineHeight: "2",
		overflow: "scroll",
		fontFamily: "mono",
		whiteSpace: "pre-wrap",

		"& span": {
			"& span": {
				w: "20rem",
				color: "var(--shiki-light)",
				_dark: {
					color: "var(--shiki-dark)",
				},
			},
		},
	},
});

type DynamicCodeProps = {
	code: string;
	lang?: string;
};

export function DynamicCode(props: DynamicCodeProps) {
	const { code, lang = "bash" } = props;

	const { data: html } = useQuery({
		gcTime: 1000 * 60 * 60,
		staleTime: 1000 * 60 * 60,
		queryKey: ["dynamic-code", code, lang],
		queryFn: () => codeToHtml(code, { lang }),
	});

	if (!html) return null;

	return (
		<Box
			css={styles}
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
}

export function Maker() {
	return (
		<div>
			<p>Hello world.</p>
			<span>This is a span.</span>
		</div>
	);
}
