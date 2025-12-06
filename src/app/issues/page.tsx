import Link from 'next/link'
import { Calendar, BookOpen, Download, ArrowRight } from 'lucide-react'
import Layout from '@/components/Layout'
import AnimatedSection from '@/components/AnimatedSection'
import { mockVolumes } from '@/data/mockData'

export default function IssuesPage() {
  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Magazine Issues</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our complete collection of Medi Voices magazine volumes and issues, 
                featuring the latest insights and innovations in healthcare.
              </p>
            </div>
          </AnimatedSection>

          {/* Current Volume Highlight */}
          <AnimatedSection animation="fade-up" delay={200}>
            <section className="mb-16">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <div className="mb-6 lg:mb-0">
                    <div className="flex items-center mb-4">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                        Current Volume
                      </span>
                      
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Volume 1 - Year 2025</h2>
                    <p className="text-lg text-purple-100 mb-6 max-w-2xl">
                      Latest volume featuring cutting-edge healthcare innovations, digital transformation insights, 
                      and groundbreaking research from leading healthcare professionals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/magazine-1"
                        className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center transform hover:scale-105 transition-transform"
                      >
                        Browse Volume 1
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                      <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center transform hover:scale-105 transition-transform">
                        <Download className="mr-2 w-5 h-5" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                  <div className="w-32 h-32 bg-white/20 rounded-2xl flex items-center justify-center">
                    <span className="text-4xl font-bold">V1</span>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* All Volumes */}
          <AnimatedSection animation="fade-up" delay={300}>
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">All Volumes</h2>
              <div className="space-y-12">
                {mockVolumes.slice(0, 1).map((volume, volumeIndex) => (
                  <div key={volume.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 border-b border-purple-100">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-3">
                            <h3 className="text-2xl font-bold text-gray-900">
                              Volume 1 - Year 2025
                            </h3>
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                              Current
                            </span>
                          </div>
                          <p className="text-gray-600 mb-4 max-w-2xl">
                            {volume.description}
                          </p>
                          <div className="flex items-center space-x-6 text-sm text-gray-500">
                            <div className="flex items-center">
                              <BookOpen className="w-4 h-4 mr-1" />
                              <span>{volume.issues.length} issues</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>Published {volume.year}</span>
                            </div>
                          </div>
                        </div>
                        <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold mt-4 lg:mt-0 shadow-lg">
                          V1
                        </div>
                      </div>
                    </div>

                    {/* Issues Grid */}
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-8">Issues in This Volume</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {volume.issues.map((issue, issueIndex) => (
                          <AnimatedSection key={issue.id} animation="fade-up" delay={(issueIndex + 1) * 100}>
                            <Link
                              href={issue.number === 1 ? "/magazine-1" : `/issues/${issue.id}`}
                              className="border border-gray-200 rounded-xl p-6 hover:border-purple-300 hover:shadow-xl transition-all group transform hover:-translate-y-3 bg-white hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 min-h-[280px] flex flex-col"
                            >
                              <div className="flex items-start justify-between mb-6">
                                <div>
                                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors text-lg">
                                    Issue {issue.number}
                                  </h4>
                                  <p className="text-sm text-gray-500">
                                    {(() => {
                                      // Set specific dates based on issue number
                                      if (issue.number === 1) return 'November 2025';
                                      if (issue.number === 2) return 'February 2026';
                                      if (issue.number === 3) return 'May 2026';
                                      // Fallback for any other issues
                                      const date = new Date(issue.publishedAt);
                                      return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
                                    })()}
                                  </p>
                                </div>
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                                  <span className="text-white font-bold text-lg">
                                    {issue.number}
                                  </span>
                                </div>
                              </div>
                              
                              <div className="flex-1">
                                <h5 className="font-semibold text-gray-900 mb-4 text-base">
                                  {issue.title}
                                </h5>
                                
                                <div className="mb-6">
                                  {issue.number === 2 || issue.number === 3 ? (
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-center">
                                      <span className="text-yellow-700 font-medium text-sm">📅 Coming Soon</span>
                                    </div>
                                  ) : (
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                                      <span className="text-green-700 font-medium text-sm">📖 {issue.articles.length} Featured Articles</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              
                              <div className="flex items-center justify-between border-t pt-4">
                                <span className={`text-sm font-medium ${issue.number === 2 || issue.number === 3 ? 'text-gray-400' : 'text-purple-600 group-hover:text-purple-700'}`}>
                                  {issue.number === 2 || issue.number === 3 ? 'Coming Soon' : 'Read Issue →'}
                                </span>
                                {!(issue.number === 2 || issue.number === 3) && (
                                  <button className="text-gray-400 hover:text-purple-600 transition-colors p-2 hover:bg-purple-100 rounded-lg">
                                    <Download className="w-5 h-5" />
                                  </button>
                                )}
                              </div>
                            </Link>
                          </AnimatedSection>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* Archive Section */}
          <AnimatedSection animation="fade-up" delay={400}>
            <section className="mt-16">
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Complete Archive</h2>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Access our complete digital archive dating back to our first publication. 
                    All issues are available in digital format for subscribers.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/archive"
                      className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center transform hover:scale-105 transition-transform"
                    >
                      <BookOpen className="mr-2 w-5 h-5" />
                      Browse Archive
                    </Link>
                    <Link
                      href="/subscribe"
                      className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center transform hover:scale-105 transition-transform"
                    >
                      Subscribe for Access
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Subscribe CTA */}
          <AnimatedSection animation="scale-up" delay={500}>
            <section className="mt-16 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Never Miss an Issue
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Subscribe to Medi Voices and receive each new issue directly in your inbox, 
                along with exclusive access to our complete digital archive.
              </p>
              <Link
                href="/subscribe"
                className="gradient-bg text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center transform hover:scale-105 transition-transform"
              >
                Subscribe Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </section>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  )
}
