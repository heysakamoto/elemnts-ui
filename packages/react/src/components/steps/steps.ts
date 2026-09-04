import { Steps } from "@ark-ui/react/steps";
import { createStyleContext } from "../../styled-system/jsx";
import { stepsRecipe } from "../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(stepsRecipe);

export const StepsRootProvider = withProvider(Steps.RootProvider, "root");
StepsRootProvider.displayName = "StepsRootProvider";

export const StepsRoot = withProvider(Steps.Root, "root");
StepsRoot.displayName = "StepsRoot";

export const StepsCompletedContent = withContext(
	Steps.CompletedContent,
	"completedContent",
);
StepsCompletedContent.displayName = "StepsCompletedContent";

export const StepsContent = withContext(Steps.Content, "content");
StepsContent.displayName = "StepsContent";

export const StepsContext = Steps.Context;

export const StepsItemContext = Steps.ItemContext;

export const StepsIndicator = withContext(Steps.Indicator, "indicator");
StepsIndicator.displayName = "StepsIndicator";

export const StepsItem = withContext(Steps.Item, "item");
StepsItem.displayName = "StepsItem";

export const StepsList = withContext(Steps.List, "list");
StepsList.displayName = "StepsList";

export const StepsNextTrigger = withContext(Steps.NextTrigger, "nextTrigger");
StepsNextTrigger.displayName = "StepsNextTrigger";

export const StepsPrevTrigger = withContext(Steps.PrevTrigger, "prevTrigger");
StepsPrevTrigger.displayName = "StepsPrevTrigger";

export const StepsProgress = withContext(Steps.Progress, "progress");
StepsProgress.displayName = "StepsProgress";

export const StepsSeparator = withContext(Steps.Separator, "separator");
StepsSeparator.displayName = "StepsSeparator";

export const StepsTrigger = withContext(Steps.Trigger, "trigger");
StepsTrigger.displayName = "StepsTrigger";
