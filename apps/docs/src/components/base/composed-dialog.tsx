import { Button, Dialog, Icon, Portal, Surface } from "@moto-ui/react";
import type { ReactNode } from "react";

type ComposedDialogProps = {
	fullHeight?: boolean;
	trigger: (props: { onOpen: () => void }) => ReactNode;
	content: ((props: { onClose: () => void }) => ReactNode) | ReactNode;
};
export function ComposedDialog(props: ComposedDialogProps) {
	const { fullHeight, trigger, content } = props;

	return (
		<Dialog
			modal
			lazyMount
			size="full"
			unmountOnExit
			open={open}
			placement="bottom"
		>
			<Dialog.Context>
				{(ctx) => {
					return trigger({ onOpen: () => ctx.setOpen(true) });
				}}
			</Dialog.Context>
			<Portal>
				<Dialog.Backdrop />
				<Dialog.Positioner pt="20">
					<Dialog.Content asChild>
						<Surface
							delta={1}
							roundedTop="24"
							scrollbar="hidden"
							h={fullHeight ? "full" : "40vh"}
						>
							<Surface.Header
								m="8"
								top="8"
								justify="end"
								align="center"
								direction="row"
								position="sticky"
							>
								<Dialog.CloseTrigger asChild>
									<Button
										size="sm"
										iconOnly
										rounded="full"
										variant="surface"
										colorPalette="neutral"
										css={{ "--btn-color": "colors.fg.secondary" }}
									>
										<Icon
											width={18}
											height={18}
											icon="tabler:x"
										/>
									</Button>
								</Dialog.CloseTrigger>
							</Surface.Header>
							<Surface.Content
								px="8"
								pb="8"
								overflow="auto"
							>
								<Dialog.Context>
									{(ctx) => {
										return typeof content === "function"
											? content({ onClose: () => ctx.setOpen(false) })
											: content;
									}}
								</Dialog.Context>
							</Surface.Content>
						</Surface>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog>
	);
}
