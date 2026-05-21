import { useEffect, useState } from "react";

export function useLockedDisclosure() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "unset";
	}, [open]);

	return {
		open,
		setOpen,
	};
}
