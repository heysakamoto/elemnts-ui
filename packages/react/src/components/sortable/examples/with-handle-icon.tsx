import {
	Button,
	Container,
	DecorativeBox,
	Icon,
	Sortable,
	Text,
} from "@elemnts-ui/react";

const items = [
	{ id: "1", label: "Getting Started" },
	{ id: "2", label: "Installation" },
	{ id: "3", label: "Configuration" },
	{ id: "4", label: "Components" },
	{ id: "5", label: "Theming" },
];

export default function WithHandleIcon() {
	return (
		<Container maxW="20rem">
			<Sortable gap="8" defaultValue={items}>
				{items.map((item, idx) => {
					return (
						<Sortable.Item
							index={idx}
							id={item.id}
							key={item.id}
							colorPalette="neutral"
						>
							<DecorativeBox
								h="3rem"
								px="12"
								gap="16"
								align="center"
								justify="start"
								direction="row"
							>
								<Sortable.ItemHandle asChild>
									<Button iconOnly size="sm" rounded="full" variant="ghost">
										<Icon
											width={16}
											height={16}
											color="fg.muted"
											icon="tabler:grip-vertical"
										/>
									</Button>
								</Sortable.ItemHandle>
								<Text as="span" fontSize="14">
									{item.label}
								</Text>
							</DecorativeBox>
						</Sortable.Item>
					);
				})}
			</Sortable>
		</Container>
	);
}
