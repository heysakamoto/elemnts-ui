import { Button, createToaster, For, Stack, Toaster } from "@elemnts-ui/react";

const toaster = createToaster({
	placement: "top",
	overlap: true,
	gap: 8,
});

const types = [
	{
		type: "info",
		title: "Toast status is info.",
	},
	{
		type: "success",
		title: "Toast status is success.",
	},
	{
		type: "warning",
		title: "Toast status is warning.",
	},
	{
		type: "error",
		title: "Toast status is error.",
	},
];

export default function Type() {
	return (
		<Stack direction="row" gap="8">
			<Toaster toaster={toaster} />
			<For each={types}>
				{(type) => (
					<Button
						key={type.type}
						variant="surface"
						textTransform="capitalize"
						onClick={() =>
							toaster.create({
								type: "info",
								title: type.title,
							})
						}
					>
						{type.type}
					</Button>
				)}
			</For>
		</Stack>
	);
}
