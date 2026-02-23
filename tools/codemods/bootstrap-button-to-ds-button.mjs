import { readFileSync } from 'node:fs';

const file = process.argv[2];
if (!file) {
  console.log('Usage: node tools/codemods/bootstrap-button-to-ds-button.mjs <template.html>');
  process.exit(0);
}

const source = readFileSync(file, 'utf8');
const regex = /<button([^>]*)class="([^"]*\bbtn\b[^"]*)"([^>]*)>(.*?)<\/button>/gms;
const transformed = source.replace(regex, (_match, before, classList, after, content) => {
  const clickMatch = `${before} ${after}`.match(/\(click\)="([^"]+)"/);
  const clickExpr = clickMatch ? ` (pressed)="${clickMatch[1]}"` : '';
  const variant = classList.includes('btn-secondary') ? 'secondary' : 'primary';
  return `<ds-button label="${content.trim()}" variant="${variant}"${clickExpr}></ds-button>`;
});

console.log('--- Suggested diff ---');
console.log(transformed);
