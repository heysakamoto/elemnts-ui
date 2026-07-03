import type { ComponentProps } from "react";

import BrandmarkSvg from "@/assets/logo/brandmark.svg?react";
import WordmarkSvg from "@/assets/logo/wordmark.svg?react";

type LogoProps = ComponentProps<"svg">;

export function LogoBrandmark(props: LogoProps) {
	return <BrandmarkSvg {...props} />;
}

export function LogoWordmark(props: LogoProps) {
	return (
		<WordmarkSvg
			style={{ marginLeft: -10 }}
			{...props}
		/>
	);
}

export const Logo = Object.assign(LogoBrandmark, {
	Wordmark: LogoWordmark,
	Brandmark: LogoBrandmark,
});
