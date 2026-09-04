import {
	Button,
	Container,
	Icon,
	InputGroup,
	Surface,
	Tag,
	TagsInput,
} from "@moto-ui/react";

export default function Clearable() {
	return (
		<Container maxW="24rem">
			<TagsInput.Root defaultValue={["Mango", "Apple", "Orange"]}>
				<InputGroup
					p="4"
					h="auto"
					rounded="10"
				>
					<TagsInput.Control gap="4">
						<TagsInput.Context>
							{({ value }) =>
								value.map((item, idx) => (
									<TagsInput.Item
										asChild
										key={idx.toString()}
										index={idx}
										value={item}
									>
										<Surface asChild>
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
															mr="-8"
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
				<TagsInput.ClearTrigger asChild>
					<Button
						size="sm"
						variant="surface"
						fullWidth
					>
						<Icon
							icon="tabler:clear-all"
							width={16}
							height={16}
						/>
						Clear
					</Button>
				</TagsInput.ClearTrigger>
			</TagsInput.Root>
		</Container>
	);
}
