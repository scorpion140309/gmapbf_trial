const HumanResourceManagementDatabase = new Array
(
     new QuizDatabase('人・組織のマネジメントに影響を及ぼす外部要因に「含まれない」ものはどれか？', '経営理念', '法的規制', '技術的進歩', '労働組合', '5-2 人・組織のマネジメントに影響を及ぼす要因'),
     new QuizDatabase('人的資源管理の視点で「HR（Human Resource）ポリシー」を適切に説明しているのはどれか？', 'ビジョンを実現するため、組織と人がどうあるべきかを示す。', '構成員をどのように組み合わせて戦略を遂行させるか。', '構成員をどのように活用・管理するか。', '構成員が共有する信念、価値観、行動規範の集合体。', '5-3 組織行動学と人的資源管理'),
     new QuizDatabase('人的資源管理の視点で「組織構造」を適切に説明しているのはどれか？', '構成員をどのように組み合わせて戦略を遂行させるか。', 'ビジョンを実現するため、組織と人がどうあるべきかを示す。', '構成員をどのように活用・管理するか。', '構成員が共有する信念、価値観、行動規範の集合体。', '5-3 組織行動学と人的資源管理'),
     new QuizDatabase('人的資源管理の視点で「HRシステム」を適切に説明しているのはどれか？', '構成員をどのように活用・管理するか。', '構成員をどのように組み合わせて戦略を遂行させるか。', 'ビジョンを実現するため、組織と人がどうあるべきかを示す。', '構成員が共有する信念、価値観、行動規範の集合体。', '5-3 組織行動学と人的資源管理'),
     new QuizDatabase('人的資源管理の視点で「組織文化」を適切に説明しているのはどれか？', '構成員が共有する信念、価値観、行動規範の集合体。', '構成員をどのように活用・管理するか。', '構成員をどのように組み合わせて戦略を遂行させるか。', 'ビジョンを実現するため、組織と人がどうあるべきかを示す。', '5-3 組織行動学と人的資源管理'),
     new QuizDatabase('「高度のリーダーシップが必要」、「マネジメント機能への要求が少ない」のはどのような組織か？', '創業期の組織', '19世紀における大部分の企業組織', '高度成長期の大企業', '現在の大部分の大企業', '5-4 リーダーシップとマネジメント'),
     new QuizDatabase('「高度のマネジメント機能が必要」、「リーダー機能へのニーズが少ない」のはどのような組織か？', '高度成長期の大企業', '創業期の組織', '19世紀における大部分の企業組織', '現在の大部分の大企業', '5-4 リーダーシップとマネジメント'),
     new QuizDatabase('エンパワーメントの成功要件として「適切でない」ものはどれか？', '強制力と報酬力', '経営理念、ビジョンの共有', '正当な評価と報奨', '能力の把握と資源の提供', '5-5 エンパワーメント'),
     new QuizDatabase('パワーは「強制力」、「報酬力」、「正当権力」、「専門力」、「同一視力」の5つで構成されていると提唱したのは誰か？', 'ジョン・フレンチとバートラム・ラーベン', 'マズロー', 'マクレガー', 'ハーズバーグ', '5-6 パワー'),
     new QuizDatabase('欲求5段階説（「生理的」→「安全」→「社会的」→「尊厳」→「自己実現」）を提唱したのは誰か？', 'マズロー', 'ジョン・フレンチとバートラム・ラーベン', 'マクレガー', 'ハーズバーグ', '5-7 モチベーションとインセンティブ'),
     new QuizDatabase('「人は怠け者で責任を回避しようとする。」というX理論と「人は勤勉で進んで仕事し、責任を取ろうとする。」というY理論を提唱したのは誰か？', 'マクレガー', 'マズロー', 'ジョン・フレンチとバートラム・ラーベン', 'ハーズバーグ', '5-7 モチベーションとインセンティブ'),
     new QuizDatabase('動機づけ・衛生理論を提唱したのは誰か？', 'ハーズバーグ', 'マクレガー', 'マズロー', 'ジョン・フレンチとバートラム・ラーベン', '5-7 モチベーションとインセンティブ'),
     new QuizDatabase('集団の発展段階として適切なのはどれか？', '形成期→激動期→規範形成期→実現期→終了期', '形成期→規範形成期→激動期→実現期→終了期', '形成期→実現期→激動期→規範形成期→終了期', '形成期→実現期→規範形成期→激動期→終了期', '5-9 チーム・マネジメント'),
     new QuizDatabase('コミュニケーション・プロセスとして適切なのはどれか？', '記号化→伝達→解読→フィードバック', '伝達→記号化→解読→フィードバック', '記号化→伝達→フィードバック→解読', '伝達→記号化→フィードバック→解読', '5-10 コンフリクト状況の分析'),
     new QuizDatabase('組織文化の機能として最も関連性が「低い」のはどれか？', '各事業部が利益責任を負う。', 'とるべき判断の行動や指針を与える。', '公的な情報伝達において情報量を低減する。', '昇進や昇給などの評価基準を明確にする。', '5-12 組織文化と企業経営'),
     new QuizDatabase('「組織は戦略に従う。」と提唱したのは誰か？', 'チャンドラー', 'シンドラー', 'ハンドラー', 'アンドラー', '5-13 組織設計'),
     new QuizDatabase('組織形態の説明として適切なのはどれか？', '機能別組織では、責任が曖昧になりやすい。', '事業部制組織では、意思決定に時間がかかる。', 'マトリクス型組織では、指揮命令系を明確にしやすい。', '事業部制組織では、部分最適に陥りやすい。', '5-14 組織形態'),
     new QuizDatabase('人材を外部調達した場合と内部調達した場合、発生する違いとして「適切でない」のはどれか？', '人材能力', '人材調達コスト', '人材評価の精度', '組織構成員に与える影響', '5-15 人員配置'),
     new QuizDatabase('従業員がポイントの範囲内で福利厚生を選択する仕組みを何と呼ぶか？', 'カフェテリア・プラン', 'フリンジ・ベネフィット', 'インセンティブ・システム', '確定拠出年金', '5-16 報奨'),
     new QuizDatabase('従業員がポイントの範囲内で福利厚生を選択する仕組みを何と呼ぶか？', 'カフェテリア・プラン', 'フリンジ・ベネフィット', 'インセンティブ・システム', '確定拠出年金', '5-16 報奨'),
     new QuizDatabase('ある対象を評価するときに、目立ちやすい特徴に引きずられて他の特徴についての評価が歪められる現象を何と呼ぶか？', 'ハロー効果', 'フィーチャー効果', '先入観効果', '固定観念効果', '5-17 評価'),
     new QuizDatabase('ビジネスにおける能力で、「経営に関する問題解決に必要な思考、分析の枠組み」に関するものはどれか？', 'ビジネス・フレームワーク', 'コンセプチュアル・スキル', 'ヒューマン・スキル', '変革マネジメント', '5-18 能力開発'),
     new QuizDatabase('ビジネスにおける能力で、「状況を構造化し、問題の本質把握と解決策導出」に関するものはどれか？', 'コンセプチュアル・スキル', 'ビジネス・フレームワーク', 'ヒューマン・スキル', '変革マネジメント', '5-18 能力開発'),
     new QuizDatabase('クルト・レビンが定義した組織変革の状態に「含まれない」ものはどれか？', '衝突', '解凍', '移動', '再凍結', '5-19 変革のマネジメント'),
     new QuizDatabase('組織における学習プロセスには「シングルループ・ラーニング」と「ダブルループ・ラーニング」の２形態があると提唱したのは誰か？', 'アージリス', 'センゲ', 'レビン', 'チャンドラー', '5-20 組織学習'),
     new QuizDatabase('組織学習に必要な要素としてゼンゲが提唱したものはどれか？', '5つのディシプリン', '3つのディシプリン', '4つのディシプリン', '6つのディシプリン', '5-20 組織学習'),
);
