const cardsData = [
    {
        "name": "エネルギー(無地)",
        "product": "スタートデッキ ラブライブ！",
        "type": "エネルギー",
        "number": "LL-E-001-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "高坂 穂乃果",
        "product": "スタートデッキ ラブライブ！",
        "type": "メンバー",
        "number": "PL!-sd1-001-SD",
        "effect": "自分の成功ライブカード置き場にカードが2枚以上ある場合、自分の控え室からライブカードを1枚手札に加える。\\n自分の成功ライブカード置き場にあるカード1枚につき、を得る。",
        "rarity": "SD"
    },
    {
        "name": "絢瀬 絵里",
        "product": "スタートデッキ ラブライブ！",
        "type": "メンバー",
        "number": "PL!-sd1-002-SD",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からメンバーカードを1枚手札に加える。",
        "rarity": "SD"
    },
    {
        "name": "南 ことり",
        "product": "スタートデッキ ラブライブ！",
        "type": "メンバー",
        "number": "PL!-sd1-003-SD",
        "effect": "自分の控え室からコスト4以下の『μ's』のメンバーカードを1枚手札に加える。\\n手札を1枚控え室に置いてもよい：かかのうち、1つを選ぶ。ライブ終了時まで、選んだハートを1つ得る。",
        "rarity": "SD"
    },
    {
        "name": "園田 海未",
        "product": "スタートデッキ ラブライブ！",
        "type": "メンバー",
        "number": "PL!-sd1-004-SD",
        "effect": "自分のデッキの上からカードを5枚見る。その中から『μ's』のライブカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "SD"
    },
    {
        "name": "星空 凛",
        "product": "スタートデッキ ラブライブ！",
        "type": "メンバー",
        "number": "PL!-sd1-005-SD",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "SD"
    },
    {
        "name": "西木野 真姫",
        "product": "スタートデッキ ラブライブ！",
        "type": "メンバー",
        "number": "PL!-sd1-006-SD",
        "effect": "手札のライブカードを1枚公開してもよい：自分の成功ライブカード置き場にあるカードを1枚手札に加える。そうした場合、これにより公開したカードを自分の成功ライブカード置き場に置く。",
        "rarity": "SD"
    },
    {
        "name": "東條 希",
        "product": "スタートデッキ ラブライブ！",
        "type": "メンバー",
        "number": "PL!-sd1-007-SD",
        "effect": "自分のデッキの上からカードを5枚控え室に置く。それらの中にライブカードがある場合、カードを1枚引く。",
        "rarity": "SD"
    },
    {
        "name": "小泉 花陽",
        "product": "スタートデッキ ラブライブ！",
        "type": "メンバー",
        "number": "PL!-sd1-008-SD",
        "effect": "：自分のデッキの上からカードを10枚控え室に置く。",
        "rarity": "SD"
    },
    {
        "name": "矢澤 にこ",
        "product": "スタートデッキ ラブライブ！",
        "type": "メンバー",
        "number": "PL!-sd1-009-SD",
        "effect": "自分の控え室に『μ's』のカードが25枚以上ある場合、ライブ終了時まで、「ライブの合計スコアを＋１する。」を得る。",
        "rarity": "SD"
    },
    {
        "name": "高坂 穂乃果",
        "product": "スタートデッキ ラブライブ！",
        "type": "メンバー",
        "number": "PL!-sd1-010-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "絢瀬 絵里",
        "product": "スタートデッキ ラブライブ！",
        "type": "メンバー",
        "number": "PL!-sd1-011-SD",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを3枚見る。その中から1枚を手札に加え、残りを控え室に置く。",
        "rarity": "SD"
    },
    {
        "name": "南 ことり",
        "product": "スタートデッキ ラブライブ！",
        "type": "メンバー",
        "number": "PL!-sd1-012-SD",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを3枚見る。その中から1枚を手札に加え、残りを控え室に置く。",
        "rarity": "SD"
    },
    {
        "name": "園田 海未",
        "product": "スタートデッキ ラブライブ！",
        "type": "メンバー",
        "number": "PL!-sd1-013-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "星空 凛",
        "product": "スタートデッキ ラブライブ！",
        "type": "メンバー",
        "number": "PL!-sd1-014-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "西木野 真姫",
        "product": "スタートデッキ ラブライブ！",
        "type": "メンバー",
        "number": "PL!-sd1-015-SD",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを5枚見る。その中からメンバーカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "SD"
    },
    {
        "name": "東條 希",
        "product": "スタートデッキ ラブライブ！",
        "type": "メンバー",
        "number": "PL!-sd1-016-SD",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを3枚見る。その中から1枚を手札に加え、残りを控え室に置く。",
        "rarity": "SD"
    },
    {
        "name": "小泉 花陽",
        "product": "スタートデッキ ラブライブ！",
        "type": "メンバー",
        "number": "PL!-sd1-017-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "矢澤 にこ",
        "product": "スタートデッキ ラブライブ！",
        "type": "メンバー",
        "number": "PL!-sd1-018-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "START:DASH!!",
        "product": "スタートデッキ ラブライブ！",
        "type": "ライブ",
        "number": "PL!-sd1-019-SD",
        "effect": "自分のデッキの上からカードを3枚見る。その中から好きな枚数を好きな順番でデッキの上に置き、残りを控え室に置く。",
        "rarity": "SD"
    },
    {
        "name": "きっと青春が聞こえる",
        "product": "スタートデッキ ラブライブ！",
        "type": "ライブ",
        "number": "PL!-sd1-020-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "これからのSomeday",
        "product": "スタートデッキ ラブライブ！",
        "type": "ライブ",
        "number": "PL!-sd1-021-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "僕らは今のなかで",
        "product": "スタートデッキ ラブライブ！",
        "type": "ライブ",
        "number": "PL!-sd1-022-SD",
        "effect": "自分の成功ライブカード置き場にあるカード1枚につき、このカードを成功させるための必要ハートは少なくなる。",
        "rarity": "SD"
    },
    {
        "name": "高坂 穂乃果",
        "product": "スタートデッキ ラブライブ！",
        "type": "エネルギー",
        "number": "PL!-sd1-023-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "絢瀬 絵里",
        "product": "スタートデッキ ラブライブ！",
        "type": "エネルギー",
        "number": "PL!-sd1-024-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "南 ことり",
        "product": "スタートデッキ ラブライブ！",
        "type": "エネルギー",
        "number": "PL!-sd1-025-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "園田 海未",
        "product": "スタートデッキ ラブライブ！",
        "type": "エネルギー",
        "number": "PL!-sd1-026-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "星空 凛",
        "product": "スタートデッキ ラブライブ！",
        "type": "エネルギー",
        "number": "PL!-sd1-027-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "西木野 真姫",
        "product": "スタートデッキ ラブライブ！",
        "type": "エネルギー",
        "number": "PL!-sd1-028-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "東條 希",
        "product": "スタートデッキ ラブライブ！",
        "type": "エネルギー",
        "number": "PL!-sd1-029-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "小泉 花陽",
        "product": "スタートデッキ ラブライブ！",
        "type": "エネルギー",
        "number": "PL!-sd1-030-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "矢澤 にこ",
        "product": "スタートデッキ ラブライブ！",
        "type": "エネルギー",
        "number": "PL!-sd1-031-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "高海千歌",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-001-R",
        "effect": "相手の手札の枚数が自分より2枚以上多い場合、自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "R"
    },
    {
        "name": "高海千歌",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-001-P＋",
        "effect": "相手の手札の枚数が自分より2枚以上多い場合、自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "P＋"
    },
    {
        "name": "桜内梨子",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-002-R",
        "effect": "相手は手札からライブカードを1枚控え室に置いてもよい。そうしなかった場合、ライブ終了時まで、「ライブの合計スコアを＋１する。」を得る。",
        "rarity": "R"
    },
    {
        "name": "桜内梨子",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-002-P＋",
        "effect": "相手は手札からライブカードを1枚控え室に置いてもよい。そうしなかった場合、ライブ終了時まで、「ライブの合計スコアを＋１する。」を得る。",
        "rarity": "P＋"
    },
    {
        "name": "松浦果南",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-003-R",
        "effect": "支払ってもよい：ライブ終了時まで、このメンバーが元々持つハートはすべてになる。エールにより公開された自分のカードの中から、ライブカードを1枚手札に加える。",
        "rarity": "R"
    },
    {
        "name": "松浦果南",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-003-P＋",
        "effect": "支払ってもよい：ライブ終了時まで、このメンバーが元々持つハートはすべてになる。エールにより公開された自分のカードの中から、ライブカードを1枚手札に加える。",
        "rarity": "P＋"
    },
    {
        "name": "黒澤ダイヤ",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-004-R",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "R"
    },
    {
        "name": "黒澤ダイヤ",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-004-P＋",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "P＋"
    },
    {
        "name": "渡辺 曜",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-005-R",
        "effect": "相手のエネルギーが自分より多い場合、を得る。",
        "rarity": "R"
    },
    {
        "name": "渡辺 曜",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-005-P＋",
        "effect": "相手のエネルギーが自分より多い場合、を得る。",
        "rarity": "P＋"
    },
    {
        "name": "津島善子",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-006-R",
        "effect": "手札のライブカードを1枚公開する：相手は手札を1枚控え室に置いてもよい。そうしなかった場合、ライブ終了時まで、を得る。",
        "rarity": "R"
    },
    {
        "name": "津島善子",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-006-P＋",
        "effect": "手札のライブカードを1枚公開する：相手は手札を1枚控え室に置いてもよい。そうしなかった場合、ライブ終了時まで、を得る。",
        "rarity": "P＋"
    },
    {
        "name": "国木田花丸",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-007-R",
        "effect": "エールにより公開された自分のカードの中にライブカードが1枚以上あるとき、自分のエネルギーデッキから、エネルギーカードを1枚ウェイト状態で置く。",
        "rarity": "R"
    },
    {
        "name": "国木田花丸",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-007-P＋",
        "effect": "エールにより公開された自分のカードの中にライブカードが1枚以上あるとき、自分のエネルギーデッキから、エネルギーカードを1枚ウェイト状態で置く。",
        "rarity": "P＋"
    },
    {
        "name": "小原鞠莉",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-008-R",
        "effect": "自分か相手を選ぶ。自分は、そのプレイヤーのデッキの上からカードを2枚見る。その中から好きな枚数を好きな順番でデッキの上に置き、残りを控え室に置く。",
        "rarity": "R"
    },
    {
        "name": "小原鞠莉",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-008-P＋",
        "effect": "自分か相手を選ぶ。自分は、そのプレイヤーのデッキの上からカードを2枚見る。その中から好きな枚数を好きな順番でデッキの上に置き、残りを控え室に置く。",
        "rarity": "P＋"
    },
    {
        "name": "黒澤ルビィ",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-009-R",
        "effect": "自分と相手の成功ライブカード置き場にカードが合計3枚以上ある場合、を得る。",
        "rarity": "R"
    },
    {
        "name": "黒澤ルビィ",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-009-P＋",
        "effect": "自分と相手の成功ライブカード置き場にカードが合計3枚以上ある場合、を得る。",
        "rarity": "P＋"
    },
    {
        "name": "高海千歌",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-010-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "桜内梨子",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-011-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "松浦果南",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-012-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "黒澤ダイヤ",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-013-N",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを4枚見る。その中からハートにを2個以上持つメンバーカードか、必要ハートにを2以上含むライブカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "N"
    },
    {
        "name": "渡辺 曜",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-014-N",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを4枚見る。その中からハートにを2個以上持つメンバーカードか、必要ハートにを2以上含むライブカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "N"
    },
    {
        "name": "津島善子",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-015-N",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを4枚見る。その中からハートにを2個以上持つメンバーカードか、必要ハートにを2以上含むライブカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "N"
    },
    {
        "name": "国木田花丸",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-016-N",
        "effect": "支払ってもよい：ライブ終了時まで、を得る。",
        "rarity": "N"
    },
    {
        "name": "小原鞠莉",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-017-N",
        "effect": "支払ってもよい：ライブ終了時まで、を得る。",
        "rarity": "N"
    },
    {
        "name": "黒澤ルビィ",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "メンバー",
        "number": "PL!S-pb1-018-N",
        "effect": "支払ってもよい：ライブ終了時まで、を得る。",
        "rarity": "N"
    },
    {
        "name": "元気全開DAY！DAY！DAY！",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "ライブ",
        "number": "PL!S-pb1-019-L",
        "effect": "自分のステージにいる『Aqours』のメンバーが持つハートに、が合計6個以上ある場合、このカードの能力を無効にする。相手は、エネルギーデッキからエネルギーカードを1枚ウェイト状態で置く。",
        "rarity": "L"
    },
    {
        "name": "トリコリコPLEASE!!",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "ライブ",
        "number": "PL!S-pb1-020-L",
        "effect": "自分のステージにいる『Aqours』のメンバーが持つハートに、が合計10個以上ある場合、このカードのスコアを＋２する。",
        "rarity": "L"
    },
    {
        "name": "Strawberry Trapper",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "ライブ",
        "number": "PL!S-pb1-021-L",
        "effect": "自分のステージにいる『Aqours』のメンバーが持つハートに、が合計4個以上あり、このターン、相手が余剰のハートを持たずにライブを成功させていた場合、このカードのスコアを＋２する。",
        "rarity": "L"
    },
    {
        "name": "逃走迷走メビウスループ",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "ライブ",
        "number": "PL!S-pb1-022-L",
        "effect": "このターン、ライブに勝利するプレイヤーを決定するとき、自分と相手のライブの合計スコアが同じ場合、ライブ終了時まで、自分と相手は成功ライブカード置き場にカードを置くことができない。",
        "rarity": "L"
    },
    {
        "name": "逃走迷走メビウスループ",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "ライブ",
        "number": "PL!S-pb1-022-L＋",
        "effect": "このターン、ライブに勝利するプレイヤーを決定するとき、自分と相手のライブの合計スコアが同じ場合、ライブ終了時まで、自分と相手は成功ライブカード置き場にカードを置くことができない。",
        "rarity": "L＋"
    },
    {
        "name": "Next SPARKLING!!",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "ライブ",
        "number": "PL!S-pb1-023-L",
        "effect": "効果なし",
        "rarity": "L"
    },
    {
        "name": "Next SPARKLING!!",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "ライブ",
        "number": "PL!S-pb1-023-L＋",
        "effect": "効果なし",
        "rarity": "L＋"
    },
    {
        "name": "僕らの走ってきた道は・・・",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "ライブ",
        "number": "PL!S-pb1-024-L",
        "effect": "カードを2枚引き、手札を2枚控え室に置く。",
        "rarity": "L"
    },
    {
        "name": "高海千歌",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-025-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "高海千歌",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-025-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "桜内梨子",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-026-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "桜内梨子",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-026-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "松浦果南",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-027-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "松浦果南",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-027-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "黒澤ダイヤ",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-028-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "黒澤ダイヤ",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-028-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "渡辺 曜",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-029-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "渡辺 曜",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-029-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "津島善子",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-030-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "津島善子",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-030-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "国木田花丸",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-031-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "国木田花丸",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-031-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "小原鞠莉",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-032-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "小原鞠莉",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-032-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "黒澤ルビィ",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-033-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "黒澤ルビィ",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-033-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "高海千歌",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-034-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "桜内梨子",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-035-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "松浦果南",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-036-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "黒澤ダイヤ",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-037-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "渡辺 曜",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-038-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "津島善子",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-039-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "国木田花丸",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-040-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "小原鞠莉",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-041-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "黒澤ルビィ",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-042-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "高海千歌",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-043-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "桜内梨子",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-044-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "松浦果南",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-045-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "黒澤ダイヤ",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-046-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "渡辺 曜",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-047-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "津島善子",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-048-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "国木田花丸",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-049-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "小原鞠莉",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-050-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "黒澤ルビィ",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-051-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "高海千歌",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-052-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "高海千歌",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-052-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "CHIKA＆RIKO＆YOU",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-053-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "高海千歌",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-064-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "桜内梨子",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-065-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "松浦果南",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-066-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "黒澤ダイヤ",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-067-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "渡辺 曜",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-068-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "津島善子",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-069-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "国木田花丸",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-070-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "小原鞠莉",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-071-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "黒澤ルビィ",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-072-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "鹿角聖良",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-054-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "鹿角理亞",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-055-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "鹿角聖良",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-056-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "鹿角理亞",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-057-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "鹿角聖良",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-058-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "鹿角理亞",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-059-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "-",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-060-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "-",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-061-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "-",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-062-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "-",
        "product": "プレミアムブースター ラブライブ！サンシャイン!!",
        "type": "エネルギー",
        "number": "PL!S-pb1-063-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "高海千歌",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-001-R",
        "effect": "自分の成功ライブカード置き場のカードが0枚で、かつ相手の成功ライブカード置き場にカードが1枚以上ある場合、［ブレード］［ブレード］［ブレード］を得る。",
        "rarity": "R"
    },
    {
        "name": "高海千歌",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-001-P",
        "effect": "自分の成功ライブカード置き場のカードが0枚で、かつ相手の成功ライブカード置き場にカードが1枚以上ある場合、［ブレード］［ブレード］［ブレード］を得る。",
        "rarity": "P"
    },
    {
        "name": "桜内梨子",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-002-R",
        "effect": "このメンバーがステージから控え室に置かれたとき、手札を1枚控え室に置いてもよい。そうした場合、自分の控え室から『Aqours』のライブカードを1枚手札に加える。",
        "rarity": "R"
    },
    {
        "name": "桜内梨子",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-002-P",
        "effect": "このメンバーがステージから控え室に置かれたとき、手札を1枚控え室に置いてもよい。そうした場合、自分の控え室から『Aqours』のライブカードを1枚手札に加える。",
        "rarity": "P"
    },
    {
        "name": "松浦果南",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-003-R",
        "effect": "［ターン1回］エールにより公開された自分のカードの中にライブカードが1枚以上あるとき、ライブ終了時まで、［緑ハート］を得る。",
        "rarity": "R"
    },
    {
        "name": "松浦果南",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-003-P",
        "effect": "［ターン1回］エールにより公開された自分のカードの中にライブカードが1枚以上あるとき、ライブ終了時まで、［緑ハート］を得る。",
        "rarity": "P"
    },
    {
        "name": "黒澤ダイヤ",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-004-R",
        "effect": "［ターン1回］エールにより公開された自分のカードの中にライブカードがないとき、それらのカードをすべて控え室に置いてもよい。これにより1枚以上のカードが控え室に置かれた場合、そのエールで得たブレードハートを失い、もう一度エールを行う。",
        "rarity": "R"
    },
    {
        "name": "黒澤ダイヤ",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-004-P",
        "effect": "［ターン1回］エールにより公開された自分のカードの中にライブカードがないとき、それらのカードをすべて控え室に置いてもよい。これにより1枚以上のカードが控え室に置かれた場合、そのエールで得たブレードハートを失い、もう一度エールを行う。",
        "rarity": "P"
    },
    {
        "name": "渡辺 曜",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-005-R＋",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを7枚見る。その中からかかを持つメンバーカードを3枚まで公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "R＋"
    },
    {
        "name": "渡辺 曜",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-005-P",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを7枚見る。その中からかかを持つメンバーカードを3枚まで公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "P"
    },
    {
        "name": "渡辺 曜",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-005-P＋",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを7枚見る。その中からかかを持つメンバーカードを3枚まで公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "P＋"
    },
    {
        "name": "渡辺 曜",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-005-SEC",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを7枚見る。その中からかかを持つメンバーカードを3枚まで公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "SEC"
    },
    {
        "name": "津島善子",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-006-R",
        "effect": "支払ってもよい：自分の控え室から、コストの合計が4以下になるようにメンバーカードを2枚までステージに登場させる。",
        "rarity": "R"
    },
    {
        "name": "津島善子",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-006-P",
        "effect": "支払ってもよい：自分の控え室から、コストの合計が4以下になるようにメンバーカードを2枚までステージに登場させる。",
        "rarity": "P"
    },
    {
        "name": "国木田花丸",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-007-R＋",
        "effect": "［ターン1回］エールにより公開された自分のカードの中にライブカードが1枚以上あるとき、自分の手札が7枚以下の場合、カードを1枚引く。\\n手札のライブカードを1枚公開し、デッキの一番下に置いてもよい：自分のデッキの上からカードを2枚見る。その中から好きな枚数を好きな順番でデッキの上に置き、残りを控え室に置く。",
        "rarity": "R＋"
    },
    {
        "name": "国木田花丸",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-007-P",
        "effect": "［ターン1回］エールにより公開された自分のカードの中にライブカードが1枚以上あるとき、自分の手札が7枚以下の場合、カードを1枚引く。\\n手札のライブカードを1枚公開し、デッキの一番下に置いてもよい：自分のデッキの上からカードを2枚見る。その中から好きな枚数を好きな順番でデッキの上に置き、残りを控え室に置く。",
        "rarity": "P"
    },
    {
        "name": "国木田花丸",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-007-P＋",
        "effect": "［ターン1回］エールにより公開された自分のカードの中にライブカードが1枚以上あるとき、自分の手札が7枚以下の場合、カードを1枚引く。\\n手札のライブカードを1枚公開し、デッキの一番下に置いてもよい：自分のデッキの上からカードを2枚見る。その中から好きな枚数を好きな順番でデッキの上に置き、残りを控え室に置く。",
        "rarity": "P＋"
    },
    {
        "name": "国木田花丸",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-007-SEC",
        "effect": "［ターン1回］エールにより公開された自分のカードの中にライブカードが1枚以上あるとき、自分の手札が7枚以下の場合、カードを1枚引く。\\n手札のライブカードを1枚公開し、デッキの一番下に置いてもよい：自分のデッキの上からカードを2枚見る。その中から好きな枚数を好きな順番でデッキの上に置き、残りを控え室に置く。",
        "rarity": "SEC"
    },
    {
        "name": "小原鞠莉",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-008-R＋",
        "effect": "自分の控え室からライブカードを1枚までデッキの一番下に置く。\\n自分のステージのエリアすべてに『Aqours』のメンバーが登場しており、かつ名前が異なる場合、「エールにより公開された自分のカードの中にライブカードが1枚以上ある場合、ライブの合計スコアを＋１する。ライブカードが3枚以上ある場合、代わりに合計スコアを＋２する。」を得る。",
        "rarity": "R＋"
    },
    {
        "name": "小原鞠莉",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-008-P",
        "effect": "自分の控え室からライブカードを1枚までデッキの一番下に置く。\\n自分のステージのエリアすべてに『Aqours』のメンバーが登場しており、かつ名前が異なる場合、「エールにより公開された自分のカードの中にライブカードが1枚以上ある場合、ライブの合計スコアを＋１する。ライブカードが3枚以上ある場合、代わりに合計スコアを＋２する。」を得る。",
        "rarity": "P"
    },
    {
        "name": "小原鞠莉",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-008-P＋",
        "effect": "自分の控え室からライブカードを1枚までデッキの一番下に置く。\\n自分のステージのエリアすべてに『Aqours』のメンバーが登場しており、かつ名前が異なる場合、「エールにより公開された自分のカードの中にライブカードが1枚以上ある場合、ライブの合計スコアを＋１する。ライブカードが3枚以上ある場合、代わりに合計スコアを＋２する。」を得る。",
        "rarity": "P＋"
    },
    {
        "name": "小原鞠莉",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-008-SEC",
        "effect": "自分の控え室からライブカードを1枚までデッキの一番下に置く。\\n自分のステージのエリアすべてに『Aqours』のメンバーが登場しており、かつ名前が異なる場合、「エールにより公開された自分のカードの中にライブカードが1枚以上ある場合、ライブの合計スコアを＋１する。ライブカードが3枚以上ある場合、代わりに合計スコアを＋２する。」を得る。",
        "rarity": "SEC"
    },
    {
        "name": "黒澤ルビィ",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-009-R",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "R"
    },
    {
        "name": "黒澤ルビィ",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-009-P",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "P"
    },
    {
        "name": "高海千歌",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-010-N",
        "effect": "カードを2枚引き、手札を2枚控え室に置く。",
        "rarity": "N"
    },
    {
        "name": "桜内梨子",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-011-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "松浦果南",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-012-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "黒澤ダイヤ",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-013-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "渡辺 曜",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-014-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "津島善子",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-015-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "国木田花丸",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-016-N",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からメンバーカードを1枚手札に加える。",
        "rarity": "N"
    },
    {
        "name": "小原鞠莉",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-017-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "黒澤ルビィ",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!S-bp2-018-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "WATER BLUE NEW WORLD",
        "product": "ブースターパック NEXT STEP",
        "type": "ライブ",
        "number": "PL!S-bp2-019-L",
        "effect": "効果なし",
        "rarity": "L"
    },
    {
        "name": "DREAMY COLOR",
        "product": "ブースターパック NEXT STEP",
        "type": "ライブ",
        "number": "PL!S-bp2-020-L",
        "effect": "効果なし",
        "rarity": "L"
    },
    {
        "name": "未体験HORIZON",
        "product": "ブースターパック NEXT STEP",
        "type": "ライブ",
        "number": "PL!S-bp2-021-L",
        "effect": "エールにより公開された自分のカードの中から、ライブカードを1枚までデッキの一番下に置く。",
        "rarity": "L"
    },
    {
        "name": "未熟DREAMER",
        "product": "ブースターパック NEXT STEP",
        "type": "ライブ",
        "number": "PL!S-bp2-022-L",
        "effect": "このターン、自分のデッキがリフレッシュしていた場合、このカードのスコアを＋２する。",
        "rarity": "L"
    },
    {
        "name": "MY舞☆TONIGHT",
        "product": "ブースターパック NEXT STEP",
        "type": "ライブ",
        "number": "PL!S-bp2-023-L",
        "effect": "自分のライブカード置き場に「MY舞☆TONIGHT」以外の『Aqours』のライブカードがある場合、ライブ終了時まで、自分のステージのメンバーはを得る。",
        "rarity": "L"
    },
    {
        "name": "君のこころは輝いてるかい？",
        "product": "ブースターパック NEXT STEP",
        "type": "ライブ",
        "number": "PL!S-bp2-024-L",
        "effect": "このカードは成功ライブカード置き場に置くことができない。\\nカードを2枚引き、手札を1枚控え室に置く。",
        "rarity": "L"
    },
    {
        "name": "青空Jumping Heart",
        "product": "ブースターパック NEXT STEP",
        "type": "ライブ",
        "number": "PL!S-bp2-025-L",
        "effect": "自分の成功ライブカード置き場にカードが2枚以上ある場合、ライブ終了時まで、自分のステージにいるメンバー1人は、を得る。",
        "rarity": "L"
    },
    {
        "name": "ユメ語るよりユメ歌おう",
        "product": "ブースターパック NEXT STEP",
        "type": "ライブ",
        "number": "PL!S-bp2-026-L",
        "effect": "効果なし",
        "rarity": "L"
    },
    {
        "name": "渡辺 曜",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!S-bp2-027-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "国木田花丸",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!S-bp2-028-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "小原鞠莉",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!S-bp2-029-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "SAKURAUCHI RIKO",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!S-bp2-030-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "SAKURAUCHI RIKO",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!S-bp2-030-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "MATSUURA KANAN",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!S-bp2-031-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "MATSUURA KANAN",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!S-bp2-031-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "KUROSAWA DIA",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!S-bp2-032-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "KUROSAWA DIA",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!S-bp2-032-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "TSUSHIMA YOSHIKO",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!S-bp2-033-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "TSUSHIMA YOSHIKO",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!S-bp2-033-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!S-bp2-100-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!S-bp2-200-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "澁谷かのん",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-001-R＋",
        "effect": "自分のステージにいる『Liella!』のメンバー1人のすべての能力を、ライブ終了時まで、無効にしてもよい。これにより無効にした場合、自分の控え室から『Liella!』のカードを1枚手札に加える。",
        "rarity": "R＋"
    },
    {
        "name": "澁谷かのん",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-001-P",
        "effect": "自分のステージにいる『Liella!』のメンバー1人のすべての能力を、ライブ終了時まで、無効にしてもよい。これにより無効にした場合、自分の控え室から『Liella!』のカードを1枚手札に加える。",
        "rarity": "P"
    },
    {
        "name": "澁谷かのん",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-001-P＋",
        "effect": "自分のステージにいる『Liella!』のメンバー1人のすべての能力を、ライブ終了時まで、無効にしてもよい。これにより無効にした場合、自分の控え室から『Liella!』のカードを1枚手札に加える。",
        "rarity": "P＋"
    },
    {
        "name": "澁谷かのん",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-001-SEC",
        "effect": "自分のステージにいる『Liella!』のメンバー1人のすべての能力を、ライブ終了時まで、無効にしてもよい。これにより無効にした場合、自分の控え室から『Liella!』のカードを1枚手札に加える。",
        "rarity": "SEC"
    },
    {
        "name": "唐 可可",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-002-R",
        "effect": "自分のデッキの上からカードを3枚見る。その中からコスト11以上のカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "R"
    },
    {
        "name": "唐 可可",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-002-P",
        "effect": "自分のデッキの上からカードを3枚見る。その中からコスト11以上のカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "P"
    },
    {
        "name": "嵐 千砂都",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-003-R",
        "effect": "このメンバーがエリアを移動したとき、自分のエネルギーデッキから、エネルギーカードを1枚ウェイト状態で置く。",
        "rarity": "R"
    },
    {
        "name": "嵐 千砂都",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-003-P",
        "effect": "このメンバーがエリアを移動したとき、自分のエネルギーデッキから、エネルギーカードを1枚ウェイト状態で置く。",
        "rarity": "P"
    },
    {
        "name": "平安名すみれ",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-004-R",
        "effect": "自分のステージにいるメンバーのうち、センターエリアにいるメンバーが最も大きいコストを持つ場合、を得る。",
        "rarity": "R"
    },
    {
        "name": "平安名すみれ",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-004-P",
        "effect": "自分のステージにいるメンバーのうち、センターエリアにいるメンバーが最も大きいコストを持つ場合、を得る。",
        "rarity": "P"
    },
    {
        "name": "葉月 恋",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-005-R",
        "effect": "支払ってもよい：自分のデッキの上からカードを7枚見る。その中から『Liella!』のカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "R"
    },
    {
        "name": "葉月 恋",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-005-P",
        "effect": "支払ってもよい：自分のデッキの上からカードを7枚見る。その中から『Liella!』のカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "P"
    },
    {
        "name": "桜小路きな子",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-006-R＋",
        "effect": "バトンタッチして登場した場合、このバトンタッチで控え室に置かれた『Liella!』のメンバーカードを1枚手札に加える。\\n手札のコスト4以下の『Liella!』のメンバーカードを1枚控え室に置く：これにより控え室に置いたメンバーカードの能力1つを発動させる。\\n(能力がコストを持つ場合、支払って発動させる。)",
        "rarity": "R＋"
    },
    {
        "name": "桜小路きな子",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-006-P",
        "effect": "バトンタッチして登場した場合、このバトンタッチで控え室に置かれた『Liella!』のメンバーカードを1枚手札に加える。\\n手札のコスト4以下の『Liella!』のメンバーカードを1枚控え室に置く：これにより控え室に置いたメンバーカードの能力1つを発動させる。\\n(能力がコストを持つ場合、支払って発動させる。)",
        "rarity": "P"
    },
    {
        "name": "桜小路きな子",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-006-P＋",
        "effect": "バトンタッチして登場した場合、このバトンタッチで控え室に置かれた『Liella!』のメンバーカードを1枚手札に加える。\\n手札のコスト4以下の『Liella!』のメンバーカードを1枚控え室に置く：これにより控え室に置いたメンバーカードの能力1つを発動させる。\\n(能力がコストを持つ場合、支払って発動させる。)",
        "rarity": "P＋"
    },
    {
        "name": "桜小路きな子",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-006-SEC",
        "effect": "バトンタッチして登場した場合、このバトンタッチで控え室に置かれた『Liella!』のメンバーカードを1枚手札に加える。\\n手札のコスト4以下の『Liella!』のメンバーカードを1枚控え室に置く：これにより控え室に置いたメンバーカードの能力1つを発動させる。\\n(能力がコストを持つ場合、支払って発動させる。)",
        "rarity": "SEC"
    },
    {
        "name": "米女メイ",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-007-R",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを5枚見る。その中から『Liella!』のメンバーカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "R"
    },
    {
        "name": "米女メイ",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-007-P",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを5枚見る。その中から『Liella!』のメンバーカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "P"
    },
    {
        "name": "若菜四季",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-008-R",
        "effect": "：このメンバーがいるエリアとは別の自分のエリア1つを選ぶ。このメンバーをそのエリアに移動する。選んだエリアにメンバーがいる場合、そのメンバーは、このメンバーがいたエリアに移動させる。",
        "rarity": "R"
    },
    {
        "name": "若菜四季",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-008-P",
        "effect": "：このメンバーがいるエリアとは別の自分のエリア1つを選ぶ。このメンバーをそのエリアに移動する。選んだエリアにメンバーがいる場合、そのメンバーは、このメンバーがいたエリアに移動させる。",
        "rarity": "P"
    },
    {
        "name": "鬼塚夏美",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-009-R＋",
        "effect": "ライブ終了時まで、自分の手札2枚につき、を得る。\\nカードを2枚引き、手札を1枚控え室に置く。",
        "rarity": "R＋"
    },
    {
        "name": "鬼塚夏美",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-009-P",
        "effect": "ライブ終了時まで、自分の手札2枚につき、を得る。\\nカードを2枚引き、手札を1枚控え室に置く。",
        "rarity": "P"
    },
    {
        "name": "鬼塚夏美",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-009-P＋",
        "effect": "ライブ終了時まで、自分の手札2枚につき、を得る。\\nカードを2枚引き、手札を1枚控え室に置く。",
        "rarity": "P＋"
    },
    {
        "name": "鬼塚夏美",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-009-SEC",
        "effect": "ライブ終了時まで、自分の手札2枚につき、を得る。\\nカードを2枚引き、手札を1枚控え室に置く。",
        "rarity": "SEC"
    },
    {
        "name": "ウィーン・マルガレーテ",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-010-R＋",
        "effect": "相手のライブカード置き場にあるすべてのライブカードは、成功させるための必要ハートが多くなる。\\n自分のステージにこのメンバー以外のメンバーが1人以上いる場合、ライブ終了時まで、エールによって公開される自分のカードの枚数が8枚減る。",
        "rarity": "R＋"
    },
    {
        "name": "ウィーン・マルガレーテ",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-010-P",
        "effect": "相手のライブカード置き場にあるすべてのライブカードは、成功させるための必要ハートが多くなる。\\n自分のステージにこのメンバー以外のメンバーが1人以上いる場合、ライブ終了時まで、エールによって公開される自分のカードの枚数が8枚減る。",
        "rarity": "P"
    },
    {
        "name": "ウィーン・マルガレーテ",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-010-P＋",
        "effect": "相手のライブカード置き場にあるすべてのライブカードは、成功させるための必要ハートが多くなる。\\n自分のステージにこのメンバー以外のメンバーが1人以上いる場合、ライブ終了時まで、エールによって公開される自分のカードの枚数が8枚減る。",
        "rarity": "P＋"
    },
    {
        "name": "ウィーン・マルガレーテ",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-010-SEC",
        "effect": "相手のライブカード置き場にあるすべてのライブカードは、成功させるための必要ハートが多くなる。\\n自分のステージにこのメンバー以外のメンバーが1人以上いる場合、ライブ終了時まで、エールによって公開される自分のカードの枚数が8枚減る。",
        "rarity": "SEC"
    },
    {
        "name": "鬼塚冬毬",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-011-R",
        "effect": "自分の控え室にある、カード名の異なるライブカードを2枚選ぶ。そうした場合、相手はそれらのカードのうち1枚を選ぶ。これにより相手に選ばれたカードを自分の手札に加える。",
        "rarity": "R"
    },
    {
        "name": "鬼塚冬毬",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-011-P",
        "effect": "自分の控え室にある、カード名の異なるライブカードを2枚選ぶ。そうした場合、相手はそれらのカードのうち1枚を選ぶ。これにより相手に選ばれたカードを自分の手札に加える。",
        "rarity": "P"
    },
    {
        "name": "澁谷かのん",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-012-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "唐 可可",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-013-N",
        "effect": "自分の控え室からカードを1枚までデッキの一番上に置く。",
        "rarity": "N"
    },
    {
        "name": "嵐 千砂都",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-014-N",
        "effect": "自分の控え室からカードを1枚までデッキの一番上に置く。",
        "rarity": "N"
    },
    {
        "name": "平安名すみれ",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-015-N",
        "effect": "エールにより公開された自分のカードの中にブレードハートを持つカードがないとき、ライブ終了時まで、を得る。",
        "rarity": "N"
    },
    {
        "name": "葉月 恋",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-016-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "桜小路きな子",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-017-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "米女メイ",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-018-N",
        "effect": "自分の控え室からカードを1枚までデッキの一番上に置く。",
        "rarity": "N"
    },
    {
        "name": "若菜四季",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-019-N",
        "effect": "支払ってもよい：ライブ終了時まで、を得る。",
        "rarity": "N"
    },
    {
        "name": "鬼塚夏美",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-020-N",
        "effect": "エールにより公開された自分のカードの中にブレードハートを持つカードがないとき、ライブ終了時まで、を得る。",
        "rarity": "N"
    },
    {
        "name": "ウィーン・マルガレーテ",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-021-N",
        "effect": "エールにより公開された自分のカードの中にブレードハートを持つカードがないとき、ライブ終了時まで、を得る。",
        "rarity": "N"
    },
    {
        "name": "鬼塚冬毬",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!SP-bp2-022-N",
        "effect": "支払ってもよい：ライブ終了時まで、を得る。",
        "rarity": "N"
    },
    {
        "name": "Go!! リスタート",
        "product": "ブースターパック NEXT STEP",
        "type": "ライブ",
        "number": "PL!SP-bp2-023-L",
        "effect": "自分の成功ライブカード置き場のカード枚数が相手より少ない場合、このカードのスコアを＋１する。",
        "rarity": "L"
    },
    {
        "name": "ビタミンSUMMER!",
        "product": "ブースターパック NEXT STEP",
        "type": "ライブ",
        "number": "PL!SP-bp2-024-L",
        "effect": "自分の手札の枚数が相手より多い場合、このカードのスコアを＋１する。",
        "rarity": "L"
    },
    {
        "name": "Bubble Rise",
        "product": "ブースターパック NEXT STEP",
        "type": "ライブ",
        "number": "PL!SP-bp2-025-L",
        "effect": "自分のステージに「澁谷かのん」、「ウィーン・マルガレーテ」、「鬼塚冬毬」のうち、名前の異なるメンバーが2人以上いる場合、エールにより公開された自分のカードの中から、カードを1枚手札に加える。",
        "rarity": "L"
    },
    {
        "name": "笑顔のPromise",
        "product": "ブースターパック NEXT STEP",
        "type": "ライブ",
        "number": "PL!SP-bp2-026-L",
        "effect": "効果なし",
        "rarity": "L"
    },
    {
        "name": "UNIVERSE!!",
        "product": "ブースターパック NEXT STEP",
        "type": "ライブ",
        "number": "PL!SP-bp2-027-L",
        "effect": "効果なし",
        "rarity": "L"
    },
    {
        "name": "澁谷かのん",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!SP-bp2-028-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "桜小路きな子",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!SP-bp2-029-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "鬼塚夏美",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!SP-bp2-030-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "ウィーン・マルガレーテ",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!SP-bp2-031-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "TANG KEKE",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!SP-bp2-032-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "TANG KEKE",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!SP-bp2-032-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "YONEME MEI",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!SP-bp2-033-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "YONEME MEI",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!SP-bp2-033-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "WAKAMA SHIKI",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!SP-bp2-034-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "WAKAMA SHIKI",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!SP-bp2-034-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "WIEN MARUGARETE",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!SP-bp2-035-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "WIEN MARUGARETE",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!SP-bp2-035-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!SP-bp2-100-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!SP-bp2-200-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "日野下花帆",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-001-R",
        "effect": "：自分の控え室からスコア3以下の『蓮ノ空』のライブカードを1枚手札に加える。",
        "rarity": "R"
    },
    {
        "name": "日野下花帆",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-001-P",
        "effect": "：自分の控え室からスコア3以下の『蓮ノ空』のライブカードを1枚手札に加える。",
        "rarity": "P"
    },
    {
        "name": "村野さやか",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-002-R＋",
        "effect": "自分の控え室からコスト2以下のメンバーカードを2枚まで手札に加える。\\n自分のステージに、このメンバーよりコストの大きいメンバーがいる場合、を得る。",
        "rarity": "R＋"
    },
    {
        "name": "村野さやか",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-002-P",
        "effect": "自分の控え室からコスト2以下のメンバーカードを2枚まで手札に加える。\\n自分のステージに、このメンバーよりコストの大きいメンバーがいる場合、を得る。",
        "rarity": "P"
    },
    {
        "name": "村野さやか",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-002-P＋",
        "effect": "自分の控え室からコスト2以下のメンバーカードを2枚まで手札に加える。\\n自分のステージに、このメンバーよりコストの大きいメンバーがいる場合、を得る。",
        "rarity": "P＋"
    },
    {
        "name": "村野さやか",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-002-SEC",
        "effect": "自分の控え室からコスト2以下のメンバーカードを2枚まで手札に加える。\\n自分のステージに、このメンバーよりコストの大きいメンバーがいる場合、を得る。",
        "rarity": "SEC"
    },
    {
        "name": "乙宗 梢",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-003-R",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを3枚見る。その中から好きな枚数を好きな順番でデッキの上に置き、残りを控え室に置く。",
        "rarity": "R"
    },
    {
        "name": "乙宗 梢",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-003-P",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを3枚見る。その中から好きな枚数を好きな順番でデッキの上に置き、残りを控え室に置く。",
        "rarity": "P"
    },
    {
        "name": "夕霧綴理",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-004-R",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "R"
    },
    {
        "name": "夕霧綴理",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-004-P",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "P"
    },
    {
        "name": "大沢瑠璃乃",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-005-R＋",
        "effect": "手札を1枚控え室に置いてもよい：自分のステージにほかのメンバーがいる場合、自分の控え室から『みらくらぱーく！』のカードを1枚手札に加える。\\n支払ってもよい：自分のステージのエリアすべてにメンバーが登場している場合、ライブ終了時まで、を得る。",
        "rarity": "R＋"
    },
    {
        "name": "大沢瑠璃乃",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-005-P",
        "effect": "手札を1枚控え室に置いてもよい：自分のステージにほかのメンバーがいる場合、自分の控え室から『みらくらぱーく！』のカードを1枚手札に加える。\\n支払ってもよい：自分のステージのエリアすべてにメンバーが登場している場合、ライブ終了時まで、を得る。",
        "rarity": "P"
    },
    {
        "name": "大沢瑠璃乃",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-005-P＋",
        "effect": "手札を1枚控え室に置いてもよい：自分のステージにほかのメンバーがいる場合、自分の控え室から『みらくらぱーく！』のカードを1枚手札に加える。\\n支払ってもよい：自分のステージのエリアすべてにメンバーが登場している場合、ライブ終了時まで、を得る。",
        "rarity": "P＋"
    },
    {
        "name": "大沢瑠璃乃",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-005-SEC",
        "effect": "手札を1枚控え室に置いてもよい：自分のステージにほかのメンバーがいる場合、自分の控え室から『みらくらぱーく！』のカードを1枚手札に加える。\\n支払ってもよい：自分のステージのエリアすべてにメンバーが登場している場合、ライブ終了時まで、を得る。",
        "rarity": "SEC"
    },
    {
        "name": "藤島 慈",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-006-R",
        "effect": "自分のステージにいるメンバーを、それぞれ好きなエリアに移動させてもよい。\\n自分のステージにいるほかの『みらくらぱーく！』のメンバー1人につき、を得る。",
        "rarity": "R"
    },
    {
        "name": "藤島 慈",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-006-P",
        "effect": "自分のステージにいるメンバーを、それぞれ好きなエリアに移動させてもよい。\\n自分のステージにいるほかの『みらくらぱーく！』のメンバー1人につき、を得る。",
        "rarity": "P"
    },
    {
        "name": "百生 吟子",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-007-R＋",
        "effect": "このメンバーよりコストが低い『スリーズブーケ』のメンバーからバトンタッチして登場した場合、自分の控え室から『蓮ノ空』のライブカードを1枚手札に加える。\\n手札を1枚控え室に置いてもよい：これにより控え室に置いたカードがメンバーカードの場合、控え室に置いたカードと同じ名前を持つメンバー1人は、ライブ終了時まで、を得る。",
        "rarity": "R＋"
    },
    {
        "name": "百生 吟子",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-007-P",
        "effect": "このメンバーよりコストが低い『スリーズブーケ』のメンバーからバトンタッチして登場した場合、自分の控え室から『蓮ノ空』のライブカードを1枚手札に加える。\\n手札を1枚控え室に置いてもよい：これにより控え室に置いたカードがメンバーカードの場合、控え室に置いたカードと同じ名前を持つメンバー1人は、ライブ終了時まで、を得る。",
        "rarity": "P"
    },
    {
        "name": "百生 吟子",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-007-P＋",
        "effect": "このメンバーよりコストが低い『スリーズブーケ』のメンバーからバトンタッチして登場した場合、自分の控え室から『蓮ノ空』のライブカードを1枚手札に加える。\\n手札を1枚控え室に置いてもよい：これにより控え室に置いたカードがメンバーカードの場合、控え室に置いたカードと同じ名前を持つメンバー1人は、ライブ終了時まで、を得る。",
        "rarity": "P＋"
    },
    {
        "name": "百生 吟子",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-007-SEC",
        "effect": "このメンバーよりコストが低い『スリーズブーケ』のメンバーからバトンタッチして登場した場合、自分の控え室から『蓮ノ空』のライブカードを1枚手札に加える。\\n手札を1枚控え室に置いてもよい：これにより控え室に置いたカードがメンバーカードの場合、控え室に置いたカードと同じ名前を持つメンバー1人は、ライブ終了時まで、を得る。",
        "rarity": "SEC"
    },
    {
        "name": "徒町 小鈴",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-008-R",
        "effect": "このメンバーよりコストが低い『DOLLCHESTRA』のメンバーからバトンタッチして登場した場合、ライブ終了時まで、を得る。",
        "rarity": "R"
    },
    {
        "name": "徒町 小鈴",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-008-P",
        "effect": "このメンバーよりコストが低い『DOLLCHESTRA』のメンバーからバトンタッチして登場した場合、ライブ終了時まで、を得る。",
        "rarity": "P"
    },
    {
        "name": "安養寺 姫芽",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-009-R",
        "effect": "支払ってもよい：このメンバーよりコストが低い『みらくらぱーく！』のメンバーからバトンタッチして登場した場合、ライブ終了時まで、を得る。",
        "rarity": "R"
    },
    {
        "name": "安養寺 姫芽",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-009-P",
        "effect": "支払ってもよい：このメンバーよりコストが低い『みらくらぱーく！』のメンバーからバトンタッチして登場した場合、ライブ終了時まで、を得る。",
        "rarity": "P"
    },
    {
        "name": "日野下花帆",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-010-N",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを5枚見る。その中からメンバーカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "N"
    },
    {
        "name": "村野さやか",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-011-N",
        "effect": "デッキの上からカードを5枚控え室に置く。",
        "rarity": "N"
    },
    {
        "name": "乙宗 梢",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-012-N",
        "effect": "このメンバーがステージから控え室に置かれたとき、自分のデッキの上からカードを5枚見る。その中からメンバーカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "N"
    },
    {
        "name": "夕霧綴理",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-013-N",
        "effect": "このメンバーがステージから控え室に置かれたとき、自分のデッキの上からカードを5枚見る。その中からライブカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "N"
    },
    {
        "name": "大沢瑠璃乃",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-014-N",
        "effect": "カードを1枚引く。ライブ終了時まで、自分はライブできない。",
        "rarity": "N"
    },
    {
        "name": "藤島 慈",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-015-N",
        "effect": "このメンバーがステージから控え室に置かれたとき、カードを2枚引き、手札を1枚控え室に置く。",
        "rarity": "N"
    },
    {
        "name": "百生 吟子",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-016-N",
        "effect": "自分のデッキの上からカードを2枚見る。その中から好きな枚数を好きな順番でデッキの上に置き、残りを控え室に置く。",
        "rarity": "N"
    },
    {
        "name": "徒町 小鈴",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-017-N",
        "effect": "自分の控え室にカードが10枚以上ある場合、カードを1枚引く。",
        "rarity": "N"
    },
    {
        "name": "安養寺 姫芽",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "PL!HS-bp2-018-N",
        "effect": "自分のメインフェイズの場合、支払ってもよい：自分の控え室からライブカードを1枚、表向きでライブカード置き場に置く。次のライブカードセットフェイズで自分がライブカード置き場に置けるカード枚数の上限が1枚減る。",
        "rarity": "N"
    },
    {
        "name": "Bloom the smile",
        "product": "ブースターパック NEXT STEP",
        "type": "ライブ",
        "number": "PL!HS-bp2-019-L",
        "effect": "自分のステージに『蓮ノ空』のメンバーがいる場合、このカードを成功させるための必要ハートは、か、か、のうち、選んだ1つにしてもよい。",
        "rarity": "L"
    },
    {
        "name": "Link to the FUTURE",
        "product": "ブースターパック NEXT STEP",
        "type": "ライブ",
        "number": "PL!HS-bp2-020-L",
        "effect": "すべての領域にあるこのカードは『スリーズブーケ』、『DOLLCHESTRA』、『みらくらぱーく！』として扱う。\\n自分のステージにいる名前の異なる『蓮ノ空』のメンバー1人につき、このカードのスコアを＋２する。",
        "rarity": "L"
    },
    {
        "name": "眩耀夜行",
        "product": "ブースターパック NEXT STEP",
        "type": "ライブ",
        "number": "PL!HS-bp2-021-L",
        "effect": "自分のステージに、このターン中にバトンタッチして登場した『蓮ノ空』のメンバーが2人以上いる場合、このカードを成功させるための必要ハートを減らす。",
        "rarity": "L"
    },
    {
        "name": "アオクハルカ",
        "product": "ブースターパック NEXT STEP",
        "type": "ライブ",
        "number": "PL!HS-bp2-022-L",
        "effect": "自分の控え室に『スリーズブーケ』のライブカードが3枚以上ある場合、このカードのスコアを＋１する。",
        "rarity": "L"
    },
    {
        "name": "Mirage Voyage",
        "product": "ブースターパック NEXT STEP",
        "type": "ライブ",
        "number": "PL!HS-bp2-023-L",
        "effect": "自分のステージに、このターン中にバトンタッチして登場した『蓮ノ空』のメンバーが2人以上いる場合、このカードを成功させるための必要ハートを減らす。",
        "rarity": "L"
    },
    {
        "name": "レディバグ",
        "product": "ブースターパック NEXT STEP",
        "type": "ライブ",
        "number": "PL!HS-bp2-024-L",
        "effect": "自分のステージに「徒町小鈴」が登場しており、かつ「徒町小鈴」よりコストの大きい「村野さやか」が登場している場合、このカードを成功させるための必要ハートを減らす。",
        "rarity": "L"
    },
    {
        "name": "ココン東西",
        "product": "ブースターパック NEXT STEP",
        "type": "ライブ",
        "number": "PL!HS-bp2-025-L",
        "effect": "自分のステージに、このターン中にバトンタッチして登場した『蓮ノ空』のメンバーが2人以上いる場合、このカードを成功させるための必要ハートを減らす。",
        "rarity": "L"
    },
    {
        "name": "みらくりえーしょん",
        "product": "ブースターパック NEXT STEP",
        "type": "ライブ",
        "number": "PL!HS-bp2-026-L",
        "effect": "自分のステージの右サイドエリアに「大沢瑠璃乃」が、左サイドエリアに「安養寺姫芽」が、センターエリアに「藤島 慈」がそれぞれ登場している場合、このカードのスコアを＋２する。",
        "rarity": "L"
    },
    {
        "name": "村野さやか",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!HS-bp2-027-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "大沢瑠璃乃",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!HS-bp2-028-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "百生 吟子",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!HS-bp2-029-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "MURANO SAYAKA",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!HS-bp2-030-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "MURANO SAYAKA",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!HS-bp2-030-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "OSAWA RURINO",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!HS-bp2-031-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "OSAWA RURINO",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!HS-bp2-031-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "MOMOSE GINKO",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!HS-bp2-032-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "MOMOSE GINKO",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!HS-bp2-032-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "KACHIMACHI KOSUZU",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!HS-bp2-033-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "KACHIMACHI KOSUZU",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!HS-bp2-033-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!HS-bp2-100-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "",
        "product": "ブースターパック NEXT STEP",
        "type": "エネルギー",
        "number": "PL!HS-bp2-200-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "渡辺 曜&鬼塚夏美&大沢瑠璃乃",
        "product": "ブースターパック NEXT STEP",
        "type": "メンバー",
        "number": "LL-bp2-001-R＋",
        "effect": "手札にあるこのメンバーカードのコストは、このカード以外の自分の手札1枚につき、1少なくなる。\\nこのメンバーはバトンタッチで控え室に置けない。\\n手札の「渡辺 曜」と「鬼塚夏美」と「大沢瑠璃乃」を、好きな枚数控え室に置いてもよい：ライブ終了時まで、これによって控え室に置いた枚数1枚につき、を得る。\\n（手札のこのカードもこの効果で控え室に置ける。）",
        "rarity": "R＋"
    },
    {
        "name": "Starlight Prologue",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "ライブ",
        "number": "PL!SP-bp1-025-L＋",
        "effect": "効果なし",
        "rarity": "L＋"
    },
    {
        "name": "澁谷かのん",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-001-R",
        "effect": "支払わないかぎり、自分の手札を2枚控え室に置く。\\n支払ってもよい：ライブの合計スコアを＋１する。",
        "rarity": "R"
    },
    {
        "name": "澁谷かのん",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-001-P＋",
        "effect": "支払わないかぎり、自分の手札を2枚控え室に置く。\\n支払ってもよい：ライブの合計スコアを＋１する。",
        "rarity": "P＋"
    },
    {
        "name": "唐 可可",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-002-R",
        "effect": "自分のエネルギーが12枚以上ある場合、ライブの合計スコアを＋１する。",
        "rarity": "R"
    },
    {
        "name": "唐 可可",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-002-P＋",
        "effect": "自分のエネルギーが12枚以上ある場合、ライブの合計スコアを＋１する。",
        "rarity": "P＋"
    },
    {
        "name": "嵐 千砂都",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-003-R",
        "effect": "自分のステージにいるメンバーが『5yncri5e!』のみの場合、自分と対戦相手は、センターエリアのメンバーを左サイドエリアに、左サイドエリアのメンバーを右サイドエリアに、右サイドエリアのメンバーをセンターエリアに、それぞれ移動させる。",
        "rarity": "R"
    },
    {
        "name": "嵐 千砂都",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-003-P＋",
        "effect": "自分のステージにいるメンバーが『5yncri5e!』のみの場合、自分と対戦相手は、センターエリアのメンバーを左サイドエリアに、左サイドエリアのメンバーを右サイドエリアに、右サイドエリアのメンバーをセンターエリアに、それぞれ移動させる。",
        "rarity": "P＋"
    },
    {
        "name": "平安名すみれ",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-004-R",
        "effect": "支払ってもよい：自分のエネルギーデッキから、エネルギーカードを1枚ウェイト状態で置く。\\n支払ってもよい：カードを1枚引く。",
        "rarity": "R"
    },
    {
        "name": "平安名すみれ",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-004-P＋",
        "effect": "支払ってもよい：自分のエネルギーデッキから、エネルギーカードを1枚ウェイト状態で置く。\\n支払ってもよい：カードを1枚引く。",
        "rarity": "P＋"
    },
    {
        "name": "葉月 恋",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-005-R",
        "effect": "自分のエネルギーデッキから、エネルギーカードを1枚ウェイト状態で置く。",
        "rarity": "R"
    },
    {
        "name": "葉月 恋",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-005-P＋",
        "effect": "自分のエネルギーデッキから、エネルギーカードを1枚ウェイト状態で置く。",
        "rarity": "P＋"
    },
    {
        "name": "桜小路きな子",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-006-R",
        "effect": "このメンバーが登場か、エリアを移動するたび、ライブ終了時まで、を得る。\\n(対戦相手のカードの効果でも発動する。)",
        "rarity": "R"
    },
    {
        "name": "桜小路きな子",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-006-P＋",
        "effect": "このメンバーが登場か、エリアを移動するたび、ライブ終了時まで、を得る。\\n(対戦相手のカードの効果でも発動する。)",
        "rarity": "P＋"
    },
    {
        "name": "米女メイ",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-007-R",
        "effect": "エネルギーを2枚アクティブにする。",
        "rarity": "R"
    },
    {
        "name": "米女メイ",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-007-P＋",
        "effect": "エネルギーを2枚アクティブにする。",
        "rarity": "P＋"
    },
    {
        "name": "若菜四季",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-008-R",
        "effect": "カードを1枚引く。その後、登場したエリアとは別の自分のエリア1つを選ぶ。このメンバーをそのエリアに移動する。選んだエリアにメンバーがいる場合、そのメンバーは、このメンバーがいたエリアに移動させる。",
        "rarity": "R"
    },
    {
        "name": "若菜四季",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-008-P＋",
        "effect": "カードを1枚引く。その後、登場したエリアとは別の自分のエリア1つを選ぶ。このメンバーをそのエリアに移動する。選んだエリアにメンバーがいる場合、そのメンバーは、このメンバーがいたエリアに移動させる。",
        "rarity": "P＋"
    },
    {
        "name": "鬼塚夏美",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-009-R",
        "effect": "自分のステージにほかの『5yncri5e!』のメンバーがいる場合、カードを1枚引く。",
        "rarity": "R"
    },
    {
        "name": "鬼塚夏美",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-009-P＋",
        "effect": "自分のステージにほかの『5yncri5e!』のメンバーがいる場合、カードを1枚引く。",
        "rarity": "P＋"
    },
    {
        "name": "ウィーン・マルガレーテ",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-010-R",
        "effect": "自分のエネルギーが10枚以上ある場合、ステージにいるこのメンバーのコストを＋４する。",
        "rarity": "R"
    },
    {
        "name": "ウィーン・マルガレーテ",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-010-P＋",
        "effect": "自分のエネルギーが10枚以上ある場合、ステージにいるこのメンバーのコストを＋４する。",
        "rarity": "P＋"
    },
    {
        "name": "鬼塚冬毬",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-011-R",
        "effect": "「鬼塚冬毬」以外の『Liella!』のメンバー1人をステージから控え室に置いてもよい：自分の控え室から、これにより控え室に置いたメンバーカードを1枚、そのメンバーがいたエリアに登場させる。",
        "rarity": "R"
    },
    {
        "name": "鬼塚冬毬",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-011-P＋",
        "effect": "「鬼塚冬毬」以外の『Liella!』のメンバー1人をステージから控え室に置いてもよい：自分の控え室から、これにより控え室に置いたメンバーカードを1枚、そのメンバーがいたエリアに登場させる。",
        "rarity": "P＋"
    },
    {
        "name": "澁谷かのん",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-012-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "唐 可可",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-013-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "嵐 千砂都",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-014-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "平安名すみれ",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-015-N",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを5枚見る。その中から『CatChu!』のカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "N"
    },
    {
        "name": "葉月 恋",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-016-N",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを5枚見る。その中から『KALEIDOSCORE』のカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "N"
    },
    {
        "name": "桜小路きな子",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-017-N",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを5枚見る。その中から『5yncri5e!』のカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "N"
    },
    {
        "name": "米女メイ",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-018-N",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "N"
    },
    {
        "name": "若菜四季",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-019-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "鬼塚夏美",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-020-N",
        "effect": "このメンバーがエリアを移動するたび、カードを1枚引く。\\n(対戦相手のカードの効果でも発動する。)",
        "rarity": "N"
    },
    {
        "name": "ウィーン・マルガレーテ",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-021-N",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からメンバーカードを1枚手札に加える。",
        "rarity": "N"
    },
    {
        "name": "鬼塚冬毬",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-pb1-022-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "ディストーション",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "ライブ",
        "number": "PL!SP-pb1-023-L",
        "effect": "自分のステージに名前の異なる『CatChu!』のメンバーが2人以上いる場合、エネルギーを6枚までアクティブにする。その後、自分のエネルギーがすべてアクティブ状態の場合、このカードのスコアを＋１する。",
        "rarity": "L"
    },
    {
        "name": "ニュートラル",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "ライブ",
        "number": "PL!SP-pb1-024-L",
        "effect": "自分のステージに名前の異なる『KALEIDOSCORE』のメンバーが2人以上いる場合、このカードのスコアを＋１する。",
        "rarity": "L"
    },
    {
        "name": "Jellyfish",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "ライブ",
        "number": "PL!SP-pb1-025-L",
        "effect": "自分のステージにいる、このターン中に登場、またはエリアを移動した『5yncri5e!』のメンバー1人につき、このカードを成功させるための必要ハートを減らす。",
        "rarity": "L"
    },
    {
        "name": "Jump Into the New World",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "ライブ",
        "number": "PL!SP-pb1-026-L",
        "effect": "効果なし",
        "rarity": "L"
    },
    {
        "name": "Jump Into the New World",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "ライブ",
        "number": "PL!SP-pb1-026-L＋",
        "effect": "効果なし",
        "rarity": "L＋"
    },
    {
        "name": "澁谷かのん",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-027-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "澁谷かのん",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-027-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "唐 可可",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-028-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "唐 可可",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-028-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "嵐 千砂都",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-029-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "嵐 千砂都",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-029-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "平安名すみれ",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-030-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "平安名すみれ",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-030-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "葉月 恋",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-031-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "葉月 恋",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-031-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "桜小路きな子",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-032-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "桜小路きな子",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-032-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "米女メイ",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-033-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "米女メイ",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-033-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "若菜四季",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-034-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "若菜四季",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-034-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "鬼塚夏美",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-035-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "鬼塚夏美",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-035-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "ウィーン・マルガレーテ",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-036-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "ウィーン・マルガレーテ",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-036-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "鬼塚冬毬",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-037-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "鬼塚冬毬",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-037-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "澁谷かのん＆嵐 千砂都",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-038-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "唐 可可",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-039-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "平安名すみれ＆葉月 恋",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-040-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "桜小路きな子＆鬼塚夏美",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-041-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "米女メイ＆若菜四季",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-042-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "マルガレーテ＆鬼塚冬毬",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-043-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "澁谷かのん",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-044-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "澁谷かのん",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-044-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "1st",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-100-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "2nd",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-200-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "3rd",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-300-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "4th",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-400-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "5th",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-500-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "柊 摩央&聖澤悠奈",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-045-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "柊 摩央&聖澤悠奈",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-046-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "柊 摩央&聖澤悠奈",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-047-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "柊 摩央",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-048-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "聖澤悠奈",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-049-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "-",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-050-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "-",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-051-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "-",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-052-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "-",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-053-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "-",
        "product": "プレミアムブースター ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-pb1-054-SRE",
        "effect": "効果なし",
        "rarity": "SRE"
    },
    {
        "name": "",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "LL-PR-001-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "上原歩夢&澁谷かのん&日野下花帆",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "LL-bp1-001-R＋",
        "effect": "自分の控え室からメンバーカードを1枚手札に加える。\\n手札の「上原歩夢」と「澁谷かのん」と「日野下花帆」を、好きな組み合わせで合計3枚、控え室に置いてもよい：ライブ終了時まで、「ライブの合計スコアを＋３する。」を得る。\\n（手札のこのカードもこの効果で控え室に置ける。）",
        "rarity": "R＋"
    },
    {
        "name": "高坂穂乃果",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!-bp1-000-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "エネルギー(無地)(水色)",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "LL-E-004-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "高海千歌",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!S-bp1-000-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!S-PR-001-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "高海千歌",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!S-PR-002-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "桜内梨子",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!S-PR-003-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "松浦果南",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!S-PR-004-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "黒澤ダイヤ",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!S-PR-005-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "渡辺 曜",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!S-PR-006-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "津島善子",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!S-PR-007-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "国木田花丸",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!S-PR-008-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "小原鞠莉",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!S-PR-009-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "黒澤ルビィ",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!S-PR-010-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "高海千歌＆桜内梨子＆松浦果南＆黒澤ダイヤ",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!S-PR-011-PR＋",
        "effect": "効果なし",
        "rarity": "PR＋"
    },
    {
        "name": "渡辺 曜＆津島善子＆国木田花丸＆小原鞠莉＆黒澤ルビィ",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!S-PR-012-PR＋",
        "effect": "効果なし",
        "rarity": "PR＋"
    },
    {
        "name": "高海千歌",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!S-PR-013-PR",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを3枚見る。その中から1枚を手札に加え、残りを控え室に置く。支払ってもよい：ライブ終了時まで、を得る。",
        "rarity": "PR"
    },
    {
        "name": "桜内梨子",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!S-PR-014-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "松浦果南",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!S-PR-015-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "黒澤ダイヤ",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!S-PR-016-PR",
        "effect": "ライブ終了時まで、を得る。",
        "rarity": "PR"
    },
    {
        "name": "渡辺 曜",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!S-PR-017-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "津島善子",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!S-PR-018-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "国木田花丸",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!S-PR-019-PR",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを3枚見る。その中から1枚を手札に加え、残りを控え室に置く。支払ってもよい：ライブ終了時まで、を得る。",
        "rarity": "PR"
    },
    {
        "name": "小原鞠莉",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!S-PR-020-PR",
        "effect": "ライブ終了時まで、を得る。",
        "rarity": "PR"
    },
    {
        "name": "黒澤ルビィ",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!S-PR-021-PR",
        "effect": "ライブ終了時まで、を得る。",
        "rarity": "PR"
    },
    {
        "name": "HAPPY PARTY TRAIN",
        "product": "PRカード",
        "type": "ライブ",
        "number": "PL!S-PR-022-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "恋になりたいAQUARIUM",
        "product": "PRカード",
        "type": "ライブ",
        "number": "PL!S-PR-023-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "勇気はどこに?君の胸に!",
        "product": "PRカード",
        "type": "ライブ",
        "number": "PL!S-PR-024-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "高海千歌",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!S-PR-025-PR",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からメンバーカードを1枚手札に加える。",
        "rarity": "PR"
    },
    {
        "name": "桜内梨子",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!S-PR-026-PR",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "PR"
    },
    {
        "name": "松浦果南",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!S-PR-027-PR",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からメンバーカードを1枚手札に加える。",
        "rarity": "PR"
    },
    {
        "name": "黒澤ダイヤ",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!S-PR-028-PR",
        "effect": "自分のデッキの上からカードを3枚見る。その中から好きな枚数を好きな順番でデッキの上に置き、残りを控え室に置く。",
        "rarity": "PR"
    },
    {
        "name": "渡辺 曜",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!S-PR-029-PR",
        "effect": "自分か相手のステージにコスト13以上のメンバーがいる場合、  を得る。",
        "rarity": "PR"
    },
    {
        "name": "津島善子",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!S-PR-030-PR",
        "effect": "自分か相手のステージにコスト13以上のメンバーがいる場合、  を得る。",
        "rarity": "PR"
    },
    {
        "name": "国木田花丸",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!S-PR-031-PR",
        "effect": "自分か相手のステージにコスト13以上のメンバーがいる場合、  を得る。",
        "rarity": "PR"
    },
    {
        "name": "小原鞠莉",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!S-PR-032-PR",
        "effect": "自分のデッキの上からカードを3枚見る。その中から好きな枚数を好きな順番でデッキの上に置き、残りを控え室に置く。",
        "rarity": "PR"
    },
    {
        "name": "黒澤ルビィ",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!S-PR-033-PR",
        "effect": "自分のデッキの上からカードを3枚見る。その中から好きな枚数を好きな順番でデッキの上に置き、残りを控え室に置く。",
        "rarity": "PR"
    },
    {
        "name": "",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!S-PR-034-PR2",
        "effect": "効果なし",
        "rarity": "PR2"
    },
    {
        "name": "",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!S-PR-035-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PYHN-PR-001-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "エネルギー(無地)",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "エネルギー",
        "number": "LL-E-003-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "上原歩夢",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!N-bp1-000-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "上原歩夢",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-001-R",
        "effect": "支払ってもよい：ライブ終了時まで、を得る。",
        "rarity": "R"
    },
    {
        "name": "上原歩夢",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-001-P",
        "effect": "支払ってもよい：ライブ終了時まで、を得る。",
        "rarity": "P"
    },
    {
        "name": "中須かすみ",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-002-R＋",
        "effect": "自分のデッキの上からカードを3枚見る。その中から好きな枚数を好きな順番でデッキの上に置き、残りを控え室に置く。\\n手札を1枚控え室に置く：このカードを控え室からステージに登場させる。この能力は、このカードが控え室にある場合のみ起動できる。",
        "rarity": "R＋"
    },
    {
        "name": "中須かすみ",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-002-P",
        "effect": "自分のデッキの上からカードを3枚見る。その中から好きな枚数を好きな順番でデッキの上に置き、残りを控え室に置く。\\n手札を1枚控え室に置く：このカードを控え室からステージに登場させる。この能力は、このカードが控え室にある場合のみ起動できる。",
        "rarity": "P"
    },
    {
        "name": "中須かすみ",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-002-P＋",
        "effect": "自分のデッキの上からカードを3枚見る。その中から好きな枚数を好きな順番でデッキの上に置き、残りを控え室に置く。\\n手札を1枚控え室に置く：このカードを控え室からステージに登場させる。この能力は、このカードが控え室にある場合のみ起動できる。",
        "rarity": "P＋"
    },
    {
        "name": "中須かすみ",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-002-SEC",
        "effect": "自分のデッキの上からカードを3枚見る。その中から好きな枚数を好きな順番でデッキの上に置き、残りを控え室に置く。\\n手札を1枚控え室に置く：このカードを控え室からステージに登場させる。この能力は、このカードが控え室にある場合のみ起動できる。",
        "rarity": "SEC"
    },
    {
        "name": "桜坂しずく",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-003-R＋",
        "effect": "手札を1枚控え室に置いてもよい：自分の控え室から『虹ヶ咲』のライブカードを1枚手札に加える。\\n支払ってもよい：好きなハートの色を1つ指定する。ライブ終了時まで、そのハートを1つ得る。",
        "rarity": "R＋"
    },
    {
        "name": "桜坂しずく",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-003-P",
        "effect": "手札を1枚控え室に置いてもよい：自分の控え室から『虹ヶ咲』のライブカードを1枚手札に加える。\\n支払ってもよい：好きなハートの色を1つ指定する。ライブ終了時まで、そのハートを1つ得る。",
        "rarity": "P"
    },
    {
        "name": "桜坂しずく",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-003-P＋",
        "effect": "手札を1枚控え室に置いてもよい：自分の控え室から『虹ヶ咲』のライブカードを1枚手札に加える。\\n支払ってもよい：好きなハートの色を1つ指定する。ライブ終了時まで、そのハートを1つ得る。",
        "rarity": "P＋"
    },
    {
        "name": "桜坂しずく",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-003-SEC",
        "effect": "手札を1枚控え室に置いてもよい：自分の控え室から『虹ヶ咲』のライブカードを1枚手札に加える。\\n支払ってもよい：好きなハートの色を1つ指定する。ライブ終了時まで、そのハートを1つ得る。",
        "rarity": "SEC"
    },
    {
        "name": "朝香果林",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-004-R",
        "effect": "自分のステージにほかの『虹ヶ咲』のメンバーがいる場合、エネルギーを1枚アクティブにする。",
        "rarity": "R"
    },
    {
        "name": "朝香果林",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-004-P",
        "effect": "自分のステージにほかの『虹ヶ咲』のメンバーがいる場合、エネルギーを1枚アクティブにする。",
        "rarity": "P"
    },
    {
        "name": "宮下 愛",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-005-R",
        "effect": "手札を1枚控え室に置いてもよい：ライブ終了時まで、を得る。",
        "rarity": "R"
    },
    {
        "name": "宮下 愛",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-005-P",
        "effect": "手札を1枚控え室に置いてもよい：ライブ終了時まで、を得る。",
        "rarity": "P"
    },
    {
        "name": "近江彼方",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-006-R＋",
        "effect": "手札を1枚控え室に置く：このターン、自分のステージに『虹ヶ咲』のメンバーが登場している場合、エネルギーを2枚アクティブにする。\\n：カードを1枚引く。",
        "rarity": "R＋"
    },
    {
        "name": "近江彼方",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-006-P",
        "effect": "手札を1枚控え室に置く：このターン、自分のステージに『虹ヶ咲』のメンバーが登場している場合、エネルギーを2枚アクティブにする。\\n：カードを1枚引く。",
        "rarity": "P"
    },
    {
        "name": "近江彼方",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-006-P＋",
        "effect": "手札を1枚控え室に置く：このターン、自分のステージに『虹ヶ咲』のメンバーが登場している場合、エネルギーを2枚アクティブにする。\\n：カードを1枚引く。",
        "rarity": "P＋"
    },
    {
        "name": "近江彼方",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-006-SEC",
        "effect": "手札を1枚控え室に置く：このターン、自分のステージに『虹ヶ咲』のメンバーが登場している場合、エネルギーを2枚アクティブにする。\\n：カードを1枚引く。",
        "rarity": "SEC"
    },
    {
        "name": "優木せつ菜",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-007-R",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを3枚見る。その中から1枚を手札に加え、残りを控え室に置く。",
        "rarity": "R"
    },
    {
        "name": "優木せつ菜",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-007-P",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを3枚見る。その中から1枚を手札に加え、残りを控え室に置く。",
        "rarity": "P"
    },
    {
        "name": "エマ・ヴェルデ",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-008-R",
        "effect": "手札のメンバーカードを1枚控え室に置く：自分の控え室から、これにより控え室に置いたメンバーカードより、コストの低いメンバーカードを1枚手札に加える。",
        "rarity": "R"
    },
    {
        "name": "エマ・ヴェルデ",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-008-P",
        "effect": "手札のメンバーカードを1枚控え室に置く：自分の控え室から、これにより控え室に置いたメンバーカードより、コストの低いメンバーカードを1枚手札に加える。",
        "rarity": "P"
    },
    {
        "name": "天王寺璃奈",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-009-R",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを2枚控え室に置く。その後、自分の控え室からメンバーカードを1枚手札に加える。",
        "rarity": "R"
    },
    {
        "name": "天王寺璃奈",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-009-P",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを2枚控え室に置く。その後、自分の控え室からメンバーカードを1枚手札に加える。",
        "rarity": "P"
    },
    {
        "name": "三船栞子",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-010-R",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを3枚見る。その中から1枚を手札に加え、残りを控え室に置く。",
        "rarity": "R"
    },
    {
        "name": "三船栞子",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-010-P",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを3枚見る。その中から1枚を手札に加え、残りを控え室に置く。",
        "rarity": "P"
    },
    {
        "name": "ミア・テイラー",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-011-R",
        "effect": "手札を1枚控え室に置いてもよい：ライブカードが公開されるまで、自分のデッキの一番上のカードを公開し続ける。そのライブカードを手札に加え、これにより公開されたほかのすべてのカードを控え室に置く。",
        "rarity": "R"
    },
    {
        "name": "ミア・テイラー",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-011-P",
        "effect": "手札を1枚控え室に置いてもよい：ライブカードが公開されるまで、自分のデッキの一番上のカードを公開し続ける。そのライブカードを手札に加え、これにより公開されたほかのすべてのカードを控え室に置く。",
        "rarity": "P"
    },
    {
        "name": "鐘 嵐珠",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-012-R＋",
        "effect": "自分のライブ中のカードが3枚以上あり、その中に『虹ヶ咲』のライブカードを1枚以上含む場合、を得る。\\n：自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "R＋"
    },
    {
        "name": "鐘 嵐珠",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-012-P",
        "effect": "自分のライブ中のカードが3枚以上あり、その中に『虹ヶ咲』のライブカードを1枚以上含む場合、を得る。\\n：自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "P"
    },
    {
        "name": "鐘 嵐珠",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-012-P＋",
        "effect": "自分のライブ中のカードが3枚以上あり、その中に『虹ヶ咲』のライブカードを1枚以上含む場合、を得る。\\n：自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "P＋"
    },
    {
        "name": "鐘 嵐珠",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-012-SEC",
        "effect": "自分のライブ中のカードが3枚以上あり、その中に『虹ヶ咲』のライブカードを1枚以上含む場合、を得る。\\n：自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "SEC"
    },
    {
        "name": "上原歩夢",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-013-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "中須かすみ",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-014-N",
        "effect": "カードを1枚引き、手札を1枚控え室に置く。",
        "rarity": "N"
    },
    {
        "name": "桜坂しずく",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-015-N",
        "effect": "カードを1枚引き、手札を1枚控え室に置く。",
        "rarity": "N"
    },
    {
        "name": "朝香果林",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-016-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "宮下 愛",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-017-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "近江彼方",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-018-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "優木せつ菜",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-019-N",
        "effect": "カードを1枚引き、手札を1枚控え室に置く。",
        "rarity": "N"
    },
    {
        "name": "優木せつ菜",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!N-bp1-019-PR",
        "effect": "カードを1枚引き、手札を1枚控え室に置く。",
        "rarity": "PR"
    },
    {
        "name": "エマ・ヴェルデ",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-020-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "天王寺璃奈",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-021-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "三船栞子",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-022-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "ミア・テイラー",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-023-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "鐘 嵐珠",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!N-bp1-024-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "虹色Passions！",
        "product": "ブースターパック vol.1",
        "type": "ライブ",
        "number": "PL!N-bp1-025-L",
        "effect": "(必要ハートを確認する時、エールで出たは任意の色のハートとして扱う。)",
        "rarity": "L"
    },
    {
        "name": "Poppin' Up!",
        "product": "ブースターパック vol.1",
        "type": "ライブ",
        "number": "PL!N-bp1-026-L",
        "effect": "ライブの合計スコアが相手より高い場合、エールにより公開された自分のカードの中から、『虹ヶ咲』のカードを1枚手札に加える。\\n(必要ハートを確認する時、エールで出たは任意の色のハートとして扱う。)",
        "rarity": "L"
    },
    {
        "name": "Solitude Rain",
        "product": "ブースターパック vol.1",
        "type": "ライブ",
        "number": "PL!N-bp1-027-L",
        "effect": "自分のステージにいる『虹ヶ咲』のメンバーが持つ、、、、、のうち1色につき、このカードのスコアを＋１する。\\n(エールをすべて行った後、エールで出た1つにつき、カードを1枚引く。)",
        "rarity": "L"
    },
    {
        "name": "Butterfly",
        "product": "ブースターパック vol.1",
        "type": "ライブ",
        "number": "PL!N-bp1-028-L",
        "effect": "支払ってもよい：自分のステージに『虹ヶ咲』のメンバーがいる場合、このカードのスコアを＋１する。\\n(エールをすべて行った後、エールで出た1つにつき、カードを1枚引く。)",
        "rarity": "L"
    },
    {
        "name": "Eutopia",
        "product": "ブースターパック vol.1",
        "type": "ライブ",
        "number": "PL!N-bp1-029-L",
        "effect": "自分のライブ中のカードが3枚以上ある場合、このカードのスコアを＋２する。\\n(エールをすべて行った後、エールで出た1つにつき、カードを1枚引く。)",
        "rarity": "L"
    },
    {
        "name": "中須かすみ",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!N-bp1-030-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "桜坂しずく",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!N-bp1-031-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "近江彼方",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!N-bp1-032-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "鐘 嵐珠",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!N-bp1-033-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "UEHARA AYUMU",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!N-bp1-034-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "UEHARA AYUMU",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!N-bp1-034-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "NAKASU KASUMI",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!N-bp1-035-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "NAKASU KASUMI",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!N-bp1-035-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "KONOE KANATA",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!N-bp1-036-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "KONOE KANATA",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!N-bp1-036-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "TENNOJI RINA",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!N-bp1-037-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "TENNOJI RINA",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!N-bp1-037-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "MIA TAYLOR",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!N-bp1-038-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "MIA TAYLOR",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!N-bp1-038-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!N-PR-001-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!N-PR-002-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "上原歩夢",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!N-PR-003-PR",
        "effect": "手札をすべて公開する：自分のステージにほかのメンバーがおり、かつこれにより公開した手札の中にライブカードがない場合、自分のデッキの上からカードを5枚見る。その中からライブカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "PR"
    },
    {
        "name": "中須かすみ",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!N-PR-004-PR",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを3枚見る。その中から1枚を手札に加え、残りを控え室に置く。",
        "rarity": "PR"
    },
    {
        "name": "桜坂しずく",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!N-PR-005-PR",
        "effect": "カードを2枚引き、手札を2枚控え室に置く。",
        "rarity": "PR"
    },
    {
        "name": "朝香果林",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!N-PR-006-PR",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを3枚見る。その中から1枚を手札に加え、残りを控え室に置く。",
        "rarity": "PR"
    },
    {
        "name": "宮下 愛",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!N-PR-007-PR",
        "effect": "カードを2枚引き、手札を2枚控え室に置く。",
        "rarity": "PR"
    },
    {
        "name": "近江彼方",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!N-PR-008-PR",
        "effect": "手札をすべて公開する：自分のステージにほかのメンバーがおり、かつこれにより公開した手札の中にライブカードがない場合、自分のデッキの上からカードを5枚見る。その中からライブカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "PR"
    },
    {
        "name": "優木せつ菜",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!N-PR-009-PR",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "PR"
    },
    {
        "name": "エマ・ヴェルデ",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!N-PR-010-PR",
        "effect": "手札をすべて公開する：自分のステージにほかのメンバーがおり、かつこれにより公開した手札の中にライブカードがない場合、自分のデッキの上からカードを5枚見る。その中からライブカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "PR"
    },
    {
        "name": "天王寺璃奈",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!N-PR-011-PR",
        "effect": "カードを2枚引き、手札を2枚控え室に置く。",
        "rarity": "PR"
    },
    {
        "name": "三船栞子",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!N-PR-012-PR",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "PR"
    },
    {
        "name": "ミア・テイラー",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!N-PR-013-PR",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを3枚見る。その中から1枚を手札に加え、残りを控え室に置く。",
        "rarity": "PR"
    },
    {
        "name": "鐘 嵐珠",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!N-PR-014-PR",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "PR"
    },
    {
        "name": "",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!N-PR-015-PR＋",
        "effect": "効果なし",
        "rarity": "PR＋"
    },
    {
        "name": "上原歩夢",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-001-SD",
        "effect": "自分のデッキの上からカードを5枚見る。その中から『虹ヶ咲』のライブカードを1枚まで公開して手札に加えてもよい。残りを控え室に置く。\\n支払ってもよい：ライブ終了時まで、自分のステージにいるほかの『虹ヶ咲』のメンバーはを得る。",
        "rarity": "SD"
    },
    {
        "name": "中須かすみ",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-002-SD",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを3枚見る。その中から1枚を手札に加え、残りを控え室に置く。",
        "rarity": "SD"
    },
    {
        "name": "桜坂しずく",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-003-SD",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを3枚見る。その中から1枚を手札に加え、残りを控え室に置く。",
        "rarity": "SD"
    },
    {
        "name": "朝香果林",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-004-SD",
        "effect": "手札を1枚控え室に置いてもよい：ライブ終了時まで、を得る。",
        "rarity": "SD"
    },
    {
        "name": "宮下 愛",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-005-SD",
        "effect": "手札を2枚控え室に置く：自分の控え室から『虹ヶ咲』のメンバーカードを1枚手札に加える。",
        "rarity": "SD"
    },
    {
        "name": "近江彼方",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-006-SD",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からメンバーカードを1枚手札に加える。",
        "rarity": "SD"
    },
    {
        "name": "優木せつ菜",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-007-SD",
        "effect": "手札を2枚控え室に置く：自分の控え室から『虹ヶ咲』のライブカードを1枚手札に加える。",
        "rarity": "SD"
    },
    {
        "name": "エマ・ヴェルデ",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-008-SD",
        "effect": "エネルギーを2枚アクティブにする。",
        "rarity": "SD"
    },
    {
        "name": "天王寺璃奈",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-009-SD",
        "effect": "手札を1枚控え室に置く：自分の控え室から『虹ヶ咲』のライブカードを1枚手札に加える。",
        "rarity": "SD"
    },
    {
        "name": "三船栞子",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-010-SD",
        "effect": "カードを2枚引き、手札を1枚控え室に置く。\\n支払ってもよい：ライブ終了時まで、を得る。",
        "rarity": "SD"
    },
    {
        "name": "ミア・テイラー",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-011-SD",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "SD"
    },
    {
        "name": "鐘 嵐珠",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-012-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "上原歩夢",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-013-SD",
        "effect": "カードを1枚引き、手札を1枚控え室に置く。",
        "rarity": "SD"
    },
    {
        "name": "中須かすみ",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-014-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "桜坂しずく",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-015-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "朝香果林",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-016-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "宮下 愛",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-017-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "近江彼方",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-018-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "優木せつ菜",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-019-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "エマ・ヴェルデ",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-020-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "天王寺璃奈",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-021-SD",
        "effect": "カードを1枚引き、手札を1枚控え室に置く。",
        "rarity": "SD"
    },
    {
        "name": "三船栞子",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-022-SD",
        "effect": "カードを1枚引き、手札を1枚控え室に置く。",
        "rarity": "SD"
    },
    {
        "name": "ミア・テイラー",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-023-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "鐘 嵐珠",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "メンバー",
        "number": "PL!N-sd1-024-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "Colorful Dreams! Colorful Smiles!",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "ライブ",
        "number": "PL!N-sd1-025-SD",
        "effect": "(エールで出た1つにつき、成功したライブのスコアの合計に1を加算する。)",
        "rarity": "SD"
    },
    {
        "name": "夢が僕らの太陽さ",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "ライブ",
        "number": "PL!N-sd1-026-SD",
        "effect": "(必要ハートを確認する時、エールで出たは任意の色のハートとして扱う。)",
        "rarity": "SD"
    },
    {
        "name": "Just Believe!!!",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "ライブ",
        "number": "PL!N-sd1-027-SD",
        "effect": "(必要ハートを確認する時、エールで出たは任意の色のハートとして扱う。)",
        "rarity": "SD"
    },
    {
        "name": "Dream with You",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "ライブ",
        "number": "PL!N-sd1-028-SD",
        "effect": "自分のステージにいるメンバーが持つの合計が10以上の場合、このカードのスコアを＋１する。\\n(エールをすべて行った後、エールで出た1つにつき、カードを1枚引く。)",
        "rarity": "SD"
    },
    {
        "name": "上原歩夢",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "エネルギー",
        "number": "PL!N-sd1-029-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "中須かすみ",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "エネルギー",
        "number": "PL!N-sd1-030-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "桜坂しずく",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "エネルギー",
        "number": "PL!N-sd1-031-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "朝香果林",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "エネルギー",
        "number": "PL!N-sd1-032-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "宮下 愛",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "エネルギー",
        "number": "PL!N-sd1-033-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "近江彼方",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "エネルギー",
        "number": "PL!N-sd1-034-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "優木せつ菜",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "エネルギー",
        "number": "PL!N-sd1-035-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "エマ・ヴェルデ",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "エネルギー",
        "number": "PL!N-sd1-036-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "天王寺璃奈",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "エネルギー",
        "number": "PL!N-sd1-037-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "三船栞子",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "エネルギー",
        "number": "PL!N-sd1-038-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "ミア・テイラー",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "エネルギー",
        "number": "PL!N-sd1-039-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "鐘 嵐珠",
        "product": "スタートデッキ ラブライブ！虹ヶ咲学園スクールアイドル同好会",
        "type": "エネルギー",
        "number": "PL!N-sd1-040-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "澁谷かのん",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!SP-bp1-000-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "澁谷かのん",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-001-R",
        "effect": "自分のステージにほかのメンバーがいない場合、自分はライブできない。",
        "rarity": "R"
    },
    {
        "name": "澁谷かのん",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-001-P",
        "effect": "自分のステージにほかのメンバーがいない場合、自分はライブできない。",
        "rarity": "P"
    },
    {
        "name": "唐 可可",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-002-R＋",
        "effect": "支払ってもよい：ステージの左サイドエリアに登場しているなら、カードを2枚引く。",
        "rarity": "R＋"
    },
    {
        "name": "唐 可可",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-002-P",
        "effect": "支払ってもよい：ステージの左サイドエリアに登場しているなら、カードを2枚引く。",
        "rarity": "P"
    },
    {
        "name": "唐 可可",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-002-P＋",
        "effect": "支払ってもよい：ステージの左サイドエリアに登場しているなら、カードを2枚引く。",
        "rarity": "P＋"
    },
    {
        "name": "唐 可可",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-002-SEC",
        "effect": "支払ってもよい：ステージの左サイドエリアに登場しているなら、カードを2枚引く。",
        "rarity": "SEC"
    },
    {
        "name": "嵐 千砂都",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-003-R＋",
        "effect": "手札にあるメンバーカードを好きな枚数公開する：公開したカードのコストの合計が、10、20、30、40、50のいずれかの場合、ライブ終了時まで、「ライブの合計スコアを＋１する。」を得る。",
        "rarity": "R＋"
    },
    {
        "name": "嵐 千砂都",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-003-P",
        "effect": "手札にあるメンバーカードを好きな枚数公開する：公開したカードのコストの合計が、10、20、30、40、50のいずれかの場合、ライブ終了時まで、「ライブの合計スコアを＋１する。」を得る。",
        "rarity": "P"
    },
    {
        "name": "嵐 千砂都",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-003-P＋",
        "effect": "手札にあるメンバーカードを好きな枚数公開する：公開したカードのコストの合計が、10、20、30、40、50のいずれかの場合、ライブ終了時まで、「ライブの合計スコアを＋１する。」を得る。",
        "rarity": "P＋"
    },
    {
        "name": "嵐 千砂都",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-003-SEC",
        "effect": "手札にあるメンバーカードを好きな枚数公開する：公開したカードのコストの合計が、10、20、30、40、50のいずれかの場合、ライブ終了時まで、「ライブの合計スコアを＋１する。」を得る。",
        "rarity": "SEC"
    },
    {
        "name": "平安名すみれ",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-004-R",
        "effect": "ステージのセンターエリアにいる場合、を得る。",
        "rarity": "R"
    },
    {
        "name": "平安名すみれ",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-004-P",
        "effect": "ステージのセンターエリアにいる場合、を得る。",
        "rarity": "P"
    },
    {
        "name": "葉月 恋",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-005-R",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを5枚見る。その中から『Liella!』のカードを1枚まで公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "R"
    },
    {
        "name": "葉月 恋",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-005-P",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを5枚見る。その中から『Liella!』のカードを1枚まで公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "P"
    },
    {
        "name": "桜小路きな子",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-006-R",
        "effect": "支払ってもよい：ライブ終了時まで、を得る。",
        "rarity": "R"
    },
    {
        "name": "桜小路きな子",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-006-P",
        "effect": "支払ってもよい：ライブ終了時まで、を得る。",
        "rarity": "P"
    },
    {
        "name": "米女メイ",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-007-R＋",
        "effect": "自分のエネルギーが11枚以上ある場合、自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "R＋"
    },
    {
        "name": "米女メイ",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-007-P",
        "effect": "自分のエネルギーが11枚以上ある場合、自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "P"
    },
    {
        "name": "米女メイ",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-007-P＋",
        "effect": "自分のエネルギーが11枚以上ある場合、自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "P＋"
    },
    {
        "name": "米女メイ",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-007-SEC",
        "effect": "自分のエネルギーが11枚以上ある場合、自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "SEC"
    },
    {
        "name": "若菜四季",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-008-R",
        "effect": "カードを1枚引く。自分のステージに「米女メイ」がいる場合、さらにカードを1枚引く。",
        "rarity": "R"
    },
    {
        "name": "若菜四季",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-008-P",
        "effect": "カードを1枚引く。自分のステージに「米女メイ」がいる場合、さらにカードを1枚引く。",
        "rarity": "P"
    },
    {
        "name": "鬼塚夏美",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-009-R",
        "effect": "：カードを1枚引き、手札を1枚控え室に置く。",
        "rarity": "R"
    },
    {
        "name": "鬼塚夏美",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-009-P",
        "effect": "：カードを1枚引き、手札を1枚控え室に置く。",
        "rarity": "P"
    },
    {
        "name": "ウィーン・マルガレーテ",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-010-R",
        "effect": "手札を1枚控え室に置く：自分のデッキの上からカードを5枚見る。その中から『Liella!』のカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "R"
    },
    {
        "name": "ウィーン・マルガレーテ",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-010-P",
        "effect": "手札を1枚控え室に置く：自分のデッキの上からカードを5枚見る。その中から『Liella!』のカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "P"
    },
    {
        "name": "鬼塚冬毬",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-011-R",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "R"
    },
    {
        "name": "鬼塚冬毬",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-011-P",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "P"
    },
    {
        "name": "澁谷かのん",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-012-N",
        "effect": "支払ってもよい：自分のデッキの上からカードを3枚見る。その中から1枚を手札に加え、残りを控え室に置く。",
        "rarity": "N"
    },
    {
        "name": "唐 可可",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-013-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "唐 可可",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!SP-bp1-013-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "嵐 千砂都",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-014-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "平安名すみれ",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-015-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "葉月 恋",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-016-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "桜小路きな子",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-017-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "米女メイ",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-018-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "若菜四季",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-019-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "鬼塚夏美",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-020-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "ウィーン・マルガレーテ",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-021-N",
        "effect": "手札を1枚控え室に置いてもよい：自分のエネルギーデッキから、エネルギーカードを1枚ウェイト状態で置く。",
        "rarity": "N"
    },
    {
        "name": "鬼塚冬毬",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!SP-bp1-022-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "START!! True dreams",
        "product": "ブースターパック vol.1",
        "type": "ライブ",
        "number": "PL!SP-bp1-023-L",
        "effect": "ライブの合計スコアが相手より高い場合、自分のエネルギーデッキから、エネルギーカードを1枚ウェイト状態で置く。\\n(エールで出た1つにつき、成功したライブのスコアの合計に1を加算する。)",
        "rarity": "L"
    },
    {
        "name": "Tiny Stars",
        "product": "ブースターパック vol.1",
        "type": "ライブ",
        "number": "PL!SP-bp1-024-L",
        "effect": "ライブ終了時まで、自分のステージにいる「澁谷かのん」1人はを、「唐 可可」1人はを得る。\\n自分のステージに「澁谷かのん」と「唐 可可」がいる場合、カードを1枚引く。\\n(必要ハートを確認する時、エールで出たは任意の色のハートとして扱う。)",
        "rarity": "L"
    },
    {
        "name": "Starlight Prologue",
        "product": "ブースターパック vol.1",
        "type": "ライブ",
        "number": "PL!SP-bp1-025-L",
        "effect": "(必要ハートを確認する時、エールで出たは任意の色のハートとして扱う。)",
        "rarity": "L"
    },
    {
        "name": "未来予報ハレルヤ！",
        "product": "ブースターパック vol.1",
        "type": "ライブ",
        "number": "PL!SP-bp1-026-L",
        "effect": "自分の、ステージと控え室に名前の異なる『Liella!』のメンバーが5人以上いる場合、このカードを使用するためのコストはになる。\\n(必要ハートを確認する時、エールで出たは任意の色のハートとして扱う。)",
        "rarity": "L"
    },
    {
        "name": "Sing！Shine！Smile！",
        "product": "ブースターパック vol.1",
        "type": "ライブ",
        "number": "PL!SP-bp1-027-L",
        "effect": "自分のエネルギーが12枚以上ある場合、このカードのスコアを＋１する。\\n(エールをすべて行った後、エールで出た1つにつき、カードを1枚引く。)",
        "rarity": "L"
    },
    {
        "name": "唐 可可",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!SP-bp1-028-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "嵐 千砂都",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!SP-bp1-029-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "米女メイ",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!SP-bp1-030-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "SHIBUYA KANON",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!SP-bp1-031-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "SHIBUYA KANON",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!SP-bp1-031-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "ARASHI CHISATO",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!SP-bp1-032-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "ARASHI CHISATO",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!SP-bp1-032-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "HAZUKI REN",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!SP-bp1-033-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "HAZUKI REN",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!SP-bp1-033-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "SAKURAKOJI KINAKO",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!SP-bp1-034-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "SAKURAKOJIKINAKO",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!SP-bp1-034-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "ONITSUKA NATSUMI",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!SP-bp1-035-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "ONITSUKA NATSUMI",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!SP-bp1-035-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!SP-PR-001-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!SP-PR-002-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "澁谷かのん",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!SP-PR-003-PR",
        "effect": "自分のエネルギーが7枚以上ある場合、カードを1枚引く。",
        "rarity": "PR"
    },
    {
        "name": "唐 可可",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!SP-PR-004-PR",
        "effect": "手札を1枚控え室に置いてもよい：自分のエネルギーデッキから、エネルギーカードを1枚ウェイト状態で置く。",
        "rarity": "PR"
    },
    {
        "name": "嵐 千砂都",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!SP-PR-005-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "平安名すみれ",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!SP-PR-006-PR",
        "effect": "手札を1枚控え室に置いてもよい：自分のエネルギーデッキから、エネルギーカードを1枚ウェイト状態で置く。",
        "rarity": "PR"
    },
    {
        "name": "葉月 恋",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!SP-PR-007-PR",
        "effect": "自分のエネルギーが7枚以上ある場合、カードを1枚引く。",
        "rarity": "PR"
    },
    {
        "name": "桜小路きな子",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!SP-PR-008-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "米女メイ",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!SP-PR-009-PR",
        "effect": "手札を1枚控え室に置いてもよい：ライブ終了時まで、を得る。これによりライブカードを控え室に置いた場合、さらにカードを1枚引く。",
        "rarity": "PR"
    },
    {
        "name": "若菜四季",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!SP-PR-010-PR",
        "effect": "自分のエネルギーが7枚以上ある場合、カードを1枚引く。",
        "rarity": "PR"
    },
    {
        "name": "鬼塚夏美",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!SP-PR-011-PR",
        "effect": "手札を1枚控え室に置いてもよい：ライブ終了時まで、を得る。これによりライブカードを控え室に置いた場合、さらにカードを1枚引く。",
        "rarity": "PR"
    },
    {
        "name": "ウィーン・マルガレーテ",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!SP-PR-012-PR",
        "effect": "手札を1枚控え室に置いてもよい：ライブ終了時まで、を得る。これによりライブカードを控え室に置いた場合、さらにカードを1枚引く。",
        "rarity": "PR"
    },
    {
        "name": "鬼塚冬毬",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!SP-PR-013-PR",
        "effect": "手札を1枚控え室に置いてもよい：自分のエネルギーデッキから、エネルギーカードを1枚ウェイト状態で置く。",
        "rarity": "PR"
    },
    {
        "name": "澁谷かのん",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!SP-PR-014-PR＋",
        "effect": "効果なし",
        "rarity": "PR＋"
    },
    {
        "name": "エネルギー(無地)",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "LL-E-002-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "日野下花帆",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!HS-bp1-000-LLE",
        "effect": "効果なし",
        "rarity": "LLE"
    },
    {
        "name": "日野下花帆",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-001-R",
        "effect": "エネルギーを2枚アクティブにする。",
        "rarity": "R"
    },
    {
        "name": "日野下花帆",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-001-P",
        "effect": "エネルギーを2枚アクティブにする。",
        "rarity": "P"
    },
    {
        "name": "村野さやか",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-002-R",
        "effect": "、このメンバーをステージから控え室に置く：自分の控え室からコスト15以下の『蓮ノ空』のメンバーカードを1枚、このメンバーがいたエリアに登場させる。",
        "rarity": "R"
    },
    {
        "name": "村野さやか",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-002-P",
        "effect": "、このメンバーをステージから控え室に置く：自分の控え室からコスト15以下の『蓮ノ空』のメンバーカードを1枚、このメンバーがいたエリアに登場させる。",
        "rarity": "P"
    },
    {
        "name": "乙宗 梢",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-003-R＋",
        "effect": "自分のステージのエリアすべてに『蓮ノ空』のメンバーが登場しており、かつ名前が異なる場合、「ライブの合計スコアを＋１する。」を得る。\\n：自分の控え室から4コスト以下の『蓮ノ空』のメンバーカードを1枚手札に加える。",
        "rarity": "R＋"
    },
    {
        "name": "乙宗 梢",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-003-P",
        "effect": "自分のステージのエリアすべてに『蓮ノ空』のメンバーが登場しており、かつ名前が異なる場合、「ライブの合計スコアを＋１する。」を得る。\\n：自分の控え室から4コスト以下の『蓮ノ空』のメンバーカードを1枚手札に加える。",
        "rarity": "P"
    },
    {
        "name": "乙宗 梢",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-003-P＋",
        "effect": "自分のステージのエリアすべてに『蓮ノ空』のメンバーが登場しており、かつ名前が異なる場合、「ライブの合計スコアを＋１する。」を得る。\\n：自分の控え室から4コスト以下の『蓮ノ空』のメンバーカードを1枚手札に加える。",
        "rarity": "P＋"
    },
    {
        "name": "乙宗 梢",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-003-SEC",
        "effect": "自分のステージのエリアすべてに『蓮ノ空』のメンバーが登場しており、かつ名前が異なる場合、「ライブの合計スコアを＋１する。」を得る。\\n：自分の控え室から4コスト以下の『蓮ノ空』のメンバーカードを1枚手札に加える。",
        "rarity": "SEC"
    },
    {
        "name": "夕霧綴理",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-004-R＋",
        "effect": "：自分の控え室から『蓮ノ空』のライブカードを1枚手札に加える。\\n支払ってもよい：ライブ終了時まで、自分のライブ中のカード1枚につき、を得る。",
        "rarity": "R＋"
    },
    {
        "name": "夕霧綴理",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-004-P",
        "effect": "：自分の控え室から『蓮ノ空』のライブカードを1枚手札に加える。\\n支払ってもよい：ライブ終了時まで、自分のライブ中のカード1枚につき、を得る。",
        "rarity": "P"
    },
    {
        "name": "夕霧綴理",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-004-P＋",
        "effect": "：自分の控え室から『蓮ノ空』のライブカードを1枚手札に加える。\\n支払ってもよい：ライブ終了時まで、自分のライブ中のカード1枚につき、を得る。",
        "rarity": "P＋"
    },
    {
        "name": "夕霧綴理",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-004-SEC",
        "effect": "：自分の控え室から『蓮ノ空』のライブカードを1枚手札に加える。\\n支払ってもよい：ライブ終了時まで、自分のライブ中のカード1枚につき、を得る。",
        "rarity": "SEC"
    },
    {
        "name": "大沢瑠璃乃",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-005-R",
        "effect": "手札を3枚まで控え室に置いてもよい：これにより置いた枚数分カードを引く。",
        "rarity": "R"
    },
    {
        "name": "大沢瑠璃乃",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-005-P",
        "effect": "手札を3枚まで控え室に置いてもよい：これにより置いた枚数分カードを引く。",
        "rarity": "P"
    },
    {
        "name": "藤島 慈",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-006-R＋",
        "effect": "カードを2枚引き、手札を1枚控え室に置く。\\n手札を1枚控え室に置いてもよい：自分のステージにほかのメンバーがいる場合、好きなハートの色を1つ指定する。ライブ終了時まで、そのハートを1つ得る。",
        "rarity": "R＋"
    },
    {
        "name": "藤島 慈",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-006-P",
        "effect": "カードを2枚引き、手札を1枚控え室に置く。\\n手札を1枚控え室に置いてもよい：自分のステージにほかのメンバーがいる場合、好きなハートの色を1つ指定する。ライブ終了時まで、そのハートを1つ得る。",
        "rarity": "P"
    },
    {
        "name": "藤島 慈",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-006-P＋",
        "effect": "カードを2枚引き、手札を1枚控え室に置く。\\n手札を1枚控え室に置いてもよい：自分のステージにほかのメンバーがいる場合、好きなハートの色を1つ指定する。ライブ終了時まで、そのハートを1つ得る。",
        "rarity": "P＋"
    },
    {
        "name": "藤島 慈",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-006-SEC",
        "effect": "カードを2枚引き、手札を1枚控え室に置く。\\n手札を1枚控え室に置いてもよい：自分のステージにほかのメンバーがいる場合、好きなハートの色を1つ指定する。ライブ終了時まで、そのハートを1つ得る。",
        "rarity": "SEC"
    },
    {
        "name": "百生 吟子",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-007-R",
        "effect": "：カードを1枚引く。",
        "rarity": "R"
    },
    {
        "name": "百生 吟子",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-007-P",
        "effect": "：カードを1枚引く。",
        "rarity": "P"
    },
    {
        "name": "徒町 小鈴",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-008-R",
        "effect": "自分のデッキの上からカードを3枚控え室に置く。それらがすべてメンバーカードの場合、カードを1枚引く。",
        "rarity": "R"
    },
    {
        "name": "徒町 小鈴",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-008-P",
        "effect": "自分のデッキの上からカードを3枚控え室に置く。それらがすべてメンバーカードの場合、カードを1枚引く。",
        "rarity": "P"
    },
    {
        "name": "安養寺 姫芽",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-009-R",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを5枚見る。その中から『みらくらぱーく！』のカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "R"
    },
    {
        "name": "安養寺 姫芽",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-009-P",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを5枚見る。その中から『みらくらぱーく！』のカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "P"
    },
    {
        "name": "日野下花帆",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-010-N",
        "effect": "カードを1枚引き、手札を1枚控え室に置く。",
        "rarity": "N"
    },
    {
        "name": "村野さやか",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-011-N",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを5枚見る。その中からライブカードを1枚公開して手札に加えてもよい。残りを控え室に置く。",
        "rarity": "N"
    },
    {
        "name": "乙宗 梢",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-012-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "乙宗 梢",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!HS-bp1-012-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "夕霧綴理",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-013-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "大沢瑠璃乃",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-014-N",
        "effect": "カードを1枚引き、手札を1枚控え室に置く。",
        "rarity": "N"
    },
    {
        "name": "藤島 慈",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-015-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "百生 吟子",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-016-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "徒町 小鈴",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-017-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "安養寺 姫芽",
        "product": "ブースターパック vol.1",
        "type": "メンバー",
        "number": "PL!HS-bp1-018-N",
        "effect": "効果なし",
        "rarity": "N"
    },
    {
        "name": "Dream Believers",
        "product": "ブースターパック vol.1",
        "type": "ライブ",
        "number": "PL!HS-bp1-019-L",
        "effect": "(エールで出た1つにつき、成功したライブのスコアの合計に1を加算する。)",
        "rarity": "L"
    },
    {
        "name": "365 Days",
        "product": "ブースターパック vol.1",
        "type": "ライブ",
        "number": "PL!HS-bp1-020-L",
        "effect": "(必要ハートを確認する時、エールで出たは任意の色のハートとして扱う。)",
        "rarity": "L"
    },
    {
        "name": "Holiday∞Holiday",
        "product": "ブースターパック vol.1",
        "type": "ライブ",
        "number": "PL!HS-bp1-021-L",
        "effect": "エールにより公開された自分のカードの中から、『蓮ノ空』のライブカードを1枚手札に加える。\\n(必要ハートを確認する時、エールで出たは任意の色のハートとして扱う。)",
        "rarity": "L"
    },
    {
        "name": "AWOKE",
        "product": "ブースターパック vol.1",
        "type": "ライブ",
        "number": "PL!HS-bp1-022-L",
        "effect": "エールにより公開された自分のカードの中に『蓮ノ空』のメンバーカードが10枚以上ある場合、このカードのスコアを＋１する。\\n(エールをすべて行った後、エールで出た1つにつき、カードを1枚引く。)",
        "rarity": "L"
    },
    {
        "name": "ド！ド！ド！",
        "product": "ブースターパック vol.1",
        "type": "ライブ",
        "number": "PL!HS-bp1-023-L",
        "effect": "ライブの合計スコアが相手より高く、かつ自分のステージに『蓮ノ空』のメンバーがいる場合、自分のエネルギーデッキから、エネルギーカードを1枚ウェイト状態で置く。\\n(必要ハートを確認する時、エールで出たは任意の色のハートとして扱う。)",
        "rarity": "L"
    },
    {
        "name": "乙宗 梢",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!HS-bp1-024-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "夕霧綴理",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!HS-bp1-025-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "藤島 慈",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!HS-bp1-026-SECE",
        "effect": "効果なし",
        "rarity": "SECE"
    },
    {
        "name": "HINOSHITA KAHO",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!HS-bp1-027-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "HINOSHITA KAHO",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!HS-bp1-027-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "OTOMUNE KOZUE",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!HS-bp1-028-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "OTOMUNE KOZUE",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!HS-bp1-028-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "YUGIRI TSUZURI",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!HS-bp1-029-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "YUGIRI TSUZURI",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!HS-bp1-029-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "FUJISHIMA MEGUMI",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!HS-bp1-030-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "FUJISHIMA MEGUMI",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!HS-bp1-030-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "ANYOJI HIME",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!HS-bp1-031-PE",
        "effect": "効果なし",
        "rarity": "PE"
    },
    {
        "name": "ANYOJI HIME",
        "product": "ブースターパック vol.1",
        "type": "エネルギー",
        "number": "PL!HS-bp1-031-PE＋",
        "effect": "効果なし",
        "rarity": "PE＋"
    },
    {
        "name": "村野さやか",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!HS-bp2-011-PR",
        "effect": "デッキの上からカードを5枚控え室に置く。",
        "rarity": "PR"
    },
    {
        "name": "日野下花帆",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!HS-PR-001-PR",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを3枚見る。その中から1枚を手札に加え、残りを控え室に置く。\\n支払ってもよい：ライブ終了時まで、を得る。",
        "rarity": "PR"
    },
    {
        "name": "村野さやか",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!HS-PR-002-PR",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを3枚見る。その中から1枚を手札に加え、残りを控え室に置く。\\n支払ってもよい：ライブ終了時まで、を得る。",
        "rarity": "PR"
    },
    {
        "name": "乙宗 梢",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!HS-PR-003-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "夕霧綴理",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!HS-PR-004-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "大沢瑠璃乃",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!HS-PR-005-PR",
        "effect": "手札を1枚控え室に置いてもよい：自分のデッキの上からカードを3枚見る。その中から1枚を手札に加え、残りを控え室に置く。\\n支払ってもよい：ライブ終了時まで、を得る。",
        "rarity": "PR"
    },
    {
        "name": "藤島 慈",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!HS-PR-006-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "百生 吟子",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!HS-PR-007-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "徒町 小鈴",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!HS-PR-008-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "安養寺 姫芽",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!HS-PR-009-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "Reflection in the mirror",
        "product": "PRカード",
        "type": "ライブ",
        "number": "PL!HS-PR-010-PR",
        "effect": "(必要ハートを確認する時、エールで出たは任意の色のハートとして扱う。)",
        "rarity": "PR"
    },
    {
        "name": "Sparkly Spot",
        "product": "PRカード",
        "type": "ライブ",
        "number": "PL!HS-PR-011-PR",
        "effect": "(必要ハートを確認する時、エールで出たは任意の色のハートとして扱う。)",
        "rarity": "PR"
    },
    {
        "name": "アイデンティティ",
        "product": "PRカード",
        "type": "ライブ",
        "number": "PL!HS-PR-012-PR",
        "effect": "(必要ハートを確認する時、エールで出たは任意の色のハートとして扱う。)",
        "rarity": "PR"
    },
    {
        "name": "",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!HS-PR-013-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "日野下花帆",
        "product": "PRカード",
        "type": "メンバー",
        "number": "PL!HS-PR-014-PR",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からメンバーカードを1枚手札に加える。",
        "rarity": "PR"
    },
    {
        "name": "",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!HS-PR-015-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "PR",
        "product": "PRカード",
        "type": "エネルギー",
        "number": "PL!N-PR-016-PR",
        "effect": "効果なし",
        "rarity": "PR"
    },
    {
        "name": "エネルギー(無地)",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "LL-E-005-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "澁谷かのん",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-sd1-001-SD",
        "effect": "自分のエネルギー6枚につき、カードを1枚引く。",
        "rarity": "SD"
    },
    {
        "name": "唐 可可",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-sd1-002-SD",
        "effect": "手札からコスト4以下の『Liella!』のメンバーカードを1枚ステージに登場させてもよい。\\n（この効果で既にメンバーがいるエリアにも登場できる。ただし、このターンにステージに登場したメンバーがいるエリアには登場できない。）",
        "rarity": "SD"
    },
    {
        "name": "嵐 千砂都",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-sd1-003-SD",
        "effect": "手札を2枚控え室に置いてもよい：ライブ終了時まで、を得る。",
        "rarity": "SD"
    },
    {
        "name": "平安名すみれ",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-sd1-004-SD",
        "effect": "ライブ終了時まで、「ライブの合計スコアを＋１する。」を得る。",
        "rarity": "SD"
    },
    {
        "name": "葉月 恋",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-sd1-005-SD",
        "effect": "：自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "SD"
    },
    {
        "name": "桜小路きな子",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-sd1-006-SD",
        "effect": "このメンバーをステージから控え室に置く：自分の控え室からライブカードを1枚手札に加える。",
        "rarity": "SD"
    },
    {
        "name": "米女メイ",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-sd1-007-SD",
        "effect": "支払ってもよい：自分の控え室から『Liella!』のメンバーカードを1枚手札に加える。",
        "rarity": "SD"
    },
    {
        "name": "若菜四季",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-sd1-008-SD",
        "effect": "支払ってもよい：自分のデッキの上からカードを3枚見る。その中から1枚を手札に加え、残りを控え室に置く。",
        "rarity": "SD"
    },
    {
        "name": "鬼塚夏美",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-sd1-009-SD",
        "effect": "支払ってもよい：自分のエネルギーが9枚以上ある場合、自分のデッキの上からカードを5枚見る。その中から1枚を手札に加え、残りを控え室に置く。",
        "rarity": "SD"
    },
    {
        "name": "ウィーン・マルガレーテ",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-sd1-010-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "鬼塚冬毬",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-sd1-011-SD",
        "effect": "：自分のエネルギーデッキから、エネルギーカードを1枚ウェイト状態で置く。",
        "rarity": "SD"
    },
    {
        "name": "澁谷かのん",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-sd1-012-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "唐 可可",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-sd1-013-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "嵐 千砂都",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-sd1-014-SD",
        "effect": "手札を1枚控え室に置いてもよい：自分のエネルギーデッキから、エネルギーカードを1枚ウェイト状態で置く。",
        "rarity": "SD"
    },
    {
        "name": "平安名すみれ",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-sd1-015-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "葉月 恋",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-sd1-016-SD",
        "effect": "手札を1枚控え室に置いてもよい：自分のエネルギーデッキから、エネルギーカードを1枚ウェイト状態で置く。",
        "rarity": "SD"
    },
    {
        "name": "桜小路きな子",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-sd1-017-SD",
        "effect": "支払ってもよい：自分のデッキの上からカードを3枚見る。その中から1枚を手札に加え、残りを控え室に置く。",
        "rarity": "SD"
    },
    {
        "name": "米女メイ",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-sd1-018-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "若菜四季",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-sd1-019-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "鬼塚夏美",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-sd1-020-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "ウィーン・マルガレーテ",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-sd1-021-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "鬼塚冬毬",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "メンバー",
        "number": "PL!SP-sd1-022-SD",
        "effect": "効果なし",
        "rarity": "SD"
    },
    {
        "name": "WE WILL!!",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "ライブ",
        "number": "PL!SP-sd1-023-SD",
        "effect": "(エールで出た1つにつき、成功したライブのスコアの合計に1を加算する。)",
        "rarity": "SD"
    },
    {
        "name": "シェキラ☆☆☆",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "ライブ",
        "number": "PL!SP-sd1-024-SD",
        "effect": "(必要ハートを確認する時、エールで出たは任意の色のハートとして扱う。)",
        "rarity": "SD"
    },
    {
        "name": "未来は風のように",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "ライブ",
        "number": "PL!SP-sd1-025-SD",
        "effect": "(必要ハートを確認する時、エールで出たは任意の色のハートとして扱う。)",
        "rarity": "SD"
    },
    {
        "name": "私のSymphony 〜澁谷かのんVer.〜",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "ライブ",
        "number": "PL!SP-sd1-026-SD",
        "effect": "自分のエネルギーが9枚以上ある場合、このカードのスコアを＋１する。\\n(エールをすべて行った後、エールで出た1つにつき、カードを1枚引く。)",
        "rarity": "SD"
    },
    {
        "name": "澁谷かのん",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-sd1-027-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "唐 可可",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-sd1-028-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "嵐 千砂都",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-sd1-029-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "平安名すみれ",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-sd1-030-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "葉月 恋",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-sd1-031-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "桜小路きな子",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-sd1-032-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "米女メイ",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-sd1-033-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "若菜四季",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-sd1-034-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "鬼塚夏美",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-sd1-035-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "ウィーン・マルガレーテ",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-sd1-036-P",
        "effect": "効果なし",
        "rarity": "P"
    },
    {
        "name": "鬼塚冬毬",
        "product": "スタートデッキ ラブライブ！スーパースター!!",
        "type": "エネルギー",
        "number": "PL!SP-sd1-037-P",
        "effect": "効果なし",
        "rarity": "P"
    }
];