import fs from "node:fs/promises";
import path from "node:path";
import { useQuery } from "@tanstack/react-query";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import { getDemo } from "@/demos";
import { codeToHtml } from "@/lib/shiki";

type Input = { name: string };
type Output = { code: string; raw: string; file: string };

export const serverLoader = createServerFn({ method: "GET" })
	.inputValidator((data: Input) => data)
	.handler(async ({ data }) => {
		const { name } = data;
		const demo = getDemo(name);

		if (!demo?.file) {
			return null;
		}

		try {
			const fullPath = path.join(process.cwd(), "src", "demos", demo.file);
			const code = await fs.readFile(fullPath, "utf-8");
			const highlighted = await codeToHtml(code, { lang: "tsx" });

			return {
				raw: code,
				file: demo.file,
				code: highlighted,
			};
		} catch (error) {
			console.error("Failed to read demo file:", error);
			return null;
		}
	});

type ComponentPreviewSourceProps = {
	name: string;
	children?: ((data: Output) => React.ReactNode) | React.ReactNode;
};

export const ComponentPreviewSource = (props: ComponentPreviewSourceProps) => {
	const { name, children } = props;

	const severFn = useServerFn(serverLoader);

	const { data, isLoading } = useQuery({
		gcTime: 1000 * 60 * 60,
		staleTime: 1000 * 60 * 60,
		queryKey: ["cp", name],
		placeholderData: (previousData) => previousData,
		queryFn: async () => {
			const result = await severFn({ data: { name } });
			return result;
		},
	});

	if (!data || isLoading) {
		return null;
	}

	return typeof children === "function" ? children(data) : children;
};
