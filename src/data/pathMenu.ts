export type MenuItem = {
  href: string
  title: string
  ariaLabel?: string
  children?: MenuItem[]
}

export type SidebarItem = { href: string; title: string }

export function getSidebarItems(sectionHrefPrefix: string): SidebarItem[] {
  const section = menuItems.find((item) => item.href.startsWith(sectionHrefPrefix))
  return section?.children ?? []
}

export const menuItems: MenuItem[] = [
  {
    href: '/',
    title: 'Главная',
  },
  {
    // Нет страницы /schedule — клик ведёт на первый подпункт (городские маршруты)
    href: '/schedule/suburban',
    title: 'Расписание',
    ariaLabel: 'Подменю Расписание',
    children: [
      {href: '/schedule/suburban', title: 'Пригородные'},
      {href: '/schedule/city', title: 'Городские'},
    ],
  },
  {
    // Нет страницы /driving-school — клик ведёт на первый подпункт
    href: '/driving-school/info',
    title: 'Автошкола',
    ariaLabel: 'Подменю Автошкола',
    children: [
      {href: '/driving-school/info', title: 'Информация'},
      {href: '/driving-school/training-plan', title: 'План обучения'},
      {href: '/driving-school/documents', title: 'Документы'},
    ],
  },
  {
    // Нет страницы /about — клик ведёт на первый подпункт
    href: '/about/history',
    title: 'О предприятии',
    ariaLabel: 'Подменю О предприятии',
    children: [
      {href: '/about/history', title: 'История'},
      {href: '/about/vacancies', title: 'Вакансии'},
      {href: '/about/documents', title: 'Документы'},
      {href: '/about/contacts', title: 'Контакты'},
    ],
  },
]