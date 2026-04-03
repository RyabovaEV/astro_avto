export interface Category {
  description: string,
  note?: string,
}

export interface PriceCard {
  category: Category[],
  price: string,
  termOfStudy: string,
}