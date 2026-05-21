import {
	Button,
	Container,
	FileUpload,
	Icon,
	Stack,
	Text,
	Tile,
} from "@moto-ui/react";

export const Basic = () => {
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
							rounded="24"
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
									<Tile
										pr="6"
										gap="8"
										size="xs"
										align="center"
										rounded="24"
										selected={false}
										orientation="horizontal"
									>
										<Icon
											icon="tabler:file"
											width={16}
											height={16}
										/>
										<Text
											asChild
											truncate
											w="8rem"
										>
											<FileUpload.ItemName />
										</Text>
										<FileUpload.ItemSizeText fontSize="12" />
										<FileUpload.ItemDeleteTrigger asChild>
											<Button
												iconOnly
												colorPalette="destructive"
												variant="surface"
												size="2xs"
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
