
# Contributing to Longhouse

Thank you for considering a contribution to Longhouse.

Longhouse is being built as a TypeScript-first, adapter-based backend application framework for Node.js, with an emphasis on explicit architecture, testability, predictable behaviour, and genuine engineering understanding.

Beginners are welcome. Questions are welcome. Careful work is valued more than speed.

> **Core rule:** Understand the change, test its behaviour, keep it focused, and make it easy for another person to review.

Longhouse values clarity over cleverness, explicit behaviour over hidden magic, and completed vertical slices over speculative architecture.

---

## Contents

1. [Before you begin](#1-before-you-begin)
2. [Ways to contribute](#2-ways-to-contribute)
3. [Development environment](#3-development-environment)
4. [Git and GitHub workflow](#4-git-and-github-workflow)
5. [Longhouse architecture rules](#5-longhouse-architecture-rules)
6. [TypeScript and code conventions](#6-typescript-and-code-conventions)
7. [Testing and TDD](#7-testing-and-tdd)
8. [Quality checks and repository tooling](#8-quality-checks-and-repository-tooling)
9. [Comments and documentation](#9-comments-and-documentation)
10. [Dependencies and package discipline](#10-dependencies-and-package-discipline)
11. [Conventional Commits](#11-conventional-commits)
12. [Opening a pull request](#12-opening-a-pull-request)
13. [Review and revision](#13-review-and-revision)
14. [AI-assisted development](#14-ai-assisted-development)
15. [Security and responsible conduct](#15-security-and-responsible-conduct)
16. [Definition of Done](#16-definition-of-done)
17. [Quick reference](#17-quick-reference)

---

## 1. Before you begin

### Read the project context

Before changing Longhouse, read:

* `README.md`;
* this `CONTRIBUTING.md`;
* the issue associated with the work;
* relevant documentation when it exists;
* nearby implementation and tests once framework code exists;
* repository configuration related to the area being changed.

Repository configuration is authoritative.

Longhouse is still in its foundation stage. Some development infrastructure described in this guide represents adopted project policy but has not yet been implemented in the repository.

Do not invent commands, scripts, configuration files, or tooling merely because this document says that a quality check will eventually be required.

When repository tooling exists, follow the actual configured commands.

### Check whether the work already exists

Search existing issues and pull requests before starting.

A new issue is expected for every meaningful unit of planned work, especially when the change involves:

* new or changed framework behaviour;
* a public API;
* architecture;
* a dependency;
* build or development tooling;
* compatibility;
* lifecycle behaviour;
* security;
* performance;
* a non-trivial defect;
* work that needs acceptance criteria or design discussion.

Tiny maintenance changes such as typo corrections, small wording improvements, or obvious link repairs may not require a dedicated issue when they are genuinely independent and low-risk.

The principle is:

> **Issues preserve intent. Commits preserve implementation history. Pull requests preserve review and integration.**

### Define acceptance criteria

A meaningful issue should describe what must be true for the work to be considered complete.

Acceptance criteria should describe observable outcomes rather than prematurely prescribing internal implementation details.

For example:

Good:

```text
Unknown routes return a controlled 404 response.
```

Less useful:

```text
Create a NotFoundHandlerFactory class with three helper methods.
```

The first describes required behaviour. The second may constrain the implementation before the design has earned that structure.

### Keep the scope focused

A contribution should solve one coherent problem.

Do not combine:

* a feature;
* unrelated refactoring;
* broad formatting changes;
* dependency upgrades;
* architecture experiments;
* documentation rewrites;

inside the same pull request unless they are genuinely part of the same accepted change.

When another problem is discovered, create or propose a separate issue instead of silently expanding the current scope.

---

## 2. Ways to contribute

Useful contributions may include:

* reporting a reproducible defect;
* improving documentation;
* adding or strengthening tests;
* implementing an accepted framework capability;
* improving error messages;
* improving type safety;
* simplifying confusing code without changing behaviour;
* reducing accidental complexity;
* improving developer experience;
* reviewing a pull request constructively;
* identifying architecture risks;
* responsibly reporting a security problem.

Large patches are not automatically more valuable than small ones.

A precise regression test, a well-explained design concern, or a carefully scoped fix may be more useful than hundreds of lines of new code.

### Current project stage

Longhouse is still establishing its foundations.

Do not implement roadmap features simply because they appear in the README.

Major functionality should begin only after an issue establishes its scope and acceptance criteria.

---

## 3. Development environment

### Current baseline

The current Longhouse development baseline is:

* Git;
* GitHub;
* Node.js 24 LTS;
* npm;
* TypeScript-first development;
* an editor or IDE capable of working reliably with TypeScript.

GitHub Desktop and the Git command line are both valid workflows.

**GitHub Desktop is explicitly welcome**, especially when its visual diff, selective staging, branch management, and history views help a contributor understand exactly what is changing.

Using a graphical Git client is not less professional than using the terminal.

The important questions are:

* Do you understand the repository state?
* Are you on the correct branch?
* Did you inspect the diff?
* Are you committing only the intended changes?

### Git CLI verification

When using the command line:

```bash
git --version
node --version
npm --version
```

### Current repository-stage warning

Longhouse does not yet have its complete Node.js/TypeScript development scaffold.

Until the repository contains files such as `package.json`, TypeScript configuration, test configuration, lint configuration, and documented scripts:

* do not assume they exist;
* do not fabricate setup commands;
* do not add tooling as part of an unrelated change.

Tooling will be introduced through dedicated issues.

Once configured, the repository itself becomes the authority for installation and verification commands.

---

## 4. Git and GitHub workflow

The normal Longhouse workflow is:

```text
Issue
→ acceptance criteria
→ short-lived branch
→ implementation and verification
→ coherent commits
→ pull request
→ self-review and review
→ merge
→ branch deletion
```

### 4.1 Start from an updated `main`

Before creating a branch:

1. switch to `main`;
2. fetch the remote repository;
3. update `main`;
4. confirm there are no accidental local changes;
5. create the new branch from the updated state.

Never perform normal development directly on `main`.

### 4.2 Branch naming

Use:

```text
<type>/<issue-number>-<short-description>
```

Examples:

```text
feat/12-static-routing
fix/27-graceful-close
docs/3-contributing-guidelines
test/18-package-imports
refactor/31-request-context
build/7-typescript-tooling
```

Use lowercase words separated by hyphens.

Approved prefixes:

| Prefix      | Purpose                                             |
| ----------- | --------------------------------------------------- |
| `feat/`     | New framework capability                            |
| `fix/`      | Defect correction                                   |
| `docs/`     | Documentation                                       |
| `test/`     | Test-only change                                    |
| `refactor/` | Structural change without intended behaviour change |
| `build/`    | Dependencies or build configuration                 |
| `ci/`       | Continuous-integration configuration                |
| `chore/`    | Focused maintenance                                 |
| `perf/`     | Measured performance improvement                    |

When no issue is required for a tiny maintenance change, the issue number may be omitted:

```text
docs/fix-readme-link
```

Avoid vague names such as:

```text
robert-work
changes
new-stuff
test2
final-version
```

A branch should describe its intended outcome.

### 4.3 Work in small increments

Regularly inspect the repository state.

With GitHub Desktop:

* confirm the current repository;
* confirm the current branch;
* inspect every changed file;
* select only the files or lines belonging to the current commit.

With the CLI:

```bash
git status
git diff
```

Do not commit:

* secrets;
* real `.env` files;
* credentials or tokens;
* `node_modules/`;
* temporary debugging output;
* editor-local state;
* generated build output unless repository policy explicitly requires it;
* unrelated formatting changes.

### 4.4 Published history

Never force-push to `main`.

Do not rewrite shared history casually.

If rebasing, squashing, or force-pushing a published feature branch becomes necessary, understand the consequences before doing it.

---

## 5. Longhouse architecture rules

Architecture is not improvised inside implementation pull requests.

The following principles are foundational.

### 5.1 The core remains platform-independent

The Longhouse framework core must not become coupled directly to Node.js-specific HTTP request or response types.

The intended boundary is:

```text
Node.js
    ↓
node:http
    ↓
Longhouse Node HTTP adapter
    ↓
Longhouse framework core
```

Platform-specific translation belongs in the adapter.

Framework concepts belong in the core.

### 5.2 Native Node.js first

The first HTTP platform implementation is based on native `node:http`.

Express is not the foundation underneath Longhouse.

Do not introduce Express or another framework underneath the core merely to accelerate implementation.

Additional adapters or integrations may be considered later through deliberate architectural decisions.

### 5.3 Explicit mechanisms before convenient syntax

Longhouse should first expose understandable mechanisms.

Convenience syntax may be added only after the behaviour underneath it is stable and understood.

In particular:

> **Explicit APIs come before decorators.**

Do not introduce reflection, metadata, decorators, or hidden registration behaviour merely because established frameworks use them.

### 5.4 Every abstraction must earn its place

Do not create an interface, factory, provider, manager, registry, module, decorator, or abstraction simply because a framework is expected to contain one.

Introduce abstractions when there is evidence that they solve a real design problem.

Prefer:

> simple design now, abstraction when evidence appears.

### 5.5 One vertical slice at a time

Prefer one complete working path over several partially implemented systems.

For example, static routing should work end-to-end before the project expands into parameters, middleware, dependency injection, decorators, or unrelated subsystems.

### 5.6 Keep the execution path understandable

A contributor should be able to trace important behaviour.

For HTTP handling, the conceptual path should remain understandable as something similar to:

```text
Node request
→ platform adapter
→ framework request context
→ router
→ handler
→ framework response
→ Node response
```

Internal structure may evolve, but the framework should not become architecture archaeology.

### 5.7 Public APIs are deliberate

A public API is a compatibility commitment.

Do not expose something publicly merely because exporting it is convenient.

Changes involving:

* public exports;
* package boundaries;
* public types;
* handler contracts;
* adapter contracts;
* lifecycle contracts;

require deliberate review.

### 5.8 Fail helpfully

Errors should help developers understand:

* what failed;
* where it failed;
* what was expected;
* what they can do next.

A technically correct but cryptic framework error is not good enough.

---

## 6. TypeScript and code conventions

### 6.1 TypeScript-first

Longhouse application and framework code is written in TypeScript unless a specific supporting file genuinely requires JavaScript.

Production packages are intended to be ESM-first.

Do not casually mix CommonJS and ESM semantics.

### 6.2 Strict typing

TypeScript strictness is project policy.

Once TypeScript configuration is established:

* do not weaken strictness to make a contribution compile;
* avoid `any`;
* use `unknown` for genuinely unknown or untrusted values;
* validate and narrow values at boundaries;
* do not use unsafe type assertions as substitutes for runtime validation.

Example:

```typescript
function parsePort(value: unknown): number {
  if (
    typeof value !== "number" ||
    !Number.isInteger(value) ||
    value < 0 ||
    value > 65535
  ) {
    throw new InvalidPortError("Port must be an integer between 0 and 65535.");
  }

  return value;
}
```

### 6.3 Naming

Use:

| Element                   | Convention         | Example                               |
| ------------------------- | ------------------ | ------------------------------------- |
| Variable/function/method  | `camelCase`        | `createApplication()`                 |
| Class/type/interface/enum | `PascalCase`       | `RequestContext`                      |
| True constant             | `UPPER_SNAKE_CASE` | `DEFAULT_STATUS_CODE`                 |
| Boolean                   | Question-like name | `isListening`, `hasRoute`, `canClose` |
| General file              | `kebab-case`       | `request-context.ts`                  |

Prefer domain-specific names over abbreviations.

Use:

```text
requestContext
routeDefinition
platformAdapter
```

rather than vague names such as:

```text
ctxThing
routeObj
adapterMgr
```

Do not prefix interfaces with `I`.

### 6.4 Readability

* Prefer clarity over cleverness.
* Keep functions and classes focused.
* Prefer early returns over deep nesting.
* Prefer composition over inheritance unless inheritance genuinely models the relationship.
* Avoid global mutable state.
* Avoid hidden side effects.
* Avoid unexplained magic values.
* Use `const` unless reassignment is necessary.
* Never use `var`.
* Handle promises deliberately.
* Do not silently swallow errors.
* Preserve useful causes when translating errors.
* Make invalid states difficult to represent where practical.

There is no arbitrary maximum function size.

A function is too large when its responsibility, control flow, or purpose becomes difficult to understand.

---

## 7. Testing and TDD

Longhouse follows behaviour-focused classical TDD.

The default cycle is:

```text
Behaviour
→ Red
→ Green
→ Refactor
→ Full verification
→ Commit
```

### 7.1 Red

Choose one small observable behaviour.

Write a test expressing that behaviour.

Run it.

Confirm that it fails for the intended reason.

A test that fails because the test environment is broken, the file cannot be imported, or the test itself has a syntax error is not a meaningful Red state.

### 7.2 Green

Write the smallest clean implementation that satisfies the behaviour.

Do not build future architecture while making one test pass.

### 7.3 Refactor

Once behaviour is green:

* improve names;
* remove duplication;
* clarify responsibilities;
* simplify control flow;
* improve boundaries;

without changing the intended behaviour.

### 7.4 Full verification

Run the relevant tests and all repository quality checks that currently exist.

Only then is the behaviour ready for a coherent commit.

### Bug fixes

A defect should normally begin with a failing regression test that reproduces the problem.

The test should fail before the fix and pass afterward.

### Test behaviour, not internal choreography

Tests should protect observable behaviour.

Prefer:

```text
real objects
→ state-based tests
→ integration tests
→ small fakes
→ mocks or spies
```

Mocks are not forbidden.

They are used when the interaction itself is part of the required behaviour or when a genuine external boundary makes another approach impractical.

Do not redesign production code merely to satisfy mock expectations.

### Test layers

As the project develops, Longhouse will use the smallest appropriate test layer for each risk:

* unit tests for focused behaviour;
* integration tests for collaborating framework components;
* runtime/package acceptance tests for compiled package behaviour;
* end-to-end tests for meaningful complete flows where necessary.

The project intends to use Jest as the primary behavioural testing framework once test infrastructure is established.

Because Longhouse is intended to ship as real ESM output, package acceptance must also verify the compiled result in the actual Node.js runtime rather than trusting transformed source tests alone.

The exact commands and configuration belong to later tooling issues and must not be invented before they exist.

---

## 8. Quality checks and repository tooling

Longhouse intends to enforce:

* automated formatting;
* linting;
* strict TypeScript checking;
* behavioural tests;
* production builds;
* package/runtime acceptance tests.

The planned toolchain includes:

* Prettier for formatting;
* ESLint for linting;
* the TypeScript compiler for type checking and builds;
* Jest for primary behavioural tests;
* native Node.js runtime verification for compiled ESM package behaviour.

However:

> **Repository configuration is the authority.**

If these tools have not yet been configured, do not claim that their scripts exist.

Once configured, contributors must run the repository's documented quality commands before requesting review.

Do not:

* disable lint rules simply to silence errors;
* weaken TypeScript settings to make code compile;
* skip failing tests without explanation;
* bypass quality checks because a change appears small.

A narrow rule exception may be accepted when it has a real technical justification and is documented.

---

## 9. Comments and documentation

Longhouse follows this rule:

> **Code explains what and how. Comments explain why, constraints, risks, and surprising decisions.**

Good:

```typescript
// Preserve registration order so equal-priority middleware executes predictably.
const middleware = [...registeredMiddleware];
```

Unhelpful:

```typescript
// Copy the middleware.
const middleware = [...registeredMiddleware];
```

Use comments for:

* non-obvious invariants;
* compatibility requirements;
* security decisions;
* architectural constraints;
* deliberate trade-offs;
* behaviour that would otherwise look accidental.

Do not use comments to narrate obvious syntax.

### Public contracts

Use TSDoc/JSDoc when a public API cannot be understood clearly from its name, types, and structure alone.

Public documentation should describe the contract rather than implementation trivia.

### TODO and FIXME

Use:

```text
TODO(#123): explain the concrete unfinished work
```

for tracked unfinished work.

Use:

```text
FIXME(#123): explain known incorrect or fragile behaviour
```

for known defects or unsafe behaviour.

Do not leave vague comments such as:

```text
TODO: improve this someday
```

Do not leave commented-out code.

Version control already remembers deleted code.

### Documentation changes

Update documentation when a contribution changes:

* setup;
* configuration;
* development commands;
* public behaviour;
* public APIs;
* architecture;
* compatibility expectations;
* operational behaviour.

Documentation is part of the product.

---

## 10. Dependencies and package discipline

Dependencies are architectural decisions, not free conveniences.

Before adding a dependency, ask:

1. What real problem does it solve?
2. Can the platform or existing project code solve the problem clearly enough?
3. Is the package actively maintained?
4. What is its security history?
5. What is its licence?
6. What transitive dependencies does it introduce?
7. Does it affect runtime size or behaviour?
8. Does Longhouse become coupled to its design assumptions?

Substantial dependencies require an issue and architectural review before they are added.

Do not introduce another backend framework underneath Longhouse simply to avoid implementing a core responsibility.

### Package manager

Longhouse currently uses npm as its development package manager choice.

Once a lockfile exists:

* commit it;
* do not hand-edit it;
* do not regenerate it casually;
* do not introduce a second package manager or lockfile without an accepted issue.

Never commit `node_modules/`.

---

## 11. Conventional Commits

Longhouse uses Conventional Commits.

Format:

```text
<type>(optional-scope): <imperative summary>
```

Examples:

```text
feat(router): add static route matching
fix(server): close active listener gracefully
test(package): verify ESM package imports
refactor(core): extract request context creation
docs(contributing): add contribution guidelines
build(typescript): add compiler configuration
ci(verification): run repository quality checks
```

Common types:

| Type       | Meaning                                             |
| ---------- | --------------------------------------------------- |
| `feat`     | New framework capability                            |
| `fix`      | Bug fix                                             |
| `test`     | Test-only change                                    |
| `refactor` | Structural change without intended behaviour change |
| `docs`     | Documentation                                       |
| `perf`     | Performance improvement                             |
| `build`    | Dependencies or build configuration                 |
| `ci`       | Continuous-integration configuration                |
| `chore`    | Focused maintenance                                 |

Rules:

* use imperative mood: `add`, `fix`, `remove`;
* do not use `added`, `fixed`, or `fixes`;
* keep the subject concise;
* use lowercase after the colon;
* do not add a final period;
* keep each commit coherent;
* avoid unrelated cleanup inside a commit.

Breaking changes use `!` and a `BREAKING CHANGE:` footer:

```text
feat(core)!: replace handler response contract

BREAKING CHANGE: Existing route handlers must return the new framework response type.
```

One issue does not necessarily mean one commit.

A meaningful issue may contain several coherent commits before being integrated through one pull request.

---

## 12. Opening a pull request

### Self-review first

Before opening or requesting review:

* inspect every changed file;
* inspect the complete diff;
* confirm the branch contains only relevant work;
* remove debugging code;
* confirm applicable verification has passed;
* confirm documentation is current;
* confirm no secrets or local files are included.

### Pull-request title

Use Conventional Commit style:

```text
feat(router): add static route matching
```

### Pull-request description

A normal Longhouse pull request should explain:

```markdown
## Problem

What problem or accepted issue does this address?

## Solution

What changed?

Explain important design choices without narrating every line.

## Verification

- [ ] Relevant tests or verification were added
- [ ] Test-first Red state was confirmed when applicable
- [ ] Existing applicable tests pass
- [ ] Formatting checks pass when configured
- [ ] Lint checks pass when configured
- [ ] Type checking passes when configured
- [ ] Production build passes when configured
- [ ] Package/runtime verification passes when applicable
- [ ] Relevant manual verification was completed

## Risks and trade-offs

What could be affected?

Were compatibility, architecture, lifecycle, performance, or security concerns considered?

## Related issue

Resolves #123
```

Use `Resolves #123` only when merging the pull request should close that issue.

### Draft pull requests

Use a Draft pull request when:

* implementation is incomplete;
* early architectural feedback is useful;
* verification is still in progress.

Do not represent unfinished work as review-ready.

### Pull-request scope

A pull request should be small enough that another engineer can realistically understand and review it.

Large generated patches or mixed-purpose diffs may be rejected even when individual lines appear correct.

### Merge policy

Squash merging is the preferred default for normal Longhouse issue work unless preserving multiple commits has a clear historical value.

The final commit on `main` must follow Conventional Commits.

After merge:

* confirm the associated issue closed;
* delete the remote feature branch;
* update local `main`;
* delete the completed local branch when no longer needed.

---

## 13. Review and revision

Code review examines the contribution, not the contributor.

Feedback should be tied to:

* correctness;
* architecture;
* clarity;
* maintainability;
* security;
* compatibility;
* testing;
* project conventions.

When receiving feedback:

1. read the complete review;
2. understand the concern before editing;
3. ask for clarification when needed;
4. make focused corrections;
5. add or improve tests when the feedback reveals missing behaviour;
6. explain briefly what changed;
7. re-run applicable verification;
8. resolve conversations only after the concern has genuinely been addressed.

Do not mechanically obey review comments that would damage the architecture.

Discuss the technical disagreement instead.

Likewise, do not dismiss review feedback merely because the code was generated by a tool or AI.

The contributor remains responsible for every submitted line.

---

## 14. AI-assisted development

AI-assisted development is welcome in Longhouse.

The project itself is developed with active AI-assisted pair programming.

AI is treated as leverage, not as a substitute for engineering understanding.

The standard is the same regardless of whether code was:

* written manually;
* suggested by an IDE;
* generated by AI;
* adapted from documentation;
* produced collaboratively.

The contributor must:

* understand every submitted change;
* inspect generated output critically;
* verify technical claims;
* run applicable tests and checks;
* verify APIs against authoritative documentation when necessary;
* understand important trade-offs;
* preserve licence and attribution requirements;
* protect secrets, private data, and confidential material;
* be able to explain the implementation during review.

### No passive vibe coding

Do not:

1. ask an AI to build a large feature;
2. paste the result into Longhouse;
3. observe that it appears to work;
4. submit it without understanding the architecture or verification.

Confident generated text is not evidence.

Evidence includes:

* tests;
* runtime behaviour;
* source inspection;
* authoritative documentation;
* reproducible verification;
* engineering reasoning.

If a contributor cannot explain generated code, they should:

* simplify it;
* study it;
* rewrite it;
* or leave it out until they understand it.

AI must not be used to:

* fabricate test results;
* fabricate benchmarks;
* fabricate citations;
* conceal known failures;
* expose credentials or private information;
* bypass project rules;
* introduce code with unclear licensing;
* overwhelm maintainers with enormous unreviewed generated patches.

---

## 15. Security and responsible conduct

Security and legality are design constraints.

Contributors must operate only on:

* systems they own;
* intentionally vulnerable labs;
* systems for which they have explicit authorization.

Do not use Longhouse development as justification for testing unrelated real-world systems without permission.

### Secure engineering expectations

* Treat external input as untrusted.
* Validate data at system boundaries.
* Prefer secure defaults.
* Apply least privilege where relevant.
* Never commit passwords, tokens, credentials, private keys, or sensitive personal information.
* Never log secrets.
* Use established security primitives rather than inventing cryptography.
* Record important security assumptions.
* Add regression tests for security defects.

### Vulnerability disclosure

Do not publish an exploitable undisclosed vulnerability or real secret in a public issue.

If a dedicated `SECURITY.md` exists, follow it.

Until a formal security policy is added, contact the maintainer through an appropriate private channel before publicly disclosing sensitive vulnerability details.

Provide:

* the affected version or commit;
* clear reproduction information;
* likely impact;
* a minimal proof of concept when necessary;
* possible mitigation when known.

Do not exploit a vulnerability beyond what is required to demonstrate it safely.

---

## 16. Definition of Done

A Longhouse contribution is ready for review only when all applicable statements are true:

* [ ] The issue and acceptance criteria are clear.
* [ ] The change solves one coherent problem.
* [ ] The diff contains no unrelated modifications.
* [ ] Architecture rules have been respected.
* [ ] Public API changes were deliberate and discussed.
* [ ] New abstractions are justified by an actual need.
* [ ] New dependencies are justified and reviewed.
* [ ] Relevant tests or other explicit verification exist.
* [ ] Bug fixes include a regression test that failed before the fix.
* [ ] Applicable tests pass.
* [ ] Formatting checks pass when configured.
* [ ] Lint checks pass when configured.
* [ ] Type checking passes when configured.
* [ ] The production build passes when configured.
* [ ] Compiled package/runtime behaviour is verified when applicable.
* [ ] Errors and edge cases were considered.
* [ ] Security implications were considered.
* [ ] Temporary debugging code is removed.
* [ ] Dead and commented-out code is removed.
* [ ] Documentation is updated where necessary.
* [ ] The full diff has been self-reviewed.
* [ ] Commit messages follow Conventional Commits.
* [ ] The contributor can explain the implementation, tests, and important trade-offs.

---

## 17. Quick reference

### Longhouse doctrine

```text
Make the path visible.
Use clear names.
Keep the core independent.
Validate boundaries.
Fail helpfully.
Test behaviour.
Verify the real package.
Introduce abstractions only when earned.
Build one clean piece at a time.
```

### TDD

```text
Behaviour
→ Red
→ Green
→ Refactor
→ Full verification
→ Commit
```

### Test-double preference

```text
Real objects
→ state-based tests
→ integration tests
→ small fakes
→ mocks or spies
```

### Branch

```text
<type>/<issue-number>-<short-description>
```

Example:

```text
feat/12-static-routing
```

### Commit

```text
<type>(scope): <imperative summary>
```

Example:

```text
feat(router): add static route matching
```

### Contribution path

```text
Issue
→ acceptance criteria
→ branch
→ implementation
→ verification
→ self-review
→ commit
→ pull request
→ review
→ merge
→ branch cleanup
```

### Final principle

> **Understand it. Keep it explicit. Test the behaviour. Protect the architecture. Verify the result.**
