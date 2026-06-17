import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Represents the current scroll state of a scrollable element.
 * @property atTop - Whether the element is scrolled to the top.
 * @property atBottom - Whether the element is scrolled to the bottom.
 * @property atLeft - Whether the element is scrolled to the left.
 * @property atRight - Whether the element is scrolled to the right.
 * @property hasOverflowY - Whether the element has vertical overflow.
 * @property hasOverflowX - Whether the element has horizontal overflow.
 */
type ScrollState = {
	atTop: boolean;
	atBottom: boolean;
	atLeft: boolean;
	atRight: boolean;
	hasOverflowY: boolean;
	hasOverflowX: boolean;
};

/**
 * Custom hook that tracks scroll position and overflow of an element.
 * Provides a ref to attach to any scrollable HTML element, and reactive
 * state indicating whether the element is scrolled to any edge.
 *
 * @template T - The type of HTMLElement (defaults to HTMLElement).
 * @returns An object containing the ref and current scroll state properties.
 */
export function useScrollShadow<T extends HTMLElement>() {
	const ref = useRef<T | null>(null);

	const [state, setState] = useState<ScrollState>({
		atTop: false,
		atBottom: false,
		atLeft: false,
		hasOverflowY: false,
		hasOverflowX: false,
		atRight: false,
	});

	/**
	 * Updates the scroll state by reading the current scroll position
	 * and dimensions of the referenced element.
	 */
	const update = useCallback(() => {
		const el = ref.current;
		if (!el) return;

		const {
			scrollTop,
			scrollLeft,
			scrollHeight,
			clientHeight,
			scrollWidth,
			clientWidth,
		} = el;

		setState({
			atTop: scrollTop <= 0,
			atBottom: scrollTop + clientHeight >= scrollHeight - 1,
			atLeft: scrollLeft <= 0,
			hasOverflowY: scrollHeight > clientHeight,
			hasOverflowX: scrollWidth > clientWidth,
			atRight: scrollLeft + clientWidth >= scrollWidth - 1,
		});
	}, []);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		update();
		el.addEventListener("scroll", update, { passive: true });

		const resize = new ResizeObserver(update);
		resize.observe(el);

		return () => {
			el.removeEventListener("scroll", update);
			resize.disconnect();
		};
	}, [update]);

	return {
		ref,
		...state,
	};
}
