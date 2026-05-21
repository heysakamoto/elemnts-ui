import preview from "@.storybook/preview";
import { Container, Locale, Text, useLocaleContext } from "@moto-ui/react";

const meta = preview.meta({
	title: "Right-to-Left (RTL)",
	component: Locale,
});

function Data() {
	const { dir } = useLocaleContext();

	return (
		<Text dir={dir}>
			في عالمنا المتسارع، أصبحت التكنولوجيا جزءاً لا يتجزأ من حياتنا اليومية.
			نعتمد عليها في التواصل مع الآخرين، والحصول على المعلومات، وإنجاز أعمالنا
			بكفاءة وسرعة. لقد غيّرت التكنولوجيا الحديثة أسلوب حياتنا بشكل جذري وعميق.
		</Text>
	);
}

export const RTL = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Locale component can also manage the text direction. This is useful for components that need to adjust their layout or behavior for RTL languages.",
			},
		},
	},
	render: (args) => (
		<Container maxW="24rem">
			<Locale {...args}>
				<Data />
			</Locale>
		</Container>
	),
});

RTL.args = {
	locale: "ar-EG",
};
