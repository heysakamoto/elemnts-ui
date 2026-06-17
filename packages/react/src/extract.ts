import {
	accordionRecipe,
	alertRecipe,
	anchorRecipe,
	angleSliderRecipe,
	aspectRatioRecipe,
	avatarRecipe,
	badgeRecipe,
	blockquoteRecipe,
	boxRecipe,
	breadcrumbRecipe,
	buttonGroupRecipe,
	buttonRecipe,
	carouselRecipe,
	checkboxRecipe,
	checkmarkRecipe,
	chipRecipe,
	clipboardRecipe,
	codeBlockRecipe,
	codeRecipe,
	collapsibleRecipe,
	colorPickerRecipe,
	comboboxRecipe,
	containerRecipe,
	dataListRecipe,
	datePickerRecipe,
	decorativeBoxRecipe,
	dialogRecipe,
	downloadRecipe,
	editableRecipe,
	elevatedRecipe,
	emptyStateRecipe,
	fieldRecipe,
	fieldsetRecipe,
	fileUploadRecipe,
	floatingPanelRecipe,
	gridRecipe,
	groupRecipe,
	highlightRecipe,
	hoverCardRecipe,
	iconRecipe,
	imageCropperRecipe,
	imageRecipe,
	inputGroupRecipe,
	inputRecipe,
	itemRecipe,
	jsonTreeViewRecipe,
	kbdRecipe,
	labelRecipe,
	listboxRecipe,
	listRecipe,
	markRecipe,
	marqueeRecipe,
	menuRecipe,
	numberInputRecipe,
	paginationRecipe,
	passwordInputRecipe,
	pinInputRecipe,
	popoverRecipe,
	progressRecipe,
	proseRecipe,
	qrCodeRecipe,
	radioGroupRecipe,
	radiomarkRecipe,
	ratingGroupRecipe,
	scrollAreaRecipe,
	scrollShadowRecipe,
	sectionRecipe,
	segmentGroupRecipe,
	selectRecipe,
	separatorGroupRecipe,
	separatorRecipe,
	signaturePadRecipe,
	skeletonRecipe,
	skipNavRecipe,
	sliderRecipe,
	sortableRecipe,
	spinnerRecipe,
	splitterRecipe,
	stackRecipe,
	statRecipe,
	statusRecipe,
	stepsRecipe,
	surfaceRecipe,
	swapRecipe,
	swatchRecipe,
	switchRecipe,
	tableRecipe,
	tabsRecipe,
	tagRecipe,
	tagsInputRecipe,
	textareaRecipe,
	textRecipe,
	themeRecipe,
	tileRecipe,
	timelineRecipe,
	timerRecipe,
	toastRecipe,
	toggleGroupRecipe,
	toggleRecipe,
	tooltipRecipe,
	tourRecipe,
	treeViewRecipe,
	virtualListRecipe,
	visuallyHiddenRecipe,
	wheelPickerRecipe,
} from "@moto-ui/styled-system/recipes";

// ** Accordion Recipe **
accordionRecipe();

// ** Alert Recipe **
alertRecipe({ status: "accent", elevated: true });
alertRecipe({ status: "default", elevated: false });
alertRecipe({ status: "success" });
alertRecipe({ status: "warning" });
alertRecipe({ status: "destructive" });

// ** Anchor Recipe **
anchorRecipe({ variant: "primary" });
anchorRecipe({ variant: "secondary" });
anchorRecipe({ variant: "tertiary" });

// ** AngleSlider Recipe **
angleSliderRecipe();

// ** AspectRatio Recipe **
aspectRatioRecipe();

// ** Avatar Recipe **
avatarRecipe({ size: "2xs", variant: "primary" });
avatarRecipe({ size: "xs", variant: "primary" });
avatarRecipe({ size: "sm", variant: "primary" });
avatarRecipe({ size: "md", variant: "primary" });
avatarRecipe({ size: "lg", variant: "primary" });
avatarRecipe({ size: "xl", variant: "primary" });
avatarRecipe({ size: "2xl", variant: "primary" });
avatarRecipe({ size: "md", variant: "secondary" });
avatarRecipe({ size: "md", variant: "tertiary" });
avatarRecipe({ size: "md", variant: "surface" });

// ** Badge Recipe **
badgeRecipe({
	size: "xs",
	variant: "primary",
	placement: "bottom-left",
});
badgeRecipe({
	size: "sm",
	variant: "secondary",
	placement: "bottom-right",
});
badgeRecipe({
	size: "md",
	variant: "tertiary",
	placement: "top-left",
});
badgeRecipe({
	size: "lg",
	variant: "tertiary",
	placement: "top-right",
});
badgeRecipe({
	size: "xl",
	variant: "tertiary",
	placement: "top-right",
});

// ** Blockquote Recipe **
blockquoteRecipe();

// ** Box Recipe **
boxRecipe();

// ** Breadcrumb Recipe **
breadcrumbRecipe();

// ** ButtonGroup Recipe **
buttonGroupRecipe({
	attached: false,
	fullWidth: false,
	orientation: "horizontal",
});
buttonGroupRecipe({
	attached: true,
	fullWidth: true,
	orientation: "vertical",
});

// ** Button Recipe **
buttonRecipe({
	size: "2xs",
	variant: "primary",
	fullWidth: false,
	iconOnly: false,
});
buttonRecipe({
	size: "xs",
	variant: "primary",
	fullWidth: false,
	iconOnly: false,
});
buttonRecipe({
	size: "sm",
	variant: "primary",
	fullWidth: false,
	iconOnly: false,
});
buttonRecipe({
	size: "md",
	variant: "primary",
	fullWidth: false,
	iconOnly: false,
});
buttonRecipe({
	size: "lg",
	variant: "primary",
	fullWidth: false,
	iconOnly: false,
});
buttonRecipe({
	size: "xl",
	variant: "primary",
	fullWidth: false,
	iconOnly: false,
});
buttonRecipe({
	size: "md",
	variant: "secondary",
	fullWidth: false,
	iconOnly: false,
});
buttonRecipe({
	size: "md",
	variant: "tertiary",
	fullWidth: false,
	iconOnly: false,
});
buttonRecipe({
	size: "md",
	variant: "surface",
	fullWidth: false,
	iconOnly: false,
});
buttonRecipe({
	size: "md",
	variant: "ghost",
	fullWidth: false,
	iconOnly: false,
});
buttonRecipe({
	size: "md",
	variant: "plain",
	fullWidth: false,
	iconOnly: false,
});
buttonRecipe({
	size: "md",
	variant: "primary",
	fullWidth: true,
	iconOnly: false,
});
buttonRecipe({
	size: "md",
	variant: "primary",
	fullWidth: false,
	iconOnly: true,
});
buttonRecipe({
	size: "md",
	variant: "primary",
	fullWidth: false,
	iconOnly: false,
});
buttonRecipe({
	size: "md",
	variant: "primary",
	fullWidth: false,
	iconOnly: false,
});

// ** Carousel Recipe **
carouselRecipe();

// ** Checkbox Recipe **
checkboxRecipe({ size: "xs", variant: "primary" });
checkboxRecipe({ size: "sm", variant: "primary" });
checkboxRecipe({ size: "md", variant: "primary" });
checkboxRecipe({ size: "lg", variant: "primary" });
checkboxRecipe({ size: "xl", variant: "primary" });
checkboxRecipe({ size: "md", variant: "secondary" });
checkboxRecipe({ size: "md", variant: "tertiary" });

// ** Checkmark Recipe **
checkmarkRecipe({ size: "xs", variant: "primary" });
checkmarkRecipe({ size: "sm", variant: "primary" });
checkmarkRecipe({ size: "md", variant: "primary" });
checkmarkRecipe({ size: "lg", variant: "primary" });
checkmarkRecipe({ size: "xl", variant: "primary" });
checkmarkRecipe({ size: "md", variant: "secondary" });

// ** Chip Recipe **
chipRecipe({ size: "xs", variant: "primary", iconOnly: false });
chipRecipe({ size: "sm", variant: "primary", iconOnly: false });
chipRecipe({ size: "md", variant: "primary", iconOnly: false });
chipRecipe({ size: "lg", variant: "primary", iconOnly: false });
chipRecipe({ size: "xl", variant: "primary", iconOnly: false });
chipRecipe({ size: "2xl", variant: "primary", iconOnly: false });
chipRecipe({ size: "md", variant: "secondary", iconOnly: false });
chipRecipe({ size: "md", variant: "tertiary", iconOnly: false });
chipRecipe({ size: "md", variant: "surface", iconOnly: false });
chipRecipe({ size: "md", variant: "ghost", iconOnly: false });
chipRecipe({ size: "md", variant: "primary", iconOnly: true });

// ** Clipboard Recipe **
clipboardRecipe();

// ** CodeBlock Recipe **
codeBlockRecipe();

// ** Code Recipe **
codeRecipe({ size: "xs", variant: "primary", iconOnly: false });
codeRecipe({ size: "sm", variant: "primary", iconOnly: false });
codeRecipe({ size: "md", variant: "primary", iconOnly: false });
codeRecipe({ size: "lg", variant: "primary", iconOnly: false });
codeRecipe({ size: "xl", variant: "primary", iconOnly: false });
codeRecipe({ size: "2xl", variant: "primary", iconOnly: false });
codeRecipe({ size: "md", variant: "secondary", iconOnly: false });
codeRecipe({ size: "md", variant: "tertiary", iconOnly: false });
codeRecipe({ size: "md", variant: "surface", iconOnly: false });
codeRecipe({ size: "md", variant: "ghost", iconOnly: false });
codeRecipe({ size: "md", variant: "primary", iconOnly: true });

// ** Collapsible Recipe **
collapsibleRecipe();

// ** ColorPicker Recipe **
colorPickerRecipe();

// ** Combobox Recipe **
comboboxRecipe();

// ** Container Recipe **
containerRecipe({ fluid: false });
containerRecipe({ fluid: true });

// ** DataList Recipe **
dataListRecipe({ orientation: "vertical" });
dataListRecipe({ orientation: "horizontal" });

// **  DatePicker Recipe **
datePickerRecipe();

// ** DecorativeBox Recipe **
decorativeBoxRecipe({ variant: "primary" });
decorativeBoxRecipe({ variant: "secondary" });

// ** Dialog Recipe **
dialogRecipe({ size: "xs", placement: "center" });
dialogRecipe({ size: "sm", placement: "center" });
dialogRecipe({ size: "md", placement: "center" });
dialogRecipe({ size: "lg", placement: "center" });
dialogRecipe({ size: "xl", placement: "center" });
dialogRecipe({ size: "cover", placement: "center" });
dialogRecipe({ size: "full", placement: "center" });
dialogRecipe({ size: "md", placement: "top" });
dialogRecipe({ size: "md", placement: "bottom" });

// ** Download Recipe **
downloadRecipe();

// ** EmptyState Recipe **
emptyStateRecipe();

// ** Editable Recipe **
editableRecipe();

// ** Elevated Recipe **
elevatedRecipe({ withBorder: true });
elevatedRecipe({ withBorder: false });

// ** Field Recipe **
fieldRecipe();

// ** Fieldset Recipe **
fieldsetRecipe();

// ** FileUpload Recipe **
fileUploadRecipe();

// ** FloatingPanel Recipe **
floatingPanelRecipe();

// ** Grid Recipe **
gridRecipe({ inline: false });
gridRecipe({ inline: true });

// ** Group Recipe **
groupRecipe({ attached: false, fullWidth: false, orientation: "horizontal" });
groupRecipe({ attached: true, fullWidth: true, orientation: "vertical" });

// ** Highlight Recipe **
highlightRecipe({ variant: "primary" });
highlightRecipe({ variant: "secondary" });
highlightRecipe({ variant: "tertiary" });
highlightRecipe({ variant: "underline" });

// ** HoverCard Recipe **
hoverCardRecipe();

// ** Icon Recipe **
iconRecipe();

// ** ImageCropper Recipe **
imageCropperRecipe();

// ** Image Recipe **
imageRecipe();

// ** InputGroup Recipe **
inputGroupRecipe({ size: "xs", variant: "primary" });
inputGroupRecipe({ size: "sm", variant: "primary" });
inputGroupRecipe({ size: "md", variant: "primary" });
inputGroupRecipe({ size: "lg", variant: "primary" });
inputGroupRecipe({ size: "xl", variant: "primary" });
inputGroupRecipe({ size: "md", variant: "secondary" });
inputGroupRecipe({ size: "md", variant: "tertiary" });
inputGroupRecipe({ size: "md", variant: "primary" });

// ** Input Recipe **
inputRecipe({ size: "xs", variant: "primary" });
inputRecipe({ size: "sm", variant: "primary" });
inputRecipe({ size: "md", variant: "primary" });
inputRecipe({ size: "lg", variant: "primary" });
inputRecipe({ size: "xl", variant: "primary" });
inputRecipe({ size: "md", variant: "secondary" });
inputRecipe({ size: "md", variant: "tertiary" });

// ** Item Recipe **
itemRecipe({
	size: "xs",
	variant: "primary",
	surface: "primary",
	iconOnly: false,
});
itemRecipe({
	size: "sm",
	variant: "primary",
	surface: "primary",
	iconOnly: false,
});
itemRecipe({
	size: "md",
	variant: "primary",
	surface: "primary",
	iconOnly: false,
});
itemRecipe({
	size: "lg",
	variant: "primary",
	surface: "primary",
	iconOnly: false,
});
itemRecipe({
	size: "xl",
	variant: "primary",
	surface: "primary",
	iconOnly: false,
});
itemRecipe({
	size: "md",
	variant: "secondary",
	surface: "primary",
	iconOnly: false,
});
itemRecipe({
	size: "md",
	variant: "tertiary",
	surface: "primary",
	iconOnly: false,
});
itemRecipe({
	size: "md",
	variant: "primary",
	surface: "secondary",
	iconOnly: false,
});
itemRecipe({
	size: "md",
	variant: "primary",
	surface: "tertiary",
	iconOnly: false,
});
itemRecipe({
	size: "md",
	variant: "primary",
	surface: "primary",
	iconOnly: true,
});

// ** JsonTreeView Recipe **
jsonTreeViewRecipe();

// ** Kbd Recipe **
kbdRecipe({ size: "xs", variant: "primary", iconOnly: false });
kbdRecipe({ size: "sm", variant: "primary", iconOnly: false });
kbdRecipe({ size: "md", variant: "primary", iconOnly: false });
kbdRecipe({ size: "lg", variant: "primary", iconOnly: false });
kbdRecipe({ size: "xl", variant: "primary", iconOnly: false });
kbdRecipe({ size: "sm", variant: "secondary", iconOnly: false });
kbdRecipe({ size: "sm", variant: "tertiary", iconOnly: false });
kbdRecipe({ size: "sm", variant: "surface", iconOnly: false });
kbdRecipe({ size: "sm", variant: "ghost", iconOnly: false });
kbdRecipe({ size: "sm", variant: "primary", iconOnly: true });

// ** Label Recipe **
labelRecipe();

// ** Listbox Recipe **
listboxRecipe();

// ** List Recipe **
listRecipe();

// ** Mark Recipe **
markRecipe({ variant: "primary" });
markRecipe({ variant: "secondary" });
markRecipe({ variant: "tertiary" });
markRecipe({ variant: "underline" });

// ** Marquee Recipe **
marqueeRecipe();

// ** Menu Recipe **
menuRecipe();

// ** NumberInput Recipe **
numberInputRecipe();

// ** Pagination Recipe **
paginationRecipe();

// ** PasswordInput Recipe **
passwordInputRecipe();

// ** PinInput Recipe **
pinInputRecipe();

// ** Popover Recipe **
popoverRecipe();

// ** Progress Recipe **
progressRecipe({ size: "xs", thickness: "xs" });
progressRecipe({ size: "sm", thickness: "sm" });
progressRecipe({ size: "md", thickness: "sm" });
progressRecipe({ size: "lg", thickness: "sm" });
progressRecipe({ size: "xl", thickness: "sm" });
progressRecipe({ size: "md", thickness: "xs" });
progressRecipe({ size: "md", thickness: "md" });
progressRecipe({ size: "md", thickness: "lg" });
progressRecipe({ size: "md", thickness: "xl" });

// ** Prose Recipe **
proseRecipe();

// ** QrCode Recipe **
qrCodeRecipe();

// ** RadioGroup Recipe **
radioGroupRecipe();

// ** Radiomark Recipe **
radiomarkRecipe({ size: "xs" });
radiomarkRecipe({ size: "sm" });
radiomarkRecipe({ size: "md" });
radiomarkRecipe({ size: "lg" });
radiomarkRecipe({ size: "xl" });

// ** RatingGroup Recipe **
ratingGroupRecipe();

// ** ScrollArea Recipe **
scrollAreaRecipe({ size: "xs", variant: "hover" });
scrollAreaRecipe({ size: "sm", variant: "hover" });
scrollAreaRecipe({ size: "md", variant: "hover" });
scrollAreaRecipe({ size: "lg", variant: "hover" });
scrollAreaRecipe({ size: "xl", variant: "hover" });
scrollAreaRecipe({ size: "sm", variant: "always" });

// ** ScrollShadow Recipe **
scrollShadowRecipe({ isEnabled: true, hideScrollbar: true });
scrollShadowRecipe({ isEnabled: true, hideScrollbar: false });

// ** Section Recipe **
sectionRecipe();

// ** SegmentGroup Recipe **
segmentGroupRecipe({ size: "xs", variant: "primary", fullWidth: false });
segmentGroupRecipe({ size: "sm", variant: "primary", fullWidth: false });
segmentGroupRecipe({ size: "md", variant: "primary", fullWidth: false });
segmentGroupRecipe({ size: "lg", variant: "primary", fullWidth: false });
segmentGroupRecipe({ size: "xl", variant: "primary", fullWidth: false });
segmentGroupRecipe({ size: "md", variant: "secondary", fullWidth: false });
segmentGroupRecipe({ size: "md", variant: "tertiary", fullWidth: false });
segmentGroupRecipe({ size: "md", variant: "primary", fullWidth: true });

// ** Select Recipe **
selectRecipe();

// ** Separator Recipe **
separatorRecipe({ size: "xs", variant: "primary", orientation: "horizontal" });
separatorRecipe({ size: "sm", variant: "primary", orientation: "horizontal" });
separatorRecipe({ size: "md", variant: "primary", orientation: "horizontal" });
separatorRecipe({ size: "lg", variant: "primary", orientation: "horizontal" });
separatorRecipe({ size: "xl", variant: "primary", orientation: "horizontal" });
separatorRecipe({
	size: "xs",
	variant: "secondary",
	orientation: "horizontal",
});
separatorRecipe({ size: "xs", variant: "tertiary", orientation: "horizontal" });
separatorRecipe({ size: "xs", variant: "primary", orientation: "vertical" });

// ** SeparatorGroup Recipe **
separatorGroupRecipe({});

// ** SignaturePad Recipe **
signaturePadRecipe();

// ** Skeleton Recipe **
skeletonRecipe({ effect: "pulse", textOnly: false });
skeletonRecipe({ effect: "shimmer", textOnly: false });
skeletonRecipe({ effect: "pulse", textOnly: true });

// ** SkipNav Recipe **
skipNavRecipe({});

// ** Slider Recipe **
sliderRecipe({ size: "xs" });
sliderRecipe({ size: "sm" });
sliderRecipe({ size: "md" });
sliderRecipe({ size: "lg" });
sliderRecipe({ size: "xl" });

// ** Sortable Recipe **
sortableRecipe();

// ** Spinner Recipe **
spinnerRecipe({ size: "xs", speed: "slow" });
spinnerRecipe({ size: "sm", speed: "slow" });
spinnerRecipe({ size: "md", speed: "slow" });
spinnerRecipe({ size: "lg", speed: "slow" });
spinnerRecipe({ size: "xl", speed: "slow" });
spinnerRecipe({ size: "2xl", speed: "slow" });
spinnerRecipe({ size: "md", speed: "normal" });
spinnerRecipe({ size: "md", speed: "fast" });

// ** Splitter Recipe **
splitterRecipe();

// ** Stack Recipe **
stackRecipe({ inline: false });
stackRecipe({ inline: true });

// ** Stat Recipe **
statRecipe();

// ** Status Recipe **
statusRecipe({ size: "xs" });
statusRecipe({ size: "sm" });
statusRecipe({ size: "md" });
statusRecipe({ size: "lg" });
statusRecipe({ size: "xl" });

// ** Steps Recipe **
stepsRecipe();

// ** Surface Recipe **
surfaceRecipe({ elevated: true, orientation: "vertical" });
surfaceRecipe({ elevated: true, orientation: "horizontal" });
surfaceRecipe({ elevated: false, orientation: "vertical" });

// ** Swap Recipe **
swapRecipe({ mode: "fade" });
swapRecipe({ mode: "flip" });
swapRecipe({ mode: "scale" });
swapRecipe({ mode: "rotate" });

// ** Swatch Recipe **
swatchRecipe({ size: "xs" });
swatchRecipe({ size: "sm" });
swatchRecipe({ size: "md" });
swatchRecipe({ size: "lg" });
swatchRecipe({ size: "xl" });

// ** Switch Recipe **
switchRecipe({ size: "xs" });
switchRecipe({ size: "sm" });
switchRecipe({ size: "md" });
switchRecipe({ size: "lg" });
switchRecipe({ size: "xl" });

// ** Tabs Recipe **
tabsRecipe({ size: "xs", variant: "primary" });
tabsRecipe({ size: "sm", variant: "primary" });
tabsRecipe({ size: "md", variant: "primary" });
tabsRecipe({ size: "lg", variant: "primary" });
tabsRecipe({ size: "xl", variant: "primary" });
tabsRecipe({ size: "md", variant: "secondary" });
tabsRecipe({ size: "md", variant: "tertiary" });

// Table Recipe
tableRecipe({ variant: "primary", size: "xs" });
tableRecipe({ variant: "primary", size: "sm" });
tableRecipe({ variant: "primary", size: "md" });
tableRecipe({ variant: "primary", size: "lg" });
tableRecipe({ variant: "primary", size: "xl" });
tableRecipe({ interactive: true, size: "md" });
tableRecipe({ interactive: true, size: "md" });
tableRecipe({ pinnedHeader: true, size: "md" });
tableRecipe({ variant: "secondary", size: "md" });
tableRecipe({ pinnedHeader: false, size: "md" });
tableRecipe({ alternatingRows: true, size: "md" });
tableRecipe({ alternatingRows: false, size: "md" });
tableRecipe({ showColumnDividers: true, size: "md" });

// ** Tag Recipe **
tagRecipe({
	size: "xs",
	variant: "primary",
	surface: "primary",
	iconOnly: false,
});
tagRecipe({
	size: "sm",
	variant: "primary",
	surface: "primary",
	iconOnly: false,
});
tagRecipe({
	size: "md",
	variant: "primary",
	surface: "primary",
	iconOnly: false,
});
tagRecipe({
	size: "lg",
	variant: "primary",
	surface: "primary",
	iconOnly: false,
});
tagRecipe({
	size: "xl",
	variant: "primary",
	surface: "primary",
	iconOnly: false,
});
tagRecipe({
	size: "md",
	variant: "secondary",
	surface: "primary",
	iconOnly: false,
});
tagRecipe({
	size: "md",
	variant: "tertiary",
	surface: "primary",
	iconOnly: false,
});
tagRecipe({
	size: "md",
	variant: "primary",
	surface: "secondary",
	iconOnly: false,
});
tagRecipe({
	size: "md",
	variant: "primary",
	surface: "tertiary",
	iconOnly: false,
});
tagRecipe({
	size: "md",
	variant: "primary",
	surface: "primary",
	iconOnly: true,
});

// ** TagsInput Recipe **
tagsInputRecipe();

// ** Textarea Recipe **
textareaRecipe({ size: "xs", variant: "primary" });
textareaRecipe({ size: "sm", variant: "primary" });
textareaRecipe({ size: "md", variant: "primary" });
textareaRecipe({ size: "lg", variant: "primary" });
textareaRecipe({ size: "xl", variant: "primary" });
textareaRecipe({ size: "md", variant: "secondary" });
textareaRecipe({ size: "md", variant: "tertiary" });

// ** Text Recipe **
textRecipe({ truncate: false });
textRecipe({ truncate: true });

// ** Theme Recipe **
themeRecipe({});

// ** Tile Recipe **
tileRecipe({
	size: "xs",
	variant: "primary",
	surface: "primary",
	orientation: "vertical",
});
tileRecipe({
	size: "sm",
	variant: "primary",
	surface: "primary",
	orientation: "vertical",
});
tileRecipe({
	size: "md",
	variant: "primary",
	surface: "primary",
	orientation: "vertical",
});
tileRecipe({
	size: "lg",
	variant: "primary",
	surface: "primary",
	orientation: "vertical",
});
tileRecipe({
	size: "xl",
	variant: "primary",
	surface: "primary",
	orientation: "vertical",
});
tileRecipe({
	size: "sm",
	variant: "secondary",
	surface: "primary",
	orientation: "vertical",
});
tileRecipe({
	size: "sm",
	variant: "tertiary",
	surface: "primary",
	orientation: "vertical",
});
tileRecipe({
	size: "sm",
	variant: "primary",
	surface: "secondary",
	orientation: "vertical",
});
tileRecipe({
	size: "sm",
	variant: "primary",
	surface: "tertiary",
	orientation: "vertical",
});
tileRecipe({
	size: "sm",
	variant: "primary",
	surface: "primary",
	orientation: "horizontal",
});

// ** Timeline Recipe **
timelineRecipe();

// ** Timer Recipe **
timerRecipe();

// ** Toast Recipe **
toastRecipe();

// ** ToggleGroup Recipe **
toggleGroupRecipe({
	attached: false,
	fullWidth: false,
	orientation: "horizontal",
});
toggleGroupRecipe({ attached: true, fullWidth: true, orientation: "vertical" });

// ** Toggle Recipe **
toggleRecipe();

// ** Tooltip Recipe **
tooltipRecipe();

// ** Tour Recipe **
tourRecipe();

// ** TreeView Recipe **
treeViewRecipe();

// ** VirtualList Recipe **
virtualListRecipe();

// ** VisuallyHidden Recipe **
visuallyHiddenRecipe();

// ** WheelPicker Recipe **
wheelPickerRecipe({ variant: "primary" });
wheelPickerRecipe({ variant: "secondary" });
wheelPickerRecipe({ variant: "tertiary" });
