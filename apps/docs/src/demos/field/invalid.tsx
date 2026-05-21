import { Field, Input } from "@moto-ui/react";

export const Invalid = () => {
	return (
		<Field.Root
			invalid
			maxW="16rem"
		>
			<Field.Label>Email</Field.Label>
			<Field.Input
				defaultValue="invalid-email"
				asChild
			>
				<Input
					rounded="24"
					placeholder="Enter your email"
				/>
			</Field.Input>
			<Field.ErrorText>Please enter a valid email address.</Field.ErrorText>
		</Field.Root>
	);
};
