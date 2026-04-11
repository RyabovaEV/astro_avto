export interface Vacancy {
  title: string;
  conditions: string[];
}

export interface VacancyContact {
  href: string;
  label: string;
}

export interface VacansiesData {
  title: string;
  list: Vacancy[];
  contactsTitle: string;
  contacts: VacancyContact[];
}
