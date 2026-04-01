import { TOPICS } from '../src/topics/index.js';

const REQUIRED_CORE_ROUTES = Object.freeze({
  '/plan': 'codex-flow-plan',
  '/debug': 'codex-flow-debug',
  '/review': 'codex-flow-review',
  '/deploy': 'codex-flow-deploy'
});

function collectMaps() {
  const routeMap = new Map();
  const skillMap = new Map();

  for (const [topic, config] of Object.entries(TOPICS)) {
    for (const workflow of config.workflows) {
      if (workflow.trigger) {
        const routeOwners = routeMap.get(workflow.trigger) ?? [];
        routeOwners.push({ topic, skill: workflow.skill ?? (workflow.skills ?? []).join(', ') });
        routeMap.set(workflow.trigger, routeOwners);
      }

      const skills = workflow.skill ? [workflow.skill] : workflow.skills ?? [];
      for (const skill of skills) {
        const skillOwners = skillMap.get(skill) ?? [];
        skillOwners.push({ topic, trigger: workflow.trigger ?? '(intent-route)' });
        skillMap.set(skill, skillOwners);
      }
    }
  }

  return { routeMap, skillMap };
}

function findDuplicates(map) {
  return [...map.entries()]
    .filter(([, owners]) => owners.length > 1)
    .sort((a, b) => a[0].localeCompare(b[0]));
}

function printDuplicateBlock(title, duplicates, formatter) {
  if (duplicates.length === 0) {
    return;
  }
  console.error(`\\n${title}:`);
  for (const [key, owners] of duplicates) {
    console.error(`- ${key}`);
    for (const owner of owners) {
      console.error(`  - ${formatter(owner)}`);
    }
  }
}

function validateCanonicalCoreRoutes(routeMap) {
  const violations = [];

  for (const [route, expectedSkill] of Object.entries(REQUIRED_CORE_ROUTES)) {
    const owners = routeMap.get(route) ?? [];
    if (owners.length !== 1) {
      violations.push(`${route}: expected exactly one owner, found ${owners.length}`);
      continue;
    }
    const [owner] = owners;
    if (owner.topic !== 'core') {
      violations.push(`${route}: expected topic "core", found "${owner.topic}"`);
    }
    if (owner.skill !== expectedSkill) {
      violations.push(`${route}: expected skill "${expectedSkill}", found "${owner.skill}"`);
    }
  }

  return violations;
}

function validateSkillPrefix(skillMap) {
  const violations = [];
  for (const skill of skillMap.keys()) {
    if (!skill.startsWith('codex-flow-')) {
      violations.push(skill);
    }
  }
  return violations.sort();
}

const { routeMap, skillMap } = collectMaps();
const duplicateRoutes = findDuplicates(routeMap);
const duplicateSkills = findDuplicates(skillMap);
const coreRouteViolations = validateCanonicalCoreRoutes(routeMap);
const invalidSkillPrefixes = validateSkillPrefix(skillMap);

if (
  duplicateRoutes.length > 0 ||
  duplicateSkills.length > 0 ||
  coreRouteViolations.length > 0 ||
  invalidSkillPrefixes.length > 0
) {
  console.error('Route and skill conflict check failed.');
  printDuplicateBlock('Duplicate routes', duplicateRoutes, (owner) => `${owner.topic} -> ${owner.skill}`);
  printDuplicateBlock('Duplicate skills', duplicateSkills, (owner) => `${owner.topic} -> ${owner.trigger}`);
  if (coreRouteViolations.length > 0) {
    console.error('\nCanonical core route violations:');
    for (const violation of coreRouteViolations) {
      console.error(`- ${violation}`);
    }
  }
  if (invalidSkillPrefixes.length > 0) {
    console.error('\nInvalid skill ID prefix (must start with "codex-flow-"):');
    for (const skill of invalidSkillPrefixes) {
      console.error(`- ${skill}`);
    }
  }
  process.exit(1);
}

console.log(
  `Route and skill conflict check passed. routes=${routeMap.size} skills=${skillMap.size} duplicateRoutes=0 duplicateSkills=0 canonicalCoreRoutes=ok skillPrefix=ok`
);
