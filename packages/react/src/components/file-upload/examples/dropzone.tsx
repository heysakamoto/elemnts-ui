import {
	Button,
	Chip,
	Container,
	FileUpload,
	Icon,
	SeparatorGroup,
	Surface,
	Tile,
} from "@elemnts-ui/react";

export default function Dropzone() {
	return (
		<Container maxW="20rem">
			<FileUpload.Root>
				<FileUpload.Dropzone>
					<Surface delta={1} rounded="12" shadowLevel={2} borderStyle="dashed">
						<Tile
							p="16"
							align="center"
							justify="center"
							direction="column"
							variant="secondary"
						>
							<Chip iconOnly size="sm">
								<Icon width="18" height="18" icon="tabler:cloud-upload" />
							</Chip>
							<Tile.Title mt="8" fontSize="14" color="fg.muted">
								Drag and drop files here
							</Tile.Title>
							<SeparatorGroup
								my="8"
								gap="8"
								w="full"
								align="center"
								justify="center"
							>
								<SeparatorGroup.Item w="full" orientation="horizontal" />
								<SeparatorGroup.Caption fontSize="14">
									or
								</SeparatorGroup.Caption>
								<SeparatorGroup.Item w="full" orientation="horizontal" />
							</SeparatorGroup>
							<FileUpload.Trigger asChild>
								<Button size="sm" variant="surface">
									Browse
								</Button>
							</FileUpload.Trigger>
						</Tile>
					</Surface>
				</FileUpload.Dropzone>
				<FileUpload.ItemGroup mt="16">
					<FileUpload.Context>
						{({ acceptedFiles: files }) =>
							files.map((file, idx) => (
								<FileUpload.Item asChild key={idx.toString()} file={file}>
									<Surface delta={5} rounded="16">
										<Tile
											pr="6"
											gap="8"
											size="xs"
											rounded="0"
											selected={false}
											variant="secondary"
											orientation="horizontal"
										>
											<Icon icon="tabler:file" width={16} height={16} />
											<Tile.Content gap="2">
												<Tile.Title asChild truncate w="8rem">
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
													<Icon icon="tabler:x" width={16} height={16} />
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
