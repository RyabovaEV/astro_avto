import type { RouteSchedule } from "./schema";

export const suburbanRoutes: RouteSchedule[] = [
  {
    number: "251",
    name: "Кириши – Черенцево",
    departure: [
      { time: "07:15", days: ["р.д."] },
    ],
    arrival: [
      { time: "08:17", days: ["р.д."] },
    ],
  },
  {
    number: "251б",
    name: "Кириши – кладбище «Мерятино» – Черенцево",
    departure: [{ time: "12:50", days: ["р.д."] }],
    arrival: [{ time: "14:00", days: ["р.д."] }],
  },
  {
    number: "251а",
    name: "Кириши – Глажево",
    departure: [
      { time: "05:50" },
      { time: "07:30", days: ["сб."] },
      { time: "15:30", days: ["р.д."] },
      { time: "16:30", days: ["сб."] },
      { time: "17:30", days: ["пн.", "ср."] },
      { time: "20:15" },
    ],
    arrival: [
      { time: "06:35" },
      { time: "08:30", days: ["сб."] },
      { time: "16:15", days: ["р.д."] },
      { time: "17:20", days: ["сб."] },
      { time: "18:30", days: ["пн.", "ср."] },
      { time: "21:07", note: "*" },
    ],
  },
  {
    number: "251в",
    name: "Кириши – кладбище «Мерятино» – Глажево",
    departure: [
      { time: "10:00" },
      { time: "12:50", days: ["вых.д.", "кр.вс."] },
    ],
    arrival: [
      { time: "10:40" },
      { time: "13:45", days: ["вых.д.", "кр.вс."] },
    ],
  },
  {
    number: "253а",
    name: "Кириши – Садоводство-2 – Кусино",
    departure: [
      { time: "06:05" },
      { time: "08:40" },
      { time: "12:00" },
      { time: "13:55" },
      { time: "16:00" },
      { time: "18:00" },
      { time: "20:30" },
    ],
    arrival: [
      { time: "06:35" },
      { time: "09:21" },
      { time: "12:30" },
      { time: "14:30" },
      { time: "16:30" },
      { time: "18:35" },
      { time: "21:00" },
    ],
  },
  {
    number: "254",
    name: "Кириши – Городище",
    departure: [{ time: "14:25" }, { time: "17:55" }],
    arrival: [
      { time: "08:30", days: ["р.д."] },
      { time: "15:10" },
      { time: "18:40" },
    ],
  },
  {
    number: "254г",
    name: "Кириши – Чирково – Городище",
    departure: [{ time: "07:30", note: "*" }],
    arrival: [{ time: "08:30", days: ["вых.д."] }],
  },
  {
    number: "254а",
    name: "Кириши – Пчева",
    departure: [
      { time: "06:20", days: ["р.д."] },
      { time: "11:25", days: ["р.д."] },
      { time: "16:10", days: ["р.д."] },
      { time: "20:10", days: ["пт."] },
    ],
    arrival: [
      { time: "06:50", days: ["р.д."] },
      { time: "12:00", days: ["р.д."] },
      { time: "16:45", days: ["р.д."] },
      { time: "20:45", days: ["пт."] },
    ],
  },
  {
    number: "255",
    name: "Кириши – Будогощь",
    departure: [
      { time: "06:05" },
      { time: "07:25" },
      { time: "10:00" },
      { time: "13:00" },
      { time: "14:45" },
      { time: "16:55" },
      { time: "17:35" },
    ],
    arrival: [
      { time: "07:00" },
      { time: "08:25" },
      { time: "11:00" },
      { time: "14:00" },
      { time: "15:55" },
      { time: "18:00" },
      { time: "18:50" },
    ],
  },
  {
    number: "255б",
    name: "Кириши – Будогощь",
    departure: [{ time: "06:25" }, { time: "11:00" }, { time: "14:00" }],
    arrival: [{ time: "09:25" }, { time: "10:15" }, { time: "12:00" }],
  },
  {
    number: "256",
    name: "Кириши – Чирково",
    departure: [{ time: "09:40" }, { time: "10:50" }],
    arrival: [{ time: "10:13" }, { time: "11:23" }],
  },
  {
    number: "257, 257а",
    name: "Кириши – Дубняги",
    departure: [
      { time: "06:00", days: ["р.д."] },
      { time: "13:50", days: ["чт."] },
      { time: "10:35", days: ["вых.д."], note: "Дуняково сб." },
    ],
    arrival: [
      { time: "11:45", days: ["вых.д."] },
      { time: "15:00", days: ["чт."] },
    ],
  },
  {
    number: "257б",
    name: "Кириши – Чирково – Дубняги",
    departure: [{ time: "18:25", note: "Дуняково чт." }],
    arrival: [
      { time: "07:00", days: ["р.д."], note: "Дуняково чт." },
      { time: "19:20", note: "Дуняково вс." },
    ],
  },
  {
    number: "258",
    name: "Кириши – Мемино",
    departure: [
      { time: "08:10", days: ["пт."] },
      { time: "18:30", days: ["пт."] },
      { time: "17:30", days: ["вс."] },
    ],
    arrival: [
      { time: "09:30", days: ["пт."] },
      { time: "19:50", days: ["пт."] },
      { time: "18:40", days: ["вс."] },
    ],
  },
  {
    number: "259",
    name: "Кириши – Гороховец",
    departure: [
      { time: "08:10", days: ["вт.", "чт."] },
      { time: "17:30", days: ["вт.", "чт."] },
    ],
    arrival: [
      { time: "09:40", days: ["вт.", "чт."] },
      { time: "19:00", days: ["вт.", "чт."] },
    ],
  },
  {
    number: "259а",
    name: "Кириши – кладбище «Мерятино» – Гороховец",
    departure: [{ time: "12:50", days: ["вс."] }],
    arrival: [{ time: "14:18", days: ["вс."] }],
  },
  {
    number: "260",
    name: "Кириши – Садоводство-3",
    departure: [
      { time: "08:20" },
      { time: "09:30" },
      { time: "10:40" },
      { time: "13:00" },
      { time: "14:10" },
      { time: "16:40" },
    ],
    arrival: [
      { time: "08:50" },
      { time: "10:00" },
      { time: "11:10" },
      { time: "13:30" },
      { time: "14:40" },
      { time: "17:10" },
    ],
  },
  // —————— рейсы из Будогощи ——————
  {
    number: "240",
    name: "Будогощь – (круговой)",
    departure: [{ time: "08:30" }, { time: "18:10" }],
  },
  {
    number: "244",
    name: "Будогощь – Смолино",
    departure: [
      { time: "08:20", days: ["вт.", "чт."] },
      { time: "16:38", days: ["вт.", "чт."] },
    ],
    arrival: [
      { time: "09:13", days: ["вт.", "чт."], note: "*" },
      { time: "17:25", days: ["вт.", "чт."] },
    ],
  },
  {
    number: "245",
    name: "Будогощь – Клинково",
    departure: [
      { time: "07:20" },
      { time: "16:50", days: ["пн.", "ср.", "пт.", "сб.", "вс."] },
    ],
    arrival: [
      { time: "07:50", note: "*" },
      { time: "17:20", days: ["пн.", "ср.", "пт.", "сб.", "вс."] },
    ],
  },
  {
    number: "246",
    name: "Будогощь – Половинник",
    departure: [
      { time: "06:50", days: ["пн.", "чт.", "сб."] },
      { time: "15:00", days: ["пн.", "чт.", "сб."] },
    ],
    arrival: [
      { time: "07:38", days: ["пн.", "чт.", "сб."], note: "*" },
      { time: "15:50", days: ["пн.", "чт.", "сб."] },
    ],
  },
  {
    number: "247",
    name: "Будогощь – Луг",
    departure: [
      {
        time: "06:55",
        days: ["вт.", "ср.", "пт.", "вс."],
        note: "заезд в Солоницы (ср.)",
      },
      {
        time: "15:00",
        days: ["вт.", "ср.", "пт.", "вс."],
        note: "Могилево",
      },
    ],
    arrival: [
      {
        time: "07:37",
        days: ["вт.", "ср.", "пт.", "вс."],
        note: "Могилево *",
      },
      {
        time: "15:35",
        days: ["вт.", "ср.", "пт.", "вс."],
        note: "в Могилево",
      },
    ],
  },
] as const;

