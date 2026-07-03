import type { ComponentProps } from "react";

import { Elevated, ElevatedBase } from "./elevated";

export type ElevateProps = ComponentProps<typeof Elevated>;
export type BaseElevatedProps = ComponentProps<typeof ElevatedBase>;

export { Elevated, ElevatedBase };
