import { Container, Slider } from "@elemnts-ui/react";

export default function Range() {
	return (
		<Container maxW="16rem">
			<Slider.Root defaultValue={[30, 60]}>
				<Slider.Control>
					<Slider.Track>
						<Slider.Range />
					</Slider.Track>
					<Slider.Thumb index={0}>
						<Slider.HiddenInput />
					</Slider.Thumb>
					<Slider.Thumb index={1}>
						<Slider.HiddenInput />
					</Slider.Thumb>
				</Slider.Control>
			</Slider.Root>
		</Container>
	);
}
