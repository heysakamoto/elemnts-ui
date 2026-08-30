import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const avatarRecipeDefaultVariants = {
	size: "md",
	variant: "primary",
};
const avatarRecipeCompoundVariants = [];

const avatarRecipeSlotNames = [
	["root", "avatar__root"],
	["image", "avatar__image"],
	["fallback", "avatar__fallback"],
];
const avatarRecipeSlotFns = /* @__PURE__ */ avatarRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			avatarRecipeDefaultVariants,
			getSlotCompoundVariant(avatarRecipeCompoundVariants, slotName),
		),
	],
);

const avatarRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		avatarRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const avatarRecipeVariantKeys = ["size", "variant"];
const getVariantProps = (variants) => ({
	...avatarRecipeDefaultVariants,
	...compact(variants),
});

export const avatarRecipe = /* @__PURE__ */ Object.assign(avatarRecipeFn, {
	__recipe__: false,
	__name__: "avatarRecipe",
	raw: (props) => props,
	classNameMap: {},
	variantKeys: avatarRecipeVariantKeys,
	variantMap: {
		size: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"],
		variant: ["primary", "secondary", "tertiary", "ghost", "surface"],
	},
	splitVariantProps(props) {
		return splitProps(props, avatarRecipeVariantKeys);
	},
	getVariantProps,
});
