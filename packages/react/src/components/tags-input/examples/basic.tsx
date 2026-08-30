import {
	Button,
	Container,
	Icon,
	InputGroup,
	Surface,
	Tag,
	TagsInput,
} from "@moto-ui/react";

export default function Basic() {
	return (
		<Container maxW="20rem">
			<TagsInput.Root defaultValue={["Mango", "Apple", "Orange"]}>
				<TagsInput.Label>Fruits</TagsInput.Label>
				<InputGroup
					h="auto"
					p="4"
					rounded="20"
				>
					<TagsInput.Control gap="4">
						<TagsInput.Context>
							{({ value }) =>
								value.map((item, idx) => (
									<TagsInput.Item
										asChild
										index={idx}
										value={item}
										key={idx.toString()}
									>
										<Surface rounded="16">
											<Tag
												size="xs"
												variant="secondary"
											>
												<TagsInput.ItemPreview>
													<TagsInput.ItemText fontSize="14">
														{item}
													</TagsInput.ItemText>
													<TagsInput.ItemDeleteTrigger asChild>
														<Button
															mr="-6"
															iconOnly
															size="2xs"
															variant="ghost"
														>
															<Icon
																icon="tabler:x"
																width={14}
																height={14}
															/>
														</Button>
													</TagsInput.ItemDeleteTrigger>
												</TagsInput.ItemPreview>
												<TagsInput.ItemInput />
											</Tag>
										</Surface>
									</TagsInput.Item>
								))
							}
						</TagsInput.Context>
						<TagsInput.Input asChild>
							<InputGroup.Input
								fontSize="14"
								placeholder="Add..."
							/>
						</TagsInput.Input>
					</TagsInput.Control>
				</InputGroup>
			</TagsInput.Root>
		</Container>
	);
}
