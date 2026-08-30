import { Box } from "@moto-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { highlightCodeServerFn } from "@/server/shiki";
import { css } from "@/styled-system/css";

const styles = css.raw({
	"& pre": {},
	"& code": {
		tabSize: 2,
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
	const highlightCode = useServerFn(highlightCodeServerFn);

	const { data: html } = useQuery({
		queryKey: ["dynamic-code", code, lang],
		queryFn: () => highlightCode({ data: { code, lang } }),
	});

	if (!html) return null;

	return (
		<Box
			css={styles}
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
}
