import { Checkbox, Icon } from "@moto-ui/react";

const interests = [
	{ label: "Coding", value: "coding" },
	{ label: "Design", value: "design" },
	{ label: "Writing", value: "writing" },
];

export const Group = () => {
	return (
		<Checkbox.Group>
			{interests.map((interest) => (
				<Checkbox.Root
					value={interest.value}
					key={interest.value}
				>
					<Checkbox.Control>
						<Checkbox.Indicator>
							<Icon
								icon="tabler:check"
								width={12}
								height={12}
							/>
						</Checkbox.Indicator>
					</Checkbox.Control>
					<Checkbox.Label>{interest.label}</Checkbox.Label>
					<Checkbox.HiddenInput />
				</Checkbox.Root>
			))}
		</Checkbox.Group>
	);
};
