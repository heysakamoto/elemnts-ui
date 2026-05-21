import { useEffect, useRef, useState } from "react";

/**
 * @param {string[]} itemIds - An array of headings' IDs to track for active state
 */

export function useActiveHeadings(itemIds: string[]) {
	const [activeIds, setActiveIds] = useState<string[]>([]);
	const visibleElements = useRef<Set<string>>(new Set());

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				let hasChanges = false;
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visibleElements.current.add(entry.target.id);
						hasChanges = true;
					} else {
						visibleElements.current.delete(entry.target.id);
						hasChanges = true;
					}
				});

				if (hasChanges) {
					// Filter itemIds based on what's in the Set to maintain document order
					const currentlyVisible = itemIds.filter((id) =>
						visibleElements.current.has(id),
					);

					// Update state if there are visible items.
					// If empty (e.g., in a long section), we retain the last known active headings.
					if (currentlyVisible.length > 0) {
						setActiveIds(currentlyVisible);
					}
				}
			},
			// Expanded the trigger zone slightly so more headings can be "in view" at once
			{ rootMargin: "-20px 0px -10% 0px" },
		);

		itemIds.forEach((id) => {
			const element = document.getElementById(id);
			if (element) {
				observer.observe(element);
			}
		});

		return () => observer.disconnect();
	}, [itemIds]);

	function isActive(id: string) {
		return activeIds.includes(id);
	}

	return { activeIds, isActive };
}
