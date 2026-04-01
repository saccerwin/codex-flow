import fs from 'node:fs/promises';
import path from 'node:path';

export async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

export async function writeFileSafe(filePath, content, force = false) {
  try {
    if (!force) {
      await fs.access(filePath);
      return { written: false, reason: 'exists' };
    }
  } catch {
    // file does not exist; continue
  }
  await ensureDir(path.dirname(filePath));
  await fs.writeFile(filePath, content, 'utf8');
  return { written: true };
}

export async function pathExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

export async function listFiles(dirPath) {
  try {
    return await fs.readdir(dirPath);
  } catch {
    return [];
  }
}
