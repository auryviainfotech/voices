import Link from 'next/link'
import { Calendar, Clock, User, Filter, Search } from 'lucide-react'
import Layout from '@/components/Layout'
import { mockArticles, mockCategories } from '@/data/mockData'

export default function ArticlesPage() {
  const featuredArticles = mockArticles.filter(article => article.featured)
  const allArticles = mockArticles

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">All Articles</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive collection of healthcare articles, insights, and research papers
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles by title, author, or keywords..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option value="">All Categories</option>
                  {mockCategories.map((category) => (
                    <option key={category.id} value={category.slug}>
                      {category.name}
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

          {/* Featured Articles Section */}
          {featuredArticles.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-1 h-6 gradient-bg mr-3"></span>
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

          {/* All Articles Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allArticles.map((article) => (
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
          </section>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 text-gray-500 hover:text-purple-600 disabled:opacity-50" disabled>
                Previous
              </button>
              <button className="px-3 py-2 bg-purple-600 text-white rounded">1</button>
              <button className="px-3 py-2 text-gray-700 hover:text-purple-600">2</button>
              <button className="px-3 py-2 text-gray-700 hover:text-purple-600">3</button>
              <span className="px-3 py-2 text-gray-500">...</span>
              <button className="px-3 py-2 text-gray-700 hover:text-purple-600">10</button>
              <button className="px-3 py-2 text-gray-700 hover:text-purple-600">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  )
}
