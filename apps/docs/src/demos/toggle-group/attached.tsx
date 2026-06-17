import { Icon, Item, ToggleGroup } from "@moto-ui/react";

export function Attached() {
	return (
		<ToggleGroup attached>
			<ToggleGroup.Context>
				{(ctx) => {
					const isActive = (value: string) => ctx.value.includes(value);

					return (
						<>
							<Item
								asChild
								iconOnly
								surface="secondary"
								roundedStart="24"
								selected={isActive("bold")}
							>
								<ToggleGroup.Item
									value="bold"
									aria-label="bold"
								>
									<Icon icon="tabler:bold" />
								</ToggleGroup.Item>
							</Item>
							<Item
								asChild
								iconOnly
								surface="secondary"
								selected={isActive("italic")}
							>
								<ToggleGroup.Item
									value="italic"
									aria-label="Italic"
								>
									<Icon icon="tabler:italic" />
								</ToggleGroup.Item>
							</Item>
							<Item
								asChild
								iconOnly
								surface="secondary"
								roundedEnd="24"
								selected={isActive("underline")}
							>
								<ToggleGroup.Item
									value="underline"
									aria-label="Underline"
								>
									<Icon icon="tabler:underline" />
								</ToggleGroup.Item>
							</Item>
						</>
					);
				}}
			</ToggleGroup.Context>
		</ToggleGroup>
	);
}
