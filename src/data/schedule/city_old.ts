import type { RouteSchedule } from "./schema";

export const cityOld: RouteSchedule[] = [
  {
    number: "3а",
    name: "М-н «Восточный – ПМК Кладбище «Мерятино»",
    kind: "linear",
    departure: [
      {
        time: "10:15"
      },
      {
        time: "11:10"
      }
    ],
    arrival: [
      {
        time: "10:40"
      },
      {
        time: "11:35"
      }
    ]
  },
  {
    number: "7",
    name: "Проспект Победы – Черная речк",
    kind: "linear",
    departure: [
      {
        time: "12:00"
      }
    ],
    arrival: [
      {
        time: "12:35"
      }
    ]
  },
  {
    number: "7б",
    name: "Проспект Победы –Заводоуправление",
    kind: "linear",
    departure: [
      {
        time: "08:40"
      },
      {
        time: "14:10",
        days: [
          "р.д."
        ]
      },
      {
        time: "15:10"
      }
    ],
    arrival: [
      {
        time: "09:05"
      },
      {
        time: "14:35",
        days: [
          "р.д."
        ]
      },
      {
        time: "15:35"
      }
    ]
  },
  {
    number: "6",
    name: "Вокзал – Вокзал (круговой)",
    kind: "circular",
    departure: [
      {
        time: "05:25"
      },
      {
        time: "06:02"
      },
      {
        time: "06:35"
      },
      {
        time: "07:08"
      },
      {
        time: "08:06"
      },
      {
        time: "08:38"
      },
      {
        time: "09:57"
      },
      {
        time: "12:06"
      },
      {
        time: "12:38"
      },
      {
        time: "13:48"
      },
      {
        time: "15:55"
      },
      {
        time: "17:00"
      },
      {
        time: "17:33"
      },
      {
        time: "19:20"
      },
      {
        time: "20:00"
      }
    ]
  },
  {
    number: "6л",
    name: "Вокзал – Вокзал (круговой)",
    kind: "circular",
    departure: [
      {
        time: "06:55"
      },
      {
        time: "07:20"
      },
      {
        time: "07:48"
      },
      {
        time: "08:20"
      },
      {
        time: "16:15"
      },
      {
        time: "17:15"
      },
      {
        time: "18:25"
      },
      {
        time: "20:30"
      },
      {
        time: "21:30"
      }
    ]
  },
  {
    number: "9-1",
    name: "Вокзал – ОКБ – Вокзал (круговой)",
    kind: "circular",
    departure: [
      {
        time: "07:34"
      }
    ]
  },
  {
    number: "9-2",
    name: "Вокзал – ОКБ – Вокзал (круговой)",
    kind: "circular",
    departure: [
      {
        time: "17:52"
      }
    ]
  },
  {
    number: "9",
    name: "Вокзал – Вокзал (круговой)",
    kind: "circular",
    departure: [
      {
        time: "08:58"
      },
      {
        time: "09:25"
      },
      {
        time: "10:25"
      },
      {
        time: "11:28"
      },
      {
        time: "12:20"
      },
      {
        time: "13:10"
      },
      {
        time: "14:15"
      },
      {
        time: "15:20"
      },
      {
        time: "16:25"
      },
      {
        time: "18:00"
      },
      {
        time: "19:45"
      }
    ]
  },
  {
    number: "9л",
    name: "Вокзал – Вокзал (круговой)",
    kind: "circular",
    departure: [
      {
        time: "13:28"
      },
      {
        time: "14:53"
      },
      {
        time: "15:38"
      },
      {
        time: "16:48"
      },
      {
        time: "19:03"
      }
    ]
  }
] as const;
