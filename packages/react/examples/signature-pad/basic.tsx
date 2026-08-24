import { SignaturePad, Surface } from "@moto-ui/react";

export default function Basic() {
	return (
		<SignaturePad.Root w="20rem">
			<Surface
				delta={1}
				rounded="24"
			>
				<SignaturePad.Control h="12rem">
					<SignaturePad.Segment />
					<SignaturePad.Guide />
				</SignaturePad.Control>
			</Surface>
		</SignaturePad.Root>
	);
}
