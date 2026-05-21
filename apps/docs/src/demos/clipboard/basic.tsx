import { Button, Clipboard, Icon } from "@moto-ui/react";

export function Basic() {
	return (
		<Clipboard value="Hello, World!">
			<Clipboard.Trigger asChild>
				<Button
					iconOnly
					size="sm"
					variant="surface"
					rounded="calc(24px - 8px)"
				>
					<Clipboard.Indicator
						copied={
							<Icon
								icon="tabler:check"
								width={18}
								height={18}
							/>
						}
					>
						{" "}
						<Icon
							icon="tabler:copy"
							width={18}
							height={18}
						/>
					</Clipboard.Indicator>
				</Button>
			</Clipboard.Trigger>
		</Clipboard>
	);
}
