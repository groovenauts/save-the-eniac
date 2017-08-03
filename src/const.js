
export const STEPS = [
  {
    type: "start",
    title: "コンピューターと仲良くなる\nことばのレッスン",
    subtitle: "powered by Groovenauts,inc."
  },
  {
    type: "hero",
    title: "プログラミングってなんだろう？",
    body: "プログラミングは、コンピューターと話をする方法です。\nアメリカのお友達と話をするために英語を使うのと同じように\nコンピューターとを話するには、専用のことばを使わなくてはなりません。\n\nコンピューターにもわかることばを書くことを、プログラミングと言います。\nプログラミングは、コンピューターともっと仲良くなるための方法です。",
    image: require("./assets/img/img_stage0-2.png")
  },
  {
    type: "hero",
    title: "エニアックを助けよう",
    body: "ここに充電できずに困っているコンピューター「エニアック」がいます。\nあなたはこれから彼に話しかけて、充電するのを手助けしてあげましょう。\n\nコンピューターと話すにはいろいろなことばのルールを覚えなくてはいけません。\nはたして、あなたはエニアックを無事に充電することができるでしょうか？",
    image: require("./assets/img/img_stage0-3.png")
  },
  {
    stage: 1.1,
    type: "question",
    title: "はじめまして、僕はサポートコンピューターのモークリーだよ。\nエニアックを助ける前に、まずは自己紹介してあげてほしいんだ。\n日本語は「全角」じゃないと入力できないから気をつけてね。",
    question: "エニアックにあなたの名前を\n教えてあげよう。",
    placeholder: "ここに名前を入力してね",
    updateKey: "name",
    validator: (str, state) => /[^\x00-\x7F]/.test(str),
  },
  {
    stage: 1.2,
    type: "question",
    title: "うまく名前を教えてあげあられたみたいだね。\n次は、エニアックの名前を呼んであげてくれないかな？\nエニアックは、アメリカ生まれだから、英語で呼んであげてね。\n英語は「半角」で入力できるよ。",
    question: "エニアック(ENIAC)の名前を呼んであげよう。",
    placeholder: "ENIAC と入力してね",
    validator: (str, state) => /ENIAC/.test(str),
  },
  {
    stage: 1.3,
    type: "question",
    title: "久しぶりに名前を呼ばれて喜んでいるみたいだ。\n次は、君が何才なのを教えてあげてくれるかな？\n数字は「半角」で入力するんだよ。",
    question: "エニアックにあなたの年を教えてあげましょう。",
    updateKey: "age",
    validator: (str, state) => /^\d*$/.test(str),
  },
  {
    stage: 1.4,
    type: "question",
    title: "{{name}}は{{age}}才なんだね！\nエニアックは71才だから、彼のほうがずっと大人だね。\nエニアックと君はいくつ年が違うのかわかるかい？\n計算記号をうまく使えば、エニアックに計算してもらうことができるよ。",
    question: "エニアックとあなたはいくつ年がちがう？計算記号を正しく使って、エニアックに計算してもらおう。",
    updateKey: "age",
    placeholder: "例）足し算の場合は「71 + {{age}} =」と入力するよ",
    validator: (str, state) => new RegExp(`71\\s*\-\\s*${state.age}\\s*=?`).test(str),
    power: 3,
  },
  {
    type: "hero",
    title: "自己紹介クリア！",
    body: "エニアックにうまく計算してもらうことができたね！\nこんな風に、正しい言葉を使えば、エニアックと話したりいろんな事をお願いすることができるんだ。\n\n次からはもう少し難しいルールを使ったお話の方法を勉強してみよう。",
    image: require("./assets/img/img_eniac_charge.png")
  },
  {
    stage: 2.1,
    type: "question",
    title: "エニアックを充電するために、電池を作らなきゃいけないんだけど、\n電池の中に入れる電解液の配合が書かれた紙が汚れてよめなくなっちゃった。\nA の中に入る数字がわかるかな？",
    question: "Aの中に入る数字がわかるかな？\nA＋1=5",
    placeholder: "A = ",
    validator: (str, state) => /A\s*=\s*4$|^4$/.test(str),
  },
  {
    stage: 2.2,
    type: "question",
    title: "正解！次の配合をためしてみよう。\n今度は記号の中に数字が隠れているみたいだよ。",
    question: "A=3\nB=6\nこのとき、次の計算式がとけるかな？\nA * B =",
    placeholder: "計算結果を入力してね",
    validator: (str, state) => /^18$/.test(str),
  },
  {
    stage: 2.3,
    type: "question",
    title: "もう少しで配合できそうだよ。\n今度は、記号の中に、数字じゃなくてことばが隠れているみたい。\nこたえがわかるかな？",
    question: "A=私の名前は\nB=エニアック",
    placeholder: "A + B の結果を入力してね",
    validator: (str, state) => /^私の名前はエニアック$/.test(str),
    power: 6
  },
  {
    type: "hero",
    title: "電池が完成！",
    body: "無事に電池を作ることができたね。\nどうやらエニアックは「言葉や数字が隠れた」記号を使ってお話するのが得意みたいだ。\nこの記号を使って、もうすこしいろいろな話をしてみよう。",
    image: require("./assets/img/img_battery.png")
  },
  {
    stage: 3.1,
    type: "question",
    title: "さっき作った電池をエニアックに渡したんだけど、どっちが＋で−なのか迷っているみたい。\n途中まではわかるみたいだから、少し手助けしてあげて。\n今度も、記号の中に言葉が隠れているみたいだよ。",
    question: "もし電池の先が A なら＋。\n1 =でっぱっている\n2 =ひらべったい",
    placeholder: "A の中に入るのは1? 2?",
    validator: (str, state) => /^1$/.test(str),
  },
  {
    stage: 3.2,
    type: "question",
    title: "これで、エニアックは電池を見分ける方法を理解したみたいだよ。\n＋だったら右向き、−だったら左向きにとりつけなきゃいけないんだけど\nこのことをエニアックに伝えてあげられるかな？\n正しく電池の付け方を教えられるように、A~D の記号に、正しい数字を当てはめてね。",
    question: "もし\n電池の先が A なら B 向きに取り付ける\n電池の先が C なら D 向きに取り付ける\n1=＋, 2=−, 3=右, 4=左",
    placeholder: "A = \nB = \nC = \nD = \n",
    answer: "A = \nB = \nC = \nD = \n",
    validator: (str, state) => {
      const str2 = _.replace(str, /\s*/g, '')
      return /^(A=1B=3C=2D=4|A=2B=4C=1D=3)$/.test(str2)
    },
  },
  {
    stage: 3.3,
    type: "question",
    title: "いいね。ぶじに電池の取り付けができたみたいだ。\nエニアックは、物事を「もし〜なら〜する」という形で覚えることが得意みたいだね。\n同じように、犬と猫の違いを教えてあげる事はできるかな？",
    question: "もし A なら B と鳴く。\nC なら D と鳴く。\n1=犬, 2=猫, 3=ニャア, 4=ワン\n正しく犬と猫の違いを教えられるように、A~D の記号に、正しい数字を当てはめてね。",
    placeholder: "A = \nB = \nC = \nD = \n",
    answer: "A = \nB = \nC = \nD = \n",
    validator: (str, state) => {
      const str2 = _.replace(str, /\s*/g, '')
      return /^(A=1B=4C=2D=3|A=2B=3C=1D=4)$/.test(str2)
    },
    power: 9
  },
  {
    stage: 3.4,
    type: "question",
    title: "犬と猫の違いも覚えたみたいだよ。\nエニアックは、{{name}} の話し言葉を、こんな感じで理解してるみたいだ。\n",
    question: "もしAが\n犬 なら ワン と鳴く。\n猫 なら ニャア と鳴く。",
    placeholder: "if (A == '犬') {\n  ''\n} else {\n  ''\n}",
    answer: "if (A == '犬') {\n  ''\n} else {\n  ''\n}",
    validator: (str, state) => {
      const str2 = _.replace(str, /\s*/g, '')
      return "if(A=='犬'){'ワン'}else{'ニャア'}" === str2
    },
  },
  {
    stage: 3.5,
    type: "question",
    title: "それじゃあ最後に、もう二度とエニアックが充電切れを起こさないように、とっておきの秘密を教えてあげよう。\n",
    question: "もし\nA が B よりも C なら D する。\n1 = 少ない\n2 = 電池を交換\n3 = 3メモリ\n4 = 充電の残り\nエニアックの充電が切れないように、何を教えればいいだろう？",
    placeholder: "A = \nB = \nC = \nD = \n",
    answer: "A = \nB = \nC = \nD = \n",
    validator: (str, state) => {
      const str2 = _.replace(str, /\s*/g, '')
      return "A=4B=3C=1D=2" === str2
    },
  },
  {
    stage: 3.6,
    type: "question",
    title: "エニアックが理解しやすいように、書き換えてあげることはできるかな？",
    question: "もし\nA が B よりも少ないなら\nC する。",
    answer: "A = '充電の残り'\nB = 3\nC = '電池を交換'\nif (ここを入力してね) {\n  C\n}",
    answer: "A = '充電の残り'\nB = 3\nC = '電池を交換'\nif () {\n  C\n}",
    validator: (str, state) => {
      const str2 = _.replace(str, /\s*/g, '')
      return "A='充電の残り'B=3C='電池を交換'if(A<B){C}" === str2
    },
    power: 12
  },
  {
    type: "hero",
    title: "エニアックの充電完了！",
    body: "エニアックも元気になったよ！\nうんぽーこ！",
    image: require("./assets/img/img_stage_end.png")
  },
]
