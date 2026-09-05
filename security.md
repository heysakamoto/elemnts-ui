# Security Policy

## Supported Versions

We release patches for security vulnerabilities in the following versions:

| Version | Supported |
| :------ | :-------- |
| Latest  | ✅ Yes    |
| Older   | ❌ No     |

Only the latest major release receives security updates. We recommend keeping your dependencies up to date.

---

## Reporting a Vulnerability

We take the security of Elemnts UI and its ecosystem seriously. If you believe you have found a security vulnerability, **please do not open a public issue**.

Instead, report it privately by emailing the maintainers at **Elemnts-ui-security@example.com** (replace with the actual maintainer email).

Please include the following details in your report:

- A brief description of the vulnerability.
- Steps to reproduce or a proof of concept.
- The affected component(s) and version(s).
- Any potential impact or exploit scenarios.

We will acknowledge receipt within **48 hours** and provide an initial assessment within **5 business days**.

---

## Disclosure Policy

- We will investigate all legitimate reports and work to fix the issue promptly.
- A fix will be released as a patch for the latest version.
- We will notify the reporter once the fix is published.
- Public disclosure will be coordinated with the reporter to allow time for users to update.

---

## Security Best Practices

When using Elemnts UI in your project:

1. **Keep dependencies updated** — Regularly run `pnpm outdated` and apply patch/minor updates.
2. **Review supply chain security** — Use `pnpm audit` to check for known vulnerabilities in your dependency tree.
3. **Validate user input** — Elemnts UI components render standard react elements; always sanitize user-provided content (e.g., via `children` or `dangerouslySetInnerHTML`) before passing it to any component.
4. **Use Subresource Integrity** — If loading Elemnts UI from a CDN, include integrity hashes on script tags.

---

## Acknowledgments

We appreciate the community's help in keeping Elemnts UI secure. Contributors who report valid vulnerabilities will be credited in our release notes (if they wish).
