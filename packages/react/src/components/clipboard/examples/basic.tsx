import { Button, Clipboard } from "@elemnts-ui/react";

export default function Basic() {
	return (
		<Clipboard value="Hello, World!">
			<Clipboard.Trigger asChild>
				<Button size="sm" variant="surface">
					<Clipboard.Indicator />
					Copy
				</Button>
			</Clipboard.Trigger>
		</Clipboard>
	);
}
