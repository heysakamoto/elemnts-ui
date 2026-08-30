import { Checkmark, For, Icon, Stack } from "@moto-ui/react";

const variants = ["primary", "secondary", "tertiary", "ghost"] as const;

export default function Variants() {
	return (
		<Stack
			direction="row"
			gap="8"
			alignItems="center"
		>
			<For each={variants}>
				{(variant) => (
					<Checkmark
						variant={variant}
						key={variant}
						checked
					>
						<Icon
							icon="tabler:check"
							width={12}
							height={12}
						/>
					</Checkmark>
				)}
			</For>
		</Stack>
	);
}
