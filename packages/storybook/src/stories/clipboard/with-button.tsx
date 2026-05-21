import preview from "@.storybook/preview";
import { Button, Clipboard, Icon } from "@moto-ui/react";

const meta = preview.meta({
	title: "With Button",
	component: Clipboard,
});

export const WithButton = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Use Clipboard.Trigger as a button to copy text.",
			},
		},
	},
	render: (args) => (
		<Clipboard {...args}>
			<Clipboard.Trigger asChild>
				<Button
					size="sm"
					variant="surface"
					rounded="calc(24px)"
				>
					<Clipboard.Indicator
						ml="-2"
						copied={
							<Icon
								icon="tabler:check"
								width={16}
								height={16}
							/>
						}
					>
						<Icon
							icon="tabler:copy"
							width={16}
							height={16}
						/>
					</Clipboard.Indicator>
					{" Copy"}
				</Button>
			</Clipboard.Trigger>
		</Clipboard>
	),
});
