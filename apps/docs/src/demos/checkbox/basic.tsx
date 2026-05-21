import { Checkbox, Icon } from "@moto-ui/react";

export const Basic = () => {
	return (
		<Checkbox.Root>
			<Checkbox.Control>
				<Checkbox.Indicator>
					<Icon
						icon="tabler:check"
						width={12}
						height={12}
					/>
				</Checkbox.Indicator>
			</Checkbox.Control>
			<Checkbox.Label>Do you agree to the terms and conditions?</Checkbox.Label>
			<Checkbox.HiddenInput />
		</Checkbox.Root>
	);
};
