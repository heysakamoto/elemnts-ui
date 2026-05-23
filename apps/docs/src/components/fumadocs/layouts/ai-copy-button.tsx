import {
	Button,
	ButtonGroup,
	type ButtonProps,
	Icon,
	Text,
	useClipboard,
} from "@moto-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";

type AICopyButtonProps = ButtonProps;

export function AICopyButton(props: AICopyButtonProps) {
	const splat = useParams({ from: "/docs/$", select: (p) => p._splat ?? "" });

	const { data } = useQuery({
		queryKey: [`copy-markdown`, splat],
		queryFn: async () => {
			const md = await fetch(`/docs/${splat}.md`, {
				method: "GET",
			}).then((r) => r.text());

			return md;
		},
	});

	const api = useClipboard({ value: data || "" });

	const icons = {
		true: "tabler:check",
		false: "tabler:copy",
	};

	return (
		<Button
			roundedStart="16"
			disabled={!data || api.copied}
			_notHover={{ "& svg": { color: "icon.secondary" } }}
			{...api.getTriggerProps()}
			{...props}
		>
			<Icon
				ml="-2"
				icon={icons[String(api.copied) as keyof typeof icons]}
				width={14}
				height={14}
			/>
			<Text as="span">Copy</Text>
			<ButtonGroup.Separator />
		</Button>
	);
}
