import { Container, Portal, Surface } from "@moto-ui/react";
import { preview } from "../../../.storybook/preview";

const meta = preview.meta({
	title: "Disabled",
	component: Portal,
});

export const Disabled = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"You can disable the portal by passing `disabled={true}`. When disabled, the children will be rendered at the location where the `Portal` component is defined.",
			},
		},
	},
	render: () => (
		<Container maxW="20rem">
			<Portal disabled>
				<Surface
					p="8"
					delta={1}
				>
					<Surface.Title
						fontSize="14"
						lineHeight="sm"
						justify="center"
					>
						Rendered in place.
					</Surface.Title>
				</Surface>
			</Portal>
		</Container>
	),
});
