import { Switch } from "@ark-ui/react/switch";
import { createStyleContext } from "../../styled-system/jsx";
import { switchRecipe } from "../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(switchRecipe);

export const SwitchRootProvider = withProvider(Switch.RootProvider, "root");
SwitchRootProvider.displayName = "SwitchRootProvider";

export const SwitchRoot = withProvider(Switch.Root, "root");
SwitchRoot.displayName = "SwitchRoot";

export const SwitchContext = Switch.Context;

export const SwitchControl = withContext(Switch.Control, "control");
SwitchControl.displayName = "SwitchControl";

export const SwitchHiddenInput = Switch.HiddenInput;

export const SwitchLabel = withContext(Switch.Label, "label");
SwitchLabel.displayName = "SwitchLabel";

export const SwitchThumb = withContext(Switch.Thumb, "thumb");
SwitchThumb.displayName = "SwitchThumb";
