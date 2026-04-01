import path from 'node:path';
import { resolveOutputDir } from '../constants.js';
import { hasTopic, renderWorkflowFile, resolveTopicName, workflowFileName } from '../topics/index.js';
import { ensureDir, writeFileSafe } from '../lib/fs.js';
import { info } from '../lib/logger.js';

export async function runAdd(topicName, options) {
  if (!hasTopic(topicName)) {
    throw new Error(`Unknown topic \"${topicName}\". Run \"codex-flow list\" to see valid topics.`);
  }
  const resolvedTopicName = resolveTopicName(topicName);

  const outputDir = resolveOutputDir(options.path, options.outputDir);
  const workflowsDir = path.join(outputDir, 'workflows');
  await ensureDir(workflowsDir);

  const targetFile = path.join(workflowsDir, workflowFileName(topicName));
  const result = await writeFileSafe(targetFile, renderWorkflowFile(topicName), options.force);
  if (!result.written) {
    throw new Error(`Workflow already exists: ${targetFile}. Use --force to overwrite.`);
  }

  info(`added topic workflow: ${resolvedTopicName}`);
  if (resolvedTopicName !== topicName) {
    info(`resolved alias "${topicName}" -> "${resolvedTopicName}"`);
  }
  info(`file: ${targetFile}`);
}
