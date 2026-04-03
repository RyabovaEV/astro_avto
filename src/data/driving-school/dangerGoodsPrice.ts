import type { PriceCard } from './schema'

export const dangerGoodsPrice: PriceCard[] =  [
  {
    category: [
      {
        description: "Первичное обучение 44 часа",
        note: "(Базовый курс 28 часов, специализированный курс по перевозке в цистернах 16 часов)"
      }
    ],
    price: "7 000 руб.",
    termOfStudy: "7 рабочих дней (по 8 часов в день)"
  },
  {
    category: [
      {
        description: "Повторное обучение 23 часа*",
        note: "(Базовый курс 15 часов, специализированный курс по перевозке в цистернах 8 часов)"
      }
    ],
    price: "6 000 руб.",
    termOfStudy: "6 рабочих дней (по 4 часа в день)"
  }
]