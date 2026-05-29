import { Breadcrumb, Icon } from "@moto-ui/react";

const items = [
	{ label: "Home", href: "/" },
	{ label: "Projects", href: "/projects" },
	{ label: "Moto UI", href: "/projects/moto-ui" },
];

export function CustomSeparator() {
	return (
		<Breadcrumb.Root>
			<Breadcrumb.List>
				{items.map((item, index) => (
					<Breadcrumb.Item key={item.href}>
						{index < items.length - 1 ? (
							<>
								<Breadcrumb.Link href={item.href}>{item.label}</Breadcrumb.Link>
								<Breadcrumb.Separator>
									<Icon
										width={14}
										height={14}
										icon="tabler:arrow-right"
									/>
								</Breadcrumb.Separator>
							</>
						) : (
							<Breadcrumb.CurrentLink>{item.label}</Breadcrumb.CurrentLink>
						)}
					</Breadcrumb.Item>
				))}
			</Breadcrumb.List>
		</Breadcrumb.Root>
	);
}
