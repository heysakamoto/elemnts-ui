import type { ComponentProps } from "react";
import { Show } from "./show";

export type ShowProps<T> = ComponentProps<typeof Show<T>>;

export { Show };
