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
    href: '/schedule/suburban',
    title: 'Расписание',
    ariaLabel: 'Подменю Расписание',
    children: [
      {href: '/schedule/suburban', title: 'Пригородные'},
      {href: '/schedule/city', title: 'Городские'},
    ],
  },
  {
    href: '/driving-school/info',
    title: 'Автошкола',
    ariaLabel: 'Подменю Автошкола',
    children: [
      {href: '/driving-school/info', title: 'Общая информация'},
      {href: '/driving-school/danger-goods', title: 'Перевозка опасных грузов'},
      {href: '/driving-school/training-plan', title: 'План обучения'},
      {
        href: '/driving-school/documents',
        title: 'Сведения об образовательной организации'
      },
    ],
  },
  {
    href: '/about/contacts',
    title: 'О предприятии',
    ariaLabel: 'Подменю О предприятии',
    children: [
      {href: '/about/contacts', title: 'Контакты'},
      {href: '/about/vacancies', title: 'Вакансии'},
      {href: '/about/documents', title: 'Документы'},
      {href: '/about/news', title: 'Новости'},
      {href: '/about/history', title: 'История'},
    ],
  },
]