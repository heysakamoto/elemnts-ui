import type { ComponentProps } from "react";

import { useScrollShadow } from "./client";
import { ScrollShadow } from "./scroll-shadow";

export type ScrollShadowProps = ComponentProps<typeof ScrollShadow>;
export { ScrollShadow, useScrollShadow };
