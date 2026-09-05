import {
	For,
	Icon,
	Image,
	Item,
	Menu,
	Portal,
	Separator,
	Surface,
	VisuallyHidden,
} from "@elemnts-ui/react";
import { Link } from "@tanstack/react-router";
import { Fragment } from "react";

import { css } from "@/styled-system/css/css";

const options = [
	{
		id: "first",
		label: "first",
		value: "first",
		children: [
			{
				id: "copy",
				value: "copy",
				icon: "tabler:copy",
				label: "Copy wordmark as SVG",
			},
		],
	},
	{
		id: "second",
		label: "second",
		value: "second",
		children: [
			{
				id: "download-png",
				value: "download-png",
				icon: "tabler:download",
				label: "Download wordmark as PNG",
			},
			{
				id: "download-svg",
				value: "download-svg",
				icon: "tabler:download",
				label: "Download wordmark as SVG",
			},
		],
	},
];

export function Logo() {
	return (
		<Menu>
			<Menu.ContextTrigger asChild>
				<Link to="/" className={css({ flexShrink: 0, w: "fit" })}>
					<VisuallyHidden>Home</VisuallyHidden>
					<Image
						w="104"
						alt="logo"
						objectFit="contain"
						_dark={{ display: "none" }}
						src="/logo/light_wordmark.png"
					/>
					<Image
						w="104"
						alt="logo"
						display="none"
						objectFit="contain"
						src="/logo/dark_wordmark.png"
						_dark={{ display: "block" }}
					/>
				</Link>
			</Menu.ContextTrigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content asChild>
						<Surface colorPalette="neutral" rounded="24">
							<Surface.Content>
								<For each={options}>
									{(option) => (
										<Fragment key={option.id}>
											<Menu.ItemGroup p="4">
												<For each={option.children}>
													{(child) => (
														<Menu.Item
															asChild
															key={child.id}
															value={child.value}
														>
															<Item variant="secondary">
																<Icon icon={child.icon} />
																{child.label}
															</Item>
														</Menu.Item>
													)}
												</For>
											</Menu.ItemGroup>
											<Menu.Separator
												asChild
												className={css({ _lastOfType: { display: "none" } })}
											>
												<Separator orientation="horizontal" />
											</Menu.Separator>
										</Fragment>
									)}
								</For>
							</Surface.Content>
						</Surface>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu>
	);
}
