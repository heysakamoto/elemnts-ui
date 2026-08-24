import { Slider } from "@ark-ui/react/slider";

import { createStyleContext } from "../../../styled-system/jsx";
import { sliderRecipe } from "../../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(sliderRecipe);

export const SliderRootProvider = withProvider(Slider.RootProvider, "root");
SliderRootProvider.displayName = "SliderRootProvider";

export const SliderRoot = withProvider(Slider.Root, "root");
SliderRoot.displayName = "SliderRoot";

export const SliderContext = Slider.Context;

export const SliderControl = withContext(Slider.Control, "control");
SliderControl.displayName = "SliderControl";

export const SliderHiddenInput = Slider.HiddenInput;
SliderHiddenInput.displayName = "SliderHiddenInput";

export const SliderLabel = withContext(Slider.Label, "label");
SliderLabel.displayName = "SliderLabel";

export const SliderStepGroup = withContext(Slider.MarkerGroup, "stepGroup");
SliderStepGroup.displayName = "SliderStepGroup";

export const SliderStep = withContext(Slider.Marker, "step");
SliderStep.displayName = "SliderStep";

export const SliderMarkerGroup = withContext(Slider.MarkerGroup, "markerGroup");
SliderMarkerGroup.displayName = "SliderMarkerGroup";

export const SliderMarker = withContext(Slider.Marker, "marker");
SliderMarker.displayName = "SliderMarker";

export const SliderRange = withContext(Slider.Range, "range");
SliderRange.displayName = "SliderRange";

export const SliderThumb = withContext(Slider.Thumb, "thumb");
SliderThumb.displayName = "SliderThumb";

export const SliderTrack = withContext(Slider.Track, "track");
SliderTrack.displayName = "SliderTrack";

export const SliderValueText = withContext(Slider.ValueText, "valueText");
SliderValueText.displayName = "SliderValueText";
