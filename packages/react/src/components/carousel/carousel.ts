import { Carousel } from "@ark-ui/react/carousel";
import { createStyleContext } from "../../styled-system/jsx";
import { carouselRecipe } from "../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(carouselRecipe);

export const CarouselRootProvider = withProvider(Carousel.RootProvider, "root");
CarouselRootProvider.displayName = "CarouselRootProvider";

export const CarouselRoot = withProvider(Carousel.Root, "root");
CarouselRoot.displayName = "CarouselRoot";

export const CarouselControl = withContext(Carousel.Control, "control");
CarouselControl.displayName = "CarouselControl";

export const CarouselProgressText = withContext(
	Carousel.ProgressText,
	"progressText",
);
CarouselProgressText.displayName = "CarouselProgressText";

export const CarouselItemGroup = withContext(Carousel.ItemGroup, "itemGroup");
CarouselItemGroup.displayName = "CarouselItemGroup";

export const CarouselItem = withContext(Carousel.Item, "item");
CarouselItem.displayName = "CarouselItem";

export const CarouselIndicatorGroup = withContext(
	Carousel.IndicatorGroup,
	"indicatorGroup",
);
CarouselIndicatorGroup.displayName = "CarouselIndicatorGroup";

export const CarouselIndicator = withContext(Carousel.Indicator, "indicator");
CarouselIndicator.displayName = "CarouselIndicator";

export const CarouselNextTrigger = withContext(
	Carousel.NextTrigger,
	"nextTrigger",
);
CarouselNextTrigger.displayName = "CarouselNextTrigger";

export const CarouselPrevTrigger = withContext(
	Carousel.PrevTrigger,
	"prevTrigger",
);
CarouselPrevTrigger.displayName = "CarouselPrevTrigger";

export const CarouselAutoplayTrigger = withContext(
	Carousel.AutoplayTrigger,
	"autoplayTrigger",
);
CarouselAutoplayTrigger.displayName = "CarouselAutoplayTrigger";

export const CarouselAutoplayIndicator = withContext(
	Carousel.AutoplayIndicator,
	"autoplayIndicator",
);
CarouselAutoplayIndicator.displayName = "CarouselAutoplayIndicator";

export const CarouselContext = Carousel.Context;
