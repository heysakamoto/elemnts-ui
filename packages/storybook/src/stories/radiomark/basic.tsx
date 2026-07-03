import { Radiomark } from "@moto-ui/react";
import { useState } from "react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: Radiomark,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Radiomark component is a visual indicator that represents a selected or unselected state in a circular format. It is primarily used within radio button components or any selection interface that requires a circular marker.",
			},
		},
	},
	render: () => {
		const [checked, setChecked] = useState(true);
		return (
			<Radiomark
				checked={checked}
				onClick={() => setChecked(!checked)}
			/>
		);
	},
});
