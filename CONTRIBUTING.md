# Contributing to FocusFlow

Thanks for contributing.

## Development principles

1. Keep domain rules independent of React Native where practical.
2. Prefer feature-oriented modules over large shared folders.
3. Add or update tests when behaviour changes.
4. Keep accessibility semantics on interactive controls.
5. Avoid adding analytics or remote services without a clear privacy rationale.

## Pull requests

Describe the user problem, the implementation approach, test coverage and any known limitations. Keep pull requests focused and reviewable.

## Quality gate

Before opening a PR, run:

```bash
npm run typecheck
npm test
```
