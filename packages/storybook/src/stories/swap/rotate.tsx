import { Button, Icon, Swap } from "@moto-ui/react";
import { useState } from "react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Rotate",
	component: Swap,
});

export const Rotate = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Swaps indicators by rotating them, ideal for icons like sun/moon or sync.",
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
					mode="rotate"
				>
					<Swap.Indicator type="on">
						<Icon
							icon="tabler:sun"
							width={20}
							height={20}
						/>
					</Swap.Indicator>
					<Swap.Indicator type="off">
						<Icon
							icon="tabler:moon"
							width={20}
							height={20}
						/>
					</Swap.Indicator>
				</Swap>
			</Button>
		);
	},
});
