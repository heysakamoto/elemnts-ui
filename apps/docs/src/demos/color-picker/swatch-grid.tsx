import { ColorPicker, Icon, parseColor, Swatch } from "@moto-ui/react";

export const SwatchGrid = () => {
	const color = parseColor("#eb5e41");
	const swatches = ["red", "crimson", "orange", "fuchsia", "blue"];

	return (
		<ColorPicker defaultValue={color}>
			<ColorPicker.SwatchGroup>
				{swatches.map((swatch) => (
					<ColorPicker.SwatchTrigger
						key={swatch}
						value={swatch}
					>
						<ColorPicker.Swatch
							value={swatch}
							asChild
						>
							<Swatch
								size="sm"
								rounded="24"
							>
								<ColorPicker.SwatchIndicator>
									<Icon
										width={16}
										height={16}
										color="white"
										icon="tabler:check"
									/>
								</ColorPicker.SwatchIndicator>
							</Swatch>
						</ColorPicker.Swatch>
					</ColorPicker.SwatchTrigger>
				))}
			</ColorPicker.SwatchGroup>
			<ColorPicker.HiddenInput />
		</ColorPicker>
	);
};
