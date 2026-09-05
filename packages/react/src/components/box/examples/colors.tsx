import { Group, Swatch } from "@elemnts-ui/react";

export default function Colors() {
	return (
		<Group gap="8">
			<Swatch size="sm" bgColor={"green.10"} />
			<Swatch size="sm" bgColor={"green.50"} />
			<Swatch size="sm" bgColor={"green.80"} />
			<Swatch size="sm" bgColor={"green.100"} />
		</Group>
	);
}
