# Agent Guidelines

These guidelines apply to agents working in this workspace. Follow the user's request and the project's existing structure and conventions.

## Project Work

- Inspect relevant files and existing project conventions before editing. Avoid assuming a framework or adding a new project structure when the workspace does not establish one.
- Make focused, complete changes. Preserve unrelated work and existing behavior; do not overwrite or revert changes outside the task.
- Ask a concise question when a missing decision materially affects scope, architecture, security, or user experience. Otherwise, state a reasonable assumption and proceed.
- Keep code readable, typed where applicable, and consistent with existing patterns. Handle errors explicitly and protect credentials and personal data.
- Run the smallest relevant checks available after changes. Report what was changed, the checks run, and any limitations; never claim checks passed if they were not run.

## Skills

- For UI design, review, or implementation, use the workspace [ui-design skill](.github/skills/ui-design/SKILL.md).
- For application code, project structure, configuration, or refactoring, use the workspace [coding-standard skill](.github/skills/coding-standard/SKILL.md).
- Use both when a task involves both UI work and code changes.
- Before considering a project build complete and again before committing, perform a code review and a security review appropriate to the changes. Use dedicated code-review and security skills/tools when available; if they are unavailable, use the standard review and security-check practices for the project's stack, and state any limitations. Do not claim a specialized skill was used if it was not available.
- Other specialist skills are optional and task-driven, not mandatory for every change. Use an available skill when the user requests it or when it clearly fits the work. Examples include architecture and system design, requirements discovery or PRDs, documentation, testing and QA, accessibility, performance, database design, API design, DevOps, and deployment. Prefer relevant workspace skills; if none exist, use established practices and ask only when a consequential choice needs the user's input.

## MCP Integrations

- Use an MCP only when it is relevant to the user's task and its required tools are actually available. Do not assume a server is connected just because it is mentioned in a configuration file.
- When a useful MCP is unavailable, explain what it would enable and ask whether the user wants help enabling/configuring it or prefers to continue without it. Do not install, configure, authenticate, or add credentials without the user's choice and authorization. Continue with local tools when practical if the user declines.
- Recommend only task-relevant options, with a brief purpose and availability status. Examples include Canva, Figma, or Stitch for design work; GitHub for repository, issue, or pull-request work; Stripe for payment integrations; and an appropriate database MCP for database tasks. These are optional examples, not required services, and availability must be checked before promising their use.
- Ask before external or consequential MCP actions such as publishing, charging, deleting, or changing shared resources unless the user has clearly authorized that specific action.
- Never ask the user to paste secrets into chat. Do not expose credentials in replies, logs, screenshots, or generated files. Use approved environment or secret-storage mechanisms and warn the user safely if a configuration appears to contain a credential.
