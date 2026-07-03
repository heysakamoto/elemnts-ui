import { SignaturePad, Surface } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: SignaturePad,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The SignaturePad component provides a canvas for users to draw their signatures, with support for clearing and form integration.",
			},
		},
	},
	render: (args) => (
		<SignaturePad.Root
			w="20rem"
			{...args}
		>
			<Surface
				delta={1}
				rounded="24"
			>
				<SignaturePad.Control h="12rem">
					<SignaturePad.Segment />
					<SignaturePad.Guide />
				</SignaturePad.Control>
			</Surface>
		</SignaturePad.Root>
	),
});
