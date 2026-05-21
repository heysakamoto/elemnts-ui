import { SegmentGroup } from "@ark-ui/react/segment-group";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { segmentGroupRecipe } from "@moto-ui/styled-system/recipes";

const { withContext, withProvider } = createStyleContext(segmentGroupRecipe);

export const SegmentGroupRootProvider = withProvider(
	SegmentGroup.RootProvider,
	"root",
);
SegmentGroupRootProvider.displayName = "SegmentGroupRootProvider";

export const SegmentGroupRoot = withProvider(SegmentGroup.Root, "root");
SegmentGroupRoot.displayName = "SegmentGroupRoot";

export const SegmentGroupContext = SegmentGroup.Context;

export const SegmentGroupIndicator = withContext(
	SegmentGroup.Indicator,
	"indicator",
);
SegmentGroupIndicator.displayName = "SegmentGroupIndicator";

export const SegmentGroupItem = withContext(SegmentGroup.Item, "item");
SegmentGroupItem.displayName = "SegmentGroupItem";

export const SegmentGroupItemContext = SegmentGroup.ItemContext;

export const SegmentGroupItemControl = withContext(
	SegmentGroup.ItemControl,
	"itemControl",
);
SegmentGroupItemControl.displayName = "SegmentGroupItemControl";

export const SegmentGroupItemHiddenInput = SegmentGroup.ItemHiddenInput;
SegmentGroupItemHiddenInput.displayName = "SegmentGroupItemHiddenInput";

export const SegmentGroupItemText = withContext(
	SegmentGroup.ItemText,
	"itemText",
);
SegmentGroupItemText.displayName = "SegmentGroupItemText";

export const SegmentGroupLabel = withContext(SegmentGroup.Label, "label");
SegmentGroupLabel.displayName = "SegmentGroupLabel";
