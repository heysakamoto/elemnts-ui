import { Button, Icon, Swap } from "@moto-ui/react";
import { useState } from "react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Fade",
	component: Swap,
});

export const Fade = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Toggles between indicators with a smooth opacity transition.",
			},
		},
	},
	render: () => {
		const [swapped, setSwapped] = useState(false);
		return (
			<Button
				iconOnly
				size="md"
				variant="surface"
				onClick={() => setSwapped(!swapped)}
			>
				<Swap
					swap={swapped}
					mode="fade"
				>
					<Swap.Indicator type="on">
						<Icon
							icon="tabler:check"
							width={20}
							height={20}
						/>
					</Swap.Indicator>
					<Swap.Indicator type="off">
						<Icon
							icon="tabler:x"
							width={20}
							height={20}
						/>
					</Swap.Indicator>
				</Swap>
			</Button>
		);
	},
});
