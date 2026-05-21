import { Button, Stack, Icon as Svg } from "@moto-ui/react";

export function Icon() {
	return (
		<Stack
			gap="8"
			justify="center"
		>
			<Button rounded="24">
				<Svg
					icon="tabler:mail"
					ml="-2"
					width={18}
					height={18}
				/>
				Send an email
			</Button>
			<Button
				variant="secondary"
				rounded="24"
			>
				Book a meeting
				<Svg
					icon="tabler:phone"
					mr="-2"
					width={18}
					height={18}
				/>
			</Button>
		</Stack>
	);
}
