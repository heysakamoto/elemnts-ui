import { Button, Icon, VisuallyHidden } from "@moto-ui/react";

export const WithIcon = () => {
	return (
		<Button
			type="button"
			iconOnly
			variant="ghost"
		>
			<Icon
				width={16}
				height={16}
				icon="tabler:bell"
			/>
			<VisuallyHidden>Notifications</VisuallyHidden>
		</Button>
	);
};
