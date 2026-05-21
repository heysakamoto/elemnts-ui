import { Field, Input } from "@moto-ui/react";

export const HelperText = () => {
	return (
		<Field.Root maxW="16rem">
			<Field.Label>Password</Field.Label>
			<Field.Input asChild>
				<Input
					rounded="24"
					placeholder="Enter your password"
				/>
			</Field.Input>
			<Field.HelperText>Must be at least 8 characters long.</Field.HelperText>
		</Field.Root>
	);
};
