import { Icon, Item, ToggleGroup } from "@moto-ui/react";
import { useState } from "react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Controlled",
	component: ToggleGroup,
});

export const Controlled = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `value` and `onValueChange` props to control the selected items.",
			},
		},
	},
	render: (args) => {
		const [value, setValue] = useState(["bold"]);

		return (
			<ToggleGroup
				{...args}
				value={value}
				onValueChange={(e) => {
					setValue(e.value);
					args.onValueChange?.(e);
				}}
			>
				<ToggleGroup.Context>
					{(ctx) => {
						const isActive = (value: string) => ctx.value.includes(value);

						return (
							<>
								<Item
									asChild
									iconOnly
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
	},
});
