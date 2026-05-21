import { AngleSlider } from "@ark-ui/react/angle-slider";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { angleSliderRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(angleSliderRecipe);

export const AngleSliderRootProvider = withProvider(
	AngleSlider.RootProvider,
	"root",
);
AngleSliderRootProvider.displayName = "AngleSliderProvider";

export const AngleSliderRoot = withProvider(AngleSlider.Root, "root");
AngleSliderRoot.displayName = "AngleSliderRoot";

export const AngleSliderControl = withContext(AngleSlider.Control, "control");
AngleSliderControl.displayName = "AngleSliderControl";

export const HiddenInput = AngleSlider.HiddenInput;
HiddenInput.displayName = "AngleSliderHiddenInput";

export const AngleSliderLabel = withContext(AngleSlider.Label, "label");
AngleSliderLabel.displayName = "AngleSliderLabel";

export const AngleSliderMarker = withContext(AngleSlider.Marker, "marker");
AngleSliderMarker.displayName = "AngleSliderMarker";

export const AngleSliderMarkerGroup = withContext(
	AngleSlider.MarkerGroup,
	"markerGroup",
);
AngleSliderMarkerGroup.displayName = "AngleSliderMarkerGroup";

export const AngleSliderThumb = withContext(AngleSlider.Thumb, "thumb");
AngleSliderThumb.displayName = "AngleSliderThumb";

export const AngleSliderValueText = withContext(
	AngleSlider.ValueText,
	"valueText",
);
AngleSliderValueText.displayName = "AngleSliderValueText";

export const AngleSliderContext = AngleSlider.Context;
