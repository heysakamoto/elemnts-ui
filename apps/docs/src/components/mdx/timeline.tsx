import { Chip, Separator, Text, Timeline } from "@moto-ui/react";
import type { PropsWithChildren, ReactNode } from "react";

export function TimelineRoot(props: Timeline["Props"]) {
	return (
		<Timeline
			mt="32"
			{...props}
		/>
	);
}

export function TimelineItem(
	props: PropsWithChildren<{ index: number; title: ReactNode }>,
) {
	const { children, title, index } = props;

	return (
		<Timeline.Item>
			<Timeline.Connector>
				<Timeline.Separator asChild>
					<Separator orientation="vertical" />
				</Timeline.Separator>
				<Timeline.Indicator asChild>
					<Chip
						iconOnly
						size="xs"
						variant="secondary"
					>
						{index}
					</Chip>
				</Timeline.Indicator>
			</Timeline.Connector>
			<Timeline.Content gap="0">
				<Text
					as="strong"
					fontSize={[16, 18]}
				>
					{title}
				</Text>
				<Text>{children}</Text>
			</Timeline.Content>
		</Timeline.Item>
	);
}
