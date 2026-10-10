#!/usr/bin/env node
// Dependency-free repository documentation check. Run from the repository root.
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const files = execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8' }).split('\0').filter(Boolean);
const entries = new Set(files);
for (const file of files) {
  let dir = path.posix.dirname(file);
  while (dir !== '.') { entries.add(dir); dir = path.posix.dirname(dir); }
}
const readmes = files.filter(file => /(?:^|\/)readme[^/]*\.md$/i.test(file));
const errors = [];
let checkedLinks = 0;
const stripCode = text => text.replace(/^\s*(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\s*\1\s*$/gm, '');
const slug = text => text.replace(/<[^>]+>/g, '').replace(/[^\p{L}\p{N}_\s-]/gu, '').trim().toLowerCase().replace(/\s+/g, '-');

for (const file of readmes) {
  const content = stripCode(readFileSync(file, 'utf8').replace(/^---\n[\s\S]*?\n---\n/, ''));
  const anchors = new Set([...content.matchAll(/<a\s+id="([^"]+)"/g)].map(match => match[1]));
  for (const match of content.matchAll(/^#{1,6}\s+(.+)$/gm)) anchors.add(slug(match[1]));
  const links = [...content.matchAll(/!?\[[^\]]*\]\(([^\s)]+)(?:\s+"[^"]*")?\)/g)].map(match => match[1]);
  links.push(...[...content.matchAll(/(?:src|href)="([^"]+)"/g)].map(match => match[1]));
  for (const link of links) {
    if (/^(?:https?:|mailto:|data:|tel:)/i.test(link)) continue;
    checkedLinks++;
    let target, fragment;
    try {
      const [rawPath, rawFragment] = link.split('#');
      target = decodeURIComponent(rawPath.split('?')[0]);
      fragment = rawFragment ? decodeURIComponent(rawFragment) : '';
    } catch { errors.push(`${file}: invalid URL encoding: ${link}`); continue; }
    if (!target) {
      if (fragment && !anchors.has(fragment)) errors.push(`${file}: missing section: ${link}`);
      continue;
    }
    const resolved = path.posix.normalize(target.startsWith('/') ? target.slice(1) : path.posix.join(path.posix.dirname(file), target)).replace(/\/$/, '');
    if (resolved !== '.' && !entries.has(resolved)) errors.push(`${file}: missing repository path: ${link}`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`README check passed: ${readmes.length} guides, ${checkedLinks} local paths and section links.`);
}
// External URLs, cross-file fragments, Mermaid semantics and visual layout need separate review.
