import { DEFAULT_OUTPUT_DIR, DEFAULT_PROJECT_DIR } from './constants.js';
import { runInit } from './commands/init.js';
import { runAdd } from './commands/add.js';
import { runList } from './commands/list.js';
import { runStatus } from './commands/status.js';
import { TOPIC_NAMES } from './topics/index.js';

function helpText() {
  const topicsText = TOPIC_NAMES.join(', ');
  return `Codex Flow CLI (for Codex app)

Purpose:
  Build and maintain .codex skill workflow packs.

Usage:
  codex-flow init [--path <dir>] [--output-dir <name>] [--force]
  codex-flow add <topic> [--path <dir>] [--output-dir <name>] [--force]
  codex-flow list
  codex-flow status [--path <dir>] [--output-dir <name>]

Topics:
  ${topicsText}
`;
}

function parseOptions(args) {
  const options = {
    path: DEFAULT_PROJECT_DIR,
    outputDir: DEFAULT_OUTPUT_DIR,
    force: false
  };

  for (let i = 0; i < args.length; i += 1) {
    const token = args[i];
    if (token === '--force') {
      options.force = true;
      continue;
    }
    if (token === '--path') {
      options.path = args[i + 1] ?? options.path;
      i += 1;
      continue;
    }
    if (token === '--output-dir') {
      options.outputDir = args[i + 1] ?? options.outputDir;
      i += 1;
    }
  }

  return options;
}

export async function runCli(argv) {
  const [command, ...rest] = argv;

  if (!command || command === '--help' || command === '-h') {
    console.log(helpText());
    return;
  }

  if (command === 'list') {
    await runList();
    return;
  }

  if (command === 'init') {
    await runInit(parseOptions(rest));
    return;
  }

  if (command === 'status') {
    await runStatus(parseOptions(rest));
    return;
  }

  if (command === 'add') {
    const topicName = rest[0];
    if (!topicName || topicName.startsWith('-')) {
      throw new Error('Missing topic for add command. Example: codex-flow add core');
    }
    await runAdd(topicName, parseOptions(rest.slice(1)));
    return;
  }

  throw new Error(`Unknown command: ${command}\n\n${helpText()}`);
}
