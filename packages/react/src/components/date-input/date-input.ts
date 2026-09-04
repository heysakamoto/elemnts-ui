import { DateInput } from "@ark-ui/react";
import { createStyleContext } from "../../styled-system/jsx";
import { dateInputRecipe } from "../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(dateInputRecipe);

export const DateInputRootProvider = withProvider(
	DateInput.RootProvider,
	"root",
);
DateInputRootProvider.displayName = "DateInputRootProvider";

export const DateInputRoot = withProvider(DateInput.Root, "root");
DateInputRoot.displayName = "DateInputRoot";

export const DateInputControl = withContext(DateInput.Control, "control");
DateInputControl.displayName = "DateInputControl";

export const DateInputHiddenInput = withContext(
	DateInput.HiddenInput,
	"hiddenInput",
);
DateInputHiddenInput.displayName = "DateInputHiddenInput";

export const DateInputSegmentGroup = withContext(
	DateInput.SegmentGroup,
	"segmentGroup",
);
DateInputSegmentGroup.displayName = "DateInputSegmentGroup";

export const DateInputSegment = withContext(DateInput.Segment, "segment");
DateInputSegment.displayName = "DateInputSegment";

export const DateInputLabel = withContext(DateInput.Label, "label");
DateInputLabel.displayName = "DateInputLabel";

export const DateInputContext = DateInput.Context;

export const DateInputSegmentContext = DateInput.SegmentContext;
