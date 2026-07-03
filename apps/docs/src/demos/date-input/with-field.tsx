import { Container, DateInput, Field, InputGroup } from "@moto-ui/react";

export const WithField = () => {
	return (
		<Container maxW="10rem">
			<Field.Root>
				<DateInput>
					<DateInput.Control>
						<DateInput.SegmentGroup asChild>
							<InputGroup
								px="8"
								rounded="16"
							>
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
};
