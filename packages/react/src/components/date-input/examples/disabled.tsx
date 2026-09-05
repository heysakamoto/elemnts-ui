import { Container, DateInput, InputGroup } from "@elemnts-ui/react";

export default function Disabled() {
	return (
		<Container maxW="24rem">
			<DateInput disabled>
				<DateInput.Control>
					<DateInput.SegmentGroup asChild>
						<InputGroup>
							<DateInput.SegmentContext>
								{(segment) => <DateInput.Segment segment={segment} />}
							</DateInput.SegmentContext>
						</InputGroup>
					</DateInput.SegmentGroup>
				</DateInput.Control>
				<DateInput.HiddenInput />
			</DateInput>
		</Container>
	);
}
