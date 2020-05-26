const BusinessStrategyDatabase = new Array(
        ['経営戦略の3つのレベルに「含まれない」ものはのはどれか？', '市場戦略', '全社戦略', '事業戦略', '機能戦略', '1-2 経営理念と戦略レベル'],
        ['事業ドメイン、事業ポートフォリオ、多角化企業、シナジーに最も関係が深い、戦略レベルはどれか？', '全社戦略', '機能戦略', '市場戦略', '事業戦略', '1-2 経営理念と戦略レベル'],
		['人事戦略、財務戦略、生産戦略、開発戦略に最も関係が深い、戦略レベルはどれか？', '機能戦略', '市場戦略', '全社戦略', '事業戦略', '1-2 経営理念と戦略レベル'],
		['コア・コンピタンスの見極めに重要な5つの点に「含まれない」ものはどれか？', '信頼性', '希少性', '移転可能性', '代替可能性', '1-5 全社戦略の構成要素（２）：コア・コンピタンスと資源配分'],
		['事業ポートフォリオの検討に必要な3つの視点に「含まれない」ものはどれか？', '従業員満足度', '事業の魅力度', '競争上の優位性', '事業間のシナジー', '1-6 事業ポートフォリオと事業ライフサイクル'],
		['事業ライフサイクルの導入期について適切に説明しているものはどれか？', '売上、利益が少なく、キャッシュフローもマイナス。PR活動が重要。', '売上高、利益が急上昇。キャッシュフローもプラスに転じるが競合参入。', '売上高低成長、利益低下するが、投資額が少ないのでキャッシュフローはプラス。', '利益低下。新規投資不要で一部のリーダーは利益だすが、効率化必要。', '1-6 事業ポートフォリオと事業ライフサイクル'],
		['事業ライフサイクルの成長期について適切に説明しているものはどれか？', '売上高、利益が急上昇。キャッシュフローもプラスに転じるが競合参入。', '売上、利益が少なく、キャッシュフローもマイナス。PR活動が重要。', '売上高低成長、利益低下するが、投資額が少ないのでキャッシュフローはプラス。', '利益低下。新規投資不要で一部のリーダーは利益だすが、効率化必要。', '1-6 事業ポートフォリオと事業ライフサイクル'],
		['事業ライフサイクルの成熟期について適切に説明しているものはどれか？', '売上高低成長、利益低下するが、投資額が少ないのでキャッシュフローはプラス。', '売上高、利益が急上昇。キャッシュフローもプラスに転じるが競合参入。', '売上、利益が少なく、キャッシュフローもマイナス。PR活動が重要。', '利益低下。新規投資不要で一部のリーダーは利益だすが、効率化必要。', '1-6 事業ポートフォリオと事業ライフサイクル'],
		['市場成長率とマーケットシェアの高低で、製品や事業を「花形産業」、「問題児」、「金のなる木」、「負け犬」に分類した人物・もしくは団体はどれか？', 'BCG(ボストン・コンサルタント・グループ)', 'マイケル・ポーター', 'ミンツーバーグ', 'アンゾフ', '1-7 ポートフォリオ・マトリクス'],
		['PPMにおいて、市場成長率が高く、マーケットシェアが高い製品や事業を何と呼ぶか？', '花形産業', '問題児', '金のなる木', '負け犬', '1-7 ポートフォリオ・マトリクス'],
		['PPMにおいて、市場成長率が高く、マーケットシェアが低い製品や事業を何と呼ぶか？', '問題児', '花形産業', '金のなる木', '負け犬', '1-7 ポートフォリオ・マトリクス'],
		['PPMにおいて、市場成長率が低く、マーケットシェアが高い製品や事業を何と呼ぶか？', '金のなる木', '問題児', '花形産業', '負け犬', '1-7 ポートフォリオ・マトリクス'],
		['市場軸と製品軸を新規・既存で分類された事業拡大マトリクスを提唱した人物・もしくは団体はどれか？', 'アンゾフ', 'BCG(ボストン・コンサルタント・グループ)', 'マイケル・ポーター', 'アーカー', '1-8 事業拡大と多角化の基本戦略'],
		['事業拡大マトリクス(市場軸と製品軸)に第3の軸を追加した人物・もしくは団体はどれか？', 'アーカー', 'アンゾフ', 'BCG(ボストン・コンサルタント・グループ)', 'マイケル・ポーター', '1-8 事業拡大と多角化の基本戦略'],
		['ポーターが提唱した3つの基本戦略に「含まれない」ものはどれか？', '多角化戦略', 'コスト・リーダーシップ戦略', '差別化戦略', '集中戦略', '1-9 ポートフォリオ・マトリクス'],
		['累積生産量が増加することによって・固定費・変動費ともに低減する現象を何と呼ぶか？', '経験曲線', '規模の経済', '範囲の経済', '費用体効果', '1-10 事業の経済性分析'],
		['生産量を増やすことで単位当たりの固定費を低減することを何と呼ぶか？', '規模の経済', '経験曲線', '範囲の経済', '費用体効果', '1-10 事業の経済性分析'],
		['異なる複数の事業の共有可能なコストを一元化することにより経営を効率化することを何と呼ぶか？', '範囲の経済', '規模の経済', '経験曲線', '費用体効果', '1-10 事業の経済性分析'],
		['マクロ環境分析のフレームワークとして適切なものはどれか？', 'PEST', '3C', 'SWOT', '事業拡大マトリクス', '1-11 外部環境分析'],
		['3C戦略に「含まれない」ものはどれか？', 'コスト分析', '市場分析', '競合分析', '自社分析', '1-11 外部環境分析'],
		['SWOT分析の項目について、正しく説明しているのはどれか？', '内部分析：Strengths,Weaknesses　外部分析：Opotunities,Threats', '内部分析：Styles,Weight　外部分析：Organization,Thinking', '内部分析：Opotunities,Threats　外部分析：Style,Weaknesses', '内部分析：Organization,Thinking　外部分析：Styles,Weight', '1-11 外部環境分析'],
		['業界の収益性に影響を与える「5つの競争要因」を提唱した人物・もしくは団体はどれか？', 'マイケル・ポーター', 'アーカー', 'アンゾフ', 'BCG(ボストン・コンサルタント・グループ)', '1-12 業界分析：業界構造と「５つの力」'],
		['業界の競争環境を分析する手法として「アドバンテージ・マトリクス」を提唱した人物・もしくは団体はどれか？', 'BCG(ボストン・コンサルタント・グループ)', 'マイケル・ポーター', 'アーカー', 'アンゾフ', '1-13 業界分析：アドバンテージ・マトリクス'],
		['アドバンテージ・マトリクスにおいて、計測器、医薬品などが分類される事業はどれか？', '特化型事業', '規模型事業', '分散型事業', '手づまり型事業', '1-13 業界分析：アドバンテージ・マトリクス'],
		['アドバンテージ・マトリクスにおいて、半導体、コンピュータ自動車などが分類される事業はどれか？', '規模型事業', '特化型事業', '分散型事業', '手づまり型事業', '1-13 業界分析：アドバンテージ・マトリクス'],
		['アドバンテージ・マトリクスにおいて、規模が大きくなると収益率が低下する事業はどれか？', '分散型事業', '規模型事業', '特化型事業', '手づまり型事業', '1-13 業界分析：アドバンテージ・マトリクス'],
		['事業活動を機能ごとに分類し、どの部分（機能）で付加価値が生み出されているか、競合と比較してどの部分に強み・弱みがあるかを分析し、事業戦略の有効性や改善の方向を探ることを何と呼ぶか？', 'バリューチェーン', 'PEST', '差別化戦略', 'アドバンテージ・マトリクス', '1-14 内部分析：バリューチェーン（価値連鎖）'],
		['「バリューチェーン」を提唱した人物・もしくは団体はどれか？', 'マイケル・ポーター', 'アーカー', 'アンゾフ', 'BCG(ボストン・コンサルタント・グループ)', '1-14 内部分析：バリューチェーン（価値連鎖）'],
		['バリューチェーンにおける主活動に「含まれない」ものはどれか？', '全般管理', '購買物流', '販売・マーケティング', 'サービス', '1-14 内部分析：バリューチェーン（価値連鎖）'],
		['バリューチェーンにおける主活動に「含まれない」ものはどれか？', '人事・労務管理', '出荷物流', '製造', 'サービス', '1-14 内部分析：バリューチェーン（価値連鎖）'],
		['バリューチェーンにおける主活動に「含まれない」ものはどれか？', '技術管理', '出荷物流', '製造', 'サービス', '1-14 内部分析：バリューチェーン（価値連鎖）'],
		['バリューチェーンにおける主活動に「含まれない」ものはどれか？', '調達活動', '購買物流', '販売・マーケティング', 'サービス', '1-14 内部分析：バリューチェーン（価値連鎖）'],
		['バリューチェーンにおける支援活動に含まれるものはどれか？', '全般管理', '購買物流', '販売・マーケティング', 'サービス', '1-14 内部分析：バリューチェーン（価値連鎖）'],
		['バリューチェーンにおける支援活動に含まれるものはどれか？', '人事・労務管理', '製造', '出荷物流', '販売・マーケティング', '1-14 内部分析：バリューチェーン（価値連鎖）'],
		['競争上のトップ企業を追随し、競合から極端から反撃されない戦略をとるのはどれか？', 'フォロワー', 'リーダー', 'チャレンジャー', 'ニッチャー', '1-15 競争上の地位に応じた戦略'],
		['成熟期の戦略として「適切でない」ものはどれか？', '撤退メリットがデメリットを上回ったら、撤退の意思決定する。', '製品構成の合理化と正しい価格政策をとる。', 'コスト競争力を強化する。', '既存顧客への品揃えの充実させ、購買幅を拡張する。', '1-16 事業ライフサイクルに応じた戦略'],
		['企業が競争優位を保てるかどうかは企業の経営資源とやケイパビリティ次第であるという考え方を何と呼ぶか？', 'リソース・ベースド・ビュー', 'コンピテンシー・ベースド・ビュー', 'アビリティ・ベースド・ビュー', 'ポテンシャル・ベースド・ビュー', '1-17 戦略形成に関する見方'],
		['特定の付加価値活動で優位性を築くビジネスモデルを何と呼ぶか？', 'レイヤーマスター', 'オーケストレーター', 'マーケット・メーカー', 'パーソナル・エージェント', '1-19 バリューチェーンの再構築'],
		['以下の例は、何というビジネスモデルに分類されるか？<br>(例)PCメーカーが部品メーカーの組織化と業務の外注による効率化を行う。', 'オーケストレーター', 'レイヤーマスター', 'マーケット・メーカー', 'パーソナル・エージェント', '1-19 バリューチェーンの再構築'],
		['既存チャネルの弱みや欠陥をついて新市場を開拓するビジネスモデルを何と呼ぶか？', 'マーケット・メーカー', 'レイヤーマスター', 'オーケストレーター', 'パーソナル・エージェント', '1-19 バリューチェーンの再構築'],
		['以下の例は、何というビジネスモデルに分類されるか？<br>(例)ネット上の情報を整理するナビゲータが購買代理店として機能する。', 'パーソナル・エージェント', 'オーケストレーター', 'レイヤーマスター', 'マーケット・メーカー', '1-19 バリューチェーンの再構築']
    );
