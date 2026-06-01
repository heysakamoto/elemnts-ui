import {
	Button,
	Group,
	Icon,
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

function TocRoot() {
	const { toc, isActive } = useToc();

	return (
		<Stack direction="column">
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
					<Link
						to="."
						key={itemHash}
						hash={itemHash}
						activeOptions={{ includeHash: true }}
						data-current={isInView ? true : undefined}
						className={css({
							py: "6",
							w: "12rem",
							fontSize: "14",
							lineHeight: "1",
							display: "block",
							color: "fg.tertiary",
							whiteSpace: "nowrap",
							overflowX: "hidden",
							scrollbar: "hidden",
							textOverflow: "ellipsis",
							"&:is([data-current])": {
								color: "fg.primary",
							},
							"&:not([data-current])": {
								_hover: {
									color: "fg.secondary",
								},
							},
						})}
					>
						{item.title}
					</Link>
				);
			})}
		</Stack>
	);
}

function TocMobile() {
	const { current } = useToc();
	const { open, setOpen } = useLockedDisclosure();
	const { next, previous } = useDocsLayoutContext();

	return (
		<Menu
			open={open}
			onOpenChange={(d) => setOpen(d.open)}
			positioning={{ sameWidth: true, strategy: "fixed" }}
		>
			<Group
				px="12"
				w="full"
				gap="16"
				zIndex="2"
				left="50%"
				bottom="12"
				align="center"
				position="fixed"
				transform="translateX(-50%)"
			>
				<Button
					asChild
					size="lg"
					iconOnly
					rounded="full"
					variant="surface"
					disabled={!previous}
					colorPalette="neutral"
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
					colorPalette="neutral"
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
			</Group>

			<Portal>
				<Menu.Positioner>
					<Menu.Content asChild>
						<Surface
							p="6"
							delta={1}
							rounded="24"
						>
							<TocWheelPicker />
						</Surface>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu>
	);
}

function TocWheelPicker() {
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
		<WheelPicker
			variant="secondary"
			colorPalette="neutral"
		>
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

export const Toc = Object.assign(TocRoot, {
	Mobile: TocMobile,
});
