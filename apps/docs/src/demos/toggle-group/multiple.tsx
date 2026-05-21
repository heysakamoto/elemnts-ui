import { Icon, Item, ToggleGroup } from "@moto-ui/react";

export function Multiple() {
	return (
		<ToggleGroup
			multiple
			defaultValue={["bold", "italic"]}
		>
			<ToggleGroup.Context>
				{(ctx) => {
					const isActive = (value: string) => ctx.value.includes(value);

					return (
						<>
							<Item
								asChild
								iconOnly
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
