export interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  authorAvatar?: string
  category: string
  subcategory?: string
  tags: string[]
  publishedAt: string
  readTime: number
  featuredImage?: string
  volume?: string
  issue?: string
  featured?: boolean
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  articleCount: number
  subcategories?: Subcategory[]
}

export interface Subcategory {
  id: string
  name: string
  slug: string
  categoryId: string
  articleCount: number
}

export interface Volume {
  id: string
  number: number
  year: number
  description: string
  issues: Issue[]
}

export interface Issue {
  id: string
  number: number
  volumeId: string
  title: string
  publishedAt: string
  coverImage?: string
  articles: Article[]
}
