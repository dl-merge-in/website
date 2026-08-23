/* DL-Merge-In public site locale helper.  No visitor data is stored or sent. */
(() => {
  const supported = ["en", "ja", "es", "pt-BR", "de", "fr", "it", "id", "ko", "zh-CN", "zh-TW"];
  const normalizeLocale = (value) => {
    const locale = String(value || "").trim().replaceAll("_", "-").toLowerCase();
    if (locale.startsWith("zh")) return /(^zh-(tw|hk|mo|hant)$)|(^zh-hant)/.test(locale) ? "zh-TW" : "zh-CN";
    const language = locale.split("-")[0];
    return ({ en: "en", ja: "ja", es: "es", pt: "pt-BR", de: "de", fr: "fr", it: "it", id: "id", ko: "ko" })[language] || "en";
  };

  const localeFromBrowser = () => {
    const requested = new URLSearchParams(location.search).get("lang");
    if (requested) return normalizeLocale(requested);
    const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
    return languages.map(normalizeLocale).find((locale) => supported.includes(locale)) || "en";
  };

  const requestedLocale = new URLSearchParams(location.search).get("lang");

  const copy = {
    en: {
      brand: "DL-Merge-In", home: "Home", navFeatures: "Features", navSupport: "Supported services", navStart: "Get started", navFaq: "FAQ", startFree: "Get it free",
      heroTitle: "Open a page. Choose.<br><em>Save it right there.</em>", heroText: "Open a page as usual. DL-Merge-In lists available video and audio in its side panel, so you can choose what you want and save it without leaving your browser.", downloadDesktop: "Download for Windows", viewStart: "See how to start", browserNote: "Windows · Chrome supported · Edge available during setup",
      quickTitle: "Start in three steps.", quickLead: "After installation, load the extension in your browser once by following the guide. Then it fits naturally into your normal browsing.",
      featuresTitle: "Open a page and find what you can save.", featuresLead: "No copying links into another app. Choose the video or audio you want from the options that appear.", detectTitle: "Open the page and<br>detect available media.", detectBody: "When a page has video or audio, available items appear in the side panel. DL-Merge-In looks broadly for media that can be saved.", qualityTitle: "Choose the quality and format<br>that suit you.", qualityBody: "Check the quality and file type before you save.", queueTitle: "Download multiple files<br>at the same time", queueBody: "Keep multiple downloads organized in a queue, with pinning, speed limits, pause, and resume controls.",
      galleryTitle: "Automatically detect media on the page you are browsing", workflowTitle: "A save option in your everyday browser.", casesTitle: "For the moments you want to keep.", ctaTitle: "More freedom to save<br><em>from your browser.</em>", ctaBody: "The current Windows desktop edition is free, unlimited, and fully featured.", faqTitle: "Frequently asked questions", legal: "Terms, disclaimer and privacy", footerDmr: "DRM-protected content is not supported. Save and use content only in accordance with applicable terms and laws.",
      downloadTitle: "Download the<br><em>installer.</em>", downloadLead: "Windows desktop edition", verifyTitle: "Verify the file", unsignedTitle: "About this unsigned release", installFlowTitle: "After installation", useNoticeTitle: "Important use notice", back: "Back to the introduction",
      supportTitle: "Service examples<br><em>and important notes</em>", supportLead: "The desktop edition and the Chrome Web Store edition have different coverage. Availability can change with page design, delivery methods, region, and third-party services.", legalTitle: "Terms, disclaimer and<br><em>privacy</em>", updated: "Last updated: July 26, 2026", termsTitle: "Terms of use", disclaimerTitle: "Disclaimer", privacyTitle: "Privacy", contactTitle: "Contact"
    },
    ja: {
      brand: "DL名人", home: "DL名人 ホーム", navFeatures: "できること", navSupport: "対応範囲", navStart: "はじめ方", navFaq: "よくある質問", startFree: "無料で始める",
      heroTitle: "ページを開く。選ぶ。<br><em>そのまま保存。</em>", heroText: "ブラウジング中のページを開くだけで、保存できる動画や音声をサイドパネルに一覧表示。好きな候補を選び、保存までブラウザから進められます。", downloadDesktop: "Windows デスクトップ版をダウンロード", viewStart: "はじめ方を見る", browserNote: "Windows / Chrome 標準対応　·　インストール時の選択で Edge にも対応",
      quickTitle: "3ステップで始める。", quickLead: "インストール後にブラウザで拡張機能を一度だけ手動で読み込みます。準備ができれば、いつものブラウジングの流れで使えます。",
      featuresTitle: "ページを開けば、<br>保存できるものが見つかる。", featuresLead: "リンクを探して別のアプリへ貼り付ける必要はありません。表示された候補から、保存したい動画や音声を選ぶだけです。", detectTitle: "ページを開くだけで、<br>保存できるものを自動検出。", detectBody: "動画や音声があるページを開くと、保存できる候補をサイドパネルに一覧表示。幅広いページから自動で探します。", qualityTitle: "好きな画質と形式を、<br>選んで保存。", qualityBody: "保存する前に、画質とファイルの種類を選べます。", queueTitle: "複数ファイルの<br>同時ダウンロード", queueBody: "複数の保存はキューで整理。ピン留め、速度制限、一時停止・再開まで、まとめて管理できます。",
      galleryTitle: "ブラウジング中のページから自動検出", workflowTitle: "いつものブラウジングに、<br>保存の選択肢を。", casesTitle: "こんなときに、DL名人。", ctaTitle: "あなたのブラウジングに、<br><em>保存する自由を。</em>", ctaBody: "現行デスクトップ版は、無料・無制限・フル機能でお使いいただけます。", faqTitle: "よくある質問", legal: "利用条件・免責・プライバシー", footerDmr: "DRM保護コンテンツは対象外です。コンテンツの保存・利用は、各サービスの規約および適用される法令に従ってください。",
      downloadTitle: "インストーラーの<br><em>ダウンロード。</em>", downloadLead: "Windows デスクトップ版", verifyTitle: "ファイルを確認する", unsignedTitle: "未署名の配布について", installFlowTitle: "インストール後の流れ", useNoticeTitle: "利用上の注意", back: "紹介ページへ戻る",
      supportTitle: "対応サービスの<br><em>例と注意事項</em>", supportLead: "デスクトップ版とChromeウェブストア版（CWS版）では、対応範囲が異なります。対応状況はページ構成、配信方式、地域、外部サービス側の変更によっても変わります。", legalTitle: "利用条件・免責・<br><em>プライバシー</em>", updated: "最終更新日：2026年7月26日", termsTitle: "利用条件", disclaimerTitle: "免責事項", privacyTitle: "プライバシー", contactTitle: "連絡先"
    },
    es: { brand: "DL-Merge-In", home: "Inicio", navFeatures: "Funciones", navSupport: "Servicios compatibles", navStart: "Primeros pasos", navFaq: "Preguntas frecuentes", startFree: "Descargar gratis", heroTitle: "Abre una página. Elige.<br><em>Guárdalo al instante.</em>", heroText: "Navega con normalidad. DL-Merge-In muestra en el panel lateral los vídeos y audios disponibles para que elijas qué guardar sin salir del navegador.", downloadDesktop: "Descargar para Windows", viewStart: "Ver cómo empezar", browserNote: "Windows · Compatible con Chrome · Edge disponible durante la instalación", quickTitle: "Empieza en tres pasos.", quickLead: "Tras instalarlo, carga la extensión una vez en el navegador siguiendo la guía. Después se integra en tu navegación habitual.", featuresTitle: "Abre una página y descubre qué puedes guardar.", featuresLead: "No hace falta copiar enlaces a otra aplicación. Elige el vídeo o audio que quieras entre las opciones disponibles.", detectTitle: "Abre la página y detecta<br>el contenido disponible.", detectBody: "Cuando una página contiene vídeo o audio, los elementos disponibles aparecen en el panel lateral.", qualityTitle: "Elige la calidad y el formato<br>que prefieras.", qualityBody: "Revisa la calidad y el tipo de archivo antes de guardar.", queueTitle: "Descarga varios archivos<br>al mismo tiempo", queueBody: "Organiza varias descargas en una cola, con pausa, reanudación y límites de velocidad.", galleryTitle: "Detección automática mientras navegas", workflowTitle: "Una opción para guardar en tu navegador.", casesTitle: "Para cuando quieras conservar algo.", ctaTitle: "Más libertad para guardar<br><em>desde el navegador.</em>", ctaBody: "La edición actual para Windows es gratuita, sin límites y con todas las funciones.", faqTitle: "Preguntas frecuentes", legal: "Términos, descargo de responsabilidad y privacidad", footerDmr: "El contenido protegido por DRM no es compatible. Usa y guarda contenido de acuerdo con los términos y las leyes aplicables.", downloadTitle: "Descarga el<br><em>instalador.</em>", downloadLead: "Edición de escritorio para Windows", verifyTitle: "Verifica el archivo", unsignedTitle: "Acerca de esta versión sin firma", installFlowTitle: "Después de instalar", useNoticeTitle: "Aviso de uso importante", back: "Volver a la presentación", supportTitle: "Ejemplos de servicios<br><em>y notas importantes</em>", supportLead: "La edición de escritorio y la edición de Chrome Web Store tienen coberturas distintas. La disponibilidad puede cambiar.", legalTitle: "Términos, descargo de responsabilidad<br><em>y privacidad</em>", updated: "Última actualización: 26 de julio de 2026", termsTitle: "Términos de uso", disclaimerTitle: "Descargo de responsabilidad", privacyTitle: "Privacidad", contactTitle: "Contacto" },
    "pt-BR": { brand: "DL-Merge-In", home: "Início", navFeatures: "Recursos", navSupport: "Serviços compatíveis", navStart: "Como começar", navFaq: "Perguntas frequentes", startFree: "Baixar grátis", heroTitle: "Abra uma página. Escolha.<br><em>Salve ali mesmo.</em>", heroText: "Navegue como de costume. O DL-Merge-In mostra vídeos e áudios disponíveis no painel lateral para você escolher e salvar sem sair do navegador.", downloadDesktop: "Baixar para Windows", viewStart: "Ver como começar", browserNote: "Windows · Chrome compatível · Edge disponível na instalação", quickTitle: "Comece em três passos.", quickLead: "Após instalar, carregue a extensão uma vez no navegador seguindo o guia. Depois, ela acompanha sua navegação normal.", featuresTitle: "Abra uma página e veja o que pode salvar.", featuresLead: "Não é preciso copiar links para outro app. Basta escolher o vídeo ou áudio entre as opções exibidas.", detectTitle: "Abra a página e detecte<br>a mídia disponível.", detectBody: "Quando houver vídeo ou áudio, os itens disponíveis aparecerão no painel lateral.", qualityTitle: "Escolha qualidade e formato<br>do seu jeito.", qualityBody: "Confira a qualidade e o tipo de arquivo antes de salvar.", queueTitle: "Baixe vários arquivos<br>ao mesmo tempo", queueBody: "Organize vários downloads em uma fila, com pausa, retomada e limite de velocidade.", galleryTitle: "Detecção automática enquanto você navega", workflowTitle: "Uma opção para salvar no seu navegador.", casesTitle: "Para os momentos que você quer guardar.", ctaTitle: "Mais liberdade para salvar<br><em>direto do navegador.</em>", ctaBody: "A edição atual para Windows é gratuita, sem limites e com todos os recursos.", faqTitle: "Perguntas frequentes", legal: "Termos, aviso legal e privacidade", footerDmr: "Conteúdo protegido por DRM não é compatível. Salve e use conteúdo conforme os termos e leis aplicáveis.", downloadTitle: "Baixe o<br><em>instalador.</em>", downloadLead: "Edição desktop para Windows", verifyTitle: "Verifique o arquivo", unsignedTitle: "Sobre esta versão sem assinatura", installFlowTitle: "Depois da instalação", useNoticeTitle: "Aviso importante de uso", back: "Voltar à apresentação", supportTitle: "Exemplos de serviços<br><em>e observações importantes</em>", supportLead: "As edições desktop e Chrome Web Store têm coberturas diferentes. A disponibilidade pode mudar.", legalTitle: "Termos, aviso legal<br><em>e privacidade</em>", updated: "Última atualização: 26 de julho de 2026", termsTitle: "Termos de uso", disclaimerTitle: "Aviso legal", privacyTitle: "Privacidade", contactTitle: "Contato" },
    de: { brand: "DL-Merge-In", home: "Startseite", navFeatures: "Funktionen", navSupport: "Unterstützte Dienste", navStart: "Erste Schritte", navFaq: "FAQ", startFree: "Kostenlos starten", heroTitle: "Seite öffnen. Auswählen.<br><em>Direkt speichern.</em>", heroText: "Surfen Sie wie gewohnt. DL-Merge-In zeigt verfügbare Videos und Audios in der Seitenleiste, damit Sie auswählen und direkt im Browser speichern können.", downloadDesktop: "Für Windows herunterladen", viewStart: "Erste Schritte ansehen", browserNote: "Windows · Chrome unterstützt · Edge bei der Einrichtung verfügbar", quickTitle: "In drei Schritten starten.", quickLead: "Laden Sie die Erweiterung nach der Installation einmal gemäß Anleitung im Browser. Danach fügt sie sich in Ihren gewohnten Ablauf ein.", featuresTitle: "Seite öffnen und Speichermöglichkeiten finden.", featuresLead: "Keine Links in eine andere App kopieren. Wählen Sie Video oder Audio einfach aus den angezeigten Optionen.", detectTitle: "Seite öffnen und verfügbare<br>Medien automatisch erkennen.", detectBody: "Bei Video oder Audio auf einer Seite erscheinen verfügbare Elemente in der Seitenleiste.", qualityTitle: "Qualität und Format<br>passend auswählen.", qualityBody: "Prüfen Sie Qualität und Dateityp vor dem Speichern.", queueTitle: "Mehrere Dateien<br>gleichzeitig herunterladen", queueBody: "Verwalten Sie mehrere Downloads in einer Warteschlange – mit Pausen, Fortsetzen und Geschwindigkeitslimit.", galleryTitle: "Automatische Erkennung beim Surfen", workflowTitle: "Eine Speicheroption in Ihrem Browser.", casesTitle: "Für Inhalte, die Sie behalten möchten.", ctaTitle: "Mehr Freiheit zum Speichern<br><em>direkt im Browser.</em>", ctaBody: "Die aktuelle Windows-Desktopversion ist kostenlos, unbegrenzt und vollständig nutzbar.", faqTitle: "Häufige Fragen", legal: "Nutzungsbedingungen, Haftungsausschluss und Datenschutz", footerDmr: "DRM-geschützte Inhalte werden nicht unterstützt. Speichern und nutzen Sie Inhalte nur gemäß geltenden Bedingungen und Gesetzen.", downloadTitle: "Das Installationsprogramm<br><em>herunterladen.</em>", downloadLead: "Windows-Desktopversion", verifyTitle: "Datei überprüfen", unsignedTitle: "Zu dieser unsignierten Version", installFlowTitle: "Nach der Installation", useNoticeTitle: "Wichtiger Nutzungshinweis", back: "Zurück zur Produktseite", supportTitle: "Dienstbeispiele<br><em>und wichtige Hinweise</em>", supportLead: "Desktop- und Chrome-Web-Store-Version unterscheiden sich im Umfang. Die Verfügbarkeit kann sich ändern.", legalTitle: "Nutzungsbedingungen, Haftungsausschluss<br><em>und Datenschutz</em>", updated: "Letzte Aktualisierung: 26. Juli 2026", termsTitle: "Nutzungsbedingungen", disclaimerTitle: "Haftungsausschluss", privacyTitle: "Datenschutz", contactTitle: "Kontakt" },
    fr: { brand: "DL-Merge-In", home: "Accueil", navFeatures: "Fonctionnalités", navSupport: "Services pris en charge", navStart: "Premiers pas", navFaq: "FAQ", startFree: "Télécharger gratuitement", heroTitle: "Ouvrez une page. Choisissez.<br><em>Enregistrez, tout simplement.</em>", heroText: "Naviguez comme d'habitude. DL-Merge-In affiche les vidéos et audios disponibles dans le panneau latéral pour vous permettre de choisir et d'enregistrer sans quitter le navigateur.", downloadDesktop: "Télécharger pour Windows", viewStart: "Voir comment démarrer", browserNote: "Windows · Chrome pris en charge · Edge disponible à l'installation", quickTitle: "Démarrez en trois étapes.", quickLead: "Après l'installation, chargez une fois l'extension dans le navigateur en suivant le guide. Elle s'intègre ensuite à votre navigation habituelle.", featuresTitle: "Ouvrez une page et trouvez ce que vous pouvez enregistrer.", featuresLead: "Inutile de copier un lien dans une autre application. Choisissez simplement la vidéo ou l'audio proposé.", detectTitle: "Ouvrez la page et détectez<br>les médias disponibles.", detectBody: "Lorsqu'une page contient une vidéo ou un audio, les éléments disponibles apparaissent dans le panneau latéral.", qualityTitle: "Choisissez la qualité et le format<br>qui vous conviennent.", qualityBody: "Vérifiez la qualité et le type de fichier avant d'enregistrer.", queueTitle: "Téléchargez plusieurs fichiers<br>en même temps", queueBody: "Organisez plusieurs téléchargements dans une file avec pause, reprise et limite de vitesse.", galleryTitle: "Détection automatique pendant votre navigation", workflowTitle: "Une option d'enregistrement dans votre navigateur.", casesTitle: "Pour les contenus que vous souhaitez garder.", ctaTitle: "Plus de liberté pour enregistrer<br><em>depuis votre navigateur.</em>", ctaBody: "La version de bureau Windows actuelle est gratuite, sans limite et complète.", faqTitle: "Questions fréquentes", legal: "Conditions, limitation de responsabilité et confidentialité", footerDmr: "Les contenus protégés par DRM ne sont pas pris en charge. Enregistrez et utilisez les contenus dans le respect des conditions et lois applicables.", downloadTitle: "Télécharger le<br><em>programme d'installation.</em>", downloadLead: "Édition de bureau Windows", verifyTitle: "Vérifier le fichier", unsignedTitle: "À propos de cette version non signée", installFlowTitle: "Après l'installation", useNoticeTitle: "Avis d'utilisation important", back: "Retour à la présentation", supportTitle: "Exemples de services<br><em>et informations importantes</em>", supportLead: "Les éditions de bureau et Chrome Web Store ont des périmètres différents. La disponibilité peut évoluer.", legalTitle: "Conditions, limitation de responsabilité<br><em>et confidentialité</em>", updated: "Dernière mise à jour : 26 juillet 2026", termsTitle: "Conditions d'utilisation", disclaimerTitle: "Limitation de responsabilité", privacyTitle: "Confidentialité", contactTitle: "Contact" },
    it: { brand: "DL-Merge-In", home: "Home", navFeatures: "Funzioni", navSupport: "Servizi supportati", navStart: "Per iniziare", navFaq: "Domande frequenti", startFree: "Scarica gratis", heroTitle: "Apri una pagina. Scegli.<br><em>Salva subito.</em>", heroText: "Naviga come sempre. DL-Merge-In mostra video e audio disponibili nel pannello laterale: scegli cosa salvare senza uscire dal browser.", downloadDesktop: "Scarica per Windows", viewStart: "Scopri come iniziare", browserNote: "Windows · Chrome supportato · Edge disponibile durante l'installazione", quickTitle: "Inizia in tre passaggi.", quickLead: "Dopo l'installazione, carica una volta l'estensione nel browser seguendo la guida. Poi si integra nella tua normale navigazione.", featuresTitle: "Apri una pagina e scopri cosa puoi salvare.", featuresLead: "Non serve copiare link in un'altra app. Scegli il video o l'audio tra le opzioni visualizzate.", detectTitle: "Apri la pagina e rileva<br>i media disponibili.", detectBody: "Quando una pagina contiene video o audio, gli elementi disponibili appaiono nel pannello laterale.", qualityTitle: "Scegli qualità e formato<br>che preferisci.", qualityBody: "Controlla qualità e tipo di file prima di salvare.", queueTitle: "Scarica più file<br>contemporaneamente", queueBody: "Organizza più download in una coda, con pausa, ripresa e limiti di velocità.", galleryTitle: "Rilevamento automatico durante la navigazione", workflowTitle: "Un'opzione per salvare nel tuo browser.", casesTitle: "Per ciò che vuoi conservare.", ctaTitle: "Più libertà di salvare<br><em>dal browser.</em>", ctaBody: "L'attuale edizione desktop per Windows è gratuita, senza limiti e completa.", faqTitle: "Domande frequenti", legal: "Termini, esclusione di responsabilità e privacy", footerDmr: "I contenuti protetti da DRM non sono supportati. Salva e usa i contenuti nel rispetto dei termini e delle leggi applicabili.", downloadTitle: "Scarica il<br><em>programma di installazione.</em>", downloadLead: "Edizione desktop per Windows", verifyTitle: "Verifica il file", unsignedTitle: "Informazioni su questa versione non firmata", installFlowTitle: "Dopo l'installazione", useNoticeTitle: "Avviso importante sull'uso", back: "Torna alla presentazione", supportTitle: "Esempi di servizi<br><em>e note importanti</em>", supportLead: "Le edizioni desktop e Chrome Web Store hanno coperture diverse. La disponibilità può cambiare.", legalTitle: "Termini, esclusione di responsabilità<br><em>e privacy</em>", updated: "Ultimo aggiornamento: 26 luglio 2026", termsTitle: "Termini di utilizzo", disclaimerTitle: "Esclusione di responsabilità", privacyTitle: "Privacy", contactTitle: "Contatto" },
    id: { brand: "DL-Merge-In", home: "Beranda", navFeatures: "Fitur", navSupport: "Layanan yang didukung", navStart: "Mulai", navFaq: "Tanya jawab", startFree: "Unduh gratis", heroTitle: "Buka halaman. Pilih.<br><em>Simpan langsung.</em>", heroText: "Jelajahi seperti biasa. DL-Merge-In menampilkan video dan audio yang tersedia di panel samping, sehingga Anda dapat memilih dan menyimpannya tanpa meninggalkan browser.", downloadDesktop: "Unduh untuk Windows", viewStart: "Lihat cara memulai", browserNote: "Windows · Chrome didukung · Edge tersedia saat penyiapan", quickTitle: "Mulai dalam tiga langkah.", quickLead: "Setelah instalasi, muat ekstensi sekali di browser dengan mengikuti panduan. Setelah itu, gunakan seperti alur browsing biasa.", featuresTitle: "Buka halaman dan temukan yang dapat disimpan.", featuresLead: "Tidak perlu menyalin tautan ke aplikasi lain. Pilih video atau audio dari pilihan yang muncul.", detectTitle: "Buka halaman dan deteksi<br>media yang tersedia.", detectBody: "Saat halaman berisi video atau audio, item yang tersedia muncul di panel samping.", qualityTitle: "Pilih kualitas dan format<br>sesuai kebutuhan.", qualityBody: "Periksa kualitas dan jenis file sebelum menyimpan.", queueTitle: "Unduh beberapa file<br>secara bersamaan", queueBody: "Atur beberapa unduhan dalam antrean, dengan jeda, lanjutkan, dan batas kecepatan.", galleryTitle: "Deteksi otomatis saat Anda menjelajah", workflowTitle: "Pilihan untuk menyimpan di browser Anda.", casesTitle: "Untuk hal yang ingin Anda simpan.", ctaTitle: "Lebih bebas menyimpan<br><em>dari browser Anda.</em>", ctaBody: "Edisi desktop Windows saat ini gratis, tanpa batas, dan berfitur lengkap.", faqTitle: "Pertanyaan umum", legal: "Ketentuan, penafian, dan privasi", footerDmr: "Konten yang dilindungi DRM tidak didukung. Simpan dan gunakan konten sesuai syarat dan hukum yang berlaku.", downloadTitle: "Unduh<br><em>penginstal.</em>", downloadLead: "Edisi desktop Windows", verifyTitle: "Verifikasi file", unsignedTitle: "Tentang rilis tanpa tanda tangan ini", installFlowTitle: "Setelah instalasi", useNoticeTitle: "Pemberitahuan penggunaan penting", back: "Kembali ke halaman pengenalan", supportTitle: "Contoh layanan<br><em>dan catatan penting</em>", supportLead: "Edisi desktop dan Chrome Web Store memiliki cakupan berbeda. Ketersediaan dapat berubah.", legalTitle: "Ketentuan, penafian,<br><em>dan privasi</em>", updated: "Terakhir diperbarui: 26 Juli 2026", termsTitle: "Ketentuan penggunaan", disclaimerTitle: "Penafian", privacyTitle: "Privasi", contactTitle: "Kontak" },
    ko: { brand: "DL-Merge-In", home: "홈", navFeatures: "기능", navSupport: "지원 서비스", navStart: "시작 방법", navFaq: "자주 묻는 질문", startFree: "무료로 시작", heroTitle: "페이지를 엽니다. 선택합니다.<br><em>바로 저장합니다.</em>", heroText: "평소처럼 페이지를 둘러보세요. DL-Merge-In이 사이드 패널에 저장 가능한 동영상과 오디오를 보여 주므로, 브라우저를 떠나지 않고 선택해 저장할 수 있습니다.", downloadDesktop: "Windows용 다운로드", viewStart: "시작 방법 보기", browserNote: "Windows · Chrome 지원 · 설치 중 Edge 선택 가능", quickTitle: "3단계로 시작하세요.", quickLead: "설치 후 가이드를 따라 브라우저에서 확장 프로그램을 한 번만 수동으로 불러오면 됩니다. 이후에는 평소의 브라우징 흐름에서 사용할 수 있습니다.", featuresTitle: "페이지를 열고 저장할 수 있는 콘텐츠를 찾으세요.", featuresLead: "링크를 다른 앱에 붙여넣을 필요가 없습니다. 표시된 후보에서 원하는 동영상이나 오디오를 고르기만 하면 됩니다.", detectTitle: "페이지를 열면<br>저장 가능한 미디어를 자동 감지합니다.", detectBody: "페이지에 동영상이나 오디오가 있으면 저장 가능한 항목이 사이드 패널에 표시됩니다.", qualityTitle: "원하는 화질과 형식을<br>선택해 저장하세요.", qualityBody: "저장하기 전에 화질과 파일 형식을 확인할 수 있습니다.", queueTitle: "여러 파일을<br>동시에 다운로드", queueBody: "여러 다운로드를 대기열에서 정리하고, 일시 정지·재개와 속도 제한을 관리할 수 있습니다.", galleryTitle: "브라우징 중인 페이지에서 자동 감지", workflowTitle: "평소 브라우저에<br>저장 옵션을 더하세요.", casesTitle: "저장해 두고 싶은 순간을 위해.", ctaTitle: "브라우저에서 누리는<br><em>저장의 자유.</em>", ctaBody: "현재 Windows 데스크톱 버전은 무료이며 제한 없이 모든 기능을 이용할 수 있습니다.", faqTitle: "자주 묻는 질문", legal: "이용약관, 면책 및 개인정보", footerDmr: "DRM으로 보호된 콘텐츠는 지원하지 않습니다. 관련 약관과 법률을 준수하여 콘텐츠를 저장하고 이용하세요.", downloadTitle: "설치 프로그램<br><em>다운로드.</em>", downloadLead: "Windows 데스크톱 버전", verifyTitle: "파일 확인", unsignedTitle: "서명되지 않은 이번 배포에 관하여", installFlowTitle: "설치 후 진행", useNoticeTitle: "이용 시 유의사항", back: "소개 페이지로 돌아가기", supportTitle: "지원 서비스 예시<br><em>및 유의사항</em>", supportLead: "데스크톱 버전과 Chrome 웹 스토어 버전은 지원 범위가 다르며, 제공 여부는 달라질 수 있습니다.", legalTitle: "이용약관, 면책 및<br><em>개인정보</em>", updated: "최종 업데이트: 2026년 7월 26일", termsTitle: "이용약관", disclaimerTitle: "면책", privacyTitle: "개인정보", contactTitle: "문의" },
    "zh-CN": { brand: "DL-Merge-In", home: "首页", navFeatures: "功能", navSupport: "支持的服务", navStart: "开始使用", navFaq: "常见问题", startFree: "免费下载", heroTitle: "打开页面，选择内容。<br><em>直接保存。</em>", heroText: "像平常一样浏览网页。DL-Merge-In 会在侧边栏列出可保存的视频和音频，您无需离开浏览器即可选择并保存。", downloadDesktop: "下载 Windows 版", viewStart: "查看入门方法", browserNote: "Windows · 支持 Chrome · 安装时可选择 Edge", quickTitle: "三步开始使用。", quickLead: "安装后，请按指南在浏览器中手动加载一次扩展程序。完成后即可融入日常浏览流程。", featuresTitle: "打开页面，找到可保存的内容。", featuresLead: "无需将链接复制到其他应用。只需从显示的选项中选择想保存的视频或音频。", detectTitle: "打开页面，自动检测<br>可用媒体。", detectBody: "页面中有视频或音频时，可保存的项目会显示在侧边栏。", qualityTitle: "选择适合的清晰度和格式。", qualityBody: "保存前可确认清晰度和文件类型。", queueTitle: "同时下载<br>多个文件", queueBody: "通过队列整理多个下载任务，可暂停、继续和限制速度。", galleryTitle: "浏览页面时自动检测", workflowTitle: "在日常浏览中，多一个保存选择。", casesTitle: "留住想保留的内容。", ctaTitle: "让浏览器里的保存<br><em>更自由。</em>", ctaBody: "当前 Windows 桌面版免费、无限制且功能完整。", faqTitle: "常见问题", legal: "使用条款、免责声明和隐私", footerDmr: "不支持受 DRM 保护的内容。请遵守适用的服务条款和法律来保存及使用内容。", downloadTitle: "下载<br><em>安装程序。</em>", downloadLead: "Windows 桌面版", verifyTitle: "验证文件", unsignedTitle: "关于此未签名版本", installFlowTitle: "安装后的步骤", useNoticeTitle: "重要使用提示", back: "返回介绍页", supportTitle: "服务示例<br><em>与重要说明</em>", supportLead: "桌面版与 Chrome 网上应用店版的支持范围不同，实际可用性可能变化。", legalTitle: "使用条款、免责声明<br><em>和隐私</em>", updated: "最后更新：2026年7月26日", termsTitle: "使用条款", disclaimerTitle: "免责声明", privacyTitle: "隐私", contactTitle: "联系" },
    "zh-TW": { brand: "DL-Merge-In", home: "首頁", navFeatures: "功能", navSupport: "支援的服務", navStart: "開始使用", navFaq: "常見問題", startFree: "免費下載", heroTitle: "開啟頁面，選擇內容。<br><em>直接儲存。</em>", heroText: "如同平常一樣瀏覽網頁。DL-Merge-In 會在側邊面板列出可儲存的影片和音訊，無須離開瀏覽器即可選擇並儲存。", downloadDesktop: "下載 Windows 版", viewStart: "查看入門方式", browserNote: "Windows · 支援 Chrome · 安裝時可選擇 Edge", quickTitle: "三個步驟開始使用。", quickLead: "安裝後，請依指南在瀏覽器中手動載入一次擴充功能。完成後即可融入日常瀏覽流程。", featuresTitle: "開啟頁面，找到可儲存的內容。", featuresLead: "不必將連結複製到其他應用程式。只要從顯示的選項中選擇想儲存的影片或音訊即可。", detectTitle: "開啟頁面，自動偵測<br>可用媒體。", detectBody: "頁面中有影片或音訊時，可儲存的項目會顯示在側邊面板。", qualityTitle: "選擇適合的畫質和格式。", qualityBody: "儲存前可確認畫質和檔案類型。", queueTitle: "同時下載<br>多個檔案", queueBody: "透過佇列整理多個下載工作，可暫停、繼續及限制速度。", galleryTitle: "瀏覽頁面時自動偵測", workflowTitle: "在日常瀏覽中，多一個儲存選擇。", casesTitle: "留住想保留的內容。", ctaTitle: "讓瀏覽器中的儲存<br><em>更自在。</em>", ctaBody: "目前的 Windows 桌面版免費、無限制且功能完整。", faqTitle: "常見問題", legal: "使用條款、免責聲明與隱私", footerDmr: "不支援受 DRM 保護的內容。請遵守適用的服務條款和法律來儲存及使用內容。", downloadTitle: "下載<br><em>安裝程式。</em>", downloadLead: "Windows 桌面版", verifyTitle: "驗證檔案", unsignedTitle: "關於此未簽署版本", installFlowTitle: "安裝後的步驟", useNoticeTitle: "重要使用提醒", back: "返回介紹頁", supportTitle: "服務範例<br><em>與重要說明</em>", supportLead: "桌面版與 Chrome 線上應用程式商店版的支援範圍不同，實際可用性可能變動。", legalTitle: "使用條款、免責聲明<br><em>與隱私</em>", updated: "最後更新：2026年7月26日", termsTitle: "使用條款", disclaimerTitle: "免責聲明", privacyTitle: "隱私", contactTitle: "聯絡" }
  };

  Object.assign(copy.en, {
    heroKicker: "Windows desktop tool", mockVideoTitle: "Weekend landscape", mockAudioTitle: "Ambient soundscape", trustVideo: "Video", trustAudio: "Audio", trustQueue: "Queue", quickKicker: "Quickstart", quickDownload: "Download", quickSetup: "Setup", quickSave: "Save", featuresKicker: "Browse, choose, save", galleryKicker: "Product tour", workflowKicker: "How it works", casesKicker: "Use cases", ctaKicker: "Windows desktop edition", downloadKicker: "Windows desktop edition", supportKicker: "Service examples", legalKicker: "Legal information",
    metaDescription: "DL-Merge-In is a Windows desktop tool that detects downloadable video and audio on the page you are viewing, lets you choose what you want, and saves it from your browser.",
    ogTitle: "DL-Merge-In | Detect, choose, save",
    ogDescription: "Open a page to see available video and audio, choose what you want, and save it without leaving your browser.",
    mainNavLabel: "Main navigation",
    productSceneLabel: "DL-Merge-In interface preview",
    panelDetect: "Detect",
    panelDownloads: "Downloads",
    detectedLabel: "Media found on this page",
    downloading: "Downloading",
    saveHighQuality: "Save in high quality",
    keyFeaturesLabel: "Key features",
    trustCopy: "Open the page. Choose what you want from the available media.",
    quick1Title: "Get Setup.exe",
    quick1Body: "Download the latest Windows desktop installer.",
    quick1Link: "Review before downloading",
    quick2Title: "Load the extension manually",
    quick2Body: "Run Setup.exe, then follow the guide to load the extension in Chrome or Edge. This step is not fully automatic.",
    quick2Link: "Open the setup guide",
    quick3Title: "Open the page and save",
    quick3Body: "Open the page you want and choose an item from the Detect tab.",
    quick3Link: "See how it works",
    galleryDetectAlt: "DL-Merge-In detecting media on a neutral video page",
    galleryDetectTitle: "01 — Automatic detection",
    galleryDetectBody: "Open the page and available media appears in the side panel.",
    galleryQualityAlt: "DL-Merge-In quality selection screen shown before download",
    galleryQualityTitle: "02 — Choose quality",
    galleryQualityBody: "Confirm the quality you need before saving.",
    galleryQueueAlt: "DL-Merge-In Download Manager showing download progress",
    galleryQueueTitle: "03 — Manage the queue",
    galleryQueueBody: "Keep track of multiple downloads as they progress.",
    workflowBody: "After setup, follow the guide to load the browser extension manually. Once it is ready, DL-Merge-In fits into your normal browsing flow.",
    preInstallLink: "Review installation details",
    step1Title: "Open the page",
    step1Body: "Open a page containing the media you want, just as you normally would.",
    step1Alt: "Example media page",
    step1Aria: "Enlarge the example media page",
    step2Title: "Choose the media",
    step2Body: "Choose the quality, codec, and format from the items shown in the Detect tab.",
    step2Alt: "DL-Merge-In Detect tab",
    step2Aria: "Enlarge the DL-Merge-In Detect tab",
    step3Title: "Let it download",
    step3Body: "Follow progress in Download Manager, then use the completed file right away.",
    step3Alt: "DL-Merge-In Download Manager",
    step3Aria: "Enlarge the DL-Merge-In Download Manager",
    case1Title: "Watch it again while travelling",
    case1Body: "Keep content available for later without relying on a stable connection.",
    case2Title: "Keep learning and reference material handy",
    case2Body: "Save useful information so it is ready when you need it.",
    case3Title: "Organize video and audio",
    case3Body: "Choose video or audio to save. Check the service examples for current availability.",
    supportExamplesAria: "View supported service examples",
    ctaButton: "Windows desktop edition v1.1.0",
    ctaMeta: "Version 1.1.0 · Windows · Chrome supported · Edge available during setup",
    ctaHint: "This initial release is unsigned. Before downloading, verify the official URL, version, SHA-256, and important notices.",
    faqPriceQuestion: "Does it cost anything? <span>+</span>",
    faqPriceAnswer: "The current Windows desktop edition is free to use.",
    faqEditionsQuestion: "What is the difference between the desktop and CWS editions? <span>+</span>",
    faqEditionsAnswer: "The Windows desktop edition is the full version installed with Setup.exe and uses local processing. It supports a broad range of sites, including YouTube. The CWS edition is a standalone Chrome Web Store client and excludes some sites, including YouTube. It is currently being prepared and reviewed for publication. See <a href=\"supported-sites/#edition-differences\">the edition comparison</a> for details.",
    faqBrowserQuestion: "Which browsers are supported? <span>+</span>",
    faqBrowserAnswer: "Google Chrome on Windows is supported by default. Microsoft Edge is also supported when selected during installation.",
    faqSitesQuestion: "Which sites are supported? <span>+</span>",
    faqSitesAnswer: "DL-Merge-In searches for downloadable media using dedicated support and general detection. See <a href=\"supported-sites/\">service examples and important notes</a>.",
    faqUnavailableQuestion: "Is there content that cannot be saved? <span>+</span>",
    faqUnavailableAnswer: "DRM-protected content is not supported. Detection or saving may also be unavailable on some sites or delivery methods. Follow each service's terms and applicable copyright law.",
    faqSubtitlesQuestion: "Can it save subtitles? <span>+</span>",
    faqSubtitlesAnswer: "See <a href=\"supported-sites/\">service examples and important notes</a> for the current subtitle support and feature scope.",
    lightboxLabel: "Enlarged image",
    lightboxClose: "Close enlarged image",
    copyright: "© 2026 DL-Merge-In",
    downloadMetaDescription: "Review the Windows desktop edition v1.1.0 installer, SHA-256, and unsigned-release notice before downloading DL-Merge-In.",
    downloadIntro: "Chrome is supported by default, and Microsoft Edge is available when selected during setup. After installation, load the browser extension manually once.",
    downloadButton: "Download Setup.exe",
    verifyBody: "Confirm that the file comes from the official GitHub Release and that its name and version match this page. The current file is not code-signed.",
    targetFile: "File",
    copySha: "Copy SHA-256",
    copiedSha: "Copied",
    copyShaFailed: "Copy failed",
    powershellBody: "To verify it in Windows PowerShell, run the command below and confirm that the displayed <code>Hash</code> exactly matches the value above.",
    unsignedBody1: "This initial release is not code-signed. Windows may therefore show a SmartScreen or unknown publisher warning.",
    unsignedBody2: "If a warning appears, verify the download source, file name, version, and SHA-256 before proceeding. If anything does not match or you are unsure, do not run the file. Recheck the <a href=\"https://github.com/dl-merge-in/DL-Merge-In/releases/tag/v1.1.0\">Release page</a> and this page.",
    installStep1: "Run Setup.exe.",
    installStep2: "Follow the instructions to load the extension manually in Chrome or the Edge browser selected during setup.",
    installStep3: "Open a page containing the media you want, then choose an item from the Detect tab.",
    setupGuideLink: "See the <a href=\"../guide/?lang=en\">setup guide</a> for detailed instructions.",
    usageBody: "DRM-protected content is not supported. Only handle content for which you have the necessary rights or permission, and follow each service's terms and applicable law. See <a href=\"../legal/\">terms, disclaimer, and privacy</a> for details.",
    supportMetaDescription: "Examples of services supported by DL-Merge-In and important notes about availability.",
    editionDifferenceTitle: "Desktop and CWS edition differences",
    desktopEditionTitle: "Desktop edition",
    desktopEditionBody: "The full edition is installed with Setup.exe and works with a local processing server. It <strong>supports downloads from YouTube</strong>.",
    cwsEditionTitle: "CWS edition",
    cwsEditionBody: "A standalone client for the Chrome Web Store. It is currently being prepared and reviewed for publication. To comply with store policies, <strong>some sites, including YouTube, are excluded</strong>.",
    desktopExamplesTitle: "Desktop edition examples",
    desktopExamplesBody1: "Dedicated support and general detection look for downloadable video and audio. Current examples include YouTube, Niconico, TVer, Abema, Twitch, Vimeo, TikTok, X, and Instagram.",
    desktopExamplesBody2: "In addition to the many services supported by yt-dlp, DL-Merge-In's own general detector may find media on pages that yt-dlp does not support as a named site.",
    cwsExamplesTitle: "CWS edition examples",
    cwsExamplesBody1: "Examples include Niconico, TikTok, Instagram, X, and Reddit. YouTube, TVer, Abema, Twitch, and Vimeo are not supported by the CWS edition. Consider the desktop edition for those services.",
    cwsExamplesBody2: "The CWS edition is currently being prepared and reviewed for publication. Even after publication, its coverage will differ from the desktop edition. Neither edition guarantees operation on every page, delivery method, or item of content.",
    featureNotesTitle: "Feature notes",
    featureNotesBody1: "You can choose quality, format, and codec; combine separate video and audio; manage a queue; pause and resume; and limit download speed. When available, YouTube subtitles can be saved as a separate file.",
    featureNotesBody2: "DRM-protected content is not supported. Whether an item can be saved depends on the page's delivery method and rights settings.",
    trademarkTitle: "Trademarks and responsible use",
    trademarkBody1: "Service names on this page are examples used only to explain availability. All names and trademarks belong to their respective owners. DL-Merge-In is not affiliated with, approved by, or endorsed by any of these services.",
    trademarkBody2: "Before saving or using content, check the service terms, content provider conditions, and applicable law. See <a href=\"../legal/\">terms, disclaimer, and privacy</a> for details.",
    legalMetaDescription: "DL-Merge-In terms of use, disclaimer, and privacy notice.",
    termsBody1: "DL-Merge-In is a Windows tool that shows media available to save from the page you are viewing. You are responsible for confirming that you have the copyright, permission, licence, or other rights required to save and use any content.",
    termsBody2: "Follow each service's terms, the content provider's conditions, copyright law, and all other applicable laws. DRM-protected content is outside the scope of the software, and use intended to bypass technical protection measures is not supported.",
    disclaimerBody1: "Compatibility, detection results, quality, format, saved output, third-party service specifications, and continued availability are not guaranteed. Features may stop working when an external service changes.",
    disclaimerBody2: "DL-Merge-In is not affiliated with, approved by, or endorsed by any third-party service, content provider, or trademark owner. Information on this site is provided for general information and is not individual legal advice.",
    privacyBody1: "This site does not implement its own analytics, advertising, registration form, or contact form. It does not provide a mechanism for collecting information entered by visitors.",
    privacyBody2: "Google Fonts are loaded from an external service, so your browser may connect to Google's servers. This site is delivered through GitHub Pages. Refer to each provider's policy for information about how those services handle data.",
    privacyBody3: "This notice concerns this website. It is not a comprehensive description of data handling by the DL-Merge-In application or by third-party services you use with it.",
    contactBody: "For rights-related notices, removal requests, or other matters unsuitable for a public Issue, email <a href=\"mailto:dlmergein@proton.me\">dlmergein@proton.me</a>."
  });

  Object.entries(window.DLMERGEIN_TRANSLATIONS || {}).forEach(([localeName, bundle]) => {
    if (copy[localeName] && bundle?.site) Object.assign(copy[localeName], bundle.site);
  });

  const locale = localeFromBrowser();
  const t = copy[locale] || copy.en;
  document.documentElement.lang = locale;
  document.documentElement.dataset.locale = locale;
  window.DLMERGEIN_LOCALE = locale;
  window.DLMERGEIN_T = (key) => t[key] || copy.en[key] || key;

  const getElementValue = (key) => {
    if (Object.prototype.hasOwnProperty.call(t, key)) return t[key];
    if (locale === "ja") return null;
    return copy.en[key] || null;
  };

  const apply = () => {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = getElementValue(element.dataset.i18n);
      if (value) element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = getElementValue(element.dataset.i18nHtml);
      if (value) element.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const value = getElementValue(element.dataset.i18nAriaLabel);
      if (value) element.setAttribute("aria-label", value);
    });
    document.querySelectorAll("[data-i18n-content]").forEach((element) => {
      const value = getElementValue(element.dataset.i18nContent);
      if (value) element.setAttribute("content", value);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const value = getElementValue(element.dataset.i18nAlt);
      if (value) element.setAttribute("alt", value);
    });
    document.querySelectorAll("[data-i18n-lightbox-alt]").forEach((element) => {
      const value = getElementValue(element.dataset.i18nLightboxAlt);
      if (value) element.dataset.lightboxAlt = value;
    });
    if (requestedLocale) {
      document.querySelectorAll("a[href]").forEach((link) => {
        const rawHref = link.getAttribute("href");
        if (!rawHref || rawHref.startsWith("#") || rawHref.startsWith("mailto:")) return;
        const url = new URL(rawHref, location.href);
        if (url.origin !== location.origin) return;
        url.searchParams.set("lang", locale);
        link.href = url.href;
      });
    }
    const page = document.body?.dataset?.i18nPage;
    const pageTitle = page === "home" ? t.heroTitle : t[`${page}Title`];
    if (pageTitle) {
      const plainTitle = pageTitle.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
      document.title = `${plainTitle} | ${t.brand}`;
    }
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply, { once: true });
  else apply();
})();
