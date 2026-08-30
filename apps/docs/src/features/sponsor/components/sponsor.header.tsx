import { Button, Icon, Surface, VisuallyHidden } from "@moto-ui/react";
import { Link } from "@tanstack/react-router";

export function SponsorHeader() {
	return (
		<Surface.Header
			px="16"
			py="16"
			align="center"
			direction="row"
			justify="space-between"
		>
			<Button
				asChild
				rounded="full"
				flexShrink={0}
				variant="secondary"
			>
				<Link
					target="_blank"
					to={"https://x.com/hey__sakamoto" as any}
				>
					<Icon
						mr="-2"
						width={18}
						height={18}
						icon="tabler:message"
					/>
					Chat with team
					<VisuallyHidden>Creator social profile</VisuallyHidden>
				</Link>
			</Button>
		</Surface.Header>
	);
}
