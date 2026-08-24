import { Container, Icon, Stack, WheelPicker } from "@moto-ui/react";

const options = [
	{
		label: (
			<Stack
				direction="row"
				align="center"
				gap="8"
			>
				<Icon
					icon="tabler:device-gamepad-2"
					width={18}
					height={18}
				/>{" "}
				Gaming
			</Stack>
		),
		value: "gaming",
	},
	{
		label: (
			<Stack
				direction="row"
				align="center"
				gap="8"
			>
				<Icon
					width={18}
					height={18}
					icon="tabler:music"
				/>{" "}
				Music
			</Stack>
		),
		value: "music",
	},
	{
		label: (
			<Stack
				direction="row"
				align="center"
				gap="8"
			>
				<Icon
					width={18}
					height={18}
					icon="tabler:video"
				/>{" "}
				Film
			</Stack>
		),
		value: "film",
	},
	{
		label: (
			<Stack
				direction="row"
				align="center"
				gap="8"
			>
				<Icon
					width={18}
					height={18}
					icon="tabler:book"
				/>{" "}
				Reading
			</Stack>
		),
		value: "reading",
	},
	{
		label: (
			<Stack
				direction="row"
				align="center"
				gap="8"
			>
				<Icon
					width={18}
					height={18}
					icon="tabler:bike"
				/>{" "}
				Cycling
			</Stack>
		),
		value: "cycling",
	},
	{
		label: (
			<Stack
				direction="row"
				align="center"
				gap="8"
			>
				<Icon
					width={18}
					height={18}
					icon="tabler:run"
				/>{" "}
				Running
			</Stack>
		),
		value: "running",
	},
	{
		label: (
			<Stack
				direction="row"
				align="center"
				gap="8"
			>
				<Icon
					width={18}
					height={18}
					icon="tabler:swimming"
				/>{" "}
				Swimming
			</Stack>
		),
		value: "swimming",
	},
	{
		label: (
			<Stack
				direction="row"
				align="center"
				gap="8"
			>
				<Icon
					width={18}
					height={18}
					icon="tabler:mountain"
				/>{" "}
				Hiking
			</Stack>
		),
		value: "hiking",
	},
	{
		label: (
			<Stack
				direction="row"
				align="center"
				gap="8"
			>
				<Icon
					width={18}
					height={18}
					icon="tabler:pennant-2"
				/>{" "}
				Golf
			</Stack>
		),
		value: "golf",
	},
	{
		label: (
			<Stack
				direction="row"
				align="center"
				gap="8"
			>
				<Icon
					width={18}
					height={18}
					icon="tabler:karate"
				/>{" "}
				Karate
			</Stack>
		),
		value: "karate",
	},
];

export default function Introduction() {
	return (
		<Container maxW="14rem">
			<WheelPicker variant="secondary">
				<WheelPicker.Control>
					<WheelPicker.Options
						options={options}
						defaultValue="gaming"
					/>
				</WheelPicker.Control>
			</WheelPicker>
		</Container>
	);
}
