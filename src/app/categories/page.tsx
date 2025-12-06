import Link from 'next/link'
import { BookOpen, TrendingUp, Users, Search } from 'lucide-react'
import Layout from '@/components/Layout'
import { mockCategories } from '@/data/mockData'

export default function CategoriesPage() {
  const categoryIcons = {
    'Persona': Users,
    'Innovation': TrendingUp,
    'Well Being': BookOpen,
    'Industry speaks': TrendingUp,
    'Artificial Intelligence': Search,
    'Telemedicine': BookOpen,
    'Research': TrendingUp,
    'Others': BookOpen,
  }

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Categories</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover healthcare articles organized by topics, specialties, and areas of interest
            </p>
          </div>

          {/* Main Categories Grid */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Main Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockCategories.map((category) => {
                const IconComponent = categoryIcons[category.name as keyof typeof categoryIcons] || BookOpen
                
                return (
                  <Link
                    key={category.id}
                    href={`/categories/${category.slug}`}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="p-8">
                      <div className="w-16 h-16 gradient-bg rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-purple-600 transition-colors">
                        {category.name}
                      </h3>
                      
                      <p className="text-gray-600 text-center mb-4">
                        {category.description}
                      </p>
                      
                      <div className="flex items-center justify-center text-sm text-gray-500">
                        <BookOpen className="w-4 h-4 mr-1" />
                        <span>{category.articleCount} articles</span>
                      </div>
                      
                      {/* Subcategories Preview */}
                      {category.subcategories && category.subcategories.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <p className="text-xs text-gray-500 mb-3 text-center">Subcategories:</p>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {category.subcategories.slice(0, 3).map((subcategory) => (
                              <span
                                key={subcategory.id}
                                className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full"
                              >
                                {subcategory.name}
                              </span>
                            ))}
                            {category.subcategories.length > 3 && (
                              <span className="text-xs text-gray-500">
                                +{category.subcategories.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>

          {/* Popular Topics */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Topics</h2>
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  'Digital Health',
                  'AI in Medicine',
                  'Telemedicine',
                  'Medical Research',
                  'Healthcare Innovation',
                  'Patient Care',
                  'Medical Technology',
                  'Health Policy',
                  'Wellness',
                  'Preventive Care',
                  'Chronic Disease',
                  'Mental Health',
                ].map((topic) => (
                  <Link
                    key={topic}
                    href={`/topics/${topic.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-center p-4 bg-gray-50 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors group"
                  >
                    <div className="w-10 h-10 gradient-bg rounded-full mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium">{topic}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
                Explore our complete archive or use our advanced search to find specific healthcare topics and articles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/search"
                  className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center"
                >
                  <Search className="mr-2 w-5 h-5" />
                  Advanced Search
                </Link>
                <Link
                  href="/archive"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
                >
                  Browse Archive
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}
