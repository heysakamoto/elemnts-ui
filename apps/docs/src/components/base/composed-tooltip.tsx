import { Portal, Surface, Text, Tooltip } from "@moto-ui/react";
import type { ReactNode } from "react";

type ComposedTooltipProps = {
	trigger: ReactNode;
	content?: ReactNode;
};
export function ComposedTooltip({ trigger, content }: ComposedTooltipProps) {
	return (
		<Tooltip
			openDelay={100}
			closeDelay={100}
			lazyMount
			unmountOnExit
		>
			<Tooltip.Trigger asChild>{trigger}</Tooltip.Trigger>
			<Portal>
				<Tooltip.Positioner>
					<Tooltip.Content asChild>
						<Surface
							py="6"
							w="fit"
							px="10"
							delta={1}
							rounded="24"
							shadowLevel={2}
						>
							<Text
								fontSize="12"
								lineHeight="1"
								letterSpacing="sm"
								color="fg.primary"
							>
								{content}
							</Text>
						</Surface>
					</Tooltip.Content>
				</Tooltip.Positioner>
			</Portal>
		</Tooltip>
	);
}
