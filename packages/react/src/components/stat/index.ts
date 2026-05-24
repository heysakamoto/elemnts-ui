import type { ComponentProps } from "react";
import {
	StatHelpText,
	StatIndicator,
	StatLabel,
	StatRoot,
	StatValueText,
	StatValueUnit,
} from "./stat";

export type StatRootProps = ComponentProps<typeof StatRoot>;
export type StatHelpTextProps = ComponentProps<typeof StatHelpText>;
export type StatIndicatorProps = ComponentProps<typeof StatIndicator>;
export type StatLabelProps = ComponentProps<typeof StatLabel>;
export type StatValueTextProps = ComponentProps<typeof StatValueText>;
export type StatValueUnitProps = ComponentProps<typeof StatValueUnit>;

export type StatProps = {
	RootProps: StatRootProps;
	HelpTextProps: StatHelpTextProps;
	IndicatorProps: StatIndicatorProps;
	LabelProps: StatLabelProps;
	ValueTextProps: StatValueTextProps;
	ValueUnitProps: StatValueUnitProps;
};

export const Stat = Object.assign(StatRoot, {
	Root: StatRoot,
	HelpText: StatHelpText,
	Indicator: StatIndicator,
	Label: StatLabel,
	ValueText: StatValueText,
	ValueUnit: StatValueUnit,
});

export {
	StatRoot,
	StatHelpText,
	StatIndicator,
	StatLabel,
	StatValueText,
	StatValueUnit,
};
