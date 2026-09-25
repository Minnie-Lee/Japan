/* =========================================================
   1. 기출 단어 데이터베이스 (총 16장 사진 전체 통합)
   ========================================================= */
const WORD_DATA = [
  // --- [1차 사진: 문맥구성 & 한자읽기 기출] ---
  { kanji: "相次ぐ", reading: "あいつぐ", mean: "잇따르다, 연달다" },
  { kanji: "あいにく", reading: "あいにく", mean: "공교롭게도" },
  { kanji: "あいまい", reading: "あいまい", mean: "애매함" },
  { kanji: "あくび", reading: "あくび", mean: "하품" },
  { kanji: "あこがれ", reading: "あこがれ", mean: "동경" },
  { kanji: "あこがれる", reading: "あこがれる", mean: "동경하다" },
  { kanji: "足元", reading: "あしもと", mean: "발밑" },
  { kanji: "預ける", reading: "あずける", mean: "맡기다" },
  { kanji: "アピール", reading: "アピール", mean: "어필, 호소" },
  { kanji: "溢れる", reading: "あふれる", mean: "넘치다" },
  { kanji: "あらかじめ", reading: "あらかじめ", mean: "사전에, 미리" },
  { kanji: "争う", reading: "あらそう", mean: "다투다, 경쟁하다" },
  { kanji: "アレンジ", reading: "アレンジ", mean: "정리, 변형, 각색" },
  { kanji: "慌ただしい", reading: "あわただしい", mean: "어수선하다, 바쁘다" },
  { kanji: "安易", reading: "あんい", mean: "손쉬움, 안이함" },
  { kanji: "案外", reading: "あんがい", mean: "의외로, 예상 외로" },
  { kanji: "いいかげん", reading: "いいかげん", mean: "건성임, 무책임함" },
  { kanji: "いきなり", reading: "いきなり", mean: "갑자기" },
  { kanji: "育児", reading: "いくじ", mean: "육아" },
  { kanji: "維持", reading: "いじ", mean: "유지" },
  { kanji: "いじめる", reading: "いじめる", mean: "괴롭히다" },
  { kanji: "偉大", reading: "いだい", mean: "위대함" },
  { kanji: "抱く", reading: "いだく", mean: "(마음 등을) 품다" },
  { kanji: "一時的に", reading: "いちじてきに", mean: "일시적으로" },
  { kanji: "一気に", reading: "いっきに", mean: "단숨에" },
  { kanji: "いつのまにか", reading: "いつのまにか", mean: "어느새" },
  { kanji: "緯度", reading: "いど", mean: "위도" },
  { kanji: "違反", reading: "いはん", mean: "위반" },
  { kanji: "意欲", reading: "いよく", mean: "의욕" },
  { kanji: "いらいら", reading: "いらいら", mean: "초조해함, 안절부절못함" },
  { kanji: "いわば", reading: "いわば", mean: "말하자면, 비유하자면" },
  { kanji: "いわゆる", reading: "いわゆる", mean: "소위, 이른바" },
  { kanji: "引退", reading: "いんたい", mean: "은퇴" },
  { kanji: "インパクト", reading: "インパクト", mean: "임팩트, 충격, 인상" },
  { kanji: "打ち消す", reading: "うちけす", mean: "부정하다" },
  { kanji: "うとうと", reading: "うとうと", mean: "꾸벅꾸벅 조는 모양" },
  { kanji: "うなずく", reading: "うなずく", mean: "수긍하다, 끄덕이다" },
  { kanji: "裏付ける", reading: "うらづける", mean: "뒷받침하다" },
  { kanji: "うわさ", reading: "うわさ", mean: "소문" },
  { kanji: "営業", reading: "えいぎょう", mean: "영업" },
  { kanji: "エネルギー", reading: "エネルギー", mean: "에너지" },
  { kanji: "得る", reading: "える", mean: "얻다" },
  { kanji: "エンジン", reading: "エンジン", mean: "엔진" },
  { kanji: "追い払う", reading: "おいはらう", mean: "쫓아 버리다" },
  { kanji: "おかまいなく", reading: "おかまいなく", mean: "신경 쓰지 마세요" },
  { kanji: "納める", reading: "おさめる", mean: "넣다, 납부하다" },
  { kanji: "お世話になる", reading: "おせわになる", mean: "신세를 지다" },
  { kanji: "穏やか", reading: "おだやか", mean: "온화함" },
  { kanji: "劣る", reading: "おとる", mean: "뒤떨어지다" },
  { kanji: "衰える", reading: "おとろえる", mean: "쇠약해지다, 쇠퇴하다" },
  { kanji: "思いきって", reading: "おもいきって", mean: "과감히, 마음 먹고" },
  { kanji: "思い込む", reading: "おもいこむ", mean: "굳게 믿다" },
  { kanji: "主", reading: "おも", mean: "주됨" },
  { kanji: "主に", reading: "おもに", mean: "주로, 대부분" },
  { kanji: "温厚", reading: "おんこう", mean: "온화하고 다정함" },
  { kanji: "宇宙", reading: "うちゅう", mean: "우주" },
  { kanji: "映る", reading: "うつる", mean: "비치다" },
  { kanji: "運送", reading: "うんそう", mean: "운송" },
  { kanji: "偉い", reading: "えらい", mean: "훌륭하다, 대단하다" },
  { kanji: "延期", reading: "えんき", mean: "연기, 미룸" },
  { kanji: "応援", reading: "おうえん", mean: "응원" },
  { kanji: "応対", reading: "おうたい", mean: "응대, 접대" },
  { kanji: "欧米", reading: "おうべい", mean: "구미, 유럽과 미국" },
  { kanji: "大幅", reading: "おおはば", mean: "대폭" },
  { kanji: "補う", reading: "おぎなう", mean: "보충하다" },
  { kanji: "置く", reading: "おく", mean: "놓다, 두다" },
  { kanji: "怒る", reading: "おこる", mean: "화내다" },
  { kanji: "幼い", reading: "おさない", mean: "어리다, 유치하다" },
  { kanji: "収まる", reading: "おさまる", mean: "가라앉다, 해결되다" },
  { kanji: "踊り", reading: "おどり", mean: "춤" },
  { kanji: "介護", reading: "かいご", mean: "간호, 간병" },
  { kanji: "改善", reading: "かいぜん", mean: "개선" },
  { kanji: "会談", reading: "かいだん", mean: "회담" },
  { kanji: "快適", reading: "かいてき", mean: "쾌적함" },
  { kanji: "回復", reading: "かいふく", mean: "회복" },
  { kanji: "抱える", reading: "かかえる", mean: "떠안다, 머리를 싸쥐다" },
  { kanji: "拡充", reading: "かくじゅう", mean: "확충" },
  { kanji: "隠す", reading: "かくす", mean: "감추다, 숨기다" },
  { kanji: "下降", reading: "かこう", mean: "하강, 추락" },
  { kanji: "囲む", reading: "かこむ", mean: "둘러싸다" },
  { kanji: "重ねる", reading: "かさねる", mean: "거듭하다, 겹치다" },
  { kanji: "賢い", reading: "かしこい", mean: "현명하다, 영리하다" },
  { kanji: "傾く", reading: "かたむく", mean: "기울다, 치우치다" },
  { kanji: "仮定", reading: "かてい", mean: "가정" },
  { kanji: "可能性", reading: "かのうせい", mean: "가능성" },
  { kanji: "貨物", reading: "かもつ", mean: "화물" },
  { kanji: "辛い", reading: "からい", mean: "맵다" },
  { kanji: "絡まる", reading: "からまる", mean: "휘감기다, 얽히다" },
  { kanji: "観察", reading: "かんさつ", mean: "관찰" },
  { kanji: "乾燥", reading: "かんそう", mean: "건조" },
  { kanji: "缶詰", reading: "かんづめ", mean: "통조림" },
  { kanji: "願望", reading: "がんぼう", mean: "바람, 소원" },
  { kanji: "勧誘", reading: "かんゆう", mean: "권유" },
  { kanji: "完了", reading: "かんりょう", mean: "완료" },
  { kanji: "記憶", reading: "きおく", mean: "기억" },
  { kanji: "企画", reading: "きかく", mean: "기획" },
  { kanji: "危険", reading: "きけん", mean: "위험" },
  { kanji: "機嫌", reading: "きげん", mean: "기분, 심기" },
  { kanji: "記事", reading: "きじ", mean: "기사" },
  { kanji: "起床", reading: "きしょう", mean: "기상" },
  { kanji: "規制", reading: "きせい", mean: "규제" },
  { kanji: "競う", reading: "きそう", mean: "겨루다, 경쟁하다" },
  { kanji: "貴重", reading: "きちょう", mean: "귀중함" },
  { kanji: "規模", reading: "きぼ", mean: "규모" },
  { kanji: "決まる", reading: "きまる", mean: "결정되다, 정해지다" },
  { kanji: "客", reading: "きゃく", mean: "손님" },
  { kanji: "求人", reading: "きゅうじん", mean: "구인, 일할 사람을 구함" },
  { kanji: "休息", reading: "きゅうそく", mean: "휴식" },
  { kanji: "共感", reading: "きょうかん", mean: "공감" },
  { kanji: "行事", reading: "ぎょうじ", mean: "행사" },
  { kanji: "協力", reading: "きょうりょく", mean: "협력" },
  { kanji: "漁業", reading: "ぎょぎょう", mean: "어업" },
  { kanji: "極端", reading: "きょくたん", mean: "극단적임" },
  { kanji: "拒否", reading: "きょひ", mean: "거부" },
  { kanji: "記録", reading: "きろく", mean: "기록" },
  { kanji: "議論", reading: "ぎろん", mean: "의논, 논쟁" },
  { kanji: "空港", reading: "くうこう", mean: "공항" },
  { kanji: "偶然", reading: "ぐうぜん", mean: "우연(히)" },
  { kanji: "軽傷", reading: "けいしょう", mean: "경상, 가벼운 부상" },
  { kanji: "下旬", reading: "げじゅん", mean: "하순" },
  { kanji: "現象", reading: "げんしょう", mean: "현상" },
  { kanji: "靴", reading: "くつ", mean: "신발, 구두" },
  { kanji: "雲", reading: "くも", mean: "구름" },
  { kanji: "悔しい", reading: "くやしい", mean: "분하다, 억울하다" },
  { kanji: "暮らす", reading: "くらす", mean: "살다, 생활하다" },
  { kanji: "刑事", reading: "けいじ", mean: "형사" },
  { kanji: "継続", reading: "けいぞく", mean: "계속" },
  { kanji: "芸能", reading: "げいのう", mean: "예능, 연예" },
  { kanji: "警備", reading: "けいび", mean: "경비" },
  { kanji: "景色", reading: "けしき", mean: "경치" },
  { kanji: "結果", reading: "けっか", mean: "결과" },
  { kanji: "険しい", reading: "けわしい", mean: "험악하다, 험상궂다" },
  { kanji: "原因", reading: "げんいん", mean: "원인" },
  { kanji: "厳重", reading: "げんじゅう", mean: "엄중함" },
  { kanji: "建設", reading: "けんせつ", mean: "건설" },
  { kanji: "講演", reading: "こうえん", mean: "강연" },
  { kanji: "郊外", reading: "こうがい", mean: "교외, 도시 주변 지역" },
  { kanji: "公害", reading: "こうがい", mean: "공해" },
  { kanji: "垂直", reading: "すいちょく", mean: "수직" },
  { kanji: "人類", reading: "じんるい", mean: "인류" },
  { kanji: "信頼", reading: "しんらい", mean: "신뢰" },
  { kanji: "信用", reading: "しんよう", mean: "신용" },
  { kanji: "心臓", reading: "しんぞう", mean: "심장" },
  { kanji: "進学率", reading: "しんがくりつ", mean: "진학률" },
  { kanji: "資料", reading: "しりょう", mean: "자료" },
  { kanji: "処理", reading: "しょり", mean: "처리" },
  { kanji: "諸国", reading: "しょこく", mean: "여러 나라" },
  { kanji: "職場", reading: "しょくば", mean: "직장" },
  { kanji: "省略", reading: "しょうりゃく", mean: "생략" },
  { kanji: "情報", reading: "じょうほう", mean: "정보" },
  { kanji: "商品", reading: "しょうひん", mean: "상품" },
  { kanji: "焦点", reading: "しょうてん", mean: "초점" },
  { kanji: "詳細", reading: "しょうさい", mean: "상세함, 자세함" },
  { kanji: "状況", reading: "じょうきょう", mean: "상황" },
  { kanji: "順調", reading: "じゅんちょう", mean: "순조로움" },
  { kanji: "主催", reading: "しゅさい", mean: "주최" },
  { kanji: "寿命", reading: "じゅみょう", mean: "수명" },
  { kanji: "書籍", reading: "しょせき", mean: "서적, 책" },
  { kanji: "出版", reading: "しゅっぱん", mean: "출판" },
  { kanji: "手術", reading: "しゅじゅつ", mean: "수술" },
  { kanji: "宿泊", reading: "しゅくはく", mean: "숙박" },
  { kanji: "柔軟", reading: "じゅうなん", mean: "유연함" },
  { kanji: "占める", reading: "しめる", mean: "차지하다" },
  { kanji: "優れる", reading: "すぐれる", mean: "뛰어나다, 우수하다" },
  { kanji: "損得", reading: "そんとく", mean: "손익" },
  { kanji: "尊重", reading: "そんちょう", mean: "존중" },
  { kanji: "損害", reading: "そんがい", mean: "손해" },
  { kanji: "備える", reading: "そなえる", mean: "갖추다, 대비하다" },
  { kanji: "率直", reading: "そっちょく", mean: "솔직함" },
  { kanji: "素材", reading: "そざい", mean: "소재" },
  { kanji: "装備", reading: "そうび", mean: "장비" },
  { kanji: "想像", reading: "そうぞう", mean: "상상" },
  { kanji: "操作", reading: "そうさ", mean: "조작" },
  { kanji: "相互", reading: "そうご", mean: "상호, 서로" },
  { kanji: "総額", reading: "そうがく", mean: "총액" },
  { kanji: "選択", reading: "せんたく", mean: "선택" },
  { kanji: "戦争", reading: "せんそう", mean: "전쟁" },
  { kanji: "設備", reading: "せつび", mean: "설비" },
  { kanji: "世間", reading: "せけん", mean: "세상, 세상 사람" },
  { kanji: "政治", reading: "せいじ", mean: "정치" },
  { kanji: "成功", reading: "せいこう", mean: "성공" },
  { kanji: "清潔", reading: "せいけつ", mean: "청결함" },
  { kanji: "性格", reading: "せいかく", mean: "성격" },
  { kanji: "展開", reading: "てんかい", mean: "전개" },
  { kanji: "適切", reading: "てきせつ", mean: "적절함" },
  { kanji: "積む", reading: "つむ", mean: "쌓다" },
  { kanji: "務める", reading: "つとめる", mean: "역할을 맡다" },
  { kanji: "伝える", reading: "つたえる", mean: "전하다" },
  { kanji: "治療", reading: "ちりょう", mean: "치료" },
  { kanji: "著者", reading: "ちょしゃ", mean: "저자" },
  { kanji: "調節", reading: "ちょうせつ", mean: "조절" },
  { kanji: "調査", reading: "ちょうさ", mean: "조사" },
  { kanji: "抽象的", reading: "ちゅうしょうてき", mean: "추상적" },
  { kanji: "駐車", reading: "ちゅうしゃ", mean: "주차" },
  { kanji: "地球", reading: "ちきゅう", mean: "지구" },
  { kanji: "知恵", reading: "ちえ", mean: "지혜" },
  { kanji: "担当者", reading: "たんとうしゃ", mean: "담당자" },
  { kanji: "単純", reading: "たんじゅん", mean: "단순함" },
  { kanji: "他人", reading: "たにん", mean: "타인" },
  { kanji: "倒す", reading: "たおす", mean: "쓰러뜨리다" },
  { kanji: "代表", reading: "だいひょう", mean: "대표" },
  { kanji: "大臣", reading: "だいじん", mean: "대신, 장관" },
  { kanji: "述べる", reading: "のべる", mean: "서술하다, 말하다" },
  { kanji: "除く", reading: "のぞく", mean: "제외하다, 없애다" },
  { kanji: "残る", reading: "のこる", mean: "남다" },
  { kanji: "農業", reading: "のうぎょう", mean: "농업" },
  { kanji: "年齢", reading: "ねんれい", mean: "나이, 연령" },
  { kanji: "塗る", reading: "ぬる", mean: "바르다, 칠하다" },
  { kanji: "盗む", reading: "ぬすむ", mean: "훔치다" },
  { kanji: "憎む", reading: "にくむ", mean: "미워하다, 증오하다" },
  { kanji: "懐かしい", reading: "なつかしい", mean: "그립다" },
  { kanji: "握る", reading: "にぎる", mean: "쥐다, 잡다" },
  { kanji: "悩む", reading: "なやむ", mean: "고민하다" },
  { kanji: "分析", reading: "ぶんせき", mean: "분석" },
  { kanji: "触れる", reading: "ふれる", mean: "접하다" },
  { kanji: "負担", reading: "ふたん", mean: "부담" },
  { kanji: "舞台", reading: "ぶたい", mean: "무대" },
  { kanji: "含める", reading: "ふくめる", mean: "포함하다" },
  { kanji: "平等", reading: "びょうどう", mean: "평등" },
  { kanji: "評価", reading: "ひょうか", mean: "평가" },
  { kanji: "批判", reading: "ひはん", mean: "비판" },
  { kanji: "等しい", reading: "ひとしい", mean: "같다, 동등하다" },
  { kanji: "比較的", reading: "ひかくてき", mean: "비교적" },
  { kanji: "販売", reading: "はんばい", mean: "판매" },
  { kanji: "判断", reading: "はんだん", mean: "판단" },
  { kanji: "反対", reading: "はんたい", mean: "반대" },
  { kanji: "犯罪", reading: "はんざい", mean: "범죄" },
  { kanji: "破片", reading: "はへん", mean: "파편, 부서진 조각" },
  { kanji: "離れる", reading: "はなれる", mean: "떨어지다, 멀어지다" },
  { kanji: "爆発", reading: "ばくはつ", mean: "폭발" },
  { kanji: "配布", reading: "はいふ", mean: "배포" },
  { kanji: "家賃", reading: "やちん", mean: "집세" },
  { kanji: "焼ける", reading: "やける", mean: "타다, 구워지다" },
  { kanji: "役目", reading: "やくめ", mean: "임무, 역할" },
  { kanji: "模範", reading: "もはん", mean: "모범" },
  { kanji: "物語", reading: "ものがたり", mean: "이야기" },
  { kanji: "求める", reading: "もとめる", mean: "구하다, 청하다" },
  { kanji: "戻す", reading: "もどす", mean: "되돌리다" },
  { kanji: "目的", reading: "もくてき", mean: "목적" },
  { kanji: "面倒", reading: "めんどう", mean: "귀찮음, 번거로움" },
  { kanji: "迎える", reading: "むかえる", mean: "맞이하다" },
  { kanji: "認める", reading: "みとめる", mean: "인정하다" },
  { kanji: "未来", reading: "みらい", mean: "미래" },
  { kanji: "乱れる", reading: "みだれる", mean: "흐트러지다" },
  { kanji: "迷う", reading: "まよう", mean: "망설이다" },
  { kanji: "招く", reading: "まねく", mean: "초대하다, 부르다" },
  { kanji: "豊富", reading: "ほうふ", mean: "풍부함" },
  { kanji: "貿易", reading: "ぼうえき", mean: "무역" },
  { kanji: "減る", reading: "へる", mean: "줄다" },
  { kanji: "平均", reading: "へいきん", mean: "평균" },
  { kanji: "割合", reading: "わりあい", mean: "비율" },
  { kanji: "連絡", reading: "れんらく", mean: "연락" },
  { kanji: "歴史", reading: "れきし", mean: "역사" },
  { kanji: "冷凍", reading: "れいとう", mean: "냉동" },
  { kanji: "流行", reading: "りゅうこう", mean: "유행" },
  { kanji: "略す", reading: "りゃくす", mean: "생략하다" },
  { kanji: "世の中", reading: "よのなか", mean: "세상" },
  { kanji: "要求", reading: "ようきゅう", mean: "요구" },
  { kanji: "油断", reading: "ゆだん", mean: "방심" },
  { kanji: "豊か", reading: "ゆたか", mean: "풍요로움" },
  { kanji: "優秀", reading: "ゆうしゅう", mean: "우수함" },
  { kanji: "救う", reading: "すくう", mean: "구하다" },
  { kanji: "腕", reading: "うで", mean: "팔, 솜씨" },
  { kanji: "薄い", reading: "うすい", mean: "얇다, 싱겁다" },
  { kanji: "伺う", reading: "うかがう", mean: "여쭙다, 찾아뵙다" },
  { kanji: "祝い", reading: "いわい", mean: "축하" },
  { kanji: "依頼", reading: "いらい", mean: "의뢰" },
  { kanji: "痛い", reading: "いたい", mean: "아프다" },
  { kanji: "忙しい", reading: "いそがしい", mean: "바쁘다" },
  { kanji: "焦る", reading: "あせる", mean: "초조해하다" },
  { kanji: "鮮やか", reading: "あざやか", mean: "선명함" },
  { kanji: "訪れる", reading: "おとずれる", mean: "방문하다" },
  { kanji: "驚かせる", reading: "おどろかせる", mean: "놀라게 하다" },
  { kanji: "温泉", reading: "おんせん", mean: "온천" },
  { kanji: "開催", reading: "かいさい", mean: "개최" },
  { kanji: "改札口", reading: "かいさつぐち", mean: "개찰구" },
  { kanji: "拡大", reading: "かくだい", mean: "확대" },
  { kanji: "焦げる", reading: "こげる", mean: "타다, 눌다" },
  { kanji: "国際", reading: "こくさい", mean: "국제" },
  { kanji: "凍る", reading: "こおる", mean: "얼다" },
  { kanji: "行動", reading: "こうどう", mean: "행동" },
  { kanji: "構造", reading: "こうぞう", mean: "구조" },
  { kanji: "強引", reading: "ごういん", mean: "억지로, 무리하게" },
  { kanji: "検査", reading: "けんさ", mean: "검사" },
  { kanji: "健康", reading: "けんこう", mean: "건강" },
  { kanji: "欠点", reading: "けってん", mean: "결점" },
  { kanji: "削る", reading: "けずる", mean: "깎다" },
  { kanji: "経営", reading: "けいえい", mean: "경영" },
  { kanji: "詳しい", reading: "くわしい", mean: "자세하다" },
  { kanji: "必ず", reading: "かならず", mean: "반드시" },
  { kanji: "禁止", reading: "きんし", mean: "금지" },
  { kanji: "金額", reading: "きんがく", mean: "금액" },
  { kanji: "距離", reading: "きょり", mean: "거리" },
  { kanji: "巨大", reading: "きょだい", mean: "거대함" },
  { kanji: "許可", reading: "きょか", mean: "허가" },
  { kanji: "恐怖", reading: "きょうふ", mean: "공포" },
  { kanji: "共同", reading: "きょうどう", mean: "공동" },
  { kanji: "競争", reading: "きょうそう", mean: "경쟁" },
  { kanji: "教育", reading: "きょういく", mean: "교육" },
  { kanji: "寄付", reading: "きふ", mean: "기부" },
  { kanji: "喫茶店", reading: "きっさてん", mean: "찻집, 카페" },
  { kanji: "反省", reading: "はんせい", mean: "반성" },
  { kanji: "管理", reading: "かんり", mean: "관리" },
  { kanji: "関心", reading: "かんしん", mean: "관심" },
  { kanji: "関係", reading: "かんけい", mean: "관계" },
  { kanji: "環境", reading: "かんきょう", mean: "환경" },
  { kanji: "必要", reading: "ひつよう", mean: "필요함" },
  { kanji: "避難", reading: "ひなん", mean: "피난" },
  { kanji: "拾う", reading: "ひろう", mean: "줍다" },
  { kanji: "疲労", reading: "ひろう", mean: "피로" },
  { kanji: "広がる", reading: "ひろがる", mean: "넓어지다" },
  { kanji: "夫婦", reading: "ふうふ", mean: "부부" },
  { kanji: "複雑", reading: "ふくざつ", mean: "복잡함" },
  { kanji: "物価", reading: "ぶっか", mean: "물가" },
  { kanji: "降る", reading: "ふる", mean: "내리다" },
  { kanji: "変更", reading: "へんこう", mean: "변경" },
  { kanji: "帽子", reading: "ぼうし", mean: "모자" },
  { kanji: "方法", reading: "ほうほう", mean: "방법" },
  { kanji: "訪問", reading: "ほうもん", mean: "방문" },
  { kanji: "法律", reading: "ほうりつ", mean: "법률" },
  { kanji: "募集", reading: "ぼしゅう", mean: "모집" },
  { kanji: "任せる", reading: "まかせる", mean: "맡기다" },
  { kanji: "祭り", reading: "まつり", mean: "축제" },
  { kanji: "守る", reading: "まもる", mean: "지키다" },
  { kanji: "磨く", reading: "みがく", mean: "닦다" },
  { kanji: "皆", reading: "みんな", mean: "모두" },
  { kanji: "昔", reading: "むかし", mean: "옛날" },
  { kanji: "娘", reading: "むすめ", mean: "딸" },
  { kanji: "村", reading: "むら", mean: "마을" },
  { kanji: "明確", reading: "めいかく", mean: "명확함" },
  { kanji: "珍しい", reading: "めずらしい", mean: "진귀하다, 드물다" },
  { kanji: "申し込み", reading: "もうしこみ", mean: "신청" },
  { kanji: "破れる", reading: "やぶれる", mean: "찢어지다" },
  { kanji: "辞める", reading: "やめる", mean: "사임하다, 그만두다" },
  { kanji: "柔らかい", reading: "やわらかい", mean: "부드럽다" },
  { kanji: "喜ぶ", reading: "よろこぶ", mean: "기뻐하다" },
  { kanji: "理解", reading: "りかい", mean: "이해" },
  { kanji: "領収書", reading: "りょうしゅうしょ", mean: "영수증" },
  { kanji: "礼儀", reading: "れいぎ", mean: "예의" },
  { kanji: "割引", reading: "わりびき", mean: "할인" },
  { kanji: "施設", reading: "しせつ", mean: "시설" },
  { kanji: "従う", reading: "したがう", mean: "따르다" },
  { kanji: "実践", reading: "じっせん", mean: "실천" },
  { kanji: "失敗", reading: "しっぱい", mean: "실패, 실수" },
  { kanji: "指導", reading: "しどう", mean: "지도" },
  { kanji: "児童", reading: "じどう", mean: "아동" },
  { kanji: "事務所", reading: "じむしょ", mean: "사무소" },
  { kanji: "弱点", reading: "じゃくてん", mean: "약점" },
  { kanji: "周囲", reading: "しゅうい", mean: "주위" },
  { kanji: "収穫", reading: "しゅうかく", mean: "수확" },
  { kanji: "就職", reading: "しゅうしょく", mean: "취직" },
  { kanji: "首相", reading: "しゅしょう", mean: "수상" },
  { kanji: "出世", reading: "しゅっせ", mean: "출세" },
  { kanji: "趣味", reading: "しゅみ", mean: "취미" },
  { kanji: "準備", reading: "じゅんび", mean: "준비" },
  { kanji: "紹介", reading: "しょうかい", mean: "소개" },
  { kanji: "条件", reading: "じょうけん", mean: "조건" },
  { kanji: "症状", reading: "しょうじょう", mean: "증상" },
  { kanji: "招待", reading: "しょうたい", mean: "초대" },
  { kanji: "象徴", reading: "しょうちょう", mean: "상징" },
  { kanji: "承認", reading: "しょうにん", mean: "승인" },
  { kanji: "消費", reading: "しょうひ", mean: "소비" },
  { kanji: "将来", reading: "しょうらい", mean: "장래" },
  { kanji: "食欲", reading: "しょくよく", mean: "식욕" },
  { kanji: "真剣", reading: "しんけん", mean: "진지함" },
  { kanji: "診断", reading: "しんだん", mean: "진단" },
  { kanji: "深夜", reading: "しんや", mean: "심야" },
  { kanji: "涼しい", reading: "すずしい", mean: "시원하다" },
  { kanji: "捨てる", reading: "すてる", mean: "버리다" },
  { kanji: "鋭い", reading: "するどい", mean: "날카롭다" },
  { kanji: "座る", reading: "すわる", mean: "앉다" },
  { kanji: "生活", reading: "せいかつ", mean: "생활" },
  { kanji: "成績", reading: "せいせき", mean: "성적" },
  { kanji: "製造", reading: "せいぞう", mean: "제조" },
  { kanji: "積極的", reading: "せっきょくてき", mean: "적극적" },
  { kanji: "節約", reading: "せつやく", mean: "절약" },
  { kanji: "背中", reading: "せなか", mean: "등" },
  { kanji: "狭い", reading: "せまい", mean: "좁다" },
  { kanji: "責める", reading: "せめる", mean: "탓하다, 책망하다" },
  { kanji: "総人口", reading: "そうじんこう", mean: "총인구" },
  { kanji: "組織", reading: "そしき", mean: "조직" },
  { kanji: "卒業", reading: "そつぎょう", mean: "졸업" },
  { kanji: "尊敬", reading: "そんけい", mean: "존경" },
  { kanji: "存在", reading: "そんざい", mean: "존재" },
  { kanji: "絶えず", reading: "たえず", mean: "끊임없이" },
  { kanji: "頼もしい", reading: "たのもしい", mean: "믿음직하다" },
  { kanji: "頼る", reading: "たよる", mean: "의지하다" },
  { kanji: "団体", reading: "だんたい", mean: "단체" },
  { kanji: "駐車場", reading: "ちゅうしゃじょう", mean: "주차장" },
  { kanji: "散る", reading: "ちる", mean: "지다, 떨어지다" },
  { kanji: "続く", reading: "つづく", mean: "계속되다" },
  { kanji: "努める", reading: "つとめる", mean: "노력하다, 힘쓰다" },
  { kanji: "応援団", reading: "おうえんだん", mean: "응원단" },
  { kanji: "会員制", reading: "かいいんせい", mean: "회원제" },
  { kanji: "危険性", reading: "きけんせい", mean: "위험성" },
  { kanji: "結婚観", reading: "けっこんかん", mean: "결혼관" },
  { kanji: "決定権", reading: "けっていけん", mean: "결정권" },
  { kanji: "高収入", reading: "こうしゅうにゅう", mean: "고수입" },
  { kanji: "高性能", reading: "こうせいのう", mean: "고성능" },
  { kanji: "再開発", reading: "さいかいはつ", mean: "재개발" },
  { kanji: "再放送", reading: "さいほうそう", mean: "재방송" },
  { kanji: "最有力", reading: "さいゆうりょく", mean: "가장 유력함" },
  { kanji: "就職率", reading: "しゅうしょくりつ", mean: "취업률" },
  { kanji: "住宅街", reading: "じゅうたくがい", mean: "주택가" },
  { kanji: "集中力", reading: "しゅうちゅうりょく", mean: "집중력" },
  { kanji: "招待状", reading: "しょうたいじょう", mean: "초대장" },
  { kanji: "商店街", reading: "しょうてんがい", mean: "상점가" },
  { kanji: "初年度", reading: "しょねんど", mean: "첫해, 초년도" },
  { kanji: "諸問題", reading: "しょもんだい", mean: "여러 문제" },
  { kanji: "低価格", reading: "ていかかく", mean: "낮은 가격" },
  { kanji: "低カロリー", reading: "ていカロリー", mean: "저칼로리" },
  { kanji: "非公式", reading: "ひこうしき", mean: "비공식" },
  { kanji: "副社長", reading: "ふくしゃちょう", mean: "부사장" },
  { kanji: "真新しい", reading: "まあたらしい", mean: "아주 새롭다, 완전 새것" },
  { kanji: "真後ろ", reading: "まうしろ", mean: "바로 뒤" },

  // --- [2차 추가 사진: 유의표현, 용법, 문맥구성 기출] ---
  { kanji: "やかましい", reading: "やかましい", mean: "시끄럽다, 까다롭다" },
  { kanji: "約", reading: "やく", mean: "약, 대략" },
  { kanji: "安くゆずる", reading: "やすくゆずる", mean: "싸게 넘기다" },
  { kanji: "最寄りの", reading: "もよりの", mean: "가장 가까운, 근처의" },
  { kanji: "もっとも", reading: "もっとも", mean: "가장, 무엇보다도" },
  { kanji: "無口だ", reading: "むくちだ", mean: "말수가 적다" },
  { kanji: "むかつく", reading: "むかつく", mean: "화가 치밀다, 울컥하다" },
  { kanji: "妙な", reading: "みょうな", mean: "묘한, 이상한" },
  { kanji: "みっともない", reading: "みっともない", mean: "보기 흉하다, 꼴사납다" },
  { kanji: "自ら", reading: "みずから", mean: "스스로, 자신" },
  { kanji: "見事だ", reading: "みごとだ", mean: "훌륭하다, 멋지다" },
  { kanji: "まれな", reading: "まれな", mean: "드문, 희귀한" },
  { kanji: "まもなくだ", reading: "まもなくだ", mean: "곧이다, 머지않았다" },
  { kanji: "間際", reading: "まぎわ", mean: "직전, 마지막 순간" },
  { kanji: "ほぼ", reading: "ほぼ", mean: "거의, 대체로" },
  { kanji: "方々", reading: "ほうぼう", mean: "여기저기, 여러 곳" },
  { kanji: "プラン", reading: "プラン", mean: "플랜, 계획" },
  { kanji: "ブーム", reading: "ブーム", mean: "붐, 열풍, 유행" },
  { kanji: "水平", reading: "すいへい", mean: "수평" },
  { kanji: "物騒", reading: "ぶっそう", mean: "불안함, 뒤숭숭함" },
  { kanji: "ぶかぶか", reading: "ぶかぶか", mean: "헐렁헐렁함" },
  { kanji: "大柄", reading: "おおがら", mean: "체격이 큼" },
  { kanji: "必死", reading: "ひっし", mean: "필사적임" },
  { kanji: "ひきょうな", reading: "ひきょうな", mean: "비겁한, 얌체 같은" },
  { kanji: "引き返す", reading: "ひきかえす", mean: "되돌아가다" },
  { kanji: "山のふもと", reading: "やまのふもと", mean: "산기슭" },
  { kanji: "やむを得ない", reading: "やむをえない", mean: "어쩔 수 없다, 부득이하다" },
  { kanji: "やや", reading: "やや", mean: "약간, 조금" },
  { kanji: "愉快な", reading: "ゆかいな", mean: "유쾌한, 재미있는" },
  { kanji: "ゆずる", reading: "ゆずる", mean: "넘겨주다, 양보하다" },
  { kanji: "用心する", reading: "ようじんする", mean: "조심하다, 주의하다" },
  { kanji: "利口な", reading: "りこうな", mean: "영리한, 똑똑한" },
  { kanji: "冷静な", reading: "れいせいな", mean: "냉정한, 침착한" },
  { kanji: "レンタルする", reading: "レンタルする", mean: "대여하다, 빌리다" },
  { kanji: "わがまま", reading: "わがまま", mean: "제멋대로 굶" },
  { kanji: "わずか", reading: "わずか", mean: "약간, 불과" },
  { kanji: "大げさ", reading: "おおげさ", mean: "과장됨, 호들갑" },
  { kanji: "覆う", reading: "おおう", mean: "덮다, 씌우다" },
  { kanji: "延長", reading: "えんちょう", mean: "연장" },
  { kanji: "演説", reading: "えんぜつ", mean: "연설" },
  { kanji: "打ち合わせ", reading: "うちあわせ", mean: "사전 협의, 미팅" },
  { kanji: "打ち明ける", reading: "うちあける", mean: "털어놓다, 밝히다" },
  { kanji: "疑う", reading: "うたがう", mean: "의심하다" },
  { kanji: "薄める", reading: "うすめる", mean: "희석하다, 묽게 하다" },
  { kanji: "受け入れる", reading: "うけいれる", mean: "받아들이다" },
  { kanji: "引用", reading: "いんよう", mean: "인용" },
  { kanji: "今に", reading: "いまに", mean: "머지않아, 이제 곧" },
  { kanji: "一斉に", reading: "いっせいに", mean: "일제히" },
  { kanji: "いったん", reading: "いったん", mean: "일단, 우선" },
  { kanji: "いちいち", reading: "いちいち", mean: "일일이, 하나하나" },
  { kanji: "生き生き", reading: "いきいき", mean: "생생하게, 활기차게" },
  { kanji: "言い訳", reading: "いいわけ", mean: "변명" },
  { kanji: "あるいは", reading: "あるいは", mean: "또는, 혹은" },
  { kanji: "荒れる", reading: "あれる", mean: "거칠어지다" },
  { kanji: "甘やかす", reading: "あまやかす", mean: "응석을 받아주다" },
  { kanji: "明らか", reading: "あきらか", mean: "분명함, 명백함" },
  { kanji: "明かり", reading: "あかり", mean: "불빛, 환함" },
  { kanji: "愛着", reading: "あいちゃく", mean: "애착" },
  { kanji: "合図", reading: "あいず", mean: "신호" },
  { kanji: "思いつく", reading: "おもいつく", mean: "떠올리다, 생각나다" },
  { kanji: "温和", reading: "おんわ", mean: "온화함" },
  { kanji: "思いやり", reading: "おもいやり", mean: "배려, 동정심" },
  { kanji: "解約", reading: "かいやく", mean: "해약" },
  { kanji: "外見", reading: "がいけん", mean: "외견, 겉모습" },
  { kanji: "会見", reading: "かいけん", mean: "회견" },
  { kanji: "がっかり", reading: "がっかり", mean: "실망하는 모양" },
  { kanji: "かすか", reading: "かすか", mean: "희미함, 미약함" },
  { kanji: "かなう", reading: "かなう", mean: "이루어지다" },
  { kanji: "かばう", reading: "かばう", mean: "감싸다, 두둔하다" },
  { kanji: "頑固", reading: "がんこ", mean: "완고함, 고집스러움" },
  { kanji: "鑑賞", reading: "かんしょう", mean: "감상" },
  { kanji: "頑丈", reading: "がんじょう", mean: "튼튼함, 견고함" },
  { kanji: "感心", reading: "かんしん", mean: "감탄함" },
  { kanji: "気候", reading: "きこう", mean: "기후" },
  { kanji: "きっかけ", reading: "きっかけ", mean: "계기" },
  { kanji: "ぎっしり", reading: "ぎっしり", mean: "가득 찬 모양" },
  { kanji: "きっぱり", reading: "きっぱり", mean: "단호하게, 딱 잘라" },
  { kanji: "急激", reading: "きゅうげき", mean: "급격함" },
  { kanji: "共有", reading: "きょうゆう", mean: "공유" },
  { kanji: "暮れ", reading: "くれ", mean: "저녁때, 세말, 한 해의 끝" },
  { kanji: "くれぐれも", reading: "くれぐれも", mean: "아무쪼록, 부디" },
  { kanji: "傾向", reading: "けいこう", mean: "경향" },
  { kanji: "掲示", reading: "けいじ", mean: "게시" },
  { kanji: "欠陥", reading: "けっかん", mean: "결함" },
  { kanji: "区切り", reading: "くぎり", mean: "단락, 매듭" },
  { kanji: "限定", reading: "げんてい", mean: "한정" },
  { kanji: "合同", reading: "ごうどう", mean: "합동" },
  { kanji: "交代", reading: "こうたい", mean: "교대" },
  { kanji: "快い", reading: "こころよい", mean: "상쾌하다, 유쾌하다" },
  { kanji: "心強い", reading: "こころづよい", mean: "든든하다" },
  { kanji: "こつこつ", reading: "こつこつ", mean: "꾸준히, 끊임없이" },
  { kanji: "催促", reading: "さいそく", mean: "재촉" },
  { kanji: "栽培", reading: "さいばい", mean: "재배" },
  { kanji: "作成", reading: "さくせい", mean: "작성" },
  { kanji: "早急", reading: "さっきゅう", mean: "매우 급함, 조급" },
  { kanji: "さっさと", reading: "さっさと", mean: "빨리빨리, 어서" },
  { kanji: "さびる", reading: "さびる", mean: "녹슬다" },
  { kanji: "差別", reading: "さべつ", mean: "차별" },
  { kanji: "作法", reading: "さほう", mean: "예의범절" },
  { kanji: "妨げる", reading: "さまたげる", mean: "방해하다" },
  { kanji: "残高", reading: "ざんだか", mean: "잔고, 잔액" },
  { kanji: "支持", reading: "しじ", mean: "지지" },
  { kanji: "実施", reading: "じっし", mean: "실시" },
  { kanji: "質素", reading: "しっそ", mean: "검소함" },
  { kanji: "実に", reading: "じつに", mean: "참으로, 실로" },
  { kanji: "支配", reading: "しはい", mean: "지배" },
  { kanji: "染みる", reading: "しみる", mean: "스며들다, 배다" },
  { kanji: "充実", reading: "じゅうじつ", mean: "충실함" },
  { kanji: "取材", reading: "しゅざい", mean: "취재" },
  { kanji: "正直", reading: "しょうじき", mean: "정직함" },
  { kanji: "生じる", reading: "しょうじる", mean: "발생하다, 생기다" },
  { kanji: "上達", reading: "じょうたつ", mean: "실력이 늚, 능숙해짐" },
  { kanji: "初期", reading: "しょき", mean: "초기" },
  { kanji: "初歩", reading: "しょほ", mean: "초보" },
  { kanji: "少しも", reading: "すこしも", mean: "조금도, 전혀" },
  { kanji: "進める", reading: "すすめる", mean: "진행시키다, 추진하다" },
  { kanji: "スピード", reading: "スピード", mean: "스피드, 속도" },
  { kanji: "世代", reading: "せだい", mean: "세대" },
  { kanji: "せっかく", reading: "せっかく", mean: "모처럼" },
  { kanji: "せめて", reading: "せめて", mean: "적어도, 최소한" },
  { kanji: "鮮明", reading: "せんめい", mean: "선명함" },
  { kanji: "即座に", reading: "そくざに", mean: "즉시, 당장" },
  { kanji: "続出", reading: "ぞくしゅつ", mean: "속출" },
  { kanji: "粗末", reading: "そまつ", mean: "허술함, 조잡함" },
  { kanji: "それとも", reading: "それとも", mean: "그렇지 않으면" },
  { kanji: "大した", reading: "たいした", mean: "대단한" },
  { kanji: "たくましい", reading: "たくましい", mean: "늠름하다, 다부지다" },
  { kanji: "多彩", reading: "たさい", mean: "다채로움" },
  { kanji: "確か", reading: "たしか", mean: "확실함, 아마" },
  { kanji: "畳む", reading: "たたむ", mean: "접다, 개다" },
  { kanji: "妥当", reading: "だとう", mean: "타당함" },
  { kanji: "たとえ", reading: "たとえ", mean: "설령, 비록" },
  { kanji: "たまたま", reading: "たまたま", mean: "우연히, 때마침" },
  { kanji: "乗り越す", reading: "のりこす", mean: "지나치다" },
  { kanji: "熱中", reading: "ねっちゅう", mean: "열중" },
  { kanji: "鈍い", reading: "にぶい", mean: "둔하다" },
  { kanji: "日課", reading: "にっか", mean: "일과" },
  { kanji: "濁る", reading: "にごる", mean: "흐려지다, 탁해지다" },
  { kanji: "和やか", reading: "なごやか", mean: "온화함, 화기애애함" },
  { kanji: "ドライブ", reading: "ドライブ", mean: "드라이브" },
  { kanji: "乏しい", reading: "とぼしい", mean: "부족하다, 가난하다" },
  { kanji: "どっと", reading: "どっと", mean: "왈칵, 우르르" },
  { kanji: "とっくに", reading: "とっくに", mean: "훨씬 전에, 벌써" },
  { kanji: "特殊", reading: "とくしゅ", mean: "특수함" },
  { kanji: "どうせ", reading: "どうせ", mean: "어차피" },
  { kanji: "問い合わせる", reading: "といあわせる", mean: "문의하다" },
  { kanji: "手軽", reading: "てがる", mean: "손쉬움, 간편함" },
  { kanji: "定年", reading: "ていねん", mean: "정년" },
  { kanji: "潰す", reading: "つぶす", mean: "부수다, 시간을 때우다" },
  { kanji: "散らかる", reading: "ちらかる", mean: "어질러지다" },
  { kanji: "散らかす", reading: "ちらかす", mean: "어지르다" },
  { kanji: "頂上", reading: "ちょうじょう", mean: "정상, 꼭대기" },
  { kanji: "注目", reading: "ちゅうもく", mean: "주목" },
  { kanji: "中断", reading: "ちゅうだん", mean: "중단" },
  { kanji: "着々", reading: "ちゃくちゃく", mean: "착착" },
  { kanji: "縮む", reading: "ちぢむ", mean: "줄어들다" },
  { kanji: "単なる", reading: "たんなる", mean: "단순한, 그저" },
  { kanji: "だらしない", reading: "だらしない", mean: "칠칠치 못하다, 단정치 못하다" },
  { kanji: "～だらけ", reading: "だらけ", mean: "~투성이" },
  { kanji: "保つ", reading: "たもつ", mean: "유지하다, 지키다" },
  { kanji: "夢中", reading: "むちゅう", mean: "열중, 몰두" },
  { kanji: "矛盾", reading: "むじゅん", mean: "모순" },
  { kanji: "向かい", reading: "むかい", mean: "맞은편" },
  { kanji: "ほっと", reading: "ほっと", mean: "안심하는 모양" },
  { kanji: "保存", reading: "ほぞん", mean: "보존" },
  { kanji: "補足", reading: "ほそく", mean: "보충" },
  { kanji: "方針", reading: "ほうしん", mean: "방침" },
  { kanji: "ベテラン", reading: "ベテラン", mean: "베테랑" },
  { kanji: "隔てる", reading: "へだてる", mean: "사이에 두다, 격리하다" },
  { kanji: "分解", reading: "ぶんかい", mean: "분해" },
  { kanji: "振り向く", reading: "ふりむく", mean: "뒤돌아보다" },
  { kanji: "ふさぐ", reading: "ふさぐ", mean: "막다, 가리다" },
  { kanji: "普及", reading: "ふきゅう", mean: "보급" },
  { kanji: "不安", reading: "ふあん", mean: "불안" },
  { kanji: "微妙", reading: "びみょう", mean: "미묘함" },
  { kanji: "範囲", reading: "はんい", mean: "범위" },
  { kanji: "腫れる", reading: "はれる", mean: "부어오르다" },
  { kanji: "発達", reading: "はったつ", mean: "발달" },
  { kanji: "外す", reading: "はずす", mean: "벗기다, 떼다" },
  { kanji: "はきはき", reading: "はきはき", mean: "시원시원함, 또렷또렷함" },
  { kanji: "廃止", reading: "はいし", mean: "폐지" },
  { kanji: "乗り継ぐ", reading: "のりつぐ", mean: "갈아타다" },
  { kanji: "目上", reading: "めうえ", mean: "윗사람" },
  { kanji: "めくる", reading: "めくる", mean: "넘기다" },
  { kanji: "物足りない", reading: "ものたりない", mean: "어딘가 아쉽다, 뭔가 부족하다" },
  { kanji: "漏れる", reading: "もれる", mean: "새다, 누설되다" },
  { kanji: "ユーモア", reading: "ユーモア", mean: "유머" },
  { kanji: "行方", reading: "ゆくえ", mean: "행방" },
  { kanji: "用途", reading: "ようと", mean: "용도" },
  { kanji: "楽", reading: "らく", mean: "편안함, 쉬움" },
  { kanji: "利益", reading: "りえき", mean: "이익" },
  { kanji: "論争", reading: "ろんそう", mean: "논쟁" },
  { kanji: "キャンパス", reading: "キャンパス", mean: "캠퍼스" },
  { kanji: "機能", reading: "きのう", mean: "기능" },
  { kanji: "記入", reading: "きにゅう", mean: "기입" },
  { kanji: "きつい", reading: "きつい", mean: "힘들다, 꼭 끼다" },
  { kanji: "効く", reading: "きく", mean: "효과가 있다" },
  { kanji: "気軽に", reading: "きがるに", mean: "부담 없이" },
  { kanji: "関与", reading: "かんよ", mean: "관여" },
  { kanji: "感覚", reading: "かんかく", mean: "감각" },
  { kanji: "カロリー", reading: "カロリー", mean: "칼로리" },
  { kanji: "活発", reading: "かっぱつ", mean: "활발함" },
  { kanji: "格好", reading: "かっこう", mean: "모습, 옷차림" },
  { kanji: "活気", reading: "かっき", mean: "활기" },
  { kanji: "偏る", reading: "かたよる", mean: "치우치다" },
  { kanji: "固める", reading: "かためる", mean: "굳히다" },
  { kanji: "かさばる", reading: "かさばる", mean: "부피가 크다" },
  { kanji: "確保", reading: "かくほ", mean: "확보" },
  { kanji: "覚悟", reading: "かくご", mean: "각오" },
  { kanji: "輝かしい", reading: "かがやかしい", mean: "눈부시다, 빛나다" },
  { kanji: "欠かす", reading: "かかす", mean: "거르다, 빠뜨리다" },
  { kanji: "改修", reading: "かいしゅう", mean: "보수, 수리" },
  { kanji: "開設", reading: "かいせつ", mean: "개설" },
  { kanji: "階段", reading: "かいだん", mean: "계단" },
  { kanji: "改正", reading: "かいせい", mean: "개정" },
  { kanji: "解消", reading: "かいしょう", mean: "해소" },
  { kanji: "解散", reading: "かいさん", mean: "해산" },
  { kanji: "共通", reading: "きょうつう", mean: "공통" },
  { kanji: "ぎりぎり", reading: "ぎりぎり", mean: "아슬아슬함" },
  { kanji: "苦情", reading: "くじょう", mean: "불평, 불만" },
  { kanji: "くたくた", reading: "くたくた", mean: "녹초가 됨" },
  { kanji: "口頭", reading: "こうとう", mean: "구두, 말로 함" },
  { kanji: "ぐったり", reading: "ぐったり", mean: "축 늘어짐" },
  { kanji: "くどい", reading: "くどい", mean: "장황하다, 끈덕지다" },
  { kanji: "悔やむ", reading: "くやむ", mean: "후회하다" },
  { kanji: "クリア", reading: "クリア", mean: "클리어, 해결" },
  { kanji: "苦労", reading: "くろう", mean: "고생" },
  { kanji: "契機", reading: "けいき", mean: "계기" },
  { kanji: "劇的に", reading: "げきてきに", mean: "극적으로" },
  { kanji: "結論", reading: "けつろん", mean: "결론" },
  { kanji: "気配", reading: "けはい", mean: "기척, 낌새" },
  { kanji: "限界", reading: "げんかい", mean: "한계" },
  { kanji: "見当", reading: "けんとう", mean: "짐작, 예상" },
  { kanji: "後悔", reading: "こうかい", mean: "후회" },
  { kanji: "交渉", reading: "こうしょう", mean: "교섭, 협상" },
  { kanji: "好調", reading: "こうちょう", mean: "호조, 순조로움" },
  { kanji: "ご遠慮なく", reading: "ごえんりょなく", mean: "사양 말고" },
  { kanji: "誤解", reading: "ごかい", mean: "오해" },
  { kanji: "克服", reading: "こくふく", mean: "극복" },
  { kanji: "ごくろうさま", reading: "ごくろうさま", mean: "수고하셨습니다" },
  { kanji: "こそこそ", reading: "こそこそ", mean: "소곤소곤, 몰래" },
  { kanji: "ごちゃごちゃ", reading: "ごちゃごちゃ", mean: "뒤죽박죽, 너저분함" },
  { kanji: "コミュニケーション", reading: "コミュニケーション", mean: "커뮤니케이션, 소통" },
  { kanji: "ごろごろ", reading: "ごろごろ", mean: "빈둥빈둥, 데굴데굴" },
  { kanji: "コンクール", reading: "コンクール", mean: "콩쿠르, 경연대회" },
  { kanji: "進出", reading: "しんしゅつ", mean: "진출" },
  { kanji: "慎重", reading: "しんちょう", mean: "신중함" },
  { kanji: "ずうずうしい", reading: "ずうずうしい", mean: "뻔뻔스럽다" },
  { kanji: "スケジュール", reading: "スケジュール", mean: "일정, 스케줄" },
  { kanji: "スタイル", reading: "スタイル", mean: "스타일" },
  { kanji: "スタート", reading: "スタート", mean: "출발, 스타트" },
  { kanji: "すっきり", reading: "すっきり", mean: "산뜻함, 상쾌함" },
  { kanji: "ステージ", reading: "ステージ", mean: "무대, 스테이지" },
  { kanji: "すなわち", reading: "すなわち", mean: "즉, 곧" },
  { kanji: "スペース", reading: "スペース", mean: "공간, 자리" },
  { kanji: "スムーズに", reading: "スムーズに", mean: "매끄럽게, 순조롭게" },
  { kanji: "ぜいたく", reading: "ぜいたく", mean: "사치스러움" },
  { kanji: "成長", reading: "せいちょう", mean: "성장" },
  { kanji: "接続", reading: "せつぞく", mean: "접속" },
  { kanji: "迫る", reading: "せまる", mean: "다가오다, 닥치다" },
  { kanji: "専念", reading: "せんねん", mean: "전념" },
  { kanji: "相違", reading: "そうい", mean: "차이, 다름" },
  { kanji: "そういえば", reading: "そういえば", mean: "그러고 보니" },
  { kanji: "そそっかしい", reading: "そそっかしい", mean: "덜렁대다, 경솔하다" },
  { kanji: "ぞろぞろ", reading: "ぞろぞろ", mean: "줄지어, 우르르" },
  { kanji: "逆らう", reading: "さからう", mean: "거역하다, 거스르다" },
  { kanji: "差し支える", reading: "さしつかえる", mean: "지장이 있다" },
  { kanji: "さっぱり", reading: "さっぱり", mean: "산뜻함, 시원함, 전혀" },
  { kanji: "さて", reading: "さて", mean: "그럼, 이제" },
  { kanji: "覚める", reading: "さめる", mean: "깨다, 눈뜨다" },
  { kanji: "時間をつぶす", reading: "じかんをつぶす", mean: "시간을 때우다" },
  { kanji: "直に", reading: "じかに", mean: "직접" },
  { kanji: "敷く", reading: "しく", mean: "깔다" },
  { kanji: "シーズン", reading: "シーズン", mean: "시즌, 철" },
  { kanji: "辞退", reading: "じたい", mean: "사퇴" },
  { kanji: "次第に", reading: "しだいに", mean: "점차, 차츰" },
  { kanji: "しびれる", reading: "しびれる", mean: "저리다, 마비되다" },
  { kanji: "しつこい", reading: "しつこい", mean: "끈질기다, 집요하다" },
  { kanji: "地味", reading: "じみ", mean: "수수함, 검소함" },
  { kanji: "締め切り", reading: "しめきり", mean: "마감" },
  { kanji: "締め切る", reading: "しめきる", mean: "마감하다" },
  { kanji: "地元", reading: "じもと", mean: "그 지역, 연고지" },
  { kanji: "視野", reading: "しや", mean: "시야" },
  { kanji: "しゃべる", reading: "しゃべる", mean: "말하다, 수다 떨다" },
  { kanji: "邪魔", reading: "じゃま", mean: "방해" },
  { kanji: "上昇", reading: "じょうしょう", mean: "상승" },
  { kanji: "徐々に", reading: "じょじょに", mean: "서서히" },
  { kanji: "ショック", reading: "ショック", mean: "쇼크, 충격" },
  { kanji: "じろじろ", reading: "じろじろ", mean: "빤히 쳐다보는 모양" },
  { kanji: "訂正", reading: "ていせい", mean: "정정" },
  { kanji: "つらい", reading: "つらい", mean: "괴롭다, 힘들다" },
  { kanji: "強み", reading: "つよみ", mean: "강점" },
  { kanji: "詰まる", reading: "つまる", mean: "막히다" },
  { kanji: "つまずく", reading: "つまずく", mean: "발이 걸려 넘어지다" },
  { kanji: "つねに", reading: "つねに", mean: "늘, 항상" },
  { kanji: "通過", reading: "つうか", mean: "통과" },
  { kanji: "超過", reading: "ちょうか", mean: "초과" },
  { kanji: "中継", reading: "ちゅうけい", mean: "중계" },
  { kanji: "ちゃんと", reading: "ちゃんと", mean: "제대로, 확실히" },
  { kanji: "チーム", reading: "チーム", mean: "팀" },
  { kanji: "誓う", reading: "ちかう", mean: "맹세하다" },
  { kanji: "たっぷり", reading: "たっぷり", mean: "듬뿍, 넉넉히" },
  { kanji: "達する", reading: "たっする", mean: "도달하다" },
  { kanji: "ただし", reading: "ただし", mean: "단, 다만" },
  { kanji: "多大な", reading: "ただいな", mean: "막대한" },
  { kanji: "蓄える", reading: "たくわえる", mean: "저장하다, 비축하다" },
  { kanji: "炊く", reading: "たく", mean: "(밥을) 짓다" },
  { kanji: "対立", reading: "たいりつ", mean: "대립" },
  { kanji: "タイミング", reading: "タイミング", mean: "타이밍" },
  { kanji: "体格", reading: "たいかく", mean: "체격" },
  { kanji: "ターゲット", reading: "ターゲット", mean: "타깃, 표적" },
  { kanji: "適度", reading: "てきど", mean: "적도, 알맞음" },
  { kanji: "手頃", reading: "てごろ", mean: "알맞음, 적당함" },
  { kanji: "デザイン", reading: "デザイン", mean: "디자인" },
  { kanji: "でたらめに", reading: "でたらめに", mean: "엉터리로, 되는 대로" },
  { kanji: "徹夜", reading: "てつや", mean: "철야, 밤샘" },
  { kanji: "手間", reading: "てま", mean: "수고" },
  { kanji: "転倒", reading: "てんとう", mean: "전도, 넘어짐" },
  { kanji: "点検", reading: "てんけん", mean: "점검" },
  { kanji: "添付", reading: "てんぷ", mean: "첨부" },
  { kanji: "どうしても", reading: "どうしても", mean: "어떻게든, 아무리 해도" },
  { kanji: "導入", reading: "どうにゅう", mean: "도입" },
  { kanji: "特色", reading: "とくしょく", mean: "특색" },
  { kanji: "特定", reading: "とくてい", mean: "특정" },
  { kanji: "独特", reading: "どくとく", mean: "독특함" },
  { kanji: "溶け込む", reading: "とけこむ", mean: "녹아들다" },
  { kanji: "飛び散る", reading: "とびちる", mean: "사방으로 튀다, 흩날리다" },
  { kanji: "飛びつく", reading: "とびつく", mean: "덤벼들다" },
  { kanji: "努力", reading: "どりょく", mean: "노력" },
  { kanji: "とんでもない", reading: "とんでもない", mean: "당치도 않다, 터무니없다" },
  { kanji: "なお", reading: "なお", mean: "더욱, 여전히" },
  { kanji: "なだらか", reading: "なだらか", mean: "완만함" },
  { kanji: "納得", reading: "なっとく", mean: "납득" },
  { kanji: "倣う", reading: "ならう", mean: "본받다, 따르다" },
  { kanji: "ニーズ", reading: "ニーズ", mean: "요구, 필요" },
  { kanji: "苦手", reading: "にがて", mean: "서투름, 다루기 힘듦" },
  { kanji: "にっこり", reading: "にっこり", mean: "생긋" },
  { kanji: "分担", reading: "ぶんたん", mean: "분담" },
  { kanji: "平和", reading: "へいわ", mean: "평화" },
  { kanji: "べたべた", reading: "べたべた", mean: "끈적끈적" },
  { kanji: "豊富に", reading: "ほうふに", mean: "풍부하게" },
  { kanji: "歩道", reading: "ほどう", mean: "보도, 인도" },
  { kanji: "ほんの", reading: "ほんの", mean: "겨우, 불과" },
  { kanji: "本物", reading: "ほんもの", mean: "진짜, 실물" },
  { kanji: "ぼんやり", reading: "ぼんやり", mean: "멍하니, 어렴풋이" },
  { kanji: "まあまあ", reading: "まあまあ", mean: "그럭저럭" },
  { kanji: "マイペース", reading: "マイペース", mean: "마이페이스" },
  { kanji: "貧しい", reading: "まずしい", mean: "가난하다, 빈곤하다" },
  { kanji: "まねる", reading: "まねる", mean: "흉내 내다" },
  { kanji: "見出し", reading: "みだし", mean: "표제, 표제어" },
  { kanji: "耳にする", reading: "みみにする", mean: "듣다" },
  { kanji: "夢中になる", reading: "むちゅうになる", mean: "열중하다, 푹 빠지다" },
  { kanji: "名所", reading: "めいしょ", mean: "명소" },
  { kanji: "目指す", reading: "めざす", mean: "목표로 하다" },
  { kanji: "面する", reading: "めんする", mean: "마주 보다, 면하다" },
  { kanji: "面接", reading: "めんせつ", mean: "면접" },
  { kanji: "もてなす", reading: "もてなす", mean: "대접하다" },
  { kanji: "盛り上がる", reading: "もりあがる", mean: "고조되다, 분위기가 살다" },
  { kanji: "ノック", reading: "ノック", mean: "노크" },
  { kanji: "のんびり", reading: "のんびり", mean: "느긋하게" },
  { kanji: "配達", reading: "はいたつ", mean: "배달" },
  { kanji: "拍手", reading: "はくしゅ", mean: "박수" },
  { kanji: "派手", reading: "はで", mean: "화려함" },
  { kanji: "発揮", reading: "はっき", mean: "발휘" },
  { kanji: "話しかける", reading: "はなしかける", mean: "말을 걸다" },
  { kanji: "場面", reading: "ばめん", mean: "장면" },
  { kanji: "腹を立てる", reading: "はらをたてる", mean: "화를 내다" },
  { kanji: "バランス", reading: "バランス", mean: "밸런스, 균형" },
  { kanji: "反映", reading: "はんえい", mean: "반영" },
  { kanji: "パンク", reading: "パンク", mean: "펑크" },
  { kanji: "反則", reading: "はんそく", mean: "반칙" },
  { kanji: "比較", reading: "ひかく", mean: "비교" },
  { kanji: "引き止める", reading: "ひきとめる", mean: "말리다, 만류하다" },
  { kanji: "ひそひそ", reading: "ひそひそ", mean: "소곤소곤" },
  { kanji: "びっしょり", reading: "びっしょり", mean: "흠뻑" },
  { kanji: "ひも", reading: "ひも", mean: "끈" },
  { kanji: "費用", reading: "ひよう", mean: "비용" },
  { kanji: "評判", reading: "ひょうばん", mean: "평판" },
  { kanji: "比例", reading: "ひれい", mean: "비례" },
  { kanji: "敏感", reading: "びんかん", mean: "민감함" },
  { kanji: "不安定", reading: "ふあんてい", mean: "불안정" },
  { kanji: "ぶらぶら", reading: "ぶらぶら", mean: "어슬렁어슬렁, 빈둥빈둥" },
  { kanji: "プレッシャー", reading: "プレッシャー", mean: "압박, 프레셔" },
  { kanji: "会釈", reading: "えしゃく", mean: "목례, 가벼운 인사" },
  { kanji: "アイデア", reading: "アイデア", mean: "아이디어" },
  { kanji: "案", reading: "あん", mean: "안, 생각" },
  { kanji: "頭にきている", reading: "あたまにきている", mean: "화가 나 있다" },
  { kanji: "当てる", reading: "あてる", mean: "맞히다, 부딪치다" },
  { kanji: "あぶない", reading: "あぶない", mean: "위험하다" },
  { kanji: "あやうい", reading: "あやうい", mean: "위태롭다" },
  { kanji: "あやまった", reading: "あやまった", mean: "잘못된" },
  { kanji: "誤り", reading: "あやまり", mean: "오류, 실수" },
  { kanji: "あらゆる", reading: "あらゆる", mean: "모든, 온갖" },
  { kanji: "あわれな", reading: "あわれな", mean: "불쌍한, 가련한" },
  { kanji: "案の定", reading: "あんのじょう", mean: "예상대로, 생각대로" },
  { kanji: "息抜き", reading: "いきぬき", mean: "숨 돌림, 휴식" },
  { kanji: "いじる", reading: "いじる", mean: "만지작거리다" },
  { kanji: "依然", reading: "いぜん", mean: "여전히" },
  { kanji: "一層", reading: "いっそう", mean: "한층, 더욱" },
  { kanji: "一致", reading: "いっち", mean: "일치" },
  { kanji: "いばる", reading: "いばる", mean: "뽐내다, 거들먹거리다" },
  { kanji: "一転", reading: "いってん", mean: "일전, 완전히 바뀜" },
  { kanji: "うつむく", reading: "うつむく", mean: "고개를 숙이다" },
  { kanji: "オイル", reading: "オイル", mean: "오일, 기름" },
  { kanji: "お勘定", reading: "おかんじょう", mean: "계산, 셈" },
  { kanji: "有効", reading: "ゆうこう", mean: "유효함" },
  { kanji: "有利", reading: "ゆうり", mean: "유리함" },
  { kanji: "容積", reading: "ようせき", mean: "용적, 부피" },
  { kanji: "要約", reading: "ようやく", mean: "요약" },
  { kanji: "予測", reading: "よそく", mean: "예측" },
  { kanji: "呼び止める", reading: "よびとめる", mean: "불러 세우다" },
  { kanji: "予防", reading: "よぼう", mean: "예방" },
  { kanji: "リーダー", reading: "リーダー", mean: "리더" },
  { kanji: "リハーサル", reading: "リハーサル", mean: "리허설" },
  { kanji: "リラックス", reading: "リラックス", mean: "릴랙스, 긴장을 풂" },
  { kanji: "レベル", reading: "レベル", mean: "수준, 레벨" },
  { kanji: "話題", reading: "わだい", mean: "화제" },
  { kanji: "割り込む", reading: "わりこむ", mean: "끼어들다, 새치기하다" },
  { kanji: "臆病", reading: "おくびょう", mean: "겁쟁이, 소심함" },
  { kanji: "惜しい", reading: "おしい", mean: "아깝다" },
  { kanji: "おしゃべり", reading: "おしゃべり", mean: "수다" },
  { kanji: "おそらく", reading: "おそらく", mean: "아마도" },
  { kanji: "落ち込む", reading: "おちこむ", mean: "낙담하다, 풀이 죽다" },
  { kanji: "思いがけない", reading: "おもいがけない", mean: "뜻밖의, 생각지도 못한" },
  { kanji: "おわび", reading: "おわび", mean: "사죄, 사과" },
  { kanji: "買い占める", reading: "かいしめる", mean: "사재기하다" },
  { kanji: "ガイド", reading: "ガイド", mean: "가이드, 안내" },
  { kanji: "概要", reading: "がいよう", mean: "개요" },
  { kanji: "かかりつけ", reading: "かかりつけ", mean: "늘 다니는 (병원)" },
  { kanji: "各自", reading: "かくじ", mean: "각자" },
  { kanji: "かさかさ", reading: "かさかさ", mean: "까칠까칠, 건조함" },
  { kanji: "過剰", reading: "かじょう", mean: "과잉" },
  { kanji: "かつて", reading: "かつて", mean: "일찍이, 예전에" },
  { kanji: "勝手", reading: "かって", mean: "제멋대로임, 편의" },
  { kanji: "帰省", reading: "きせい", mean: "귀성" },
  { kanji: "気に入る", reading: "きにいる", mean: "마음에 들다" },
  { kanji: "奇妙", reading: "きみょう", mean: "기묘함, 이상함" },
  { kanji: "行儀", reading: "ぎょうぎ", mean: "예의범절" },
  { kanji: "くだらない", reading: "くだらない", mean: "하찮다, 시시하다" },
  { kanji: "くるむ", reading: "くるむ", mean: "싸다, 감싸다" },
  { kanji: "見解", reading: "けんかい", mean: "견해" },
  { kanji: "貢献", reading: "こうけん", mean: "공헌" },
  { kanji: "小柄", reading: "こがら", mean: "몸집이 작음" },
  { kanji: "異なる", reading: "ことなる", mean: "다르다" },
  { kanji: "娯楽", reading: "ごらく", mean: "오락" },
  { kanji: "再三", reading: "さいさん", mean: "재삼, 여러 번" },
  { kanji: "サイン", reading: "サイン", mean: "서명, 사인" },
  { kanji: "ささやく", reading: "ささやく", mean: "속삭이다" },
  { kanji: "指図", reading: "さしず", mean: "지시, 지휘" },
  { kanji: "差し支え", reading: "さしつかえ", mean: "지장" },
  { kanji: "雑談", reading: "ざつだん", mean: "잡담" },
  { kanji: "さわがしい", reading: "さわがしい", mean: "소란스럽다, 어수선하다" },
  { kanji: "サンプル", reading: "サンプル", mean: "샘플, 견본" },
  { kanji: "仕上げる", reading: "しあげる", mean: "마무리하다, 완성하다" },
  { kanji: "しぐさ", reading: "しぐさ", mean: "행동거지, 몸짓" },
  { kanji: "じたばた", reading: "じたばた", mean: "허둥지둥, 바둥바둥" },
  { kanji: "じっと", reading: "じっと", mean: "가만히, 꾹" },
  { kanji: "失望", reading: "しつぼう", mean: "실망" },
  { kanji: "自分勝手", reading: "じぶんかって", mean: "이기적임, 제멋대로임" },
  { kanji: "湿る", reading: "しめる", mean: "습기 차다, 눅눅해지다" },
  { kanji: "終日", reading: "しゅうじつ", mean: "종일, 하루 종일" },
  { kanji: "修正", reading: "しゅうせい", mean: "수정" },
  { kanji: "衝突", reading: "しょうとつ", mean: "충돌" },
  { kanji: "しまう", reading: "しまう", mean: "치우다, 넣다" },
  { kanji: "収納", reading: "しゅうのう", mean: "수납" },
  { kanji: "所有", reading: "しょゆう", mean: "소유" },
  { kanji: "すます", reading: "すます", mean: "끝마치다" },
  { kanji: "すまない", reading: "すまない", mean: "미안하다" },
  { kanji: "精一杯", reading: "せいいっぱい", mean: "힘껏, 최대한" },
  { kanji: "せいぜい", reading: "せいぜい", mean: "기껏해야" },
  { kanji: "そうぞうしい", reading: "そうぞうしい", mean: "시끄럽다" },
  { kanji: "相当", reading: "そうとう", mean: "상당함" },
  { kanji: "そっくり", reading: "そっくり", mean: "꼭 닮음, 판박이" },
  { kanji: "そろう", reading: "そろう", mean: "갖추어지다, 모이다" },
  { kanji: "そろえる", reading: "そろえる", mean: "가지런히 하다, 맞추다" },
  { kanji: "題", reading: "だい", mean: "제목, 주제" },
  { kanji: "退屈", reading: "たいくつ", mean: "지루함" },
  { kanji: "直ちに", reading: "ただちに", mean: "즉시, 곧바로" },
  { kanji: "たちまち", reading: "たちまち", mean: "순식간에, 홀연히" },
  { kanji: "たびたび", reading: "たびたび", mean: "자주, 여러 번" },
  { kanji: "チャンス", reading: "チャンス", mean: "찬스, 기회" },
  { kanji: "テクニック", reading: "テクニック", mean: "테크닉, 기술" },
  { kanji: "でたらめ", reading: "でたらめ", mean: "엉터리, 허풍" },
  { kanji: "テンポ", reading: "テンポ", mean: "템포, 속도" },
  { kanji: "同情", reading: "どうじょう", mean: "동정" },
  { kanji: "動揺", reading: "どうよう", mean: "동요" },
  { kanji: "当然", reading: "とうぜん", mean: "당연함" },
  { kanji: "同様", reading: "どうよう", mean: "마찬가지, 같음" },
  { kanji: "同僚", reading: "どうりょう", mean: "동료" },
  { kanji: "とがっている", reading: "とがっている", mean: "뾰족하다" },
  { kanji: "とりあえず", reading: "とりあえず", mean: "우선, 일단" },
  { kanji: "トレーニング", reading: "トレーニング", mean: "트레이닝, 연습" },
  { kanji: "日中", reading: "にっちゅう", mean: "낮, 주간" },
  { kanji: "年中", reading: "ねんじゅう", mean: "연중, 일 년 내내" },
  { kanji: "はげる", reading: "はげる", mean: "벗겨지다, 벗어지다" },
  { kanji: "ハード", reading: "ハード", mean: "힘듦, 벅참" }
];

/* 상태 관리 (영구 틀림/통과 여부) */
const wordStatus = {};
WORD_DATA.forEach((_, idx) => {
  wordStatus[idx] = { failedOnce: false, passed: false };
});

/* =========================================================
   2. TTS 음성 합성 (학습 모드에서만 실행)
   ========================================================= */
// 한글이면 명조(serif) 대신 고딕으로 보이도록 표시
function markHangul(el) {
  if (el) el.classList.toggle('ko', /[\uAC00-\uD7A3]/.test(el.textContent));
}

/*
  발음 재생 (브라우저 내장 음성: Web Speech API)
  소리가 안 나던 원인들과 대응:
  - 목소리 목록이 늦게 로드됨 → 미리 불러 두고 일본어 목소리를 직접 지정
  - Chrome: cancel() 직후 바로 speak() 하면 소리가 씹힘 → 잠깐 뒤에 재생
  - Chrome: 재생 도중 음성 객체가 메모리에서 지워져 끊김 → 전역 변수에 보관
  - 일시정지 상태로 굳어 있는 경우 → resume()
  - 일본어 음성이 없는 기기 / 음성을 지원하지 않는 브라우저 → 안내 메시지
*/
const tts = { voice: null, voicesLoaded: false, current: null, timer: null };
const JA_VOICE_PREFERENCE = ['Kyoko', 'O-Ren', 'Otoya', 'Nanami', 'Google 日本語', 'Haruka', 'Ayumi', 'Ichiro', 'Sayaka'];

function ttsSupported() {
  return 'speechSynthesis' in window && typeof window.SpeechSynthesisUtterance === 'function';
}

function getJapaneseVoices() {
  return window.speechSynthesis.getVoices().filter(v => /^ja([-_]|$)/i.test(v.lang || ''));
}

function pickJapaneseVoice() {
  if (!ttsSupported()) return null;
  const all = window.speechSynthesis.getVoices();
  if (all.length) tts.voicesLoaded = true;
  const ja = getJapaneseVoices();
  tts.voice = JA_VOICE_PREFERENCE.map(name => ja.find(v => v.name.includes(name))).find(Boolean)
    || ja.find(v => v.localService)
    || ja[0]
    || null;
  return tts.voice;
}

// 앱이 열릴 때 목소리 목록을 미리 불러 둠
if (ttsSupported()) {
  pickJapaneseVoice();
  const synth = window.speechSynthesis;
  if (typeof synth.addEventListener === 'function') synth.addEventListener('voiceschanged', pickJapaneseVoice);
  else synth.onvoiceschanged = pickJapaneseVoice;
}

function ttsErrorMessage(code) {
  if (code === 'not-allowed') return '브라우저가 소리 재생을 막았어요. 발음 버튼을 한 번 더 눌러 주세요.';
  if (code === 'language-unavailable' || code === 'voice-unavailable') return '이 기기에 일본어 음성이 없어요. 기기 설정에서 일본어 음성(TTS)을 추가해 주세요.';
  if (code === 'network') return '음성을 불러오지 못했어요. 인터넷 연결을 확인해 주세요.';
  return '발음을 재생하지 못했어요. 잠시 후 다시 눌러 주세요.';
}

function setAudioButtonPlaying(on) {
  const btn = document.querySelector('.card-audio-btn');
  if (btn) btn.classList.toggle('is-playing', on);
}

function speakJapanese(text, retryVoice) {
  if (!text) return;
  if (!ttsSupported()) {
    showToast('이 브라우저는 음성 재생을 지원하지 않아요. Chrome이나 Safari에서 열어 주세요.');
    return;
  }
  const synth = window.speechSynthesis;
  if (!tts.voice) pickJapaneseVoice();
  if (tts.voicesLoaded && !tts.voice && retryVoice === undefined) {
    showToast('이 기기에 일본어 음성이 없어요. 기기 설정에서 일본어 음성(TTS)을 추가해 주세요.');
    // 목소리 지정 없이도 재생되는 기기가 있어서 시도는 계속함
  }

  const voice = retryVoice !== undefined ? retryVoice : tts.voice;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'ja-JP';
  if (voice) u.voice = voice;
  u.rate = 0.85;
  u.pitch = 1;
  u.volume = 1;
  tts.current = u; // 재생 도중 지워지지 않도록 보관

  const finish = () => {
    clearTimeout(tts.timer);
    if (tts.current === u) setAudioButtonPlaying(false);
  };
  u.onstart = () => {
    clearTimeout(tts.timer);
    setAudioButtonPlaying(true);
  };
  u.onend = finish;
  u.onerror = ev => {
    finish();
    const code = ev && ev.error;
    if (code === 'interrupted' || code === 'canceled') return; // 다른 단어를 누른 경우
    // 인터넷 목소리(예: Google 日本語)가 실패하면 기기 안의 일본어 목소리로 한 번 더 시도
    if (retryVoice === undefined && voice && !voice.localService) {
      const local = getJapaneseVoices().find(v => v.localService && v !== voice) || null;
      speakJapanese(text, local);
      return;
    }
    showToast(ttsErrorMessage(code));
  };

  const start = () => {
    if (synth.paused) synth.resume();
    synth.speak(u);
    clearTimeout(tts.timer);
    // 2.5초 안에 재생이 시작되지 않으면 안내
    tts.timer = setTimeout(() => {
      if (tts.current === u && !synth.speaking) {
        finish();
        showToast('소리가 나지 않나요? 무음 모드와 볼륨을 확인해 주세요.');
      }
    }, 2500);
  };

  if (synth.speaking || synth.pending) {
    synth.cancel();
    setTimeout(start, 80); // Chrome에서 cancel 직후 바로 재생하면 소리가 씹힘
  } else {
    start();
  }
}

/* =========================================================
   3. 화면 전환
   ========================================================= */
function switchView(view) {
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  const titleEl = document.getElementById('app-title');
  document.body.dataset.view = view;

  if (view === 'home') {
    document.getElementById('home-section').classList.add('active');
    titleEl.textContent = "JLPT 단어장";
    updateAllStats();
  } else if (view === 'learn') {
    document.getElementById('learn-section').classList.add('active');
    titleEl.textContent = "단어 학습";
    showLearnModeSelect();
  } else if (view === 'quiz') {
    document.getElementById('quiz-section').classList.add('active');
    titleEl.textContent = "실전 퀴즈";
    initQuiz();
  } else if (view === 'review') {
    document.getElementById('review-section').classList.add('active');
    titleEl.textContent = "집중 복습";
    initReview();
  }
}

function updateAllStats() {
  let passCount = 0;
  let failCount = 0;
  Object.values(wordStatus).forEach(s => {
    if (s.failedOnce) failCount++;
    else if (s.passed) passCount++;
  });

  document.getElementById('home-total-count').textContent = WORD_DATA.length;
  document.getElementById('home-pass-count').textContent = passCount;
  document.getElementById('home-fail-count').textContent = failCount;

  document.getElementById('rev-failed-badge').textContent = failCount;
  document.getElementById('rev-passed-badge').textContent = passCount;

  // 홈 진행 막대 (통과 / 틀림 비율)
  const total = WORD_DATA.length || 1;
  const passBar = document.getElementById('home-bar-pass');
  const failBar = document.getElementById('home-bar-fail');
  const caption = document.getElementById('home-progress-caption');
  if (passBar) passBar.style.width = `${(passCount / total) * 100}%`;
  if (failBar) failBar.style.width = `${(failCount / total) * 100}%`;
  const done = passCount + failCount;
  const pct = (done / total) * 100;
  const pctEl = document.getElementById('home-progress-pct');
  if (pctEl) pctEl.textContent = pct === 0 ? '0' : pct < 10 ? pct.toFixed(1) : Math.round(pct);
  if (caption) {
    caption.textContent = done === 0
      ? '퀴즈를 풀면 여기에 진행률이 쌓여요'
      : `${done} / ${WORD_DATA.length} 단어 풀이 · 이 기기에 자동 저장`;
  }
  const resetBtn = document.getElementById('home-reset-btn');
  if (resetBtn) resetBtn.hidden = passCount + failCount === 0;

  // 다른 기기에서 기록이 바뀌었을 때 퀴즈 화면 숫자도 맞춰 줌
  const quizPass = document.getElementById('quiz-pass-count');
  const quizFail = document.getElementById('quiz-fail-count');
  if (quizPass) quizPass.textContent = passCount;
  if (quizFail) quizFail.textContent = failCount;

  // 통과/틀림이 바뀔 때마다 이 기기에 저장
  saveProgress();
}

/* =========================================================
   4. 학습 모드 (방식 선택 후 플래시카드 실행)
   ========================================================= */
let learnList = [...WORD_DATA];
let learnIndex = 0;
let learnMode = 'word';
let cardFlipped = false;

function showLearnModeSelect() {
  document.getElementById('learn-mode-select').style.display = 'flex';
  document.getElementById('learn-card-screen').style.display = 'none';
}

function startLearnSession(mode) {
  learnMode = mode;
  document.getElementById('learn-mode-select').style.display = 'none';
  document.getElementById('learn-card-screen').style.display = 'flex';

  document.getElementById('current-learn-tag').textContent = 
    mode === 'word' ? '1番線 · 단어 선' : '2番線 · 뜻 선';

  learnIndex = 0;
  cardFlipped = false;
  updateLearnCard();
}

function updateLearnCard() {
  const item = learnList[learnIndex];
  if (!item) return;

  const total = learnList.length;
  const current = learnIndex + 1;
  document.getElementById('learn-progress').textContent = `${current} / ${total}`;
  document.getElementById('learn-progress-bar').style.width = `${(current / total) * 100}%`;

  const tagEl = document.getElementById('card-tag-label');
  const mainEl = document.getElementById('card-main');
  const subEl = document.getElementById('card-sub');
  const answerBox = document.getElementById('card-answer-box');
  const answerText = document.getElementById('card-answer-text');
  const hintText = document.getElementById('card-hint-text');

  if (learnMode === 'word') {
    tagEl.textContent = "일본어 단어";
    mainEl.textContent = item.kanji;
    subEl.textContent = item.reading !== item.kanji ? item.reading : '';
    answerText.textContent = item.mean;
  } else {
    tagEl.textContent = "한국어 뜻";
    mainEl.textContent = item.mean;
    subEl.textContent = '';
    answerText.textContent = `${item.kanji} (${item.reading})`;
  }

  answerBox.style.display = cardFlipped ? 'block' : 'none';
  hintText.textContent = cardFlipped ? "탭해서 다시 가리기" : "탭해서 정답 보기";
  markHangul(mainEl);
  updateStationSign();
}

// 역 표지판: 역 번호 + 이전 역 / 다음 역 (정답이 미리 보이지 않도록 '문제 쪽'만 표시)
function updateStationSign() {
  const num = document.getElementById('eki-num');
  if (!num) return;
  const digits = String(learnList.length).length;
  num.innerHTML = '<small>JL</small>' + String(learnIndex + 1).padStart(Math.max(3, digits), '0');

  const prev = learnList[learnIndex - 1];
  const next = learnList[learnIndex + 1];
  const front = w => (learnMode === 'word' ? w.kanji : w.mean);
  const sub = w => (learnMode === 'word' && w.reading !== w.kanji ? w.reading : '');

  document.getElementById('eki-prev').textContent = prev ? '← ' + front(prev) : '';
  document.getElementById('eki-next').textContent = next ? front(next) + ' →' : '종점';
  const prevSub = prev ? sub(prev) : '';
  const nextSub = next ? sub(next) : '';
  document.getElementById('eki-prev-sub').textContent = prevSub;
  document.getElementById('eki-next-sub').textContent = nextSub;
  document.querySelector('.eki-roman').hidden = !prevSub && !nextSub;
}

function toggleCard() {
  cardFlipped = !cardFlipped;
  const answerBox = document.getElementById('card-answer-box');
  const hintText = document.getElementById('card-hint-text');

  answerBox.style.display = cardFlipped ? 'block' : 'none';
  hintText.textContent = cardFlipped ? "탭해서 다시 가리기" : "탭해서 정답 보기";
}

function prevCard() {
  if (learnIndex > 0) {
    learnIndex--;
    cardFlipped = false;
    updateLearnCard();
  }
}

function nextCard() {
  if (learnIndex < learnList.length - 1) {
    learnIndex++;
    cardFlipped = false;
    updateLearnCard();
  }
}

function shuffleLearn() {
  learnList.sort(() => Math.random() - 0.5);
  learnIndex = 0;
  cardFlipped = false;
  updateLearnCard();
}

function playCurrentAudio(e) {
  if (e) e.stopPropagation();
  const item = learnList[learnIndex];
  if (item) speakJapanese(item.reading || item.kanji);
}

window.addEventListener('keydown', (e) => {
  // QR 팝업이 열려 있으면 학습 단축키 대신 팝업 닫기만 처리
  const qrModal = document.getElementById('qr-modal');
  if (qrModal && !qrModal.hidden) {
    if (e.key === 'Escape') closeQrModal();
    return;
  }

  const cardScreen = document.getElementById('learn-card-screen');
  if (cardScreen && cardScreen.style.display === 'flex') {
    if (e.code === 'Space') {
      e.preventDefault();
      toggleCard();
    } else if (e.code === 'ArrowRight') {
      nextCard();
    } else if (e.code === 'ArrowLeft') {
      prevCard();
    } else if (e.code === 'Enter') {
      playCurrentAudio();
    }
  }
});

/* =========================================================
   5. 퀴즈 모드 로직 (듣기 버튼 없음)
   ========================================================= */
let quizPool = [];
let currentQuizItem = null;
let currentQuizType = 'wordToMean';
let quizAnswerIndex = -1;

function initQuiz() {
  quizPool = WORD_DATA.map((item, index) => ({ ...item, originalIndex: index }));
  quizPool.sort(() => Math.random() - 0.5);
  updateQuizStats();
  loadNextQuiz();
}

function updateQuizStats() {
  let passCount = 0;
  let failCount = 0;
  Object.values(wordStatus).forEach(s => {
    if (s.failedOnce) failCount++;
    else if (s.passed) passCount++;
  });
  document.getElementById('quiz-pass-count').textContent = passCount;
  document.getElementById('quiz-fail-count').textContent = failCount;
  document.getElementById('quiz-remain-count').textContent = quizPool.length;

  updateAllStats();
}

function loadNextQuiz() {
  if (quizPool.length === 0) {
    alert("모든 퀴즈를 완료했습니다! 복습 탭에서 오답을 확인해보세요.");
    switchView('review');
    return;
  }

  currentQuizItem = quizPool.pop();
  updateQuizStats();

  currentQuizType = Math.random() > 0.5 ? 'wordToMean' : 'meanToWord';

  const labelEl = document.getElementById('quiz-type-label');
  const questionEl = document.getElementById('quiz-question-text');
  const bannerEl = document.getElementById('quiz-result-banner');
  const nextBtn = document.getElementById('quiz-next-btn');

  bannerEl.className = 'result-banner';
  bannerEl.style.display = '';
  nextBtn.style.display = 'none';

  const distractors = WORD_DATA
    .filter((_, idx) => idx !== currentQuizItem.originalIndex)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const options = [currentQuizItem, ...distractors].sort(() => Math.random() - 0.5);
  quizAnswerIndex = options.indexOf(currentQuizItem);

  if (currentQuizType === 'wordToMean') {
    labelEl.textContent = "다음 단어의 정확한 뜻을 고르세요";
    questionEl.textContent = currentQuizItem.kanji;
  } else {
    labelEl.textContent = "다음 뜻에 해당하는 단어를 고르세요";
    questionEl.textContent = currentQuizItem.mean;
  }
  markHangul(questionEl);

  const optionsContainer = document.getElementById('quiz-options');
  optionsContainer.innerHTML = '';
  options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    fillOptionButton(btn, idx, currentQuizType === 'wordToMean'
      ? opt.mean
      : `${opt.kanji} (${opt.reading})`);
    btn.onclick = () => checkQuizAnswer(idx, btn);
    optionsContainer.appendChild(btn);
  });
}

function fillOptionButton(btn, idx, label) {
  const num = document.createElement('span');
  num.className = 'opt-num';
  num.textContent = idx + 1;
  const text = document.createElement('span');
  text.className = 'opt-text';
  text.textContent = label;
  btn.append(num, text);
}

function checkQuizAnswer(selectedIdx, selectedBtn) {
  const options = document.querySelectorAll('#quiz-options .option-btn');
  options.forEach(b => b.disabled = true);

  const banner = document.getElementById('quiz-result-banner');
  const resultText = document.getElementById('quiz-result-text');
  const resultDetail = document.getElementById('quiz-result-detail');
  const nextBtn = document.getElementById('quiz-next-btn');
  const origIdx = currentQuizItem.originalIndex;

  if (selectedIdx === quizAnswerIndex) {
    selectedBtn.classList.add('correct');
    banner.className = 'result-banner pass';
    resultText.textContent = "통과";
    resultDetail.textContent = `${currentQuizItem.kanji} (${currentQuizItem.reading}) : ${currentQuizItem.mean}`;

    if (!wordStatus[origIdx].failedOnce) {
      wordStatus[origIdx].passed = true;
    }
  } else {
    selectedBtn.classList.add('wrong');
    options[quizAnswerIndex].classList.add('correct');

    banner.className = 'result-banner fail';
    resultText.textContent = "틀림";
    resultDetail.textContent = `원래의 뜻: ${currentQuizItem.kanji} (${currentQuizItem.reading}) = ${currentQuizItem.mean}`;

    wordStatus[origIdx].failedOnce = true;
    wordStatus[origIdx].passed = false;
  }

  updateQuizStats();
  nextBtn.style.display = 'block';
}

function nextQuizQuestion() {
  loadNextQuiz();
}

/* =========================================================
   6. 복습 모드 로직 (듣기 버튼 없음)
   ========================================================= */
let reviewFilter = 'failed';
let reviewPool = [];
let currentReviewItem = null;
let currentReviewType = 'wordToMean';
let reviewAnswerIndex = -1;

function setReviewFilter(filter) {
  reviewFilter = filter;
  document.getElementById('rev-filter-failed').classList.toggle('active', filter === 'failed');
  document.getElementById('rev-filter-passed').classList.toggle('active', filter === 'passed');
  initReview();
}

function initReview() {
  const list = [];
  Object.keys(wordStatus).forEach(idx => {
    const i = parseInt(idx, 10);
    if (reviewFilter === 'failed' && wordStatus[i].failedOnce) {
      list.push({ ...WORD_DATA[i], originalIndex: i });
    } else if (reviewFilter === 'passed' && wordStatus[i].passed && !wordStatus[i].failedOnce) {
      list.push({ ...WORD_DATA[i], originalIndex: i });
    }
  });

  reviewPool = list.sort(() => Math.random() - 0.5);

  const emptyBox = document.getElementById('review-empty');
  const contentBox = document.getElementById('review-content');

  if (reviewPool.length === 0) {
    emptyBox.style.display = 'block';
    contentBox.style.display = 'none';
  } else {
    emptyBox.style.display = 'none';
    contentBox.style.display = 'flex';
    loadNextReview();
  }
}

function loadNextReview() {
  if (reviewPool.length === 0) {
    alert("선택하신 복습 단어를 모두 풀었습니다!");
    initReview();
    return;
  }

  currentReviewItem = reviewPool.pop();
  currentReviewType = Math.random() > 0.5 ? 'wordToMean' : 'meanToWord';

  const labelEl = document.getElementById('review-type-label');
  const questionEl = document.getElementById('review-question-text');
  const bannerEl = document.getElementById('review-result-banner');
  const nextBtn = document.getElementById('review-next-btn');

  bannerEl.className = 'result-banner';
  bannerEl.style.display = '';
  nextBtn.style.display = 'none';

  const distractors = WORD_DATA
    .filter((_, idx) => idx !== currentReviewItem.originalIndex)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const options = [currentReviewItem, ...distractors].sort(() => Math.random() - 0.5);
  reviewAnswerIndex = options.indexOf(currentReviewItem);

  if (currentReviewType === 'wordToMean') {
    labelEl.textContent = "복습: 단어의 뜻을 고르세요";
    questionEl.textContent = currentReviewItem.kanji;
  } else {
    labelEl.textContent = "복습: 뜻에 해당하는 단어를 고르세요";
    questionEl.textContent = currentReviewItem.mean;
  }
  markHangul(questionEl);

  const optionsContainer = document.getElementById('review-options');
  optionsContainer.innerHTML = '';
  options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    fillOptionButton(btn, idx, currentReviewType === 'wordToMean'
      ? opt.mean
      : `${opt.kanji} (${opt.reading})`);
    btn.onclick = () => checkReviewAnswer(idx, btn);
    optionsContainer.appendChild(btn);
  });
}

function checkReviewAnswer(selectedIdx, selectedBtn) {
  const options = document.querySelectorAll('#review-options .option-btn');
  options.forEach(b => b.disabled = true);

  const banner = document.getElementById('review-result-banner');
  const resultText = document.getElementById('review-result-text');
  const resultDetail = document.getElementById('review-result-detail');
  const nextBtn = document.getElementById('review-next-btn');
  const origIdx = currentReviewItem.originalIndex;

  if (selectedIdx === reviewAnswerIndex) {
    selectedBtn.classList.add('correct');
    banner.className = 'result-banner pass';
    resultText.textContent = "통과";
    resultDetail.textContent = `${currentReviewItem.kanji} (${currentReviewItem.reading}) : ${currentReviewItem.mean}`;
  } else {
    selectedBtn.classList.add('wrong');
    options[reviewAnswerIndex].classList.add('correct');

    banner.className = 'result-banner fail';
    resultText.textContent = "틀림";
    resultDetail.textContent = `원래의 뜻: ${currentReviewItem.kanji} (${currentReviewItem.reading}) = ${currentReviewItem.mean}`;

    wordStatus[origIdx].failedOnce = true;
    wordStatus[origIdx].passed = false;
  }

  updateAllStats();
  nextBtn.style.display = 'block';
}

function nextReviewQuestion() {
  loadNextReview();
}

/* =========================================================
   7. 휴대폰으로 열기 (QR코드)
   ========================================================= */
let currentShareUrl = '';

function getShareUrl() {
  return location.origin + location.pathname + location.search;
}

function openQrModal() {
  const modal = document.getElementById('qr-modal');
  const box = document.getElementById('qr-box');
  const warning = document.getElementById('qr-warning');
  const warnTitle = document.getElementById('qr-warning-title');
  const warnText = document.getElementById('qr-warning-text');
  const copyBtn = document.getElementById('qr-copy-btn');
  const progressRow = document.getElementById('qr-progress-row');

  const host = location.hostname;
  const isFile = location.protocol === 'file:';
  const isLocalOnly = ['localhost', '127.0.0.1', '::1', '[::1]', ''].includes(host);

  box.innerHTML = '';
  warning.hidden = true;
  progressRow.hidden = true;
  copyBtn.textContent = '링크 복사';
  copyBtn.hidden = false;

  if (isFile || isLocalOnly) {
    currentShareUrl = getShareUrl();
    copyBtn.hidden = true;
    warning.hidden = false;
    if (isFile) {
      warnTitle.textContent = '아직 휴대폰에서 열 수 없어요';
      warnText.textContent = '지금은 이 컴퓨터의 파일로 열려 있어요. GitHub Pages에 올린 뒤 그 주소로 열면, 여기에 휴대폰용 QR코드가 자동으로 나타나요.';
    } else {
      warnTitle.textContent = '이 주소는 이 컴퓨터에서만 열려요';
      warnText.textContent = `'${host || 'localhost'}' 대신 컴퓨터의 IP 주소(예: 192.168.0.10)로 접속한 뒤 다시 열어 주세요. 휴대폰과 컴퓨터가 같은 와이파이에 있어야 해요.`;
    }
  } else {
    const { pass, fail } = countProgress();
    // 로그인했다면 휴대폰에서 같은 계정으로 로그인하면 되므로 기록을 QR에 담지 않음
    progressRow.hidden = pass + fail === 0;
    document.getElementById('qr-progress-summary').textContent = `통과 ${pass} · 틀림 ${fail}`;
    renderQr();
  }

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

// QR코드 그리기 (학습 기록 포함 여부에 따라 주소가 달라짐)
function renderQr() {
  const box = document.getElementById('qr-box');
  const sub = document.getElementById('qr-sub');
  const warning = document.getElementById('qr-warning');
  const progressRow = document.getElementById('qr-progress-row');
  const includeProgress = !progressRow.hidden && document.getElementById('qr-include-progress').checked;

  currentShareUrl = getShareUrl() + (includeProgress ? '#' + encodeProgress() : '');
  sub.textContent = includeProgress
      ? '휴대폰 카메라로 비추면 지금까지의 학습 기록과 함께 열려요.'
    : '휴대폰 카메라로 QR코드를 비추면 이 단어장이 바로 열려요.';

  try {
    box.innerHTML = makeQrSvg(currentShareUrl);
    warning.hidden = true;
  } catch (err) {
    box.innerHTML = '';
    warning.hidden = false;
    document.getElementById('qr-warning-title').textContent = 'QR코드를 만들 수 없어요';
    document.getElementById('qr-warning-text').textContent = err.message;
  }
}

function closeQrModal() {
  document.getElementById('qr-modal').hidden = true;
  document.body.style.overflow = '';
}

function copyQrUrl() {
  const btn = document.getElementById('qr-copy-btn');
  const url = currentShareUrl || getShareUrl();
  const done = () => {
    btn.textContent = '복사됨';
    setTimeout(() => { btn.textContent = '링크 복사'; }, 1500);
  };
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(url).then(done).catch(() => fallbackCopy(url, done));
  } else {
    fallbackCopy(url, done);
  }
}

function fallbackCopy(text, done) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); done(); } catch (e) { /* 복사 실패 시 무시 */ }
  ta.remove();
}

/* =========================================================
   8. 학습 기록 저장 & 불러오기
   - 이 기기: 브라우저 저장소(localStorage)에 자동 저장
   - 다른 기기: QR코드 주소(#p...)에 기록을 담아 전달
   ========================================================= */
const STORAGE_KEY = 'jlpt-word-status-v1';

// 단어별 상태: 0 = 안 풂, 1 = 통과, 2 = 틀림
function getStates() {
  return WORD_DATA.map((_, i) => (wordStatus[i].failedOnce ? 2 : (wordStatus[i].passed ? 1 : 0)));
}

function countProgress() {
  let pass = 0, fail = 0;
  getStates().forEach(st => { if (st === 1) pass++; else if (st === 2) fail++; });
  return { pass, fail };
}

// 기록 → 짧은 문자열  (예: "p911-s3._a.")
function encodeProgress() {
  const n = WORD_DATA.length;
  const states = getStates();

  // 방식 1: 푼 단어만 기록 (앞 단어와의 간격 + 상태 기호)
  let sparse = '';
  let prev = -1;
  states.forEach((st, i) => {
    if (!st) return;
    const gap = i - prev - 1;
    sparse += (gap ? gap.toString(36) : '') + (st === 1 ? '.' : '_');
    prev = i;
  });

  // 방식 2: 모든 단어를 2비트씩 압축 (많이 풀었을 때 더 짧음)
  const bytes = new Uint8Array(Math.ceil(n / 4));
  states.forEach((st, i) => { bytes[i >> 2] |= st << ((i & 3) * 2); });
  let end = bytes.length;
  while (end > 0 && bytes[end - 1] === 0) end--;
  let bin = '';
  for (let i = 0; i < end; i++) bin += String.fromCharCode(bytes[i]);
  const packed = btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  return `p${n}-` + (sparse.length <= packed.length ? 's' + sparse : 'b' + packed);
}

// 문자열 → 기록 (형식이 틀리거나 단어 수가 다르면 null)
function decodeProgress(code) {
  const m = /^p(\d+)-([sb])(.*)$/.exec(code || '');
  if (!m) return null;
  const n = WORD_DATA.length;
  if (Number(m[1]) !== n) return { mismatch: true };
  const states = new Array(n).fill(0);

  if (m[2] === 's') {
    const re = /([0-9a-z]*)([._])/g;
    let tok, idx = -1, consumed = 0;
    while ((tok = re.exec(m[3])) !== null) {
      if (tok.index !== consumed) return null;
      consumed = re.lastIndex;
      idx += 1 + (tok[1] ? parseInt(tok[1], 36) : 0);
      if (idx >= n) return null;
      states[idx] = tok[2] === '.' ? 1 : 2;
    }
    if (consumed !== m[3].length) return null;
  } else {
    let bin;
    try {
      const b64 = m[3].replace(/-/g, '+').replace(/_/g, '/');
      bin = atob(b64 + '==='.slice((b64.length + 3) % 4));
    } catch (e) {
      return null;
    }
    for (let i = 0; i < n; i++) {
      const st = ((bin.charCodeAt(i >> 2) || 0) >> ((i & 3) * 2)) & 3;
      if (st === 3) return null;
      states[i] = st;
    }
  }
  return { states };
}

// merge = true 이면 기존 기록과 합침 (틀림 > 통과 > 안 풂 순으로 우선)
function applyStates(states, merge) {
  let changed = 0;
  states.forEach((st, i) => {
    const s = wordStatus[i];
    const before = s.failedOnce ? 2 : (s.passed ? 1 : 0);
    const next = merge ? Math.max(before, st) : st;
    s.failedOnce = next === 2;
    s.passed = next === 1;
    if (next !== before) changed++;
  });
  return changed;
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, encodeProgress());
  } catch (e) { /* 개인정보 보호 모드 등에서는 저장하지 않음 */ }
}

function loadProgress() {
  let saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { return; }
  const result = decodeProgress(saved);
  if (result && result.states) applyStates(result.states, false);
}

// QR코드로 들어온 기록 불러오기
function importFromUrl() {
  const code = location.hash.slice(1);
  if (!code.startsWith('p')) return;
  const result = decodeProgress(code);
  if (!result) return;

  // 새로고침해도 다시 불러오지 않도록 주소에서 기록 부분 제거
  history.replaceState(null, '', location.pathname + location.search);

  if (result.mismatch) {
    showToast('단어 목록이 달라서 학습 기록을 불러오지 못했어요');
    return;
  }
  const changed = applyStates(result.states, true);
  saveProgress();
  showToast(changed > 0
    ? `학습 기록을 불러왔어요 (${changed}개 단어)`
    : '이미 같은 학습 기록이 저장되어 있어요');
}

function resetProgress() {
  if (!confirm('이 기기에 저장된 통과/틀림 기록을 모두 지울까요?')) return;
  applyStates(new Array(WORD_DATA.length).fill(0), false);
  updateAllStats();
  showToast('학습 기록을 초기화했어요');
}

let toastTimer = null;
function showToast(message) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = message;
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 2600);
}

/* =========================================================
   9. QR 코드 생성기 (외부 라이브러리 없음)
   - 바이트 모드(UTF-8), 오류 정정 레벨 M, 버전 1~40 자동 선택
   - 사용법: makeQrSvg("https://...")  →  <svg> 문자열
   ========================================================= */
(function (global) {
  'use strict';

  // 오류 정정 레벨 M 기준 테이블 (인덱스 = 버전)
  const ECC_PER_BLOCK = [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26,
    26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28];
  const NUM_BLOCKS = [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16,
    17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49];
  const ECC_FORMAT_BITS_M = 0;

  function getBit(x, i) { return ((x >>> i) & 1) !== 0; }

  function numRawDataModules(ver) {
    let result = (16 * ver + 128) * ver + 64;
    if (ver >= 2) {
      const numAlign = Math.floor(ver / 7) + 2;
      result -= (25 * numAlign - 10) * numAlign - 55;
      if (ver >= 7) result -= 36;
    }
    return result;
  }

  function numDataCodewords(ver) {
    return Math.floor(numRawDataModules(ver) / 8) - ECC_PER_BLOCK[ver] * NUM_BLOCKS[ver];
  }

  /* ---------- Reed-Solomon (GF(256), 0x11D) ---------- */
  function rsMul(x, y) {
    let z = 0;
    for (let i = 7; i >= 0; i--) {
      z = (z << 1) ^ ((z >>> 7) * 0x11D);
      z ^= ((y >>> i) & 1) * x;
    }
    return z;
  }

  function rsDivisor(degree) {
    const result = new Array(degree).fill(0);
    result[degree - 1] = 1;
    let root = 1;
    for (let i = 0; i < degree; i++) {
      for (let j = 0; j < result.length; j++) {
        result[j] = rsMul(result[j], root);
        if (j + 1 < result.length) result[j] ^= result[j + 1];
      }
      root = rsMul(root, 0x02);
    }
    return result;
  }

  function rsRemainder(data, divisor) {
    const result = divisor.map(() => 0);
    for (const b of data) {
      const factor = b ^ result.shift();
      result.push(0);
      divisor.forEach((coef, i) => { result[i] ^= rsMul(coef, factor); });
    }
    return result;
  }

  function addEccAndInterleave(data, ver) {
    const numBlocks = NUM_BLOCKS[ver];
    const blockEccLen = ECC_PER_BLOCK[ver];
    const rawCodewords = Math.floor(numRawDataModules(ver) / 8);
    const numShortBlocks = numBlocks - (rawCodewords % numBlocks);
    const shortBlockLen = Math.floor(rawCodewords / numBlocks);
    const divisor = rsDivisor(blockEccLen);

    const blocks = [];
    for (let i = 0, k = 0; i < numBlocks; i++) {
      const dat = data.slice(k, k + shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1));
      k += dat.length;
      const ecc = rsRemainder(dat, divisor);
      if (i < numShortBlocks) dat.push(0);
      blocks.push(dat.concat(ecc));
    }

    const result = [];
    for (let i = 0; i < blocks[0].length; i++) {
      blocks.forEach((block, j) => {
        if (i !== shortBlockLen - blockEccLen || j >= numShortBlocks) result.push(block[i]);
      });
    }
    return result;
  }

  /* ---------- 매트릭스 ---------- */
  function encode(text) {
    const bytes = Array.from(new TextEncoder().encode(text));

    let ver = 1;
    for (; ver <= 40; ver++) {
      const ccBits = ver < 10 ? 8 : 16;
      if (4 + ccBits + bytes.length * 8 <= numDataCodewords(ver) * 8) break;
    }
    if (ver > 40) throw new Error('QR 코드에 담기엔 주소가 너무 깁니다.');

    // 비트열 구성
    const bits = [];
    const push = (val, len) => { for (let i = len - 1; i >= 0; i--) bits.push((val >>> i) & 1); };
    push(0x4, 4);
    push(bytes.length, ver < 10 ? 8 : 16);
    bytes.forEach(b => push(b, 8));
    const capacity = numDataCodewords(ver) * 8;
    push(0, Math.min(4, capacity - bits.length));
    push(0, (8 - (bits.length % 8)) % 8);
    for (let pad = 0xEC; bits.length < capacity; pad ^= 0xEC ^ 0x11) push(pad, 8);

    const dataCodewords = [];
    for (let i = 0; i < bits.length; i += 8) {
      let v = 0;
      for (let j = 0; j < 8; j++) v = (v << 1) | bits[i + j];
      dataCodewords.push(v);
    }
    const allCodewords = addEccAndInterleave(dataCodewords, ver);

    const size = ver * 4 + 17;
    const modules = Array.from({ length: size }, () => new Array(size).fill(false));
    const isFunc = Array.from({ length: size }, () => new Array(size).fill(false));

    const setFunc = (x, y, dark) => { modules[y][x] = dark; isFunc[y][x] = true; };

    function drawFormatBits(mask) {
      const data = (ECC_FORMAT_BITS_M << 3) | mask;
      let rem = data;
      for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
      const b = ((data << 10) | rem) ^ 0x5412;

      for (let i = 0; i <= 5; i++) setFunc(8, i, getBit(b, i));
      setFunc(8, 7, getBit(b, 6));
      setFunc(8, 8, getBit(b, 7));
      setFunc(7, 8, getBit(b, 8));
      for (let i = 9; i < 15; i++) setFunc(14 - i, 8, getBit(b, i));

      for (let i = 0; i < 8; i++) setFunc(size - 1 - i, 8, getBit(b, i));
      for (let i = 8; i < 15; i++) setFunc(8, size - 15 + i, getBit(b, i));
      setFunc(8, size - 8, true);
    }

    // 타이밍 패턴
    for (let i = 0; i < size; i++) {
      setFunc(6, i, i % 2 === 0);
      setFunc(i, 6, i % 2 === 0);
    }

    // 파인더 패턴
    [[3, 3], [size - 4, 3], [3, size - 4]].forEach(([cx, cy]) => {
      for (let dy = -4; dy <= 4; dy++) {
        for (let dx = -4; dx <= 4; dx++) {
          const dist = Math.max(Math.abs(dx), Math.abs(dy));
          const x = cx + dx, y = cy + dy;
          if (x >= 0 && x < size && y >= 0 && y < size) setFunc(x, y, dist !== 2 && dist !== 4);
        }
      }
    });

    // 정렬 패턴
    if (ver > 1) {
      const numAlign = Math.floor(ver / 7) + 2;
      const step = Math.floor((ver * 8 + numAlign * 3 + 5) / (numAlign * 4 - 4)) * 2;
      const pos = [6];
      for (let p = size - 7; pos.length < numAlign; p -= step) pos.splice(1, 0, p);
      for (let i = 0; i < numAlign; i++) {
        for (let j = 0; j < numAlign; j++) {
          if ((i === 0 && j === 0) || (i === 0 && j === numAlign - 1) || (i === numAlign - 1 && j === 0)) continue;
          for (let dy = -2; dy <= 2; dy++) {
            for (let dx = -2; dx <= 2; dx++) {
              setFunc(pos[i] + dx, pos[j] + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
            }
          }
        }
      }
    }

    drawFormatBits(0); // 자리 예약

    // 버전 정보 (7 이상)
    if (ver >= 7) {
      let rem = ver;
      for (let i = 0; i < 12; i++) rem = (rem << 1) ^ ((rem >>> 11) * 0x1F25);
      const b = (ver << 12) | rem;
      for (let i = 0; i < 18; i++) {
        const bit = getBit(b, i);
        const a = size - 11 + (i % 3), c = Math.floor(i / 3);
        setFunc(a, c, bit);
        setFunc(c, a, bit);
      }
    }

    // 데이터 배치 (지그재그)
    let bitIdx = 0;
    for (let right = size - 1; right >= 1; right -= 2) {
      if (right === 6) right = 5;
      for (let vert = 0; vert < size; vert++) {
        for (let j = 0; j < 2; j++) {
          const x = right - j;
          const upward = ((right + 1) & 2) === 0;
          const y = upward ? size - 1 - vert : vert;
          if (!isFunc[y][x] && bitIdx < allCodewords.length * 8) {
            modules[y][x] = getBit(allCodewords[bitIdx >>> 3], 7 - (bitIdx & 7));
            bitIdx++;
          }
        }
      }
    }

    // 마스크
    const MASKS = [
      (x, y) => (x + y) % 2 === 0,
      (x, y) => y % 2 === 0,
      (x, y) => x % 3 === 0,
      (x, y) => (x + y) % 3 === 0,
      (x, y) => (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0,
      (x, y) => (x * y) % 2 + (x * y) % 3 === 0,
      (x, y) => ((x * y) % 2 + (x * y) % 3) % 2 === 0,
      (x, y) => ((x + y) % 2 + (x * y) % 3) % 2 === 0,
    ];

    function applyMask(m) {
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          if (!isFunc[y][x] && MASKS[m](x, y)) modules[y][x] = !modules[y][x];
        }
      }
    }

    function penalty() {
      let score = 0;
      const get = (x, y, horiz) => (horiz ? modules[y][x] : modules[x][y]);
      const FINDER_A = [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0];
      const FINDER_B = [0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1];

      for (const horiz of [true, false]) {
        for (let a = 0; a < size; a++) {
          // 규칙 1: 같은 색 5칸 이상 연속
          let runColor = get(0, a, horiz), runLen = 1;
          for (let b = 1; b < size; b++) {
            const c = get(b, a, horiz);
            if (c === runColor) {
              runLen++;
            } else {
              if (runLen >= 5) score += 3 + (runLen - 5);
              runColor = c; runLen = 1;
            }
          }
          if (runLen >= 5) score += 3 + (runLen - 5);

          // 규칙 3: 파인더와 비슷한 패턴
          for (let b = 0; b + 11 <= size; b++) {
            let matchA = true, matchB = true;
            for (let k = 0; k < 11; k++) {
              const c = get(b + k, a, horiz) ? 1 : 0;
              if (c !== FINDER_A[k]) matchA = false;
              if (c !== FINDER_B[k]) matchB = false;
              if (!matchA && !matchB) break;
            }
            if (matchA) score += 40;
            if (matchB) score += 40;
          }
        }
      }

      // 규칙 2: 2x2 같은 색 블록
      let dark = 0;
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          if (modules[y][x]) dark++;
          if (x < size - 1 && y < size - 1) {
            const c = modules[y][x];
            if (c === modules[y][x + 1] && c === modules[y + 1][x] && c === modules[y + 1][x + 1]) score += 3;
          }
        }
      }

      // 규칙 4: 어두운 칸 비율
      const total = size * size;
      score += Math.floor(Math.abs(dark * 100 / total - 50) / 5) * 10;
      return score;
    }

    let bestMask = 0, bestScore = Infinity;
    for (let m = 0; m < 8; m++) {
      applyMask(m);
      drawFormatBits(m);
      const s = penalty();
      if (s < bestScore) { bestScore = s; bestMask = m; }
      applyMask(m); // 되돌리기 (XOR)
    }
    applyMask(bestMask);
    drawFormatBits(bestMask);

    return { size, modules };
  }

  function makeQrSvg(text, border = 4) {
    const { size, modules } = encode(text);
    const dim = size + border * 2;
    let path = '';
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (modules[y][x]) path += `M${x + border},${y + border}h1v1h-1z`;
      }
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${dim} ${dim}" shape-rendering="crispEdges" stroke="none" role="img" aria-label="QR 코드">` +
      `<rect width="100%" height="100%" fill="#ffffff"/><path d="${path}" fill="#111111"/></svg>`;
  }

  global.makeQrSvg = makeQrSvg;
})(typeof window !== 'undefined' ? window : globalThis);

/* =========================================================
   앱 시작
   ========================================================= */
loadProgress();     // 이 기기에 저장된 기록
importFromUrl();    // QR코드로 받은 기록 (있으면 합치기)
switchView('home');

// 이미 열려 있는 탭에서 주소의 # 부분만 바뀐 경우에도 불러오기
window.addEventListener('hashchange', () => {
  importFromUrl();
  updateAllStats();
});