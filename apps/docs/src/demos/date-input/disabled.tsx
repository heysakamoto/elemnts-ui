import { Container, DateInput, InputGroup } from "@moto-ui/react";

export const Disabled = () => {
	return (
		<Container maxW="10rem">
			<DateInput disabled>
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
		</Container>
	);
};
