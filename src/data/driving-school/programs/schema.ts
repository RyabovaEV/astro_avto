interface Subjects {
  name: string,
  total: number,
  theory: number | null
  practice: number | null
  exam: string
}

interface Sections {
  title: string,
  subjects: Subjects[],
}

interface Summary {
  total: number,
  theory: number,
  practice: number,
}

export interface Program {
  sections: Sections[],
  summary: Summary
}