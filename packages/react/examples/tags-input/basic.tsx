import {
	Button,
	Container,
	Icon,
	InputGroup,
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
					minH="32"
					rounded="20"
					p="4"
				>
					<TagsInput.Control gap="2">
						<TagsInput.Context>
							{({ value }) =>
								value.map((item, idx) => (
									<TagsInput.Item
										asChild
										key={idx.toString()}
										index={idx}
										value={item}
									>
										<Tag
											size="sm"
											surface="secondary"
											variant="secondary"
											colorPalette="neutral"
											rounded="calc(24px - 4px)"
										>
											<TagsInput.ItemPreview>
												<TagsInput.ItemText fontSize="14">
													{item}
												</TagsInput.ItemText>
												<TagsInput.ItemDeleteTrigger asChild>
													<Button
														iconOnly
														colorPalette="destructive"
														variant="plain"
														size="2xs"
														mr="-4"
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
