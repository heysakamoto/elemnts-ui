import {
	ButtonGroup,
	Dialog,
	Icon,
	List,
	Portal,
	Surface,
} from "@moto-ui/react";
import { Link } from "@tanstack/react-router";
import { Sponsor } from "./sponsor";

export const links = [
	{
		label: "Pro",
		target: "_self",
		hideFrom: "lg",
		url: "/docs/pro",
	},
	{
		label: "Storybook",
		target: "_blank",
		url: "https://storybook.moto-ui.app",
	},
	{
		label: "Creator",
		target: "_blank",
		url: "https://x.com/hey__sakamoto",
	},
];

function NavigationRoot() {
	return (
		<List
			direction="row"
			hideBelow="lg"
		>
			{links.map((link) => (
				<List.Item
					py="4"
					px="14"
					asChild
					rounded="16"
					fontSize="14"
					color="fg.tertiary"
					key={link.label}
					_hover={{
						color: "fg.secondary",
						bgColor: "neutral.secondary",
					}}
				>
					<Link
						to={link.url}
						target={link.target}
					>
						{link.label}
					</Link>
				</List.Item>
			))}
		</List>
	);
}

type NavigationProps = {
	children: React.ReactNode;
};

function NavigationMobile({ children }: NavigationProps) {
	return (
		<Dialog
			modal
			size="cover"
			placement="bottom"
		>
			{children}
			<Portal>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content asChild>
						<Surface
							h="fit"
							delta={1}
							rounded="24"
							colorPalette="neutral"
						>
							<Surface.Content p="16">
								<List>
									{links.map((link) => (
										<Dialog.Context key={link.label}>
											{({ setOpen }) => {
												return (
													<List.Item
														py="12"
														asChild
														rounded="20"
														fontSize="16"
														align="center"
														fontWeight="500"
														color="fg.tertiary"
														_hover={{
															color: "fg.primary",
														}}
													>
														<Link
															to={link.url}
															target={link.target}
															onClick={() => setOpen(false)}
														>
															{link.label}
														</Link>
													</List.Item>
												);
											}}
										</Dialog.Context>
									))}
								</List>
							</Surface.Content>
							<Surface.Footer
								px="16"
								pb="16"
							>
								<ButtonGroup justify="space-between">
									<Sponsor>
										<Sponsor.Trigger asChild>
											<ButtonGroup.Item rounded="20">
												<Icon
													ml="-2"
													width={16}
													height={16}
													icon="tabler:heart"
												/>
												Sponsor
											</ButtonGroup.Item>
										</Sponsor.Trigger>
									</Sponsor>
									<ButtonGroup.Item
										iconOnly
										asChild
										rounded="20"
										variant="secondary"
										aria-label="github"
									>
										<Link
											target="_blank"
											to={"https://github.com/heysakamoto/moto-ui" as any}
										>
											<Icon
												width={16}
												height={16}
												icon="radix-icons:github-logo"
											/>
										</Link>
									</ButtonGroup.Item>
								</ButtonGroup>
							</Surface.Footer>
						</Surface>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog>
	);
}

export const Navigation = Object.assign(NavigationRoot, {
	links,
	Mobile: NavigationMobile,
	MobileTrigger: Dialog.Trigger,
});
