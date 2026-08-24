import { Combobox, Icon, Item, Separator, Show } from "@moto-ui/react";
import type { SortedResult } from "fumadocs-core/search";
import { Fragment } from "react/jsx-runtime";

const iconMap = {
	text: "tabler:dots",
	heading: "tabler:hash",
	page: "tabler:arrow-up-right",
};

type SearchResultItemProps = {
	item: SortedResult<string>;
};

export function SearchResultItem(props: SearchResultItemProps) {
	const { item } = props;
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
