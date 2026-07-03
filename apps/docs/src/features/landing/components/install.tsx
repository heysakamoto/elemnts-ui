import {
	Anchor,
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
import { Fragment } from "react";

import { DynamicCode } from "@/components/base/dynamic-code";

const timelines = [
	{
		id: "1",
		frontmatter: {
			title: "Prerequisites",
			description: (
				<Fragment>
					Before jumping in, make sure your Panda project is all set up. If you
					haven't done that yet, check out{" "}
					<Anchor
						target="_blank"
						href="https://panda-css.com/docs/overview/getting-started"
					>
						pandacss installation guide
					</Anchor>{" "}
					and once you've completed that, come back to this guide.
				</Fragment>
			),
		},
		tabs: undefined,
	},
	{
		id: "2",
		frontmatter: {
			title: "Install dependencies",
			description: (
				<Fragment>
					Moto UI is built on{" "}
					<Anchor
						href="https://ark-ui.com"
						target="_blank"
					>
						Ark UI
					</Anchor>{" "}
					acting as its headless framework, which delivers a collection of
					unstyled, accessible components.
				</Fragment>
			),
		},
		tabs: [
			{
				label: "npm",
				value: "npm",
				lang: "bash",
				disabled: false,
				content:
					"npm i @moto-ui/react @moto-ui/preset-base @moto-ui/styled-system",
			},
			{
				label: "yarn",
				value: "yarn",
				lang: "bash",
				disabled: false,
				content:
					"yarn add @moto-ui/react @moto-ui/preset-base @moto-ui/styled-system",
			},
			{
				label: "pnpm",
				value: "pnpm",
				lang: "bash",
				disabled: false,
				content:
					"pnpm i @moto-ui/react @moto-ui/preset-base @moto-ui/styled-system",
			},
			{
				label: "bun",
				value: "bun",
				lang: "bash",
				disabled: false,
				content:
					"bun add @moto-ui/react @moto-ui/preset-base @moto-ui/styled-system",
			},
		],
	},
	{
		id: "3",
		frontmatter: {
			title: "Update Panda config file",
			description: `Configure your Panda CSS setup by adding the required settings to your config file.`,
		},
		tabs: [
			{
				label: "React",
				value: "react",
				lang: "ts",
				disabled: false,
				content: `{
  outExtension: "js",
  jsxFramework: "react",
  presets: [basePreset],
  outdir: "styled-system",
  importMap: "@moto-ui/styled-system",
  include: [
    "src/**/*.{(ts, tsx)}",
    "node_modules/@moto-ui/react/dist/buildinfo.json",
  ],
}`,
			},
			{
				label: "Solid",
				value: "solid",
				lang: "ts",
				disabled: true,
				content: ``,
			},
			{
				label: "Svelte",
				value: "svelte",
				lang: "ts",
				disabled: true,
				content: ``,
			},
			{
				label: "Vue",
				value: "vue",
				lang: "ts",
				disabled: true,
				content: ``,
			},
		],
	},
	{
		id: "4",
		frontmatter: {
			title: "Usage",
			description: `Start building with Moto UI by importing the components you need from the appropriate packages.`,
		},
		tabs: [
			{
				label: "React",
				value: "react",
				lang: "tsx",
				disabled: false,
				content: `import { Button } from "@moto-ui/react";

export default function App() {
  return (
    <Button>Click me</Button>
  );
}`,
			},
			{
				label: "Solid",
				value: "solid",
				lang: "tsx",
				disabled: true,
				content: ``,
			},
			{
				label: "Svelte",
				value: "svelte",
				lang: "tsx",
				disabled: true,
				content: ``,
			},
			{
				label: "Vue",
				value: "vue",
				lang: "tsx",
				disabled: true,
				content: ``,
			},
		],
	},
];

export function LandingFeatureInstall() {
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
					<For each={timelines}>
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
