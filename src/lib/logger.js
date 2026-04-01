export function info(message) {
  console.log(`[codex-flow] ${message}`);
}

export function warn(message) {
  console.warn(`[codex-flow] WARN: ${message}`);
}

export function table(rows) {
  for (const row of rows) {
    console.log(row);
  }
}
