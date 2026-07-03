import {
	Button,
	Dialog,
	Icon,
	Portal,
	Surface,
	Tile,
	ToggleGroup,
} from "@moto-ui/react";
import { Link } from "@tanstack/react-router";
import { type PropsWithChildren, useState } from "react";

const options = [
	{
		id: "patreon",
		disabled: false,
		label: "Patreon",
		url: "https://patreon.com/motoui",
		icon: "tabler:brand-patreon-filled",
		description: "Support the project on Patreon",
	},
	{
		id: "github",
		disabled: true,
		label: "Github Sponsors",
		icon: "radix-icons:github-logo",
		url: "https://github.com/sponsors/moto-ui",
		description: "Sponsor this project via GitHub Sponsors",
	},
	{
		disabled: true,
		id: "open-collective",
		label: "Open Collective",
		icon: "logos:opencollective",
		url: "https://github.com/sponsors/moto-ui",
		description: "Contribute through Open Collective",
	},
];

function SponsorRoot({ children }: PropsWithChildren) {
	const [value, setValue] = useState(["patreon"]);

	return (
		<Dialog
			modal
			size="sm"
			closeOnEscape={false}
			closeOnInteractOutside={false}
			placement={{ base: "bottom", md: "center" }}
		>
			{children}
			<Portal>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content asChild>
						<Surface
							delta={1}
							rounded="24"
							colorPalette="neutral"
						>
							<Surface.Header
								px="16"
								py="16"
								align="center"
								direction="row"
								justify="space-between"
							>
								<Dialog.CloseTrigger asChild>
									<Button
										iconOnly
										rounded="full"
										flexShrink="0"
										variant="ghost"
									>
										<Icon
											width={20}
											height={20}
											icon="tabler:arrow-left"
										/>
									</Button>
								</Dialog.CloseTrigger>
								<Surface.Title justify="center">
									Choose a Provider
								</Surface.Title>
								<Button
									iconOnly
									asChild
									rounded="full"
									flexShrink={0}
									variant="secondary"
								>
									<Link
										target="_blank"
										to={"https://x.com/hey__sakamoto" as any}
									>
										<Icon
											mr="-2"
											width={18}
											height={18}
											icon="tabler:message"
										/>
									</Link>
								</Button>
							</Surface.Header>
							<Surface.Content
								px="16"
								py="8"
							>
								<ToggleGroup
									gap="8"
									value={value}
									direction="column"
									onValueChange={({ value }) => setValue(value ?? [])}
								>
									{options.map((option) => {
										const selected = value.includes(option.id);

										return (
											<ToggleGroup.Item
												asChild
												w="full"
												key={option.id}
												value={option.id}
											>
												<Tile
													gap="12"
													rounded="16"
													align="start"
													variant="secondary"
													selected={selected}
													orientation="horizontal"
													disabled={option.disabled}
												>
													<Tile.Addon flexShrink="0">
														<Icon
															width={24}
															height={24}
															icon={option.icon}
														/>
													</Tile.Addon>
													<Tile.Content>
														<Tile.Title>{option.label}</Tile.Title>
														<Tile.Description fontSize="14">
															{option.description}
														</Tile.Description>
													</Tile.Content>
												</Tile>
											</ToggleGroup.Item>
										);
									})}
								</ToggleGroup>
							</Surface.Content>
							<Surface.Footer p="12">
								<Dialog.CloseTrigger asChild>
									<Button
										asChild
										size="lg"
										fullWidth
										rounded="16"
										disabled={value.length === 0}
									>
										<Link
											target="_blank"
											to={options.find((o) => o.id === value[0])?.url}
										>
											Sponsor
										</Link>
									</Button>
								</Dialog.CloseTrigger>
							</Surface.Footer>
						</Surface>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog>
	);
}

export const Sponsor = Object.assign(SponsorRoot, {
	Trigger: Dialog.Trigger,
});
