import { Checkmark, Icon } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	component: Checkmark,
	title: "Indeterminate State",
});

export const Indeterminate = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `indeterminate` prop and provide a `fallback` element to show a different indicator (e.g., a minus sign) when the state is neither checked nor unchecked.",
			},
		},
	},
	render: () => (
		<Checkmark
			indeterminate
			fallback={
				<Icon
					icon="tabler:minus"
					width={12}
					height={12}
				/>
			}
		>
			<Icon
				icon="tabler:check"
				width={12}
				height={12}
			/>
		</Checkmark>
	),
});
