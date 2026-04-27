import type {Program} from "./schema.ts"

export const program_CD: Program = {
  sections: [
    {
      title: "Специальный цикл",
      subjects: [
        {
          name: "Устройство и техническое обслуживание транспортных средств категории \"D\" как объектов управления",
          total: 44,
          theory: 38,
          practice: 6,
          exam: "Зачет"
        },
        {
          name: "Основы управления транспортными средствами категории \"D\"",
          total: 12,
          theory: 8,
          practice: 4,
          exam: "Зачет"
        },
      ]
    },
    {
      title: "Профессиональный цикл",
      subjects: [
        {
          name: "Организация и выполнение пассажирских перевозок автомобильным транспортом",
          total: 16,
          theory: 16,
          practice: 0, // было "-"
          exam: "Зачет"
        }
      ]
    },
    {
      title: "Практическая подготовка",
      subjects: [
        {
          name: "Организация и выполнение пассажирских перевозок автомобильным транспортом",
          total: "40/38",
          theory: 0,
          practice: "40/38", // было "-"
          exam: "Зачет"
        }
      ]
    },
    {
      title: "Квалификационный экзамен",
      subjects: [
        {
          name: "Квалификационный экзамен",
          total: 4,
          theory: 2,
          practice: 2,
          exam: "-"
        }
      ]
    }
  ],
  summary: {
    total: "116/114",
    theory: 64,
    practice: "52/50"
  }
}