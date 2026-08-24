import type { Config } from "@pandacss/dev";

import { conditions } from "./conditions";
import { globalCss } from "./global-css";
import { utilities } from "./utilities";

export const config: Config = {
	utilities: utilities,
	conditions: conditions,
	globalCss: globalCss,
};
