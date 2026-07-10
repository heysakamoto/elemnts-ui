import { Anchor, Image, List, Separator, Text } from "@moto-ui/react";
import { Link } from "@tanstack/react-router";
import type { MDXComponents } from "mdx/types";

export const base: MDXComponents = {
	img: (props) => (
		<Image
			my="24"
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
			as="ol"
			my="24"
			spaceY="10"
			listStyle="inside"
			listStyleType="number"
			{...props}
		/>
	),
	ul: (props) => (
		<List
			as="ul"
			my="24"
			spaceY="10"
			listStyle="inside disc"
			{...props}
		/>
	),
	li: (props) => (
		<List.Item
			as="li"
			textWrap="auto"
			fontSize="1rem"
			lineHeight="md"
			letterSpacing="sm"
			color="fg.secondary"
			css={{ "& > h1, h2, h3, h4": { my: "0" } }}
			{...props}
		>
			{props.children}
		</List.Item>
	),
	p: (props) => (
		<Text
			textWrap="auto"
			fontSize="1rem"
			lineHeight="md"
			letterSpacing="sm"
			color="fg.secondary"
			css={{ "&:not(:first-child)": { mt: 20 } }}
			{...props}
		>
			{props.children}
		</Text>
	),
	h2: (props) => {
		return (
			<Text
				as="h2"
				lineHeight="xs"
				fontWeight="500"
				letterSpacing="sm"
				color="fg.primary"
				fontSize={{ base: "20", md: "24" }}
				scrollMarginTop={{ base: "132", lg: "80" }}
				css={{ "&:not(:first-child)": { mt: "40" } }}
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
				gap="12"
				lineHeight="xs"
				fontWeight="500"
				letterSpacing="sm"
				color="fg.primary"
				fontSize={{ base: "18", md: "20" }}
				scrollMarginTop={{ base: "132", lg: "80" }}
				css={{ "&:not(:first-child)": { mt: "40" } }}
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
				lineHeight="xs"
				fontWeight="500"
				letterSpacing="sm"
				color="fg.primary"
				fontSize={{ base: "16", md: "18" }}
				scrollMarginTop={{ base: "132", lg: "80" }}
				css={{ "&:not(:first-child)": { mt: "40" } }}
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
