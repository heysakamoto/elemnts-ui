import preview from "@.storybook/preview";
import { Button, Editable, Icon, Input } from "@moto-ui/react";

const meta = preview.meta({
	title: "Custom Controls",
	component: Editable,
});

export const CustomControls = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"You can use Editable.Control and Editable.Context to render custom triggers based on the editing state.",
			},
		},
	},
	render: (args) => (
		<Editable
			{...args}
			placeholder="Click to edit"
			defaultValue="Click the edit icon"
		>
			<Editable.Control
				gap="8"
				align="center"
			>
				<Editable.Context>
					{(ctx) => {
						if (!ctx.editing) {
							return (
								<Editable.EditTrigger asChild>
									<Button
										iconOnly
										variant="surface"
										size="xs"
									>
										<Icon
											icon="tabler:pencil"
											width={16}
											height={16}
										/>
									</Button>
								</Editable.EditTrigger>
							);
						}
						return (
							<Editable.CancelTrigger asChild>
								<Button
									iconOnly
									variant="surface"
									colorPalette="destructive"
									size="xs"
								>
									<Icon
										icon="tabler:x"
										width={16}
										height={16}
									/>
								</Button>
							</Editable.CancelTrigger>
						);
					}}
				</Editable.Context>
				<Editable.Area>
					<Editable.Preview rounded="24" />
					<Editable.Input asChild>
						<Input
							variant="secondary"
							size="sm"
							rounded="24"
							maxW="16rem"
						/>
					</Editable.Input>
				</Editable.Area>
				<Editable.Context>
					{(ctx) => {
						if (ctx.editing) {
							return (
								<Editable.SubmitTrigger asChild>
									<Button
										iconOnly
										variant="surface"
										size="xs"
									>
										<Icon
											icon="tabler:check"
											width={16}
											height={16}
										/>
									</Button>
								</Editable.SubmitTrigger>
							);
						}
						return null;
					}}
				</Editable.Context>
			</Editable.Control>
		</Editable>
	),
});
