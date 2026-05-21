import { Field, Input } from "@moto-ui/react";

export const Disabled = () => {
	return (
		<Field.Root
			maxW="16rem"
			disabled
		>
			<Field.Label>Username</Field.Label>
			<Field.Input asChild>
				<Input
					rounded="24"
					placeholder="Enter your username"
				/>
			</Field.Input>
		</Field.Root>
	);
};
