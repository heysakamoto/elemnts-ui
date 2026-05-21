import {
	Avatar,
	Badge,
	Button,
	ButtonGroup,
	Container,
	Group,
	Icon,
	Input,
	Item,
	JsonTreeView,
	Marquee,
	Menu,
	NumberInput,
	PinInput,
	Portal,
	ScrollShadow,
	Section,
	SegmentGroup,
	Stack,
	Status,
	Surface,
	Switch,
} from "@moto-ui/react";

export function Components() {
	return (
		<Section
			mt="80"
			mb="80"
		>
			<Container maxW="75rem">
				<Stack
					direction="column"
					gap="12"
				>
					<Marquee
						speed={75}
						pauseOnInteraction
					>
						<Marquee.Viewport>
							<Marquee.Edge side="start" />
							<Marquee.Content w="full">
								{examples
									.filter((_, idx) => idx < 4)
									.map((example) => (
										<Marquee.Item
											key={example.title}
											asChild
										>
											<Surface
												w="full"
												h="16rem"
												delta={1}
												rounded="24"
												boxSize="48"
												minW="20rem"
												align="center"
												justify="center"
											>
												<example.component />
											</Surface>
										</Marquee.Item>
									))}{" "}
							</Marquee.Content>
							<Marquee.Edge side="end" />
						</Marquee.Viewport>
					</Marquee>
					<Marquee
						side="end"
						speed={75}
						pauseOnInteraction
					>
						<Marquee.Viewport>
							<Marquee.Edge side="start" />
							<Marquee.Content w="full">
								{examples
									.filter((_, idx) => idx >= 4)
									.map((example) => (
										<Marquee.Item
											key={example.title}
											asChild
										>
											<Surface
												w="full"
												h="16rem"
												delta={1}
												rounded="24"
												boxSize="48"
												minW="20rem"
												align="center"
												justify="center"
											>
												<example.component />
											</Surface>
										</Marquee.Item>
									))}{" "}
							</Marquee.Content>
							<Marquee.Edge side="end" />
						</Marquee.Viewport>
					</Marquee>
				</Stack>
			</Container>
		</Section>
	);
}

const examples = [
	{
		title: "Switch",
		component: SwitchExample,
	},
	{
		title: "SegmentGroup",
		component: SegmentGroupExample,
	},
	{
		title: "PinInput",
		component: PinInputExample,
	},
	{
		title: "Menu",
		component: MenuExample,
	},
	{
		title: "NumberInput",
		component: NumberInputExample,
	},
	{
		title: "JsonTreeView",
		component: JsonTreeViewExample,
	},
	{
		title: "Avatar",
		component: AvatarExample,
	},
	{
		title: "Status",
		component: StatusExample,
	},
];

function SwitchExample() {
	return (
		<Switch>
			<Switch.Control>
				<Switch.Thumb />
			</Switch.Control>
			<Switch.HiddenInput />
		</Switch>
	);
}

function SegmentGroupExample() {
	const values = [
		{
			label: "Ark",
			value: "ark",
		},
		{
			label: "Pandacss",
			value: "pandacss",
		},
		{
			label: "Moto",
			value: "moto",
		},
	];

	return (
		<SegmentGroup
			orientation="horizontal"
			defaultValue="ark"
		>
			<SegmentGroup.Indicator />
			{values.map((value) => {
				return (
					<SegmentGroup.Item
						key={value.value}
						value={value.value}
					>
						<SegmentGroup.ItemText>{value.label}</SegmentGroup.ItemText>
						<SegmentGroup.ItemHiddenInput />
					</SegmentGroup.Item>
				);
			})}
		</SegmentGroup>
	);
}

function PinInputExample() {
	return (
		<PinInput placeholder="*">
			<PinInput.Control>
				{Array.from({ length: 4 }).map((_, idx) => (
					<PinInput.Input
						asChild
						index={idx}
						key={idx.toString()}
					>
						<Input
							rounded="12"
							boxSize="40"
							fontSize="20"
						/>
					</PinInput.Input>
				))}
			</PinInput.Control>
		</PinInput>
	);
}

function MenuExample() {
	const options = [
		{ label: "Cut", value: "cut" },
		{ label: "Copy", value: "copy" },
		{ label: "Paste", value: "paste" },
	];

	return (
		<Menu positioning={{ placement: "bottom" }}>
			<Menu.Trigger asChild>
				<Button
					variant="surface"
					rounded="24"
				>
					View
				</Button>
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content asChild>
						<Surface
							w="8rem"
							delta={1}
							rounded="24"
						>
							<Surface.Content p="4">
								{options.map((option) => (
									<Menu.Item
										key={option.value}
										value={option.value}
									>
										<Item rounded="20">
											<Menu.ItemText>{option.label}</Menu.ItemText>
										</Item>
									</Menu.Item>
								))}
							</Surface.Content>
						</Surface>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu>
	);
}

function NumberInputExample() {
	return (
		<NumberInput maxW="10rem">
			<NumberInput.Control>
				<Group attached>
					<NumberInput.Input asChild>
						<Input
							roundedStart="24"
							placeholder="0"
						/>
					</NumberInput.Input>
					<ButtonGroup attached>
						<NumberInput.IncrementTrigger asChild>
							<Button
								variant="surface"
								iconOnly
							>
								<Icon
									icon="tabler:plus"
									width={16}
									height={"16"}
								/>
							</Button>
						</NumberInput.IncrementTrigger>
						<NumberInput.DecrementTrigger asChild>
							<Button
								variant="surface"
								iconOnly
								roundedEnd="24"
							>
								<Icon
									icon="tabler:minus"
									width={16}
									height={"16"}
								/>
							</Button>
						</NumberInput.DecrementTrigger>
					</ButtonGroup>
				</Group>
			</NumberInput.Control>
		</NumberInput>
	);
}

function JsonTreeViewExample() {
	const data = {
		name: "John Doe",
		age: 30,
		email: "john.doe@example.com",
		isDeveloper: true,
		skills: ["React", "TypeScript", "Panda CSS"],
		address: {
			street: "123 Main St",
			city: "Anytown",
			zip: "12345",
		},
		lastLogin: new Date().toISOString(),
		settings: null,
	};

	return (
		<ScrollShadow
			maxW="16rem"
			align="center"
			justify="center"
			display="flex"
			direction="column"
		>
			<JsonTreeView
				data={data}
				h="10rem"
				defaultExpandedDepth={1}
			>
				<JsonTreeView.Tree
					arrow={
						<Icon
							width={16}
							height={16}
							icon="tabler:chevron-right"
						/>
					}
				/>
			</JsonTreeView>
		</ScrollShadow>
	);
}

function AvatarExample() {
	return (
		<Badge size="sm">
			<Avatar>
				<Avatar.Image
					src="https://images.pexels.com/photos/9775435/pexels-photo-9775435.jpeg?w=200&h=200"
					alt="avatar"
				/>
				<Avatar.Fallback>Co</Avatar.Fallback>
			</Avatar>
			<Badge.Indicator />
		</Badge>
	);
}

function StatusExample() {
	return (
		<Status>
			<Status.Indicator />
			<Status.Text>Online</Status.Text>
		</Status>
	);
}
