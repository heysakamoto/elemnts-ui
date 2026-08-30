import { Alert, Container, For, Icon } from "@moto-ui/react";

const variants = ["primary", "secondary", "tertiary", "surface"] as const;

export default function Variants() {
	return (
		<Container
			maxW="fit"
			spaceY="12"
		>
			<For each={variants}>
				{(variant) => (
					<Alert
						variant={variant}
						key={variant}
					>
						<Alert.Indicator>
							<Icon
								icon="tabler:info-circle"
								width={20}
								height={20}
							/>
						</Alert.Indicator>
						<Alert.Content>
							<Alert.Title>This is a {variant} message</Alert.Title>
						</Alert.Content>
					</Alert>
				)}
			</For>
		</Container>
	);
}
