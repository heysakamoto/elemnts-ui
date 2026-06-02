import {
	Anchor,
	Button,
	Icon,
	List,
	Menu,
	Portal,
	Stack,
	Surface,
	Text,
	useLockedDisclosure,
	WheelPicker,
} from "@moto-ui/react";
import { css } from "@moto-ui/styled-system/css";
import { Link, useNavigate } from "@tanstack/react-router";
import { useActiveHeadings } from "@/hooks/use-active-headings";
import { stripHash } from "@/utils/url";
import { useDocsLayoutContext } from "./client";

function useToc() {
	const {
		state: { toc },
	} = useDocsLayoutContext();

	const hashes = toc.map((t) => stripHash(t.url));

	const { isActive } = useActiveHeadings(hashes);

	const current = toc.find((item) => isActive(stripHash(item.url))) ?? toc[0];

	const options = toc.map((item) => ({
		value: item.url,
		label: item.title,
	}));

	return {
		toc,
		current,
		options,
		isActive,
	};
}

function useTocNavigate() {
	const navigate = useNavigate();

	return (hash: string) => {
		navigate({
			to: ".",
			hash: stripHash(hash),
		});
	};
}

function Root() {
	const { toc, isActive } = useToc();

	return (
		<List direction="column">
			<Text
				mb="8"
				as="strong"
				fontWeight="500"
			>
				On this page
			</Text>
			{toc.map((item) => {
				const itemHash = stripHash(item.url);
				const isInView = isActive(itemHash);

				return (
					<List.Item key={itemHash}>
						<Anchor
							py="6"
							asChild
							unstyled
							w="12rem"
							fontSize="13"
							lineHeight="1"
							display="block"
							overflowX="hidden"
							scrollbar="hidden"
							color="fg.tertiary"
							whiteSpace="nowrap"
							textOverflow="ellipsis"
							css={{
								_hover: {
									color: "fg.secondary",
								},
								"&:is([data-current])": {
									color: "fg.primary",
								},
								"&:not([data-current])": {
									_hover: {
										color: "fg.secondary",
									},
								},
							}}
						>
							<Link
								to="."
								hash={itemHash}
								activeOptions={{ includeHash: true }}
								data-current={isInView ? true : undefined}
							>
								{item.title}
							</Link>
						</Anchor>
					</List.Item>
				);
			})}
		</List>
	);
}

function Mobile() {
	const { current } = useToc();
	const { open, setOpen } = useLockedDisclosure();
	const { next, previous } = useDocsLayoutContext();

	return (
		<Menu
			open={open}
			onOpenChange={(d) => setOpen(d.open)}
			positioning={{ sameWidth: true, strategy: "fixed" }}
		>
			<Stack
				px="12"
				w="full"
				gap="16"
				zIndex="2"
				left="50%"
				bottom="12"
				hideFrom="md"
				align="center"
				position="fixed"
				colorPalette="neutral"
				transform="translateX(-50%)"
			>
				<Button
					asChild
					size="lg"
					iconOnly
					rounded="full"
					variant="surface"
					disabled={!previous}
					aria-label="Go to previous page"
					style={{ backdropFilter: "blur(10px)" }}
				>
					<Link
						to={previous?.url}
						preload="intent"
					>
						<Icon
							width={18}
							height={18}
							icon="tabler:chevron-left"
						/>
					</Link>
				</Button>

				<Surface
					delta={1}
					minH="48"
					flexGrow="1"
					rounded="24"
				>
					<Menu.Trigger asChild>
						<Surface.Title
							flex="1"
							fontSize="13"
							justify="center"
						>
							{current?.title ?? "On this page"}
						</Surface.Title>
					</Menu.Trigger>
				</Surface>

				<Button
					asChild
					size="lg"
					iconOnly
					rounded="full"
					variant="surface"
					disabled={!next}
					aria-label="Go to next page"
					style={{ backdropFilter: "blur(10px)" }}
				>
					<Link
						to={next?.url}
						preload="intent"
					>
						<Icon
							icon="tabler:chevron-right"
							width={18}
							height={18}
						/>
					</Link>
				</Button>
			</Stack>

			<Portal>
				<Menu.Positioner>
					<Menu.Content asChild>
						<Surface
							p="6"
							delta={1}
							rounded="24"
							colorPalette="neutral"
						>
							<Picker />
						</Surface>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu>
	);
}

function Picker() {
	const { current, toc } = useToc();
	const navigate = useTocNavigate();
	const defaultValue = current?.url ?? toc[0]?.url;

	if (!defaultValue)
		return (
			<Surface
				delta={0}
				rounded="0"
				elevated={false}
			>
				<Surface.Content
					gap="6"
					minH="14rem"
					align="center"
					justify="center"
				>
					<Surface.Title
						justify="center"
						fontSize="14"
					>
						Nothing to see here
					</Surface.Title>
					<Surface.Description>
						There are no sections to navigate to.
					</Surface.Description>
				</Surface.Content>
			</Surface>
		);

	const options = toc.map((node) => ({
		value: node.url,
		label: node.title,
	}));

	return (
		<WheelPicker variant="secondary">
			<WheelPicker.Control>
				<WheelPicker.Options
					options={options}
					optionItemHeight={32}
					defaultValue={defaultValue}
					onValueChange={(v) => {
						navigate(v);
					}}
					classNames={{
						optionItem: css({
							fontSize: "13",
						}),
						highlightWrapper: css({
							rounded: "12",
						}),
						highlightItem: css({
							fontSize: "13",
							fontWeight: "400",
						}),
					}}
				/>
			</WheelPicker.Control>
		</WheelPicker>
	);
}

export const DocsLayoutToc = Object.assign(Root, {
	Mobile,
});
