import { Checkmark, For, Icon, Stack } from "@elemnts-ui/react";

const sizes = ["xl", "lg", "md", "sm", "xs"] as const;

export default function Sizes() {
	return (
		<Stack direction="row" gap="8" alignItems="center">
			<For each={sizes}>
				{(size) => (
					<Checkmark size={size} key={size} checked>
						<Icon icon="tabler:check" width={12} height={12} />
					</Checkmark>
				)}
			</For>
		</Stack>
	);
}
