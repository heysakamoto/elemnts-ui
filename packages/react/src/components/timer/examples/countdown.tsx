import { Container, Timer } from "@moto-ui/react";

export default function Countdown() {
	return (
		<Container maxW="16rem">
			<Timer
				autoStart
				countdown
				targetMs={0}
				startMs={124 * 60 * 1000}
			>
				<Timer.Area justify="center">
					<Timer.ItemGroup>
						<Timer.Item type="hours" />
					</Timer.ItemGroup>
					<Timer.Separator>:</Timer.Separator>
					<Timer.ItemGroup>
						<Timer.Item type="minutes" />
					</Timer.ItemGroup>
					<Timer.Separator>:</Timer.Separator>
					<Timer.ItemGroup>
						<Timer.Item type="seconds" />
					</Timer.ItemGroup>
				</Timer.Area>
			</Timer>
		</Container>
	);
}
