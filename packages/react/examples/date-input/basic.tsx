import { Container, DateInput, InputGroup } from "@moto-ui/react";

export default function Basic() {
  return (
    <Container maxW="24rem">
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
    </Container>
  );
}
