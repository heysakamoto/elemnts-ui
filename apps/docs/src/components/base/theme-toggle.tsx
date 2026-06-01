import { Button, type ButtonProps, Icon, Toggle } from "@moto-ui/react";
import { useState } from "react";
import { applyTheme, getSystemTheme } from "@/utils/theme";

type ThemeToggleProps = ButtonProps;

const defaultTheme = getSystemTheme();

export function ThemeToggle(props: ThemeToggleProps) {
	const [theme, setTheme] = useState(defaultTheme);

	function toggleTheme() {
		const nextTheme = theme === "dark" ? "light" : "dark";

		setTheme(nextTheme);
		applyTheme(nextTheme);
	}

	return (
		<Toggle
			asChild
			value={theme}
		>
			<Button
				iconOnly
				size="md"
				rounded="24"
				variant="ghost"
				colorPalette="neutral"
				aria-label="Toggle theme"
				onClick={() => toggleTheme()}
				css={{ "&:not(:hover)": { color: "icon.secondary" } }}
				{...props}
			>
				<Icon
					width={16}
					height={16}
					icon={theme === "dark" ? "tabler:sun" : "tabler:moon"}
				/>
			</Button>
		</Toggle>
	);
}
