import preview from "@.storybook/preview";
import { Icon, Item, Toggle } from "@moto-ui/react";
import { useState } from "react";

const meta = preview.meta({
	title: "Controlled",
	component: Toggle,
});

export const Controlled = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `pressed` and `onPressedChange` props to control the state of the toggle.",
			},
		},
	},
	render: () => {
		const [pressed, setPressed] = useState(false);

		return (
			<Toggle
				pressed={pressed}
				aria-label="Toggle bold"
				onPressedChange={setPressed}
			>
				<Item
					iconOnly
					selected={pressed}
				>
					<Icon
						icon="tabler:bold"
						width={16}
						height={16}
					/>
				</Item>
			</Toggle>
		);
	},
});
