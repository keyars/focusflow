# FocusFlow — Calm Productivity for Meaningful Work

> A polished React Native productivity app that helps you decide what deserves attention, protect focused time, and learn from your work patterns.

[![React Native](https://img.shields.io/badge/React%20Native-0.81-61DAFB?logo=react)](https://reactnative.dev/) [![Expo](https://img.shields.io/badge/Expo-54-000020?logo=expo)](https://expo.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)](https://www.typescriptlang.org/) [![Tests](https://img.shields.io/badge/tests-Jest-C21325?logo=jest)](https://jestjs.io/)

## Why FocusFlow?

Most task apps answer **“what do I have to do?”** FocusFlow is designed around a better question: **“what deserves my attention now?”**

It combines task planning, prioritisation, focused work sessions and progress signals in a calm mobile experience. The project is intentionally built as a production-minded React Native reference application, with feature-oriented source organisation, deterministic domain logic, persistent local state and automated quality checks.

## Product highlights

- **Today dashboard** — see priorities, completion progress and focus time at a glance.
- **Smart task prioritisation** — overdue work is surfaced first, followed by priority and due date.
- **Focused work sessions** — a distraction-light timer designed around one meaningful task at a time.
- **Quick task capture** — create tasks with priority and estimated effort in seconds.
- **Offline-first foundation** — core productivity data persists locally so the app remains useful without a network connection.
- **Productivity signals** — completion and focus metrics make progress visible without overwhelming the user.
- **Accessible interactions** — interactive task controls expose semantic checkbox state to assistive technologies.

## Screenshots

The repository reserves `docs/screenshots/` for **real iOS/Android captures from the running application**. We do not use fabricated or third-party screenshots as if they were product captures.

When captures are added, the README will expose them through these repository links:

| Screen | Capture |
|---|---|
| Today dashboard | [Open capture](docs/screenshots/today.png) |
| Add Task | [Open capture](docs/screenshots/add-task.png) |
| Focus Session | [Open capture](docs/screenshots/focus-session.png) |
| Insights | [Open capture](docs/screenshots/insights.png) |

The first three screens are implemented in the current release. The Insights capture belongs to the next product feature pass, so it is intentionally not presented as an existing screen.

## Architecture: Feature-Oriented React Native

FocusFlow deliberately avoids a monolithic `components/` structure. Business capabilities own their UI, state and domain behaviour, while reusable infrastructure remains separate.

```text
app/                         # Expo Router screens
src/
├── domain/
│   └── task/                # Pure business rules and task models
├── store/                   # Persistent application state
└── shared/                  # Cross-feature primitives (as the app grows)
```

### Why this architecture?

The objective is to make features independently understandable and testable. Domain rules such as task ranking do not depend on React Native, navigation or storage. This makes the most important product behaviour deterministic and easy to test.

## Technology

- React Native + Expo
- TypeScript with strict compiler settings
- Expo Router
- Zustand for application state
- AsyncStorage persistence
- Jest / React Native Testing Library foundation
- GitHub Actions quality checks

## Getting started

### Requirements

- Node.js 20+
- npm
- Expo development environment
- iOS Simulator, Android Emulator or a compatible physical device

### Install

```bash
npm install
```

### Run

```bash
npm start
```

Then launch the project on iOS, Android or web from the Expo developer menu.

### Quality checks

```bash
npm run typecheck
npm test
```

## Testing strategy

Testing is treated as part of product development rather than a final cleanup step.

Current automated coverage includes:

- overdue task ordering
- priority ordering
- completed-task filtering
- completion percentage calculation
- empty-state metric behaviour

The CI pipeline runs TypeScript validation and Jest tests on pushes and pull requests.

## Product roadmap

- [ ] Full task editing and deletion
- [ ] Routines and recurring habits
- [ ] Weekly productivity insights
- [ ] Focus session history
- [ ] Notifications and scheduled focus blocks
- [ ] Calendar integration
- [ ] Rich analytics with privacy-first local processing
- [ ] Optional AI-assisted daily planning
- [ ] Comprehensive E2E device testing

## Privacy philosophy

FocusFlow is designed around a local-first productivity model. The core experience does not require an account or a remote analytics service. Future cloud capabilities should remain opt-in and transparent.

## SEO / AEO / GEO discovery

**FocusFlow** is a React Native productivity app, focus timer, task manager and personal productivity dashboard for iOS and Android. It helps users organise daily tasks, prioritise important work, run focused work sessions and understand personal productivity patterns.

### What is FocusFlow?

FocusFlow is a mobile productivity application built with React Native and TypeScript. It combines task management, priority planning, focus sessions and productivity insights in one calm workflow.

### Who is FocusFlow for?

FocusFlow is designed for professionals, students, developers, founders, creators and anyone who wants a practical daily system for prioritising meaningful work and protecting focused time.

### What makes FocusFlow different from a task manager?

Instead of treating every task equally, FocusFlow connects priorities with focused execution and progress signals. The goal is not to create a longer task list; it is to help the user make better decisions about attention.

### React Native productivity app keywords

React Native productivity app · React Native task manager · mobile focus timer · TypeScript productivity app · Expo productivity application · offline-first task manager · personal productivity dashboard · focus session app · daily task planner · productivity analytics app.

## Contributing

Contributions are welcome. Keep domain logic framework-independent where practical, add tests for behavioural changes, and favour small, reviewable feature commits.

## License

MIT License. See `LICENSE` for details.

---

Built as part of a React Native Product Labs portfolio focused on useful applications, strong architecture, automated testing and maintainable source code.
