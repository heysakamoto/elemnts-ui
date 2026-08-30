import { Container, Slider, Stack } from "@moto-ui/react";

export default function MinMax() {
	return (
		<Container maxW="16rem">
			<Slider.Root
				defaultValue={[5]}
				min={-10}
				max={10}
			>
				<Stack justify="space-between">
					<Slider.Label>Label</Slider.Label>
					<Slider.ValueText />
				</Stack>
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
