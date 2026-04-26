import type {Program} from "./schema.ts"

export const program_BD: Program = {
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
          total: 20,
          theory: 18,
          practice: 2,
          exam: "Зачет"
        }
      ]
    },
    {
      title: "Практическая подготовка",
      subjects: [
        {
          name: "Вождение транспортных средств категории  \"D\" (с механической трансмиссией/ с автоматической трансмиссией)",
          total: "74/72",
          theory: 0,
          practice: "74/72",
          exam: "КЗ"
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
    total: "154/152",
    theory: 66,
    practice: "88/86"
  }
}