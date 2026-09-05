import {
	Button,
	type ButtonProps,
	Icon,
	useClipboard,
	VisuallyHidden,
} from "@elemnts-ui/react";

type Props = ButtonProps & { value: string };

export const CopyButton = (props: Props) => {
	const { value, children, ...restProps } = props;
	const api = useClipboard({ value });

	const icons: Record<string, string> = {
		true: "tabler:check",
		false: "tabler:copy",
	};

	return (
		<Button
			iconOnly
			variant="ghost"
			disabled={!value}
			_notHover={{ "& svg": { color: "icon.secondary" } }}
			{...restProps}
			{...api.getTriggerProps()}
		>
			<VisuallyHidden>Copy code</VisuallyHidden>
			<Icon width={14} height={14} icon={icons[String(api.copied)] ?? ""} />
			{children}
		</Button>
	);
};
CopyButton.displayName = "CopyButton";
