import { Section, Text, Toc } from "@elemnts-ui/react";
import { useRef } from "react";

const items = [
	{ value: "02-importance", depth: 2, label: "Importance" },
	{ value: "02-integrations", depth: 2, label: "Integrations" },
	{ value: "02-free-blocks", depth: 3, label: "Free Blocks" },
	{ value: "02-configuration", depth: 3, label: "Configuration" },
	{ value: "02-api-reference", depth: 2, label: "API Reference" },
	{ value: "02-hooks", depth: 3, label: "Hooks" },
	{ value: "02-components", depth: 3, label: "Components" },
	{ value: "02-examples", depth: 2, label: "Examples" },
];

export default function NestedHeadings() {
	const contentRef = useRef<HTMLElement>(null);

	return (
		<Toc items={items} gap="32" scrollEl={() => contentRef.current}>
			<Toc.Content ref={contentRef} h="32rem" spaceY="56" pr="16">
				{items.map((item) => (
					<Section key={item.value} spaceY="20">
						<Text
							as="div"
							id={item.value}
							fontWeight="500"
							fontSize={[18, 20]}
							data-depth={item.depth}
						>
							{item.label}
						</Text>
						<div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Phasellus pretium cursus lacus condimentum varius. Nulla
								lacinia, leo quis tincidunt auctor, justo magna sodales dolor,
								vel lobortis velit urna ac odio. Fusce mi ipsum, ullamcorper a
								est vel, ornare auctor massa. Proin hendrerit dui eget semper
								posuere. Etiam vulputate, purus eget euismod bibendum, elit
								lacus dictum nibh, id bibendum nisl augue id dolor. Quisque
								ipsum ligula, porta eget feugiat eu, congue et ex. Cras
								ullamcorper ante enim, nec varius nisl varius ac. Cras interdum
								eu nisi id vehicula. Maecenas congue ligula sed vehicula
								blandit. Donec tristique est sed est euismod, in congue diam
								euismod. Ut gravida elit et nibh pretium, eu varius lacus
								mattis. Suspendisse at mollis purus, vitae vestibulum quam.
								Integer vehicula id libero non fringilla. Ut quam justo,
								faucibus ac purus vitae, vulputate gravida sem.
							</p>
						</div>
					</Section>
				))}
			</Toc.Content>
			<Toc.Nav>
				<Toc.Title>On this page</Toc.Title>
				<Toc.List>
					{items.map((item) => (
						<Toc.Item key={item.value} item={item}>
							<Toc.Link
								href={`#${item.value}`}
								css={{
									pl: "calc((var(--depth) - 2) * 12px)",
								}}
							>
								{item.label}
							</Toc.Link>
						</Toc.Item>
					))}
				</Toc.List>
			</Toc.Nav>
		</Toc>
	);
}
