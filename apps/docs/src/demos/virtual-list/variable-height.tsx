import { VirtualList } from "@moto-ui/react";

export function VariableHeight() {
	const rowHeights = new Array(1000)
		.fill(0)
		.map(() => 25 + Math.round(Math.random() * 100));

	return (
		<VirtualList.Root
			count={1000}
			estimateSize={(index) => rowHeights[index] ?? 50}
		>
			<VirtualList.Viewport
				style={{
					height: "400px",
					width: "100%",
					border: "1px solid var(--colors-border-default)",
					borderRadius: "var(--radii-md)",
				}}
			>
				<VirtualList.Container>
					<VirtualList.Items>
						{(index) => (
							<div
								style={{
									padding: "8px",
									borderBottom: "1px solid var(--colors-border-subtle)",
									height: `${rowHeights[index]}px`,
								}}
							>
								Row {index} ({rowHeights[index]}px)
							</div>
						)}
					</VirtualList.Items>
				</VirtualList.Container>
			</VirtualList.Viewport>
		</VirtualList.Root>
	);
}
