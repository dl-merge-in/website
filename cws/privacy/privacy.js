const cwsCopy = {
  "ja": {
    "privacy": "CWS版のプライバシー",
    "draft": "この説明はChrome拡張機能 DL Merge-In CWS に適用されます。",
    "data": "取得元ページのURL、メディアURL、タイトル、形式情報を、検出・取得・元ページへの移動に使用します。設定とジョブ情報、取得途中および未保存のデータはブラウザー内のストレージに保持されます。",
    "access": "ニコニコ動画の配信候補を検出するとき、視聴ページから視聴用アクセスキーと動画IDを読み取り、利用可能な映像・音声のID、および配信元が提供する場合は視聴識別子とともに、ニコニコ動画のAPI（nvapi.nicovideo.jp）へ送ります。配信元が許可するHLS配信URLを取得するためです。ブラウザーの設定に応じて、同サービスのCookieがこのリクエストに付く場合があります。",
    "playback": "取得できたプレイヤーの再生・一時停止・終了状態を、ブラウザー内で検出候補に対応付け、再生中の表示や並び順に使います。タブを閉じるかページを移動すると、バックグラウンドのタブ別検出一覧は消去されます。",
    "network": "メディア取得時は配信元やCDNへ接続します。配信元にはIPアドレスや取得リクエスト等が伝わります。外部リンクを開いた場合は、そのサイトのプライバシーポリシーが適用されます。",
    "retention": "不要なジョブはマネージャーから削除できます。拡張機能を削除するとブラウザー内のデータを失う場合があります。保存済みファイルは保存先で利用者が管理します。",
    "pending": "CWS版の通常の取得には開発者アカウントやライセンス認証は不要です。お問い合わせをメールで送信すると、送信元アドレスと記載内容が開発者に届き、対応に使用されます。",
    "contact": "お問い合わせ",
    "home": "トップへ",
    "desktop": "デスクトップ版"
  },
  "en": {
    "privacy": "CWS privacy",
    "draft": "This policy applies to the DL Merge-In CWS Chrome extension.",
    "data": "Source-page and media URLs, titles and format information are used for detection, acquisition and source-page navigation. Settings, job information, partial acquisitions and unsaved data are kept in browser storage.",
    "access": "When detecting available streams on Niconico, the extension reads the viewing access key and video ID from the watch page. It sends them, the available video and audio IDs, and a viewing identifier when provided, to the Niconico API at nvapi.nicovideo.jp to obtain an authorized HLS stream URL. Depending on browser settings, the browser may include applicable Niconico cookies in this request.",
    "playback": "When player state is available, the extension associates play, pause and end states with detected items in the browser to display playback indicators and order the list. Navigating away or closing the tab clears its detection list from background memory.",
    "network": "Acquisition connects to the content provider or CDN, which receives request information such as your IP address. Opening an external link is subject to that website’s privacy policy.",
    "retention": "You can delete unwanted jobs in the manager. Removing the extension may remove its browser-stored data. You manage exported files at their saved location.",
    "pending": "Normal media acquisition does not require a developer account or a license check. If you contact support by email, the developer receives your email address and message and uses them to respond.",
    "contact": "Contact",
    "home": "Home",
    "desktop": "Desktop edition"
  }
};
const language = (new URLSearchParams(location.search).get('lang') || navigator.language || 'en').toLowerCase().split('-')[0] === 'ja' ? 'ja' : 'en';
const t = cwsCopy[language]; document.documentElement.lang = language;
for (const element of document.querySelectorAll('[data-cws]')) element.textContent = t[element.dataset.cws];
// Change only after confirmed submission and explicit publication approval.
const submissionState = 'preparing';
for (const el of document.querySelectorAll('[data-status]')) el.textContent = t[submissionState === 'in_review' ? 'review' : 'status'];
for (const a of document.querySelectorAll('a[href]')) { const u=new URL(a.href); if(u.origin===location.origin && !a.hasAttribute('data-language')) {u.searchParams.set('lang',language);a.href=u.href;} }
document.title = t[document.body.dataset.title] + ' | DL-Merge-In';
