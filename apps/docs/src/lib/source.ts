import { loader } from "fumadocs-core/source";
import { docs } from "../../.source/server";

export const source = loader({
	baseUrl: "/docs",
	source: docs.toFumadocsSource(),
	plugins: ({ typedPlugin }) => [
		typedPlugin({
			transformPageTree: {
				file(node, file) {
					const page = file ? this.storage.read(file) : undefined;

					const links =
						page && "links" in page.data ? page.data.links : undefined;

					const status =
						page && "status" in page.data ? page.data.status : undefined;

					return {
						...node,
						links,
						status,
					};
				},
			},
		}),
	],
});
