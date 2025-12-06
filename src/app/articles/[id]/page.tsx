import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Facebook, Twitter, Linkedin, Mail } from 'lucide-react'
import Layout from '@/components/Layout'
import { mockArticles } from '@/data/mockData'

interface ArticlePageProps {
  params: { id: string }
}

export async function generateStaticParams() {
  return mockArticles.map((article) => ({
    id: String(article.id),
  }))
}

export default function ArticlePage({ params }: ArticlePageProps) {
  // Ensure both params.id and article.id are strings for comparison
  const articleId = String(params.id)
  const article = mockArticles.find(a => String(a.id) === articleId)

  if (!article) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <Link 
              href="/articles" 
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Articles
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  const relatedArticles = mockArticles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3)

  return (
    <Layout>
      <article className="bg-white">
        {/* Article Header */}
        <header className="gradient-bg text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link 
                href="/articles" 
                className="inline-flex items-center text-purple-200 hover:text-white transition-colors"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Articles
              </Link>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center items-center space-x-4 mb-6">
                <span className="text-sm font-medium text-white bg-white/20 px-3 py-1 rounded-full">
                  {article.category}
                </span>
                {article.volume && (
                  <span className="text-sm text-purple-200">
                    {article.volume} • {article.issue}
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                {article.title}
              </h1>
              
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                {article.excerpt}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-purple-200">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  <span>By {article.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            {/* Share and Save Bar */}
            <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 font-medium">Share this article:</span>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-lg transition-colors">
                <Bookmark className="w-5 h-5" />
                <span>Save</span>
              </button>
            </div>

            {/* Article Body */}
            <div className="text-gray-800 leading-relaxed space-y-6">
              <p className="text-lg font-medium text-gray-700">
                {article.excerpt}
              </p>
              
              <div className="space-y-4">
                <p>
                  Healthcare innovation continues to transform the way we approach patient care, 
                  medical research, and health system management. In this comprehensive analysis, 
                  we explore the latest developments that are shaping the future of medicine.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Innovations</h2>
                <p>
                  The integration of artificial intelligence and machine learning in healthcare 
                  has opened new possibilities for diagnosis, treatment planning, and patient 
                  monitoring. These technologies are not just improving efficiency but are also 
                  enabling more personalized and precise medical interventions.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Digital Health Transformation</h3>
                <p>
                  Digital health platforms have revolutionized how patients interact with 
                  healthcare providers. From telemedicine consultations to remote monitoring 
                  devices, the digital transformation has made healthcare more accessible and 
                  convenient for millions of people worldwide.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Research Breakthroughs</h3>
                <p>
                  Recent medical research has yielded groundbreaking discoveries in areas 
                  such as genomics, immunotherapy, and regenerative medicine. These advances 
                  promise to address some of the most challenging health conditions affecting 
                  populations globally.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Future Perspectives</h2>
                <p>
                  As we look to the future of healthcare, several trends are emerging that 
                  will further transform the industry. The convergence of technology, data 
                  analytics, and patient-centered care models is creating unprecedented 
                  opportunities for improving health outcomes and reducing costs.
                </p>
                
                <p>
                  The continued collaboration between healthcare professionals, technology 
                  experts, and researchers will be essential in realizing the full potential 
                  of these innovations. By working together, we can create a healthcare system 
                  that is more efficient, effective, and equitable for all.
                </p>
              </div>

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-12 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/tags/${tag}`}
                        className="text-sm text-purple-600 hover:text-purple-700 bg-purple-100 hover:bg-purple-200 px-3 py-1 rounded-full transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Author Section */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {article.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{article.author}</h3>
                  <p className="text-gray-600 mb-4">
                    Healthcare professional and researcher with expertise in medical innovation 
                    and digital health transformation. Passionate about improving patient outcomes 
                    through technology and evidence-based practices.
                  </p>
                  <div className="flex space-x-4">
                    <button className="text-purple-600 hover:text-purple-700 font-medium">
                      View Profile
                    </button>
                    <button className="text-purple-600 hover:text-purple-700 font-medium">
                      Follow Author
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <article key={relatedArticle.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                          {relatedArticle.category}
                        </span>
                        <span className="text-sm text-gray-500 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {relatedArticle.readTime} min
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                        <Link href={`/articles/${relatedArticle.id}`} className="hover:text-purple-600 transition-colors">
                          {relatedArticle.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                      
                      <div className="text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {relatedArticle.author}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </Layout>
  )
}
