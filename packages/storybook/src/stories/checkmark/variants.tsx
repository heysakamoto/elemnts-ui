import { Checkmark, Icon, Stack } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Variants",
	component: Checkmark,
});

export const Variants = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Checkmark supports multiple sizes, palettes, and border radiuses.",
			},
		},
	},
	render: () => (
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
	),
});
