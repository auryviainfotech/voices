import { Article, Category, Volume } from '@/types'

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Book Review: Reimagining Health - Inspiring Stories of Innovators',
    excerpt: 'A comprehensive review of the latest book that explores groundbreaking innovations in healthcare through the eyes of pioneers who are transforming patient care.',
    content: 'Full article content would go here...',
    author: 'Khushi Khandelwal',
    category: 'Book Reviews',
    subcategory: 'Others',
    tags: ['book-review', 'innovation', 'healthcare'],
    publishedAt: '2025-01-15',
    readTime: 5,
    featured: true,
    volume: 'Volume 10',
    issue: 'Issue 5'
  },
  {
    id: '2',
    title: 'Digital Therapeutics: Transforming Healthcare in India and Globally',
    excerpt: 'Exploring the revolutionary impact of digital therapeutics on healthcare delivery systems across India and the global landscape.',
    content: 'Full article content would go here...',
    author: 'Dr. Rajesh Sharma',
    category: 'Innovation',
    tags: ['digital-health', 'therapeutics', 'healthcare-tech'],
    publishedAt: '2025-01-12',
    readTime: 8,
    featured: true,
    volume: 'Volume 9',
    issue: 'Issue 4'
  },
  {
    id: '3',
    title: 'The Future of E-Pharmacy and Digital Health Platforms',
    excerpt: 'Revolutionizing healthcare services: The future of e-pharmacy and digital health platforms in the modern medical ecosystem.',
    content: 'Full article content would go here...',
    author: 'Priya Nair',
    category: 'Industry speaks',
    tags: ['e-pharmacy', 'digital-platforms', 'healthcare'],
    publishedAt: '2025-01-10',
    readTime: 6,
    volume: 'Volume 9',
    issue: 'Issue 3'
  },
  {
    id: '4',
    title: 'Nursing: Past, Present, and Future',
    excerpt: 'A comprehensive look at the evolution of nursing profession and its critical role in modern healthcare systems.',
    content: 'Full article content would go here...',
    author: 'Sarah Johnson',
    category: 'Innovation',
    tags: ['nursing', 'healthcare-profession', 'patient-care'],
    publishedAt: '2025-01-08',
    readTime: 7,
    featured: true,
    volume: 'Volume 8',
    issue: 'Issue 4'
  },
  {
    id: '5',
    title: 'Solving Rising Healthcare Costs: A CEO\'s Perspective',
    excerpt: 'Innovative approaches and strategic insights from healthcare leaders on tackling the challenge of rising medical costs.',
    content: 'Full article content would go here...',
    author: 'Michael Chen',
    category: 'Exclusive Interview',
    tags: ['healthcare-costs', 'leadership', 'innovation'],
    publishedAt: '2025-01-05',
    readTime: 10,
    volume: 'Volume 8',
    issue: 'Issue 3'
  },
  {
    id: '6',
    title: 'Implementing Digital Health with Advanced Technologies and Research',
    excerpt: 'Cutting-edge technologies and research methodologies driving the implementation of digital health solutions.',
    content: 'Full article content would go here...',
    author: 'Dr. Anita Desai',
    category: 'Innovation',
    tags: ['digital-health', 'technology', 'research'],
    publishedAt: '2025-01-03',
    readTime: 8,
    volume: 'Volume 8',
    issue: 'Issue 2'
  },
  {
    id: '7',
    title: 'Diabetology and Treatment Opportunities',
    excerpt: 'Latest advances in diabetes management and emerging treatment opportunities for better patient outcomes.',
    content: 'Full article content would go here...',
    author: 'Dr. Vikram Mehta',
    category: 'Research',
    tags: ['diabetes', 'treatment', 'medical-research'],
    publishedAt: '2025-01-01',
    readTime: 9,
    volume: 'Volume 8',
    issue: 'Issue 1'
  },
  {
    id: '8',
    title: 'Menopause and Non-Communicable Diseases: The Overlooked Nexus',
    excerpt: 'Understanding the critical connection between menopause and non-communicable diseases in women\'s health.',
    content: 'Full article content would go here...',
    author: 'Dr. Susan Williams',
    category: 'Women\'s Corner',
    tags: ['menopause', 'womens-health', 'ncd'],
    publishedAt: '2024-12-28',
    readTime: 7,
    volume: 'Volume 10',
    issue: 'Issue 3'
  }
]

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Persona',
    slug: 'persona',
    description: 'Personal stories and interviews with healthcare leaders',
    articleCount: 45,
    subcategories: [
      { id: '1-1', name: 'Guest Column', slug: 'guest-column', categoryId: '1', articleCount: 20 },
      { id: '1-2', name: 'Exclusive Interview', slug: 'exclusive-interview', categoryId: '1', articleCount: 25 }
    ]
  },
  {
    id: '2',
    name: 'Innovation',
    slug: 'innovation',
    description: 'Latest innovations and breakthroughs in healthcare',
    articleCount: 67
  },
  {
    id: '3',
    name: 'Well Being',
    slug: 'well-being',
    description: 'Focus on health, wellness, and lifestyle',
    articleCount: 38
  },
  {
    id: '4',
    name: 'Industry speaks',
    slug: 'industry-speaks',
    description: 'Insights from healthcare industry experts',
    articleCount: 52,
    subcategories: [
      { id: '4-1', name: 'Cyber security', slug: 'cyber-security', categoryId: '4', articleCount: 15 },
      { id: '4-2', name: 'Hospitals', slug: 'hospitals', categoryId: '4', articleCount: 20 },
      { id: '4-3', name: 'Providers', slug: 'providers', categoryId: '4', articleCount: 17 }
    ]
  },
  {
    id: '5',
    name: 'Artificial Intelligence',
    slug: 'artificial-intelligence',
    description: 'AI applications and developments in healthcare',
    articleCount: 41
  },
  {
    id: '6',
    name: 'Telemedicine',
    slug: 'telemedicine',
    description: 'Remote healthcare and telemedicine innovations',
    articleCount: 29
  },
  {
    id: '7',
    name: 'Research',
    slug: 'research',
    description: 'Latest medical research and clinical studies',
    articleCount: 56
  },
  {
    id: '8',
    name: 'Others',
    slug: 'others',
    description: 'Miscellaneous healthcare topics',
    articleCount: 33,
    subcategories: [
      { id: '8-1', name: 'Executive Opinion', slug: 'executive-opinion', categoryId: '8', articleCount: 8 },
      { id: '8-2', name: 'Women\'s Corner', slug: 'womens-corner', categoryId: '8', articleCount: 12 },
      { id: '8-3', name: 'Press Release', slug: 'press-release', categoryId: '8', articleCount: 6 },
      { id: '8-4', name: 'Policy', slug: 'policy', categoryId: '8', articleCount: 4 },
      { id: '8-5', name: 'Book Reviews', slug: 'book-reviews', categoryId: '8', articleCount: 3 }
    ]
  }
]

export const mockVolumes: Volume[] = [
  {
    id: '1',
    number: 10,
    year: 2025,
    description: 'Latest volume featuring cutting-edge healthcare innovations and research',
    issues: [
      {
        id: '10-1',
        number: 1,
        volumeId: '1',
        title: 'Digital Health Revolution',
        publishedAt: '2025-03-15',
        articles: mockArticles.filter(a => a.volume === 'Volume 10' && a.issue === 'Issue 5')
      },
      {
        id: '10-2',
        number: 2,
        volumeId: '1',
        title: 'AI in Healthcare',
        publishedAt: '2025-02-20',
        articles: mockArticles.filter(a => a.volume === 'Volume 10' && a.issue === 'Issue 4')
      },
      {
        id: '10-3',
        number: 3,
        volumeId: '1',
        title: 'Women\'s Health Focus',
        publishedAt: '2025-01-15',
        articles: mockArticles.filter(a => a.volume === 'Volume 10' && a.issue === 'Issue 3')
      }
    ]
  },
  {
    id: '2',
    number: 9,
    year: 2024,
    description: 'Exploring the future of healthcare technology and patient care',
    issues: [
      {
        id: '9-6',
        number: 6,
        volumeId: '2',
        title: 'Healthcare Innovation Summit',
        publishedAt: '2024-12-10',
        articles: mockArticles.filter(a => a.volume === 'Volume 9' && a.issue === 'Issue 6')
      },
      {
        id: '9-5',
        number: 5,
        volumeId: '2',
        title: 'Digital Transformation',
        publishedAt: '2024-11-20',
        articles: mockArticles.filter(a => a.volume === 'Volume 9' && a.issue === 'Issue 5')
      },
      {
        id: '9-4',
        number: 4,
        volumeId: '2',
        title: 'Global Health Perspectives',
        publishedAt: '2024-10-15',
        articles: mockArticles.filter(a => a.volume === 'Volume 9' && a.issue === 'Issue 4')
      }
    ]
  },
  {
    id: '3',
    number: 8,
    year: 2023,
    description: 'Comprehensive coverage of healthcare challenges and solutions',
    issues: [
      {
        id: '8-6',
        number: 6,
        volumeId: '3',
        title: 'Future of Medicine',
        publishedAt: '2023-12-15',
        articles: mockArticles.filter(a => a.volume === 'Volume 8' && a.issue === 'Issue 6')
      },
      {
        id: '8-5',
        number: 5,
        volumeId: '3',
        title: 'Healthcare Technology',
        publishedAt: '2023-11-20',
        articles: mockArticles.filter(a => a.volume === 'Volume 8' && a.issue === 'Issue 5')
      },
      {
        id: '8-4',
        number: 4,
        volumeId: '3',
        title: 'Nursing Excellence',
        publishedAt: '2023-10-15',
        articles: mockArticles.filter(a => a.volume === 'Volume 8' && a.issue === 'Issue 4')
      }
    ]
  }
]
