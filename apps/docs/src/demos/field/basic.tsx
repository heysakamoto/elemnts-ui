import { Field, Input } from "@moto-ui/react";

export const Basic = () => {
	return (
		<Field.Root maxW="16rem">
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
