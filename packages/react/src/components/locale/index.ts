import type { ComponentProps } from "react";
import { Locale } from "./locale";

export type LocaleProps = ComponentProps<typeof Locale>;

export type {
	UseCollatorProps,
	UseDateFormatterProps,
	UseFilterProps,
	UseFilterReturn,
	UseLocaleContext,
} from "@ark-ui/react/locale";
export {
	useCollator,
	useDateFormatter,
	useFilter,
	useLocaleContext,
} from "@ark-ui/react/locale";

export { Locale };
