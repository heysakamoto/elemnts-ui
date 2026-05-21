import preview from "@.storybook/preview";
import { Button, createToaster, Toaster } from "@moto-ui/react";

const toaster = createToaster({
	placement: "top",
	overlap: true,
	gap: 8,
});

const meta = preview.meta({
	title: "Basic",
	component: Toaster,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Toast component is used to display temporary notifications.",
			},
		},
	},
	render: (args) => (
		<>
			<Button
				rounded="full"
				variant="surface"
				onClick={() =>
					toaster.create({
						title: "You've added credits to your account.",
					})
				}
			>
				Purchase
			</Button>
			<Toaster
				{...args}
				toaster={toaster}
			/>
		</>
	),
});
