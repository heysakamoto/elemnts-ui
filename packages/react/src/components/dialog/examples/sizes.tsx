import {
	Button,
	ButtonGroup,
	Container,
	Dialog,
	For,
	Portal,
	Surface,
} from "@elemnts-ui/react";

const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

export default function Sizes() {
	return (
		<Container maxW="24rem">
			<ButtonGroup justify="center">
				<For each={sizes}>
					{(size) => (
						<Dialog size={size} key={size}>
							<Dialog.Trigger asChild>
								<Button variant="surface">{size}</Button>
							</Dialog.Trigger>
							<Portal>
								<Dialog.Backdrop />
								<Dialog.Positioner>
									<Dialog.Content asChild>
										<Surface
											p="16"
											delta={1}
											rounded="16"
											colorPalette="neutral"
										>
											<Surface.Content>
												<Dialog.Title>Approve</Dialog.Title>
												<Dialog.Description>
													Authorize a third-party service to access all media
													files in your account—such as photos, videos, and
													other stored items.
												</Dialog.Description>
											</Surface.Content>
											<Surface.Footer mt="16" direction="row" gap="8">
												<ButtonGroup size="sm">
													<Dialog.CloseTrigger asChild>
														<ButtonGroup.Item variant="tertiary">
															Deny
														</ButtonGroup.Item>
													</Dialog.CloseTrigger>
													<Dialog.CloseTrigger asChild>
														<ButtonGroup.Item variant="primary">
															Allow
														</ButtonGroup.Item>
													</Dialog.CloseTrigger>
												</ButtonGroup>
											</Surface.Footer>
										</Surface>
									</Dialog.Content>
								</Dialog.Positioner>
							</Portal>
						</Dialog>
					)}
				</For>
			</ButtonGroup>
		</Container>
	);
}
