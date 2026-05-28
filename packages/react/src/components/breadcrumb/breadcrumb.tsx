import { ark } from "@ark-ui/react";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { breadcrumbRecipe } from "@moto-ui/styled-system/recipes";
import { Icon } from "../icon";

const { withProvider, withContext } = createStyleContext(breadcrumbRecipe);

export const BreadcrumbRoot = withProvider(ark.nav, "root", {
	dataAttr: true,
	defaultProps: {
		"data-part": "root",
		"data-scope": "breadcrumb",
	},
});
BreadcrumbRoot.displayName = "BreadcrumbRoot";

export const BreadcrumbList = withContext(ark.ol, "list", {
	dataAttr: true,
	defaultProps: {
		"data-part": "list",
		"data-scope": "breadcrumb",
	},
});
BreadcrumbList.displayName = "BreadcrumbList";

export const BreadcrumbItem = withContext(ark.li, "item", {
	dataAttr: true,
	defaultProps: {
		"data-part": "item",
		"data-scope": "breadcrumb",
	},
});
BreadcrumbItem.displayName = "BreadcrumbItem";

export const BreadcrumbLink = withContext(ark.a, "link", {
	dataAttr: true,
	defaultProps: {
		"data-part": "link",
		"data-scope": "breadcrumb",
	},
});
BreadcrumbLink.displayName = "BreadcrumbLink";

export const BreadcrumbCurrentLink = withContext(ark.span, "currentLink", {
	dataAttr: true,
	defaultProps: {
		role: "link",
		"aria-current": "page",
		"data-part": "current-link",
		"data-scope": "breadcrumb",
	},
});
BreadcrumbCurrentLink.displayName = "BreadcrumbCurrentLink";

export const BreadcrumbSeparator = withContext(ark.li, "separator", {
	dataAttr: true,
	defaultProps: {
		"aria-hidden": "true",
		"data-part": "separator",
		"data-scope": "breadcrumb",
		children: (
			<Icon
				width={14}
				height={14}
				icon="tabler:chevron-right"
			/>
		),
	},
});
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export const BreadcrumbEllipsis = withContext(ark.span, "ellipsis", {
	dataAttr: true,
	defaultProps: {
		role: "presentation",
		"aria-hidden": "true",
		"data-part": "ellipsis",
		"data-scope": "breadcrumb",
		children: (
			<Icon
				width={14}
				height={14}
				icon="tabler:dots"
			/>
		),
	},
});
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";
