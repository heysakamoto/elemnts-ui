import {
	Combobox,
	EmptyState,
	useComboboxContext,
	VirtualList,
} from "@moto-ui/react";
import { Fragment } from "react/jsx-runtime";

import { SearchResultItem } from "./result-item";

export function SearchResult() {
	const { collection } = useComboboxContext();

	return (
		<Fragment>
			<Combobox.Empty asChild>
				<EmptyState
					my="64"
					flexGrow="1"
					display="flex"
					align="center"
					justify="center"
					direction="column"
				>
					<EmptyState.Content>
						<EmptyState.Title
							fontSize="16"
							justify="center"
						>
							No results found
						</EmptyState.Title>
						<EmptyState.Description
							mt="8"
							textAlign="center"
						>
							Try searching for something else.
						</EmptyState.Description>
					</EmptyState.Content>
				</EmptyState>
			</Combobox.Empty>
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
