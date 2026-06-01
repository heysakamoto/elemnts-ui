import { isValidElement } from "react";

/**
 * Props for the Show component.
 *
 * @template T - The type of the value to conditionally display.
 */
export interface ShowProps<T> {
	/**
	 * The value to check for truthiness. When truthy, children are rendered.
	 * When falsy (null, undefined, etc.), the fallback is shown.
	 */
	when: T | null | undefined;
	/**
	 * Optional content to display when `when` is falsy.
	 */
	fallback?: React.ReactNode | undefined;
	/**
	 * The content to render when `when` is truthy.
	 * Can be a ReactNode or a render function that receives the truthy value.
	 */
	children: React.ReactNode | ((props: T) => React.ReactNode);
}

/**
 * A conditional rendering component that renders children only when the `when` prop is truthy.
 * If `when` is falsy, it renders the `fallback` prop instead.
 * If `children` is a function, it will be called with the truthy value of `when`.
 *
 * @template T - The type of the condition value.
 * @param props - The component props.
 * @returns The rendered React node.
 */
export function Show<T>(props: ShowProps<T>) {
	const { when, fallback, children } = props;
	let result: React.ReactNode;

	if (!when) {
		result = fallback;
	} else {
		result = typeof children === "function" ? children(when) : children;
	}

	return isValidElement(result) ? result : result;
}
