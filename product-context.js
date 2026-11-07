/* Product-level wayfinding for the private LP draft. */
(() => {
  const path = location.pathname.replace(/\/index\.html$/, '/');
  const isCws = /\/cws\//.test(path);
  const isJapanese = (new URLSearchParams(location.search).get('lang') || navigator.language || 'en').toLowerCase().startsWith('ja');
  const labels = isJapanese ? {
    desktop: 'デスクトップ版', cws: 'CWS版', home: 'トップ', download: '入手', store: 'ストアで入手', guide: '導入ガイド', history: '更新履歴', scope: '対応範囲', privacy: 'プライバシー', licenses: 'OSSライセンス', other: '他の製品'
  } : {
    desktop: 'Desktop edition', cws: 'CWS edition', home: 'Home', download: 'Get it', store: 'Get from store', guide: 'Setup guide', history: 'Change history', scope: 'Supported sites', privacy: 'Privacy', licenses: 'Open-source licenses', other: 'Other products'
  };
  const root = isCws ? (path.includes('/cws/changelog/') || path.includes('/cws/privacy/') ? '../../' : '../') : '../';
  const links = isCws ? [
    [labels.cws, root + 'cws/index.html'], [labels.store, 'https://chromewebstore.google.com/detail/dl-merge-in-cws/bjdjflglecphedijbhpplhnbfplangcg'], [labels.history, root + 'cws/changelog/index.html'], [labels.privacy, root + 'cws/privacy/index.html'], [labels.other, root + 'index.html#products'], [labels.licenses, root + 'licenses/index.html']
  ] : [
    [labels.desktop, root + 'index.html#products'], [labels.download, root + 'download/index.html'], [labels.guide, root + 'guide/index.html'], [labels.history, root + 'changelog/index.html'], [labels.scope, root + 'supported-sites/index.html'], [labels.privacy, root + 'legal/index.html'], [labels.licenses, root + 'licenses/index.html'], [labels.other, root + 'index.html#products']
  ];
  const box = document.createElement('nav'); box.className = 'product-context'; box.setAttribute('aria-label', isJapanese ? '製品の関連ページ' : 'Related product pages');
  const title = document.createElement('strong'); title.textContent = isCws ? labels.cws : labels.desktop; box.append(title);
  const row = document.createElement('div'); row.className = 'product-context-links';
  for (const [label, href] of links) { const a = document.createElement('a'); a.href = href; a.textContent = label; if (new URL(href, location.href).pathname.replace(/\/index\.html$/, '/') === path && !href.includes('#')) a.setAttribute('aria-current', 'page'); row.append(a); }
  box.append(row);
  document.querySelector('main')?.before(box);
})();
