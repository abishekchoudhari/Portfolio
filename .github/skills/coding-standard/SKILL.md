---
name: coding-standard
description: "Use when creating, reviewing, or refactoring application code, project structure, reusable components, configuration, or UI. Apply maintainable industry-standard practices, adapt to the chosen tech stack, and protect secrets."
argument-hint: "Describe the feature, project, or code to create or improve"
user-invocable: true
---

# Coding Standard

Deliver clear, maintainable, secure, and production-ready code that fits the project's tech stack and conventions. Treat these practices as goals to verify, not a reason to add unnecessary abstraction or change unrelated code.

## 1. Understand the Project and Confirm Decisions

1. Inspect the existing project structure, manifests, lockfiles, runtime/tool versions, and relevant code before proposing changes.
2. Identify the selected language, framework, and versions. Preserve established conventions unless there is a concrete reason to change them.
3. Before creating a new project structure, recommend a suitable structure for the confirmed tech stack. Explain the key tradeoffs briefly and ask the user to confirm or choose an alternative before creating it. Use the available question tool when possible.
4. Ask focused questions when a decision materially affects architecture, behavior, security, or user experience. Otherwise, state a reasonable assumption and proceed.
5. In an existing project, follow its structure rather than introducing a competing one.

## 2. Design and Implement

- For UI planning, review, or implementation, use the `ui-design` skill when available. Follow the established design system and existing UI patterns.
- Prefer readable, cohesive functions and modules with clear responsibilities. Apply SOLID principles where they improve separation of concerns and testability; avoid speculative layers and needless indirection.
- Reuse existing utilities and components. Create shared components for genuinely repeated UI or behavior (such as buttons, text fields, and typography) when their common contract is clear. Avoid copy-paste, but do not generalize one-off code prematurely.
- Use semantic HTML, accessible labels and states, keyboard support, and responsive layouts for user-facing interfaces.
- Keep behavior, validation, and error handling explicit. Follow existing project patterns and surface actionable errors; do not silently swallow failures or return success-shaped fallbacks.
- Manage resource lifecycles explicitly to prevent memory leaks: clean up subscriptions, event listeners, timers, streams, controllers, and other resources when their owner is disposed or the work completes. Follow the framework's lifecycle conventions and test teardown where applicable.
- Keep changes focused. Remove unused imports, variables, dependencies, and code introduced by the change; do not remove unrelated code.

## 3. Configuration, Localization, and Secrets

- Avoid scattering magic values. Put values that are shared, environment-specific, or likely to change in an appropriate configuration/constants module. Do not extract simple, local values without a maintainability benefit.
- Use the project's localization system for user-facing text when one exists or the user requests localization. Do not invent a translation framework for a project that does not need one.
- Never ask the user to paste secret keys into chat or expose secrets in source code, logs, screenshots, or generated files. Read secrets from environment variables or the platform's secret manager using the project's conventions.
- Keep local secret files out of version control. If configuration documentation is needed, provide an example file (for example, `.env.example`) containing variable names and safe placeholders only; never copy real values into it.
- If a possible secret is found, avoid repeating it in output and explain the safe handling steps.

## 4. Dependencies and Compatibility

- Prefer actively maintained, non-deprecated APIs and packages that are compatible with the project's runtime and framework versions.
- Check the installed version and project compatibility before selecting a newer API. Do not upgrade dependencies or introduce a package without a task-related need.
- Use the repository's package manager and lockfile. Do not mix package managers or hand-edit generated lockfile content.

## 5. Verify the Result

1. Run the smallest relevant formatter, linter, type-check, build, and test commands available in the project.
2. Fix warnings and errors introduced by the change, as well as directly related issues that prevent the requested behavior from working. Do not claim a clean result if checks were not run or failed for unrelated reasons.
3. Write and maintain focused tests for changed behavior using the test types appropriate to the stack and feature, such as unit tests, integration tests, and widget tests in frameworks that support them. Do not add irrelevant test layers; cover meaningful behavior, edge cases, and regressions.
4. Review the final diff for unintended changes, duplicated logic, unused code, unsafe secret handling, and consistency with existing patterns.
5. Summarize what changed and report validation commands and any limitations accurately.
