import { Container, Locale, Text, useLocaleContext } from "@moto-ui/react";

export function RTL() {
	return (
		<Container maxW="24rem">
			<Locale locale="ar-EG">
				<Data />
			</Locale>
		</Container>
	);
}

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
