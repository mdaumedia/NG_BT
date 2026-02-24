import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const componentsRoot = resolve(process.cwd(), 'libs/components/src/lib');
const entries = readdirSync(componentsRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

const manifest = entries.flatMap((name) => {
  try {
    const metaPath = resolve(componentsRoot, name, `ds-${name}.meta.json`);
    const meta = JSON.parse(readFileSync(metaPath, 'utf8'));
    return [{
      ...meta,
      storybookUrl: `https://storybook.example.com/?path=/story/design-system-${meta.name.toLowerCase()}`
    }];
  } catch {
    return [];
  }
});

writeFileSync(resolve(process.cwd(), 'tools/figma-export/component-manifest.json'), JSON.stringify({ components: manifest }, null, 2));
writeFileSync(resolve(process.cwd(), 'tools/figma-export/figma-components.json'), JSON.stringify(manifest, null, 2));
console.log(`Exported ${manifest.length} components for Figma.`);
