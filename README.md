<div align="center">
  <h1>⚡ CodexFlow</h1>
  <p><strong>Workflow Pack Generator for Codex Environments</strong></p>
  <p>Generate structured workflow packs that map user intent to <code>codex-flow-*</code> skill routes — optimized for <code>.codex</code> environments.</p>

  [![npm version](https://img.shields.io/npm/v/codex-flow-cli.svg)](https://www.npmjs.com/package/codex-flow-cli)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
</div>

---

## ✨ What is CodexFlow?

**CodexFlow** is a workflow generator that helps you structure how Codex routes tasks into specialized skills.

Instead of relying on raw prompts, CodexFlow enables:

- Deterministic workflow routing  
- Clean separation of skills  
- Scalable `.codex` configurations  
- Consistent AI behavior across projects  

> Think of it as a **routing engine for your Codex skills**.

## Scope

- CodexFlow is built for Codex app only.
- Primary purpose: build and maintain skills/workflow packs for `.codex`.
- Route and skill naming are standardized to the `codex-flow-*` convention.

## Why CodexFlow

- ✅ Fast setup: generate a complete pack set in one command.
- ✅ Opinionated structure: clear pack boundaries by domain.
- ✅ Stable naming: `codex-flow-*` skills and `codex-flow-pack-*` files.
- ✅ Easy extension: add one pack at a time with `add <topic>`.

## Choose Your Setup

Use the same repository, install or invoke in the way your Codex app workflow expects.

| Mode | Install | First use |
| --- | --- | --- |
| Codex app (recommended) | `npx codex-flow-cli init` | `codex-flow status` |
| Global CLI | `npm install -g codex-flow-cli` | `codex-flow init` |
| Local project dependency | `npm i -D codex-flow-cli` | `npx codex-flow-cli init --path .` |
| Custom output directory | `npx codex-flow-cli init --output-dir .codex-flow` | `codex-flow status --output-dir .codex-flow` |
| Alias compatibility | already included (`codexflow`) | `codexflow init` |

## Quick Start

```bash
npx codex-flow-cli init
npx codex-flow-cli status
```

## Generated Structure

Default output directory:

```text
.codex-flow/
  README.md
  workflows/
    codex-flow-pack-<topic>.md
```

## Pack Catalog

| Topic | Focus |
| --- | --- |
| `core` | planning, debugging, review, test planning, failing-test fixing, commit formatting, license headers, deploy, status, memory |
| `frontend-web` | frontend super-pack: UI libraries, design, animation, framework best practices, performance, web QA, build tools, video workflows |
| `backend-platform` | backend architecture, API contracts, migrations, DB validation, Docker/deploy, MCP server patterns, workflow orchestration, Zod validation, GCP command safety |
| `mobile` | cross-platform mobile implementation and mobile QA |
| `knowledge-work` | product strategy, support, sales execution, delivery coordination |
| `marketing` | marketing and growth workflows for content, SEO, CRO, ads, analytics, pricing, lifecycle, and devrel |
| `ai-agent-ops` | autonomous loops, eval harnesses, acceptance orchestration, advanced evaluation, memory systems, tool design |
| `community` | GitHub CI triage, PR comments, web app testing, MCP builder support |
| `review` | high-signal code review, PR review, implementation review, architecture review, parallel review |
| `language-engineering` | Python/Go/Rust/Kotlin/Spring/Django/Laravel patterns and testing, JSON-to-Pydantic conversion |
| `security-guard` | security scan/review, safety guardrails, framework-specific security |
| `leadership-review` | founder-mode review, tech-lead review, ship, and retro workflows |
| `workflow-commands` | command-style routes for `/flow/plan`, `/flow/build`, `/flow/debug`, `/flow/review`, `/flow/ux`, `/flow/content`, `/flow/track`, `/flow/bootstrap`, `/flow/deploy`, `/flow/continuity`, `/flow/demo` |

## Expanded Skill Domains

| Domain | Packs | Key capability expansion |
| --- | --- | --- |
| Core engineering | `core`, `review`, `workflow-commands` | planning, debugging, risk-first review, ship gates, reusable flow commands |
| Frontend and UX | `frontend-web` | UI libraries, design systems, accessibility, animation, test automation, video pipelines |
| Backend and platform | `backend-platform`, `security-guard` | API design, DB migrations, deployment safety, Docker, Zod validation, security hardening |
| Mobile | `mobile` | iOS/Android/Flutter/React Native implementation + mobile QA coverage |
| Product and ops | `knowledge-work`, `leadership-review` | product strategy, support/sales/delivery ops, executive and tech-lead review loops |
| Growth and marketing | `marketing` | SEO, CRO, paid ads, lifecycle campaigns, devrel and growth experimentation |
| AI agent operations | `ai-agent-ops`, `community` | autonomous loops, eval harnesses, MCP builder, CI/debug workflows |
| Language specialization | `language-engineering` | Python/Go/Rust/Kotlin/Spring/Django/Laravel patterns and testing |

## Memory and Context Skills

CodexFlow includes dedicated memory-aware skills so Codex app can keep continuity across long tasks.

| Intent | Route | Skill | Purpose |
| --- | --- | --- | --- |
| Durable memory capture | `/memory` | `codex-flow-memory` | persist high-signal project context and recall it later |
| Session continuity | `/flow/continuity` | `codex-flow-continuity` | carry decisions and learnings across sessions |
| Agent memory architecture | `/agent-memory-systems` | `codex-flow-agent-memory-systems` | design long-term memory and retrieval strategy |
| Continuous context learning | `/continuous-learning` | `codex-flow-continuous-learning` | evolve reusable context patterns over time |
| Context budget control | `/context-budget` | `codex-flow-context-budget` | optimize context window usage and reduce token waste |

Recommended memory workflow:

1. Start with `/memory` to capture stable project facts.
2. Use `/flow/continuity` when resuming work in a new session.
3. Apply `/continuous-learning` at milestones to consolidate patterns.

## Routing Policy

CodexFlow uses a strict one-route-one-pack:

Canonical ownership for common intents:

| Intent route | Canonical pack | Canonical skill |
| --- | --- | --- |
| `/plan` | `core` | `codex-flow-plan` |
| `/debug` | `core` | `codex-flow-debug` |
| `/review` | `core` | `codex-flow-review` |
| `/deploy` | `core` | `codex-flow-deploy` |
| `/test` | `core` | `codex-flow-test` |
| `/qa` | `frontend-web` | `codex-flow-qa` |
| `/qa-web` | `community` | `codex-flow-webapp-testing` |
| `/pr-review` | `review` | `codex-flow-pr-review` |
| `/security-review` | `security-guard` | `codex-flow-security-review` |
| `/flow/*` | `workflow-commands` | `codex-flow-*` |

### Route to Pack Index

<details>
<summary>Full Route Index (All Routes)</summary>

| Route | Pack(s) | Skill(s) | Description |
| --- | --- | --- | --- |
| `/a11y/accessibility-auditor` | `frontend-web` | `codex-flow-accessibility-auditor` | Accessibility auditing workflow for frontend interaction surfaces |
| `/a11y/accessibility-compliance` | `frontend-web` | `codex-flow-accessibility-compliance` | Accessibility compliance guidance from wshobson UI design skill set |
| `/acceptance-orchestrator` | `ai-agent-ops` | `codex-flow-acceptance-orchestrator` | Drive coding tasks end-to-end from intake to acceptance verification with explicit completion gates |
| `/adk/tool-scaffold` | `ai-agent-ops` | `codex-flow-adk-tool-scaffold` | Scaffold ADK BaseTool implementations with template-driven structure and refinement flow |
| `/advanced-evaluation` | `ai-agent-ops` | `codex-flow-advanced-evaluation` | LLM-as-judge evaluation design with rubric strategy and bias mitigation patterns |
| `/agent-eval` | `ai-agent-ops` | `codex-flow-agent-eval` | Head-to-head agent benchmarking by cost, latency, and correctness |
| `/agent-memory-systems` | `ai-agent-ops` | `codex-flow-agent-memory-systems` | Agent memory architecture for retrieval quality, chunking, and long-term consistency |
| `/agent-payment-x402` | `security-guard` | `codex-flow-agent-payment-x402` | Controlled agent payment execution with budget and policy guardrails |
| `/agentic-engineering` | `ai-agent-ops` | `codex-flow-agentic-engineering` | Eval-first execution model for AI-heavy engineering workflows |
| `/ai-first-engineering` | `ai-agent-ops` | `codex-flow-ai-first-engineering` | Team operating model for high AI code-generation environments |
| `/angular-best-practices` | `frontend-web` | `codex-flow-angular-component` | Angular standalone component and signal-based architecture patterns |
| `/animation/3d-web-experience` | `frontend-web` | `codex-flow-3d-web-experience` | 3D web-experience architecture with Three.js or React Three Fiber and performance guardrails |
| `/animation/framer-motion` | `frontend-web` | `codex-flow-framer-motion-animator` | Framer Motion variants, transitions, and interaction-driven animation patterns |
| `/animation/scroll-experience` | `frontend-web` | `codex-flow-scroll-experience` | Scroll-driven storytelling and cinematic interaction patterns with performance-aware motion |
| `/animation/threejs` | `frontend-web` | `codex-flow-threejs-animation` | Three.js animation system patterns and performance-safe motion orchestration |
| `/animation/threejs-fundamentals` | `frontend-web` | `codex-flow-threejs-fundamentals` | Three.js fundamentals for scene setup, camera, and renderer composition |
| `/animation/threejs-geometry` | `frontend-web` | `codex-flow-threejs-geometry` | Three.js geometry workflows for dynamic and optimized meshes |
| `/animation/threejs-interaction` | `frontend-web` | `codex-flow-threejs-interaction` | Three.js interaction patterns for picking, controls, and UX feedback |
| `/animation/threejs-lighting` | `frontend-web` | `codex-flow-threejs-lighting` | Lighting composition patterns for realistic and performant 3D scenes |
| `/animation/threejs-loaders` | `frontend-web` | `codex-flow-threejs-loaders` | Asset loader patterns for GLTF and other 3D formats |
| `/animation/threejs-materials` | `frontend-web` | `codex-flow-threejs-materials` | Material system patterns for physically-based and stylized rendering |
| `/animation/threejs-postprocessing` | `frontend-web` | `codex-flow-threejs-postprocessing` | Post-processing pipeline setup for cinematic and polished rendering |
| `/animation/threejs-shaders` | `frontend-web` | `codex-flow-threejs-shaders` | Custom shader workflows and GPU effect patterns for advanced visuals |
| `/animation/threejs-textures` | `frontend-web` | `codex-flow-threejs-textures` | Texture loading and optimization patterns for Three.js scenes |
| `/animation/ui-animation` | `frontend-web` | `codex-flow-ui-animation` | UI animation patterns with performance and accessibility constraints |
| `/api-design` | `backend-platform` | `codex-flow-api-design` | REST API contract design, versioning, and error strategy |
| `/architect-review` | `review` | `codex-flow-architect-review` | Architecture-focused review for scalability, maintainability, and distributed-systems risk |
| `/autonomous-agent-harness` | `ai-agent-ops` | `codex-flow-autonomous-agent-harness` | Persistent autonomous agent setup with scheduling and memory |
| `/autonomous-agent-patterns` | `ai-agent-ops` | `codex-flow-autonomous-agent-patterns` | Autonomous coding-agent loop and permission-pattern design inspired by production agent systems |
| `/autonomous-loops` | `ai-agent-ops` | `codex-flow-autonomous-loops` | Autonomous loop architectures with guardrails and recovery controls |
| `/backend-patterns` | `backend-platform` | `codex-flow-backend-patterns` | Backend architecture patterns for services and APIs |
| `/browser-qa` | `frontend-web` | `codex-flow-browser-qa` | Automated visual testing and interaction verification after UI changes |
| `/build-tools/monorepo-management` | `frontend-web` | `codex-flow-monorepo-management` | Monorepo dependency and task orchestration best practices |
| `/build-tools/nx` | `frontend-web` | `codex-flow-nx-ai-agents-config` | Nx workspace exploration, code generation, and task execution flow |
| `/build-tools/nx-monorepo` | `frontend-web` | `codex-flow-nx-monorepo` | Nx monorepo setup and workflow patterns from developer-kit |
| `/build-tools/nx-workspace-patterns` | `frontend-web` | `codex-flow-nx-workspace-patterns` | Nx workspace architecture and maintenance patterns from wshobson pack |
| `/build-tools/tailwind-css-patterns` | `frontend-web` | `codex-flow-tailwind-css-patterns` | Tailwind CSS implementation patterns from developer-kit |
| `/build-tools/turborepo` | `frontend-web` | `codex-flow-turborepo` | Turborepo task pipelines, cache strategy, and CI optimization patterns |
| `/build-tools/turborepo-caching` | `frontend-web` | `codex-flow-turborepo-caching` | Turborepo cache optimization patterns from wshobson pack |
| `/build-tools/turborepo-monorepo` | `frontend-web` | `codex-flow-turborepo-monorepo` | Turborepo monorepo setup patterns from developer-kit |
| `/build-tools/vitepress` | `frontend-web` | `codex-flow-vitepress` | VitePress documentation and static-site build workflow |
| `/ceo-review` | `leadership-review` | `codex-flow-plan-ceo-review` | Founder-mode plan review |
| `/ci` | `community` | `codex-flow-gh-fix-ci` | Inspect and fix failing GitHub Actions checks |
| `/claude-devfleet` | `ai-agent-ops` | `codex-flow-claude-devfleet` | Worktree-based multi-agent coding orchestration and reporting |
| `/click-path-audit` | `frontend-web` | `codex-flow-click-path-audit` | Trace state transitions for button and interaction paths to catch hidden UI bugs |
| `/cloud/gcp-verify` | `backend-platform` | `codex-flow-always-verify-gcp` | Google Cloud command verification workflow using official docs, dry-run checks, and explicit approval gates |
| `/code/license-header-adder` | `core` | `codex-flow-license-header-adder` | Add standardized license headers to new source files with language-aware comment styles |
| `/context-budget` | `ai-agent-ops` | `codex-flow-context-budget` | Context-window audit and token optimization planning |
| `/continuous-agent-loop` | `ai-agent-ops` | `codex-flow-continuous-agent-loop` | Continuous autonomous loop pattern with quality gates |
| `/continuous-learning` | `ai-agent-ops` | `codex-flow-continuous-learning` | Extract and evolve reusable patterns from session history |
| `/database-migrations` | `backend-platform` | `codex-flow-database-migrations` | Schema and data migration workflow with rollback planning |
| `/database/schema-validator` | `backend-platform` | `codex-flow-database-schema-validator` | Validate SQL schema safety and naming rules using deterministic policy checks |
| `/debug` | `core` | `codex-flow-debug` | Systematic bug investigation and diagnosis |
| `/delivery` | `knowledge-work` | `codex-flow-engineering-delivery` | Delivery coordination, bug triage, and release handoff |
| `/deploy` | `core` | `codex-flow-deploy` | Deployment readiness and rollout checks |
| `/deployment-patterns` | `backend-platform` | `codex-flow-deployment-patterns` | Production rollout, health checks, and rollback-safe deployment flow |
| `/design-system` | `frontend-web` | `codex-flow-design-system` | Generate and audit reusable design system primitives and standards |
| `/design/arrange` | `frontend-web` | `codex-flow-arrange` | Layout arrangement and visual hierarchy optimization |
| `/design/colorize` | `frontend-web` | `codex-flow-colorize` | Color-system refinement and palette harmonization for production UI |
| `/design/critique` | `frontend-web` | `codex-flow-critique` | Design critique workflow to identify visual and UX weaknesses before implementation |
| `/design/frontend-design-system` | `frontend-web` | `codex-flow-frontend-design-system` | Frontend design system construction and standardization workflow |
| `/design/polish` | `frontend-web` | `codex-flow-polish` | Final UI polish pass for spacing, consistency, and finish quality |
| `/design/typeset` | `frontend-web` | `codex-flow-typeset` | Typography hierarchy and readability optimization across screens |
| `/design/typography-audit` | `frontend-web` | `codex-flow-typography-audit` | Typography audit for readability and hierarchy consistency |
| `/design/ui-audit` | `frontend-web` | `codex-flow-ui-audit` | UI audit workflow for visual consistency and interaction quality |
| `/design/ui-design` | `frontend-web` | `codex-flow-ui-design` | Practical UI design workflow for production frontend interfaces |
| `/design/ui-ux-pro-max-kimny` | `frontend-web` | `codex-flow-ui-ux-pro-max-kimny` | Alternative UI and UX Pro Max workflow from community template implementation |
| `/design/web-design-guidelines` | `frontend-web` | `codex-flow-web-design-guidelines` | Web design guideline enforcement from kimny template skill set |
| `/django-patterns` | `language-engineering` | `codex-flow-django-patterns` | Django and DRF architecture, ORM, and service-layer patterns |
| `/django-security` | `security-guard` | `codex-flow-django-security` | Django-specific security hardening checklist and patterns |
| `/django-tdd` | `language-engineering` | `codex-flow-django-tdd` | pytest-django testing workflow for Django applications |
| `/dmux-workflows` | `ai-agent-ops` | `codex-flow-dmux-workflows` | Multi-agent pane orchestration for concurrent task execution |
| `/docker-patterns` | `backend-platform` | `codex-flow-docker-patterns` | Containerization and Docker Compose service orchestration patterns |
| `/documentation-lookup` | `ai-agent-ops` | `codex-flow-documentation-lookup` | Use up-to-date docs through MCP before coding uncertain APIs |
| `/e2e-testing` | `frontend-web` | `codex-flow-e2e-testing` | Cross-project E2E testing strategy and flake-resistant test design |
| `/eval-harness` | `ai-agent-ops` | `codex-flow-eval-harness` | Formal evaluation harness for task quality and pass-rate tracking |
| `/flow/bootstrap` | `workflow-commands` | `codex-flow-project-bootstrap` | Greenfield setup and day-0 foundation |
| `/flow/build` | `workflow-commands` | `codex-flow-tdd`, `codex-flow-test-gate`, `codex-flow-quality-gate` | Test-first implementation with quality gating |
| `/flow/content` | `workflow-commands` | `codex-flow-content-factory` | Content research, generation, and audit workflow |
| `/flow/continuity` | `workflow-commands` | `codex-flow-continuity` | Session continuity and durable memory workflow |
| `/flow/debug` | `workflow-commands` | `codex-flow-debugging` | Systematic root-cause analysis and fix verification |
| `/flow/demo` | `workflow-commands` | `codex-flow-how-it-work` | Workflow kit onboarding walkthrough |
| `/flow/deploy` | `workflow-commands` | `codex-flow-safe-deploy` | Release pipeline with safety gates |
| `/flow/plan` | `workflow-commands` | `codex-flow-planning` | Planning scope, architecture, and approval gates |
| `/flow/review` | `workflow-commands` | `codex-flow-code-review` | PR review and feedback handling workflow |
| `/flow/track` | `workflow-commands` | `codex-flow-ads-tracker` | Attribution and conversion-tracking setup |
| `/flow/ux` | `workflow-commands` | `codex-flow-ui-preview` | UX analysis, preview, and design validation |
| `/frameworks/angular-state-management` | `frontend-web` | `codex-flow-angular-state-management` | Angular Signals, NgRx, and RxJS state architecture patterns |
| `/frameworks/angular-ui-patterns` | `frontend-web` | `codex-flow-angular-ui-patterns` | Angular UI loading/error/display patterns for resilient component UX |
| `/frameworks/astro` | `frontend-web` | `codex-flow-astro` | Astro islands architecture for content-heavy sites with zero-JS-by-default delivery |
| `/frameworks/nextjs-app-router` | `frontend-web` | `codex-flow-nextjs-app-router-developer-kit` | Next.js App Router implementation patterns from developer-kit |
| `/frameworks/nextjs-app-router-patterns` | `frontend-web` | `codex-flow-nextjs-app-router-patterns` | App Router patterns from wshobson agents skill pack |
| `/frameworks/nextjs-data-fetching` | `frontend-web` | `codex-flow-nextjs-data-fetching` | Next.js data fetching strategy and cache behavior patterns |
| `/frameworks/nextjs-performance` | `frontend-web` | `codex-flow-nextjs-performance` | Next.js performance optimization and rendering discipline |
| `/frameworks/react-patterns` | `frontend-web` | `codex-flow-react-patterns` | React architecture patterns from developer-kit |
| `/frameworks/react-ui-patterns` | `frontend-web` | `codex-flow-react-ui-patterns` | Modern React UI states for loading, errors, optimistic flows, and graceful degradation |
| `/frameworks/sveltekit` | `frontend-web` | `codex-flow-sveltekit` | SvelteKit full-stack routing, SSR/SSG, and form-action implementation patterns |
| `/frameworks/tanstack-integration` | `frontend-web` | `codex-flow-tanstack-integration-best-practices` | Integrated TanStack Query + Router + Start data flow, SSR hydration, and cache coordination patterns |
| `/frameworks/tanstack-router` | `frontend-web` | `codex-flow-tanstack-router-best-practices` | TanStack Router type-safe routing, loaders, search params, and navigation patterns |
| `/frameworks/tanstack-start` | `frontend-web` | `codex-flow-tanstack-start-best-practices` | TanStack Start full-stack patterns for server functions, middleware, SSR, and auth boundaries |
| `/frameworks/vercel-composition-patterns` | `frontend-web` | `codex-flow-vercel-composition-patterns` | Component composition patterns from Vercel agent skill set |
| `/frameworks/vercel-react-best-practices` | `frontend-web` | `codex-flow-vercel-react-best-practices` | Vercel React best-practice ruleset for performance and correctness |
| `/frontend-design` | `frontend-web` | `codex-flow-frontend-design` | Design-led web UI implementation and visual direction |
| `/frontend-patterns` | `frontend-web` | `codex-flow-frontend-patterns` | Frontend architecture and UI implementation patterns from production workflows |
| `/frontend/animation-micro-interactions` | `frontend-web` | `codex-flow-animation-micro-interaction-pack` | Micro-interaction pattern pack for meaningful UI motion feedback |
| `/frontend/component-scaffold` | `frontend-web` | `codex-flow-component-scaffold-generator` | Generate reusable frontend component scaffolds with naming and structure conventions |
| `/frontend/dark-mode` | `frontend-web` | `codex-flow-dark-mode-implementer` | Implement dark mode with token-safe and contrast-safe theming |
| `/frontend/design-to-component` | `frontend-web` | `codex-flow-design-to-component-translator` | Translate design intent into reusable production components |
| `/frontend/form-wizard` | `frontend-web` | `codex-flow-form-wizard-builder` | Build multi-step form wizard flows with UX-safe state transitions |
| `/frontend/i18n` | `frontend-web` | `codex-flow-i18n-frontend-implementer` | Frontend i18n implementation patterns and localization-safe UI structure |
| `/frontend/modal-drawer-system` | `frontend-web` | `codex-flow-modal-drawer-system` | Standardized modal and drawer patterns for consistent interactions |
| `/frontend/page-layout` | `frontend-web` | `codex-flow-page-layout-builder` | Page layout construction with responsive information hierarchy |
| `/frontend/react-hook-builder` | `frontend-web` | `codex-flow-react-hook-builder` | Create reusable custom React hooks with solid API boundaries |
| `/frontend/react-server-components` | `frontend-web` | `codex-flow-react-server-components` | React Server Component boundary and rendering strategy guidance |
| `/frontend/refactor-planner` | `frontend-web` | `codex-flow-frontend-refactor-planner` | Plan safe frontend refactors with regression risk controls |
| `/frontend/responsive-design-system` | `frontend-web` | `codex-flow-responsive-design-system` | Responsive design-system setup for multi-breakpoint UI consistency |
| `/frontend/state-ux-flow` | `frontend-web` | `codex-flow-state-ux-flow-builder` | State and UX-flow modeling for complex interaction journeys |
| `/frontend/table-builder` | `frontend-web` | `codex-flow-table-builder` | Data table construction patterns with sorting, filtering, and pagination |
| `/frontend/tailwind-gradient-builder` | `frontend-web` | `codex-flow-tailwind-gradient-builder` | Tailwind gradient system generation for consistent visual depth |
| `/frontend/tanstack-query-setup` | `frontend-web` | `codex-flow-tanstack-query-setup` | Set up TanStack Query patterns for cache, invalidation, and retries |
| `/frontend/zustand-state` | `frontend-web` | `codex-flow-zustand-state-builder` | Zustand state-store architecture for scalable frontend state management |
| `/git-workflow` | `backend-platform` | `codex-flow-git-workflow` | Branching and collaboration workflow for multi-contributor engineering teams |
| `/git/commit-formatter` | `core` | `codex-flow-git-commit-formatter` | Conventional Commits message formatting for clean and consistent git history |
| `/golang-patterns` | `language-engineering` | `codex-flow-golang-patterns` | Idiomatic Go patterns for reliability and maintainability |
| `/golang-testing` | `language-engineering` | `codex-flow-golang-testing` | Table-driven tests, benchmarks, and coverage workflow for Go |
| `/healthcare-phi-compliance` | `security-guard` | `codex-flow-healthcare-phi-compliance` | PHI and PII handling compliance patterns for sensitive systems |
| `/hexagonal-architecture` | `backend-platform` | `codex-flow-hexagonal-architecture` | Ports and adapters architecture for maintainable service boundaries |
| `/high-signal-review` | `review` | `codex-flow-high-signal-review` | Risk-prioritized review pass |
| `/impl-review` | `review` | `codex-flow-impl-review` | Implementation diff review with regression checks |
| `/knowledge` | `knowledge-work` | `codex-flow-enterprise-search` | Enterprise knowledge lookup and answer synthesis |
| `/kotlin-patterns` | `language-engineering` | `codex-flow-kotlin-patterns` | Kotlin idioms and architecture patterns for backend and mobile |
| `/kotlin-testing` | `language-engineering` | `codex-flow-kotlin-testing` | Kotest and coroutine testing workflow for Kotlin projects |
| `/laravel-patterns` | `language-engineering` | `codex-flow-laravel-patterns` | Laravel service architecture, Eloquent, queues, and APIs |
| `/laravel-security` | `security-guard` | `codex-flow-laravel-security` | Laravel security patterns for auth, validation, and secrets |
| `/laravel-tdd` | `language-engineering` | `codex-flow-laravel-tdd` | PHPUnit/Pest-driven TDD flow for Laravel projects |
| `/marketing/analytics/ab-test-setup` | `marketing` | `codex-flow-ab-test-setup` | Experiment design and A/B test setup for reliable growth decisions |
| `/marketing/analytics/tracking` | `marketing` | `codex-flow-analytics-tracking` | Analytics tracking architecture for attribution, funnel diagnostics, and iteration |
| `/marketing/campaigns/developer-ads` | `marketing` | `codex-flow-developer-ads` | Developer-focused ads strategy across technical channels and messaging |
| `/marketing/campaigns/developer-email-sequences` | `marketing` | `codex-flow-developer-email-sequences` | Developer-specific email sequence strategy tied to product adoption milestones |
| `/marketing/campaigns/email-sequence` | `marketing` | `codex-flow-email-sequence` | Lifecycle and nurture email sequence design for activation and conversion |
| `/marketing/campaigns/launch` | `marketing` | `codex-flow-launch-strategy` | Launch strategy planning across positioning, channels, and rollout timing |
| `/marketing/campaigns/paid-ads` | `marketing` | `codex-flow-paid-ads` | Paid ads campaign strategy, targeting, and creative-testing workflow |
| `/marketing/content/social` | `marketing` | `codex-flow-social-content` | Social content strategy and production flow for demand capture and awareness |
| `/marketing/content/strategy` | `marketing` | `codex-flow-content-strategy` | Content strategy planning across funnel stages and distribution channels |
| `/marketing/content/technical-tutorials` | `marketing` | `codex-flow-technical-tutorials` | Technical tutorial planning and writing for developer-led acquisition |
| `/marketing/context/product-marketing` | `marketing` | `codex-flow-product-marketing-context` | Product marketing context framing before campaign or channel execution |
| `/marketing/conversion/page-cro` | `marketing` | `codex-flow-page-cro` | Landing-page CRO workflow for conversion lift and friction reduction |
| `/marketing/conversion/signup-flow-cro` | `marketing` | `codex-flow-signup-flow-cro` | Signup-flow conversion optimization across form, UX, and onboarding handoff |
| `/marketing/creative/ad-creative` | `marketing` | `codex-flow-ad-creative` | Ad creative ideation and iteration workflow for performance campaigns |
| `/marketing/devrel/advocacy` | `marketing` | `codex-flow-developer-advocacy` | Developer advocacy strategy for trust, adoption, and community pull |
| `/marketing/devrel/community-building` | `marketing` | `codex-flow-community-building` | Community-building programs for sustained engagement and retention |
| `/marketing/devrel/github-presence` | `marketing` | `codex-flow-github-presence` | GitHub presence optimization for discoverability and conversion to product usage |
| `/marketing/devrel/open-source` | `marketing` | `codex-flow-open-source-marketing` | Open-source marketing strategy for distribution, credibility, and growth loops |
| `/marketing/distribution/dev-tool-directory-listings` | `marketing` | `codex-flow-dev-tool-directory-listings` | Dev-tool directory listing strategy and optimization for qualified traffic |
| `/marketing/distribution/developer-newsletter` | `marketing` | `codex-flow-developer-newsletter` | Developer newsletter editorial and distribution strategy for recurring demand |
| `/marketing/growth/churn-prevention` | `marketing` | `codex-flow-churn-prevention` | Churn prevention strategy across lifecycle messaging and product touchpoints |
| `/marketing/growth/referral-program` | `marketing` | `codex-flow-referral-program` | Referral program design and incentive mechanics for compounding growth |
| `/marketing/messaging/copywriting` | `marketing` | `codex-flow-copywriting` | Persuasive copywriting for landing pages, ads, and lifecycle messaging |
| `/marketing/ops/revops` | `marketing` | `codex-flow-revops` | Revenue operations alignment across acquisition, sales handoff, and retention metrics |
| `/marketing/pricing/strategy` | `marketing` | `codex-flow-pricing-strategy` | Pricing and packaging strategy for better monetization and positioning |
| `/marketing/pricing/usage-based` | `marketing` | `codex-flow-usage-based-pricing` | Usage-based pricing design for developer and API-first products |
| `/marketing/product/developer-onboarding` | `marketing` | `codex-flow-developer-onboarding` | Developer onboarding journey optimization from first key to first success |
| `/marketing/product/sdk-dx` | `marketing` | `codex-flow-sdk-dx` | SDK and DX improvements that increase activation and reduce onboarding drop-off |
| `/marketing/research/competitor-alternatives` | `marketing` | `codex-flow-competitor-alternatives` | Alternative-page and competitor-positioning strategy for acquisition intent |
| `/marketing/research/customer` | `marketing` | `codex-flow-customer-research` | Customer research synthesis for messaging, channel, and offer decisions |
| `/marketing/sales/enablement` | `marketing` | `codex-flow-sales-enablement` | Sales enablement assets and narratives that improve close rates |
| `/marketing/seo/ai-seo` | `marketing` | `codex-flow-ai-seo` | AI-assisted SEO workflow for research, content planning, and optimization |
| `/marketing/seo/audit` | `marketing` | `codex-flow-seo-audit` | SEO audit workflow for technical issues and content gaps |
| `/marketing/seo/backlinks` | `marketing` | `codex-flow-seo-backlinks` | Backlink strategy for authority growth and organic ranking lift |
| `/marketing/seo/content` | `marketing` | `codex-flow-seo-content` | SEO content strategy for topic coverage and intent matching |
| `/marketing/seo/developer-seo` | `marketing` | `codex-flow-developer-seo` | Developer SEO strategy for technical audiences and product-led discovery |
| `/marketing/seo/hreflang` | `marketing` | `codex-flow-seo-hreflang` | Hreflang implementation workflow for multi-region and multilingual SEO |
| `/marketing/seo/plan` | `marketing` | `codex-flow-seo-plan` | SEO planning workflow with prioritized actions and measurable outcomes |
| `/marketing/seo/programmatic` | `marketing` | `codex-flow-seo-programmatic` | Programmatic SEO strategy for scalable long-tail acquisition |
| `/marketing/seo/schema` | `marketing` | `codex-flow-seo-schema` | Schema markup strategy to improve SERP features and relevance signals |
| `/marketing/seo/sitemap` | `marketing` | `codex-flow-seo-sitemap` | Sitemap strategy and governance for efficient crawl prioritization |
| `/marketing/seo/technical` | `marketing` | `codex-flow-seo-technical` | Technical SEO workflow for crawlability, indexation, and site health |
| `/mcp-builder` | `community` | `codex-flow-mcp-builder` | Design and implement MCP servers with evaluation loops |
| `/mcp-server-patterns` | `backend-platform` | `codex-flow-mcp-server-patterns` | MCP server tool/resource design and implementation patterns |
| `/memory` | `core` | `codex-flow-memory` | Durable memory capture and retrieval policy |
| `/mobile` | `mobile` | `codex-flow-mobile-developer` | iOS, Android, Flutter, and React Native implementation support |
| `/mobile-qa` | `mobile` | `codex-flow-mobile-qa` | Mobile QA coverage with simulator and device-aware checks |
| `/next-best-practices` | `frontend-web` | `codex-flow-next-best-practices` | Next.js App Router boundaries, runtime, and data-fetch patterns |
| `/parallel-review` | `review` | `codex-flow-parallel-review` | Independent review passes with reconciliation |
| `/performance/core-web-vitals` | `frontend-web` | `codex-flow-core-web-vitals` | Core Web Vitals diagnostics and optimization workflow |
| `/performance/react-component-performance` | `frontend-web` | `codex-flow-react-component-performance` | Targeted React render-performance diagnosis and optimization patterns |
| `/performance/web-performance-optimization` | `frontend-web` | `codex-flow-web-performance-optimization` | Systematic web-performance optimization for bundles, runtime, caching, and loading speed |
| `/plan` | `core` | `codex-flow-plan` | Implementation planning and scoped execution plan |
| `/playwright-best-practices` | `frontend-web` | `codex-flow-playwright-best-practices` | Playwright E2E and regression test best practices |
| `/postgres-patterns` | `backend-platform` | `codex-flow-postgres-patterns` | PostgreSQL schema, indexing, and query optimization patterns |
| `/pr-comments` | `community` | `codex-flow-gh-address-comments` | Address PR review threads and issue comments |
| `/pr-review` | `review` | `codex-flow-pr-review` | High-rigor pull request review |
| `/product` | `knowledge-work` | `codex-flow-product-strategy` | PRD framing, requirements, and tradeoff analysis |
| `/productivity` | `knowledge-work` | `codex-flow-productivity-ops` | Inbox triage, prioritization, and execution cadence |
| `/python-patterns` | `language-engineering` | `codex-flow-python-patterns` | Python architecture and idiomatic implementation patterns |
| `/python-testing` | `language-engineering` | `codex-flow-python-testing` | pytest and TDD workflow for robust Python test suites |
| `/python/json-to-pydantic` | `language-engineering` | `codex-flow-json-to-pydantic` | Convert JSON payloads into typed Pydantic models with nested class inference |
| `/qa` | `frontend-web` | `codex-flow-qa` | Regression verification workflow for frontend surfaces |
| `/qa-web` | `community` | `codex-flow-webapp-testing` | Local web app smoke testing and browser debugging |
| `/react-best-practices` | `frontend-web` | `codex-flow-react-best-practices` | React + Vite architecture, performance, and deployment hardening |
| `/react-state` | `frontend-web` | `codex-flow-react-state-management` | State strategy across local, server, and URL state in React apps |
| `/repo-scan` | `backend-platform` | `codex-flow-repo-scan` | Cross-stack source audit and module-level risk classification |
| `/retro` | `leadership-review` | `codex-flow-retro` | Engineering retrospective workflow |
| `/review` | `core` | `codex-flow-review` | Risk-first code review and regression analysis |
| `/rust-patterns` | `language-engineering` | `codex-flow-rust-patterns` | Rust ownership, error handling, and concurrency design patterns |
| `/rust-testing` | `language-engineering` | `codex-flow-rust-testing` | Rust testing strategy across unit, integration, and async paths |
| `/safety-guard` | `security-guard` | `codex-flow-safety-guard` | Prevent destructive operations in production and autonomous loops |
| `/sales` | `knowledge-work` | `codex-flow-sales-execution` | Sales discovery prep and follow-up structure |
| `/search-first` | `ai-agent-ops` | `codex-flow-search-first` | Research-first workflow before custom implementation |
| `/security-review` | `security-guard` | `codex-flow-security-review` | OWASP and CWE-focused secure coding review |
| `/security-scan` | `security-guard` | `codex-flow-security-scan` | Configuration and workflow vulnerability scan for agent setup |
| `/seo/optimise-seo` | `frontend-web` | `codex-flow-optimise-seo` | SEO optimization workflow for technical and on-page quality |
| `/ship` | `leadership-review` | `codex-flow-ship` | Release and ship automation support |
| `/springboot-patterns` | `language-engineering` | `codex-flow-springboot-patterns` | Spring Boot service architecture and API layering patterns |
| `/springboot-security` | `security-guard` | `codex-flow-springboot-security` | Spring Security and platform hardening for Java services |
| `/springboot-tdd` | `language-engineering` | `codex-flow-springboot-tdd` | JUnit, Mockito, and testcontainers-driven TDD for Spring Boot |
| `/status` | `core` | `codex-flow-status` | Workspace and project status snapshot |
| `/strategic-compact` | `ai-agent-ops` | `codex-flow-strategic-compact` | Manual compaction guidance at logical milestones |
| `/support` | `knowledge-work` | `codex-flow-customer-support` | Support ticket triage and escalation-ready summaries |
| `/svelte-best-practices` | `frontend-web` | `codex-flow-svelte-code-writer` | Svelte and SvelteKit implementation guidance |
| `/tanstack-query` | `frontend-web` | `codex-flow-tanstack-query-best-practices` | TanStack Query data fetching and cache strategy patterns |
| `/tanstack-query-expert` | `frontend-web` | `codex-flow-tanstack-query-expert` | Production-grade TanStack Query patterns for cache lifecycle, mutations, optimistic updates, and SSR hydration |
| `/team-builder` | `ai-agent-ops` | `codex-flow-team-builder` | Compose and dispatch parallel specialist agent teams |
| `/tech-lead-review` | `leadership-review` | `codex-flow-plan-eng-review` | Engineering plan review |
| `/test` | `core` | `codex-flow-test` | Test planning and validation workflow |
| `/test-fixing` | `core` | `codex-flow-test-fixing` | Systematic failing-test triage and grouped fix workflow |
| `/testing/chrome-devtools` | `frontend-web` | `codex-flow-chrome-devtools` | Browser debugging and performance profiling via Chrome DevTools workflows |
| `/testing/e2e-patterns` | `frontend-web` | `codex-flow-e2e-testing-patterns` | E2E testing patterns from wshobson agents skill set |
| `/testing/playwright-explore-website` | `frontend-web` | `codex-flow-playwright-explore-website` | Explore websites with Playwright to derive robust test paths |
| `/testing/playwright-generate-test` | `frontend-web` | `codex-flow-playwright-generate-test` | Generate Playwright tests from scenario descriptions |
| `/tool-design` | `ai-agent-ops` | `codex-flow-tool-design` | Design robust agent-facing tool APIs with clear contracts and reduced routing ambiguity |
| `/typescript-clean-code` | `frontend-web` | `codex-flow-typescript-clean-code` | TypeScript clean-code and maintainable architecture patterns |
| `/ui-lib/building-components` | `frontend-web` | `codex-flow-building-components` | Vercel component building patterns for scalable UI libraries |
| `/ui-lib/shadcn` | `frontend-web` | `codex-flow-shadcn` | shadcn/ui official skills workflow with project-aware context via components.json and composition-safe component generation |
| `/ui-lib/shadcn-skills` | `frontend-web` | `codex-flow-shadcn-skills` | shadcn/ui skills.sh workflow with CLI command coverage (init/add/search/view/docs/diff/info/build) and MCP registry support |
| `/ui-lib/shadcn-ui` | `frontend-web` | `codex-flow-shadcn-ui` | Comprehensive shadcn/ui guide with forms, charts, and controlled components |
| `/ui-lib/tailwind-design-system` | `frontend-web` | `codex-flow-tailwind-design-system` | Tailwind CSS-first design system with reusable component primitives |
| `/ui-lib/tailwind-v4-shadcn` | `frontend-web` | `codex-flow-tailwind-v4-shadcn` | Tailwind v4 and shadcn/ui integration and migration patterns |
| `/ui-ux-pro-max` | `frontend-web` | `codex-flow-ui-ux-pro-max` | Comprehensive UI and UX design intelligence across styles, palettes, typography, and stacks |
| `/validation/zod` | `backend-platform` | `codex-flow-zod-validation-expert` | TypeScript-first runtime validation with Zod across APIs, forms, and server actions |
| `/video/remotion` | `frontend-web` | `codex-flow-remotion` | React-based video production workflow with animation and timeline patterns |
| `/video/remotion-render` | `frontend-web` | `codex-flow-remotion-render` | Remotion rendering pipeline optimization and output quality checks |
| `/video/remotion-stitch` | `frontend-web` | `codex-flow-remotion-stitch` | Stitch plus Remotion workflow for AI-assisted video composition |
| `/video/remotion-video-production` | `frontend-web` | `codex-flow-remotion-video-production` | Template-based Remotion video production flow for repeatable output |
| `/vite-best-practices` | `frontend-web` | `codex-flow-vite` | Vite build, caching, and deployment correctness best practices |
| `/vue-best-practices` | `frontend-web` | `codex-flow-vue-best-practices` | Vue architecture and composition best practices |
| `/web-design-review` | `frontend-web` | `codex-flow-web-design-reviewer` | Structured UI and UX review feedback for shipped screens |
| `/web-quality` | `frontend-web` | `codex-flow-web-quality` | Core Web Vitals, Lighthouse, SEO, and accessibility quality gate |
| `/workflow-orchestration` | `backend-platform` | `codex-flow-workflow-orchestration-patterns` | Temporal-oriented workflow orchestration architecture for resilient distributed processes |

</details>

## Naming Convention

- Skill ID format: `codex-flow-*`
- Workflow file format: `codex-flow-pack-<topic>.md`

## CLI

| Command | Description |
| --- | --- |
| `codex-flow init` | Generate all workflow packs |
| `codex-flow add <topic>` | Generate one workflow pack |
| `codex-flow list` | List available topics |
| `codex-flow status` | Show installation status and generated files |

### Common Flags

```bash
codex-flow init --force
codex-flow init --path ./my-project
codex-flow init --output-dir .agent-flow
codex-flow add frontend-web --path ./my-project
```

## Usage Examples

```bash
# bootstrap full packs in current directory
npx codex-flow-cli init --path .

# add only frontend workflow pack
npx codex-flow-cli add frontend-web --force

# inspect generated state
npx codex-flow-cli status
```

---

## 🛠 Requirements

- Node.js ≥ 18  
- Codex IDE of OpenAI

## 🤝 Contribution

Feel free to submit Pull Requests to optimize our AI context handling or to add support for bleeding-edge frameworks. We aim to eliminate AI Hallucinations by providing continuous, accurate Context.

## 📄 License

Released under the [MIT License](LICENSE).
