import type { ComponentProps } from "react";
import { Environment } from "./environment";

export type EnvironmentProps = ComponentProps<typeof Environment>;

export type { UseEnvironmentContext } from "@ark-ui/react/environment";
export { useEnvironmentContext } from "@ark-ui/react/environment";

export { Environment };
