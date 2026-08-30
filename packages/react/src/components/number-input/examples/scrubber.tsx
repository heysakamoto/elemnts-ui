import {
	Button,
	Container,
	Icon,
	InputGroup,
	Item,
	Menu,
	NumberInput,
	Portal,
	Show,
	Surface,
} from "@moto-ui/react";
import { useState } from "react";

const options = [
	{
		id: "px",
		label: "px",
		value: "px",
	},
	{
		id: "rem",
		label: "rem",
		value: "rem",
	},
	{
		id: "em",
		label: "em",
		value: "em",
	},
	{
		id: "%",
		label: "%",
		value: "%",
	},
];

const scrubberIcon = {
	body: `
	<svg
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M8 4v16" />
      <path d="M5 7l3-3 3 3" />
      <path d="M5 17l3 3 3-3" />
      <path d="M14 7h5" />
      <path d="M14 12h5" />
      <path d="M14 17h5" />
    </svg>
  `,
};

export default function Scrubber() {
	const [value, setValue] = useState("px");

	return (
		<Container maxW="14rem">
			<NumberInput defaultValue="50">
				<NumberInput.Control>
					<NumberInput.Scrubber asChild>
						<Button
							iconOnly
							variant="surface"
						>
							<Icon
								width={20}
								height={20}
								icon={scrubberIcon}
							/>
						</Button>
					</NumberInput.Scrubber>
					<InputGroup>
						<NumberInput.Input asChild>
							<InputGroup.Input
								fontSize="16"
								textAlign="center"
							/>
						</NumberInput.Input>
					</InputGroup>
					<Menu
						positioning={{
							strategy: "fixed",
						}}
					>
						<Menu.Trigger asChild>
							<Button variant="surface">{value}</Button>
						</Menu.Trigger>
						<Portal>
							<Menu.Positioner>
								<Menu.Content asChild>
									<Surface
										w="7rem"
										delta={1}
										rounded="20"
										colorPalette="neutral"
									>
										<Surface.Content
											p="4"
											gap="2"
										>
											{options.map((option) => {
												const selected = value === option.value;
												return (
													<Menu.Item
														asChild
														key={option.id}
														value={option.value}
														onClick={() => setValue(option.value)}
													>
														<Item
															size="sm"
															variant="secondary"
															selected={selected}
														>
															<Menu.Indicator w="16">
																<Show
																	when={selected}
																	fallback={null}
																>
																	<Icon
																		width={16}
																		height={16}
																		icon="tabler:check"
																	/>
																</Show>
															</Menu.Indicator>
															<Menu.ItemText>{option.label}</Menu.ItemText>
														</Item>
													</Menu.Item>
												);
											})}
										</Surface.Content>
									</Surface>
								</Menu.Content>
							</Menu.Positioner>
						</Portal>
					</Menu>
				</NumberInput.Control>
			</NumberInput>
		</Container>
	);
}
