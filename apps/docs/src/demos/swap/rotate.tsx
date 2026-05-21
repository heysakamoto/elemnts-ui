import { Button, Icon, Swap } from "@moto-ui/react";
import { useState } from "react";

export function Rotate() {
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
}
