import preview from "@.storybook/preview";
import {
	Button,
	Checkbox,
	Container,
	Group,
	Icon,
	Steps,
	Surface,
	Text,
} from "@moto-ui/react";

const steps = [
	{
		title: "What's your role?",
		options: [
			{
				value: "designer",
				label: "Designer",
				description: "Visual or Interaction",
			},
			{
				value: "engineer",
				label: "Engineer",
				description: "Frontend or Backend",
			},
			{
				value: "product-manager",
				label: "Product Manager",
				description: "Product or Program",
			},
			{
				value: "researcher",
				label: "Researcher",
				description: "User or Market",
			},
		],
	},
	{
		title: "Which tool do you use most?",
		options: [
			{
				value: "figma",
				label: "Figma",
				description: "Design source of truth",
			},
			{
				value: "vscode",
				label: "VS Code",
				description: "Code editor",
			},
			{
				value: "linear",
				label: "Linear",
				description: "Issue tracker",
			},
			{
				value: "notion",
				label: "Notion",
				description: "Docs and Planning",
			},
		],
	},
	{
		title: "How big is your team?",
		options: [
			{
				value: "just-me",
				label: "Just me",
				description: "Solo founder or freelancer",
			},
			{
				value: "2-10",
				label: "2-10",
				description: "Small team or pod",
			},
			{
				value: "11-50",
				label: "11-50",
				description: "A few cross-functional teams",
			},
			{
				value: "50+",
				label: "50+",
				description: "Full organizations",
			},
		],
	},
	{
		title: "How long have you been doing this?",
		options: [
			{
				value: "less-than-a-year",
				label: "Less than a year",
				description: "Just getting started",
			},
			{
				value: "1-3 years",
				label: "1-3 years",
				description: "Finding your rythm",
			},
			{
				value: "4-7 years",
				label: "4-7 years",
				description: "Comfortable in the craft",
			},
			{
				value: "8+ years",
				label: "8+ years",
				description: "Seasoned",
			},
		],
	},
];

const meta = preview.meta({
	title: "Basic",
	component: Steps,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use Steps to build a multi-step flow (wizard) with a clickable list of steps and matching content panels.",
			},
		},
	},
	render: (args) => <Component {...args} />,
});

export function Component(props: Steps["RootProps"]) {
	return (
		<Container maxW="30rem">
			<Steps
				{...props}
				count={steps.length - 1}
			>
				<Surface
					delta={1}
					rounded="24"
					shadowLevel={2}
				>
					{steps.map((step, idx) => {
						const key = idx.toString();
						const index = idx;
						return (
							<Steps.Content
								key={key}
								index={index}
							>
								<Surface.Header
									px="16"
									pt="12"
									gap="12"
									align="start"
									direction="column"
								>
									<Surface.Description fontSize="12">
										Question {index + 1} of {steps.length}
									</Surface.Description>
									<Surface.Title>{step.title}</Surface.Title>
								</Surface.Header>
								<Surface.Content
									px="16"
									pt="24"
								>
									<Checkbox.Group
										gap="16"
										maxSelectedValues={1}
									>
										{step.options.map((option) => {
											return (
												<Checkbox
													key={option.label}
													value={option.value}
												>
													<Checkbox.Control>
														<Checkbox.Indicator>
															<Icon
																width="12"
																height="12"
																icon="tabler:check"
															/>
														</Checkbox.Indicator>
													</Checkbox.Control>
													<Checkbox.Label
														fontSize="13"
														letterSpacing="sm"
													>
														{option.label}{" "}
														<Text
															as="span"
															color="fg.tertiary"
														>
															{option.description}
														</Text>
													</Checkbox.Label>
													<Checkbox.HiddenInput />
												</Checkbox>
											);
										})}
									</Checkbox.Group>
								</Surface.Content>
							</Steps.Content>
						);
					})}
					<Surface.Footer
						pt="24"
						pb="12"
						px="16"
					>
						<Group justify="space-between">
							<Steps.PrevTrigger asChild>
								<Button
									size="xs"
									rounded="24"
									variant="ghost"
									colorPalette="neutral"
								>
									Back
								</Button>
							</Steps.PrevTrigger>
							<Steps.NextTrigger asChild>
								<Button
									size="xs"
									rounded="24"
									variant="ghost"
									colorPalette="neutral"
								>
									Skip
								</Button>
							</Steps.NextTrigger>
						</Group>
					</Surface.Footer>
				</Surface>
			</Steps>
		</Container>
	);
}
