import { Elevated } from "@moto-ui/react";

export default function Levels() {
	return (
		<Elevated
			p="16"
			w="full"
			delta={0}
			rounded="16"
			fontSize="13"
			direction="column"
			color="fg.tertiary"
		>
			Level 1
			<Elevated
				delta={1}
				mt="8"
				p="16"
				rounded="16"
				direction="column"
			>
				Level 2
				<Elevated
					delta={1}
					mt="8"
					p="16"
					rounded="16"
					direction="column"
				>
					Level 3
					<Elevated
						delta={1}
						mt="8"
						p="16"
						rounded="16"
						direction="column"
					>
						Level 4
						<Elevated
							delta={1}
							mt="8"
							p="16"
							rounded="16"
							direction="column"
						>
							Level 5
							<Elevated
								delta={1}
								mt="8"
								p="16"
								rounded="16"
								direction="column"
							>
								Level 6
								<Elevated
									delta={1}
									mt="8"
									p="16"
									rounded="16"
									direction="column"
								>
									Level 7
									<Elevated
										mt="8"
										p="16"
										delta={1}
										rounded="16"
										direction="column"
									>
										Level 8
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
