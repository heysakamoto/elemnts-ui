import { Frame, Stack, Text } from "@moto-ui/react";

export function Basic() {
	return (
		<Frame
			rounded="8"
			border="1px solid {colors.stroke.primary}"
		>
			<Stack style={{ padding: 16 }}>
				<Text style={{ fontFamily: "system-ui", fontSize: 14 }}>
					Rendered inside an iframe
				</Text>
				<Text
					style={{
						fontFamily: "system-ui",
						fontSize: 14,
						color: "#666",
						marginTop: 8,
					}}
				>
					This content is isolated from the parent page styles and rendered in
					its own document context.
				</Text>
			</Stack>
		</Frame>
	);
}
