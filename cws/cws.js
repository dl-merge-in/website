const cwsCopy = {
  "ja": {
    "title": "DL-Merge-In CWS",
    "lead": "ブラウザーの中で、見つける・選ぶ・保存する。",
    "intro": "Chrome向けの拡張機能です。ページで検出した動画・音声から候補を選び、ブラウザー内で取得を管理します。Windowsデスクトップ版のインストールは不要です。",
    "status": "公開準備中・未提出",
    "review": "Chrome Web Store 審査中",
    "unavailable": "ストアからのインストールはまだ利用できません。公開後に、このページに公式ストアへのリンクを掲載します。",
    "features": "できること",
    "f1": "ページで見つかったメディア候補をDetectタブで確認。",
    "f2": "利用できる形式・画質の候補を選択して取得。候補はサイトによって異なります。",
    "f3": "ダウンロードマネージャーで進捗を確認し、アイテムごとに保存。",
    "limits": "対応範囲",
    "limitations": "YouTube、DRM保護コンテンツは対象外です。すべてのサイトや形式の取得を保証するものではありません。デスクトップ版のyt-dlp・ローカルサーバー機能、一括フォルダー保存は含みません。",
    "rights": "自身が権利または必要な許可を持つコンテンツだけに使用し、配信元の規約を守ってください。",
    "history": "CWS版のバージョン履歴",
    "empty": "公開済みバージョンはまだありません。初回公開後に、バージョン・公開日・変更内容をここに掲載します。",
    "separate": "デスクトップ版とは別の配布履歴です。デスクトップ版の公開番号をCWSの公開履歴として扱いません。",
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
    "desktop": "デスクトップ版",
    "nav": "CWS版"
  },
  "en": {
    "title": "DL-Merge-In CWS",
    "lead": "Find, choose and save — in your browser.",
    "intro": "A Chrome extension for selecting detected video and audio and managing acquisition in the browser. No Windows Desktop installation is required.",
    "status": "Preparing for submission",
    "review": "Under Chrome Web Store review",
    "unavailable": "Store installation is not available yet. An official store link will appear here after publication.",
    "features": "What it does",
    "f1": "View detected media candidates in the Detect tab.",
    "f2": "Choose from available format and quality options. Availability depends on the site.",
    "f3": "Track progress in the download manager and save items individually.",
    "limits": "Scope and limitations",
    "limitations": "YouTube and DRM-protected content are not supported. Acquisition is not guaranteed for every site or format. Desktop yt-dlp, local-server features and batch folder saving are not included.",
    "rights": "Use only for content you own or have permission to download, and respect the source service’s terms.",
    "history": "CWS version history",
    "empty": "There are no published versions yet. Versions, publication dates and changes will be listed here after the first release.",
    "separate": "This history is separate from Desktop releases. A Desktop release number does not indicate a published CWS version.",
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
    "desktop": "Desktop edition",
    "nav": "CWS edition"
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
