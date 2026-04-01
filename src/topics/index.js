import { renderTopicWorkflow } from './renderer.js';

export const TOPICS = {
  core: {
    title: 'Core Engineering',
    workflows: [
      { trigger: '/plan', skill: 'codex-flow-plan', purpose: 'Implementation planning and scoped execution plan' },
      { trigger: '/debug', skill: 'codex-flow-debug', purpose: 'Systematic bug investigation and diagnosis' },
      { trigger: '/review', skill: 'codex-flow-review', purpose: 'Risk-first code review and regression analysis' },
      { trigger: '/test', skill: 'codex-flow-test', purpose: 'Test planning and validation workflow' },
      { trigger: '/test-fixing', skill: 'codex-flow-test-fixing', purpose: 'Systematic failing-test triage and grouped fix workflow' },
      { trigger: '/git/commit-formatter', skill: 'codex-flow-git-commit-formatter', purpose: 'Conventional Commits message formatting for clean and consistent git history' },
      { trigger: '/code/license-header-adder', skill: 'codex-flow-license-header-adder', purpose: 'Add standardized license headers to new source files with language-aware comment styles' },
      { trigger: '/deploy', skill: 'codex-flow-deploy', purpose: 'Deployment readiness and rollout checks' },
      { trigger: '/status', skill: 'codex-flow-status', purpose: 'Workspace and project status snapshot' },
      { trigger: '/memory', skill: 'codex-flow-memory', purpose: 'Durable memory capture and retrieval policy' }
    ]
  },
  'frontend-web': {
    title: 'Frontend Web',
    workflows: [
      { trigger: '/ui-lib/shadcn', skill: 'codex-flow-shadcn', purpose: 'shadcn/ui official skills workflow with project-aware context via components.json and composition-safe component generation' },
      { trigger: '/ui-lib/shadcn-skills', skill: 'codex-flow-shadcn-skills', purpose: 'shadcn/ui skills.sh workflow with CLI command coverage (init/add/search/view/docs/diff/info/build) and MCP registry support' },
      { trigger: '/ui-lib/tailwind-design-system', skill: 'codex-flow-tailwind-design-system', purpose: 'Tailwind CSS-first design system with reusable component primitives' },
      { trigger: '/ui-lib/shadcn-ui', skill: 'codex-flow-shadcn-ui', purpose: 'Comprehensive shadcn/ui guide with forms, charts, and controlled components' },
      { trigger: '/ui-lib/tailwind-v4-shadcn', skill: 'codex-flow-tailwind-v4-shadcn', purpose: 'Tailwind v4 and shadcn/ui integration and migration patterns' },
      { trigger: '/ui-lib/building-components', skill: 'codex-flow-building-components', purpose: 'Vercel component building patterns for scalable UI libraries' },
      { trigger: '/ui-ux-pro-max', skill: 'codex-flow-ui-ux-pro-max', purpose: 'Comprehensive UI and UX design intelligence across styles, palettes, typography, and stacks' },
      { trigger: '/design/ui-ux-pro-max-kimny', skill: 'codex-flow-ui-ux-pro-max-kimny', purpose: 'Alternative UI and UX Pro Max workflow from community template implementation' },
      { trigger: '/frontend-design', skill: 'codex-flow-frontend-design', purpose: 'Design-led web UI implementation and visual direction' },
      { trigger: '/design/frontend-design-system', skill: 'codex-flow-frontend-design-system', purpose: 'Frontend design system construction and standardization workflow' },
      { trigger: '/frontend-patterns', skill: 'codex-flow-frontend-patterns', purpose: 'Frontend architecture and UI implementation patterns from production workflows' },
      { trigger: '/design-system', skill: 'codex-flow-design-system', purpose: 'Generate and audit reusable design system primitives and standards' },
      { trigger: '/web-design-review', skill: 'codex-flow-web-design-reviewer', purpose: 'Structured UI and UX review feedback for shipped screens' },
      { trigger: '/design/critique', skill: 'codex-flow-critique', purpose: 'Design critique workflow to identify visual and UX weaknesses before implementation' },
      { trigger: '/design/polish', skill: 'codex-flow-polish', purpose: 'Final UI polish pass for spacing, consistency, and finish quality' },
      { trigger: '/design/colorize', skill: 'codex-flow-colorize', purpose: 'Color-system refinement and palette harmonization for production UI' },
      { trigger: '/design/typeset', skill: 'codex-flow-typeset', purpose: 'Typography hierarchy and readability optimization across screens' },
      { trigger: '/design/arrange', skill: 'codex-flow-arrange', purpose: 'Layout arrangement and visual hierarchy optimization' },
      { trigger: '/react-best-practices', skill: 'codex-flow-react-best-practices', purpose: 'React + Vite architecture, performance, and deployment hardening' },
      { trigger: '/frameworks/vercel-react-best-practices', skill: 'codex-flow-vercel-react-best-practices', purpose: 'Vercel React best-practice ruleset for performance and correctness' },
      { trigger: '/frameworks/vercel-composition-patterns', skill: 'codex-flow-vercel-composition-patterns', purpose: 'Component composition patterns from Vercel agent skill set' },
      { trigger: '/frameworks/react-patterns', skill: 'codex-flow-react-patterns', purpose: 'React architecture patterns from developer-kit' },
      { trigger: '/react-state', skill: 'codex-flow-react-state-management', purpose: 'State strategy across local, server, and URL state in React apps' },
      { trigger: '/frameworks/react-ui-patterns', skill: 'codex-flow-react-ui-patterns', purpose: 'Modern React UI states for loading, errors, optimistic flows, and graceful degradation' },
      { trigger: '/performance/react-component-performance', skill: 'codex-flow-react-component-performance', purpose: 'Targeted React render-performance diagnosis and optimization patterns' },
      { trigger: '/next-best-practices', skill: 'codex-flow-next-best-practices', purpose: 'Next.js App Router boundaries, runtime, and data-fetch patterns' },
      { trigger: '/frameworks/nextjs-app-router-patterns', skill: 'codex-flow-nextjs-app-router-patterns', purpose: 'App Router patterns from wshobson agents skill pack' },
      { trigger: '/frameworks/nextjs-app-router', skill: 'codex-flow-nextjs-app-router-developer-kit', purpose: 'Next.js App Router implementation patterns from developer-kit' },
      { trigger: '/frameworks/nextjs-data-fetching', skill: 'codex-flow-nextjs-data-fetching', purpose: 'Next.js data fetching strategy and cache behavior patterns' },
      { trigger: '/frameworks/nextjs-performance', skill: 'codex-flow-nextjs-performance', purpose: 'Next.js performance optimization and rendering discipline' },
      { trigger: '/frameworks/astro', skill: 'codex-flow-astro', purpose: 'Astro islands architecture for content-heavy sites with zero-JS-by-default delivery' },
      { trigger: '/vue-best-practices', skill: 'codex-flow-vue-best-practices', purpose: 'Vue architecture and composition best practices' },
      { trigger: '/angular-best-practices', skill: 'codex-flow-angular-component', purpose: 'Angular standalone component and signal-based architecture patterns' },
      { trigger: '/frameworks/angular-state-management', skill: 'codex-flow-angular-state-management', purpose: 'Angular Signals, NgRx, and RxJS state architecture patterns' },
      { trigger: '/frameworks/angular-ui-patterns', skill: 'codex-flow-angular-ui-patterns', purpose: 'Angular UI loading/error/display patterns for resilient component UX' },
      { trigger: '/svelte-best-practices', skill: 'codex-flow-svelte-code-writer', purpose: 'Svelte and SvelteKit implementation guidance' },
      { trigger: '/frameworks/sveltekit', skill: 'codex-flow-sveltekit', purpose: 'SvelteKit full-stack routing, SSR/SSG, and form-action implementation patterns' },
      { trigger: '/frontend/component-scaffold', skill: 'codex-flow-component-scaffold-generator', purpose: 'Generate reusable frontend component scaffolds with naming and structure conventions' },
      { trigger: '/frontend/form-wizard', skill: 'codex-flow-form-wizard-builder', purpose: 'Build multi-step form wizard flows with UX-safe state transitions' },
      { trigger: '/frontend/modal-drawer-system', skill: 'codex-flow-modal-drawer-system', purpose: 'Standardized modal and drawer patterns for consistent interactions' },
      { trigger: '/frontend/design-to-component', skill: 'codex-flow-design-to-component-translator', purpose: 'Translate design intent into reusable production components' },
      { trigger: '/frontend/dark-mode', skill: 'codex-flow-dark-mode-implementer', purpose: 'Implement dark mode with token-safe and contrast-safe theming' },
      { trigger: '/frontend/page-layout', skill: 'codex-flow-page-layout-builder', purpose: 'Page layout construction with responsive information hierarchy' },
      { trigger: '/frontend/state-ux-flow', skill: 'codex-flow-state-ux-flow-builder', purpose: 'State and UX-flow modeling for complex interaction journeys' },
      { trigger: '/frontend/react-hook-builder', skill: 'codex-flow-react-hook-builder', purpose: 'Create reusable custom React hooks with solid API boundaries' },
      { trigger: '/frontend/refactor-planner', skill: 'codex-flow-frontend-refactor-planner', purpose: 'Plan safe frontend refactors with regression risk controls' },
      { trigger: '/frontend/react-server-components', skill: 'codex-flow-react-server-components', purpose: 'React Server Component boundary and rendering strategy guidance' },
      { trigger: '/frontend/tailwind-gradient-builder', skill: 'codex-flow-tailwind-gradient-builder', purpose: 'Tailwind gradient system generation for consistent visual depth' },
      { trigger: '/frontend/tanstack-query-setup', skill: 'codex-flow-tanstack-query-setup', purpose: 'Set up TanStack Query patterns for cache, invalidation, and retries' },
      { trigger: '/frontend/responsive-design-system', skill: 'codex-flow-responsive-design-system', purpose: 'Responsive design-system setup for multi-breakpoint UI consistency' },
      { trigger: '/frontend/animation-micro-interactions', skill: 'codex-flow-animation-micro-interaction-pack', purpose: 'Micro-interaction pattern pack for meaningful UI motion feedback' },
      { trigger: '/frontend/i18n', skill: 'codex-flow-i18n-frontend-implementer', purpose: 'Frontend i18n implementation patterns and localization-safe UI structure' },
      { trigger: '/frontend/table-builder', skill: 'codex-flow-table-builder', purpose: 'Data table construction patterns with sorting, filtering, and pagination' },
      { trigger: '/frontend/zustand-state', skill: 'codex-flow-zustand-state-builder', purpose: 'Zustand state-store architecture for scalable frontend state management' },
      { trigger: '/a11y/accessibility-auditor', skill: 'codex-flow-accessibility-auditor', purpose: 'Accessibility auditing workflow for frontend interaction surfaces' },
      { trigger: '/a11y/accessibility-compliance', skill: 'codex-flow-accessibility-compliance', purpose: 'Accessibility compliance guidance from wshobson UI design skill set' },
      { trigger: '/animation/ui-animation', skill: 'codex-flow-ui-animation', purpose: 'UI animation patterns with performance and accessibility constraints' },
      { trigger: '/animation/threejs', skill: 'codex-flow-threejs-animation', purpose: 'Three.js animation system patterns and performance-safe motion orchestration' },
      { trigger: '/animation/threejs-fundamentals', skill: 'codex-flow-threejs-fundamentals', purpose: 'Three.js fundamentals for scene setup, camera, and renderer composition' },
      { trigger: '/animation/threejs-geometry', skill: 'codex-flow-threejs-geometry', purpose: 'Three.js geometry workflows for dynamic and optimized meshes' },
      { trigger: '/animation/threejs-materials', skill: 'codex-flow-threejs-materials', purpose: 'Material system patterns for physically-based and stylized rendering' },
      { trigger: '/animation/threejs-textures', skill: 'codex-flow-threejs-textures', purpose: 'Texture loading and optimization patterns for Three.js scenes' },
      { trigger: '/animation/threejs-lighting', skill: 'codex-flow-threejs-lighting', purpose: 'Lighting composition patterns for realistic and performant 3D scenes' },
      { trigger: '/animation/threejs-loaders', skill: 'codex-flow-threejs-loaders', purpose: 'Asset loader patterns for GLTF and other 3D formats' },
      { trigger: '/animation/threejs-interaction', skill: 'codex-flow-threejs-interaction', purpose: 'Three.js interaction patterns for picking, controls, and UX feedback' },
      { trigger: '/animation/threejs-postprocessing', skill: 'codex-flow-threejs-postprocessing', purpose: 'Post-processing pipeline setup for cinematic and polished rendering' },
      { trigger: '/animation/threejs-shaders', skill: 'codex-flow-threejs-shaders', purpose: 'Custom shader workflows and GPU effect patterns for advanced visuals' },
      { trigger: '/animation/framer-motion', skill: 'codex-flow-framer-motion-animator', purpose: 'Framer Motion variants, transitions, and interaction-driven animation patterns' },
      { trigger: '/animation/3d-web-experience', skill: 'codex-flow-3d-web-experience', purpose: '3D web-experience architecture with Three.js or React Three Fiber and performance guardrails' },
      { trigger: '/animation/scroll-experience', skill: 'codex-flow-scroll-experience', purpose: 'Scroll-driven storytelling and cinematic interaction patterns with performance-aware motion' },
      { trigger: '/playwright-best-practices', skill: 'codex-flow-playwright-best-practices', purpose: 'Playwright E2E and regression test best practices' },
      { trigger: '/testing/playwright-generate-test', skill: 'codex-flow-playwright-generate-test', purpose: 'Generate Playwright tests from scenario descriptions' },
      { trigger: '/testing/playwright-explore-website', skill: 'codex-flow-playwright-explore-website', purpose: 'Explore websites with Playwright to derive robust test paths' },
      { trigger: '/testing/chrome-devtools', skill: 'codex-flow-chrome-devtools', purpose: 'Browser debugging and performance profiling via Chrome DevTools workflows' },
      { trigger: '/testing/e2e-patterns', skill: 'codex-flow-e2e-testing-patterns', purpose: 'E2E testing patterns from wshobson agents skill set' },
      { trigger: '/e2e-testing', skill: 'codex-flow-e2e-testing', purpose: 'Cross-project E2E testing strategy and flake-resistant test design' },
      { trigger: '/browser-qa', skill: 'codex-flow-browser-qa', purpose: 'Automated visual testing and interaction verification after UI changes' },
      { trigger: '/click-path-audit', skill: 'codex-flow-click-path-audit', purpose: 'Trace state transitions for button and interaction paths to catch hidden UI bugs' },
      { trigger: '/qa', skill: 'codex-flow-qa', purpose: 'Regression verification workflow for frontend surfaces' },
      { trigger: '/web-quality', skill: 'codex-flow-web-quality', purpose: 'Core Web Vitals, Lighthouse, SEO, and accessibility quality gate' },
      { trigger: '/performance/core-web-vitals', skill: 'codex-flow-core-web-vitals', purpose: 'Core Web Vitals diagnostics and optimization workflow' },
      { trigger: '/performance/web-performance-optimization', skill: 'codex-flow-web-performance-optimization', purpose: 'Systematic web-performance optimization for bundles, runtime, caching, and loading speed' },
      { trigger: '/seo/optimise-seo', skill: 'codex-flow-optimise-seo', purpose: 'SEO optimization workflow for technical and on-page quality' },
      { trigger: '/design/ui-audit', skill: 'codex-flow-ui-audit', purpose: 'UI audit workflow for visual consistency and interaction quality' },
      { trigger: '/design/ui-design', skill: 'codex-flow-ui-design', purpose: 'Practical UI design workflow for production frontend interfaces' },
      { trigger: '/design/typography-audit', skill: 'codex-flow-typography-audit', purpose: 'Typography audit for readability and hierarchy consistency' },
      { trigger: '/design/web-design-guidelines', skill: 'codex-flow-web-design-guidelines', purpose: 'Web design guideline enforcement from kimny template skill set' },
      { trigger: '/typescript-clean-code', skill: 'codex-flow-typescript-clean-code', purpose: 'TypeScript clean-code and maintainable architecture patterns' },
      { trigger: '/vite-best-practices', skill: 'codex-flow-vite', purpose: 'Vite build, caching, and deployment correctness best practices' },
      { trigger: '/build-tools/vitepress', skill: 'codex-flow-vitepress', purpose: 'VitePress documentation and static-site build workflow' },
      { trigger: '/build-tools/monorepo-management', skill: 'codex-flow-monorepo-management', purpose: 'Monorepo dependency and task orchestration best practices' },
      { trigger: '/build-tools/nx', skill: 'codex-flow-nx-ai-agents-config', purpose: 'Nx workspace exploration, code generation, and task execution flow' },
      { trigger: '/build-tools/nx-workspace-patterns', skill: 'codex-flow-nx-workspace-patterns', purpose: 'Nx workspace architecture and maintenance patterns from wshobson pack' },
      { trigger: '/build-tools/nx-monorepo', skill: 'codex-flow-nx-monorepo', purpose: 'Nx monorepo setup and workflow patterns from developer-kit' },
      { trigger: '/build-tools/turborepo', skill: 'codex-flow-turborepo', purpose: 'Turborepo task pipelines, cache strategy, and CI optimization patterns' },
      { trigger: '/build-tools/turborepo-caching', skill: 'codex-flow-turborepo-caching', purpose: 'Turborepo cache optimization patterns from wshobson pack' },
      { trigger: '/build-tools/turborepo-monorepo', skill: 'codex-flow-turborepo-monorepo', purpose: 'Turborepo monorepo setup patterns from developer-kit' },
      { trigger: '/build-tools/tailwind-css-patterns', skill: 'codex-flow-tailwind-css-patterns', purpose: 'Tailwind CSS implementation patterns from developer-kit' },
      { trigger: '/tanstack-query', skill: 'codex-flow-tanstack-query-best-practices', purpose: 'TanStack Query data fetching and cache strategy patterns' },
      { trigger: '/tanstack-query-expert', skill: 'codex-flow-tanstack-query-expert', purpose: 'Production-grade TanStack Query patterns for cache lifecycle, mutations, optimistic updates, and SSR hydration' },
      { trigger: '/frameworks/tanstack-router', skill: 'codex-flow-tanstack-router-best-practices', purpose: 'TanStack Router type-safe routing, loaders, search params, and navigation patterns' },
      { trigger: '/frameworks/tanstack-start', skill: 'codex-flow-tanstack-start-best-practices', purpose: 'TanStack Start full-stack patterns for server functions, middleware, SSR, and auth boundaries' },
      { trigger: '/frameworks/tanstack-integration', skill: 'codex-flow-tanstack-integration-best-practices', purpose: 'Integrated TanStack Query + Router + Start data flow, SSR hydration, and cache coordination patterns' },
      { trigger: '/video/remotion', skill: 'codex-flow-remotion', purpose: 'React-based video production workflow with animation and timeline patterns' },
      { trigger: '/video/remotion-render', skill: 'codex-flow-remotion-render', purpose: 'Remotion rendering pipeline optimization and output quality checks' },
      { trigger: '/video/remotion-stitch', skill: 'codex-flow-remotion-stitch', purpose: 'Stitch plus Remotion workflow for AI-assisted video composition' },
      { trigger: '/video/remotion-video-production', skill: 'codex-flow-remotion-video-production', purpose: 'Template-based Remotion video production flow for repeatable output' },
    ]
  },
  'backend-platform': {
    title: 'Backend and Platform',
    workflows: [
      { trigger: '/backend-patterns', skill: 'codex-flow-backend-patterns', purpose: 'Backend architecture patterns for services and APIs' },
      { trigger: '/api-design', skill: 'codex-flow-api-design', purpose: 'REST API contract design, versioning, and error strategy' },
      { trigger: '/hexagonal-architecture', skill: 'codex-flow-hexagonal-architecture', purpose: 'Ports and adapters architecture for maintainable service boundaries' },
      { trigger: '/database-migrations', skill: 'codex-flow-database-migrations', purpose: 'Schema and data migration workflow with rollback planning' },
      { trigger: '/database/schema-validator', skill: 'codex-flow-database-schema-validator', purpose: 'Validate SQL schema safety and naming rules using deterministic policy checks' },
      { trigger: '/postgres-patterns', skill: 'codex-flow-postgres-patterns', purpose: 'PostgreSQL schema, indexing, and query optimization patterns' },
      { trigger: '/deployment-patterns', skill: 'codex-flow-deployment-patterns', purpose: 'Production rollout, health checks, and rollback-safe deployment flow' },
      { trigger: '/cloud/gcp-verify', skill: 'codex-flow-always-verify-gcp', purpose: 'Google Cloud command verification workflow using official docs, dry-run checks, and explicit approval gates' },
      { trigger: '/docker-patterns', skill: 'codex-flow-docker-patterns', purpose: 'Containerization and Docker Compose service orchestration patterns' },
      { trigger: '/mcp-server-patterns', skill: 'codex-flow-mcp-server-patterns', purpose: 'MCP server tool/resource design and implementation patterns' },
      { trigger: '/workflow-orchestration', skill: 'codex-flow-workflow-orchestration-patterns', purpose: 'Temporal-oriented workflow orchestration architecture for resilient distributed processes' },
      { trigger: '/validation/zod', skill: 'codex-flow-zod-validation-expert', purpose: 'TypeScript-first runtime validation with Zod across APIs, forms, and server actions' },
      { trigger: '/git-workflow', skill: 'codex-flow-git-workflow', purpose: 'Branching and collaboration workflow for multi-contributor engineering teams' },
      { trigger: '/repo-scan', skill: 'codex-flow-repo-scan', purpose: 'Cross-stack source audit and module-level risk classification' }
    ]
  },
  mobile: {
    title: 'Mobile Development',
    workflows: [
      { trigger: '/mobile', skill: 'codex-flow-mobile-developer', purpose: 'iOS, Android, Flutter, and React Native implementation support' },
      { trigger: '/mobile-qa', skill: 'codex-flow-mobile-qa', purpose: 'Mobile QA coverage with simulator and device-aware checks' }
    ]
  },
  'knowledge-work': {
    title: 'Knowledge Work',
    workflows: [
      { trigger: '/productivity', skill: 'codex-flow-productivity-ops', purpose: 'Inbox triage, prioritization, and execution cadence' },
      { trigger: '/knowledge', skill: 'codex-flow-enterprise-search', purpose: 'Enterprise knowledge lookup and answer synthesis' },
      { trigger: '/support', skill: 'codex-flow-customer-support', purpose: 'Support ticket triage and escalation-ready summaries' },
      { trigger: '/sales', skill: 'codex-flow-sales-execution', purpose: 'Sales discovery prep and follow-up structure' },
      { trigger: '/product', skill: 'codex-flow-product-strategy', purpose: 'PRD framing, requirements, and tradeoff analysis' },
      { trigger: '/delivery', skill: 'codex-flow-engineering-delivery', purpose: 'Delivery coordination, bug triage, and release handoff' }
    ]
  },
  marketing: {
    title: 'Marketing and Growth',
    workflows: [
      { trigger: '/marketing/context/product-marketing', skill: 'codex-flow-product-marketing-context', purpose: 'Product marketing context framing before campaign or channel execution' },
      { trigger: '/marketing/research/customer', skill: 'codex-flow-customer-research', purpose: 'Customer research synthesis for messaging, channel, and offer decisions' },
      { trigger: '/marketing/research/competitor-alternatives', skill: 'codex-flow-competitor-alternatives', purpose: 'Alternative-page and competitor-positioning strategy for acquisition intent' },
      { trigger: '/marketing/messaging/copywriting', skill: 'codex-flow-copywriting', purpose: 'Persuasive copywriting for landing pages, ads, and lifecycle messaging' },
      { trigger: '/marketing/content/strategy', skill: 'codex-flow-content-strategy', purpose: 'Content strategy planning across funnel stages and distribution channels' },
      { trigger: '/marketing/content/social', skill: 'codex-flow-social-content', purpose: 'Social content strategy and production flow for demand capture and awareness' },
      { trigger: '/marketing/content/technical-tutorials', skill: 'codex-flow-technical-tutorials', purpose: 'Technical tutorial planning and writing for developer-led acquisition' },
      { trigger: '/marketing/campaigns/paid-ads', skill: 'codex-flow-paid-ads', purpose: 'Paid ads campaign strategy, targeting, and creative-testing workflow' },
      { trigger: '/marketing/campaigns/developer-ads', skill: 'codex-flow-developer-ads', purpose: 'Developer-focused ads strategy across technical channels and messaging' },
      { trigger: '/marketing/campaigns/email-sequence', skill: 'codex-flow-email-sequence', purpose: 'Lifecycle and nurture email sequence design for activation and conversion' },
      { trigger: '/marketing/campaigns/developer-email-sequences', skill: 'codex-flow-developer-email-sequences', purpose: 'Developer-specific email sequence strategy tied to product adoption milestones' },
      { trigger: '/marketing/campaigns/launch', skill: 'codex-flow-launch-strategy', purpose: 'Launch strategy planning across positioning, channels, and rollout timing' },
      { trigger: '/marketing/creative/ad-creative', skill: 'codex-flow-ad-creative', purpose: 'Ad creative ideation and iteration workflow for performance campaigns' },
      { trigger: '/marketing/conversion/page-cro', skill: 'codex-flow-page-cro', purpose: 'Landing-page CRO workflow for conversion lift and friction reduction' },
      { trigger: '/marketing/conversion/signup-flow-cro', skill: 'codex-flow-signup-flow-cro', purpose: 'Signup-flow conversion optimization across form, UX, and onboarding handoff' },
      { trigger: '/marketing/growth/referral-program', skill: 'codex-flow-referral-program', purpose: 'Referral program design and incentive mechanics for compounding growth' },
      { trigger: '/marketing/growth/churn-prevention', skill: 'codex-flow-churn-prevention', purpose: 'Churn prevention strategy across lifecycle messaging and product touchpoints' },
      { trigger: '/marketing/pricing/strategy', skill: 'codex-flow-pricing-strategy', purpose: 'Pricing and packaging strategy for better monetization and positioning' },
      { trigger: '/marketing/pricing/usage-based', skill: 'codex-flow-usage-based-pricing', purpose: 'Usage-based pricing design for developer and API-first products' },
      { trigger: '/marketing/analytics/tracking', skill: 'codex-flow-analytics-tracking', purpose: 'Analytics tracking architecture for attribution, funnel diagnostics, and iteration' },
      { trigger: '/marketing/analytics/ab-test-setup', skill: 'codex-flow-ab-test-setup', purpose: 'Experiment design and A/B test setup for reliable growth decisions' },
      { trigger: '/marketing/ops/revops', skill: 'codex-flow-revops', purpose: 'Revenue operations alignment across acquisition, sales handoff, and retention metrics' },
      { trigger: '/marketing/sales/enablement', skill: 'codex-flow-sales-enablement', purpose: 'Sales enablement assets and narratives that improve close rates' },
      { trigger: '/marketing/devrel/advocacy', skill: 'codex-flow-developer-advocacy', purpose: 'Developer advocacy strategy for trust, adoption, and community pull' },
      { trigger: '/marketing/devrel/open-source', skill: 'codex-flow-open-source-marketing', purpose: 'Open-source marketing strategy for distribution, credibility, and growth loops' },
      { trigger: '/marketing/devrel/community-building', skill: 'codex-flow-community-building', purpose: 'Community-building programs for sustained engagement and retention' },
      { trigger: '/marketing/devrel/github-presence', skill: 'codex-flow-github-presence', purpose: 'GitHub presence optimization for discoverability and conversion to product usage' },
      { trigger: '/marketing/distribution/dev-tool-directory-listings', skill: 'codex-flow-dev-tool-directory-listings', purpose: 'Dev-tool directory listing strategy and optimization for qualified traffic' },
      { trigger: '/marketing/distribution/developer-newsletter', skill: 'codex-flow-developer-newsletter', purpose: 'Developer newsletter editorial and distribution strategy for recurring demand' },
      { trigger: '/marketing/product/developer-onboarding', skill: 'codex-flow-developer-onboarding', purpose: 'Developer onboarding journey optimization from first key to first success' },
      { trigger: '/marketing/product/sdk-dx', skill: 'codex-flow-sdk-dx', purpose: 'SDK and DX improvements that increase activation and reduce onboarding drop-off' },
      { trigger: '/marketing/seo/ai-seo', skill: 'codex-flow-ai-seo', purpose: 'AI-assisted SEO workflow for research, content planning, and optimization' },
      { trigger: '/marketing/seo/developer-seo', skill: 'codex-flow-developer-seo', purpose: 'Developer SEO strategy for technical audiences and product-led discovery' },
      { trigger: '/marketing/seo/audit', skill: 'codex-flow-seo-audit', purpose: 'SEO audit workflow for technical issues and content gaps' },
      { trigger: '/marketing/seo/plan', skill: 'codex-flow-seo-plan', purpose: 'SEO planning workflow with prioritized actions and measurable outcomes' },
      { trigger: '/marketing/seo/content', skill: 'codex-flow-seo-content', purpose: 'SEO content strategy for topic coverage and intent matching' },
      { trigger: '/marketing/seo/technical', skill: 'codex-flow-seo-technical', purpose: 'Technical SEO workflow for crawlability, indexation, and site health' },
      { trigger: '/marketing/seo/programmatic', skill: 'codex-flow-seo-programmatic', purpose: 'Programmatic SEO strategy for scalable long-tail acquisition' },
      { trigger: '/marketing/seo/schema', skill: 'codex-flow-seo-schema', purpose: 'Schema markup strategy to improve SERP features and relevance signals' },
      { trigger: '/marketing/seo/sitemap', skill: 'codex-flow-seo-sitemap', purpose: 'Sitemap strategy and governance for efficient crawl prioritization' },
      { trigger: '/marketing/seo/hreflang', skill: 'codex-flow-seo-hreflang', purpose: 'Hreflang implementation workflow for multi-region and multilingual SEO' },
      { trigger: '/marketing/seo/backlinks', skill: 'codex-flow-seo-backlinks', purpose: 'Backlink strategy for authority growth and organic ranking lift' }
    ]
  },
  'ai-agent-ops': {
    title: 'AI Agent Operations',
    workflows: [
      { trigger: '/agentic-engineering', skill: 'codex-flow-agentic-engineering', purpose: 'Eval-first execution model for AI-heavy engineering workflows' },
      { trigger: '/ai-first-engineering', skill: 'codex-flow-ai-first-engineering', purpose: 'Team operating model for high AI code-generation environments' },
      { trigger: '/autonomous-loops', skill: 'codex-flow-autonomous-loops', purpose: 'Autonomous loop architectures with guardrails and recovery controls' },
      { trigger: '/continuous-agent-loop', skill: 'codex-flow-continuous-agent-loop', purpose: 'Continuous autonomous loop pattern with quality gates' },
      { trigger: '/autonomous-agent-harness', skill: 'codex-flow-autonomous-agent-harness', purpose: 'Persistent autonomous agent setup with scheduling and memory' },
      { trigger: '/eval-harness', skill: 'codex-flow-eval-harness', purpose: 'Formal evaluation harness for task quality and pass-rate tracking' },
      { trigger: '/agent-eval', skill: 'codex-flow-agent-eval', purpose: 'Head-to-head agent benchmarking by cost, latency, and correctness' },
      { trigger: '/context-budget', skill: 'codex-flow-context-budget', purpose: 'Context-window audit and token optimization planning' },
      { trigger: '/strategic-compact', skill: 'codex-flow-strategic-compact', purpose: 'Manual compaction guidance at logical milestones' },
      { trigger: '/continuous-learning', skill: 'codex-flow-continuous-learning', purpose: 'Extract and evolve reusable patterns from session history' },
      { trigger: '/team-builder', skill: 'codex-flow-team-builder', purpose: 'Compose and dispatch parallel specialist agent teams' },
      { trigger: '/dmux-workflows', skill: 'codex-flow-dmux-workflows', purpose: 'Multi-agent pane orchestration for concurrent task execution' },
      { trigger: '/claude-devfleet', skill: 'codex-flow-claude-devfleet', purpose: 'Worktree-based multi-agent coding orchestration and reporting' },
      { trigger: '/adk/tool-scaffold', skill: 'codex-flow-adk-tool-scaffold', purpose: 'Scaffold ADK BaseTool implementations with template-driven structure and refinement flow' },
      { trigger: '/acceptance-orchestrator', skill: 'codex-flow-acceptance-orchestrator', purpose: 'Drive coding tasks end-to-end from intake to acceptance verification with explicit completion gates' },
      { trigger: '/advanced-evaluation', skill: 'codex-flow-advanced-evaluation', purpose: 'LLM-as-judge evaluation design with rubric strategy and bias mitigation patterns' },
      { trigger: '/agent-memory-systems', skill: 'codex-flow-agent-memory-systems', purpose: 'Agent memory architecture for retrieval quality, chunking, and long-term consistency' },
      { trigger: '/autonomous-agent-patterns', skill: 'codex-flow-autonomous-agent-patterns', purpose: 'Autonomous coding-agent loop and permission-pattern design inspired by production agent systems' },
      { trigger: '/tool-design', skill: 'codex-flow-tool-design', purpose: 'Design robust agent-facing tool APIs with clear contracts and reduced routing ambiguity' },
      { trigger: '/search-first', skill: 'codex-flow-search-first', purpose: 'Research-first workflow before custom implementation' },
      { trigger: '/documentation-lookup', skill: 'codex-flow-documentation-lookup', purpose: 'Use up-to-date docs through MCP before coding uncertain APIs' }
    ]
  },
  community: {
    title: 'Community Workflows',
    workflows: [
      { trigger: '/ci', skill: 'codex-flow-gh-fix-ci', purpose: 'Inspect and fix failing GitHub Actions checks' },
      { trigger: '/pr-comments', skill: 'codex-flow-gh-address-comments', purpose: 'Address PR review threads and issue comments' },
      { trigger: '/qa-web', skill: 'codex-flow-webapp-testing', purpose: 'Local web app smoke testing and browser debugging' },
      { trigger: '/mcp-builder', skill: 'codex-flow-mcp-builder', purpose: 'Design and implement MCP servers with evaluation loops' }
    ]
  },
  review: {
    title: 'Review Quality Gates',
    workflows: [
      { trigger: '/pr-review', skill: 'codex-flow-pr-review', purpose: 'High-rigor pull request review' },
      { trigger: '/impl-review', skill: 'codex-flow-impl-review', purpose: 'Implementation diff review with regression checks' },
      { trigger: '/high-signal-review', skill: 'codex-flow-high-signal-review', purpose: 'Risk-prioritized review pass' },
      { trigger: '/architect-review', skill: 'codex-flow-architect-review', purpose: 'Architecture-focused review for scalability, maintainability, and distributed-systems risk' },
      { trigger: '/parallel-review', skill: 'codex-flow-parallel-review', purpose: 'Independent review passes with reconciliation' }
    ]
  },
  'language-engineering': {
    title: 'Language Engineering',
    workflows: [
      { trigger: '/python-patterns', skill: 'codex-flow-python-patterns', purpose: 'Python architecture and idiomatic implementation patterns' },
      { trigger: '/python-testing', skill: 'codex-flow-python-testing', purpose: 'pytest and TDD workflow for robust Python test suites' },
      { trigger: '/python/json-to-pydantic', skill: 'codex-flow-json-to-pydantic', purpose: 'Convert JSON payloads into typed Pydantic models with nested class inference' },
      { trigger: '/golang-patterns', skill: 'codex-flow-golang-patterns', purpose: 'Idiomatic Go patterns for reliability and maintainability' },
      { trigger: '/golang-testing', skill: 'codex-flow-golang-testing', purpose: 'Table-driven tests, benchmarks, and coverage workflow for Go' },
      { trigger: '/rust-patterns', skill: 'codex-flow-rust-patterns', purpose: 'Rust ownership, error handling, and concurrency design patterns' },
      { trigger: '/rust-testing', skill: 'codex-flow-rust-testing', purpose: 'Rust testing strategy across unit, integration, and async paths' },
      { trigger: '/kotlin-patterns', skill: 'codex-flow-kotlin-patterns', purpose: 'Kotlin idioms and architecture patterns for backend and mobile' },
      { trigger: '/kotlin-testing', skill: 'codex-flow-kotlin-testing', purpose: 'Kotest and coroutine testing workflow for Kotlin projects' },
      { trigger: '/springboot-patterns', skill: 'codex-flow-springboot-patterns', purpose: 'Spring Boot service architecture and API layering patterns' },
      { trigger: '/springboot-tdd', skill: 'codex-flow-springboot-tdd', purpose: 'JUnit, Mockito, and testcontainers-driven TDD for Spring Boot' },
      { trigger: '/django-patterns', skill: 'codex-flow-django-patterns', purpose: 'Django and DRF architecture, ORM, and service-layer patterns' },
      { trigger: '/django-tdd', skill: 'codex-flow-django-tdd', purpose: 'pytest-django testing workflow for Django applications' },
      { trigger: '/laravel-patterns', skill: 'codex-flow-laravel-patterns', purpose: 'Laravel service architecture, Eloquent, queues, and APIs' },
      { trigger: '/laravel-tdd', skill: 'codex-flow-laravel-tdd', purpose: 'PHPUnit/Pest-driven TDD flow for Laravel projects' }
    ]
  },
  'security-guard': {
    title: 'Security and Safety',
    workflows: [
      { trigger: '/security-review', skill: 'codex-flow-security-review', purpose: 'OWASP and CWE-focused secure coding review' },
      { trigger: '/security-scan', skill: 'codex-flow-security-scan', purpose: 'Configuration and workflow vulnerability scan for agent setup' },
      { trigger: '/safety-guard', skill: 'codex-flow-safety-guard', purpose: 'Prevent destructive operations in production and autonomous loops' },
      { trigger: '/django-security', skill: 'codex-flow-django-security', purpose: 'Django-specific security hardening checklist and patterns' },
      { trigger: '/laravel-security', skill: 'codex-flow-laravel-security', purpose: 'Laravel security patterns for auth, validation, and secrets' },
      { trigger: '/springboot-security', skill: 'codex-flow-springboot-security', purpose: 'Spring Security and platform hardening for Java services' },
      { trigger: '/healthcare-phi-compliance', skill: 'codex-flow-healthcare-phi-compliance', purpose: 'PHI and PII handling compliance patterns for sensitive systems' },
      { trigger: '/agent-payment-x402', skill: 'codex-flow-agent-payment-x402', purpose: 'Controlled agent payment execution with budget and policy guardrails' }
    ]
  },
  'leadership-review': {
    title: 'Leadership Review Workflows',
    workflows: [
      { trigger: '/ceo-review', skill: 'codex-flow-plan-ceo-review', purpose: 'Founder-mode plan review' },
      { trigger: '/tech-lead-review', skill: 'codex-flow-plan-eng-review', purpose: 'Engineering plan review' },
      { trigger: '/ship', skill: 'codex-flow-ship', purpose: 'Release and ship automation support' },
      { trigger: '/retro', skill: 'codex-flow-retro', purpose: 'Engineering retrospective workflow' }
    ]
  },
  'workflow-commands': {
    title: 'Command Workflow Library',
    workflows: [
      { trigger: '/flow/plan', skills: ['codex-flow-planning'], purpose: 'Planning scope, architecture, and approval gates' },
      { trigger: '/flow/build', skills: ['codex-flow-tdd', 'codex-flow-test-gate', 'codex-flow-quality-gate'], purpose: 'Test-first implementation with quality gating' },
      { trigger: '/flow/debug', skills: ['codex-flow-debugging'], purpose: 'Systematic root-cause analysis and fix verification' },
      { trigger: '/flow/review', skills: ['codex-flow-code-review'], purpose: 'PR review and feedback handling workflow' },
      { trigger: '/flow/ux', skills: ['codex-flow-ui-preview'], purpose: 'UX analysis, preview, and design validation' },
      { trigger: '/flow/content', skills: ['codex-flow-content-factory'], purpose: 'Content research, generation, and audit workflow' },
      { trigger: '/flow/track', skills: ['codex-flow-ads-tracker'], purpose: 'Attribution and conversion-tracking setup' },
      { trigger: '/flow/bootstrap', skills: ['codex-flow-project-bootstrap'], purpose: 'Greenfield setup and day-0 foundation' },
      { trigger: '/flow/deploy', skills: ['codex-flow-safe-deploy'], purpose: 'Release pipeline with safety gates' },
      { trigger: '/flow/continuity', skills: ['codex-flow-continuity'], purpose: 'Session continuity and durable memory workflow' },
      { trigger: '/flow/demo', skills: ['codex-flow-how-it-work'], purpose: 'Workflow kit onboarding walkthrough' }
    ]
  }
};

export const TOPIC_NAMES = Object.keys(TOPICS);
export const WORKFLOW_FILE_PREFIX = 'codex-flow-pack';
export const TOPIC_ALIASES = Object.freeze({
  gstack: 'leadership-review',
  codymaster: 'workflow-commands',
  'cody-master': 'workflow-commands'
});

function normalizeTopicName(topicName) {
  if (typeof topicName !== 'string') {
    return '';
  }
  const normalized = topicName.trim().toLowerCase();
  return TOPIC_ALIASES[normalized] ?? normalized;
}

function isKnownTopicName(topicName) {
  return Object.prototype.hasOwnProperty.call(TOPICS, topicName);
}

export function resolveTopicName(topicName) {
  const normalized = normalizeTopicName(topicName);
  return isKnownTopicName(normalized) ? normalized : null;
}

export function hasTopic(topicName) {
  return resolveTopicName(topicName) !== null;
}

export function getTopic(topicName) {
  const resolved = resolveTopicName(topicName);
  return resolved ? TOPICS[resolved] : null;
}

export function workflowFileName(topicName) {
  const resolved = resolveTopicName(topicName);
  if (!resolved) {
    throw new Error(`Unknown topic: ${topicName}`);
  }
  return `${WORKFLOW_FILE_PREFIX}-${resolved}.md`;
}

export function renderWorkflowFile(topicName) {
  const resolved = resolveTopicName(topicName);
  if (!resolved) {
    throw new Error(`Unknown topic: ${topicName}`);
  }
  return renderTopicWorkflow(resolved, TOPICS[resolved]);
}
