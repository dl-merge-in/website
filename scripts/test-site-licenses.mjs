import assert from "node:assert/strict"
import { readFileSync, readdirSync, statSync } from "node:fs"
import { join, resolve } from "node:path"
import vm from "node:vm"

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
const locales = ["en", "ja", "es", "pt-BR", "de", "fr", "it", "id", "ko", "zh-CN", "zh-TW"]
function renderedLocale(pageName, requestedLocale) {
  const callbacks = []
  const document = {
    documentElement: { lang: "", dataset: {} }, body: { dataset: { i18nPage: pageName } }, readyState: "loading", title: "",
    querySelectorAll() { return [] }, addEventListener(_, callback) { callbacks.push(callback) }
  }
  const context = vm.createContext({ document, window: {}, location: new URL(`http://localhost/${pageName}/?lang=${requestedLocale}`), navigator: { languages: [requestedLocale], language: requestedLocale }, URL, URLSearchParams })
  vm.runInContext(i18n, context)
  callbacks.forEach(callback => callback())
  return document.documentElement.lang
}
for (const locale of locales) {
  assert.equal(renderedLocale("home", locale), locale, `home should retain ${locale}`)
  for (const pageName of ["download", "changelog", "guide", "legal", "licenses", "supported-sites"]) {
    assert.equal(renderedLocale(pageName, locale), locale === "ja" ? "ja" : "en", `${pageName} should fall back from ${locale}`)
  }
}
console.log(`PASS: ${htmlFiles.length} pages expose OSS licenses; home supports 11 locales and all lower pages support Japanese and English`)
