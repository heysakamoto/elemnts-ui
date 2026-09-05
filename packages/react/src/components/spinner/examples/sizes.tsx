import { For, Spinner, Stack } from "@elemnts-ui/react";

export default function Variants() {
	return (
		<Stack direction="row" gap="4" alignItems="center">
			<For each={["xs", "sm", "md", "lg", "xl"]}>
				{(size) => <Spinner size={size} key={size} />}
			</For>
		</Stack>
	);
}
