---
name: fix-headings
description: Fix heading hierarchy issues in MDX documentation files. Use this when component docs have incorrect heading levels.
---

# Fix Headings

Read `agents.md` (project root) and follow it strictly.

## Purpose

Fix heading hierarchy issues in MDX documentation for components. Ensures all component docs follow a consistent heading structure.

---

## Input

```sh
fix-headings <component-name>
```

Use `all` to fix every component documentation file:
```sh
fix-headings all
```

---

## Sources

| Source | Path |
|--------|------|
| MDX docs | `apps/docs/content/docs/components/**/<component-name>.mdx` |

---

## Constraints

1. **No H1 in content** — The page title is the only H1 (from frontmatter `title`). No literal `# ` headings.
2. **No skipped levels** — Don't skip heading levels (e.g., `##` → `####` without `###` in between).
3. **Top-level sections are `##`** — Section headings directly under the H1 must be `##`, not `###`.
4. **Subsections are `###`** — Subsections within a `##` section use `###`.
5. **Preserve everything else** — Don't change content or formatting besides heading levels.

---

## Workflow

### 1. Locate the MDX File

If `<component-name>` is `all`, discover every `*.mdx` file under `apps/docs/content/docs/`.

Otherwise, find the file at `apps/docs/content/docs/components/**/<component-name>.mdx`.

### 2. Read and Analyze

Read the full MDX file. Identify:
- The frontmatter block (between `---` delimiters)
- All Markdown headings (`# ` through `###### `)
- The heading levels and their order

Check:
- **Does the file contain any `# ` (H1) literal heading?** Demote it to `##`.
- **What is the first section heading** after the frontmatter?
- **If the first section heading is `###`**: the file uses `###` for top-level sections. Promote `###` → `##` and `####` → `###`.
- **If the first section heading is `##`**: already correct. Only check for skipped levels.

### 3. Apply Fixes

**Case A — `###` used for top-level sections (most files)**
- Replace `### ` → `## ` (not within code blocks or frontmatter)
- Replace `#### ` → `### ` (not within code blocks or frontmatter)

**Case B — Already using `##` for top-level**
- Only fix skipped levels (e.g., promote `####` → `###` when it appears directly under `##`).

### 4. Verify

Read the modified file and confirm:
- No heading level is skipped
- The first content heading is `##`
- Subsections use `###`
- No `####` appears immediately under `##` without `###`
- Content, tables, code blocks, and formatting are unchanged

---

## Examples

### Input: `fix-headings button`

**Before**:
```mdx
---
title: Button
---

### Usage
### Sizes
### Variants
### Icon
### Disabled
### Props
```

**After**:
```mdx
---
title: Button
---

## Usage
## Sizes
## Variants
## Icon
## Disabled
## Props
```

### Input: `fix-headings toast`

**Before**:
```mdx
---
title: Toast
---

### Usage
### Anatomy
### Examples
#### Types
#### Custom Icons
### Props
### Data Attributes
### CSS Variables
```

**After**:
```mdx
---
title: Toast
---

## Usage
## Anatomy
## Examples
### Types
### Custom Icons
## Props
## Data Attributes
## CSS Variables
```

---

## Validation

Check the final file:
- Headings are sequential (no skipped levels)
- Top-level sections start with `##`
- Frontmatter is preserved intact
- Code blocks and inline code were not modified
- No content was lost or altered

---

## Conclusion

The task is done when:
- The target MDX file's heading hierarchy follows the rules
- No heading levels are skipped
- Top-level sections use `##` and subsections use `###`
- All content and formatting is preserved
