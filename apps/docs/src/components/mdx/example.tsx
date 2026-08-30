import {
	Alert,
	Button,
	Icon,
	Separator,
	Show,
	Surface,
	useCollapsible,
} from "@moto-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getExample } from "@/utils/examples";
import { DynamicCode } from "../base/dynamic-code";
import { CopyButton } from "./copy-button";

type ExampleProps = {
	name: string;
	hideCode?: boolean;
	description?: string;
};
export function Example(props: ExampleProps) {
	const { name, hideCode } = props;
	const collapsible = useCollapsible({
		collapsedHeight: 96,
	});
	const { example, source } = useExample(name);

	return (
		<Surface
			my="40"
			delta={1}
			rounded="16"
			shadowLevel={0}
		>
			<Surface.Content
				p="24"
				minH="20rem"
				align="center"
				justify="center"
			>
				<Show when={example.data}>{(Example) => <Example />}</Show>
				<Show when={!example.data && !example.isLoading}>
					<Alert
						py="8"
						px="12"
						w="fit"
						delta={0}
						status="warning"
					>
						<Alert.Indicator>
							<Icon
								icon="tabler:alert-triangle"
								width={16}
								height={16}
							/>
						</Alert.Indicator>
						<Alert.Content>
							<Alert.Title
								fontSize="14"
								color="colorPalette.primary"
							>
								Component not found.
							</Alert.Title>
						</Alert.Content>
					</Alert>
				</Show>
			</Surface.Content>
			<Separator
				orientation="horizontal"
				variant="tertiary"
			/>
			<Show when={!hideCode}>
				<Surface.Footer position="relative">
					<Surface
						p="2"
						gap="2"
						delta={1}
						zIndex="1"
						left="50%"
						bottom="12"
						rounded="16"
						align="center"
						direction="row"
						position="absolute"
						transform="translateX(-50%)"
					>
						<Button
							size="xs"
							fontSize="13"
							variant="secondary"
							{...collapsible.getTriggerProps()}
						>
							{collapsible.open ? "Hide" : "Expand"} code
						</Button>
						<CopyButton
							size="xs"
							position="static"
							value={source.data ?? ""}
						/>
					</Surface>
					<Surface
						px="12"
						py="12"
						delta={1}
						maxH="16rem"
						border="none"
						shadowLevel={0}
						scrollbar="hidden"
						position="relative"
						overflow={collapsible.open ? "auto" : "hidden"}
						{...collapsible.getContentProps()}
					>
						<DynamicCode
							code={source.data ?? ""}
							lang="tsx"
						/>
					</Surface>
				</Surface.Footer>
			</Show>
		</Surface>
	);
}

function useExample(name: string) {
	const { example, source } = useMemo(() => getExample(name), [name]);

	const exampleQuery = useQuery({
		retry: 1,
		staleTime: Infinity,
		queryKey: ["example", name, "component"],
		queryFn: async () => {
			const module = await example();
			return module.default ?? module;
		},
	});

	const sourceQuery = useQuery({
		retry: 1,
		staleTime: Infinity,
		queryKey: ["example", name, "source"],
		queryFn: async () => {
			if (!source) return null;
			return await source();
		},
	});

	return {
		example: exampleQuery,
		source: sourceQuery,
	};
}
