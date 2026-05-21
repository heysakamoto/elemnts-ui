import { useCallback, useEffect, useRef, useState } from "react";

type ScrollState = {
	atTop: boolean;
	atBottom: boolean;
	atLeft: boolean;
	atRight: boolean;
	hasOverflowY: boolean;
	hasOverflowX: boolean;
};

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
