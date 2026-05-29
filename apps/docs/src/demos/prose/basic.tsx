import { Prose } from "@moto-ui/react";

export function Basic() {
	return (
		<Prose>
			<h1>What is Prose?</h1>
			<p>
				Prose is a component used to add typographic styles to raw HTML or
				markdown content. It helps design beautiful, readable document layouts
				without manual styling of individual elements.
			</p>
			<h2>Key Features</h2>
			<ul>
				<li>
					Automatic typographic styling for nested headers, paragraphs, and
					lists.
				</li>
				<li>Consistent line-height, spacing, and font sizes.</li>
				<li>Optimized for readability and clean document hierarchy.</li>
			</ul>
			<blockquote>
				"Typography is the craft of endowing a human language with a durable
				visual form." — Robert Bringhurst
			</blockquote>
		</Prose>
	);
}
