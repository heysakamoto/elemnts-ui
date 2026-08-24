import { Checkbox } from "@moto-ui/react";

const interests = [
  { label: "Coding", value: "coding" },
  { label: "Design", value: "design" },
  { label: "Writing", value: "writing" },
];

export default function Group() {
  return (
    <Checkbox.Group>
      {interests.map((interest) => (
        <Checkbox size="sm" value={interest.value} key={interest.value}>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Label>{interest.label}</Checkbox.Label>
          <Checkbox.HiddenInput />
        </Checkbox>
      ))}
    </Checkbox.Group>
  );
}
