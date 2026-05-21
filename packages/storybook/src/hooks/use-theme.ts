import { useEffect } from "react";

export function useTheme(theme: "light" | "dark") {
	useEffect(() => {
		const htmlElement = document.documentElement;
		if (theme === "dark") {
			htmlElement.classList.add("dark");
		} else {
			htmlElement.classList.remove("dark");
		}
	}, [theme]);
}
