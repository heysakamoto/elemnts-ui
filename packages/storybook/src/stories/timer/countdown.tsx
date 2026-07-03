import { Button, ButtonGroup, Container, Timer } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Countdown",
	component: Timer,
});

export const Countdown = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Set the `countdown` prop on the `Root` component to decrement the timer.",
			},
		},
	},
	args: {
		countdown: true,
		startMs: 124 * 60 * 1000,
		targetMs: 0,
	},
	render: (args) => (
		<Container maxW="16rem">
			<Timer
				countdown
				targetMs={0}
				startMs={124 * 60 * 1000}
				{...args}
			>
				<Timer.Area justify="center">
					<Timer.ItemGroup>
						<Timer.Item
							type="hours"
							fontSize="24"
						/>
					</Timer.ItemGroup>
					<Timer.Separator>:</Timer.Separator>
					<Timer.ItemGroup>
						<Timer.Item
							type="minutes"
							fontSize="24"
						/>
					</Timer.ItemGroup>
					<Timer.Separator>:</Timer.Separator>
					<Timer.ItemGroup>
						<Timer.Item
							type="seconds"
							fontSize="24"
						/>
					</Timer.ItemGroup>
				</Timer.Area>
				<Timer.Control mt="96">
					<ButtonGroup
						gap="8"
						size="md"
						fullWidth
						justify="center"
						variant="primary"
						colorPalette="neutral"
					>
						<Timer.ActionTrigger
							asChild
							action="start"
						>
							<Button rounded="24">Start</Button>
						</Timer.ActionTrigger>
						<Timer.ActionTrigger
							asChild
							action="pause"
						>
							<Button
								rounded="24"
								variant="secondary"
							>
								Pause
							</Button>
						</Timer.ActionTrigger>
						<Timer.ActionTrigger
							asChild
							action="resume"
						>
							<Button
								rounded="24"
								variant="secondary"
							>
								Resume
							</Button>
						</Timer.ActionTrigger>
						<Timer.ActionTrigger
							asChild
							action="reset"
						>
							<Button
								rounded="24"
								variant="primary"
								colorPalette="destructive"
							>
								Stop
							</Button>
						</Timer.ActionTrigger>
					</ButtonGroup>
				</Timer.Control>
			</Timer>
		</Container>
	),
});
