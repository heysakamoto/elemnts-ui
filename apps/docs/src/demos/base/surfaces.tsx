import { Elevated, Text } from "@moto-ui/react";

export function SurfacesBase() {
	return (
		<Elevated
			delta={0}
			p="16"
			w="full"
			h="360px"
			rounded="24"
			fontFamily="mono"
			fontSize="12"
		>
			<Text
				color="fg.tertiary"
				mb="12"
			>
				Page
			</Text>
			<Elevated
				delta={1}
				p="16"
				rounded="20"
				flex="1"
			>
				<Text
					color="fg.tertiary"
					mb="12"
				>
					Card/Surface/Overlay
				</Text>
				<Elevated
					delta={1}
					p="16"
					rounded="16"
					flex="1"
				>
					<Text
						color="fg.tertiary"
						mb="12"
					>
						Inner Overlay
					</Text>
				</Elevated>
			</Elevated>
		</Elevated>
	);
}

export function SurfacesAll() {
	return (
		<Elevated
			delta={0}
			p="16"
			w="full"
			rounded="24"
			fontFamily="mono"
			fontSize="12"
		>
			<Text
				color="fg.tertiary"
				mb="12"
			>
				Level 1
			</Text>
			<Elevated
				delta={1}
				p="16"
				rounded="20"
			>
				<Text
					color="fg.tertiary"
					mb="12"
				>
					Level 2
				</Text>
				<Elevated
					delta={1}
					p="16"
					rounded="16"
				>
					<Text
						color="fg.tertiary"
						mb="12"
					>
						Level 3
					</Text>
					<Elevated
						delta={1}
						p="16"
						rounded="12"
					>
						<Text
							color="fg.tertiary"
							mb="12"
						>
							Level 4
						</Text>
						<Elevated
							delta={1}
							p="16"
							rounded="8"
						>
							<Text
								color="fg.tertiary"
								mb="12"
							>
								Level 5
							</Text>
							<Elevated
								delta={1}
								p="16"
								rounded="8"
							>
								<Text
									color="fg.tertiary"
									mb="12"
								>
									Level 6
								</Text>
								<Elevated
									delta={1}
									p="16"
									rounded="8"
								>
									<Text
										color="fg.tertiary"
										mb="12"
									>
										Level 7
									</Text>
									<Elevated
										delta={1}
										p="16"
										rounded="8"
									>
										<Text
											color="fg.tertiary"
											mb="12"
										>
											Level 8
										</Text>
									</Elevated>
								</Elevated>
							</Elevated>
						</Elevated>
					</Elevated>
				</Elevated>
			</Elevated>
		</Elevated>
	);
}
