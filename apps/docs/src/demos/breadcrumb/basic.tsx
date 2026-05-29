import { Breadcrumb } from "@moto-ui/react";

const items = [
	{ label: "Home", href: "/" },
	{ label: "Components", href: "/components" },
	{ label: "Breadcrumb", href: "/components/breadcrumb" },
];

export function Basic() {
	return (
		<Breadcrumb.Root>
			<Breadcrumb.List>
				{items.map((item, index) => (
					<Breadcrumb.Item key={item.href}>
						{index < items.length - 1 ? (
							<>
								<Breadcrumb.Link href={item.href}>{item.label}</Breadcrumb.Link>
								<Breadcrumb.Separator />
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
