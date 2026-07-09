import { Breadcrumb, Icon, Show } from "@moto-ui/react";
import { Link, useLocation } from "@tanstack/react-router";
import { useBreadcrumb } from "fumadocs-core/breadcrumb";

import { useDocsLayoutContext } from "./client";

export function DocsLayoutBreadcrumb() {
	const pathname = useLocation({ select: (s) => s.pathname });
	const { pageTree } = useDocsLayoutContext();

	const items = useBreadcrumb(pathname, pageTree, {
		includePage: true,
		includeRoot: true,
	});

	return (
		<Breadcrumb colorPalette="neutral">
			<Breadcrumb.List>
				{items.map((item, idx) => {
					const key = idx.toString();
					const last = idx === items.length - 1;

					if (idx === 0) return null;

					return (
						<Breadcrumb.Item
							key={key}
							fontSize="13"
						>
							<Breadcrumb.Link
								asChild
								hideBelow={last ? "md" : undefined}
							>
								<Link to={item.url}>{item.name}</Link>
							</Breadcrumb.Link>
							<Show when={idx !== items.length - 1}>
								<Breadcrumb.Separator mx="4">
									<Icon
										width={14}
										height={14}
										icon="tabler:chevron-right"
									/>
								</Breadcrumb.Separator>
							</Show>
							<Show
								when={last}
								fallback={null}
							>
								<Breadcrumb.CurrentLink hideFrom="md">
									<Link to={item.url}>{item.name}</Link>
								</Breadcrumb.CurrentLink>
							</Show>
						</Breadcrumb.Item>
					);
				})}
			</Breadcrumb.List>
		</Breadcrumb>
	);
}
