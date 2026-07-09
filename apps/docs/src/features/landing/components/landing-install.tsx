import {
	Chip,
	Container,
	For,
	Section,
	Separator,
	Show,
	Surface,
	Tabs,
	Text,
	Timeline,
} from "@moto-ui/react";

import { DynamicCode } from "@/components/base/dynamic-code";
import { LANDING_INSTALLATION_TIMELINES } from "../constants";

export function LandingInstall() {
	return (
		<Section py={["80", "120"]}>
			<Container
				fluid
				px="16"
				maxW="40rem"
			>
				<Text
					as="h2"
					maxW="32rem"
					fontFamily="InstrumentSerif"
					fontSize={{ base: "32", lg: "44" }}
				>
					How to Install
				</Text>
				<Text
					letterSpacing="xs"
					fontSize={{ base: "16", md: "18" }}
				>
					Download the Moto UI packages using your preferred package manager.
				</Text>
				<Timeline mt="40">
					<For each={LANDING_INSTALLATION_TIMELINES}>
						{(timeline) => {
							return (
								<Timeline.Item key={timeline.id}>
									<Timeline.Connector>
										<Timeline.Separator>
											<Separator
												h="full"
												orientation="vertical"
											/>
										</Timeline.Separator>
										<Timeline.Indicator>
											<Chip iconOnly>{timeline.id}</Chip>
										</Timeline.Indicator>
									</Timeline.Connector>
									<Timeline.Content gap="0">
										<Text
											as="h3"
											lineHeight="xs"
											fontSize={["20", "24"]}
											fontFamily="InstrumentSerif"
										>
											{timeline.frontmatter.title}
										</Text>
										<Text
											mt="12"
											letterSpacing="sm"
										>
											{timeline.frontmatter.description}
										</Text>
										<Show when={timeline.tabs}>
											{(tabs) => (
												<Tabs
													mt="24"
													size="sm"
													fontFamily="mono"
													defaultValue={tabs[0]?.value}
												>
													<Tabs.List w="fit">
														<Tabs.Indicator />
														<For each={tabs}>
															{(tab) => (
																<Tabs.Trigger
																	fontSize="13"
																	key={tab.value}
																	value={tab.value}
																	disabled={tab.disabled}
																>
																	{tab.label}
																</Tabs.Trigger>
															)}
														</For>
													</Tabs.List>
													<Surface
														mt="16"
														delta={1}
														minH="3rem"
														rounded="20"
														fontSize="13"
														justify="start"
													>
														<Surface.Content p="16">
															<For each={tabs}>
																{(tab) => (
																	<Tabs.Content
																		key={tab.value}
																		value={tab.value}
																	>
																		<DynamicCode
																			lang={tab.lang}
																			code={tab.content}
																		/>
																	</Tabs.Content>
																)}
															</For>
														</Surface.Content>
													</Surface>
												</Tabs>
											)}
										</Show>
									</Timeline.Content>
								</Timeline.Item>
							);
						}}
					</For>
				</Timeline>
			</Container>
		</Section>
	);
}
