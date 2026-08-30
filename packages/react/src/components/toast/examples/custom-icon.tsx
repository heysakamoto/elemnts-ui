import { Avatar, Button, createToaster, Toaster } from "@moto-ui/react";

const toaster = createToaster({
	placement: "top",
	overlap: true,
	gap: 8,
});

export default function CustomIcon() {
	return (
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
	);
}
