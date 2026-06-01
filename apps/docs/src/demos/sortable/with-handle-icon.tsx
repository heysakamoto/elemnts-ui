import { Container, DecorativeBox, Icon, Sortable } from "@moto-ui/react";

const items = [
	"Getting Started",
	"Installation",
	"Configuration",
	"Components",
	"Theming",
];

export function WithHandleIcon() {
	return (
		<Container maxW="20rem">
			<Sortable gap="8">
				{items.map((item, idx) => {
					return (
						<Sortable.Item
							key={item}
							index={idx + 1}
							id={(idx + 1).toString()}
						>
							<DecorativeBox
								h="3rem"
								px="12"
								gap="16"
								align="center"
								justify="start"
								direction="row"
							>
								<Sortable.ItemHandle>
									<Icon
										width={16}
										height={16}
										color="fg.muted"
										icon="tabler:grip-vertical"
									/>
								</Sortable.ItemHandle>
								<span>{item}</span>
							</DecorativeBox>
						</Sortable.Item>
					);
				})}
			</Sortable>
		</Container>
	);
}
