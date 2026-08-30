import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const qrCodeRecipeDefaultVariants = {};
const qrCodeRecipeCompoundVariants = [];

const qrCodeRecipeSlotNames = [
	["root", "qr-code__root"],
	["overlay", "qr-code__overlay"],
	["frame", "qr-code__frame"],
	["pattern", "qr-code__pattern"],
	["downloadTrigger", "qr-code__downloadTrigger"],
];
const qrCodeRecipeSlotFns = /* @__PURE__ */ qrCodeRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			qrCodeRecipeDefaultVariants,
			getSlotCompoundVariant(qrCodeRecipeCompoundVariants, slotName),
		),
	],
);

const qrCodeRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		qrCodeRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const qrCodeRecipeVariantKeys = [];
const getVariantProps = (variants) => ({
	...qrCodeRecipeDefaultVariants,
	...compact(variants),
});

export const qrCodeRecipe = /* @__PURE__ */ Object.assign(qrCodeRecipeFn, {
	__recipe__: false,
	__name__: "qrCodeRecipe",
	raw: (props) => props,
	classNameMap: {},
	variantKeys: qrCodeRecipeVariantKeys,
	variantMap: {},
	splitVariantProps(props) {
		return splitProps(props, qrCodeRecipeVariantKeys);
	},
	getVariantProps,
});
