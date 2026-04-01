import path from 'node:path';
import os from 'node:os';

export const CLI_NAME = 'codex-flow';
export const DEFAULT_OUTPUT_DIR = '.codex-flow';
export const DEFAULT_PROJECT_DIR = process.cwd();
export const HOME_DIR = os.homedir();

export function resolveOutputDir(projectDir = DEFAULT_PROJECT_DIR, outputDir = DEFAULT_OUTPUT_DIR) {
  return path.resolve(projectDir, outputDir);
}
