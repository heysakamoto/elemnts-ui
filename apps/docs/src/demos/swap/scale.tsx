import { Button, Icon, Swap } from "@moto-ui/react";
import { useState } from "react";

export function Scale() {
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
				mode="scale"
			>
				<Swap.Indicator type="on">
					<Icon
						icon="tabler:volume"
						width={20}
						height={20}
					/>
				</Swap.Indicator>
				<Swap.Indicator type="off">
					<Icon
						icon="tabler:volume-3"
						width={20}
						height={20}
					/>
				</Swap.Indicator>
			</Swap>
		</Button>
	);
}
