import { type Assign, ark, Portal } from "@ark-ui/react";
import { Toast as ArkToast, Toaster as ArkToaster } from "@ark-ui/react/toast";
import { Icon } from "@iconify/react";
import type { ComponentProps, ReactNode } from "react";

import { createStyleContext } from "../../../styled-system/jsx";
import { toastRecipe } from "../../../styled-system/recipes";
import { Button } from "../button";
import { Spinner } from "../spinner";

const { withProvider, withContext } = createStyleContext(toastRecipe);

export const ToastGroup = ArkToaster;
ToastGroup.displayName = "ToastGroup";

export const ToastRoot = withProvider(ArkToast.Root, "root");
ToastRoot.displayName = "ToastRoot";

export const ToastContext = ArkToast.Context;

export const ToastTitle = withContext(ArkToast.Title, "title");
ToastTitle.displayName = "ToastTitle";

export const ToastIndicator = withContext(ark.div, "indicator");
ToastIndicator.displayName = "ToastIndicator";

export const ToastControl = withContext(ark.div, "control");
ToastControl.displayName = "ToastControl";

export const ToastDescription = withContext(
	ArkToast.Description,
	"description",
);
ToastDescription.displayName = "ToastDescription";

export const ToastActionTrigger = withContext(
	ArkToast.ActionTrigger,
	"actionTrigger",
);
ToastActionTrigger.displayName = "ToastActionTrigger";

export const ToastCloseTrigger = withContext(
	ArkToast.CloseTrigger,
	"closeTrigger",
);
ToastCloseTrigger.displayName = "ToastCloseTrigger";

export const Toast = Object.assign(ToastRoot, {
	ActionTrigger: ToastActionTrigger,
	CloseTrigger: ToastCloseTrigger,
	Context: ToastContext,
	Control: ToastControl,
	Description: ToastDescription,
	Group: ToastGroup,
	Indicator: ToastIndicator,
	Root: ToastRoot,
	Title: ToastTitle,
});

const ICON_MAP: Record<string, any> = {
	info: (
		<Icon
			icon="tabler:info-circle-filled"
			width={20}
			height={20}
		/>
	),
	error: (
		<Icon
			icon="tabler:circle-x-filled"
			width={20}
			height={20}
		/>
	),
	success: (
		<Icon
			icon="tabler:circle-check-filled"
			width={20}
			height={20}
		/>
	),
	warning: (
		<Icon
			icon="tabler:alert-hexagon-filled"
			width={20}
			height={20}
		/>
	),
	loading: (
		<Spinner
			size="md"
			color="icon.secondary"
		>
			<Icon
				icon="tabler:loader-2"
				width={20}
				height={20}
			/>
		</Spinner>
	),
	custom: null,
};

export type ToasterProps = Assign<
	Omit<ComponentProps<typeof ToastGroup>, "children">,
	{
		title?: ReactNode;
		indicator?: ReactNode;
		description?: ReactNode;
		control?: ReactNode;
		root?: (toast: ArkToast.Options) => ReactNode;
	}
>;

export const Toaster = (props: ToasterProps) => {
	const { title, description, indicator, control, root, ...rest } = props;

	return (
		<Portal>
			<ToastGroup {...rest}>
				{(toast) => {
					if (root) {
						return root(toast);
					}

					const ToastIcon = ICON_MAP[toast.type as keyof typeof ICON_MAP];

					return (
						<ToastRoot key={toast.id}>
							{indicator ? (
								indicator
							) : ToastIcon ? (
								<ToastIndicator>{ToastIcon}</ToastIndicator>
							) : null}
							{toast.title ? <ToastTitle>{toast.title}</ToastTitle> : title}
							{toast.description ? (
								<ToastDescription>{toast.description}</ToastDescription>
							) : (
								description
							)}
							<ToastControl>
								{control ? (
									control
								) : toast.action ? (
									<Button
										size="xs"
										rounded="full"
										variant="secondary"
										onClick={() => toast.action?.onClick()}
									>
										{toast.action.label}
									</Button>
								) : null}
							</ToastControl>
						</ToastRoot>
					);
				}}
			</ToastGroup>
		</Portal>
	);
};
