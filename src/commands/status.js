import path from 'node:path';
import { resolveOutputDir } from '../constants.js';
import { listFiles, pathExists } from '../lib/fs.js';
import { info, warn } from '../lib/logger.js';

export async function runStatus(options) {
  const outputDir = resolveOutputDir(options.path, options.outputDir);
  const workflowsDir = path.join(outputDir, 'workflows');

  const hasRoot = await pathExists(outputDir);
  const hasWorkflows = await pathExists(workflowsDir);

  info(`output directory: ${outputDir}`);
  info(`initialized: ${hasRoot ? 'yes' : 'no'}`);
  info(`workflows dir: ${hasWorkflows ? 'yes' : 'no'}`);

  if (!hasWorkflows) {
    warn('No workflows directory found. Run "codex-flow init" first.');
    return;
  }

  const files = await listFiles(workflowsDir);
  info(`workflow files: ${files.length}`);
  for (const file of files) {
    console.log(`- ${file}`);
  }
}
