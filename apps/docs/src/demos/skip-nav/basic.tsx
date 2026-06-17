import { Box, Container, SkipNav, Text } from "@moto-ui/react";

export const Basic = () => {
	return (
		<Container maxW="20rem">
			<SkipNav>
				<SkipNav.Link>Skip to main content</SkipNav.Link>
				<Box
					p="12"
					rounded="12"
					bgColor="neutral.secondary"
				>
					<Text
						as="p"
						fontSize="14"
					>
						Press Tab to reveal the skip navigation link, then press Enter to
						jump to the main content.
					</Text>
				</Box>
				<SkipNav.Content
					mt="8"
					p="12"
					as="main"
					rounded="12"
					bgColor="neutral.secondary"
				>
					<Text
						mb={2}
						as="strong"
						fontSize="14"
					>
						Main Content
					</Text>
					<Text fontSize="14">
						This is the main content area that receives focus when you activate
						the skip navigation link.
					</Text>
				</SkipNav.Content>
			</SkipNav>
		</Container>
	);
};
