import preview from "@.storybook/preview";
import { Button, createToaster, Stack, Toaster } from "@moto-ui/react";

const toaster = createToaster({
	placement: "top",
	overlap: true,
	gap: 8,
});

const meta = preview.meta({
	title: "Type",
	component: Toaster,
});

export const Type = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Toast supports different semantic types: info, success, warning, error, and loading. Each type comes with a default icon and color palette.",
			},
		},
	},
	render: (args) => (
		<Stack
			direction="row"
			gap="4"
		>
			<Button
				rounded="full"
				variant="surface"
				colorPalette="accent"
				onClick={() =>
					toaster.create({
						type: "info",
						title: "Toast status is info.",
					})
				}
			>
				Info
			</Button>
			<Button
				variant="surface"
				rounded="full"
				colorPalette="success"
				onClick={() =>
					toaster.create({
						type: "success",
						title: "Toast status is success.",
					})
				}
			>
				Success
			</Button>
			<Button
				variant="surface"
				rounded="full"
				colorPalette="warning"
				onClick={() =>
					toaster.create({
						type: "warning",
						title: "Toast status is warning.",
					})
				}
			>
				Warning
			</Button>
			<Button
				variant="surface"
				rounded="full"
				colorPalette="destructive"
				onClick={() =>
					toaster.create({
						type: "error",
						title: "Toast status is error.",
					})
				}
			>
				Error
			</Button>
			<Toaster
				{...args}
				toaster={toaster}
			/>
		</Stack>
	),
});
