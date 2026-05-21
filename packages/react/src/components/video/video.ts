import { styled } from "@moto-ui/styled-system/jsx";
import type { ComponentProps } from "@moto-ui/styled-system/types";

export type VideoProps = ComponentProps<typeof Video>;
export const Video = styled("video");
Video.displayName = "Video";
