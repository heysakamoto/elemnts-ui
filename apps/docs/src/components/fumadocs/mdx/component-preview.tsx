import {
	Alert,
	Box,
	Button,
	Collapsible,
	css,
	Icon,
	Stack,
	Surface,
} from "@moto-ui/react";
import { useState } from "react";
import { getDemo } from "@/demos";
import { ComponentPreviewSource } from "./component-preview-source";
import { CopyButton } from "./copy-button";

const styles = css.raw({
	"& code": {
		fontSize: "12",
		lineHeight: "2",
		display: "block",
		fontFamily: "mono",
		"& span > span": {
			color: "var(--shiki-light)",
			_dark: {
				color: "var(--shiki-dark)",
			},
		},
	},
});

type ComponentPreviewProps = {
	name: string;
	hideCode?: boolean;
	description?: string;
};
export function ComponentPreview(props: ComponentPreviewProps) {
	const { name } = props;
	const demo = getDemo(name);
	const [open, setOpen] = useState(false);

	return (
		<Surface
			p="2"
			my="32"
			delta={1}
			rounded="24"
		>
			<Surface.Content
				p="24"
				minH="20rem"
				align="center"
				justify="center"
			>
				{demo ? <demo.component /> : <Empty />}
			</Surface.Content>
			<Surface.Footer position="relative">
				<ComponentPreviewSource name={name}>
					{({ code, raw }) => {
						return (
							<Collapsible
								open={open}
								scrollbar="hidden"
								collapsedHeight="80px"
								onOpenChange={(e) => setOpen(e.open)}
							>
								<Surface
									p="2"
									gap="2"
									w="fit"
									delta={1}
									zIndex="1"
									left="50%"
									bottom="6"
									align="center"
									rounded="full"
									direction="row"
									position="absolute"
									transform="translateX(-50%)"
								>
									<Collapsible.Trigger asChild>
										<Button
											size="sm"
											rounded="full"
											fontSize="13"
											variant="surface"
											colorPalette="neutral"
										>
											{open ? "Hide" : "Expand"} code
										</Button>
									</Collapsible.Trigger>
									<CopyButton
										position="static"
										value={raw}
									/>
								</Surface>
								<Collapsible.Content
									px="12"
									_open={{ animation: "none" }}
									_closed={{ animation: "none" }}
								>
									<Stack
										py="12"
										maxH="16rem"
										scrollbar="hidden"
										direction="column"
										position="relative"
										overflow={open ? "auto" : "hidden"}
									>
										<Box
											css={styles}
											dangerouslySetInnerHTML={{ __html: code }}
										/>
									</Stack>
								</Collapsible.Content>
							</Collapsible>
						);
					}}
				</ComponentPreviewSource>
			</Surface.Footer>
		</Surface>
	);
}

function Empty() {
	return (
		<Surface
			px="12"
			py="10"
			w="fit"
			delta={0}
			rounded="24"
		>
			<Alert colorPalette="warning">
				<Alert.Media>
					<Icon
						icon="tabler:alert-triangle"
						width={16}
						height={16}
					/>
				</Alert.Media>
				<Alert.Title
					fontSize="14"
					color="colorPalette.primary"
				>
					Component not found.
				</Alert.Title>
			</Alert>
		</Surface>
	);
}
