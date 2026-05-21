import preview from "@.storybook/preview";
import { Avatar, Button, createToaster, Toaster } from "@moto-ui/react";

const toaster = createToaster({
	placement: "top",
	overlap: true,
	gap: 8,
});

const meta = preview.meta({
	title: "Custom Icon",
	component: Toaster,
});

export const CustomIcon = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"You can customize the icons for each toast type using the indicator prop on the Toaster component or by providing an icon in the toaster.create call.",
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
						type: "custom",
						title: "Invitation link has been sent to Fredrick",
					})
				}
			>
				Collaborate
			</Button>
			<Toaster
				{...args}
				toaster={toaster}
				indicator={
					<Avatar.Root
						size="xs"
						rounded="full"
					>
						<Avatar.Image
							src="https://img.heroui.chat/image/avatar?w=400&h=400&u=8"
							alt=""
						/>
						<Avatar.Fallback>M</Avatar.Fallback>
					</Avatar.Root>
				}
			/>
		</>
	),
});
