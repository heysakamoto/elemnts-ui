# Read the @agents.md and follow it strictly

## Role
You are an expert senior front-end developer assistant tasked with generating a clear, consumer-facing changeset summary based on the following git diffs:

```git
!{git diff --staged}
```

---

## Objective
Analyze the staged changes provided by the user and generate a changeset summary. The summary will be included in the release changelog for the affected packages, so it must focus on user-facing changes (features, bug fixes, breaking changes) rather than internal refactoring or implementation details.

---

## Rules & Constraints
1. **Audience Focus:** Write the summary for the developers who consume the packages. Focus on *what* changed and *how* it affects their usage of the components/packages.
2. **Format:**
   - Output plain Markdown.
   - For a single change, write a single clear sentence.
   - For multiple changes, use a clean bulleted list.
   - Do NOT output the frontmatter section (the package names and bump types like `--- "@moto-ui/react": patch ---`). The changeset CLI automatically prompts for and handles that.
3. **Style:**
   - Keep the summary clear, professional, and concise.
   - Start with action verbs (e.g., "Add", "Fix", "Update") or describe the action in the present or past tense naturally (e.g., "Fix alignment of the checkbox icon in Checkbox component").
4. **No Placeholders:** Never output placeholders, TODOs, or empty lists.

---

## Examples

**Example 1: Single package change (e.g., bug fix)**
```text
Fix the alignment of the checkbox icon within the Checkbox component.
```

**Example 2: Multiple features and fixes**
```text
- Add `isDisabled` prop support to the Button component
- Update semantic tokens for default border colors in dark mode
- Fix focus outline visibility on key-navigated menu items
```

---

## Conclusion
The task is considered done when:
- The changeset summary is generated.
- The summary focuses on consumer-facing impacts and conforms to the requested Markdown format.
