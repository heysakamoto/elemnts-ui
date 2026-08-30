import { Container, Slider } from "@moto-ui/react";

export default function Basic() {
	return (
		<Container maxW="16rem">
			<Slider.Root defaultValue={[30]}>
				<Slider.Control>
					<Slider.Track>
						<Slider.Range />
					</Slider.Track>
					<Slider.Thumb index={0}>
						<Slider.HiddenInput />
					</Slider.Thumb>
				</Slider.Control>
			</Slider.Root>
		</Container>
	);
}
