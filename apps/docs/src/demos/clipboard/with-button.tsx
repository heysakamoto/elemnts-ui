import { Button, Clipboard, Icon } from "@moto-ui/react";

export function WithButton() {
	return (
		<Clipboard value="Hello, World!">
			<Clipboard.Trigger asChild>
				<Button
					size="sm"
					variant="surface"
					rounded="calc(24px)"
				>
					<Clipboard.Indicator
						ml="-2"
						copied={
							<Icon
								icon="tabler:check"
								width={16}
								height={16}
							/>
						}
					>
						<Icon
							icon="tabler:copy"
							width={16}
							height={16}
						/>
					</Clipboard.Indicator>{" "}
					Copy
				</Button>
			</Clipboard.Trigger>
		</Clipboard>
	);
}
