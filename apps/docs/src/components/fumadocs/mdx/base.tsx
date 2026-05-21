import { Anchor, Box, Image, Separator, Text } from "@moto-ui/react";
import { Link } from "@tanstack/react-router";
import type { MDXComponents } from "mdx/types";

export const base: MDXComponents = {
	img: (props) => (
		<Image
			my="24"
			{...props}
		/>
	),
	ol: (props) => (
		<Box
			as="ol"
			my="24"
			spaceY="10"
			listStyleType="none"
			{...props}
		>
			{props.children}
		</Box>
	),
	ul: (props) => (
		<Box
			as="ul"
			my="24"
			spaceY="10"
			px={{ base: "20" }}
			listStyleType="disc"
			{...props}
		>
			{props.children}
		</Box>
	),
	li: (props) => (
		<Text
			as="li"
			fontSize="14"
			color="fg.secondary"
			css={{ "& > h1, h2, h3, h4": { my: "0" } }}
			{...props}
		>
			{props.children}
		</Text>
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
			underline="hover"
			{...props}
		/>
	),
	strong: (props) => (
		<Text
			as="strong"
			letterSpacing="sm"
			fontWeight="500"
			color="fg.primary"
			{...props}
		/>
	),
	p: (props) => (
		<Text
			fontSize="14"
			textWrap="pretty"
			letterSpacing="sm"
			color="fg.secondary"
			css={{ "&:not(:first-child)": { mt: "24" } }}
			{...props}
		>
			{props.children}
		</Text>
	),
	h2: (props) => {
		return (
			<Text
				as="h2"
				gap="12"
				fontSize="20"
				display="flex"
				align="center"
				lineHeight="xs"
				fontWeight="500"
				letterSpacing="sm"
				color="fg.primary"
				scrollMarginTop="80"
				css={{ "&:not(:first-child)": { mt: "40" } }}
				{...props}
			>
				<Link
					to={"."}
					hash={props.id}
				>
					{props.children}
				</Link>
				<Separator
					flexGrow="1"
					orientation="horizontal"
				/>
			</Text>
		);
	},
	h3: (props) => {
		return (
			<Text
				as="h3"
				mt="48"
				gap="12"
				fontSize="18"
				lineHeight="xs"
				fontWeight="500"
				align="center"
				display="flex"
				letterSpacing="sm"
				color="fg.primary"
				scrollMarginTop="80"
				css={{ "&:not(:first-child)": { mt: "40" } }}
				{...props}
			>
				<Link
					to={"."}
					hash={props.id}
				>
					{props.children}
				</Link>
				<Separator
					flexGrow="1"
					orientation="horizontal"
				/>
			</Text>
		);
	},
	h4: (props) => {
		return (
			<Text
				as="h4"
				mt="48"
				gap="12"
				fontSize="16"
				align="center"
				display="flex"
				lineHeight="xs"
				fontWeight="500"
				letterSpacing="sm"
				color="fg.primary"
				scrollMarginTop="80"
				css={{ "&:not(:first-child)": { mt: "40" } }}
				{...props}
			>
				<Link
					to={"."}
					hash={props.id}
				>
					{props.children}
				</Link>
				<Separator
					flexGrow="1"
					orientation="horizontal"
				/>
			</Text>
		);
	},
};
