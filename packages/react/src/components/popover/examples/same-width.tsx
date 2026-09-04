import {
	Button,
	Container,
	DataList,
	Popover,
	Portal,
	Surface,
} from "@moto-ui/react";
import { DataListItem } from "./basic";

export default function SameWidth() {
	return (
		<Container maxW="24rem">
			<Popover positioning={{ sameWidth: true }}>
				<Popover.Trigger asChild>
					<Button
						fullWidth
						variant="surface"
					>
						Open
					</Button>
				</Popover.Trigger>
				<Portal>
					<Popover.Positioner>
						<Popover.Content asChild>
							<Surface
								delta={1}
								rounded="12"
								w="24rem"
								colorPalette="neutral"
							>
								<Surface.Header
									px="12"
									pt="12"
								>
									<Surface.Title>Dimensions</Surface.Title>
								</Surface.Header>
								<Surface.Content p="12">
									<DataList
										orientation="horizontal"
										gap="6"
									>
										<DataListItem
											label="Width"
											defaultValue="640"
										/>
										<DataListItem label="Max. Width" />
										<DataListItem
											label="Height"
											defaultValue="64"
										/>
										<DataListItem label="Max. Height" />
									</DataList>
								</Surface.Content>
							</Surface>
						</Popover.Content>
					</Popover.Positioner>
				</Portal>
			</Popover>
		</Container>
	);
}
