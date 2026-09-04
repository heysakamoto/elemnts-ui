import {
	Button,
	Container,
	FileUpload,
	Icon,
	Stack,
	Surface,
	Tile,
} from "@moto-ui/react";

export default function Basic() {
	return (
		<Container maxW="20rem">
			<FileUpload.Root
				maxW="20rem"
				allowDrop={false}
			>
				<Stack
					align="center"
					justify="center"
				>
					<FileUpload.Trigger asChild>
						<Button
							variant="surface"
							size="sm"
						>
							<Icon
								ml="-2"
								icon="tabler:upload"
								width="16"
								height="16"
							/>
							Select
						</Button>
					</FileUpload.Trigger>
				</Stack>
				<FileUpload.ItemGroup mt="16">
					<FileUpload.Context>
						{({ acceptedFiles: files }) =>
							files.map((file, idx) => (
								<FileUpload.Item
									asChild
									key={idx.toString()}
									file={file}
								>
									<Surface
										delta={5}
										rounded="16"
									>
										<Tile
											pr="6"
											gap="8"
											size="xs"
											rounded="0"
											selected={false}
											variant="secondary"
											orientation="horizontal"
										>
											<Icon
												icon="tabler:file"
												width={16}
												height={16}
											/>
											<Tile.Content gap="2">
												<Tile.Title
													asChild
													truncate
													w="8rem"
												>
													<FileUpload.ItemName />
												</Tile.Title>
												<FileUpload.ItemSizeText fontSize="12" />
											</Tile.Content>
											<FileUpload.ItemDeleteTrigger asChild>
												<Button
													iconOnly
													size="2xs"
													flexShrink={0}
													variant="surface"
													colorPalette="destructive"
												>
													<Icon
														icon="tabler:x"
														width={16}
														height={16}
													/>
												</Button>
											</FileUpload.ItemDeleteTrigger>
										</Tile>
									</Surface>
								</FileUpload.Item>
							))
						}
					</FileUpload.Context>
				</FileUpload.ItemGroup>
				<FileUpload.HiddenInput />
			</FileUpload.Root>
		</Container>
	);
}
