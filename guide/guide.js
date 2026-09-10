/* Public guide: no local filesystem probing, server polling or completion claims. */
(() => {
  const keys = ['title','download','install','extension','first','setup','open','enable','load','folder','check','folderQuestion','copyError'];
  const rows = {
    ja: ['インストールガイド','ダウンロード','インストール','拡張機能を読み込む','使い始める','画面の案内に沿ってインストールし、使用するブラウザを選びます。完了後に開くセットアップガイドは閉じずに残してください。','下のアドレスをブラウザのアドレスバーに貼り付け、Enterキーを押します。','拡張機能の管理画面で、次のスイッチをオンにします。','次の項目を選び、インストール先の extension フォルダを読み込みます。','フォルダの場所は、インストール後に開いたセットアップガイドで確認できます。そのパスをフォルダ選択画面に貼り付けてください。このWebページではPC内の場所を取得しません。','拡張機能の一覧にDL-Merge-Inが表示され、有効になっていることを確認します。ブラウザのツールバーから拡張機能を開いてください。','読み込むフォルダがわからない','コピーできませんでした。アドレスを選択して手動でコピーしてください。'],
    en: ['Installation guide','Download','Install','Load the extension','Start using it','Follow the installer and choose your browser. Keep the setup guide that opens after installation available for the next step.','Paste the address below into your browser’s address bar and press Enter.','On the extensions page, turn on the following switch.','Choose the option below, then select the extension folder in your installation directory.','The setup guide opened by the installer shows the folder path. Paste that path into the folder picker. This website does not access folders on your PC.','Check that DL-Merge-In appears in your extensions list and is enabled. Open it from your browser’s toolbar.','Which folder should I select?','Could not copy. Select the address and copy it manually.'],
    es: ['Guía de instalación','Descargar','Instalar','Cargar la extensión','Empezar a usarla','Sigue las indicaciones del instalador y elige tu navegador. Mantén abierta la guía que aparece al terminar; la necesitarás en el siguiente paso.','Pega esta dirección en la barra de direcciones del navegador y pulsa Intro.','En la página de extensiones, activa el siguiente interruptor.','Selecciona la opción siguiente y elige la carpeta extension del directorio de instalación.','La guía que abre el instalador muestra la ruta de la carpeta. Pégala en el selector de carpetas. Esta web no accede a las carpetas de tu PC.','Comprueba que DL-Merge-In aparece en la lista de extensiones y está activada. Ábrela desde la barra de herramientas del navegador.','¿Qué carpeta debo seleccionar?','No se pudo copiar. Selecciona la dirección y cópiala manualmente.'],
    'pt-BR': ['Guia de instalação','Baixar','Instalar','Carregar a extensão','Começar a usar','Siga as instruções do instalador e escolha seu navegador. Mantenha aberto o guia exibido ao concluir a instalação para a próxima etapa.','Cole o endereço abaixo na barra de endereços do navegador e pressione Enter.','Na página de extensões, ative a opção a seguir.','Selecione a opção abaixo e escolha a pasta extension no diretório de instalação.','O guia aberto pelo instalador mostra o caminho da pasta. Cole esse caminho no seletor de pastas. Este site não acessa pastas do seu PC.','Confira se DL-Merge-In aparece na lista de extensões e está ativada. Abra a extensão pela barra de ferramentas do navegador.','Qual pasta devo selecionar?','Não foi possível copiar. Selecione o endereço e copie manualmente.'],
    de: ['Installationsanleitung','Herunterladen','Installieren','Erweiterung laden','Loslegen','Folgen Sie dem Installationsprogramm und wählen Sie Ihren Browser. Lassen Sie die anschließend geöffnete Einrichtungsanleitung für den nächsten Schritt offen.','Fügen Sie die folgende Adresse in die Adressleiste Ihres Browsers ein und drücken Sie die Eingabetaste.','Aktivieren Sie auf der Erweiterungsseite den folgenden Schalter.','Wählen Sie die folgende Option und anschließend den Ordner extension im Installationsverzeichnis.','Die vom Installationsprogramm geöffnete Anleitung zeigt den Ordnerpfad an. Fügen Sie ihn in die Ordnerauswahl ein. Diese Website greift nicht auf Ordner Ihres PCs zu.','Prüfen Sie, ob DL-Merge-In in der Erweiterungsliste angezeigt wird und aktiviert ist. Öffnen Sie die Erweiterung über die Symbolleiste Ihres Browsers.','Welchen Ordner soll ich auswählen?','Kopieren nicht möglich. Markieren und kopieren Sie die Adresse manuell.'],
    fr: ['Guide d’installation','Télécharger','Installer','Charger l’extension','Commencer','Suivez les instructions du programme d’installation et choisissez votre navigateur. Gardez ouvert le guide qui s’affiche à la fin : il vous servira à l’étape suivante.','Collez l’adresse ci-dessous dans la barre d’adresse du navigateur, puis appuyez sur Entrée.','Sur la page des extensions, activez l’option suivante.','Choisissez l’option ci-dessous, puis sélectionnez le dossier extension dans le répertoire d’installation.','Le guide ouvert par le programme d’installation indique le chemin du dossier. Collez-le dans la fenêtre de sélection de dossier. Ce site n’accède pas aux dossiers de votre PC.','Vérifiez que DL-Merge-In figure dans la liste des extensions et est activée. Ouvrez-la depuis la barre d’outils du navigateur.','Quel dossier dois-je sélectionner ?','La copie a échoué. Sélectionnez l’adresse et copiez-la manuellement.'],
    it: ['Guida all’installazione','Scarica','Installa','Carica l’estensione','Inizia a usarla','Segui le istruzioni del programma di installazione e scegli il browser. Lascia aperta la guida visualizzata al termine: servirà per il passaggio successivo.','Incolla l’indirizzo qui sotto nella barra degli indirizzi del browser e premi Invio.','Nella pagina delle estensioni, attiva l’interruttore seguente.','Scegli l’opzione qui sotto, quindi seleziona la cartella extension nella directory di installazione.','La guida aperta dal programma di installazione mostra il percorso della cartella. Incollalo nella finestra di selezione della cartella. Questo sito non accede alle cartelle del PC.','Verifica che DL-Merge-In sia presente nell’elenco delle estensioni e sia attiva. Aprila dalla barra degli strumenti del browser.','Quale cartella devo selezionare?','Copia non riuscita. Seleziona l’indirizzo e copialo manualmente.'],
    id: ['Panduan instalasi','Unduh','Instal','Muat ekstensi','Mulai gunakan','Ikuti petunjuk penginstal dan pilih browser Anda. Biarkan panduan yang terbuka setelah instalasi tetap terbuka untuk langkah berikutnya.','Tempel alamat berikut ke kolom alamat browser, lalu tekan Enter.','Di halaman ekstensi, aktifkan sakelar berikut.','Pilih opsi berikut, lalu pilih folder extension di direktori instalasi.','Panduan yang dibuka oleh penginstal menampilkan lokasi folder. Tempel lokasi tersebut di dialog pemilihan folder. Situs ini tidak mengakses folder di PC Anda.','Pastikan DL-Merge-In muncul di daftar ekstensi dan sudah diaktifkan. Buka ekstensi melalui toolbar browser.','Folder mana yang harus dipilih?','Tidak dapat menyalin. Pilih alamat lalu salin secara manual.'],
    ko: ['설치 가이드','다운로드','설치','확장 프로그램 로드','사용 시작','설치 프로그램의 안내에 따라 사용할 브라우저를 선택하세요. 설치 후 열리는 가이드는 다음 단계에서 필요하므로 닫지 마세요.','아래 주소를 브라우저 주소창에 붙여 넣고 Enter 키를 누르세요.','확장 프로그램 관리 페이지에서 다음 스위치를 켜세요.','아래 항목을 선택한 뒤 설치 경로의 extension 폴더를 선택하세요.','설치 프로그램이 연 가이드에서 폴더 경로를 확인하고 폴더 선택 창에 붙여 넣으세요. 이 웹사이트는 PC의 폴더에 접근하지 않습니다.','확장 프로그램 목록에 DL-Merge-In이 표시되고 활성화되어 있는지 확인하세요. 브라우저 도구 모음에서 확장 프로그램을 여세요.','어떤 폴더를 선택해야 하나요?','복사하지 못했습니다. 주소를 선택해 직접 복사하세요.'],
    'zh-CN': ['安装指南','下载','安装','加载扩展程序','开始使用','按照安装程序的提示选择要使用的浏览器。安装完成后打开的指南将在下一步用到，请不要关闭。','将以下地址粘贴到浏览器地址栏，然后按 Enter 键。','在扩展程序管理页面，打开以下开关。','选择以下选项，然后选择安装目录中的 extension 文件夹。','安装程序打开的指南会显示文件夹路径。请将路径粘贴到文件夹选择窗口。本网站不会访问您电脑中的文件夹。','确认扩展程序列表中显示 DL-Merge-In 且已启用，然后从浏览器工具栏打开扩展程序。','应该选择哪个文件夹？','无法复制。请选中地址并手动复制。'],
    'zh-TW': ['安裝指南','下載','安裝','載入擴充功能','開始使用','依照安裝程式的指示選擇要使用的瀏覽器。安裝完成後開啟的指南會在下一步用到，請先不要關閉。','將下方網址貼到瀏覽器網址列，然後按 Enter 鍵。','在擴充功能管理頁面，開啟下列開關。','選擇下列選項，再選取安裝目錄中的 extension 資料夾。','安裝程式開啟的指南會顯示資料夾路徑。請將路徑貼到資料夾選取視窗。本網站不會存取您電腦中的資料夾。','確認擴充功能清單中顯示 DL-Merge-In 且已啟用，再從瀏覽器工具列開啟擴充功能。','應該選擇哪個資料夾？','無法複製。請選取網址並手動複製。']
  };
  const base = {
    ja: {videoTitle:'動画でセットアップ手順を見る',videoLead:'Chrome / Edgeで拡張機能を手動で読み込む手順を、日本語の動画で確認できます。',addrCopyLabel:'コピー',copiedLabel:'コピー済み',devModeLabel:'デベロッパーモード',edgeDevMode:'開発者モード',loadBtnDemo:'パッケージ化されていない拡張機能を読み込む',edgeUnpackAria:'展開して読み込む'},
    en: {videoTitle:'Watch the setup steps',videoLead:'This Japanese-language video shows how to load the extension in Chrome or Edge. You can also follow the written steps below.',addrCopyLabel:'Copy',copiedLabel:'Copied',devModeLabel:'Developer mode',edgeDevMode:'Developer mode',loadBtnDemo:'Load unpacked',edgeUnpackAria:'Load unpacked'},
    ...window.DLMERGEIN_GUIDE_TRANSLATIONS
  };
  function init() {
    const locale = window.DLMERGEIN_LOCALE || 'en';
    const t = Object.fromEntries(keys.map((key, i) => [key, (rows[locale] || rows.en)[i]]));
    const old = base[locale] || base.en;
    document.querySelectorAll('[data-guide]').forEach(el => { el.textContent = t[el.dataset.guide]; });
    document.querySelectorAll('[data-guide-aria]').forEach(el => { el.setAttribute('aria-label', t[el.dataset.guideAria]); });
    document.querySelectorAll('[data-old]').forEach(el => { el.textContent = old[el.dataset.old]; });
    document.title = `${t.title} | ${locale === 'ja' ? 'DL名人' : 'DL-Merge-In'}`;
    // Keep the selected language when moving between the guide and the LP.
    document.querySelectorAll('a[href]').forEach(el => {
      const raw = el.getAttribute('href');
      if (raw.startsWith('#')) return;
      const url = new URL(raw, location.href);
      if (url.origin === location.origin && !url.pathname.endsWith('.mp4')) { url.searchParams.set('lang', locale); el.href = url.href; }
    });
    function chooseBrowser(browser) {
      document.querySelectorAll('[data-browser]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.browser === browser)));
      document.getElementById('extension-url').textContent = `${browser}://extensions`;
      document.getElementById('developer-label').textContent = browser === 'edge' ? old.edgeDevMode : old.devModeLabel;
      document.getElementById('unpack-label').textContent = browser === 'edge' ? old.edgeUnpackAria : old.loadBtnDemo;
      document.getElementById('copy-status').textContent = '';
    }
    document.querySelectorAll('[data-browser]').forEach(el => el.addEventListener('click', () => chooseBrowser(el.dataset.browser)));
    chooseBrowser(/Edg\//.test(navigator.userAgent) ? 'edge' : 'chrome');
    document.getElementById('copy-url').addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(document.getElementById('extension-url').textContent);
        document.getElementById('copy-status').textContent = old.copiedLabel;
      } catch { document.getElementById('copy-status').textContent = t.copyError; }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();
})();
