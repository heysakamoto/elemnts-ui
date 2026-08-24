import { Checkmark, Icon } from "@moto-ui/react";

export default function Indeterminate() {
	return (
		<Checkmark
			indeterminate
			fallback={
				<Icon
					icon="tabler:minus"
					width={12}
					height={12}
				/>
			}
		>
			<Icon
				icon="tabler:check"
				width={12}
				height={12}
			/>
		</Checkmark>
	);
}
