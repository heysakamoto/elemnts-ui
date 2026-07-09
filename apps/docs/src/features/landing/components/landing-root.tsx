import { Fragment, type PropsWithChildren } from "react";

type LandingRootProps = PropsWithChildren;
export function LandingRoot(props: LandingRootProps) {
	const { children } = props;

	return <Fragment>{children}</Fragment>;
}
