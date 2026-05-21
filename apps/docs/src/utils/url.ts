/**
 * Strips the hash fragment from a URL.
 *
 * @param url - The URL string from which to remove the hash fragment.
 * @returns The URL string with the hash fragment removed.
 *
 * @example
 * stripHash("https://example.com/page#section"); // "https://example.com/page"
 */
export function stripHash(url: string) {
	return url.split("#").pop() ?? url;
}

/**
 * Replaces occurrences of a search string in a string with a docs path.
 *
 * @param str - The string in which to perform the replacement.
 * @param opt - An object containing the search string and slug.
 * @param opt.find - The substring to search for and replace.
 * @param opt.slug - The slug value to insert into the docs path.
 * @returns The string with all occurrences of `find` replaced by `/docs/${slug}`.
 *
 * @example
 * replaceSlug("Visit slug for more info", { find: "slug", slug: "getting-started" }); // "Visit /docs/getting-started for more info"
 */
export function replaceSlug(str: string, opt: { find: string; slug: string }) {
	const { find, slug } = opt;
	return str.replaceAll(find, `${slug}`);
}
