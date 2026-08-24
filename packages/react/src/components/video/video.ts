import { styled } from "../../../styled-system/jsx";
import type { ComponentProps } from "../../../styled-system/types";

export type VideoProps = ComponentProps<typeof Video>;
export const Video = styled("video");
Video.displayName = "Video";
