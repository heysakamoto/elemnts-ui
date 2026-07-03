import { Button, Clipboard, Icon } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: Clipboard,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the Clipboard to let users copy text (e.g., a code snippet or token) to their clipboard.",
			},
		},
	},
	render: (args) => (
		<Clipboard {...args}>
			<Clipboard.Trigger asChild>
				<Button
					iconOnly
					size="sm"
					variant="surface"
					rounded="calc(24px - 8px)"
				>
					<Clipboard.Indicator
						copied={
							<Icon
								icon="tabler:check"
								width={18}
								height={18}
							/>
						}
					>
						<Icon
							icon="tabler:copy"
							width={18}
							height={18}
						/>
					</Clipboard.Indicator>
				</Button>
			</Clipboard.Trigger>
		</Clipboard>
	),
});
