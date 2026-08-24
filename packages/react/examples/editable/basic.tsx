import { Editable, Input } from "@moto-ui/react";

export default function Basic() {
	return (
		<Editable.Root
			placeholder="Click to edit"
			defaultValue="Hello World"
		>
			<Editable.Area>
				<Editable.Preview rounded="24" />
				<Editable.Input asChild>
					<Input
						maxW="10rem"
						size="sm"
						variant="secondary"
						rounded="24"
					/>
				</Editable.Input>
			</Editable.Area>
		</Editable.Root>
	);
}
