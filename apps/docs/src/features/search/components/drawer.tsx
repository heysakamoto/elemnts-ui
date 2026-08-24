import {
	Combobox,
	type ComboboxInputValueChangeDetails,
	type ComboboxValueChangeDetails,
	createListCollection,
	Drawer,
	Separator,
	Surface,
} from "@moto-ui/react";
import { useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";

import { useSearchContext } from "./client";
import { SearchFooter } from "./footer";
import { SearchHeader } from "./header";
import { SearchResult } from "./result";

export function SearchDrawer() {
	const navigate = useNavigate();
	const { setOpen, open, setSearch, query } = useSearchContext();
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
							<SearchResult />
							<Separator orientation="horizontal" />
							<SearchFooter />
						</Combobox>
					</Surface>
				</Drawer.Content>
			</Drawer.Positioner>
		</Drawer>
	);
}
