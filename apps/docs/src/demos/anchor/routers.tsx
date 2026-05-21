import { Anchor } from "@moto-ui/react";
import { Link } from "@tanstack/react-router";

export function Routers() {
	return (
		<Anchor asChild>
			<Link
				to="."
				hash="routers"
			>
				Reload
			</Link>
		</Anchor>
	);
}
