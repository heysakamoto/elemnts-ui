import { Button, type ButtonProps, Icon, useClipboard } from "@moto-ui/react";

type Props = ButtonProps & { value: string };

export const CopyButton = (props: Props) => {
	const { value, ...restProps } = props;
	const api = useClipboard({ value });

	if (!value) return null;

	const icons: Record<string, string> = {
		true: "tabler:check",
		false: "tabler:copy",
	};

	return (
		<Button
			iconOnly
			size="sm"
			rounded="full"
			flexShrink={0}
			variant="ghost"
			aria-label="Copy code"
			colorPalette="neutral"
			_notHover={{ color: "icon.secondary" }}
			{...restProps}
			{...api.getTriggerProps()}
		>
			<Icon
				icon={icons[String(api.copied)] ?? ""}
				width={16}
				height={16}
			/>
		</Button>
	);
};
CopyButton.displayName = "CopyButton";
