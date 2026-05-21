import type { ComponentProps } from "react";
import {
	FormatByte,
	FormatNumber,
	FormatRelativeTime,
	FormatRoot,
} from "./format";

export type FormatByteProps = ComponentProps<typeof FormatByte>;
export type FormatNumberProps = ComponentProps<typeof FormatNumber>;
export type FormatRelativeTimeProps = ComponentProps<typeof FormatRelativeTime>;
export type FormatRootProps = ComponentProps<typeof FormatRoot>;

export const Format = Object.assign(FormatRoot, {
	Byte: FormatByte,
	Number: FormatNumber,
	RelativeTime: FormatRelativeTime,
	Root: FormatRoot,
});

export type Format = {
	ByteProps: FormatByteProps;
	NumberProps: FormatNumberProps;
	RelativeTimeProps: FormatRelativeTimeProps;
	RootProps: FormatRootProps;
	Props: FormatRootProps;
};

export { FormatByte, FormatNumber, FormatRelativeTime, FormatRoot };
