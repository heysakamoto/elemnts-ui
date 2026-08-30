import { Button, Item, Menu, Portal, Surface } from "@moto-ui/react";

export function MenuExample() {
	const options = [
		{ label: "Cut", value: "cut" },
		{ label: "Copy", value: "copy" },
		{ label: "Paste", value: "paste" },
	];

	return (
		<Menu positioning={{ placement: "bottom" }}>
			<Menu.Trigger asChild>
				<Button
					variant="surface"
					size="sm"
				>
					Options
				</Button>
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content asChild>
						<Surface
							w="8rem"
							delta={1}
							rounded="20"
							colorPalette="neutral"
						>
							<Surface.Content p="4">
								{options.map((option) => (
									<Menu.Item
										asChild
										key={option.value}
										value={option.value}
									>
										<Item size="sm">
											<Menu.ItemText>{option.label}</Menu.ItemText>
										</Item>
									</Menu.Item>
								))}
							</Surface.Content>
						</Surface>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu>
	);
}
