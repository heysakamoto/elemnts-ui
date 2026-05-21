import {
	Button,
	Container,
	FileUpload,
	Icon,
	Separator,
	Stack,
	Text,
	Tile,
} from "@moto-ui/react";

export const Dropzone = () => {
	return (
		<Container maxW="20rem">
			<FileUpload.Root>
				<FileUpload.Dropzone
					border="2px dashed"
					borderColor="stroke.secondary"
					rounded="24"
				>
					<Stack
						align="center"
						justify="center"
						direction="column"
						gap="4"
						py="16"
					>
						<Icon
							icon="tabler:cloud-upload"
							width="32"
							height="32"
							color="icon.secondary"
						/>
						<Text
							fontSize="14"
							color="fg.muted"
						>
							Drag and drop files here
						</Text>
						<Stack
							align="center"
							gap="4"
							justify="center"
						>
							<Separator
								w="full"
								orientation="horizontal"
							/>
							<Text
								fontSize="14"
								color="fg.tertiary"
							>
								or
							</Text>
							<Separator
								w="full"
								orientation="horizontal"
							/>
						</Stack>
						<FileUpload.Trigger asChild>
							<Button
								size="xs"
								rounded="24"
								variant="surface"
							>
								Browse
							</Button>
						</FileUpload.Trigger>
					</Stack>
				</FileUpload.Dropzone>
				<FileUpload.ItemGroup mt="16">
					<FileUpload.Context>
						{({ acceptedFiles: files }) =>
							files.map((file, idx) => (
								<FileUpload.Item
									asChild
									key={idx.toString()}
									file={file}
								>
									<Tile
										pr="6"
										gap="8"
										rounded="24"
										selected={false}
										orientation="horizontal"
									>
										<Icon
											icon="tabler:file"
											width="16"
											height="16"
										/>
										<Text
											asChild
											w="8rem"
											truncate
										>
											<FileUpload.ItemName />
										</Text>
										<FileUpload.ItemSizeText />
										<FileUpload.ItemDeleteTrigger asChild>
											<Button
												iconOnly
												size="2xs"
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
								</FileUpload.Item>
							))
						}
					</FileUpload.Context>
				</FileUpload.ItemGroup>
				<FileUpload.HiddenInput />
			</FileUpload.Root>
		</Container>
	);
};
