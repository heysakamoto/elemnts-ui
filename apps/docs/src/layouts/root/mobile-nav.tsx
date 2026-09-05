import {
	Button,
	Dialog,
	For,
	Group,
	Icon,
	Item,
	Portal,
	Surface,
	VisuallyHidden,
} from "@elemnts-ui/react";
import { Link } from "@tanstack/react-router";

import { ROOTLAYOUT_URLS } from "./constants";

export function RootLayoutMobileNav() {
	return (
		<Dialog placement="bottom">
			<Dialog.Trigger asChild>
				<Button size="sm" iconOnly hideFrom="md" variant="surface">
					<VisuallyHidden>Open mobile menu</VisuallyHidden>
					<Icon width={16} height={16} icon="tabler:menu" />
				</Button>
			</Dialog.Trigger>
			<Portal>
				<Dialog.Positioner>
					<Dialog.Backdrop />
					<Dialog.Content asChild>
						<Surface delta={1} rounded="24" colorPalette="neutral">
							<Surface.Content p="8">
								<Group orientation="vertical">
									<For each={ROOTLAYOUT_URLS}>
										{(url) => (
											<Item
												asChild
												size="xl"
												fontSize="16"
												key={url.id}
												flexShrink={0}
												fontWeight="medium"
												variant="secondary"
											>
												<Link to={url.url} target="_blank">
													{url.label}
												</Link>
											</Item>
										)}
									</For>
								</Group>
							</Surface.Content>
						</Surface>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog>
	);
}
