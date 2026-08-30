import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const editableRecipeDefaultVariants = {};
const editableRecipeCompoundVariants = [];

const editableRecipeSlotNames = [
	["root", "editable__root"],
	["control", "editable__control"],
	["input", "editable__input"],
	["area", "editable__area"],
	["label", "editable__label"],
	["preview", "editable__preview"],
	["editTrigger", "editable__editTrigger"],
	["submitTrigger", "editable__submitTrigger"],
	["cancelTrigger", "editable__cancelTrigger"],
];
const editableRecipeSlotFns = /* @__PURE__ */ editableRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			editableRecipeDefaultVariants,
			getSlotCompoundVariant(editableRecipeCompoundVariants, slotName),
		),
	],
);

const editableRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		editableRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const editableRecipeVariantKeys = [];
const getVariantProps = (variants) => ({
	...editableRecipeDefaultVariants,
	...compact(variants),
});

export const editableRecipe = /* @__PURE__ */ Object.assign(editableRecipeFn, {
	__recipe__: false,
	__name__: "editableRecipe",
	raw: (props) => props,
	classNameMap: {},
	variantKeys: editableRecipeVariantKeys,
	variantMap: {},
	splitVariantProps(props) {
		return splitProps(props, editableRecipeVariantKeys);
	},
	getVariantProps,
});
