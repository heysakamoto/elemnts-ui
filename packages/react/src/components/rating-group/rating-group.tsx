import { ark } from "@ark-ui/react";
import {
	RatingGroup,
	useRatingGroupItemContext,
} from "@ark-ui/react/rating-group";

import { createStyleContext } from "../../../styled-system/jsx";
import { ratingGroupRecipe } from "../../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(ratingGroupRecipe);

export const RatingGroupRootProvider = withProvider(
	RatingGroup.RootProvider,
	"root",
);
RatingGroupRootProvider.displayName = "RatingGroupRootProvider";

export const RatingGroupRoot = withProvider(RatingGroup.Root, "root");
RatingGroupRoot.displayName = "RatingGroupRoot";

export const RatingGroupContext = RatingGroup.Context;

export const RatingGroupItemContext = RatingGroup.ItemContext;

export const RatingGroupControl = withContext(RatingGroup.Control, "control");
RatingGroupControl.displayName = "RatingGroupControl";

export const RatingGroupItem = withContext(RatingGroup.Item, "item");
RatingGroupItem.displayName = "RatingGroupItem";

export const RatingGroupLabel = withContext(RatingGroup.Label, "label");
RatingGroupLabel.displayName = "RatingGroupLabel";

export const RatingGroupItemIndicator = withContext((props) => {
	const { highlighted, half, checked } = useRatingGroupItemContext();

	return (
		<ark.span
			data-scope="rating-group"
			data-part="item-indicator"
			data-half={half ? "" : undefined}
			data-state={checked ? "checked" : "unchecked"}
			data-highlighted={highlighted ? "" : undefined}
			{...props}
		/>
	);
}, "itemIndicator");
RatingGroupItemIndicator.displayName = "RatingGroupItemIndicator";

export const RatingGroupHiddenInput = RatingGroup.HiddenInput;
RatingGroupHiddenInput.displayName = "RatingGroupHiddenInput";
