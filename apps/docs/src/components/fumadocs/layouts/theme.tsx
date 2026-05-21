import {
	Accordion,
	createListCollection,
	Icon,
	InputGroup,
	Item,
	Portal,
	SegmentGroup,
	Select,
	Surface,
} from "@moto-ui/react";
import { applyTheme } from "@/utils/theme";
import { useThemeContext } from "./client";

export function Theme() {
	return (
		<Surface
			delta={0}
			fontFamily="mono"
			direction="column"
			rounded="0"
			overflow="hidden"
		>
			<Surface.Header px="10">
				<Surface.Title fontSize="13">Personalize </Surface.Title>
			</Surface.Header>
			<Surface.Content mt="16">
				<Accordion
					lazyMount
					unmountOnExit
					multiple
				>
					{items.map((item) => (
						<Accordion.Item
							value={item.value}
							key={item.id}
						>
							<Accordion.ItemTrigger fontSize="12">
								{item.label}
								<Accordion.ItemIndicator>
									<Icon
										icon="tabler:chevron-down"
										width={16}
										height={16}
									/>
								</Accordion.ItemIndicator>
							</Accordion.ItemTrigger>
							<Accordion.ItemContent p="8">
								{item.component}
							</Accordion.ItemContent>
						</Accordion.Item>
					))}
				</Accordion>
			</Surface.Content>
		</Surface>
	);
}

const items = [
	{ id: "mode", value: "mode", label: "Theme", component: <Mode /> },
	{ id: "radius", value: "radius", label: "Radius", component: <Radius /> },
	{
		id: "base-color",
		value: "base-color",
		label: "Base Color",
		component: <BaseColor />,
	},
	{
		id: "accent-color",
		value: "accent-color",
		label: "Accent Color",
		component: <AccentColor />,
	},
];

function Mode() {
	const { theme, setTheme } = useThemeContext();

	const values = [
		{ value: "system", label: "System", icon: "tabler:device-laptop" },
		{ value: "light", label: "Light", icon: "tabler:sun" },
		{ value: "dark", label: "Dark", icon: "tabler:moon" },
	];

	return (
		<SegmentGroup
			size="xs"
			orientation="horizontal"
			defaultValue={theme.mode}
			onValueChange={(e) => {
				setTheme({
					type: "UPDATE",
					payload: {
						mode: (e.value as any) ?? "light",
					},
				});
				applyTheme((e.value as any) ?? "light");
			}}
		>
			<SegmentGroup.Indicator />
			{values.map((item) => (
				<SegmentGroup.Item
					value={item.value}
					key={item.value}
				>
					<Icon
						icon={item.icon}
						width={16}
						height={16}
					/>
					<SegmentGroup.ItemHiddenInput />
				</SegmentGroup.Item>
			))}
		</SegmentGroup>
	);
}

function Radius() {
	const { theme, setTheme } = useThemeContext();

	const values = [
		{ value: "24", label: "24", icon: "tabler:border-corner-pill" },
		{ value: "16", label: "16", icon: "tabler:border-corner-rounded" },
		{ value: "12", label: "12", icon: "tabler:border-corner-square" },
	];

	return (
		<SegmentGroup
			size="xs"
			orientation="horizontal"
			defaultValue={theme.radius.toString()}
			onValueChange={(e) => {
				setTheme({
					type: "UPDATE",
					payload: { radius: Number(e.value ?? "24") },
				});
			}}
		>
			<SegmentGroup.Indicator />
			{values.map((item) => (
				<SegmentGroup.Item
					value={item.value}
					key={item.value}
				>
					<Icon
						icon={item.icon}
						width={16}
						height={16}
					/>
					<SegmentGroup.ItemText>{item.label}</SegmentGroup.ItemText>
					<SegmentGroup.ItemHiddenInput />
				</SegmentGroup.Item>
			))}
		</SegmentGroup>
	);
}

function BaseColor() {
	const { theme, setTheme } = useThemeContext();

	const colors = createListCollection({
		items: [
			{ value: "neutral", label: "Neutral", icon: "tabler:color-palette" },
			{ value: "zinc", label: "Zinc", icon: "tabler:color-palette" },
			{ value: "mauve", label: "Mauve", icon: "tabler:color-palette" },
			{ value: "olive", label: "Olive", icon: "tabler:color-palette" },
			{ value: "mist", label: "Mist", icon: "tabler:color-palette" },
			{ value: "taupe", label: "Taupe", icon: "tabler:color-palette" },
		],
	});

	return (
		<Select
			lazyMount
			unmountOnExit
			collection={colors as any}
			defaultValue={[theme.colors.base]}
			onValueChange={(e) => {
				setTheme({
					type: "UPDATE",
					payload: {
						colors: {
							accent: theme.colors.accent,
							base: e.value[0] ?? theme.colors.base,
						},
					},
				});
			}}
		>
			<Select.Trigger>
				<Select.Control>
					<InputGroup
						rounded="20"
						size="sm"
					>
						<InputGroup.Addon>
							<Icon
								icon="tabler:palette"
								width={16}
								height={16}
							/>
						</InputGroup.Addon>
						<Select.ValueText
							px="8"
							fontSize="12"
							placeholder="Select color"
						/>
						<InputGroup.Addon>
							<Icon
								icon="tabler:chevron-down"
								width={16}
								height={16}
							/>
						</InputGroup.Addon>
					</InputGroup>
				</Select.Control>
			</Select.Trigger>
			<Portal>
				<Select.Positioner>
					<Select.Content asChild>
						<Surface
							delta={1}
							rounded="24"
						>
							<Surface.Content
								p="4"
								gap="2"
							>
								{colors.items.map((item) => (
									<Select.Item
										item={item}
										key={item.value}
									>
										<Select.ItemContext>
											{(ctx) => {
												return (
													<Item
														rounded="20"
														fontFamily="mono"
														variant="secondary"
														colorPalette="neutral"
														selected={ctx.selected}
													>
														<Select.ItemText fontSize="12">
															{item.label}
														</Select.ItemText>
														<Select.ItemIndicator>
															<Icon
																icon="tabler:check"
																width={16}
																height={16}
																mr="-2"
															/>
														</Select.ItemIndicator>
													</Item>
												);
											}}
										</Select.ItemContext>
									</Select.Item>
								))}
							</Surface.Content>
						</Surface>
					</Select.Content>
				</Select.Positioner>
			</Portal>
		</Select>
	);
}

function AccentColor() {
	const { theme, setTheme } = useThemeContext();

	const colors = createListCollection({
		items: [
			{ value: "amber", label: "Amber", icon: "tabler:color-palette" },
			{ value: "blue", label: "Blue", icon: "tabler:color-palette" },
			{ value: "cyan", label: "Cyan", icon: "tabler:color-palette" },
			{ value: "emerald", label: "Emerald", icon: "tabler:color-palette" },
			{ value: "fuchsia", label: "Fuchsia", icon: "tabler:color-palette" },
			{ value: "green", label: "Green", icon: "tabler:color-palette" },
			{ value: "indigo", label: "Indigo", icon: "tabler:color-palette" },
			{ value: "lime", label: "Lime", icon: "tabler:color-palette" },
			{ value: "orange", label: "Orange", icon: "tabler:color-palette" },
			{ value: "pink", label: "Pink", icon: "tabler:color-palette" },
			{ value: "purple", label: "Purple", icon: "tabler:color-palette" },
			{ value: "red", label: "Red", icon: "tabler:color-palette" },
			{ value: "sky", label: "Sky", icon: "tabler:color-palette" },
			{ value: "teal", label: "Teal", icon: "tabler:color-palette" },
			{ value: "violet", label: "Violet", icon: "tabler:color-palette" },
			{ value: "yellow", label: "Yellow", icon: "tabler:color-palette" },
		],
	});

	return (
		<Select
			lazyMount
			unmountOnExit
			collection={colors as any}
			defaultValue={[theme.colors.accent]}
			onValueChange={(e) => {
				setTheme({
					type: "UPDATE",
					payload: {
						colors: {
							base: theme.colors.base,
							accent: e.value[0] ?? theme.colors.accent,
						},
					},
				});
			}}
		>
			<Select.Trigger>
				<Select.Control>
					<InputGroup
						rounded="20"
						size="sm"
					>
						<InputGroup.Addon>
							<Icon
								icon="tabler:palette"
								width={16}
								height={16}
							/>
						</InputGroup.Addon>
						<Select.ValueText
							px="8"
							fontSize="12"
							placeholder="Select color"
						/>
						<InputGroup.Addon>
							<Icon
								icon="tabler:chevron-down"
								width={16}
								height={16}
							/>
						</InputGroup.Addon>
					</InputGroup>
				</Select.Control>
			</Select.Trigger>
			<Portal>
				<Select.Positioner>
					<Select.Content asChild>
						<Surface
							delta={1}
							rounded="24"
							h="20rem"
							scrollbar="hidden"
						>
							<Surface.Content
								p="4"
								gap="2"
							>
								{colors.items.map((item) => (
									<Select.Item
										item={item}
										key={item.value}
									>
										<Select.ItemContext>
											{(ctx) => {
												return (
													<Item
														rounded="20"
														fontFamily="mono"
														variant="secondary"
														colorPalette="neutral"
														selected={ctx.selected}
													>
														<Select.ItemText fontSize="12">
															{item.label}
														</Select.ItemText>
														<Select.ItemIndicator>
															<Icon
																icon="tabler:check"
																width={16}
																height={16}
																mr="-2"
															/>
														</Select.ItemIndicator>
													</Item>
												);
											}}
										</Select.ItemContext>
									</Select.Item>
								))}
							</Surface.Content>
						</Surface>
					</Select.Content>
				</Select.Positioner>
			</Portal>
		</Select>
	);
}
