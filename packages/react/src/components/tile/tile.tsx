import { ark, type HTMLArkProps } from "@ark-ui/react/factory";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { tileRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(tileRecipe);

export const TileRoot = withProvider(
	(
		props: HTMLArkProps<"div"> &
			React.RefAttributes<HTMLDivElement> & {
				selected?: boolean;
				disabled?: boolean;
			},
	) => {
		const { selected = false, disabled = false, ...rest } = props;

		return (
			<ark.div
				data-disabled={disabled ? "" : undefined}
				data-selected={selected ? "" : undefined}
				aria-disabled={disabled ? true : undefined}
				aria-selected={selected ? true : undefined}
				data-state={selected ? "selected" : undefined}
				{...rest}
			/>
		);
	},
	"root",
	{
		dataAttr: true,
		defaultProps: {
			"data-scope": "tile",
			"data-part": "root",
		},
	},
);
TileRoot.displayName = "TileRoot";

export const TileContent = withContext(ark.div, "content", {
	dataAttr: true,
	defaultProps: {
		"data-scope": "tile",
		"data-part": "content",
	},
});
TileContent.displayName = "TileContent";

export const TileTitle = withContext(ark.div, "title", {
	dataAttr: true,
	defaultProps: {
		"data-scope": "tile",
		"data-part": "title",
	},
});
TileTitle.displayName = "TileTitle";

export const TileDescription = withContext(ark.div, "description", {
	dataAttr: true,
	defaultProps: {
		"data-scope": "tile",
		"data-part": "description",
	},
});
TileDescription.displayName = "TileDescription";

export const TileIndicator = withContext(ark.div, "indicator", {
	dataAttr: true,
	defaultProps: {
		"data-scope": "tile",
		"data-part": "indicator",
	},
});
TileIndicator.displayName = "TileIndicator";

export const TileControl = withContext(ark.div, "control", {
	dataAttr: true,
	defaultProps: {
		"data-scope": "tile",
		"data-part": "control",
	},
});
TileControl.displayName = "TileControl";

export const TileAddon = withContext(ark.div, "addon", {
	dataAttr: true,
	defaultProps: {
		"data-scope": "tile",
		"data-part": "addon",
	},
});
TileAddon.displayName = "TileAddon";
