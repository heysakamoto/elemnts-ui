import preview from "@.storybook/preview";
import { Button, createToaster, Icon, Toaster } from "@moto-ui/react";

const toaster = createToaster({
	placement: "top",
	overlap: true,
	gap: 8,
});

const meta = preview.meta({
	title: "Dismissable",
	component: Toaster,
});

export const Dismissable = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Toasts can include action buttons using the action property in toaster.create.",
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
						title: "Order placed. Parcel is on it's way.",
						action: {
							label: "Dismiss",
							onClick: () => {
								toaster.dismiss();
							},
						},
					})
				}
			>
				<Icon
					ml="-2"
					icon="tabler:paper-bag"
					width={18}
					height={18}
				/>{" "}
				Order
			</Button>
			<Toaster
				{...args}
				toaster={toaster}
			/>
		</>
	),
});
