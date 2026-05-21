import { css } from "@moto-ui/react";
import { Link } from "@tanstack/react-router";
import { Fragment } from "react/jsx-runtime";
import BrandmarkLogoDark from "@/assets/dark_brandmark.svg?react";
import WordmarkLogoDark from "@/assets/dark_wordmark.svg?react";
import BrandmarkLogoLight from "@/assets/light_brandmark.svg?react";
import WordmarkLogoLight from "@/assets/light_wordmark.svg?react";

type LogoProps = {
	type?: "brandmark" | "wordmark";
};

export function Logo(props: LogoProps) {
	const { type = "brandmark" } = props;

	return (
		<Fragment>
			<Link
				to="/"
				className={css({
					"& > svg": {
						w: type === "wordmark" ? "auto" : "auto",
						h: type === "wordmark" ? { base: "20", sm: "26" } : "auto",
					},
					display: {
						base: "block",
						_dark: "none",
					},
				})}
			>
				{type === "brandmark" ? <BrandmarkLogoLight /> : <WordmarkLogoLight />}
			</Link>
			<Link
				to="/"
				className={css({
					"& > svg": {
						w: type === "wordmark" ? "auto" : "auto",
						h: type === "wordmark" ? { base: "20", sm: "28" } : "auto",
					},
					display: {
						base: "none",
						_dark: "block",
					},
				})}
			>
				{type === "brandmark" ? <BrandmarkLogoDark /> : <WordmarkLogoDark />}
			</Link>
		</Fragment>
	);
}
