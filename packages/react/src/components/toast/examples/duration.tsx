import { Avatar, Button, createToaster, Toaster } from "@moto-ui/react";

const toaster = createToaster({
	placement: "top",
	overlap: true,
	gap: 8,
});

export default function Duration() {
	return (
		<>
			<Button
				variant="surface"
				onClick={() =>
					toaster.create({
						type: "custom",
						duration: Infinity,
						title: "This toast will stay until closed manually",
					})
				}
			>
				Infinite Duration
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
