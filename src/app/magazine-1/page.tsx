'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Share2, Download, Calendar, BookOpen, User, ChevronRight } from 'lucide-react';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';

// Dynamically import SimplePDFViewer to avoid SSR issues
const SimplePDFViewer = dynamic(() => import('@/components/SimplePDFViewer'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96 bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading PDF viewer...</p>
      </div>
    </div>
  )
});

export default function MagazinePage() {
  const [showHighlights, setShowHighlights] = useState(true);
  const [shareLinks, setShareLinks] = useState<Array<{
    name: string;
    url: string;
    color: string;
  }>>([]);

  // Magazine metadata matching the reference website
  const magazineData = {
    volume: "Volume 1",
    issue: "Issue 1", 
    dateRange: "October - December 2025",
    title: "Medi Voices Magazine",
    description: "A quarterly publication bringing you the latest in healthcare innovation, technology, and thought leadership from around the globe.",
    highlights: [
      {
        title: "Nursing, Yesterday, Today and Tomorrow",
        subtitle: "What has changed or not changed in the nursing profession - A comprehensive analysis of evolution in healthcare",
        author: "Guest Column by Dr. Sharon Vasuthevan",
        category: "Healthcare Profession"
      },
      {
        title: "Prioritizing Human Connection",
        subtitle: "The Key to Mental Health in the Digital Age - Building meaningful relationships in a virtual world",
        author: "by Sagar Pandya",
        category: "Mental Health"
      },
      {
        title: "Healthcare in 2023",
        subtitle: "Exploring the Top Technology Trends Shaping the Future of Medicine and patient care delivery",
        author: "by Varsha Prasad",
        category: "Healthcare Technology"
      },
      {
        title: "Digital Therapeutics: Transforming Healthcare",
        subtitle: "Revolutionary impact on healthcare delivery systems and personalized treatment approaches",
        author: "by Dr. Rajesh Sharma",
        category: "Digital Health"
      },
      {
        title: "The Future of E-Pharmacy",
        subtitle: "Digital health platforms in modern medical ecosystem - Innovations in pharmaceutical care",
        author: "by Priya Nair",
        category: "Pharmaceutical Innovation"
      },
      {
        title: "AI in Healthcare: Opportunities and Challenges",
        subtitle: "Artificial Intelligence applications in medical diagnosis and treatment planning",
        author: "by Dr. Michael Chen",
        category: "Artificial Intelligence"
      }
    ],
    contactInfo: {
      name: "Sanjay Gaur",
      phone: "+91 9711777328",
      email: "magazine@innovatiocuris.com"
    }
  };

  // Set share links on client side only to avoid hydration mismatch
  useEffect(() => {
    const currentUrl = window.location.href;
    const shareText = `Check out ${magazineData.title} ${magazineData.volume} ${magazineData.issue}`;
    
    const links = [
      {
        name: 'X (Twitter)',
        url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`,
        color: 'text-black hover:text-gray-700'
      },
      {
        name: 'Facebook',
        url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
        color: 'text-blue-600 hover:text-blue-800'
      },
      {
        name: 'WhatsApp',
        url: `https://wa.me/?text=${encodeURIComponent(`${shareText} - ${currentUrl}`)}`,
        color: 'text-green-600 hover:text-green-800'
      },
      {
        name: 'LinkedIn',
        url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
        color: 'text-blue-500 hover:text-blue-700'
      },
      {
        name: 'Pinterest',
        url: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&description=${encodeURIComponent(shareText)}`,
        color: 'text-red-600 hover:text-red-800'
      },
      {
        name: 'Email',
        url: `mailto:?subject=${encodeURIComponent(`${magazineData.title} ${magazineData.volume} ${magazineData.issue}`)}&body=${encodeURIComponent(`Check out this magazine: ${currentUrl}`)}`,
        color: 'text-gray-600 hover:text-gray-800'
      }
    ];
    
    setShareLinks(links);
  }, [magazineData.title, magazineData.volume, magazineData.issue]);

  return (
    <Layout>
      {/* Advertisement Banner - January Edition */}
      {/* eslint-disable-next-line */}
      <div className="bg-linear-to-r from-purple-900 via-pink-700 to-purple-900 text-white py-6 sm:py-8 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-2 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-3 right-20 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg items-center justify-center border border-white/30">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs sm:text-sm text-purple-200 mb-1 font-medium uppercase tracking-wide">New Release</p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">January 2026 Edition</h2>
                <p className="text-sm sm:text-base text-purple-100">Coming Soon - Be the First to Read!</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="/subscribe" 
                className="bg-white text-purple-900 px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <span>Subscribe Now</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="/issues" 
                className="border-2 border-white text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>View Issues</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Magazine Header */}
          <AnimatedSection animation="fade-up" delay={100}>
            <header className="bg-white rounded-lg shadow-md p-6 mb-8 hover:shadow-xl transition-all duration-500">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <AnimatedSection animation="fade-left" delay={200}>
                    <div className="flex items-center space-x-4 mb-4">
                      <h1 className="text-3xl font-bold text-gray-900 hover:text-purple-600 transition-colors">
                        {magazineData.title} {magazineData.volume} {magazineData.issue}
                      </h1>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                        Latest Issue
                      </span>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fade-left" delay={300}>
                    <p className="text-gray-600 mb-4 max-w-2xl">
                      {magazineData.description}
                    </p>
                  </AnimatedSection>
                  <AnimatedSection animation="fade-left" delay={400}>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center hover:text-purple-600 transition-colors">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{magazineData.dateRange}</span>
                      </div>
                      <div className="flex items-center hover:text-purple-600 transition-colors">
                        <BookOpen className="w-4 h-4 mr-1" />
                        <span>Quarterly Publication</span>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
                <AnimatedSection animation="fade-right" delay={500}>
                  <div className="w-24 h-24 bg-linear-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold mt-4 lg:mt-0 hover:scale-110 transition-transform cursor-pointer">
                    V1
                  </div>
                </AnimatedSection>
              </div>

              {/* Action Buttons */}
              <AnimatedSection animation="fade-up" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => window.open('/medi-voices-v1-i1.pdf', '_blank')}
                    className="gradient-bg text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 hover:shadow-lg"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download PDF
                  </button>
                  <button 
                    onClick={() => setShowHighlights(!showHighlights)}
                    className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 hover:shadow-lg"
                  >
                    <BookOpen className="mr-2 w-5 h-5" />
                    {showHighlights ? 'Hide Editor\'s Note' : 'Show Editor\'s Note'}
                  </button>
                </div>
              </AnimatedSection>
            </header>
          </AnimatedSection>

          {/* Editor's Note Section */}
          {showHighlights && (
            <AnimatedSection animation="fade-up">
              <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-1 h-6 gradient-bg mr-3"></span>
                  Editor's Note
                </h2>
                
                {/* Editor's Message */}
                <div className="p-6 bg-linear-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-600">
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-linear-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="grow">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">A Voice That Connects Every Corner of Healthcare</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">          
                            When we launched MediVoices Legacy, our goal was simple yet powerful —
                            to build a platform that speaks to everyone who shapes the world of healthcare.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        From the common public seeking clarity…
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        to doctors seeking scientific updates…
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        to healthcare entrepreneurs looking for direction…
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">                      
                        to innovators redefining the future of medicine…
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        MediVoices was born to connect all of them under one roof.
                      </p>
                      <div className="mt-4 pt-4 border-t border-purple-200">
                        <p className="text-sm font-semibold text-purple-700">Dr.sai krishna priya MD(Pathology)</p>
                        <p className="text-sm text-gray-600">Editor-Medi Voices</p>
                        <p className="text-xs text-gray-500">medivoicesofficial@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </AnimatedSection>
          )}

          {/* PDF Viewer Section */}
          <AnimatedSection animation="fade-up" delay={200}>
            <section className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-linear-to-r from-purple-600 to-pink-600 p-4 text-white">
                <h2 className="text-xl font-semibold">Read Magazine</h2>
                <p className="text-purple-100 text-sm">Flip through the pages of our latest issue</p>
              </div>
              <div className="p-4">
                <SimplePDFViewer />
              </div>
            </section>
          </AnimatedSection>

          {/* Magazine Info Section */}
          <AnimatedSection animation="fade-up" delay={300}>
            <section className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About Medi Voices Magazine</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Medi Voices Magazine, incorporated as a leading healthcare publication, focuses on healthcare innovations and digital transformation. 
                  Our magazine brings you the latest insights from healthcare professionals, researchers, and industry leaders.
                </p>
                <p className="mb-4">
                  For over the years, Medi Voices Magazine has produced and curated hundreds of articles in various fields of healthcare innovations. 
                  Our advisory and editorial board is spread across multiple continents, making the dream of innovations in healthcare to be showcased 
                  onto a single platform a reality.
                </p>
                <p className="mb-6">
                  Our magazine caters to numerous platforms online and offline and reaches thousands of stakeholders in the healthcare sector.
                </p>
              </div>
            </section>
          </AnimatedSection>

          {/* Social Sharing */}
          <AnimatedSection animation="fade-up" delay={400}>
            <section className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Share2 className="w-5 h-5 mr-2" />
                Share this Issue
              </h3>
              <div className="flex flex-wrap gap-4">
                {shareLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all ${link.color}`}
                  >
                    <span className="text-sm font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </section>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  );
}
