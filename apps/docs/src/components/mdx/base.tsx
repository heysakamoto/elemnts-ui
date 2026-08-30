import { Anchor, Image, List, Separator, Text } from "@moto-ui/react";
import { Link } from "@tanstack/react-router";
import type { MDXComponents } from "mdx/types";

export const base: MDXComponents = {
	img: (props) => (
		<Image
			mt="24"
			{...props}
		/>
	),
	hr: (props) => (
		<Separator
			my="24"
			{...props}
			orientation="horizontal"
		/>
	),
	a: (props) => (
		<Anchor
			target="_blank"
			fontSize="1rem"
			lineHeight="md"
			underline="hover"
			{...props}
		/>
	),
	strong: (props) => (
		<Text
			as="strong"
			fontWeight="500"
			color="fg.primary"
			letterSpacing="sm"
			{...props}
		/>
	),
	ol: (props) => (
		<List
			px="20"
			as="ol"
			mt="16"
			spaceY="8"
			listStyleType="decimal"
			{...props}
		/>
	),
	ul: (props) => (
		<List
			px="20"
			as="ul"
			mt="16"
			spaceY="8"
			listStyleType="disc"
			{...props}
		/>
	),
	li: (props) => (
		<List.Item
			as="li"
			textWrap="auto"
			fontSize="1rem"
			lineHeight="md"
			letterSpacing="md"
			color="fg.secondary"
			{...props}
		>
			{props.children}
		</List.Item>
	),
	p: (props) => (
		<Text
			mt="16"
			textWrap="auto"
			fontSize="1rem"
			lineHeight="md"
			letterSpacing="md"
			color="fg.secondary"
			css={{ ":first-child": { mt: "24" } }}
			{...props}
		>
			{props.children}
		</Text>
	),
	h2: (props) => {
		return (
			<Text
				as="h2"
				mt="56"
				lineHeight="xs"
				fontWeight="500"
				letterSpacing="sm"
				color="fg.primary"
				fontSize={{ base: "20", md: "24" }}
				scrollMarginTop={{ base: "132", lg: "80" }}
				{...props}
			>
				<Link
					to={"."}
					hash={props.id}
				>
					{props.children}
				</Link>
			</Text>
		);
	},
	h3: (props) => {
		return (
			<Text
				as="h3"
				mt="48"
				lineHeight="xs"
				fontWeight="500"
				letterSpacing="sm"
				color="fg.primary"
				fontSize={{ base: "18", md: "20" }}
				scrollMarginTop={{ base: "132", lg: "80" }}
				{...props}
			>
				<Link
					to={"."}
					hash={props.id}
				>
					{props.children}
				</Link>
			</Text>
		);
	},
	h4: (props) => {
		return (
			<Text
				as="h4"
				mt="40"
				lineHeight="xs"
				fontWeight="500"
				letterSpacing="sm"
				color="fg.primary"
				fontSize={{ base: "16", md: "18" }}
				scrollMarginTop={{ base: "132", lg: "80" }}
				{...props}
			>
				<Link
					to={"."}
					hash={props.id}
				>
					{props.children}
				</Link>
			</Text>
		);
	},
};
