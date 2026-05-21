import { Checkmark, Icon, Stack } from "@moto-ui/react";

export function Variants() {
	return (
		<Stack
			direction="row"
			gap="8"
			alignItems="center"
		>
			<Checkmark
				size="lg"
				variant="primary"
			>
				<Icon
					icon="tabler:check"
					width={12}
					height={12}
				/>
			</Checkmark>
			<Checkmark
				size="lg"
				variant="secondary"
			>
				<Icon
					icon="tabler:check"
					width={12}
					height={12}
				/>
			</Checkmark>
		</Stack>
	);
}
