import { css } from "@moto-ui/react";
import { Link } from "@tanstack/react-router";
import { Fragment } from "react/jsx-runtime";
import BrandmarkDarkLogo from "@/assets/brandmark/dark.svg?react";
import BrandmarkLightLogo from "@/assets/brandmark/light.svg?react";
import WordmarkDarkLogo from "@/assets/wordmark/dark.svg?react";
import WordmarkLightLogo from "@/assets/wordmark/light.svg?react";

type LogoProps = {
	type?: "brandmark" | "wordmark";
};

export function Logo(props: LogoProps) {
	const { type = "brandmark" } = props;

	return (
		<Fragment>
			<Link
				to="/"
				aria-label="Go to home"
				className={css({
					"& > svg": {
						w: "auto",
						h:
							type === "wordmark"
								? { base: "20", sm: "28" }
								: { base: "20", md: "22" },
					},
					h: "fit-content",
					display: {
						base: "block",
						_dark: "none",
					},
				})}
			>
				{type === "brandmark" ? <BrandmarkLightLogo /> : <WordmarkLightLogo />}
			</Link>
			<Link
				to="/"
				aria-label="Go to home"
				className={css({
					"& > svg": {
						w: "auto",
						h:
							type === "wordmark"
								? { base: "20", sm: "28" }
								: { base: "20", md: "22" },
					},
					h: "fit-content",
					display: {
						base: "none",
						_dark: "block",
					},
				})}
			>
				{type === "brandmark" ? <BrandmarkDarkLogo /> : <WordmarkDarkLogo />}
			</Link>
		</Fragment>
	);
}
