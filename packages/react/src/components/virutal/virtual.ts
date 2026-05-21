import { styled } from "@moto-ui/styled-system/jsx";
import type { ComponentProps } from "@moto-ui/styled-system/types";
import * as Base from "./base";

export const Provider = Base.Provider;
export type ProviderProps = ComponentProps<typeof Provider>;

export const Root = Base.Root;
export type RootProps = ComponentProps<typeof Root>;

export const Row = styled(Base.Row);
export type RowProps = ComponentProps<typeof Row>;

export const Sticky = styled(Base.Sticky);
export type StickyProps = ComponentProps<typeof Sticky>;

export const Content = styled(Base.Content);
export type ContentProps = ComponentProps<typeof Content>;

export const RowList = styled(Base.RowList);
export type RowListProps = ComponentProps<typeof RowList>;
