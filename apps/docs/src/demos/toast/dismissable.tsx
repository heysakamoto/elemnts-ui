import { Button, createToaster, Icon, Toaster } from "@moto-ui/react";

const toaster = createToaster({
	placement: "top",
	overlap: true,
	gap: 8,
});

export const Dismissable = () => {
	return (
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
			<Toaster toaster={toaster} />
		</>
	);
};
