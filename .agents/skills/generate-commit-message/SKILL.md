---
name: generate-commit-message
description: Generate Conventional Commits messages from staged git diffs. Use this when asked to write a commit message or generate a changelog entry from staged changes.
---

# Generate Commit Message

Generate a clean, descriptive, and standardized commit message from staged git diffs following the Conventional Commits specification.

## Usage

When the user asks you to generate a commit message, run `git diff --staged` to get the staged changes, then produce a commit message following the rules below.

## Rules

1. **Format:** Strictly follow the Conventional Commits format: `<type>(<scope>): <subject>`.
2. **Subject Line:**
   - Use the imperative, present tense (e.g., "add", not "added" or "adds").
   - Keep the subject line under 50 characters.
   - Do not capitalize the first letter.
   - Do not end with a period.
3. **Body (Optional but recommended for complex changes):**
   - Wrap the body at 72 characters.
   - Explain the motivation for the change (the "why") and contrast it with previous behavior.
   - Separate the subject from the body with a single blank line.
4. **Types:** Use only the following types:
   - `feat`: A new feature
   - `fix`: A bug fix
   - `docs`: Documentation only changes (e.g., Fumadocs updates, READMEs)
   - `style`: Changes that do not affect the meaning of the code (formatting, missing semi-colons, Biome linting fixes, Panda CSS recipe tweaks)
   - `refactor`: A code change that neither fixes a bug nor adds a feature
   - `perf`: A code change that improves performance
   - `test`: Adding missing tests or correcting existing tests
   - `build`: Changes that affect the build system or external dependencies (Turborepo configs, Bun lockfiles)
   - `ci`: Changes to CI configuration files and scripts
   - `chore`: Other changes that don't modify src or test files
   - `revert`: Reverts a previous commit
5. **Scopes (Contextual):**
   - Infer the scope based on the directory or package being modified (especially in a monorepo).
   - Use package names (e.g., `storybook`, `docs`, `react`) or architectural domains (e.g., `router`, `theme`, `tokens`).
   - If the change spans multiple scopes, omit the scope entirely.

## Example

```text
feat(preset-base): add semantic tokens for soft backgrounds
```

Implemented the DEFAULT semantic token specifically for soft backgrounds
across the component library, ensuring contrast ratios are maintained.

## When Done

- The commit message follows the Conventional Commits format.
- The subject is clear and concise, summarizing the "what" and "why" of the changes.
- Present the commit message to the user and offer to commit it (e.g., by writing to `.git/COMMIT_EDITMSG` or piping to `git commit`).
