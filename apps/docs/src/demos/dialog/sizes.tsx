import {
	Button,
	Container,
	Dialog,
	Portal,
	SegmentGroup,
	Stack,
	Surface,
} from "@moto-ui/react";
import { useState } from "react";

const sizes = ["xs", "sm", "md", "lg", "xl"];
type Size = Dialog["RootProps"]["size"];

export function Sizes() {
	const [value, setValue] = useState("md");

	return (
		<Container>
			<Stack
				direction="column"
				align="center"
				gap="16"
			>
				<SegmentGroup
					orientation="horizontal"
					size="xs"
					fontFamily="mono"
					value={value}
					onValueChange={(e) => setValue(e.value ?? "")}
				>
					<SegmentGroup.Indicator />
					{sizes.map((size) => (
						<SegmentGroup.Item
							key={size}
							value={size}
						>
							<SegmentGroup.ItemText>{size}</SegmentGroup.ItemText>
							<SegmentGroup.ItemHiddenInput />
						</SegmentGroup.Item>
					))}
				</SegmentGroup>
				<Dialog size={value as Size}>
					<Dialog.Trigger asChild>
						<Button
							rounded="24"
							variant="surface"
							colorPalette="neutral"
							size="sm"
						>
							Open
						</Button>
					</Dialog.Trigger>
					<Portal>
						<Dialog.Backdrop />
						<Dialog.Positioner>
							<Dialog.Content asChild>
								<Surface
									p="16"
									delta={1}
									rounded="24"
								>
									{" "}
									<Surface.Content mt="4">
										<Dialog.Title>Approve</Dialog.Title>
										<Dialog.Description>
											Authorize a third-party service to access all media files
											in your account—such as photos, videos, and other stored
											items.
										</Dialog.Description>
									</Surface.Content>
									<Surface.Addon
										mt="16"
										direction="row"
										gap="8"
									>
										<Dialog.CloseTrigger asChild>
											<Button
												variant="tertiary"
												colorPalette="neutral"
											>
												Deny
											</Button>
										</Dialog.CloseTrigger>
										<Dialog.CloseTrigger asChild>
											<Button variant="primary">Allow</Button>
										</Dialog.CloseTrigger>
									</Surface.Addon>
								</Surface>
							</Dialog.Content>
						</Dialog.Positioner>
					</Portal>
				</Dialog>
			</Stack>
		</Container>
	);
}
