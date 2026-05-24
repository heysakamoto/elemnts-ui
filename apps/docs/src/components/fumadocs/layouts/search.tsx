import {
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
} from "@moto-ui/react";
import { useHotkeys } from "@tanstack/react-hotkeys";
import { useNavigate } from "@tanstack/react-router";
import { useVirtualizer } from "@tanstack/react-virtual";
import type { SortedResult } from "fumadocs-core/search";
import { useDocsSearch } from "fumadocs-core/search/client";
import {
	createContext,
	type PropsWithChildren,
	useContext,
	useRef,
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
		setSearch(details.inputValue.length < 2 ? "" : details.inputValue);
	};

	const onValueChange = (details: ComboboxValueChangeDetails) => {
		const item = collection.items.find((item) => item.id === details.value[0]);
		if (item) {
			navigate({ to: item.url });
		}
		setOpen(false);
	};

	return {
		search,
		query,
		setSearch,
		collection,
		onValueChange,
		onInputValueChange,
		open,
		setOpen,
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
					size="xs"
					fontSize="12"
					variant="tertiary"
					colorPalette="neutral"
					color="fg.secondary"
				>
					<Kbd.ItemGroup>
						<Kbd.Item rounded="8">⏎</Kbd.Item>
						<Kbd.ItemGroupText>to select</Kbd.ItemGroupText>
					</Kbd.ItemGroup>
					<Kbd.ItemGroup>
						<Kbd.Item rounded="8">↓</Kbd.Item>
						<Kbd.Item rounded="8">↓</Kbd.Item>
						<Kbd.ItemGroupText>to navigate</Kbd.ItemGroupText>
					</Kbd.ItemGroup>
				</Kbd>
			</Surface>
		</Surface.Footer>
	);
}

export function SearchInput() {
	const { query } = useSearchContext();

	return (
		<Surface.Header>
			<InputGroup
				size="lg"
				rounded="20"
				variant="tertiary"
			>
				<InputGroup.Addon pl="10">
					<Icon
						icon="tabler:search"
						width={16}
						height={16}
						color="icon.secondary"
					/>
				</InputGroup.Addon>
				<Combobox.Input
					asChild
					px="8"
				>
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
		</Surface.Header>
	);
}

const icon = {
	text: "tabler:dots",
	heading: "tabler:hash",
	page: "tabler:arrow-up-right",
};

type SearchResultItemProps = {
	item: SortedResult;
	translateY: number;
};

function SearchResultItem({ item, translateY }: SearchResultItemProps) {
	function Wrapper({ children }: PropsWithChildren) {
		return (
			<Combobox.Item
				asChild
				top="0"
				left="0"
				item={item}
				fontSize="14"
				letterSpacing="sm"
				position="absolute"
				style={{
					transform: `translateY(${translateY}px)`,
				}}
			>
				{children}
			</Combobox.Item>
		);
	}

	switch (item.type) {
		case "page": {
			return (
				<Wrapper>
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
							icon={icon[item.type]}
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
								__html: item.content,
							}}
						/>
					</Item>
				</Wrapper>
			);
		}
		case "heading": {
			return (
				<Wrapper>
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
							icon={icon[item.type]}
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
								__html: item.content,
							}}
						/>
					</Item>
				</Wrapper>
			);
		}
		default: {
			return (
				<Wrapper>
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
							icon={icon[item.type]}
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
								__html: item.content,
							}}
						/>
					</Item>
				</Wrapper>
			);
		}
	}
}

export function SearchResults() {
	const { collection } = useSearchContext();
	const parentRef = useRef<HTMLDivElement>(null);
	const rowVirtualizer = useVirtualizer({
		overscan: 8,
		estimateSize: () => 36,
		count: collection.items.length,
		getScrollElement: () => parentRef.current,
	});

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
		<Combobox.Content
			ref={parentRef}
			position="relative"
			style={{
				height: rowVirtualizer.getTotalSize(),
			}}
		>
			{rowVirtualizer.getVirtualItems().map((vRow) => {
				const item = collection.items[vRow.index]!;
				const key = item.id;

				return (
					<SearchResultItem
						key={key}
						item={item}
						translateY={vRow.start}
					/>
				);
			})}
		</Combobox.Content>
	);
}

export function SearchDialog() {
	return (
		<Portal>
			<Dialog.Backdrop />
			<Dialog.Positioner p="12">
				<Dialog.Content asChild>
					<Surface
						delta={1}
						rounded="24"
					>
						<SearchInput />
						<Surface
							p="8"
							flex="1"
							delta={1}
							rounded="0"
							borderX="none"
							roundedTop="0"
							overflow="scroll"
							scrollbar="hidden"
						>
							<SearchResults />
						</Surface>
						<SearchFooter />
					</Surface>
				</Dialog.Content>
			</Dialog.Positioner>
		</Portal>
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
			<Combobox
				selectionBehavior="clear"
				inputValue={search.search}
				onValueChange={search.onValueChange}
				collection={search.collection as any}
				onInputValueChange={search.onInputValueChange}
			>
				<Dialog
					unmountOnExit
					open={search.open}
					size={{ base: "full" }}
					onEscapeKeyDown={() => search.setSearch("")}
					onOpenChange={(details) => search.setOpen(details.open)}
				>
					{children({ onOpen: () => search.setOpen(true) })}
					<SearchDialog />
				</Dialog>
			</Combobox>
		</SearchProvider>
	);
}
