import {
	Anchor,
	Button,
	Container,
	Image,
	Section,
	Separator,
	Stack,
	Text,
} from "@elemnts-ui/react";
import { Link } from "@tanstack/react-router";

export function RootLayoutFooter() {
	return (
		<Section as="footer" py="64">
			<Container px="16" maxW="40rem">
				<Stack gap="6" align="center" direction="row" justify="center">
					<Text color="fg.tertiary">Crafted for the web by </Text>
					<Button
						pl="4"
						gap="8"
						asChild
						fontSize="16"
						variant="ghost"
						fontWeight="400"
					>
						<Link target="_blank" to={"https://x.com/hey__sakaElemnts" as any}>
							<Image
								boxSize="24"
								rounded="full"
								loading="lazy"
								alt="profile-picture"
								src="https://pbs.twimg.com/profile_images/1990437526134231040/GK9squrm_400x400.jpg"
							/>
							SakaElemnts
						</Link>
					</Button>
				</Stack>
				<Stack mt="12" justify="center" align="center" direction="row">
					<Text color="fg.tertiary" lineHeight="1">
						v 0.0.10
					</Text>
					<Separator mx="12" h="1rem" orientation="vertical" />
					<Anchor
						lineHeight="1"
						target="_blank"
						href="https://github.com/heysakaElemnts/Elemnts-ui"
					>
						Github
					</Anchor>
				</Stack>
			</Container>
		</Section>
	);
}

export function Maker() {
	return (
		<div>
			<h1>Hello maker</h1>
			<p>This is a paragraph</p>
			<span>This is a span</span>
		</div>
	);
}
