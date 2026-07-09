import {
	Button,
	Icon,
	Popover,
	Portal,
	Stack,
	Surface,
	WheelPicker,
} from "@moto-ui/react";
import { css } from "@moto-ui/styled-system/css";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { findNeighbour } from "fumadocs-core/page-tree";
import type { TOCItemType } from "fumadocs-core/toc";
import { createContext, useContext, useEffect, useState } from "react";

import { useDocsLayoutContext, useDocsLayoutPageContext } from "./client";

export function DocsLayoutPagePager() {
	const { pageTree } = useDocsLayoutContext();
	const { toc } = useDocsLayoutPageContext();
	const pathname = useLocation({ select: (l) => l.pathname });
	const { previous, next } = findNeighbour(pageTree, pathname);
	const ctx = usePagePager(toc);

	const currentItem = toc.find((item) => item.url.slice(1) === ctx.current);

	return (
		<PagePagerContext.Provider value={ctx}>
			<Popover positioning={{ sameWidth: true, strategy: "fixed" }}>
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
						backdropFilter="blur(10px)"
						aria-label="Go to previous page"
						_disabled={{ opacity: 1 }}
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
						<Popover.Trigger asChild>
							<Surface.Title
								flex="1"
								fontSize="13"
								justify="center"
							>
								{currentItem?.title ?? "On this page"}
							</Surface.Title>
						</Popover.Trigger>
					</Surface>

					<Button
						asChild
						size="lg"
						iconOnly
						rounded="full"
						variant="surface"
						disabled={!next}
						backdropFilter="blur(10px)"
						aria-label="Go to next page"
						_disabled={{ opacity: 1 }}
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
					<Popover.Positioner>
						<Popover.Content asChild>
							<Surface
								p="6"
								delta={1}
								rounded="24"
								colorPalette="neutral"
							>
								<Picker toc={toc} />
							</Surface>
						</Popover.Content>
					</Popover.Positioner>
				</Portal>
			</Popover>
		</PagePagerContext.Provider>
	);
}

type PagePagerContextValue = ReturnType<typeof usePagePager>;

const PagePagerContext = createContext<PagePagerContextValue | null>(null);

function usePagePager(items: TOCItemType[]) {
	const [current, setCurrent] = useState(items[0]?.url.slice(1) ?? "");

	useEffect(() => {
		const elements = items
			.map((item) => document.getElementById(item.url.slice(1)))
			.filter((el): el is HTMLElement => el !== null);

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries.filter((e) => e.isIntersecting);
				if (visible.length > 0) {
					const top = visible.sort(
						(a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
					)[0];
					setCurrent(top?.target.id ?? "");
				}
			},
			{ rootMargin: "-80px 0px -70% 0px" },
		);

		elements.forEach((el) => {
			observer.observe(el);
		});

		return () => {
			observer.disconnect();
		};
	}, [items]);

	function goToHeading(id: string) {
		const el = document.getElementById(id);
		if (!el) return;

		setCurrent(id);
		el.scrollIntoView({ behavior: "smooth", block: "start" });
	}

	return { current, onCurrentChange: setCurrent, goToHeading };
}

function usePagePagerContext() {
	const ctx = useContext(PagePagerContext);
	if (!ctx) {
		throw new Error(
			"usePagePagerContext must be used within a PagePagerProvider",
		);
	}
	return ctx;
}

function Picker({ toc }: { toc: TOCItemType[] }) {
	const pathname = useLocation({ select: (l) => l.pathname });
	const { current, onCurrentChange } = usePagePagerContext();
	const navigate = useNavigate();
	const options = toc.map((item) => ({
		label: item.title,
		value: item.url.slice(1),
	}));

	function handleValueChange(value: string) {
		onCurrentChange(value);
		navigate({ to: `${pathname}#${value}` });
	}

	return (
		<WheelPicker variant="secondary">
			<WheelPicker.Control>
				<WheelPicker.Options
					value={current}
					options={options}
					optionItemHeight={32}
					onValueChange={handleValueChange}
					classNames={{
						optionItem: css({ fontSize: "13" }),
						highlightWrapper: css({ rounded: "12" }),
						highlightItem: css({ fontSize: "13", fontWeight: "400" }),
					}}
				/>
			</WheelPicker.Control>
		</WheelPicker>
	);
}
