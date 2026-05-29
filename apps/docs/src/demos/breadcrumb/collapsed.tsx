import { Breadcrumb } from "@moto-ui/react";

const items = [
	{ label: "Home", href: "/" },
	{ label: "Docs", href: "/docs" },
	{ label: "Components", href: "/docs/components" },
	{ label: "Data Display", href: "/docs/components/data-display" },
	{ label: "Breadcrumb", href: "/docs/components/data-display/breadcrumb" },
];

export function Collapsed() {
	return (
		<Breadcrumb.Root>
			<Breadcrumb.List>
				{items.map((item, index) => {
					const isLast = index === items.length - 1;
					const isCollapsed = index === 1;

					return (
						<Breadcrumb.Item key={item.href}>
							{isCollapsed ? (
								<>
									<Breadcrumb.Ellipsis />
									<Breadcrumb.Separator />
								</>
							) : isLast ? (
								<Breadcrumb.CurrentLink>{item.label}</Breadcrumb.CurrentLink>
							) : (
								<>
									<Breadcrumb.Link href={item.href}>
										{item.label}
									</Breadcrumb.Link>
									<Breadcrumb.Separator />
								</>
							)}
						</Breadcrumb.Item>
					);
				})}
			</Breadcrumb.List>
		</Breadcrumb.Root>
	);
}
