const MarketingDatabase = new Array
(
    ['以下のうち、マーケティング・ミックスに最も関係が深いものはのはどれか？', '4P', '5R', '6 Tools', '5つの競争要因', '2-3 マーケティング・マネジメント'],
    ['SWOT分析の項目について、正しく説明しているのはどれか？', '内部分析：Strengths,Weaknesses　外部分析：Opotunities,Threats', '内部分析：Styles,Weight　外部分析：Organization,Thinking', '内部分析：Opotunities,Threats　外部分析：Style,Weaknesses', '内部分析：Organization,Thinking　外部分析：Styles,Weight', '2-4 市場の機会の発見'],
    ['SWOT分析によって導き出すものとして、もっとも適切なものはどれか？', 'KSF', 'KBF', 'KPI', 'KBI', '2-4 市場の機会の発見'],
    ['ポジショニング成功のために「不適切なもの」はどれか？', '想定する顧客像を明確にし過ぎないこと', '顧客に正確に伝わること', '顧客にとって共感できること', '企業全体のポジショニングと整合しいること', '2-7 ポジショニング'],
    ['購買プロセス上、消費者が特別な努力せず頻繁に購入購入するものは、何と呼ばれる？', '最寄品', '買回品', '専門品', '比較品', '2-8 製品特性'],
    ['購買プロセス上、いくつかの製品を比較検討して購入するものは、何と呼ばれる？', '買回品', '最寄品', '専門品', '比較品', '2-8 製品特性'],
    ['購買プロセス上、特別な知識や趣味性を要するものは、何と呼ばれる？', '専門品', '買回品', '最寄品', '比較品', '2-8 製品特性'],
    ['ブランドの役割として、「関係のない説明」をしているのはどれか？', '生産～販売を効率化する「流通」機能', '購買に関する情報処理の時間やコストを節約する「識別」機能', '購買リスクの軽減・回避に役立つ「品質保証」機能', '満足感の高まり、自己実現の手段になる「意味づけ」機能', '2-9 ブランド'],
    ['新製品開発プロセスとして、適切なものはどれか？', 'コンセプト開発→仮説検討→製品化→市場参入', 'コンセプト開発→製品化→仮説検討→市場参入', '仮説検討→コンセプト開発→市場参入→製品化', '仮説検討→コンセプト開発→製品化→市場参入', '2-10 新製品開発'],
    ['イノベーター（革新者）とは、どのような顧客タイプか？', '仲間内で情報交換するが他の購買層に影響与えない。', 'オピニオン・リーダーとして影響力もつ。', '成長期の中心的顧客。', '流行に無関心。', '2-11 製品ライフサイクル'],
    ['アーリー・アダプタ（初期採用者）とは、どのような顧客タイプか？', 'オピニオン・リーダーとして影響力もつ。', '仲間内で情報交換するが他の購買層に影響与えない。', '成長期の中心的顧客。', '流行に無関心。', '2-11 製品ライフサイクル'],
    ['フォロワー（初期大衆）とは、どのような顧客タイプか？', '成長期の中心的顧客。', 'オピニオン・リーダーとして影響力もつ。', '仲間内で情報交換するが他の購買層に影響与えない。', '流行に無関心。', '2-11 製品ライフサイクル'],
    ['価格決定に影響を与える要素として、最も「関連性の低いもの」はどれか？', '法規制', 'コスト', 'カスタマー・バリュー', '競争環境', '2-13 戦略的価格設定'],
    ['市場シェア獲得のため価格をコストと同じかそれ以下にする価格決定方法は何と呼ばれるか？', 'ペネトレーション・プライシング', 'スキミング・プライシング', 'ターゲット・プライシング', 'マークアップ・プライシング', '2-13 戦略的価格設定'],
    ['流通チャネルの3つのフローに「含まれない」ものは？', '市流', '物流', '商流', '情報流', '2-14 流通チャネルの意義'],
    ['仲介業者持たず、顧客のネットワークをフル活用する方式を何と呼ぶか？', 'マルチレベル方式', 'フランチャイズ方式', 'ライセンス方式', 'トレードマーク方式', '2-14 流通チャネルの意義'],
    ['ビジネスシステムの提供者が特定地域内におけるビジネスの展開、トレードマーク使用権、ノウハウなどを提供する方式を何と呼ぶか？', 'マルチレベル方式', 'フランチャイズ方式', 'ライセンス方式', 'トレードマーク方式', '2-14 流通チャネルの意義'],
    ['自社ブランドのカテゴリ別使用権を第三者に与え、売り上げに応じてロイヤリティを徴収する方式を何と呼ぶか？', 'ライセンス方式', 'マルチレベル方式', 'フランチャイズ方式', 'トレードマーク方式', '2-14 流通チャネルの意義'],
    ['メーカーが直営店で販売するのは、何段階チャネルか？', '0段階チャネル', '1段階チャネル', '2段階チャネル', '3段階チャネル', '2-14 流通チャネルの意義'],
    ['販売先限定せず広範囲に販売したい場合、最も適した流通政策はどれか？', '開放的流通政策', '選択的流通政策', '排他的流通政策', '優先的流通政策', '2-15 流通チャネルの構築プロセス'],
    ['仲介業者の力、メーカーへの協力度合い、立地など照らして選定した流通業者に優先的に販売させたい場合、最も適した流通政策はどれか？', '選択的流通政策', '開放的流通政策', '排他的流通政策', '優先的流通政策', '2-15 流通チャネルの構築プロセス'],
    ['独占販売権与えるかわりに同業他社製品取扱禁止させたい場合、最も適した流通政策はどれか？', '排他的流通政策', '開放的流通政策', '選択的流通政策', '優先的流通政策', '2-15 流通チャネルの構築プロセス'],
    ['AIDMAが示す購入までのプロセスとして、適切なものはどれか？', '注意→興味→欲求→記憶→行動', '注意→興味→欲求→検索→行動', '注意→興味→欲求→確信→行動', '注意→興味→欲求→評価→行動', '2-16 購買決定プロセスとコミュニケーション手段'],
    ['広告など利用し直接顧客に働きかけて、指名買いさせる戦略はどれか？', 'プル戦略', 'プッシュ戦略', 'アクティブ戦略', 'パッシブ戦略', '2-16 購買決定プロセスとコミュニケーション手段'],
);
