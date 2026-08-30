import {
	Button,
	Container,
	Editable,
	Icon,
	Input,
	VisuallyHidden,
} from "@moto-ui/react";

export default function CustomControls() {
	return (
		<Container maxW="24rem">
			<Editable
				placeholder="Edit the messae"
				defaultValue="Click the edit icon"
			>
				<Editable.Control>
					<Editable.Context>
						{(ctx) => {
							if (!ctx.editing) {
								return (
									<Editable.EditTrigger asChild>
										<Button
											iconOnly
											variant="surface"
										>
											<VisuallyHidden>Edit</VisuallyHidden>
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
									>
										<VisuallyHidden>Cancel</VisuallyHidden>
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
						<Button
							asChild
							variant="ghost"
							fontSize="16"
						>
							<Editable.Preview />
						</Button>
						<Editable.Input asChild>
							<Input fontSize="16" />
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
										>
											<VisuallyHidden>Done</VisuallyHidden>
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
		</Container>
	);
}
