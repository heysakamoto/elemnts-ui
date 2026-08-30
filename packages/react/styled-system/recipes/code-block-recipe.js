import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const codeBlockRecipeDefaultVariants = {};
const codeBlockRecipeCompoundVariants = [];

const codeBlockRecipeSlotNames = [
	["root", "code-block__root"],
	["header", "code-block__header"],
	["title", "code-block__title"],
	["control", "code-block__control"],
	["copyTrigger", "code-block__copyTrigger"],
	["collaspseTrigger", "code-block__collaspseTrigger"],
	["content", "code-block__content"],
	["code", "code-block__code"],
	["codeText", "code-block__codeText"],
];
const codeBlockRecipeSlotFns = /* @__PURE__ */ codeBlockRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			codeBlockRecipeDefaultVariants,
			getSlotCompoundVariant(codeBlockRecipeCompoundVariants, slotName),
		),
	],
);

const codeBlockRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		codeBlockRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const codeBlockRecipeVariantKeys = [];
const getVariantProps = (variants) => ({
	...codeBlockRecipeDefaultVariants,
	...compact(variants),
});

export const codeBlockRecipe = /* @__PURE__ */ Object.assign(
	codeBlockRecipeFn,
	{
		__recipe__: false,
		__name__: "codeBlockRecipe",
		raw: (props) => props,
		classNameMap: {},
		variantKeys: codeBlockRecipeVariantKeys,
		variantMap: {},
		splitVariantProps(props) {
			return splitProps(props, codeBlockRecipeVariantKeys);
		},
		getVariantProps,
	},
);
