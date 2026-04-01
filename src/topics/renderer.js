function toTitle(input) {
  return input
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function formatWorkflowEntry(item) {
  const trigger = item.trigger ? `\`${item.trigger}\`` : '`(intent-route)`';
  const skills = Array.isArray(item.skills)
    ? item.skills
    : item.skill
      ? [item.skill]
      : [];
  const skillText = skills.map((skill) => `\`${skill}\``).join(', ');
  const prefix = skillText ? `${trigger} -> ${skillText}` : trigger;
  return `- ${prefix}: ${item.purpose}`;
}

export function renderTopicWorkflow(topicName, topic) {
  const heading = `# ${toTitle(topicName)} Skill Pack`;
  const lines = [
    heading,
    '',
    `Topic: ${topic.title}`,
    '',
    '## Routes',
    ''
  ];

  for (const item of topic.workflows) {
    lines.push(formatWorkflowEntry(item));
  }

  lines.push('');
  lines.push('## Naming Convention');
  lines.push('');
  lines.push('- Skill IDs use `codex-flow-*` kebab-case naming.');
  lines.push('- Generated files use `codex-flow-pack-<topic>.md` naming.');
  lines.push('');
  lines.push('## Operating Contract');
  lines.push('');
  lines.push('- Use context preflight before major edits.');
  lines.push('- Keep acceptance checks explicit.');
  lines.push('- Prefer smallest safe change with verification evidence.');
  lines.push('');
  lines.push('## Execution Prompt Seed');
  lines.push('');
  lines.push('```text');
  lines.push(`Use codex-flow pack "${topicName}" for this task.`);
  lines.push('Route intent to the best skill, then execute with evidence and validation.');
  lines.push('```');
  lines.push('');

  return `${lines.join('\n')}\n`;
}
