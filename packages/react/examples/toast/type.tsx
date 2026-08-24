import { Button, createToaster, Stack, Toaster } from "@moto-ui/react";

const toaster = createToaster({
	placement: "top",
	overlap: true,
	gap: 8,
});

export default function Type() {
	return (
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
			<Toaster toaster={toaster} />
		</Stack>
	);
}
