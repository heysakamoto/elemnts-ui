import {
	Alert,
	Box,
	Button,
	Collapsible,
	Icon,
	Stack,
	Surface,
} from "@moto-ui/react";
import { css } from "@moto-ui/styled-system/css";
import { useQuery } from "@tanstack/react-query";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { getDemo } from "@/demos";
import { codeToHtml } from "@/lib/shiki";
import { CopyButton } from "./copy-button";

type Input = { name: string };
type Output = { code: string; raw: string; file: string };

// Tell Vite to bundle the raw text of all your demo files during the build step.
const rawDemoFiles = import.meta.glob("/src/demos/**/*.tsx", {
	query: "?raw",
	import: "default",
});

const serverLoader = createServerFn({ method: "GET" })
	.inputValidator((data: Input) => data)
	.handler(async ({ data }) => {
		const { name } = data;
		const demo = getDemo(name);

		if (!demo?.file) {
			return null;
		}

		try {
			const fileKey = Object.keys(rawDemoFiles).find((key) =>
				key.endsWith(demo.file),
			);

			if (!fileKey) {
				console.error(
					`Demo file ${demo.file} not found in import.meta.glob map.`,
				);
				return null;
			}

			// Execute the function Vite generated to get the string
			const code = (await rawDemoFiles[fileKey]?.()) as string;

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

function ComponentPreviewSource(props: ComponentPreviewSourceProps) {
	const { name, children } = props;

	const severFn = useServerFn(serverLoader);

	const { data, isLoading } = useQuery({
		queryKey: ["cp", name],
		gcTime: 1000 * 60 * 60,
		staleTime: 1000 * 60 * 60,
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
}

const styles = css.raw({
	"& code": {
		fontSize: "12",
		lineHeight: "2",
		display: "block",
		fontFamily: "mono",
		"& span > span": {
			color: "var(--shiki-light)",
			_dark: {
				color: "var(--shiki-dark)",
			},
		},
	},
});

type ComponentPreviewProps = {
	name: string;
	hideCode?: boolean;
	description?: string;
};
export function ComponentPreview(props: ComponentPreviewProps) {
	const { name } = props;
	const demo = getDemo(name);
	const [open, setOpen] = useState(false);

	return (
		<Surface
			p="2"
			my="32"
			delta={1}
			rounded="24"
		>
			<Surface.Content
				p="24"
				minH="20rem"
				align="center"
				justify="center"
			>
				{demo ? <demo.component /> : <Empty />}
			</Surface.Content>
			<Surface.Footer position="relative">
				<ComponentPreviewSource name={name}>
					{({ code, raw }) => {
						return (
							<Collapsible
								open={open}
								scrollbar="hidden"
								collapsedHeight="80px"
								onOpenChange={(e) => setOpen(e.open)}
							>
								<Surface
									p="2"
									gap="2"
									w="fit"
									delta={1}
									zIndex="1"
									left="50%"
									bottom="6"
									align="center"
									rounded="full"
									direction="row"
									position="absolute"
									transform="translateX(-50%)"
								>
									<Collapsible.Trigger
										unstyled
										asChild
									>
										<Button
											size="sm"
											fontSize="13"
											rounded="full"
											variant="surface"
										>
											{open ? "Hide" : "Expand"} code
										</Button>
									</Collapsible.Trigger>
									<CopyButton
										position="static"
										value={raw}
									/>
								</Surface>
								<Collapsible.Content
									px="12"
									_open={{ animation: "none" }}
									_closed={{ animation: "none" }}
								>
									<Stack
										py="12"
										maxH="16rem"
										scrollbar="hidden"
										direction="column"
										position="relative"
										overflow={open ? "auto" : "hidden"}
									>
										<Box
											css={styles}
											dangerouslySetInnerHTML={{ __html: code }}
										/>
									</Stack>
								</Collapsible.Content>
							</Collapsible>
						);
					}}
				</ComponentPreviewSource>
			</Surface.Footer>
		</Surface>
	);
}

function Empty() {
	return (
		<Surface
			px="12"
			py="10"
			w="fit"
			delta={0}
			rounded="24"
		>
			<Alert colorPalette="warning">
				<Alert.Media>
					<Icon
						icon="tabler:alert-triangle"
						width={16}
						height={16}
					/>
				</Alert.Media>
				<Alert.Title
					fontSize="14"
					color="colorPalette.primary"
				>
					Component not found.
				</Alert.Title>
			</Alert>
		</Surface>
	);
}
