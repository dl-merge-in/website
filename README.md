# DL-Merge-In Website

[DL-Merge-In](https://www.dlmergein.com/) の公式ランディングページとセットアップガイドを管理する、依存関係のない静的サイトです。

- 公開サイト: <https://www.dlmergein.com/>
- 配布情報: <https://github.com/dl-merge-in/DL-Merge-In/releases>
- 公開方法: GitHub Pages（`main` ブランチのルートを自動公開）

> このリポジトリにはインストーラー、アプリケーションのソースコード、開発用設定を含めません。

## リポジトリ構成

```text
.
├─ index.html          # ランディングページ
├─ style.css           # サイトのスタイル
├─ script.js           # 小さな画面効果
├─ assets/             # OGP画像と匿名化済みの画面画像
├─ guide/index.html    # ブラウザ拡張の手動読み込みを含むセットアップガイド
└─ CNAME               # GitHub Pagesの独自ドメイン設定
```

## 更新方法

1. 本リポジトリを取得し、LP、ガイド、または画像を編集します。
2. 内容をローカルで確認します。
3. `main` ブランチへコミット・pushします。
4. GitHub Pagesのビルド完了後、公開サイトで表示、リンク、画像を確認します。

`CNAME` には `www.dlmergein.com` が設定されています。独自ドメインの接続を維持するため、通常のLP更新ではこのファイルを削除・変更しないでください。

### ローカル確認

ビルド工程は不要です。単純なローカルWebサーバーで確認できます。

```powershell
git clone https://github.com/dl-merge-in/website.git website
cd website
py -m http.server 8000
```

ブラウザで <http://localhost:8000/> を開いて確認します。ローカルファイルを直接開くのではなく、サーバー経由にすることで実際の公開に近い動作を確認できます。

## 公開内容の方針

- 製品名は **DL-Merge-In** と表記します。
- 対応環境・対応ブラウザ・字幕機能などの説明は、実装済みの範囲に限定します。
- DRMで保護されたコンテンツは対象外です。利用者には各サービスの利用規約および適用法令の順守を案内します。
- 画面画像を更新する際は、アカウント名、プロフィール画像、履歴、個人情報などを公開前に確認し、必要に応じて匿名化します。

## 配布との関係

Windows向けインストーラーとSHA-256は、このリポジトリではなく [DL-Merge-In Releases](https://github.com/dl-merge-in/DL-Merge-In/releases) に公開します。リリースを公開したら、LPのダウンロード導線を該当するRelease URLへ更新してください。

## 問い合わせ・外部貢献

不具合報告と機能要望は、このリポジトリの [Issues](https://github.com/dl-merge-in/website/issues) から送信してください。テンプレートの注意に従い、個人情報、ログイン情報、Cookie、アクセストークン、非公開URLを投稿しないでください。

一般的な使い方の質問は、まず [セットアップガイド](https://www.dlmergein.com/guide/) と [よくある質問](https://www.dlmergein.com/#faq) を確認してください。個別サポート、DRMの回避、著作権侵害や利用規約違反につながる依頼には対応しません。

このリポジトリは公開サイトの配布・運用を目的としており、外部からのPull Requestは受け付けていません。提案はIssueでお知らせください。Discussionsは現時点では有効にしていません。

## License

Copyright (c) 2026 DL-Merge-In. All rights reserved.

このリポジトリのソースコード、文書、画像などの複製、転載、配布、改変、二次利用は許可していません。詳しくは [LICENSE](LICENSE) を確認してください。
