import {
	Box,
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

export function SearchEmpty() {
	return (
		<Combobox.Empty>
			<Surface
				py="12"
				delta={0}
				elevated={false}
				align="center"
			>
				<Surface.Description>No results found.</Surface.Description>
			</Surface>
		</Combobox.Empty>
	);
}

export function SearchFooter() {
	return (
		<Surface.Footer
			py="8"
			px="12"
			rounded="0"
			align="center"
		>
			<Kbd
				size="xs"
				fontSize="12"
				variant="tertiary"
				colorPalette="neutral"
				color="fg.secondary"
			>
				<Kbd.Item rounded="8">⏎</Kbd.Item>
				Enter
				<Kbd.Item rounded="8">↑</Kbd.Item>
				Up
				<Kbd.Item rounded="8">↓</Kbd.Item>
				Down
			</Kbd>
		</Surface.Footer>
	);
}

export function SearchInput() {
	const { query } = useSearchContext();

	return (
		<Surface.Header
			m="8"
			top="0"
			zIndex="2"
			position="sticky"
		>
			<InputGroup
				size="lg"
				rounded="20"
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
						fontSize="14"
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
	text: "tabler:search",
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
				fontSize="13"
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

	return (
		<Combobox.Content
			p="8"
			h="20rem"
			ref={parentRef}
			overflow="scroll"
			scrollbar="hidden"
			css={{ "&:is([data-empty])": { display: "none" } }}
		>
			{collection.items.length > 0 && (
				<Surface.Description
					mb="2"
					px="12"
					fontSize="12"
					color="fg.tertiary"
				>
					Found {collection.items.length} results
				</Surface.Description>
			)}
			<Box
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
			</Box>
		</Combobox.Content>
	);
}

export function SearchDialog() {
	return (
		<Portal>
			<Dialog.Backdrop />
			<Dialog.Positioner>
				<Dialog.Content asChild>
					<Surface
						delta={1}
						rounded="28"
					>
						<SearchInput />
						<SearchResults />
						<SearchEmpty />
						<Separator
							orientation="horizontal"
							variant="tertiary"
						/>
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
				onValueChange={search.onValueChange}
				collection={search.collection as any}
				onInputValueChange={search.onInputValueChange}
			>
				<Dialog
					size="sm"
					unmountOnExit
					open={search.open}
					onOpenChange={(details) => search.setOpen(details.open)}
				>
					{children({ onOpen: () => search.setOpen(true) })}
					<SearchDialog />
				</Dialog>
			</Combobox>
		</SearchProvider>
	);
}
