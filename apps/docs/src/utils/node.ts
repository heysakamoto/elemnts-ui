import {
	Children,
	cloneElement,
	createElement,
	type ElementType,
	isValidElement,
	type PropsWithChildren,
	type ReactElement,
	type ReactNode,
} from "react";

/**
 * Recursively extracts and concatenates all text content from a React node.
 *
 * @param node - The React node to extract text from.
 * @returns A string containing all text content found within the node.
 *
 * @example
 * nodeToString(<span>Hello <strong>world</strong></span>); // "Hello world"
 * nodeToString(["Hello", " ", "world"]); // "Hello world"
 * nodeToString(42); // "42"
 */
export function nodeToString(node: ReactNode): string {
	if (typeof node === "string" || typeof node === "number") {
		return String(node);
	}

	if (node === null || node === undefined || typeof node === "boolean") {
		return "";
	}

	if (Array.isArray(node)) {
		return node.map(nodeToString).join("");
	}

	type Props = { children?: ReactNode };

	if (isValidElement<Props>(node)) {
		return nodeToString(node.props.children);
	}

	return "";
}

/**
 * Analyzes the children of a React node, returning the individual nodes,
 * their count, and the extracted text content of each node.
 *
 * @param children - The React children to analyze.
 * @returns An object containing:
 * - `nodes`: A flattened array of the child nodes.
 * - `length`: The total number of child nodes.
 * - `texts`: An array of text content strings, one per child node.
 *
 * @example
 * analyzeChildren(<><span>Hello</span><span>World</span></>);
 * // { nodes: [...], length: 2, texts: ["Hello", "World"] }
 */
export function analyzeChildren(children: React.ReactNode) {
	const nodes = Children.toArray(children);

	return {
		nodes,
		length: nodes.length,
		texts: nodes.map((node) => nodeToString(node)),
	};
}

type AnyProps = Record<string, unknown>;

/**
 * Clones a React element and merges additional props into it.
 * If the provided node is not a valid React element, it is returned as-is.
 *
 * @param node - The React node to clone and extend with additional props.
 * @param extraProps - A partial set of props to merge into the cloned element.
 * @returns The cloned React element with the merged props, or the original node
 * if it is not a valid React element.
 *
 * @example
 * withAdditionalProps(<button>Click me</button>, { disabled: true });
 * // <button disabled>Click me</button>
 */
export function withAdditionalProps<P extends AnyProps>(
	node: ReactNode,
	extraProps: Partial<P>,
): ReactNode {
	if (!isValidElement<P>(node)) {
		return node;
	}

	return cloneElement(node as ReactElement<P>, {
		...node.props,
		...extraProps,
	});
}

/**
 * Extracts the children from a React element node.
 * If the provided node is not a valid React element, `undefined` is returned.
 *
 * @param node - The React node to extract children from.
 * @returns The children of the React element, or `undefined` if the node is not a valid React element.
 *
 * @example
 * extractChildren(<div><span>Hello</span></div>); // <span>Hello</span>
 * extractChildren("not an element"); // undefined
 */
export function extractChildren<P extends PropsWithChildren>(node: ReactNode) {
	if (!isValidElement<P>(node)) {
		return undefined;
	}

	return node.props.children;
}

/**
 * Clones a React element and changes its type/tag while preserving its props and children.
 * If the provided node is not a valid React element, it is returned as-is.
 *
 * @param node - The React node whose type should be changed.
 * @param type - The new element type to use for the cloned element.
 * @returns A new React element with the given type and the original props and children,
 * or the original node if it is not a valid React element.
 *
 * @example
 * changeNodeType(<div className="foo">Hello</div>, "section");
 * // <section className="foo">Hello</section>
 */
export function replaceNodeType<P extends PropsWithChildren>(
	node: ReactNode,
	type: ElementType,
): ReactNode {
	if (!isValidElement<P>(node)) {
		return node;
	}

	return createElement(type, node.props, node.props.children);
}
