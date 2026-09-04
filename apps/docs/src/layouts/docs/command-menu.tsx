import {
	Button,
	Combobox,
	createListCollection,
	Dialog,
	For,
	Icon,
	InputGroup,
	Item,
	Portal,
	Separator,
	Show,
	Spinner,
	Surface,
} from "@moto-ui/react";
import { useHotkey } from "@tanstack/react-hotkeys";
import { useNavigate } from "@tanstack/react-router";
import type { SortedResult } from "fumadocs-core/search";
import { useDocsSearch } from "fumadocs-core/search/client";
import { type PropsWithChildren, useMemo } from "react";
import { stripMarkdown } from "@/utils/markdown";
import {
	DocsLayoutCommandMenuContext,
	useDocsLayoutCommandMenu,
} from "./client";

type DocsLayoutCommandMenuProps = PropsWithChildren;

export function DocsLayoutCommandMenu(props: DocsLayoutCommandMenuProps) {
	const { children } = props;
	const navigate = useNavigate();
	const value = useDocsLayoutCommandMenu();
	const { search, setSearch, query } = useDocsSearch({
		delayMs: 200,
		allowEmpty: false,
		type: value.open ? "fetch" : "static",
	});

	useHotkey("Mod+K", () => value.setOpen(true));

	const collection = useMemo(() => {
		const items = Array.isArray(query.data) ? query.data : emptyItems;
		return createListCollection({
			items,
			itemToString: () => search,
			itemToValue: (item) => `${item?.id ?? ""}:${item?.url ?? ""}`,
		});
	}, [query.data]);

	const handleSelect = (details: { value: string[] }) => {
		const selectedValue = details.value[0];
		if (!selectedValue) return;
		const [_, url] = selectedValue.split(":");
		navigate({ to: url });
		requestAnimationFrame(() => value.setOpen(false));
	};

	return (
		<DocsLayoutCommandMenuContext.Provider value={value}>
			<Dialog
				placement="top"
				open={value.open}
				onExitComplete={() => setSearch("")}
				onOpenChange={(details) => value.setOpen(details.open)}
			>
				{children}
				<Portal>
					<Dialog.Positioner>
						<Dialog.Backdrop />
						<Dialog.Content asChild>
							<Surface
								rounded="18"
								colorPalette="neutral"
							>
								<Combobox
									open
									disableLayer
									loopFocus={false}
									placeholder="Search..."
									collection={collection}
									selectionBehavior="preserve"
									onValueChange={handleSelect}
									inputBehavior="autohighlight"
									positioning={{ strategy: "fixed", hideWhenDetached: true }}
									onInputValueChange={(details) =>
										setSearch(details.inputValue)
									}
								>
									<Combobox.Control p="8">
										<InputGroup>
											<InputGroup.Addon
												flexShrink={0}
												color="icon.secondary"
											>
												<Show
													when={query.isLoading}
													fallback={
														<Icon
															width={16}
															height={16}
															icon="tabler:search"
														/>
													}
												>
													<Spinner size="sm">
														<Icon icon="tabler:loader-2" />
													</Spinner>
												</Show>
											</InputGroup.Addon>
											<Combobox.Input asChild>
												<InputGroup.Input
													fontSize="16"
													pl="12"
												/>
											</Combobox.Input>
											<InputGroup.Addon>
												<Combobox.ClearTrigger asChild>
													<Button
														size="xs"
														iconOnly
														variant="ghost"
													>
														<Icon
															icon="tabler:close"
															width={16}
															height={16}
														/>
													</Button>
												</Combobox.ClearTrigger>
											</InputGroup.Addon>
										</InputGroup>
									</Combobox.Control>
									<Separator orientation="horizontal" />
									<Combobox.Content
										p="8"
										maxH="24rem"
										overflow="auto"
									>
										<For each={collection.items}>
											{(item) => {
												const getIcon = () => {
													switch (item.type) {
														case "heading":
															return "tabler:hash";
														case "page":
															return "tabler:file";
														default:
															return "tabler:text-caption";
													}
												};
												return (
													<Combobox.Item
														asChild
														item={item}
														data-type={item.type}
														key={`${item.id}-${item.url}`}
													>
														<Item
															size="md"
															flexShrink={0}
															position="relative"
															variant="secondary"
															css={{
																"& mark": {
																	color: "inherit",
																	bgColor: "transparent",
																},
																"&:not([data-type=page])": {
																	_before: {
																		w: 1,
																		top: 0,
																		left: 20,
																		h: "inherit",
																		content: "''",
																		position: "absolute",
																		bgColor: "stroke.secondary",
																	},
																	"& svg": {
																		ml: 20,
																	},
																},
															}}
														>
															<Icon
																icon={getIcon()}
																width={16}
																height={16}
															/>
															<Combobox.ItemText
																truncate
																dangerouslySetInnerHTML={{
																	__html: stripMarkdown(item.content),
																}}
															/>
														</Item>
													</Combobox.Item>
												);
											}}
										</For>
										<Combobox.Empty
											flex="1"
											align="center"
											justify="center"
											color="fg.tertiary"
										>
											No results found.
										</Combobox.Empty>
									</Combobox.Content>
								</Combobox>
							</Surface>
						</Dialog.Content>
					</Dialog.Positioner>
				</Portal>
			</Dialog>
		</DocsLayoutCommandMenuContext.Provider>
	);
}

const emptyItems = [
	{
		type: "page",
		url: "/docs/",
		id: "why-elemnts",
		breadcrumbs: undefined,
		content: "Why elemnts",
	},
	{
		type: "page",
		breadcrumbs: undefined,
		id: "/docs/installation",
		content: "Installation",
		url: "/docs/installation",
	},
	{
		type: "page",
		breadcrumbs: undefined,
		id: "changelog",
		content: "Changelog",
		url: "/docs/changelog",
	},
	{
		type: "page",
		id: "animations",
		content: "Animations",
		breadcrumbs: undefined,
		url: "/docs/animations",
	},
	{
		type: "page",
		id: "colors",
		content: "Colors",
		breadcrumbs: undefined,
		url: "/docs/colors",
	},
	{
		type: "page",
		id: "composition",
		content: "Composition",
		breadcrumbs: undefined,
		url: "/docs/composition",
	},
	{
		type: "page",
		id: "design-principles",
		content: "Design Principles",
		breadcrumbs: undefined,
		url: "/docs/design-principles",
	},
	{
		type: "page",
		id: "styling",
		content: "Styling",
		breadcrumbs: undefined,
		url: "/docs/styling",
	},
	{
		type: "page",
		id: "theming",
		content: "Theming",
		breadcrumbs: undefined,
		url: "/docs/theming",
	},
] as SortedResult<string>[];
