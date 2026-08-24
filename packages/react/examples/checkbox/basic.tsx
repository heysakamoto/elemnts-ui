import { Checkbox } from "@moto-ui/react";

export default function Basic() {
  return (
    <Checkbox size="sm">
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Label>Do you agree to the terms and conditions?</Checkbox.Label>
      <Checkbox.HiddenInput />
    </Checkbox>
  );
}
