export const scheduleLegend = [
  { abbr: "р.д.", full: "рабочие дни" },
  { abbr: "вых.д.", full: "выходные дни" },
  { abbr: "сб.", full: "суббота" },
  { abbr: "вс.", full: "воскресенье" },
  { abbr: "пн.", full: "понедельник" },
  { abbr: "ср.", full: "среда" },
  { abbr: "пт.", full: "пятница" },
  { abbr: "вт.", full: "вторник" },
  { abbr: "чт.", full: "четверг" },
  { abbr: "кр.вс.", full: "кроме воскресенья" },
  { abbr: "кр.пт.", full: "кроме пятницы" },
] as const;

export type ScheduleDay = (typeof scheduleLegend)[number]["abbr"];

export interface TimeEntry {
  time: string; // HH:MM
  days?: ScheduleDay[]; // если нет — ежедневно
  note?: string; // заезды, пометки и т.д.
}

export interface RouteSchedule {
  number: string;
  name: string;
  departure?: TimeEntry[];
  arrival?: TimeEntry[];
}

