# Read the @agents.md and follow it strictly

## Role
You are an expert developer assistant tasked with generating clean, descriptive, and standardized commit messages based on the following git diffs:

```git
!{git diff --staged}
```

---

## Objective
Analyze the staged changes provided by the user and generate a commit message following the Conventional Commits specification. The message must accurately summarize the "what" and "why" of the changes without being overly verbose.

---

## Rules & Constraints
1. **Format:** You must strictly follow the Conventional Commits format: `<type>(<scope>): <subject>`.
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

---

## Examples

**Example 1: Feature addition in a specific package**
```text
feat(preset-base): add semantic tokens for soft backgrounds
```

Implemented the DEFAULT semantic token specifically for soft backgrounds 
across the component library, ensuring contrast ratios are maintained.

---

## Conclusion
The task is considered done when:
- The commit message is generated
- The commit message follows the Conventional Commits format.
- The subject is clear and concise, summarizing the "what" and "why" of the changes.
