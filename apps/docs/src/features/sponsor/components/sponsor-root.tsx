import { Container, Section, Surface, Text } from "@moto-ui/react";
import type { PropsWithChildren } from "react";

import { type UseSponsorProps, useSponsor } from "./sponsor-client";
import { SponsorRootProvider } from "./sponsor-root-provider";

type SponsorRootProps = PropsWithChildren<UseSponsorProps>;

export function SponsorRoot(props: SponsorRootProps) {
	const { children, defaultValue } = props;
	const value = useSponsor({ defaultValue });

	return (
		<SponsorRootProvider value={value}>
			<Section pt={["3rem", "4rem"]}>
				<Container
					maxW="40rem"
					px="16"
				>
					<Text
						as="h1"
						letterSpacing="-0.025em"
						fontSize={[32, 36]}
					>
						Sponsor this project
					</Text>
					<Text>
						Sponsors earn homepage recognition, a spot in sponsors.md, and
						dedicated, free support directly from the Elemnts team.
					</Text>
					<Surface
						delta={1}
						rounded="24"
						mt="32"
					>
						{children}
					</Surface>
				</Container>
			</Section>
		</SponsorRootProvider>
	);
}
