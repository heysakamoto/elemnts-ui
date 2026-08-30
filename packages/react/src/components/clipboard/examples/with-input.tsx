import { Button, Clipboard, Container, Group, Input } from "@moto-ui/react";

export default function WithInput() {
	return (
		<Container maxW="16rem">
			<Clipboard value="2R!@|FAbab1W">
				<Group>
					<Clipboard.Input asChild>
						<Input
							fontSize="14"
							px="10"
						/>
					</Clipboard.Input>
					<Clipboard.Trigger asChild>
						<Button
							size="sm"
							variant="surface"
						>
							<Clipboard.Indicator ml="-2" />
							Copy
						</Button>
					</Clipboard.Trigger>
				</Group>
			</Clipboard>
		</Container>
	);
}
