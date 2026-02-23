import { execSync } from 'node:child_process';

export default async function figmaExportGenerator(): Promise<void> {
  // TODO: convert to Nx Devkit generator implementation.
  execSync('node tools/figma-export/index.mjs', { stdio: 'inherit' });
}
