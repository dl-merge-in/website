import assert from "node:assert/strict"
import { readFileSync, readdirSync, statSync } from "node:fs"
import { join, resolve } from "node:path"

const root = resolve(import.meta.dirname, "..")
const htmlFiles = []
function walk(dir) {
  for (const name of readdirSync(dir)) {
    if ([".git", "node_modules"].includes(name)) continue
    const path = join(dir, name)
    if (statSync(path).isDirectory()) walk(path)
    else if (name.endsWith(".html")) htmlFiles.push(path)
  }
}
walk(root)
for (const path of htmlFiles) {
  assert.ok(readFileSync(path, "utf8").includes('data-i18n="licensesNav"'), `${path} has no OSS license link`)
}
const page = readFileSync(join(root, "licenses/index.html"), "utf8")
for (const marker of ["Deno runtime 2.8.2", "React DOM 18.2.0", "yt-dlp 2026.06.09", "FFmpeg essentials build by Gyan Doshi 8.1.2", "THIRD_PARTY_LICENSES.txt"]) assert.ok(page.includes(marker), `license page is missing ${marker}`)
const i18n = readFileSync(join(root, "i18n.js"), "utf8")
for (const locale of ["en", "ja", "es", "pt-BR", "de", "fr", "it", "id", "ko", "zh-CN", "zh-TW"]) assert.ok(i18n.includes(`${JSON.stringify(locale)}:`) || i18n.includes(`${locale}:`), `license copy missing locale ${locale}`)
console.log(`PASS: ${htmlFiles.length} pages expose OSS licenses in 11 locales`)
