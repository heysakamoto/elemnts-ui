import { Group, Stack, Surface } from "@elemnts-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/preview")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Stack
			gap="12"
			minH="100vh"
			align="center"
			justify="center"
			direction="column"
		>
			<Group gap="8">
				{Array.from({ length: 8 }).map((_, idx) => {
					return (
						<Surface
							delta={idx}
							rounded="16"
							boxSize="48"
							key={idx.toString()}
							border="1px solid {colors.stroke.secondary}"
						/>
					);
				})}
			</Group>
			<Group gap="8">
				{Array.from({ length: 8 }).map((_, idx) => {
					return (
						<Surface
							rounded="16"
							boxSize="48"
							delta={idx}
							className="dark"
							key={idx.toString()}
							border="1px solid {colors.stroke.secondary}"
						/>
					);
				})}
			</Group>
		</Stack>
	);
}
