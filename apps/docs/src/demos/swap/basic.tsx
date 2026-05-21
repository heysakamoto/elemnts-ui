import { Button, Icon, Swap } from "@moto-ui/react";
import { useState } from "react";

export function Basic() {
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
}
