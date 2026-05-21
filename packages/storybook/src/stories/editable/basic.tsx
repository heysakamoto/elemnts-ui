import preview from "@.storybook/preview";
import { Editable, Input } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Editable,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Editable component is used for inline editing of text. It consists of a preview state that can be toggled into an edit state.",
			},
		},
	},
	render: (args) => (
		<Editable.Root
			{...args}
			placeholder="Click to edit"
			defaultValue="Hello World"
		>
			<Editable.Area>
				<Editable.Preview rounded="24" />
				<Editable.Input asChild>
					<Input
						maxW="10rem"
						size="sm"
						variant="secondary"
						rounded="24"
					/>
				</Editable.Input>
			</Editable.Area>
		</Editable.Root>
	),
});
