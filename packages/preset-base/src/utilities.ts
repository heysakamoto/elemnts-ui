import type { Config } from "@pandacss/dev";

export const utilities: Config["utilities"] = {
	extend: {
		flexDirection: {
			property: "flexDirection",
			className: "flex",
			shorthand: "direction",
		},
		alignItems: {
			property: "alignItems",
			className: "items",
			shorthand: "align",
		},
		justifyContent: {
			property: "justifyContent",
			className: "justify",
			shorthand: "justify",
		},
		flexWrap: {
			property: "flexWrap",
			shorthand: "wrap",
			className: "fw",
		},
		alignSelf: {
			property: "alignSelf",
			className: "self",
			shorthand: "self",
		},
		flexGrow: {
			property: "flexGrow",
			className: "grow",
			shorthand: "grow",
		},
		flexShrink: {
			property: "flexShrink",
			className: "shrink",
			shorthand: "shrink",
		},
		flexBasis: {
			property: "flexBasis",
			className: "basis",
			shorthand: "basis",
		},
		gridTemplateColumns: {
			property: "gridTemplateColumns",
			className: "grid-tc",
			shorthand: "cols",
		},
		gridTemplateRows: {
			property: "gridTemplateRows",
			className: "grid-ts",
			shorthand: "rows",
		},
		gridAutoFlow: {
			property: "gridAutoFlow",
			className: "grid-f",
			shorthand: "flow",
		},
		gridAutoColumns: {
			property: "gridAutoColumns",
			className: "grid-ac",
			shorthand: "autoCols",
		},
		gridAutoRows: {
			property: "gridAutoRows",
			className: "grid-ar",
			shorthand: "autoRows",
		},
		gridColumn: {
			property: "gridColumn",
			className: "grid-c",
			shorthand: "column",
		},
		gridRow: {
			property: "gridRow",
			className: "grid-r",
			shorthand: "row",
		},
		gridColumnEnd: {
			property: "gridColumnEnd",
			className: "grid-ce",
			shorthand: "columnEnd",
		},
		gridColumnStart: {
			property: "gridColumnStart",
			className: "grid-cs",
			shorthand: "columnStart",
		},
		gridRowEnd: {
			property: "gridRowEnd",
			className: "grid-re",
			shorthand: "rowEnd",
		},
		gridRowStart: {
			property: "gridRowStart",
			className: "grid-rs",
			shorthand: "rowStart",
		},
		colSpan: {
			className: "grid-sc",
			transform(v) {
				return { gridColumn: `span ${v}` };
			},
		},
		rowSpan: {
			className: "grid-sr",
			transform(v) {
				return { gridRow: `span ${v}` };
			},
		},
	},
};
