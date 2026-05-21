import { ark, type HTMLArkProps } from "@ark-ui/react/factory";
import { styled } from "@moto-ui/styled-system/jsx";
import { spinnerRecipe } from "@moto-ui/styled-system/recipes";
import type { RefAttributes } from "react";

const DefaultIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1"
				d="M12 6V3m4.25 4.75L18.4 5.6M18 12h3m-4.75 4.25l2.15 2.15M12 18v3m-4.25-4.75L5.6 18.4M6 12H3m4.75-4.25L5.6 5.6"
			/>
		</svg>
	);
};

export const Spinner = styled(
	(props: HTMLArkProps<"span"> & RefAttributes<HTMLSpanElement>) => {
		const { children = <DefaultIcon />, ref, ...rest } = props;

		return (
			<ark.span
				data-part="root"
				data-scope="spinner"
				{...rest}
			>
				{children}
			</ark.span>
		);
	},
	spinnerRecipe,
);
Spinner.displayName = "Spinner";
