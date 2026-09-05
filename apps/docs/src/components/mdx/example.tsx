import {
	Alert,
	ButtonGroup,
	Icon,
	Separator,
	Show,
	Surface,
	useCollapsible,
} from "@elemnts-ui/react";
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
		<Surface mt="32" delta={1} rounded="16" shadowLevel={0}>
			<Surface.Content
				p="24"
				minH="20rem"
				align="center"
				justify="center"
				overflow="scroll"
				scrollbar="hidden"
			>
				<Show when={example.data}>{(Example) => <Example />}</Show>
				<Show when={!example.data && !example.isLoading}>
					<Alert py="8" px="12" w="fit" delta={0} status="warning">
						<Alert.Indicator>
							<Icon width={16} height={16} icon="tabler:alert-triangle" />
						</Alert.Indicator>
						<Alert.Content>
							<Alert.Title fontSize="14">Component not found.</Alert.Title>
						</Alert.Content>
					</Alert>
				</Show>
			</Surface.Content>
			<Show when={!hideCode}>
				<Separator orientation="horizontal" variant="tertiary" />
				<Surface.Footer position="relative">
					<ButtonGroup
						p="2"
						gap="2"
						size="xs"
						zIndex="1"
						shadow="2"
						left="50%"
						bottom="12"
						rounded="16"
						align="center"
						direction="row"
						position="absolute"
						bgColor="surface.1"
						transform="translateX(-50%)"
						border="1px solid {colors.stroke.secondary}"
					>
						<ButtonGroup.Item
							rounded="14"
							fontSize="14"
							variant="secondary"
							{...collapsible.getTriggerProps()}
						>
							{collapsible.open ? "Hide" : "Expand"} code
						</ButtonGroup.Item>
						<CopyButton
							size="xs"
							rounded="14"
							position="static"
							value={source.data ?? ""}
						/>
					</ButtonGroup>
					<Surface.Addon
						px="12"
						py="12"
						maxH="16rem"
						overflow="auto"
						scrollbar="hidden"
						bgColor="surface.7"
						{...collapsible.getContentProps()}
					>
						<DynamicCode code={source.data ?? ""} lang="tsx" />
					</Surface.Addon>
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
