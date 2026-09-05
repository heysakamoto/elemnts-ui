import { Container, Image, Text, useHighlight } from "@elemnts-ui/react";

const img =
	"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20preserveAspectRatio='none'%20viewBox='0%200%20100%2012'%3E%3Cpath%20d='M2%208%20Q50%204%2098%207'%20stroke='%231447e6'%20stroke-width='4'%20fill='none'%20stroke-linecap='round'/%3E%3C/svg%3E";

export default function Squiggle() {
	const chunks = useHighlight({
		text: "Endless scale, powered by real humans.",
		query: ["endless", "real humans."],
	});

	return (
		<Container maxW="20rem">
			<Text as="strong" fontSize="1.2rem" fontWeight="500" lineHeight="sm">
				{chunks.map((chunk, idx) => {
					if (chunk.match) {
						return (
							<Text
								as="span"
								lineHeight="1"
								position="relative"
								color="accent.primary"
							>
								{chunk.text}
								<Image
									h="4"
									alt=""
									left="0"
									src={img}
									bottom="0"
									loading="lazy"
									position="absolute"
								/>
							</Text>
						);
					}
					return <Text key={idx.toString()}>{chunk.text}</Text>;
				})}
			</Text>
		</Container>
	);
}
