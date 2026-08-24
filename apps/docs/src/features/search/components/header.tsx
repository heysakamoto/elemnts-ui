import {
	Combobox,
	Icon,
	InputGroup,
	Show,
	Spinner,
	Surface,
} from "@moto-ui/react";

import { useSearchContext } from "./client";

export function SearchHeader() {
	const { query } = useSearchContext();

	return (
		<Surface.Header
			px="12"
			gap="12"
			align="center"
			direction="row"
		>
			<InputGroup
				size="lg"
				rounded="20"
			>
				<InputGroup.Addon pl="10">
					<Icon
						width={16}
						height={16}
						icon="tabler:search"
						color="icon.secondary"
					/>
				</InputGroup.Addon>
				<Combobox.Input asChild>
					<InputGroup.Input
						px="8"
						fontSize="16"
						placeholder="Search the docs..."
					/>
				</Combobox.Input>
				<InputGroup.Addon pr="8">
					<Show
						fallback={null}
						when={query?.isLoading}
					>
						<Spinner
							size="sm"
							color="icon.tertiary"
						>
							<Icon icon="tabler:loader-2" />
						</Spinner>
					</Show>
				</InputGroup.Addon>
			</InputGroup>
		</Surface.Header>
	);
}
