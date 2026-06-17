---
name: changeset
description: Generate a consumer-facing changeset summary from staged git diffs for release changelogs. Use this when asked to write a changeset summary or changelog entry.
---

# Changeset

Read `agents.md` (project root) and follow it strictly.

## Purpose

Analyze staged changes and generate a consumer-facing changeset summary for release changelogs, focused on user-facing changes rather than internal details.

---

## Input

```sh
changeset [optional-context]
```

- `[optional-context]` — Additional context about the changes (e.g., affected packages, related issues). If not provided, the summary is derived solely from the staged git diff.

The staged git diff is read automatically via `git diff --staged`.

---

## Constraints

1. **Audience focus** — Write for developers consuming the packages. Focus on what changed and how it affects usage.
2. **Format** — Plain Markdown. Single change = single sentence. Multiple changes = bulleted list.
3. **No frontmatter** — Do not output the changeset CLI frontmatter (package names and bump types). The CLI handles that.
4. **Style** — Start with action verbs ("Add", "Fix", "Update"). Keep it clear, professional, and concise.
5. **No placeholders** — Never output TODOs or empty lists.

---

## Examples

**Single change:**
```text
Fix the alignment of the checkbox icon within the Checkbox component.
```

**Multiple changes:**
```text
- Add `isDisabled` prop support to the Button component
- Update semantic tokens for default border colors in dark mode
- Fix focus outline visibility on key-navigated menu items
```

---

## Validation

Verify:
- Summary focuses on consumer-facing impacts, not internal implementation details
- Conforms to the requested Markdown format
- No placeholders, TODOs, or empty lists remain

---

## Conclusion

The task is done when:
- The changeset summary is generated
- The summary focuses on consumer-facing impacts
- The summary conforms to the requested format
