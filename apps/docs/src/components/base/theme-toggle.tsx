import { Button, type ButtonProps, Icon, Toggle } from "@moto-ui/react";
import { useState } from "react";
import { applyTheme, getSystemTheme } from "@/utils/theme";
import { ComposedTooltip } from "./composed-tooltip";

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
		<ComposedTooltip
			trigger={
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
						onClick={() => toggleTheme()}
						css={{ "&:not(:hover)": { color: "icon.secondary" } }}
						{...props}
					>
						<Icon
							width={20}
							height={20}
							icon={theme === "dark" ? "tabler:sun" : "tabler:moon"}
						/>
					</Button>
				</Toggle>
			}
			content="Toggle theme"
		/>
	);
}
