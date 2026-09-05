import { Container, DateInput, Field, InputGroup } from "@elemnts-ui/react";

export default function WithField() {
	return (
		<Container maxW="24rem">
			<Field.Root>
				<DateInput>
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
				<Field.HelperText>Your date of birth.</Field.HelperText>
			</Field.Root>
		</Container>
	);
}
