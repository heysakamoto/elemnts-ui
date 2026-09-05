import { Breadcrumb } from "@elemnts-ui/react";

const items = [
	{ label: "Docs", href: "/docs" },
	{ label: "Components", href: "/docs/components" },
	{ label: "Breadcrumb", href: "/docs/components/breadcrumb" },
];

export default function Collapsed() {
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
