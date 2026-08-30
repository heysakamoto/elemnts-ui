import { Frame, Text } from "@moto-ui/react";

export default function Basic() {
	return (
		<Frame>
			<Text
				style={{
					fontSize: 16,
					lineHeight: 1.5,
					fontWeight: "400",
					fontFamily: "system-ui",
				}}
			>
				This content is isolated from the parent page styles and rendered in its
				own document context.
			</Text>
		</Frame>
	);
}
