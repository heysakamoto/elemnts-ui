import {
	Button,
	Combobox,
	type ComboboxInputValueChangeDetails,
	type ComboboxValueChangeDetails,
	createListCollection,
	Dialog,
	Icon,
	InputGroup,
	Item,
	Kbd,
	Portal,
	Presence,
	Separator,
	Spinner,
	Surface,
	VirtualList,
} from "@moto-ui/react";
import { useHotkeys } from "@tanstack/react-hotkeys";
import { useNavigate } from "@tanstack/react-router";
import type { SortedResult } from "fumadocs-core/search";
import { useDocsSearch } from "fumadocs-core/search/client";
import {
	createContext,
	type PropsWithChildren,
	useContext,
	useState,
} from "react";

export function useSearch() {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	const { search, setSearch, query } = useDocsSearch({
		type: "fetch",
		allowEmpty: true,
	});

	useHotkeys([
		{
			hotkey: "Mod+K",
			callback: (event) => {
				event.preventDefault();
				setOpen(true);
			},
		},
	]);

	const collection = createListCollection({
		items: Array.isArray(query.data) ? query.data : [],
		itemToValue: (item) => item.id,
		itemToString: (item) => item.url,
	});

	const onInputValueChange = (details: ComboboxInputValueChangeDetails) => {
		switch (true) {
			case details.inputValue.length === 0: {
				return setSearch("");
			}
			case details.inputValue.length < 2: {
				return;
			}
			default: {
				return setSearch(details.inputValue);
			}
		}
	};

	const onValueChange = (details: ComboboxValueChangeDetails) => {
		const item = collection.items.find((item) => item.id === details.value[0]);
		if (item) {
			navigate({ to: item.url });
		}
		setTimeout(() => setOpen(false), 0);
	};

	return {
		open,
		query,
		search,
		setOpen,
		setSearch,
		collection,
		onValueChange,
		onInputValueChange,
	};
}

const SearchContext = createContext<ReturnType<typeof useSearch> | null>(null);

export function useSearchContext() {
	const context = useContext(SearchContext);
	if (!context) {
		throw new Error("useSearchContext must be used within a SearchProvider");
	}
	return context;
}

type SearchProviderProps = PropsWithChildren<{
	value: ReturnType<typeof useSearch>;
}>;

export function SearchProvider(props: SearchProviderProps) {
	const { children, value } = props;

	return (
		<SearchContext.Provider value={value}>{children}</SearchContext.Provider>
	);
}

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
	const { query } = useSearchContext();

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
				variant="secondary"
			>
				<InputGroup.Addon pl="10">
					<Icon
						width={20}
						height={20}
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
					<Presence present={query.isLoading}>
						<Spinner
							size="sm"
							color="icon.tertiary"
						>
							<Icon icon="tabler:loader-2" />
						</Spinner>
					</Presence>
				</InputGroup.Addon>
			</InputGroup>
			<Dialog.CloseTrigger asChild>
				<Button
					iconOnly
					rounded="full"
					variant="ghost"
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

	switch (item.type) {
		case "page": {
			return (
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
			);
		}
		case "heading": {
			return (
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
			);
		}
		default: {
			return (
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
			);
		}
	}
}

export function SearchResults() {
	const { collection } = useSearchContext();

	if (collection.items.length === 0)
		return (
			<Surface
				flex="1"
				delta={0}
				elevated={false}
				justify="center"
				align="center"
			>
				<Surface.Header>
					<Icon
						width={32}
						height={32}
						color="icon.secondary"
						icon="tabler:face-id-error"
					/>
				</Surface.Header>
				<Surface.Content
					flex="0"
					mt="12"
					gap="6"
				>
					<Surface.Title
						fontSize="16"
						justify="center"
					>
						No results found
					</Surface.Title>
					<Surface.Description textAlign="center">
						Try searching for something else.
					</Surface.Description>
				</Surface.Content>
			</Surface>
		);

	return (
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
	);
}

type SearchProps = {
	children: (props: { onOpen: () => void }) => React.ReactNode;
};

export function Search(props: SearchProps) {
	const { children } = props;
	const search = useSearch();

	return (
		<SearchProvider value={search}>
			<Dialog
				open={search.open}
				size={{ base: "full" }}
				onEscapeKeyDown={() => search.setSearch("")}
				onOpenChange={(details) => search.setOpen(details.open)}
			>
				{children({ onOpen: () => search.setOpen(true) })}
				<Portal>
					<Dialog.Backdrop />
					<Dialog.Positioner>
						<Dialog.Content asChild>
							<Surface
								asChild
								delta={1}
							>
								<Combobox
									selectionBehavior="clear"
									inputValue={search.search}
									collection={search.collection}
									onValueChange={search.onValueChange}
									onInputValueChange={search.onInputValueChange}
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
		</SearchProvider>
	);
}
