import {
	Button,
	ButtonGroup,
	Dialog,
	For,
	Icon,
	Portal,
	Surface,
} from "@moto-ui/react";
import { Link } from "@tanstack/react-router";

import { urls } from "./constants";

export function RootLayoutMobileNav() {
	return (
		<Dialog placement="bottom">
			<Dialog.Trigger asChild>
				<Button
					size="sm"
					iconOnly
					hideFrom="lg"
					variant="ghost"
				>
					<Icon
						width={16}
						height={16}
						icon="tabler:layout-sidebar"
					/>
				</Button>
			</Dialog.Trigger>
			<Portal>
				<Dialog.Positioner>
					<Dialog.Backdrop />
					<Dialog.Content asChild>
						<Surface
							delta={1}
							rounded="24"
							colorPalette="neutral"
						>
							<Surface.Content p="12">
								<ButtonGroup
									size="xl"
									fullWidth
									variant="ghost"
									orientation="vertical"
								>
									<For each={urls}>
										{(url) => (
											<ButtonGroup.Item
												asChild
												h="56"
												rounded="16"
												fontSize="16"
												key={url.id}
												justify="start"
											>
												<Link
													to={url.url}
													target="_blank"
												>
													{url.label}
												</Link>
											</ButtonGroup.Item>
										)}
									</For>
								</ButtonGroup>
							</Surface.Content>
						</Surface>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog>
	);
}
