import {
	Combobox,
	type ComboboxInputValueChangeDetails,
	type ComboboxValueChangeDetails,
	createListCollection,
	Drawer,
	EmptyState,
	Icon,
	InputGroup,
	Item,
	Kbd,
	Separator,
	Show,
	Spinner,
	Surface,
	useComboboxContext,
	VirtualList,
} from "@moto-ui/react";
import { useNavigate } from "@tanstack/react-router";
import type { SortedResult } from "fumadocs-core/search";
import { Fragment, useMemo } from "react";

import { useDocsLayoutContext } from "./client";

export function SearchFooter() {
	return (
		<Surface.Footer
			py="8"
			px="16"
		>
			<Kbd
				iconOnly
				gap="16"
				size="sm"
				fontSize="12"
				variant="tertiary"
				color="fg.secondary"
			>
				<Kbd.ItemGroup>
					<Kbd.Item
						rounded="8"
						fontSize="13"
					>
						<Icon
							width={14}
							height={14}
							icon="boxicons:enter"
						/>
					</Kbd.Item>
					<Kbd.ItemGroupText>to select</Kbd.ItemGroupText>
				</Kbd.ItemGroup>
				<Kbd.ItemGroup fontSize="13">
					<Kbd.Item rounded="8">
						<Icon
							width={14}
							height={14}
							icon="boxicons:arrow-down"
						/>
					</Kbd.Item>
					<Kbd.Item rounded="8">
						<Icon
							width={14}
							height={14}
							icon="boxicons:arrow-up"
						/>
					</Kbd.Item>
					<Kbd.ItemGroupText>to navigate</Kbd.ItemGroupText>
				</Kbd.ItemGroup>
			</Kbd>
		</Surface.Footer>
	);
}

export function SearchHeader() {
	const { query } = useDocsLayoutContext();

	return (
		<Surface.Header
			px="12"
			gap="12"
			align="center"
			direction="row"
		>
			<InputGroup
				size="lg"
				rounded="20"
			>
				<InputGroup.Addon pl="10">
					<Icon
						width={16}
						height={16}
						icon="tabler:search"
						color="icon.secondary"
					/>
				</InputGroup.Addon>
				<Combobox.Input asChild>
					<InputGroup.Input
						px="8"
						fontSize="16"
						placeholder="Search the docs..."
					/>
				</Combobox.Input>
				<InputGroup.Addon pr="8">
					<Show
						fallback={null}
						when={query?.isLoading}
					>
						<Spinner
							size="sm"
							color="icon.tertiary"
						>
							<Icon icon="tabler:loader-2" />
						</Spinner>
					</Show>
				</InputGroup.Addon>
			</InputGroup>
		</Surface.Header>
	);
}

const iconMap = {
	text: "tabler:dots",
	heading: "tabler:hash",
	page: "tabler:arrow-up-right",
};

type SearchResultItemProps = {
	item: SortedResult<string>;
};

function SearchResultItem(props: SearchResultItemProps) {
	const item = props.item;
	const html = item.content;
	const icon = iconMap[item.type];

	return (
		<Fragment>
			<Show when={item.type === "page"}>
				<Item
					h="36"
					gap="4"
					size="lg"
					rounded="16"
					variant="secondary"
					_notHover={{ color: "fg.secondary" }}
				>
					<Icon
						ml="-2"
						width={14}
						height={14}
						icon={icon}
					/>
					<Combobox.ItemText
						lineHeight="xs"
						overflow="hidden"
						whiteSpace="nowrap"
						textOverflow="ellipsis"
						css={{
							"& > *": {
								display: "inline",
							},
							"& > mark": {
								fontWeight: 500,
								color: "neutral.primary",
								bgColor: "transparent",
								textDecoration: "underline",
							},
						}}
						dangerouslySetInnerHTML={{
							__html: html,
						}}
					/>
				</Item>
			</Show>
			<Show when={item.type === "heading"}>
				<Item
					h="36"
					size="lg"
					rounded="16"
					variant="secondary"
					_notHover={{ color: "fg.secondary" }}
				>
					<Separator
						h="36"
						mr="8"
						ml="6"
						orientation="vertical"
					/>
					<Icon
						ml="-2"
						width={14}
						height={14}
						icon={icon}
					/>
					<Combobox.ItemText
						lineHeight="xs"
						overflow="hidden"
						whiteSpace="nowrap"
						textOverflow="ellipsis"
						css={{
							"& > *": {
								display: "inline",
							},
							"& > mark": {
								fontWeight: 500,
								bgColor: "transparent",
								color: "neutral.primary",
								textDecoration: "underline",
							},
						}}
						dangerouslySetInnerHTML={{
							__html: html,
						}}
					/>
				</Item>
			</Show>
			<Show when={item.type === "text"}>
				<Item
					h="36"
					size="lg"
					rounded="16"
					variant="secondary"
					_notHover={{ color: "fg.secondary" }}
				>
					<Separator
						h="36"
						mr="8"
						ml="6"
						orientation="vertical"
					/>
					<Icon
						ml="-2"
						width={14}
						height={14}
						icon={icon}
					/>
					<Combobox.ItemText
						lineHeight="xs"
						overflow="hidden"
						whiteSpace="nowrap"
						textOverflow="ellipsis"
						css={{
							"& > *": {
								display: "inline",
							},
							"& > mark": {
								fontWeight: 500,
								color: "neutral.primary",
								bgColor: "transparent",
								textDecoration: "underline",
							},
						}}
						dangerouslySetInnerHTML={{
							__html: html,
						}}
					/>
				</Item>
			</Show>
		</Fragment>
	);
}

export function SearchResults() {
	const { collection } = useComboboxContext();

	return (
		<Fragment>
			<Show when={collection.items.length === 0}>
				<EmptyState
					flexGrow="1"
					display="flex"
					align="center"
					justify="center"
					direction="column"
				>
					<EmptyState.Content>
						<Icon
							width={32}
							height={32}
							color="icon.secondary"
							icon="tabler:face-id-error"
						/>
						<EmptyState.Title
							mt="20"
							fontSize="16"
							justify="center"
						>
							No results yet
						</EmptyState.Title>
						<EmptyState.Description
							mt="8"
							textAlign="center"
						>
							Try searching for something else.
						</EmptyState.Description>
					</EmptyState.Content>
				</EmptyState>
			</Show>
			<Combobox.Content>
				<VirtualList
					p="8"
					estimateSize={() => 36}
					count={collection.items.length}
				>
					<VirtualList.Viewport
						h="89vh"
						scrollbar="hidden"
					>
						<VirtualList.Content>
							{({ item, measureElement }) => {
								const collectionItem = collection.items[item.index]!;

								return (
									<VirtualList.Item
										asChild
										item={item}
										key={item.key}
										ref={measureElement}
									>
										<Combobox.Item
											fontSize="14"
											letterSpacing="sm"
											item={collectionItem}
										>
											<SearchResultItem item={collectionItem} />
										</Combobox.Item>
									</VirtualList.Item>
								);
							}}
						</VirtualList.Content>
					</VirtualList.Viewport>
				</VirtualList>
			</Combobox.Content>
		</Fragment>
	);
}

function SearchRoot() {
	const navigate = useNavigate();
	const { setOpen, open, setSearch, query } = useDocsLayoutContext();
	const items = Array.isArray(query?.data) ? query.data : [];
	const collection = useMemo(
		() =>
			createListCollection({
				items,
				itemToValue: (item) => item.id,
				itemToString: (item) => item.url,
			}),
		[items],
	);

	function handleValueChange(details: ComboboxValueChangeDetails) {
		const item = collection.items.find((item) => item.id === details.value[0]);
		if (item) {
			navigate({ to: item.url });
		}
		setTimeout(() => setOpen(false), 0);
	}

	function handleInputValueChange(details: ComboboxInputValueChangeDetails) {
		setSearch(details.inputValue);
	}

	return (
		<Drawer
			open={open}
			onEscapeKeyDown={() => setSearch("")}
			onOpenChange={(details) => setOpen(details.open)}
		>
			<Drawer.Backdrop />
			<Drawer.Positioner>
				<Drawer.Content asChild>
					<Surface delta={1}>
						<Combobox
							h="full"
							display="flex"
							direction="column"
							colorPalette="neutral"
							collection={collection}
							selectionBehavior="clear"
							onValueChange={handleValueChange}
							onInputValueChange={handleInputValueChange}
						>
							<Drawer.Grabber>
								<Drawer.GrabberIndicator />
							</Drawer.Grabber>
							<SearchHeader />
							<SearchResults />
							<Separator orientation="horizontal" />
							<SearchFooter />
						</Combobox>
					</Surface>
				</Drawer.Content>
			</Drawer.Positioner>
		</Drawer>
	);
}

export const DocsLayoutSearch = Object.assign(SearchRoot, {});
