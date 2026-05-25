import type { Ref, RefCallback, RefObject } from "react";

/**
 * A ref that can be assigned to a React element. This includes:
 * - `RefObject<T | null>`: A mutable ref object with a `current` property.
 * - `Ref<T>`: A React ref, which can be a callback ref or a ref object.
 * - `undefined` or `null`: No-op values that are safely ignored.
 */
type AssignableRef<T> = RefObject<T | null> | Ref<T> | undefined | null;

/**
 * Merges an array of React refs into a single memoized callback ref.
 *
 * Useful when you need to assign multiple refs to a single element, for example
 * when combining a forwarded ref with a local ref.
 *
 * @template T - The type of the DOM element or component instance the refs point to.
 * @param refs - A list of refs to merge. Accepts callback refs, object refs, `null`, and `undefined`.
 * @returns A single `RefCallback<T>` that, when called, updates all provided refs with the given node.
 *
 * @example
 * ```tsx
 * const Component = React.forwardRef<HTMLDivElement>((props, forwardedRef) => {
 *   const localRef = useRef<HTMLDivElement>(null);
 *   return <div ref={mergeRefs(localRef, forwardedRef)} {...props} />;
 * });
 * ```
 */
export function mergeRefs<T>(...refs: AssignableRef<T>[]): RefCallback<T> {
	return (node: T | null) => {
		refs.forEach((ref) => {
			if (!ref) return;

			if (typeof ref === "function") {
				ref(node);
			} else {
				// Assign to the object ref's current property
				(ref as RefObject<T | null>).current = node;
			}
		});
	};
}
