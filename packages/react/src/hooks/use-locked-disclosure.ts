import { useEffect, useState } from "react";

/**
 * Custom hook that manages a locked disclosure state.
 * When `open` is true, sets `document.body.style.overflow` to "hidden"
 * to prevent scrolling, and restores it to "unset" when false.
 *
 * @example
 * ```tsx
 * import { useLockedDisclosure } from './useLockedDisclosure';
 *
 * function Modal() {
 *   const { open, setOpen } = useLockedDisclosure();
 *   return (
 *     <div>
 *       <button onClick={() => setOpen(!open)}>Toggle</button>
 *       {open && <div>Modal content</div>}
 *     </div>
 *   );
 * }
 * ```
 */
export function useLockedDisclosure(): {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
} {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "unset";
	}, [open]);

	return {
		open,
		setOpen,
	};
}
