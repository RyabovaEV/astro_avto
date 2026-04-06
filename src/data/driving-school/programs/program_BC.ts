import type {Program} from "./schema.ts"

export const program_BC: Program = {
  sections: [
    {
      title: "Учебные предметы базового цикла",
      subjects: [
        {
          name: "Основы законодательства Российской Федерации в сфере дорожного движения",
          total: 42,
          theory: 30,
          practice: 12,
          exam: "Зачет"
        },
        {
          name: "Психофизиологические основы деятельности водителя",
          total: 12,
          theory: 8,
          practice: 4,
          exam: "-"
        },
        {
          name: "Основы управления транспортными средствами",
          total: 14,
          theory: 12,
          practice: 2,
          exam: "-"
        },
        {
          name: "Первая помощь при дорожно-транспортном происшествии",
          total: 16,
          theory: 8,
          practice: 8,
          exam: "-"
        }
      ]
    },
    {
      title: "Учебные предметы специального цикла",
      subjects: [
        {
          name: "Устройство и техническое обслуживание транспортных средств категории \"С\" как объектов управления",
          total: 24,
          theory: 20,
          practice: 4,
          exam: "Зачет"
        },
        {
          name: "Основы управления транспортными средствами категории \"С\"",
          total: 12,
          theory: 8,
          practice: 4,
          exam: "Зачет"
        },
        {
          name: "Вождение транспортных средств категории \"С\" (с механической трансмиссией) (прим. 1)",
          total: 38,
          theory: 0,
          practice: 38,
          exam: "КЗ"
        }
      ]
    },
    {
      title: "Учебные предметы профессионального цикла",
      subjects: [
        {
          name: "Организация и выполнение грузовых перевозок автомобильным транспортом",
          total: 6,
          theory: 4,
          practice: 2,
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
    total: 84,
    theory: 34,
    practice: 50
  }
}