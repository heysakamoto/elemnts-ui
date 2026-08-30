import { Button, Surface } from "@moto-ui/react";
import { Link } from "@tanstack/react-router";

import { useSponsorContext } from "./sponsor-client";

export function SponsorFooter() {
	const { value } = useSponsorContext();

	return (
		<Surface.Footer p="12">
			<Button
				asChild
				size="lg"
				fullWidth
				rounded="16"
				disabled={value.length === 0}
			>
				<Link
					target="_blank"
					to={value}
				>
					Sponsor
				</Link>
			</Button>
		</Surface.Footer>
	);
}
