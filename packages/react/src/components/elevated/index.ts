import type { ComponentProps } from "react";
import { BaseElevated, Elevated } from "./elevated";

export type ElevateProps = ComponentProps<typeof Elevated>;
export type BaseElevatedProps = ComponentProps<typeof BaseElevated>;

export { Elevated, BaseElevated };
