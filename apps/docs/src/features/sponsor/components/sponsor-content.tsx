import { Chip, For, Icon, RadioGroup, Surface, Tile } from "@moto-ui/react";
import { SPONSOR_OPTIONS } from "../constants";
import { useSponsorContext } from "./sponsor-client";

export function SponsorContent() {
	const { value, setValue } = useSponsorContext();

	return (
		<Surface.Content
			px="16"
			py="8"
		>
			<RadioGroup
				value={value}
				onValueChange={(details) => setValue(details.value ?? "")}
			>
				<For each={SPONSOR_OPTIONS}>
					{(option) => {
						return (
							<RadioGroup.Item
								value={option.url}
								disabled={option.disabled}
							>
								<RadioGroup.ItemContext>
									{(ctx) => (
										<Tile
											align="center"
											key={option.id}
											variant="secondary"
											selected={ctx.checked}
											disabled={option.disabled}
										>
											<Chip
												iconOnly
												size="md"
												variant="secondary"
											>
												<Icon
													width={20}
													height={20}
													icon={option.icon}
												/>
											</Chip>
											<Tile.Content gap="4">
												<Tile.Title>{option.label}</Tile.Title>
												<Tile.Description>
													{option.description}
												</Tile.Description>
											</Tile.Content>
										</Tile>
									)}
								</RadioGroup.ItemContext>
								<RadioGroup.ItemHiddenInput />
							</RadioGroup.Item>
						);
					}}
				</For>
			</RadioGroup>
		</Surface.Content>
	);
}
