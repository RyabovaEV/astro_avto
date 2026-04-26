import type { RouteSchedule } from "./schema";

export const suburbanOld: RouteSchedule[] = [
  {
    number: "258",
    name: "Кириши – Черенцево",
    kind: "linear",
    departure: [
      {
        time: "07:15",
        days: [
          "р.д.",
          "вс."
        ],
        note: "*"
      },
      {
        time: "12:50",
        days: [
          "р.д."
        ]
      },
      {
        time: "20:15",
        days: [
          "вых.д."
        ]
      }
    ],
    arrival: [
      {
        time: "08:17",
        days: [
          "р.д.",
          "вс."
        ]
      },
      {
        time: "14:00",
        days: [
          "р.д."
        ]
      },
      {
        time: "21:17",
        days: [
          "вых.д."
        ],
        note: "*"
      }
    ]
  },
  {
    number: "251а",
    name: "Кириши – Глажево",
    kind: "linear",
    departure: [
      {
        time: "05:50"
      },
      {
        time: "07:30",
        days: [
          "сб."
        ]
      },
      {
        time: "10:00"
      },
      {
        time: "12:50",
        days: [
          "вых.д.",
          "кр.вс."
        ]
      },
      {
        time: "15:30",
        days: [
          "р.д."
        ]
      },
      {
        time: "16:30",
        days: [
          "сб."
        ]
      },
      {
        time: "17:30",
        days: [
          "пн.",
          "ср."
        ]
      },
      {
        time: "20:15",
        days: [
          "р.д.",
          "кр.пт."
        ]
      }
    ],
    arrival: [
      {
        time: "06:35"
      },
      {
        time: "08:30",
        days: [
          "сб."
        ]
      },
      {
        time: "10:40"
      },
      {
        time: "13:45",
        days: [
          "вых.д.",
          "кр.вс."
        ]
      },
      {
        time: "16:15",
        days: [
          "р.д."
        ]
      },
      {
        time: "17:20",
        days: [
          "сб."
        ]
      },
      {
        time: "18:30",
        days: [
          "пн.",
          "ср."
        ]
      },
      {
        time: "21:07",
        days: [
          "р.д.",
          "кр.пт."
        ],
        note: "*"
      }
    ]
  },
  {
    number: "253а*",
    name: "Кириши – Садоводство-2 – Кусино",
    kind: "linear",
    departure: [
      {
        time: "06:05"
      },
      {
        time: "08:40"
      },
      {
        time: "12:00"
      },
      {
        time: "13:55"
      },
      {
        time: "16:00"
      },
      {
        time: "18:00"
      },
      {
        time: "20:30"
      }
    ],
    arrival: [
      {
        time: "06:35"
      },
      {
        time: "09:21"
      },
      {
        time: "12:30"
      },
      {
        time: "14:30"
      },
      {
        time: "16:30"
      },
      {
        time: "18:35"
      },
      {
        time: "21:00"
      }
    ]
  },
  {
    number: "252",
    name: "Кириши – Садоводство-2 Рабочие дни",
    kind: "linear",
    departure: [
      {
        time: "08:00"
      },
      {
        time: "10:00"
      },
      {
        time: "11:00"
      },
      {
        time: "13:00"
      },
      {
        time: "19:00"
      }
    ],
    arrival: [
      {
        time: "08:25"
      },
      {
        time: "10:25"
      },
      {
        time: "11:25"
      },
      {
        time: "13:25"
      },
      {
        time: "19:25"
      }
    ]
  },
  {
    number: "252",
    name: "Кириши – Садоводство-2 Выходные дни",
    kind: "linear",
    departure: [
      {
        time: "07:00"
      },
      {
        time: "08:00"
      },
      {
        time: "10:00"
      },
      {
        time: "11:00"
      },
      {
        time: "13:00"
      },
      {
        time: "17:00"
      },
      {
        time: "19:00"
      }
    ],
    arrival: [
      {
        time: "07:25"
      },
      {
        time: "08:25"
      },
      {
        time: "10:25"
      },
      {
        time: "11:25"
      },
      {
        time: "13:25"
      },
      {
        time: "17:25"
      },
      {
        time: "19:25"
      }
    ]
  },
  {
    number: "252а",
    name: "От пл. Бровко по пр.Ленина-Садоводство-2 Выходные дни",
    kind: "linear",
    departure: [
      {
        time: "09:50"
      },
      {
        time: "17:30"
      }
    ],
    arrival: [
      {
        time: "10:15"
      },
      {
        time: "17:55"
      }
    ]
  },
  {
    number: "254",
    name: "Кириши – Городище",
    kind: "linear",
    departure: [
      {
        time: "14:25"
      },
      {
        time: "17:55"
      }
    ],
    arrival: [
      {
        time: "08:30",
        days: [
          "р.д."
        ]
      },
      {
        time: "15:10"
      },
      {
        time: "18:40"
      }
    ]
  },
  {
    number: "254г*",
    name: "Кириши – Чирково –Городище",
    kind: "linear",
    departure: [
      {
        time: "07:30",
        note: "*"
      }
    ],
    arrival: [
      {
        time: "08:30",
        days: [
          "вых.д."
        ]
      }
    ]
  },
  {
    number: "254a",
    name: "Кириши – Пчева",
    kind: "linear",
    departure: [
      {
        time: "06:20",
        days: [
          "р.д."
        ]
      },
      {
        time: "10:35",
        days: [
          "сб."
        ]
      },
      {
        time: "11:25",
        days: [
          "р.д."
        ]
      },
      {
        time: "16:10",
        days: [
          "р.д."
        ]
      },
      {
        time: "20:10",
        days: [
          "пт.",
          "сб.",
          "вс."
        ]
      }
    ],
    arrival: [
      {
        time: "06:50",
        days: [
          "р.д."
        ]
      },
      {
        time: "11:10",
        days: [
          "сб."
        ]
      },
      {
        time: "12:00",
        days: [
          "р.д."
        ]
      },
      {
        time: "16:45",
        days: [
          "р.д."
        ]
      },
      {
        time: "20:45",
        days: [
          "пт.",
          "сб.",
          "вс."
        ]
      }
    ]
  },
  {
    number: "255*",
    name: "Кириши – Будогощь",
    kind: "linear",
    departure: [
      {
        time: "06:05"
      },
      {
        time: "06:25"
      },
      {
        time: "10:00"
      },
      {
        time: "11:00"
      },
      {
        time: "13:00"
      },
      {
        time: "14:45"
      },
      {
        time: "16:55"
      },
      {
        time: "17:35",
        days: [
          "кр.пт."
        ]
      }
    ],
    arrival: [
      {
        time: "07:00"
      },
      {
        time: "08:25"
      },
      {
        time: "09:25"
      },
      {
        time: "10:15"
      },
      {
        time: "11:00"
      },
      {
        time: "12:00"
      },
      {
        time: "14:00"
      },
      {
        time: "15:55"
      },
      {
        time: "17:00"
      },
      {
        time: "18:00"
      },
      {
        time: "19:40",
        days: [
          "кр.вс."
        ]
      }
    ]
  },
  {
    number: "255б*",
    name: "Кириши – Будогощь",
    kind: "linear",
    departure: [
      {
        time: "07:25"
      },
      {
        time: "12:00"
      },
      {
        time: "14:00"
      }
    ]
  },
  {
    number: "255а*",
    name: "Кириши – Борутино – Будогощь",
    kind: "linear",
    departure: [
      {
        time: "17:35",
        days: [
          "пт."
        ]
      }
    ],
    arrival: [
      {
        time: "19:40",
        days: [
          "вс."
        ]
      }
    ]
  },
  {
    number: "256*",
    name: "Кириши – Чирково",
    kind: "linear",
    departure: [
      {
        time: "09:40"
      },
      {
        time: "10:50"
      },
      {
        time: "17:00"
      }
    ],
    arrival: [
      {
        time: "10:13"
      },
      {
        time: "11:23"
      },
      {
        time: "17:33"
      }
    ]
  },
  {
    number: "257, 257а",
    name: "Кириши – Дубняги",
    kind: "linear",
    departure: [
      {
        time: "06:00",
        days: [
          "р.д."
        ]
      },
      {
        time: "10:35",
        days: [
          "вых.д."
        ],
        note: "Дуняково сб."
      },
      {
        time: "13:50",
        days: [
          "р.д."
        ],
        note: "Дуняково чт."
      },
      {
        time: "18:25",
        note: "Дуняково чт."
      }
    ],
    arrival: [
      {
        time: "11:45",
        days: [
          "вых.д."
        ]
      },
      {
        time: "15:00",
        days: [
          "р.д."
        ]
      },
      {
        time: "19:20",
        note: "Дуняково вс."
      }
    ]
  },
  {
    number: "257б*",
    name: "Кириши – Чирково –Дубняги",
    kind: "linear",
    arrival: [
      {
        time: "07:00",
        days: [
          "р.д."
        ],
        note: "Дуняково чт."
      }
    ]
  },
  {
    number: "258",
    name: "Кириши – Мемино",
    kind: "linear",
    departure: [
      {
        time: "08:10",
        days: [
          "пт."
        ]
      },
      {
        time: "18:30",
        days: [
          "пт."
        ]
      },
      {
        time: "17:30",
        days: [
          "вс."
        ]
      }
    ],
    arrival: [
      {
        time: "09:30",
        days: [
          "пт."
        ]
      },
      {
        time: "19:50",
        days: [
          "пт."
        ]
      },
      {
        time: "18:40",
        days: [
          "вс."
        ]
      }
    ]
  },
  {
    number: "259",
    name: "Кириши – Гороховец",
    kind: "linear",
    departure: [
      {
        time: "08:10",
        days: [
          "вт.",
          "чт."
        ]
      },
      {
        time: "17:30",
        days: [
          "вт.",
          "чт."
        ]
      },
      {
        time: "12:50",
        days: [
          "вс."
        ]
      },
      {
        time: "20:15",
        days: [
          "пт."
        ]
      }
    ],
    arrival: [
      {
        time: "09:40",
        days: [
          "вт.",
          "чт."
        ]
      },
      {
        time: "19:00",
        days: [
          "вт.",
          "чт."
        ]
      },
      {
        time: "14:18",
        days: [
          "вс."
        ]
      },
      {
        time: "21:43",
        days: [
          "пт."
        ],
        note: "*"
      }
    ]
  },
  {
    number: "260",
    name: "Кириши – Садоводство-3 Рабочие дни",
    kind: "linear",
    departure: [
      {
        time: "06:00"
      },
      {
        time: "08:20"
      },
      {
        time: "08:50"
      },
      {
        time: "09:30"
      },
      {
        time: "10:00"
      },
      {
        time: "10:40"
      },
      {
        time: "13:00"
      },
      {
        time: "14:10"
      },
      {
        time: "15:20"
      },
      {
        time: "16:40"
      },
      {
        time: "17:50"
      },
      {
        time: "19:00"
      },
      {
        time: "20:30"
      }
    ],
    arrival: [
      {
        time: "06:30"
      },
      {
        time: "08:50"
      },
      {
        time: "09:20"
      },
      {
        time: "10:00"
      },
      {
        time: "10:30"
      },
      {
        time: "11:10"
      },
      {
        time: "13:30"
      },
      {
        time: "14:40"
      },
      {
        time: "15:50"
      },
      {
        time: "17:10"
      },
      {
        time: "18:20"
      },
      {
        time: "19:30"
      },
      {
        time: "21:00"
      }
    ]
  },
  {
    number: "260",
    name: "Кириши – Садоводство-3 Выходные дни",
    kind: "linear",
    departure: [
      {
        time: "06:00"
      },
      {
        time: "07:10"
      },
      {
        time: "08:20"
      },
      {
        time: "08:50"
      },
      {
        time: "09:30"
      },
      {
        time: "10:40"
      },
      {
        time: "13:00"
      },
      {
        time: "14:10"
      },
      {
        time: "15:20"
      },
      {
        time: "16:40"
      },
      {
        time: "17:50"
      },
      {
        time: "19:00"
      },
      {
        time: "20:30"
      }
    ],
    arrival: [
      {
        time: "06:30"
      },
      {
        time: "07:40"
      },
      {
        time: "08:50"
      },
      {
        time: "09:20"
      },
      {
        time: "10:00"
      },
      {
        time: "11:10"
      },
      {
        time: "13:30"
      },
      {
        time: "14:40"
      },
      {
        time: "15:50"
      },
      {
        time: "17:10"
      },
      {
        time: "18:20"
      },
      {
        time: "19:30"
      },
      {
        time: "21:00"
      }
    ]
  },
  {
    number: "260а",
    name: "От пл. Бровко по пр.Ленина–Садоводство 3 Выходные дни",
    kind: "linear",
    departure: [
      {
        time: "07:30"
      },
      {
        time: "08:40"
      },
      {
        time: "11:20"
      },
      {
        time: "16:10"
      },
      {
        time: "18:30"
      }
    ],
    arrival: [
      {
        time: "08:00"
      },
      {
        time: "09:10"
      },
      {
        time: "11:50"
      },
      {
        time: "16:40"
      },
      {
        time: "19:00"
      }
    ]
  },
  {
    number: "240",
    name: "Будогощь (круговой)",
    kind: "circular",
    departure: [
      {
        time: "08:50"
      },
      {
        time: "18:55"
      }
    ]
  },
  {
    number: "241, 241а",
    name: "Будогощь – Крапивно",
    kind: "linear",
    departure: [
      {
        time: "06:55",
        days: [
          "ср.",
          "сб."
        ],
        note: "заезд в Авдетово"
      },
      {
        time: "15:00",
        days: [
          "ср.",
          "пт.",
          "сб."
        ],
        note: "заезд в д.Авдетово, д.Могилёво"
      }
    ],
    arrival: [
      {
        time: "08:02",
        days: [
          "ср.",
          "сб."
        ],
        note: "* заезд в д.Авдетово, д.Могилёво"
      },
      {
        time: "15:55",
        days: [
          "ср.",
          "пт.",
          "вс."
        ],
        note: "заезд в д.Авдетово"
      }
    ]
  },
  {
    number: "244а",
    name: "Будогощь – Смолино",
    kind: "linear",
    departure: [
      {
        time: "08:20",
        days: [
          "вт.",
          "чт.",
          "сб."
        ],
        note: "заезд в д.Змеева Новинка"
      },
      {
        time: "18:00",
        days: [
          "вт.",
          "чт.",
          "сб.",
          "вс."
        ],
        note: "заезд в д.Змеева Новинка"
      }
    ],
    arrival: [
      {
        time: "09:13",
        days: [
          "вт.",
          "чт.",
          "сб."
        ],
        note: "*"
      },
      {
        time: "18:50",
        days: [
          "вт.",
          "чт.",
          "сб.",
          "вс."
        ]
      }
    ]
  },
  {
    number: "245",
    name: "Будогощь – Клинково",
    kind: "linear",
    departure: [
      {
        time: "07:20"
      },
      {
        time: "16:50"
      }
    ],
    arrival: [
      {
        time: "07:50",
        note: "*"
      },
      {
        time: "17:20"
      }
    ]
  },
  {
    number: "246",
    name: "Будогощь – Половинник",
    kind: "linear",
    departure: [
      {
        time: "06:55",
        days: [
          "пн."
        ]
      },
      {
        time: "08:20",
        days: [
          "ср.",
          "пт.",
          "вс."
        ]
      },
      {
        time: "15:00"
      }
    ],
    arrival: [
      {
        time: "07:38",
        days: [
          "пн."
        ],
        note: "*"
      },
      {
        time: "09:10",
        days: [
          "ср.",
          "пт.",
          "вс."
        ],
        note: "*"
      },
      {
        time: "15:50"
      }
    ]
  },
  {
    number: "247",
    name: "Будогощь – Луг",
    kind: "linear",
    departure: [
      {
        time: "08:20",
        days: [
          "пн."
        ]
      },
      {
        time: "06:55",
        days: [
          "вт.",
          "чт.",
          "пт.",
          "вс."
        ]
      },
      {
        time: "15:00",
        days: [
          "пн.",
          "вт.",
          "чт.",
          "сб."
        ],
        note: "(Могилево) (Солоницы вт, чт.)"
      }
    ],
    arrival: [
      {
        time: "09:10",
        days: [
          "пн."
        ],
        note: "*"
      },
      {
        time: "07:37",
        days: [
          "вт.",
          "чт.",
          "пт.",
          "вс."
        ],
        note: "* (Могилево) (Солоницы вт, чт.)"
      },
      {
        time: "15:35",
        days: [
          "пн.",
          "вт.",
          "чт.",
          "сб."
        ]
      }
    ]
  }
] as const;
