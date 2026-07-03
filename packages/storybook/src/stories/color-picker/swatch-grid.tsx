import { ColorPicker, Icon, parseColor, Swatch } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Swatch Grid",
	component: ColorPicker,
});

export const SwatchGrid = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"You can use ColorPicker.SwatchGroup to provide a list of predefined colors for the user to choose from.",
			},
		},
	},
	render: (args) => {
		const color = parseColor("#eb5e41");
		const swatches = ["red", "crimson", "orange", "fuchsia", "blue"];

		return (
			<ColorPicker
				defaultValue={color}
				{...args}
			>
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
	},
});
