export const conditions = {
	extend: {
		icon: "& svg",
		notHover: "&:not(:hover, [data-hover])",
		notFocus: "&:not(:focus, [data-focus])",
		notValid: "&:not(:valid, [data-valid])",
		notActive: "&:not(:active, [data-active])",
		notHidden: "&:not([hidden], [data-hidden])",
		notInvalid: "&:not(:invalid, [data-invalid])",
		notDisabled: "&:not(:disabled, [data-disabled])",
		notSelected: "&:not([data-selected], [aria-selected=true])",
		notChecked: "&:not(:checked, [data-checked], [aria-checked=true])",
	},
};
