/**
 * quiz.htmlの内容
 */

//クイズの問題や選択肢、正解を入れる配列
let quizdata = [
    [
        ['世界で一番多い血液型は？', ['A.A型','B.B型','C.O型','D.AB型'], 3,[[40,0],[45,0],[95,0],[100,0]], '📞日本では、一番多いのがA型で、次いで、O型、B型、AB型の順らしい！'],
        ['哺乳類に分類される海の生き物はどれでしょう？', ['A.サメ','B.クジラ','C.ナマコ','D.イカ'], 2,[[35,0],[80,0],[90,0],[100,0]], '📞哺乳類は水中だと呼吸ができないはず！'],
        ['三大栄養素とは「炭水化物」「タンパク質」とあともう一つはなんでしょう？', ['A.脂質','B.ビタミン','C.ミネラル','D.糖質'], 1, [[30,0],[25,0],[25,0],[20,0]], '📞三大栄養素をPFCと呼ぶこともあるね！'],
        ['赤色と青色の絵具を混ぜると何色になるでしょう？', ['A.オレンジ色','B.紫色','C.灰色','D.桃色'], 2, [[10,0],[80,0],[90,0],[100,0]], '📞赤と青の中間の色といえば？'],
        ['最高気温30℃に達した日を何というでしょう？', ['A.夏日','B.真夏日','C.猛暑日','D.酷暑日'], 2, [[10,0],[55,0],[90,0],[100,0]], '📞最近は30℃を超えても驚かなくなったな～'],
        ['世界一栄養価のない野菜としてギネス登録されているのはどれでしょう？', ['A.きゅうり','B.ワケギ','C.春菊','D.ネギ'], 1, [[30,0],[55,0],[80,0],[100,0]], '📞栄養がなさ過ぎて、武井壮が絶対に食わない野菜らしい。'],
        ['畑の肉と呼ばれるものはなんでしょう？', ['A.かぼちゃ','B.じゃがいも','C.大豆','D.りんご'], 3, [[15,0],[50,0],[95,0],[100,0]], '📞肉はタンパク質が多く含まれているよな～'],
        ['森のバターと呼ばれるものはなんでしょう？', ['A.アボカド','B.バナナ','C.ドリアン','D.じゃがいも'], 1, [[55,0],[70,0],[85,0],[100,0]], '📞バターは脂肪分が多いです。'],
        ['サハラ砂漠の「サハラ」の意味はなんでしょう？', ['A.不滅','B.古代','C.永遠','D.砂漠'], 4, [[20,0],[45,0],[70,0],[100,0]], '📞サハラ砂漠は南極を除けば、世界一広い砂漠の中の砂漠！'],
        ['せんべいやスナック菓子の「サラダ味」とは、何の味のこと？', ['A.グリーンサラダ味','B.サラッとした味','C.サラダ油味','D.野菜味'], 3, [[25,0],[45,0],[75,0],[100,0]], '📞サラダはうまい！'],
        ['次のうち腐らないものはどれでしょう？', ['A.ハチミツ','B.トマト','C.ネギ','D.コンソメスープ'], 1, [[55,0],[65,0],[75,0],[100,0]], '📞ドライフルーツなんかは腐りにくいよね。'],
        ['シュークリームの「シュー」の意味は？', ['A.バリバリ','B.山','C.キャベツ','D.生'], 3, [[20,0],[45,0],[75,0],[100,0]], '📞シュークリームはうまい！'],
        ['次のうち車のナンバープレートに使われない平仮名は？', ['A.わ','B.あ','C.お','D.え'], 3, [[25,0],[50,0],[80,0],[100,0]], '📞「し」「へ」「ん」も使われないらしい。'],
        ['フグの膨らんでいる部分は、どの部位？', ['A.肺','B.頬','C.胃','D.手'], 3, [[30,0],[60,0],[95,0],[100,0]], '📞普通に考えたら、頬だけど...'],
        ['電話をかける時に非通知にするための番号は？', ['A.111','B.184','C.186','D.232'], 2, [[20,0],[50,0],[75,0],[100,0]], '📞電話番号を知られるのは嫌よね～'],
        ['面積が一番小さい都道府県はどこでしょう？', ['A.佐賀県','B.香川県','C.沖縄県','D.岩手県'], 2, [[30,0],[65,0],[95,0],[100,0]], '📞東京や大阪よりも小さい県があるらしい。'],
        ['カズノコは何の魚の卵でしょう？', ['A.鮭','B.ボラ','C.ハタハタ','D.ニシン'], 4, [[10,0],[35,0],[60,0],[100,0]], '📞両親としては良い子供がたくさん生まれてほしいものだな～'],
        ['世界で初めて宇宙に行った人物は誰でしょう？', ['A.ライト兄弟','B.アームストロング','C.キュリー夫人','D.ガガーリン'], 4, [[20,0],[40,0],[60,0],[100,0]], '📞地球は青かったらしいです。'],
        ['床屋の渦巻型のポール看板の、赤は動脈、青は静脈を意味します。では、白は何を意味するでしょう？', ['A.湿布','B.白衣','C.泡','D.包帯'], 4, [[25,0],[50,0],[70,0],[100,0]], '赤が動脈で、青が静脈だから、体に関係してそう。'],
        ['サボテンの「トゲ」って実は・・・', ['A.葉っぱ','B.果実','C.根','D.おしべ'], 1, [[40,0],[70,0],[90,0],[100,0]], '📞砂漠は水がなくて本当にきつい。'],
        ['海上自衛隊で金曜日に必ず食べるものは？', ['A.鍋','B.カレー','C.肉じゃが','D.焼き魚'], 2, [[20,0],[50,0],[75,0],[100,0]], '📞海上生活をしていると、今日が何曜日かわからなくなりそう。'],
        ['大根は白に見えるが本来異なる色である。その本来の色とは？', ['A.緑','B.灰色','C.赤','D.透明'], 4, [[10,0],[30,0],[60,0],[100,0]], '📞雪も白く見えるけど、よくよく見ると...'],
        ['バターはもともと食品とは異なる用途で用いられていた。その用途はどれでしょう？', ['A.洗剤','B.スタンプ','C.おもり','D.医薬品'], 4, [[25,0],[50,0],[70,0],[100,0]], '📞バターは80%以上が脂肪らしい。'],
        ['豆まきをしなくてよいとされる苗字の人は？', ['A.ワタナベ','B.イトウ','C.タナカ','D.サトウ'], 1, [[30,0],[50,0],[75,0],[100,0]], '📞節分の時はたいして好きでもない豆をいっぱい食べてしまう...'],
        ['死人と結婚するときに大統領の審査が必要であるという法律が存在する国は？', ['A.ロシア','B.フランス','C.アメリカ','D.イタリア'], 2, [[25,0],[55,0],[75,0],[100,0]], '📞...'],
        ['世界一硬い食べ物は？', ['A.草加(そうか)せんべい','B.カンパン','C.鰹(かつお)節','D.あたりめ'], 3, [[25,0],[50,0],[80,0],[100,0]], '📞硬いからと言って、食べにくいとは限らないような...ダイヤモンドだって意外と割れやすいし。'],
        ['明治時代「アイスクリーム」とは誰のこと？', ['A.占い師','B.高利貸し','C.大金持ち','D.問屋'], 2, [[20,0],[60,0],[80,0],[100,0]], '📞アイスは日本語で氷。'],
        ['カルピスの、ラベルの水玉があらわしているのは？', ['A.恋心','B.青春の記憶','C.シャボン玉','D.天の川'], 4, [[10,0],[20,0],[55,0],[100,0]], '📞カルピス発売した日ってたしか7月7日。'],
        ['蚊が自力で飛べるのは、ビルでいうと何階の高さまで？', ['A.2~3階','B.15~18階','C.20~21階','D.7~8階'], 1, [[40,0],[70,0],[90,0],[100,0]], '📞低い階の家に住むと、虫がめっちゃ入ってくるよ。'],
        ['次のうち、本当に目からウロコが落ちるのは？', ['A.ワニ','B.ヤモリ','C.ヘビ','D.カエル'], 3, [[30,0],[60,0],[95,0],[100,0]], '📞...'],
        ['金魚と同じように、実在する魚は？', ['A.白金魚','B.鉄魚','C.銅魚','D.硫黄魚'], 2, [[30,0],[65,0],[95,0],[100,0]], '📞白金ってプラチナのことだよな。'],
        ['キリンの睡眠時間はどれくらい？', ['A.8時間','B.20時間','C.20分','D.3時間'], 3, [[25,0],[50,0],[80,0],[100,0]], '📞武井壮は45分睡眠でも充分な睡眠がとれるらしい。'],
        ['人間の体内にある血管をつなぎ合わせるとどれくらいの長さになる？', ['A.42km','B.1km','C.500km','D.10万km'], 4, [[25,0],[50,0],[70,0],[100,0]], '📞500kmは東京-大阪間、10万kmは地球2周半くらいですね。'],
        ['床に落とした食べ物でも「すぐに拾えば大丈夫」というような意味で「3秒ルール」という言葉を使う人がいます。実際には落ちて何秒までなら拾って食べても大丈夫でしょうか？', ['A.1秒','B.5秒','C.10秒','D.落とした時点でアウト'], 4, [[30,0],[50,0],[70,0],[100,0]], '📞酒はちょっとでも飲んで運転したら、飲酒運転になるから...'],
        ['お寿司屋さんでは、醤油のことをある色の名前で呼びます。それは何でしょう？', ['A.アカ','B.ミドリ','C.ムラサキ','D.クロ'], 3, [[25,0],[50,0],[80,0],[100,0]], '📞高級なお寿司屋さんに行きたいけど高い！'],
        ['選挙運動スタッフにはおやつ代（茶菓子）が支給されます。その金額はいくらまででしょうか？', ['A.200円','B.500円','C.1000円','D.5000円'], 2, [[25,0],[55,0],[75,0],[100,0]], '📞きのこの山とたけのこの里がもらえたらうれしい。'],
        ['次の野菜のうち、ひとつは日本語ではありません。それはどれでしょうか？', ['A.シイタケ','B.レンコン','C.オクラ','D.ダイコン'], 3, [[25,0],[50,0],[80,0],[100,0]], '📞全部日本語っぽい名前だけど、漢字で当てはめてみると...'],
        ['お医者さんや看護師さんは、基本的に白い白衣を着ますが、手術の時には、青緑色の制服を着る人が多いです。いったいなぜ？', ['A.色によって役割分担があるため','B.目を疲れにくくするため','C.菌が繁殖しないための、特殊な加工をしているから。','D.昔からの習わしのため。'], 2, [[10,0],[50,0],[80,0],[100,0]], '📞スキー場でゴーグルを外すとすごくまぶしい。'],
        ['ギリシャでは日本語の「たべるな」という言葉が通じます。現地での意味は何でしょうか？', ['A.日本語と同じ','B.デザート','C.学校給食','D.大衆食堂'], 4, [[30,0],[60,0],[65,0],[100,0]], '📞食べるなって言われると、食べたくなってしまう。'],
        ['たい焼きは、元々は鯛の形ではありませんでした。どんな形をしていたでしょうか？', ['A.ウサギ','B.カメ','C.ヒヨコ','D.人形'], 2, [[35,0],[65,0],[95,0],[100,0]], '📞鯛の形になるまではあまり売れなかったらしい。'],
        ['飛行機の操縦士と副操縦士は、食事の際に絶対に同じメニューを食べません。その理由は何でしょうか？', ['A.単純に好みが違う','B.食材の減りの偏りを減らすため','C.特に理由はない','D.食中毒対策'], 4, [[20,0],[40,0],[60,0],[100,0]], '📞操縦士に万が一のことがあったら、困るよね。'],
        ['玉ねぎを切る時に涙が出にくくなるために必要な調理器具とは何でしょうか？', ['A.切れ味のいい包丁','B.きれいなまな板','C.竹串','D.中華鍋'], 1, [[50,0],[90,0],[95,0],[100,0]], '📞玉ねぎを切ると涙が出る理由は、玉ねぎを切ることで細胞が壊れることで硫化アリルという物質が空気中に放出されるからです。'],
        ['リンカーンは大統領になる前は何をしていたでしょうか？', ['A.プロ野球選手','B.猟師','C.レスラー','D.タクシー運転手'], 3, [[25,0],[50,0],[80,0],[100,0]], '📞リンカーンは身長が193cmあったらしいです。'],
        ['氷が長持ちする方法はなんでしょう？', ['A.塩をいれた水で氷を作る','B.沸騰したお湯をいれて氷を作る','C.砂糖をいれた水で氷を作る','D.お酢をいれた水で氷を作る'], 2, [[25,0],[55,0],[75,0],[100,0]], '📞理科の授業で水は0℃になると氷になるって習ったけど、あくまで、それは"純粋な"水です。'],
        ['ナメクジは塩で溶けますが、他にもある調味料で溶けます。それは何でしょうか？', ['A.醤油','B.砂糖','C.小麦粉','D.片栗粉'], 2, [[20,0],[60,0],[80,0],[100,0]], '📞ナメクジは体がほとんど水分でできているから、塩をかけると、浸透圧の関係で、水分が塩の方に移動することによって、ナメクジが溶けてしまうのです。'],
        ['宇宙で太陽を観ると何色になっているでしょうか？', ['A.赤色','B.黒色','C.白色','D.青色'], 3, [[30,0],[50,0],[90,0],[100,0]], '📞太陽の光は、赤、橙、黄、緑、青、藍、紫色からなっているから、それらを全て混ぜると何色だ？'],
        ['御社と貴社の使い分けで正しいものは？', ['A.御社は顧客向け、貴社は対等な立場','B.御社は話言葉、貴社は書き言葉','C.御社は謝罪例文、貴社は通常文章','D.御社は敬語、貴社は謙譲語'], 2, [[20,0],[60,0],[80,0],[100,0]], '📞面接のときは御社って言うよなぁ'],
        ['次のうち、実際に北海道に存在する川は？', ['A.イトオシイ川','B.クルオシイ川','C.ヤリキレナイ川','D.チョウシデナイ川'], 3, [[25,0],[50,0],[80,0],[100,0]], '📞アイヌ語で「魚の住まない川」という意味の川。'],
        ['ドラゴンボールのベジータは何cmでしょうか？', ['A.159cm','B.164cm','C.179cm','D.184cm'], 2, [[20,0],[60,0],[80,0],[100,0]], '📞悟空の身長は175cmで、ブルマの身長は165cmです。'],
        ['靴の一種、「ローファー」には英語でどんな意味があるでしょうか？', ['A.怠け者','B.働き者','C.親不孝者','D.幸せ者'], 1, [[30,0],[55,0],[75,0],[100,0]], '📞スニーカーじゃなくてローファーをはいて学校に来てる人は、きちんとしているように見えるけど...'],
        ['海上で事件や事故が起こった時、海上保安庁に通報する番号はどれでしょうか？', ['A.104','B.118','C.177','D.189'], 2, [[25,0],[55,0],[75,0],[100,0]], '📞警察は110番で救急は119番だから...'],
        ['炊飯器の保温機能は最大でだいたい何時間くらいが限度でしょうか？', ['A.12時間','B.24時間','C.36時間','D.48時間'], 2, [[30,0],[65,0],[90,0],[100,0]], '📞炊飯器に米を入れっぱなしにするとすごく硬い部分とすごく柔らかい部分ができてとてもまずいです。'],
        ['ラー油の「ラー」とはどんな意味でしょうか？', ['A.辛い','B.香ばしい','C.赤い','D.おいしい'], 1, [[35,0],[65,0],[90,0],[100,0]], '📞ラー油は赤唐辛子に、ねぎ、ニンニクなどの香味野菜や香辛料を合わせ、ごま油などの植物油で加熱したもの。'],
        ['鏡餅の上にのっている果物は何でしょう？', ['A.みかん','B.ゆず','C.だいだい','D.りんご'], 3, [[30,0],[60,0],[95,0],[100,0]], '📞鏡餅の上にのっている果物の意味は、家が代々発展していってほしいという願いが込められているそう。'],
        ['沿岸地域で、朝と夕方に海風から陸風、または陸風から海風に変わるときの無風状態を何と呼ぶ？', ['A.やみ','B.なぎ','C.さぎ','D.しけ'], 2, [[25,0],[60,0],[90,0],[100,0]], '📞全集中 水の呼吸 拾壱ノ型'],
        ['フランス革命のあと断頭台の露と消えたマリー=アントワネットが、王妃時代に飢えた民衆に言ったとされる言葉はどれ？', ['A.パンがなければパスタを食べればいいのに','B.パンがなければお米を食べればいいのに','C.パンがなければリンゴを食べればいいのに','D.パンがなければお菓子を食べればいいのに'], 4, [[20,0],[40,0],[60,0],[100,0]], '📞この発言で、当時のマリーアントワネットの身分と無教養具合がとてもよくわかるね。'],
        ['「シンフォニー」の意味は？', ['A.幻想曲','B.交響曲','C.狂詩曲','D.夜想曲'], 2, [[20,0],[60,0],[80,0],[100,0]], '📞第9もシンフォニーですね～'],
        ['森林が伐採されることで、増加すると考えられる気体は次のうちどれか？', ['A.窒素','B.二酸化炭素','C.水素','D.酸素'], 2, [[10,0],[80,0],[90,0],[100,0]], '📞植物は光合成をします。'],
        ['太陽の表面温度は次のうちどれか？', ['A.60℃','B.600℃','C.6000℃','D.60000℃'], 3, [[5,0],[15,0],[60,0],[100,0]], '📞太陽の約75％は水素でできているらしい。'],
        ['特有の臭いを持ち、薄い青色で、成層圏から太陽からの紫外線を遮る気体は次のうちどれか？', ['A.二酸化炭素','B.一酸化炭素','C.オゾン','D.二酸化窒素'], 3, [[10,0],[20,0],[90,0],[100,0]], 'その気体って酸素の同素体だよね'],
        ['麻雀で2索と3索などの形で両側の2枚の牌で待つことを何という？', ['A.リャンメン待ち','B.タンキ待ち','C.カンチャン待ち','D.ペンチャン待ち'], 1, [[30,0],[50,0],[75,0],[100,0]], '📞平和に必要な待ち方ですね。'],
        ['ハイヒールが生まれた当初の目的は？', ['A.おしゃれのため','B.汚物に触れないようにするため','C.ステップを踏んで音を出すこと','D.脚を細く見せること'], 2, [[25,0],[55,0],[75,0],[100,0]], '📞...'],
        ['カルボナーラとはどういう意味でしょう？', ['A.炭焼きのパスタ','B.ベーコンのパスタ','C.おいしいパスタ','D.クリーミーなパスタ'], 1, [[35,0],[65,0],[75,0],[100,0]], '📞カルボナーラはイタリア料理だよなぁ'],
        ['消しゴムを包む紙のケースの役割は？', ['A.プラスチック製品とくっつかないようにするため','B.静電気防止のため','C.ゴムに刻めない、商品名を印刷するため','D.本体に汚れが付かないようにするため'], 1, [[35,0],[45,0],[70,0],[100,0]], '📞「消しゴム」って名前だけど、今はゴム製よりもプラスチック製のほうが主流らしい。'],
        ['豆腐に「腐」という漢字を用いるのはなぜ？', ['A.豆が腐ったような匂いがするから','B.発酵させているから','C.作成の工程で大豆を腐らせているから','D.「腐」には「ぶよぶよと柔らかい」や「塊」という意味があるから'], 4, [[25,0],[50,0],[75,0],[100,0]], '📞豆腐は中国が発祥の地らしい。'],
        ['九州北部で食用として市場に流通しているものは？', ['A.クマノミ','B.タツノオトシゴ','C.サンゴ','D.イソギンチャク'], 4, [[25,0],[50,0],[70,0],[100,0]], '📞有明海沿岸で、「わけのしんのす」と呼ばれ食べられているそうです。調理方法はみそ煮や唐揚げだそうです。'],
        ['ウナギの刺身を見かけないのはなぜ？', ['A.血に毒があるから','B.生だと噛み切れないから','C.美味しくないから','D.とても固いから'], 1, [[40,0],[60,0],[80,0],[100,0]], '📞静岡県では食べられることもあるのだとか'],
        ['くしゃみの時速はどの程度？', ['A.自動車(60km/h)','B.新幹線(300km/h)','C.チーター(120km/h)','D.自転車(15km/h)'], 2, [[10,0],[55,0],[95,0],[100,0]], '📞咳の時速は約220km/hです。'],
        ['ウインカーの点滅速度は、何を基準にしている？', ['A.人間が緊張した際の脈拍の頻度','B.人間の呼吸の頻度','C.人間の平均的な歩行速度','D.人間の会話のテンポ'], 1, [[30,0],[50,0],[75,0],[100,0]], '📞ドライバーの安全を考えた点滅速度なんだとか'],
        ['選挙の投票用紙にはある特徴があります。それは一体なんでしょうか？', ['A.折り曲げても勝手に開く','B.燃やせない','C.鉛筆以外では字が書けない','D.高級な紙が使われている'], 1, [[30,0],[50,0],[75,0],[100,0]], '📞選挙用紙はポリプロピレン樹脂でできている。'],
        ['ハイジャックの意外な語源とは？', ['A.空高いところで襲撃するから','B.テンションがハイだから','C.ジャックという名前が多かったから','D.高い金銭を要求するから'], 3, [[25,0],[50,0],[80,0],[100,0]], '📞ハイジャックの「ハイ」は「high」ではなく、「hi」なんだとか'],
        ['臭い靴にお金を入れると臭いがなくなります。何円玉を入れるとよいでしょうか？', ['A.1円玉','B.10円玉','C.50円玉','D.500円玉'], 2, [[5,0],[40,0],[70,0],[100,0]], '📞1円玉はアルミニウム、10円玉は青銅、50円玉は白銅、500円玉はニッケル黄銅でできている。'],
        ['ラクダのこぶには何が詰まっているでしょうか？', ['A.脂肪','B.水','C.血液','D.骨'], 1, [[30,0],[50,0],[75,0],[100,0]], '📞過酷な砂漠環境を生き抜くために、必要な栄養をこぶにためているらしい。'],
        ['ハリセンボンの針は、実際は何本あるでしょう？', ['A.約50本','B.約350本','C.約500本','D.当然1000本'], 2, [[25,0],[55,0],[75,0],[100,0]], '📞当然...'],
        ['次のうち、水の比重（密度）が最も大きくなる温度はどれか？', ['A.4℃','B.0℃','C.-173℃','D.-273℃'], 1, [[25,0],[50,0],[75,0],[100,0]], '📞水の融点は0℃だから...'],
        ['ベートヴェン作曲のピアノ曲「エリーゼのために」の本当の曲名は？', ['A.エリザベスのために','B.マリーアンヌのために','C.テレーゼのために','D.マリアのために'], 3, [[30,0],[40,0],[80,0],[100,0]], '📞エリーゼエリーゼエリーゼエリーゼエリーゼエリーゼエリーゼエレーゼ...'],
        ['日本では飛鳥時代から平安時代頃にかけて「蘇」という乳製品が作られていました。それはなんでしょうか？', ['A.チーズ','B.ヨーグルト','C.ミルクココア','D.生クリーム'], 1, [[40,0],[70,0],[80,0],[100,0]], '📞...'],
        ['次のうちで、「金銀版の初めに登場する博士」の名前は？', ['A.オーキド博士','B.ナナカマド博士','C.ウツギ博士','D.オダマキ博士'], 3, [[20,0],[30,0],[70,0],[100,0]], '📞金銀版はジョウト地方が舞台です。'],
        ['日常的に「マジ？」という言葉がよく使われますが、「マジ」という言葉は、一体いつからあったでしょう？', ['A.江戸時代','B.明治時代','C.昭和','D.平成'], 1, [[30,0],[50,0],[75,0],[100,0]], '📞マジは「真面目」から派生してできた言葉です。'],
        ['植物にも人間と同じようにあるものがあります。あるものとはなんでしょう？', ['A.血液型','B.脳みそ','C.心臓','D.髪の毛'], 1, [[40,0],[60,0],[80,0],[100,0]], '📞...'],
        ['ランニングマシンは当初何として発明されたか？', ['A.パンこね機','B.プレス機','C.刑罰器具','D.ライン工場のライン'], 3, [[5,0],[15,0],[60,0],[100,0]], '📞...'],
        ['イラストの恐竜の肌の色はどのように決められることが多いか？', ['A.かっこよさ','B.想像','C.化石のデータ','D.似ている動物'], 2, [[25,0],[55,0],[80,0],[100,0]], '📞恐竜は今から約1億年前に生きていたんだとか'],
        ['エジソンが作ろうとしていた機械は？', ['A.霊と交信する機械','B.コンピューター','C.化石を復元する機械','D.リサイクルをする機械'], 1, [[40,0],[50,0],[80,0],[100,0]], '📞エジソンならどんなものでも作れそう'],
        ['次のうち、実際に存在する料理はどれでしょう？', ['A.ゆうれい寿司','B.ひとだま寿司','C.かんおけ寿司','D.しにん寿司'], 1, [[30,0],[50,0],[75,0],[100,0]], '📞...'],
        ['猫は暑くても汗をかきませんが、唯一汗が出る部分があります。それはどこでしょう？', ['A.鼻','B.耳','C.肉球','D.しっぽ'], 3, [[20,0],[40,0],[80,0],[100,0]], '📞...'],
        ['日本初の警察犬が誕生したのはいつでしょうか？', ['A.江戸時代','B.明治時代','C.大正時代','D.平成になってから'], 3, [[30,0],[60,0],[95,0],[100,0]], '📞とある人気アニメでは、カラスが喋っていたけど...'],
        ['猫の平熱は何度でしょうか？', ['A.約35℃','B.約36.5℃','C.約38.5℃','D.約40℃'], 3, [[25,0],[50,0],[80,0],[100,0]], '📞猫と人間って体温が近いけど、猫の方がパワーありそう'],
        ['日本郵便ポストは昔は赤色ではありませんでした。さて、何色だったでしょうか？', ['A.青色','B.茶色','C.黒色','D.黄色'], 3, [[20,0],[40,0],[80,0],[100,0]], '📞ポストは夜もはがきを出せるから便利だよね。'],
        ['将棋の駒の一つで、前に1マス動けるのは？', ['A.飛車','B.歩兵','C.王将','D.桂馬'], 2, [[5,0],[90,0],[95,0],[100,0]], '📞将棋では一番弱い駒だけど、この駒をうまく使える人が強いだろうな。'],
        ['ロダン作の彫刻「考える人」は、何を考えているでしょうか？', ['A.人生とは何か','B.平和とは何か','C.働くとは何か','D.特に何も考えていない'], 4, [[25,0],[50,0],[70,0],[100,0]], '📞...'],
        ['次の中で実際にある数学用語は？', ['A.セクシー素数','B.ダンディ素数','C.ハンサム素数','D.フォーリン素数'], 1, [[30,0],[50,0],[75,0],[100,0]], '📞この正解は差が6の素数(例7,13)のような素数のことをいう。'],
        ['「カーディガン」の名前の由来は？', ['A.商品名として考案した','B.イギリスのカーディガン地方で作られた','C.カーディガン伯爵が考案した','D.製造メーカーの名前から取った'], 3, [[20,0],[50,0],[90,0],[100,0]], '📞エネルギーや力の単位であるジュールとかニュートンってもともとは何の名前？'],
        ['次のうち、最も大きい酔いの度合いを表すものはどれ？', ['A.泥酔','B.昏睡','C.ほろ酔い','D.酩酊'], 2, [[30,0],[65,0],[70,0],[100,0]], '📞この状態になると、最悪死んでしまう。'],
        ['ゴリラの血液型は1種類しかないのですが、何型でしょうか？', ['A.O型','B.AB型','C.B型','D.A型'], 3, [[25,0],[45,0],[75,0],[100,0]], '📞インド人もこの血液型の人が多いのだとか'],
        ['茶室の壁面に設けられた狭い入口を何と呼ぶ？', ['A.勝手口（かってぐち）','B.楽屋口（がくやぐち）','C.躙口（にじりぐち）','D.茶口（ちゃぐち）'], 3, [[20,0],[30,0],[70,0],[100,0]], '📞この部屋を開けると中に千利休がいそう。'],
        ['日本で人気のファーストフードのとあるメニューは、ドイツでは「ポメス」と呼ばれます。それは一体何でしょう？', ['A.ハンバーガー','B.チキンナゲット','C.フライドポテト','D.アイスクリーム'], 3, [[25,0],[50,0],[80,0],[100,0]], '📞イメージと全然違う響きだな～'],
        ['「ウォーリーを探せ」でお馴染みのウォーリー。彼の肩書きとされているのは、次のうちどれ？', ['A.コックさん','B.バックパッカー','C.脱獄した囚人','D.コメディアン'], 3, [[20,0],[40,0],[80,0],[100,0]], '📞ウォーリーは赤と白のボーダーの服を着ているね。'],
        ['母の日に贈る花で有名な「カーネーション」。さて、黄色のカーネーションの花言葉は次のうちどれ？', ['A.家族愛','B.感謝','C.嫉妬','D.軽蔑'], 4, [[25,0],[50,0],[70,0],[100,0]], '📞赤のカーネーションは「母の愛」、ピンクは「感謝」という意味があるけど...'],
        ['アメンボの「アメ」を漢字で書くと「雨」ではなく「飴」と書きます。その理由とは何でしょう？', ['A.飴のような匂いがするから。','B.飴を好んで食べるから。','C.「雨」という言葉が不吉とされていたから。','D.古代の飴に匂いが似ているから。'], 1, [[30,0],[50,0],[75,0],[100,0]], '📞...'],
        ['次の羽を持たない虫のうち、空を飛べるものは？', ['A.ダンゴムシ','B.クモ','C.ミノムシ','D.カマキリ'], 2, [[20,0],[60,0],[80,0],[100,0]], '📞ニューヨークに行ったら、それが飛んでいるところを見れるかも。'],
        ['江戸幕府の3代将軍は？', ['A.徳川家康','B.徳川家光','C.徳川綱吉','D.徳川慶喜'], 2, [[20,0],[60,0],[80,0],[100,0]], '📞生まれながらの将軍で有名な人だね。'],
        ['イタリアの首都は？', ['A.ローマ','B.ロンドン','C.パリ','D.マドリード'], 1, [[40,0],[60,0],[80,0],[100,0]], '📞コロッセオがある場所だな。'],
        ['オーストラリアの首都は？', ['A.シドニー','B.メルボルン','C.アデレード','D.キャンベラ'], 4, [[30,0],[55,0],[65,0],[100,0]], '📞人口が多い都市が首都とは限らないから...'],
        ['世界で最も面積が大きい国は？', ['A.アメリカ','B.カナダ','C.ロシア','D.中国'], 3, [[20,0],[40,0],[80,0],[100,0]], '📞世界一人口が多いのは中国'],
        ['東京スカイツリーの高さは？', ['A.93m','B.300m','C.333m','D.634m'], 4, [[10,0],[30,0],[50,0],[100,0]], '📞スカイツリーがある場所は昔は武蔵と呼ばれていたんだとか'],
        ['世界で一番長い川は？', ['A.アマゾン川','B.セーヌ川','C.ガンジス川','D.ナイル川'], 4, [[40,0],[45,0],[55,0],[100,0]], '📞世界で一番流域面積が広い川はアマゾン川です。'],
        ['日本で一番長い川は？', ['A.信濃川','B.利根川','C.北上川','D.四万十川'], 1, [[35,0],[65,0],[90,0],[100,0]], '📞日本で一番流域面積が広い川は利根川です。'],
        ['次のうち、光の三原色の正しい組み合わせはどれ？', ['A.赤、黄色、青','B.赤、白、黒','C.赤、青、緑','D.赤、緑、黄色'], 3, [[20,0],[30,0],[70,0],[100,0]], '📞この三色を混ぜると白色になります。'],
        ['相対性理論を提唱したのは誰？', ['A.ニュートン','B.ガリレオ','C.ガウス','D.アインシュタイン'], 4, [[20,0],[40,0],[60,0],[100,0]], '📞相対性理論は20世紀初頭に提唱された。'],
        ['アメリカの首都は？', ['A.ボストン','B.ワシントン','C.ロサンゼルス','D.ニューヨーク'], 2, [[10,0],[50,0],[70,0],[100,0]], '📞ホワイトハウスはどこにある？'],
        ['日本の旧暦で12月をなんという？', ['A.葉月','B.弥生','C.師走','D.如月'], 3, [[20,0],[40,0],[80,0],[100,0]], '📞...'],
        ['「5G」のGはどういう意味？', ['A.ジェネレーション(Generation)','B.グレード(Grade)','C.グローバル(Global)','D.グレート(Great)'], 1, [[40,0],[70,0],[90,0],[100,0]], '📞5Gは高速大容量かつ低遅延で多数に同時接続できるらしい。まさに通信の新時代だね。'],
        ['次のうち、2親等ではないのは？', ['A.兄','B.祖母','C.叔父','D.孫'], 3, [[30,0],[40,0],[95,0],[100,0]], '📞両親は1親等。'],
        ['アンモニアの化学式は？', ['A.H2O','B.CO2','C.CH4.','D.NH3'], 4, [[10,0],[15,0],[50,0],[100,0]], '📞Hは水素、Cは炭素、Nは窒素、Oは酸素。'],
        ['「言う」の謙譲語は？', ['A.おっしゃる','B.述べる','C.言われる','D.申す'], 4, [[10,0],[20,0],[30,0],[100,0]], '📞謙譲語は自分を下げる言葉遣い。'],
        ['2021年12月末時点での時価総額世界一の企業は？', ['A.アップル','B.サムスン','C.トヨタ','D.アマゾン'], 1, [[40,0],[60,0],[70,0],[100,0]], '📞10人いたら7人はこの企業の製品を使ってる気がする。'],
        ['姫路城がある都道府県は？', ['A.大阪府','B.兵庫県','C.三重県','D.奈良県'], 2, [[20,0],[60,0],[70,0],[100,0]], '📞姫路城は世界遺産にもなっている。'],
        ['2021年12月末時点で日本国内史上最高気温を記録している都道府県は？', ['A.高知県四万十市','B.埼玉県熊谷市','C.群馬県館林市','D.山形県山形市'], 2, [[20,0],[60,0],[90,0],[100,0]], '📞この都市はフェーン現象とヒートアイランド現象によって、ここまでの暑さを記録したんだとか'],
        ['次のうち、素数ではない数字はどれ？', ['A.1','B.2','C.3','D.5'], 1, [[50,0],[80,0],[90,0],[100,0]], '📞素数とは1とその数自身の合計2つが約数である自然数のことを言う。'],
        ['4と6の最小公倍数は？', ['A.1','B.2','C.12','D.24'], 3, [[5,0],[10,0],[95,0],[100,0]], '📞2と3の公倍数は6や12や36などがあります。'],
    ],
    ['result-0.html', 'result-1.html', 'result-2.html', 'result-3.html', 'result-4.html', 'result-5.html', 'result-6.html', 'result-7.html', 'result-8.html', 'result-9.html', 'result-10.html', ]
];

let currentquizNo;      //(quizdata配列の)問題番号
let quizcount = 0;
let correctcount = 0;   //正解数
let experiencequiz = [];    //すでに出題した問題を入れるための配列
let excount = 0;        //experiencequiz配列の添え字に使う用
let fiftyfiftyused = false;     //50-50を使ったかどうか
let audienceused = false;       //オーディエンスを使ったかどうか
let audienceused2 = false;      //プログラムの仕様上必要
let telephoneused = false;
let remnum_array = [];          //消す選択肢を入れる配列

//問題を表示
print_quiz();

//50-50で選択肢を消す関数
document.getElementById('fiftyfifty').addEventListener('click', function(e){
    if(!fiftyfiftyused){
        var i = 0;
        while(i < 2){
            var num = Math.floor(Math.random()*4)+1;
            if(!remnum_array.includes(num) && num != quizdata[0][currentquizNo][2]){
                remnum_array.push(num);
                i++;
            }
        }
        let parent = document.querySelector('.Choices');
        let j = 0;
        for(var i = 0; i < 4; i++){
            if(i == remnum_array[0]-1 || i == remnum_array[1]-1){
                if(j == 0){
                    parent.removeChild(parent.children[i]);
                    j++;
                }
                else{
                    parent.removeChild(parent.children[i-1]);
                }
            }
        }
        fiftyfiftyused = true;
    }
    else{
        alert('50-50はすでに使用されました。');
    }
})

//オーディエンスのグラフを作る関数
document.getElementById('audience').addEventListener('click', function(e){
    if(!audienceused){
        let count = 0;
        while(count < 100){
            let rand = Math.floor(Math.random()*100)+1;
            for(var i = 0; i < 4; i++){
                if(quizdata[0][currentquizNo][3][i][0] >= rand){
                    quizdata[0][currentquizNo][3][i][1]++;
                    break;
                }
            }
            count++;
        }

        var ctx = document.getElementById("myBarChart");
        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
            labels: ['A','B','C','D'],
            datasets: [
                {
                    label: 'オーディエンス',
                    data: [quizdata[0][currentquizNo][3][0][1], quizdata[0][currentquizNo][3][1][1], quizdata[0][currentquizNo][3][2][1], quizdata[0][currentquizNo][3][3][1]],
                    backgroundColor: "silver",
                    fontColor: "white"
                }
            ]
            },
            options: {
            title: {
                display: true,
                // text: '結果',
                fontColor: "white"
            },
            scales: {
                xAxes :[{
                    scaleLabel: {                 // 軸ラベル
                        display: true,                // 表示設定
                        labelString: '結果',    // ラベル
                        fontColor: "white",             // 文字の色
                        fontSize: 16                  // フォントサイズ
                    },
                    gridLines: {                   // 補助線
                        color: "rgba(255, 0, 0, 0.2)", // 補助線の色
                    },
                    ticks: {                      // 目盛り
                        fontColor: "white",             // 目盛りの色
                        fontSize: 14                  // フォントサイズ
                    }
                }],
                yAxes: [{
                ticks: {
                    suggestedMax: 100,
                    suggestedMin: 0,
                    stepSize: 10,
                    fontColor: "white",
                    callback: function(value, index, values){
                    return  value +  '%'
                    }
                }
                }]
            },
            }
        });
        audienceused = true;
    }
    else{
        alert('👪はすでに使用されました。');
    }
})

//テレフォンを表示する関数
document.getElementById('telephone').addEventListener('click', function(e){
    if(!telephoneused){
        alert(quizdata[0][currentquizNo][4]);
        telephoneused = true;
    }
    else{
        alert("📞はすでに使用されました。");
    }
})


//解答した後のイベント
after_answer_quiz_event();

//問題を表示するための関数
function print_quiz(){
    //重複しない乱数を生成
    while(true){
        var num = Math.floor(Math.random()*quizdata[0].length);

        //まだ出題していない問題の場合
        if(!experiencequiz.includes(num)){
            experiencequiz.push(num);       //experiencequiz配列の一番後ろに今の問題データを入れる
            break;
        }
    }
    currentquizNo = experiencequiz[excount];
    excount++;

    //問題文
    var question = '<p>第' + (quizcount+1) + '問</p>'
     question += '<p>' + quizdata[0][currentquizNo][0] + '</p>';
    var box = document.getElementsByClassName('box');
    box[0].innerHTML = question;

    //解答ボタン
    var Choices = document.getElementsByClassName('Choices');
    var answer;
    for(var i = 0; i < quizdata[0][currentquizNo][1].length; i++){
        if(i == 0){
            answer = '<input type="button" class="btn btn--yellow btn--cubic" answer-choice="' + (i+1) +'" value="' + quizdata[0][currentquizNo][1][i] + '">';
        }
        else{
            answer += '<input type="button" class="btn btn--yellow btn--cubic" answer-choice="' + (i+1) +'" value="' + quizdata[0][currentquizNo][1][i] + '">';
        }
    }
    Choices[0].innerHTML = answer;
}

//解答した後のイベントを起こすための関数
function after_answer_quiz_event(){
    for(var i = 0; i < 4; i++){
        document.getElementsByClassName('btn')[i].addEventListener('click', function(e){
            if(audienceused && !audienceused2){
                document.getElementById('graph').remove();
                audienceused2 = true;
            }
            //正解発表
            answer_result_event(parseFloat(this.getAttribute('answer-choice')));
        });
    }
}

//次の問題に移るための関数
function register_nextquiz_event(){
    quizcount++;
    //問題を表示
    print_quiz();
    //解答した後のイベント
    after_answer_quiz_event();
}

//正解発表などをする関数(仮実装)
function answer_result_event(choice){
    //正解の場合
    if(quizdata[0][currentquizNo][2] == choice){
        alert('正解です！');
        correctcount++;
    }
    //不正解の場合
    else{
        alert('不正解。\n正解は' + quizdata[0][currentquizNo][1][quizdata[0][currentquizNo][2]-1] + 'です。');
    }
    //次の問題がある場合
    if(quizcount+1 < 10){
        register_nextquiz_event();
    }
    //全問解き終わった場合
    else{
        //結果を見るボタンを表示
        var result_button = document.getElementsByClassName('result-button');
        for(var i = 0; i < 11; i++){
            if(i == correctcount){
                var result = '<a href="result/' + quizdata[1][i] + '"><input type="button" class="r-btn r-btn--yellow r-btn--cubic" id="result" value="結果を見る"></a>';
                result_button[0].innerHTML = result;
                break;
            }
        }

        //問題と選択肢を削除
        document.querySelector('.quiz2').remove();
        document.querySelector('.life-line').remove();
    }
}


