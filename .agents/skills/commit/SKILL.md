---
name: commit
description: Generate Conventional Commits messages from staged git diffs. Use this when asked to write a commit message from staged changes.
---

# Commit

Read `agents.md` (project root) and follow it strictly.

## Purpose

Generate clean, descriptive, standardized commit messages from staged git diffs following the Conventional Commits specification.

---

## Input

When the user asks you to generate a commit message, run `git diff --staged` to get the staged changes, then produce a commit message following the rules below.

---

## Constraints

1. **Format** — Strictly follow Conventional Commits: `<type>(<scope>): <subject>`.
2. **Subject line** — Imperative present tense, under 50 characters, no leading capital, no trailing period.
3. **Body (optional)** — Wrap at 72 characters. Explain the motivation (the "why") and contrast with previous behavior. Separate from the subject with a blank line.
4. **Types** — Use only: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
5. **Scopes** — Infer from package or directory. Use package names (`react`, `docs`, `storybook`) or architectural domains (`theme`, `tokens`). Omit for cross-scope changes.

---

## Example

```text
feat(preset-base): add semantic tokens for soft backgrounds

Implemented the DEFAULT semantic token specifically for soft backgrounds
across the component library, ensuring contrast ratios are maintained.
```

---

## Validation

Verify:
- Commit message follows Conventional Commits format
- Subject is clear and concise, summarizing the what and why of the changes

---

## Conclusion

The task is done when:
- The commit message follows the Conventional Commits format
- The subject is clear and concise
- Present the message to the user and offer to apply it
