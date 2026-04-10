export interface LinkItem {
  label: string;
  href?: string;
  note?: string;
  children?: LinkItem[];
}

export interface CategoryItem {
  title: string;
  description: string;
  links?: LinkItem[];
}

export interface ParagraphsBlock {
  type: 'paragraphs';
  items: string[];
}

export interface LinksBlock {
  type: 'links';
  title?: string;
  items: LinkItem[];
}

export interface CategoriesBlock {
  type: 'categories';
  title?: string;
  paragraphs?: string[]
  items: CategoryItem[];
}

export type DocumentBlock = ParagraphsBlock | LinksBlock | CategoriesBlock;

export interface DocumentSection {
  id: string;
  title: string;
  initiallyOpen?: boolean;
  blocks: DocumentBlock[];
}

