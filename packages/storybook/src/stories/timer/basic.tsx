import preview from "@.storybook/preview";
import { Button, ButtonGroup, Container, Timer } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Timer,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `Timer` component consists of a root container and several subcomponents to manage and display time units and controls.",
			},
		},
	},
	render: () => (
		<Container maxW="12rem">
			<Timer
				startMs={0}
				targetMs={60 * 60 * 1000}
			>
				<Timer.Area justify="center">
					<Timer.ItemGroup>
						<Timer.Item type="days" />
						<Timer.ItemLabel textAlign="center">D</Timer.ItemLabel>
					</Timer.ItemGroup>
					<Timer.Separator>:</Timer.Separator>
					<Timer.ItemGroup>
						<Timer.Item type="hours" />
						<Timer.ItemLabel textAlign="center">H</Timer.ItemLabel>
					</Timer.ItemGroup>
					<Timer.Separator>:</Timer.Separator>
					<Timer.ItemGroup>
						<Timer.Item type="minutes" />
						<Timer.ItemLabel textAlign="center">M</Timer.ItemLabel>
					</Timer.ItemGroup>
					<Timer.Separator>:</Timer.Separator>
					<Timer.ItemGroup>
						<Timer.Item type="seconds" />
						<Timer.ItemLabel textAlign="center">S</Timer.ItemLabel>
					</Timer.ItemGroup>
				</Timer.Area>
				<Timer.Control mt="12">
					<ButtonGroup
						size="xs"
						fullWidth
						justify="center"
						variant="secondary"
						colorPalette="neutral"
					>
						<Timer.ActionTrigger
							asChild
							action="start"
						>
							<Button>Start</Button>
						</Timer.ActionTrigger>
						<Timer.ActionTrigger
							asChild
							action="pause"
						>
							<Button>Pause</Button>
						</Timer.ActionTrigger>
						<Timer.ActionTrigger
							asChild
							action="resume"
						>
							<Button>Resume</Button>
						</Timer.ActionTrigger>
						<Timer.ActionTrigger
							asChild
							action="reset"
						>
							<Button>Reset</Button>
						</Timer.ActionTrigger>
					</ButtonGroup>
				</Timer.Control>
			</Timer>
		</Container>
	),
});
