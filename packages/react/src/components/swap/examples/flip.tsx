import { Button, Icon, Swap } from "@elemnts-ui/react";
import { useState } from "react";

export default function Flip() {
	const [swapped, setSwapped] = useState(false);

	return (
		<Button
			iconOnly
			size="md"
			variant="surface"
			onClick={() => setSwapped(!swapped)}
		>
			<Swap swap={swapped} mode="flip">
				<Swap.Indicator type="on">
					<Icon icon="tabler:play" width={20} height={20} />
				</Swap.Indicator>
				<Swap.Indicator type="off">
					<Icon icon="tabler:player-pause" width={20} height={20} />
				</Swap.Indicator>
			</Swap>
		</Button>
	);
}
