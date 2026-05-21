import { Button, ButtonGroup, Container, Timer } from "@moto-ui/react";

export const Countdown = () => {
	return (
		<Container maxW="12rem">
			<Timer.Root
				startMs={60 * 1000}
				targetMs={0}
				countdown
			>
				<Timer.Area justify="center">
					<Timer.Item type="seconds" />
					<Timer.ItemLabel
						fontSize="14"
						color="fg.tertiary"
						verticalAlign="bottom"
					>
						s
					</Timer.ItemLabel>
				</Timer.Area>
				<Timer.Control mt="12">
					<ButtonGroup
						size="xs"
						fullWidth
						justify="center"
						colorPalette="neutral"
						variant="secondary"
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
			</Timer.Root>
		</Container>
	);
};
