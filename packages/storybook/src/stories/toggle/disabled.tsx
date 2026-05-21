import { Icon, Toggle } from "@moto-ui/react";
import meta from "./stories";

export const Disabled = meta.story({
	parameters: {
		docs: {
			description: {
				story: "The toggle can be disabled using the `disabled` prop.",
			},
		},
	},
	render: () => (
		<Toggle.Root
			disabled
			aria-label="Toggle underline"
		>
			<Icon
				icon="tabler:underline"
				width={16}
				height={16}
			/>
		</Toggle.Root>
	),
});
