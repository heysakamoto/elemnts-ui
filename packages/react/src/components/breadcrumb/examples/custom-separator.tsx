import { Breadcrumb, Icon } from "@elemnts-ui/react";

const items = [
	{ label: "Docs", href: "/docs" },
	{ label: "Components", href: "/docs/components" },
	{ label: "Breadcrumb", href: "/docs/components/breadcrumb" },
];

export default function CustomSeparator() {
	return (
		<Breadcrumb.Root>
			<Breadcrumb.List>
				{items.map((item, index) => (
					<Breadcrumb.Item key={item.href}>
						{index < items.length - 1 ? (
							<>
								<Breadcrumb.Link href={item.href}>{item.label}</Breadcrumb.Link>
								<Breadcrumb.Separator>
									<Icon width={14} height={14} icon="tabler:arrow-right" />
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
