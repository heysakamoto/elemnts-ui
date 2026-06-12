/// <reference types="vite/client" />

declare module "*.svg?react" {
	import type { FunctionComponent, SVGProps } from "react";

	const ReactComponent: FunctionComponent<
		SVGProps<SVGSVGElement> & { title?: string }
	>;
	export default ReactComponent;
}

declare module "*.svg" {
	const src: string;
	export default src;
}
