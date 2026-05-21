import { Collapsible } from "@ark-ui/react/collapsible";
import { ark } from "@ark-ui/react/factory";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { alertRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(alertRecipe);

export const AlertRootProvider = withProvider(Collapsible.RootProvider, "root");
AlertRootProvider.displayName = "AlertRootProvider";

export const AlertRoot = withProvider(Collapsible.Root, "root");
AlertRoot.displayName = "AlertRoot";

export const AlertTitle = withContext(ark.h3, "title");
AlertTitle.displayName = "AlertTitle";

export const AlertMedia = withContext(ark.div, "media");
AlertMedia.displayName = "AlertMedia";

export const AlertDescription = withContext(ark.p, "description");
AlertDescription.displayName = "AlertDescription";

export const AlertControl = withContext(ark.div, "control");
AlertControl.displayName = "AlertControl";

export const AlertTrigger = withContext(Collapsible.Trigger, "trigger");
AlertTrigger.displayName = "AlertTrigger";

export const AlertIndicator = withContext(Collapsible.Indicator, "indicator");
AlertIndicator.displayName = "AlertIndicator";

export const AlertContext = Collapsible.Context;
