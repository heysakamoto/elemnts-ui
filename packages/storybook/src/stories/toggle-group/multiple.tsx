import { Icon, Item, ToggleGroup } from "@moto-ui/react";
import meta from "./stories";

export const Multiple = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Allow multiple items to be selected by setting the `multiple` prop to `true`.",
			},
		},
	},
	render: (args) => (
		<ToggleGroup
			{...args}
			multiple
			defaultValue={args.defaultValue || ["bold", "italic"]}
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
	),
});
