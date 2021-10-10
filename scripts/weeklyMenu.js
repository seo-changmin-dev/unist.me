const noJosik = "조식은 제공하지 않습니다";
const noSuksik = '석식은 제공하지 않습니다';
const noHoliday = "휴일에는 제공하지 않습니다";

const weekly_giksik = [
  // 일요일
  [
    // 조식
    [
      ['미트볼새송이조림','쌀밥','순두부찌개','감자버터오븐구이','SELF 계란후라이','우엉조림','배추김치'],
      [noJosik]
    ],
    // 중식
    [
      ['참치김치볶음밥&김가루','유부장국','감자핫도그 + 케찹','볼어묵조림','황도야채샐러드','단무지','열무김치'],
      [noHoliday]
    ],
    // 석식
    [
      ['김치두루치기','쌀밥','호박된장국','땡초감자채전','연두부 + 초간장','깍두기'],
      [noSuksik]
    ]
  ],

  // 월요일
  [
    // 조식
    [
      ['떡고기산적구이','쌀밥','미역국','매콤두부조림','SELF 계란후라이','파인애플샐러드','배추김치'],
      [noJosik]
    ],
    // 중식
    [
      ['갈릭어니언돈까스','쌀밥','우동국물','비빔막국수','야채콘샐러드 + 드레싱','단무지','배추김치','알새우칩'],
      [noHoliday]
    ],
    // 석식
    [
      ['베테랑st칼국수(전주식계란칼국수)','쌀밥','불닭만두튀김','고구마떡맛탕','배추김치','마시는사과요거트'],
      [noSuksik]
    ]
  ],

  // 화요일
  [
    // 조식
    [
      ['생선까스 + 타르타르','쌀밥','김치콩나물국','햄감자조림','SELF 계란후라이','배추김치','양상추샐러드 + 드레싱'],
      [noJosik]
    ],
    // 중식
    [
      ['고추장불고기','쌀밥','시금치국','야채고로케 + 케찹','콩나물무침','도시락김','배추김치'],
      ['숯불지코바치밥','미니유부우동','해쉬브라운감자','블루베리샐러드','치킨무','배추김치','청포도쥬스']
    ],
    // 석식
    [
      ['치즈카츠 + 깐풍소스','굴소스야채볶음밥','계란파국','짜장떡볶이','양배추샐러드','배추김치'],
      [noSuksik]
    ]
  ],

  // 수요일
  [
    // 조식
    [
      [],
      [noJosik]
    ],
    // 중식
    [
      [],
      []
    ],
    // 석식
    [
      [],
      [noSuksik]
    ]
  ],

  // 목요일
  [
    // 조식
    [
      [],
      [noJosik]
    ],
    // 중식
    [
      [],
      []
    ],
    // 석식
    [
      [],
      [noSuksik]
    ]
  ],

  // 금요일
  [
    // 조식
    [
      [],
      [noJosik]
    ],
    // 중식
    [
      [],
      []
    ],
    // 석식
    [
      [],
      [noSuksik]
    ]
  ],

  // 토요일
  [
    // 조식
    [
      [],
      [noJosik]
    ],
    // 중식
    [
      [],
      []
    ],
    // 석식
    [
      [],
      [noSuksik]
    ]
  ]
]

const weekly_haksik = [
  // 일요일
  [
    // 조식
    [
      [noJosik],
      [noJosik]
    ],
    // 중식
    [
      [noHoliday],
      [noHoliday]
    ],
    // 석식
    [
      [noHoliday],
      [noSuksik]
    ]
  ],

  // 월요일
  [
    // 조식
    [
      [noJosik],
      [noJosik]
    ],
    // 중식
    [
      [noHoliday],
      [noHoliday]
    ],
    // 석식
    [
      [noHoliday],
      [noSuksik]
    ]
  ],

  // 화요일
  [
    // 조식
    [
      [noJosik],
      [noJosik]
    ],
    // 중식
    [
      ['쌀밥/흑미밥','뚝)고추장찌개','생선까스&타르타르S','야채쫄면','단호박마카로니사라다','올리브녹차김1EA','배추김치'],
      ['고깃집돈육김치볶음밥','미니우동','몬테크리스토','그린샐러드/배추김치']
    ],
    // 석식
    [
      ['불고기치즈퀘사이다','스팸야채볶음밥','우동국','나쵸칩감자튀김&치즈S','푸실리샐러드','배추김치'],
      [noSuksik]
    ]
  ],

  // 수요일
  [
    // 조식
    [
      [noJosik],
      [noJosik]
    ],
    // 중식
    [
      [],
      []
    ],
    // 석식
    [
      [],
      [noSuksik]
    ]
  ],

  // 목요일
  [
    // 조식
    [
      [noJosik],
      [noJosik]
    ],
    // 중식
    [
      [],
      []
    ],
    // 석식
    [
      [],
      [noSuksik]
    ]
  ],

  // 금요일
  [
    // 조식
    [
      [noJosik],
      [noJosik]
    ],
    // 중식
    [
      [],
      []
    ],
    // 석식
    [
      [],
      [noSuksik]
    ]
  ],

  // 토요일
  [
    // 조식
    [
      [noJosik],
      [noJosik]
    ],
    // 중식
    [
      [noHoliday],
      [noHoliday]
    ],
    // 석식
    [
      [noHoliday],
      [noSuksik]
    ]
  ]
]

const weekly_kyosik = [
  // 일요일
  [
    // 조식
    [
      [noJosik]
    ],
    // 중식
    [
      [noHoliday]
    ],
    // 석식
    [
      [noHoliday]
    ]
  ],

  // 월요일
  [
    // 조식
    [
      [noJosik]
    ],
    // 중식
    [
      [noHoliday]
    ],
    // 석식
    [
      [noHoliday]
    ]
  ],

  // 화요일
  [
    // 조식
    [
      [noJosik]
    ],
    // 중식
    [
      ['쌀밥/차조밥','떡만두국','돼지고기육전 + 양념장','생야채쫄면','콩나물무침','깍두기','식혜']
    ],
    // 석식
    [
      ['쌀밥/차조밥','새알미역국','닭볶음탕','수제야채튀김 + 양념장','쑥갓두부무침','브로콜리숙회 + 초장','깍두기']
    ]
  ],

  // 수요일
  [
    // 조식
    [
      [noJosik]
    ],
    // 중식
    [
      []
    ],
    // 석식
    [
      []
    ]
  ],

  // 목요일
  [
    // 조식
    [
      [noJosik]
    ],
    // 중식
    [
      []
    ],
    // 석식
    [
      []
    ]
  ],

  // 금요일
  [
    // 조식
    [
      [noJosik]
    ],
    // 중식
    [
      []
    ],
    // 석식
    [
      []
    ]
  ],

  // 토요일
  [
    // 조식
    [
      [noJosik]
    ],
    // 중식
    [
      [noHoliday]
    ],
    // 석식
    [
      [noHoliday]
    ]
  ]
]

// const today, day, hour are already defined in timeInfo.js
// 아침 : 전날 20:00 ~ 10:00시 점심 :10:00~14:00 저녁: 14:00 ~ 20:00
let eatDay = day;
if (hour >= 20) eatDay = (eatDay + 1) % 7;

// 0 = 조식, 1 = 중식, 2 = 석식
let eatHour = 0;
if (10 <= hour && hour <= 14) eatHour = 1;
else if(14 < hour && hour <= 20) eatHour = 2;

// 긱식 업데이트
const giksik = document.querySelector('.giksik').querySelectorAll('.menu');
for(let place = 0; place < 2; place++) {

  for(let i = 0, menuLen = weekly_giksik[eatDay][eatHour][place].length; i < menuLen; i++) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(weekly_giksik[eatDay][eatHour][place][i]));
    giksik[place].appendChild(li);
  }
}

// 학식 업데이트
const haksik = document.querySelector('.haksik').querySelectorAll('.menu');
for(let place = 0; place < 2; place++) {

  for(let i = 0, menuLen = weekly_haksik[eatDay][eatHour][place].length; i < menuLen; i++) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(weekly_haksik[eatDay][eatHour][place][i]));
    haksik[place].appendChild(li);
  }
}

// 교식 업데이트
const kyosik = document.querySelector('.kyosik').querySelectorAll('.menu');
for(let place = 0; place < 1; place++) {

  for(let i = 0, menuLen = weekly_kyosik[eatDay][eatHour][place].length; i < menuLen; i++) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(weekly_kyosik[eatDay][eatHour][place][i]));
    kyosik[place].appendChild(li);
  }
}
