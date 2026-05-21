import { Progress } from "@ark-ui/react/progress";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { progressRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(progressRecipe);

export const ProgressRootProvider = withProvider(Progress.RootProvider, "root");
ProgressRootProvider.displayName = "ProgressRootProvider";

export const ProgressRoot = withProvider(Progress.Root, "root");
ProgressRoot.displayName = "ProgressRoot";

export const ProgressCircleRange = withContext(
	Progress.CircleRange,
	"circleRange",
);
ProgressCircleRange.displayName = "ProgressCircleRange";

export const ProgressCircleTrack = withContext(
	Progress.CircleTrack,
	"circleTrack",
);
ProgressCircleTrack.displayName = "ProgressCircleTrack";

export const ProgressContext = Progress.Context;

export const ProgressRange = withContext(Progress.Range, "range");
ProgressRange.displayName = "ProgressRange";

export const ProgressTrack = withContext(Progress.Track, "track");
ProgressTrack.displayName = "ProgressTrack";

export const ProgressCircle = withContext(Progress.Circle, "circle");
ProgressCircle.displayName = "ProgressCircle";

export const ProgressLabel = withContext(Progress.Label, "label");
ProgressLabel.displayName = "ProgressLabel";

export const ProgressValueText = withContext(Progress.ValueText, "valueText");
ProgressValueText.displayName = "ProgressValueText";

export const ProgressView = withContext(Progress.View, "view");
ProgressView.displayName = "ProgressView";
