import { Container, Timer } from "@elemnts-ui/react";

export default function Basic() {
	return (
		<Container maxW="16rem">
			<Timer autoStart>
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
