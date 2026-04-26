import { number } from "astro:schema"

interface Subjects {
  name: string,
  total: string | number,
  theory: string | number | null,
  practice: string | number | null,
  exam: string
}

interface Sections {
  title: string,
  subjects: Subjects[],
}

interface Summary {
  total: string | number,
  theory: string | number,
  practice: string | number,
}

export interface Program {
  sections: Sections[],
  summary: Summary
}