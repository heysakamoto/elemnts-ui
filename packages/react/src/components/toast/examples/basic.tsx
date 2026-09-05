import { Button, createToaster, Toaster } from "@elemnts-ui/react";

const toaster = createToaster({
	placement: "top",
	overlap: true,
	gap: 8,
});

export default function Basic() {
	return (
		<>
			<Button
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
