import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft, Filter, Search } from 'lucide-react'
import Layout from '@/components/Layout'
import { mockArticles, mockCategories } from '@/data/mockData'

interface CategoryPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return mockCategories.map((category) => ({
    slug: category.slug,
  }))
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = mockCategories.find(c => c.slug === params.slug)
  
  if (!category) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
            <p className="text-gray-600 mb-8">The category you're looking for doesn't exist.</p>
            <Link 
              href="/categories" 
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Categories
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  const categoryArticles = mockArticles.filter(article => article.category === category.name)
  const featuredArticles = categoryArticles.filter(article => article.featured)
  const regularArticles = categoryArticles.filter(article => !article.featured)

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Header */}
          <div className="mb-12">
            <Link 
              href="/categories" 
              className="inline-flex items-center text-gray-600 hover:text-purple-600 mb-6"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Categories
            </Link>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h1>
                  <p className="text-gray-600 text-lg mb-6 max-w-3xl">
                    {category.description}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{category.articleCount} articles</span>
                    </div>
                    {category.subcategories && (
                      <div className="flex items-center">
                        <Filter className="w-4 h-4 mr-1" />
                        <span>{category.subcategories.length} subcategories</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                  {category.name.charAt(0)}
                </div>
              </div>
            </div>
          </div>

          {/* Subcategories */}
          {category.subcategories && category.subcategories.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Subcategories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.subcategories.map((subcategory) => (
                  <Link
                    key={subcategory.id}
                    href={`/categories/${category.slug}/${subcategory.slug}`}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 group"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {subcategory.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Explore {subcategory.articleCount} articles in this subcategory
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {subcategory.articleCount} articles
                      </span>
                      <span className="text-purple-600 group-hover:text-purple-700 text-sm">
                        Browse →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Search and Filter */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={`Search articles in ${category.name}...`}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option value="">All Subcategories</option>
                  {category.subcategories?.map((subcategory) => (
                    <option key={subcategory.id} value={subcategory.slug}>
                      {subcategory.name}
                    </option>
                  ))}
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option value="">Sort by</option>
                  <option value="latest">Latest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </div>
          </div>

          {/* Featured Articles */}
          {featuredArticles.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-1 h-6 gradient-bg mr-3"></span>
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <article key={article.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-sm text-gray-500 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime} min read
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        <Link href={`/articles/${article.id}`} className="hover:text-purple-600 transition-colors">
                          {article.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(article.publishedAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* All Articles */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles in {category.name}</h2>
            {regularArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...featuredArticles, ...regularArticles].map((article) => (
                  <article key={article.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        {article.featured && (
                          <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                        <span className="text-sm text-gray-500 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime} min
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                        <Link href={`/articles/${article.id}`} className="hover:text-purple-600 transition-colors">
                          {article.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(article.publishedAt).toLocaleDateString()}
                        </div>
                      </div>
                      
                      {article.tags && article.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {article.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <div className="w-16 h-16 gradient-bg rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles yet</h3>
                <p className="text-gray-600 mb-6">
                  Articles in this category will be published soon.
                </p>
                <Link
                  href="/categories"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                >
                  Explore other categories
                </Link>
              </div>
            )}
          </section>

          {/* Pagination */}
          {categoryArticles.length > 9 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 text-gray-500 hover:text-purple-600 disabled:opacity-50" disabled>
                  Previous
                </button>
                <button className="px-3 py-2 bg-purple-600 text-white rounded">1</button>
                <button className="px-3 py-2 text-gray-700 hover:text-purple-600">2</button>
                <button className="px-3 py-2 text-gray-700 hover:text-purple-600">3</button>
                <button className="px-3 py-2 text-gray-700 hover:text-purple-600">
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
