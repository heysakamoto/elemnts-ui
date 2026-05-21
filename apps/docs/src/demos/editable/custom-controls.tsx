import { Button, Editable, Icon, Input } from "@moto-ui/react";

export const CustomControls = () => {
	return (
		<Editable
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
	);
};
