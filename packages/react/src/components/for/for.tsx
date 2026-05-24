import type { Dict } from "../../utils";

export type ForProps<T> = {
	each: T[] | readonly T[] | undefined;
	fallback?: React.ReactNode | undefined;
	children: (item: Exclude<T, undefined>, index: number) => React.ReactNode;
};

/**
 * A utility component for rendering a list of items.
 *
 * @template T - The type of items in the list. Can be `string`, `number`, `Dict`, or `undefined`.
 *
 * @param {ForProps<T>} props - The props for the `For` component.
 * @param {T[] | readonly T[] | undefined} props.each - The array of items to iterate over.
 * @param {React.ReactNode} [props.fallback] - Optional fallback content to render when the array is empty.
 * @param {(item: Exclude<T, undefined>, index: number) => React.ReactNode} props.children - A render function called for each item in the array.
 *
 * @returns {React.ReactNode} The rendered list of items, the fallback content, or `null`.
 *
 * @example
 * <For each={items} fallback={<p>No items found.</p>}>
 *   {(item, index) => <div key={index}>{item}</div>}
 * </For>
 */
export function For<T extends string | number | Dict | undefined>(
	props: ForProps<T>,
): React.ReactNode {
	const { each, fallback, children } = props;

	if (each?.length === 0) {
		return fallback || null;
	}

	return each?.map(children as any);
}
