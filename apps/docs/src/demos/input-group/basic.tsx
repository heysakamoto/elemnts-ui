import { Icon, InputGroup } from "@moto-ui/react";

export const Basic = () => {
	return (
		<InputGroup.Root
			maxW="16rem"
			rounded="24"
		>
			<InputGroup.Addon
				pl="8"
				color="icon.secondary"
			>
				<Icon
					icon="tabler:search"
					width={16}
					height={16}
				/>
			</InputGroup.Addon>
			<InputGroup.Input
				px="8"
				fontSize="14"
				placeholder="Search..."
			/>
			<InputGroup.Addon
				pr="8"
				color="icon.secondary"
			>
				<Icon
					icon="tabler:command"
					width={16}
					height={16}
				/>
			</InputGroup.Addon>
		</InputGroup.Root>
	);
};
