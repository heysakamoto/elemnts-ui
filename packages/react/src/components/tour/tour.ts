import { Tour } from "@ark-ui/react/tour";
import { createStyleContext } from "../../styled-system/jsx";
import { tourRecipe } from "../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(tourRecipe);

export const TourRoot = withProvider(Tour.Root, "root");
TourRoot.displayName = "TourRoot";

export const TourPositioner = withContext(Tour.Positioner, "positioner");
TourPositioner.displayName = "TourPositioner";

export const TourContext = Tour.Context;

export const TourContent = withContext(Tour.Content, "content");
TourContent.displayName = "TourContent";

export const TourTitle = withContext(Tour.Title, "title");
TourTitle.displayName = "TourTitle";

export const TourDescription = withContext(Tour.Description, "description");
TourDescription.displayName = "TourDescription";

export const TourActions = Tour.Actions;

export const TourActionTrigger = withContext(
	Tour.ActionTrigger,
	"actionTrigger",
);
TourActionTrigger.displayName = "TourActionTrigger";

export const TourCloseTrigger = withContext(Tour.CloseTrigger, "closeTrigger");
TourCloseTrigger.displayName = "TourCloseTrigger";

export const TourArrow = withContext(Tour.Arrow, "arrow");
TourArrow.displayName = "TourArrow";

export const TourArrowTip = withContext(Tour.ArrowTip, "arrowTip");
TourArrowTip.displayName = "TourArrowTip";

export const TourControl = withContext(Tour.Control, "control");
TourControl.displayName = "TourControl";

export const TourBackdrop = withContext(Tour.Backdrop, "backdrop");
TourBackdrop.displayName = "TourBackdrop";

export const TourProgressText = withContext(Tour.ProgressText, "progressText");
TourProgressText.displayName = "TourProgressText";

export const TourSpotlight = withContext(Tour.Spotlight, "spotlight");
TourSpotlight.displayName = "TourSpotlight";
