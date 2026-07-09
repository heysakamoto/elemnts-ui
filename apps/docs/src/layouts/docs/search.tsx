import {
	Button,
	Combobox,
	type ComboboxInputValueChangeDetails,
	type ComboboxValueChangeDetails,
	createListCollection,
	Dialog,
	EmptyState,
	Icon,
	InputGroup,
	Item,
	Kbd,
	Portal,
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
		<Surface.Footer>
			<Surface
				py="8"
				px="12"
				delta={5}
				rounded="0"
				elevated={false}
			>
				<Kbd
					gap="16"
					size="sm"
					fontSize="12"
					variant="tertiary"
					colorPalette="neutral"
					color="fg.secondary"
				>
					<Kbd.ItemGroup>
						<Kbd.Item rounded="8">
							<Icon
								width={14}
								height={14}
								icon="boxicons:enter"
							/>
						</Kbd.Item>
						<Kbd.ItemGroupText>to select</Kbd.ItemGroupText>
					</Kbd.ItemGroup>
					<Kbd.ItemGroup fontSize="14">
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
			</Surface>
		</Surface.Footer>
	);
}

export function SearchHeader() {
	const { query } = useDocsLayoutContext();

	return (
		<Surface.Header
			py="8"
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
			<Dialog.CloseTrigger asChild>
				<Button
					iconOnly
					size="xl"
					flexShrink={0}
					rounded="full"
					variant="tertiary"
					aria-label="close"
					colorPalette="neutral"
				>
					<Icon
						width={16}
						height={16}
						icon="tabler:x"
					/>
				</Button>
			</Dialog.CloseTrigger>
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
					colorPalette="neutral"
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
					colorPalette="neutral"
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
					colorPalette="neutral"
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

type SearchRootProps = {
	children: React.ReactNode;
};

function SearchRoot({ children }: SearchRootProps) {
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
		<Dialog
			open={open}
			size={{ base: "full" }}
			onEscapeKeyDown={() => setSearch("")}
			onOpenChange={(details) => setOpen(details.open)}
		>
			{children}
			<Portal>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content asChild>
						<Surface
							asChild
							delta={1}
						>
							<Combobox
								collection={collection}
								selectionBehavior="clear"
								onValueChange={handleValueChange}
								onInputValueChange={handleInputValueChange}
							>
								<SearchHeader />
								<SearchResults />
								<SearchFooter />
							</Combobox>
						</Surface>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog>
	);
}

export const DocsLayoutSearch = Object.assign(SearchRoot, {
	Trigger: Dialog.Trigger,
});
