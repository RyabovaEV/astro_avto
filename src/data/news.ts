export interface News {
  date: string
  description: string
  href?: string
  linkLabel?: string
  important?: boolean
  ulList?: string[]
}

/** Размер страницы списка новостей при пагинации */
export const NEWS_PER_PAGE = 5

export function getNewsTotalPages(
  list: News[],
  perPage: number = NEWS_PER_PAGE,
): number {
  return Math.max(1, Math.ceil(list.length / perPage))
}

export const newsList: News[] = [
  {
    date: '2026-04-26',
    description:
      'Уважаемые пассажиры! Обращаем Ваше внимание, что с 01.05.2026 г. меняется расписание городских и пригородных маршрутов.',
    href: '/schedule/suburban',
    linkLabel: 'Перейти к расписанию'
  },
  {
    date: '2025-02-15',
    description:
      'Уважаемые пассажиры! Все рейсы на Санкт-Петербург временно отменены!',
    important: true,
  },
  {
    date: '2025-12-05',
    description:
      'Уважаемые пассажиры! Обращаем Ваше внимание, что с 01.05.2025 меняется расписание пригородных и городских автобусов.',
    href: '/schedule/suburban',
    ulList: [
      '№ 255б Будогощь-Кириши отправлением в 09:10 и 10:10 на 09:25 и 10:15.',
      '№ 251а Кириши-Глажево отправлением в 15:00 (р.дн.) на 15:30 (р.дн.). Время отправления рейса № 251а Глажево-Кириши в 16:15 (р.дн.) остается без изменений.',
    ],
    linkLabel: 'Перейти к расписанию'
  },
]

