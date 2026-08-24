import { Button, createToaster, Toaster } from "@moto-ui/react";

const toaster = createToaster({
	placement: "top",
	overlap: true,
	gap: 8,
});

export default function Basic() {
	return (
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
			<Toaster toaster={toaster} />
		</>
	);
}
