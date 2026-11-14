(() => {
  const en = {
    description: 'Learn how to save files, choose DL-Merge-In settings, and update the Desktop and Chrome Web Store editions.',
    skip: 'Skip to main content',
    brand: 'DL-Merge-In',
    headerNav: 'Related pages',
    home: 'Product site',
    installGuide: 'Installation guide',
    languageNav: 'Help language',
    edition: 'Desktop and Chrome Web Store editions',
    title: 'DL-Merge-In Help',
    lead: 'Learn how to save files, choose settings for the way you work, and update your installed edition.',
    searchLabel: 'Search help',
    searchPlaceholder: 'e.g. quality, speed, update',
    searchButton: 'Search',
    shortcuts: 'Popular topics',
    startShortcut: 'Find and save media',
    startHint: 'Choose an item and check where it is saved',
    settingsShortcut: 'Look up a setting',
    settingsHint: 'See default values and when to change them',
    updatesShortcut: 'Update DL-Merge-In',
    updatesHint: 'Steps for the Desktop and CWS editions',
    toc: 'On this page',
    workflow: 'Using DL-Merge-In',
    recommended: 'Settings for common needs',
    settings: 'Settings reference',
    updates: 'How to update',
    troubleshooting: 'Troubleshooting',
    useStep1: 'Open a page with media you have permission to save. Open the extension’s side panel and check the Detect tab for candidates. If the list is empty, play the media on the page and check again.',
    useStep2: 'Choose the download action on an item. If the quality picker opens, select the quality you want. Available quality and subtitle options depend on the source.',
    useStep3: 'Track progress in Download Manager, then select Save to Disk for a completed item. A file waiting to be saved is still in internal storage.',
    saveBehavior: 'In the Desktop edition, use Save all to folder to save eligible completed files together. In the CWS edition, save one item at a time. For individual saves, check the save dialog or your browser’s download settings for the location.',
    supported: 'Supported sites and differences between editions',
    manager: 'Download Manager',
    managerIntro: 'Select Open Download Manager in the side panel to view queued, active, and completed items.',
    managerQueue: 'Drag queued items to change their order. Use Pause and Resume when those controls are available.',
    managerLive: 'In the Desktop edition, select Stop & Save when it appears on a live download to finish acquisition and prepare the file for saving.',
    managerClear: 'Clear completed removes items already saved to disk from the list. Save any items still waiting to be saved first.',
    recipeChoice: 'Choose quality and file size each time',
    recipeChoiceBody: 'Leave Always select the highest quality off. When there are several options, use the quality picker.',
    qualityLink: 'Quality and codec',
    recipePlayback: 'Play files on other devices or in a video editor',
    recipePlaybackBody: 'For YouTube in the Desktop edition, leave Always select the highest quality off and choose Compatible (H.264 + AAC).',
    codecLink: 'Codec options',
    recipeNetwork: 'Leave bandwidth for other activities',
    recipeNetworkBody: 'Start with the default 5 MB/s and per-site limits. Lower the speed limit if other activity slows down.',
    speedLink: 'Speed limit',
    settingsLead: 'Open the Config tab in the browser side panel. The settings you see depend on your edition.',
    settingsNav: 'Links to settings',
    version: 'Current version and update source',
    versionBody: 'Config shows the installed extension version. If Desktop shows a validation update source or a source error and you want to switch back, select Return to public updates.',
    storage: 'Storage dashboard',
    storageBody: 'If this option appears, it opens a tab that lists internal files outside the download list and shows their sizes. Select Check internal storage to refresh the list. It shows storage for this browser profile and, when available, the Desktop edition’s Windows working files.',
    storageCaution: 'Some files may contain unsaved work. Save anything you need in Download Manager first, then delete individual files you know you no longer need.',
    language: 'Display language',
    languageBody: 'Choose one of 11 languages for the extension, or select Automatic (browser language). On first use, Desktop may use the language selected in Setup. Subtitle language is set separately.',
    subtitleLink: 'Preferred subtitle language',
    filters: 'File filters',
    filtersBody: 'Control which candidates appear by extension. With Enabled on, candidates with a known size must meet Minimum size (KB). Candidates with an unknown size are exempt from that check. Enter 0 KB to leave size unrestricted.',
    filterDefaults: 'Default settings',
    filterExtension: 'Extension',
    filterMinimum: 'Minimum size',
    filterEnabled: 'Enabled',
    on: 'On',
    off: 'Off',
    filtersChange: 'To add a rule, enter an extension such as flv in New extension and select Add. A new rule starts enabled at 0 KB. Turn Enabled off to hide candidates of that type. Select × to remove the rule for that extension.',
    subtitles: 'Subtitles',
    desktopOnly: 'Desktop edition',
    subtitleAuto: 'Download subtitles automatically',
    subtitleAutoBody: 'Off by default. Downloads YouTube subtitles in the preferred language when available.',
    subtitleLanguage: 'Preferred subtitle language',
    subtitleLanguageBody: 'Automatic uses the browser language. Choose a specific language from the list when you want it used for subtitles.',
    subtitleCaveat: 'If subtitles in that language are unavailable, the download may contain only the video. In the current Desktop edition, these settings appear under “Subtitles (PRO feature)”.',
    quality: 'Quality and codec',
    highest: 'Always select the highest quality',
    highestBody: 'Off by default. Turn it on to skip the picker and select the highest available quality for supported items. A manual quality choice takes priority. Leave it off to choose based on file size or device compatibility each time.',
    codec: 'YouTube download codec',
    codecCompatible: 'Compatible (H.264 + AAC)',
    codecCompatibleBody: 'The default. Use it for broad playback and editing compatibility.',
    codecBest: 'Best quality (VP9/AV1 allowed)',
    codecBestBody: 'Allows more quality options. Check whether your player or editor supports VP9 and AV1.',
    codecCaveat: 'This setting is for YouTube downloads. HLS streams are outside its scope. Automatic highest-quality selection may prefer AV1 on some download paths.',
    downloadBehavior: 'Download behavior',
    concurrency: 'Do not limit downloads per source site',
    concurrencyBody: 'Off by default, with up to three active download jobs from the same site. Paused jobs retain a slot. Turning this setting on removes the per-site download limit. Metadata checks still have a limit of three per site.',
    concurrencyTip: 'More jobs from the same site increase demand on your connection and the source. The default is a good starting point.',
    speed: 'Download speed limit',
    speedBody: 'Set the maximum acquisition speed per item in MB/s (megabytes per second). The default is 5 MB/s. Enter a positive whole number or select Unlimited. Several active downloads can use more bandwidth than the per-item limit.',
    speedActive: 'Check the status message when changing the limit during a download. For live, paused, merging, or saving jobs, the change may take effect later. If the new limit could not be applied, check that the Desktop server version supports this setting.',
    blocked: 'Blocked domains',
    blockedBody: 'The list starts empty. In Detect, select Block Domain on an item and confirm to hide candidates from that domain. To show them again, select Unblock for the domain in Config.',
    server: 'Local server and system checks',
    serverBody: 'Check the connection and version of the local server that handles Windows processing. If the system check shows a warning or an action is required, read the item and follow the displayed guidance.',
    serverDisconnected: 'If an update is in progress, wait for it to finish. Otherwise, reopen the side panel and check the connection status. Note any error message if the server remains disconnected.',
    about: 'Product information and open-source licenses',
    aboutBody: 'Find the extension version at the bottom of Config. When the Desktop edition is connected to its server, it also lists the yt-dlp, FFmpeg, and Deno versions. Open Open-source licenses to read bundled notices offline.',
    licenses: 'Open-source licenses on the website',
    updateEdition: 'If you installed from Setup.exe on Windows, follow the Desktop steps. If you added DL Merge-In CWS from the Chrome Web Store, follow the CWS steps.',
    desktopUpdate: 'Update the Desktop edition in the app',
    desktopUpdateIntro: 'The extension checks for official releases, including when the browser starts. When a new release is available, select Update at the top of the side panel to start the signed update.',
    desktopUpdateStep1: 'Select Update once at the top of the side panel. The app shows progress as it downloads and verifies the update.',
    desktopUpdateStep2: 'If the update is waiting, finish any active downloads, merges, or saves. If it is waiting for a file name edit, save or cancel the edit.',
    desktopUpdateStep3: 'Wait for the update to apply and the app to restart. If the side panel closes, reopen it. Look for Update complete and check the version shown in Config.',
    desktopUpdateTools: 'DL-Merge-In manages the bundled versions of yt-dlp, FFmpeg, and Deno. Check the versions in use at the bottom of Config.',
    desktopHistory: 'Desktop change history',
    reload: 'Reload the extension when prompted',
    reloadStep1: 'Paste the address for your browser into its address bar.',
    reloadStep2: 'On the DL-Merge-In card, select the circular Reload arrow. If prompted for permissions, review them and enable the extension.',
    reloadStep3: 'Reopen the side panel and check that the update is complete. If you use both browsers, do this in the browser that shows the reload prompt.',
    updateTrouble: 'Update is missing or fails',
    updateAbsent: 'If Update does not appear, compare the installed version in Config with the change history. If a newer version is listed, check your internet and local-server connections, then reopen your browser.',
    updateRetry: 'Use Retry when the app offers it. If the app says it is restoring the previous version, let that process finish.',
    updateRecovery: 'If “Automatic recovery failed” persists, keep the extension and app installed, note the message, and report the issue.',
    updateOld: 'To move from an early release without in-app updates, use Setup.exe from the official download page and follow the installation guide. Verify its SHA-256 against the download page before running it.',
    officialDownload: 'Official download',
    cwsUpdate: 'Update the CWS edition',
    cwsUpdateBody: 'Chrome updates the extension automatically from the Chrome Web Store. Finish downloads and saves, then close the side panel and Download Manager so Chrome can apply the update.',
    cwsAddressIntro: 'Enter',
    cwsAddressAfter: 'in the address bar and open Details for DL Merge-In CWS to check its version.',
    cwsManual: 'To check manually, enable Developer mode on that page and select Update. Chrome checks all installed store extensions.',
    cwsHistory: 'CWS change history',
    cwsStore: 'Chrome Web Store listing',
    missing: 'Media does not appear in Detect',
    missingBody: 'Play the media and check the Detect tab again. Check whether its file type is disabled, its minimum size is too high, or its domain is blocked. Support varies by source and delivery format. DRM-protected media is outside the supported scope.',
    saveTrouble: 'The download finished but the file is missing',
    saveTroubleBody: 'Check the item in Download Manager. If it is waiting to be saved, select Save to Disk and check the location in the dialog. If there is no dialog, check the browser’s download history or default download folder.',
    report: 'Report a problem',
    reportBody: 'Include the product edition, app version, browser, steps to reproduce, and error message. Keep personal information, private URLs, cookies, and access tokens out of public reports.',
    issueLink: 'Open the GitHub issue tracker',
    footerLicenses: 'Open-source licenses'
  };

  const params = new URLSearchParams(location.search);
  const preferred = params.get('lang') || navigator.languages?.[0] || navigator.language || 'en';
  const language = /^ja(?:[-_]|$)/i.test(preferred.trim()) ? 'ja' : 'en';
  document.documentElement.lang = language;
  if (language === 'en') {
    document.title = en.title;
    for (const node of document.querySelectorAll('[data-help]')) node.textContent = en[node.dataset.help];
    for (const node of document.querySelectorAll('[data-help-aria]')) node.setAttribute('aria-label', en[node.dataset.helpAria]);
    for (const node of document.querySelectorAll('[data-help-content]')) node.content = en[node.dataset.helpContent];
    for (const node of document.querySelectorAll('[data-help-placeholder]')) node.placeholder = en[node.dataset.helpPlaceholder];
  }

  const languageLinks = document.querySelectorAll('[data-language]');
  function syncLanguageLinks() {
    for (const link of languageLinks) {
      link.href = '?lang=' + link.dataset.language + location.hash;
      if (link.dataset.language === language) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    }
  }
  syncLanguageLinks();
  window.addEventListener('hashchange', syncLanguageLinks);

  for (const link of document.querySelectorAll('a[href^="../"]')) {
    const url = new URL(link.getAttribute('href'), location.href);
    url.searchParams.set('lang', language);
    link.href = url.href;
  }
  for (const section of document.querySelectorAll('.help-content section[id], .help-content article[id]')) section.tabIndex = -1;

  const form = document.querySelector('[data-help-search]');
  const query = form.querySelector('input');
  const panel = document.getElementById('search-results');
  const status = panel.querySelector('[data-help-search-status]');
  const links = panel.querySelector('[data-help-search-links]');
  const resultCount = language === 'ja'
    ? (count) => count ? count + '件の案内が見つかりました。' : '一致する案内がありません。別の設定名やキーワードで検索してください。'
    : (count) => count ? count + (count === 1 ? ' topic found.' : ' topics found.') : 'No matching topics. Try another setting name or keyword.';
  const normalize = (value) => value.normalize('NFKC').toLowerCase().trim();
  const topics = Array.from(document.querySelectorAll('[data-topic]'), (topic) => {
    const headings = Array.from(topic.querySelectorAll('h2, h3, h4'), (node) => node.textContent);
    return {
      id: topic.id,
      title: headings[0],
      headings: normalize(headings.join(' ')),
      keywords: normalize(topic.dataset.keywords),
      text: normalize(topic.textContent)
    };
  });

  form.hidden = false;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const terms = normalize(query.value).split(/\s+/).filter(Boolean);
    const matches = terms.length ? topics.map((topic) => {
      const weights = terms.map((term) => topic.headings.includes(term) ? 3 : topic.keywords.includes(term) ? 2 : topic.text.includes(term) ? 1 : 0);
      return { topic, score: weights.every(Boolean) ? weights.reduce((sum, weight) => sum + weight, 0) : 0 };
    }).filter(({ score }) => score > 0).sort((left, right) => right.score - left.score) : [];

    links.replaceChildren();
    panel.hidden = terms.length === 0;
    if (panel.hidden) return;
    status.textContent = resultCount(matches.length);
    for (const { topic } of matches) {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = '#' + topic.id;
      link.textContent = topic.title;
      item.append(link);
      links.append(item);
    }
  });
  query.addEventListener('input', () => {
    panel.hidden = true;
  });
})();
