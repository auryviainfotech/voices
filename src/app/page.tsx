'use client'

import Link from 'next/link'
import { ArrowRight, BookOpen, Mail, Phone, MapPin, X } from 'lucide-react'
import ImpactCarousel from '@/components/ImpactCarousel'
import ContentCarousel from '@/components/ContentCarousel'
import Layout from '@/components/Layout'
import ImageSlideshow from '@/components/ImageSlideshow'
import AnimatedSection from '@/components/AnimatedSection'
import { mockArticles, mockCategories } from '@/data/mockData'
import { useEffect, useState } from 'react'

export default function Home() {
  const featuredArticles = mockArticles.filter(article => article.featured).slice(0, 3)
  const recentArticles = mockArticles.filter(article => !article.featured).slice(0, 6)
  const [scrollY, setScrollY] = useState(0)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      // Parallax effect for different layers
      const parallaxElements = document.querySelectorAll('.parallax-layer') as NodeListOf<HTMLElement>
      parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5
        element.style.transform = `translateY(${window.scrollY * speed}px)`
      })

      // Floating elements animation
      const floatingElements = document.querySelectorAll('.parallax-float') as NodeListOf<HTMLElement>
      floatingElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const speed = 0.5
        element.style.transform = `translateY(${rect.top * speed}px)`
      })

      // Scale effect on scroll
      const scaleElements = document.querySelectorAll('.parallax-scale') as NodeListOf<HTMLElement>
      scaleElements.forEach((element) => {
        const scale = 1 + (window.scrollY * 0.0005)
        element.style.transform = `scale(${scale})`
      })

      // Opacity fade effect
      const fadeElements = document.querySelectorAll('.parallax-fade') as NodeListOf<HTMLElement>
      fadeElements.forEach((element) => {
        const opacity = Math.max(0, 1 - (window.scrollY * 0.001))
        element.style.opacity = opacity.toString()
      })
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Layout>
      {/* Coming Soon Banner */}
      <div className="bg-linear-to-r from-purple-600 via-pink-600 to-purple-600 text-white py-3 px-4 text-center animate-gradient-x">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg font-semibold flex items-center justify-center gap-2">
            <span className="animate-pulse">🎉</span>
            <span>January Edition Coming Soon!</span>
            <span className="animate-pulse">🎉</span>
          </p>
        </div>
      </div>

      {/* Hero Section with Slideshow */}
      <section className="gradient-bg text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Image Slideshow with Text Overlay */}
          <div className="mb-6 sm:mb-8 flex flex-col items-center justify-center">
            <div className="w-full max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
              <ImageSlideshow />
            </div>
          </div>

          <AnimatedSection animation="fade-up">
            <div className="text-center px-2 sm:px-0">
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-purple-100 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto">
                A quarterly healthcare magazine focused on innovations, insights, and inspiring stories in the healthcare industry
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/issues" 
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center transform hover:scale-105"
              >
                Read Magazine
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/subscribe" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center transform hover:scale-105"
              >
                Subscribe Now
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-8 overflow-hidden bg-white">

        
        <div className="w-full relative px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-4">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">About Medi Voices</h2>
              <p className="text-lg font-body text-purple-600 font-medium mb-0">Discover Our Story & Impact</p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-left">
            <ContentCarousel 
              slides={[
                {
                  id: 'legacy',
                  content: (
                    <div className="h-full flex flex-col">
                      <div className="bg-linear-to-r from-purple-50 to-pink-50 p-8 rounded-xl border-l-4 border-purple-600 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                        <div className="flex items-center justify-center mb-6">
                          <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                            1
                          </div>
                          <h3 className="text-2xl font-heading font-bold text-gray-900">Our Legacy</h3>
                        </div>
                        <div className="space-y-4 text-center grow flex flex-col justify-center">
                          <p className="font-body text-gray-700 leading-relaxed text-lg">
                            A New Healthcare Magazine Started in 2026
                         </p>
                          <p className="font-body text-purple-600 font-medium text-lg">
                            Where Healthcare Meets Innovation, Community & Inspiration

                          </p>
                          <div className="h-px bg-linear-to-r from-transparent via-purple-300 to-transparent my-2"></div>
                          <p className="font-body text-gray-700 leading-relaxed">
                            A New Voice for a New Era in Healthcare

                                2025 marked the birth of MediVoices Legacy, a first-of-its-kind healthcare magazine from Telangana, created to bring together doctors, hospitals, healthcare leaders, students, innovators, and the general public on one powerful platform.

                                MediVoices Legacy is more than just a magazine —
                                it is a movement that amplifies authentic medical voices, celebrates real healthcare heroes, and drives evidence-based awareness.


                                What Makes MediVoices Legacy Unique?

                                Doctor-Led, Evidence-Based Journalism

                                Every article is written or reviewed by qualified doctors, ensuring accuracy, credibility, and zero sensationalism.
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  id: 'quote',
                  content: (
                    <div className="h-full">
                      <div className="relative bg-linear-to-br from-purple-600 to-pink-600 p-10 rounded-xl h-full flex items-center justify-center">
                        <div className="absolute top-6 left-6 text-6xl text-white/10">"</div>
                        <div className="text-center">
                          <p className="font-body text-white text-xl md:text-2xl leading-relaxed italic mb-6">
                            Our magazine brings you the latest insights from healthcare professionals, researchers, and industry leaders who are shaping the future of healthcare delivery and patient outcomes worldwide.
                          </p>
                          <div className="h-0.5 w-20 bg-white/30 mx-auto my-6"></div>
                          <p className="text-purple-100 font-medium">
                            - The MediVoices Team
                          </p>
                        </div>
                        <div className="absolute bottom-6 right-6 text-6xl text-white/10">"</div>
                      </div>
                    </div>
                  )
                },
                {
                  id: 'global-reach',
                  content: (
                    <div className="h-full">
                      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div className="text-center mb-8">
                          <div className="w-24 h-24 bg-linear-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-5">
                            <span className="text-white text-3xl font-bold">50K+</span>
                          </div>
                          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">Global Reach</h3>
                          <p className="font-body text-gray-700 mb-6 max-w-md mx-auto">
                            Our magazine caters to numerous platforms online and offline, reaching thousands of stakeholders in the healthcare sector.
                          </p>
                        </div>
                        <div className="mt-auto">
                          <div className="flex flex-wrap justify-center gap-3">
                            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Global Impact</span>
                            <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Multi-Platform</span>
                            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Healthcare Leaders</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  id: 'expertise',
                  content: (
                    <div className="h-full">
                      <div className="grid grid-cols-1 gap-6 h-full">
                        <div className="bg-linear-to-br from-purple-50 to-purple-100 p-8 rounded-xl text-center h-full flex flex-col">
                          <div className="mb-6">
                            <div className="w-16 h-16 bg-linear-to-br from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <h4 className="text-xl font-heading font-semibold text-purple-900 mb-3">Innovation Focus</h4>
                          </div>
                          <p className="font-body text-purple-800 text-base leading-relaxed grow">
                            Cutting-edge healthcare technologies and breakthrough research that&apos;s transforming patient care and medical practices worldwide.
                          </p>
                        </div>
                        <div className="bg-linear-to-br from-pink-50 to-pink-100 p-8 rounded-xl text-center h-full flex flex-col">
                          <div className="mb-6">
                            <div className="w-16 h-16 bg-linear-to-br from-pink-600 to-pink-700 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </div>
                            <h4 className="text-xl font-heading font-semibold text-pink-900 mb-3">Expert Insights</h4>
                          </div>
                          <p className="font-body text-pink-800 text-base leading-relaxed grow">
                            Perspectives from leading healthcare professionals and researchers who are at the forefront of medical innovation and patient care.
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                }
              ]} 
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Parallax Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background Layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-br from-purple-900 via-purple-700 to-pink-600"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Floating Elements for Parallax Effect */}
          <div className="parallax-layer absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="parallax-layer absolute top-40 right-20 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="parallax-layer absolute bottom-30 left-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
          <div className="parallax-layer absolute bottom-20 right-1/3 w-36 h-36 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Transforming Healthcare
              <span className="block text-3xl md:text-5xl mt-4 text-purple-200">
                Through Innovation & Insight
              </span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the global community of healthcare professionals, researchers, and innovators 
              shaping the future of medicine through cutting-edge research and breakthrough discoveries.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-500 transform hover:scale-105">
                <div className="text-4xl mb-3">🏥</div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">Healthcare Innovation</h3>
                <p className="font-body text-purple-100">Revolutionary medical technologies and treatments</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-500 transform hover:scale-105">
                <div className="text-4xl mb-3">🔬</div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">Research Excellence</h3>
                <p className="font-body text-purple-100">Groundbreaking studies and clinical trials</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-500 transform hover:scale-105">
                <div className="text-4xl mb-3">🌍</div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">Global Collaboration</h3>
                <p className="font-body text-purple-100">Connecting healthcare professionals worldwide</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={600}>
            <div className="mt-12">
              <Link 
                href="/magazine-1" 
                className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-full font-heading font-bold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
              >
                <BookOpen className="mr-3 w-6 h-6" />
                Explore Latest Magazine
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Stats Section with Parallax */}
      <section className="py-20 bg-linear-to-b from-purple-100 via-pink-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="parallax-layer absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-50"></div>
          <div className="parallax-layer absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-50"></div>
        </div>
        <div className="relative z-10">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Impact in Numbers
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <ImpactCarousel />
          </div>
        </div>
      </section>

      {/* Floating Content Cards with Parallax */}
      <section className="pb-12 md:pb-16 bg-linear-to-br from-pink-50 via-purple-50 to-pink-100 relative overflow-hidden" style={{ paddingTop: 'calc(2rem - 30px)' }}>
        <div className="absolute inset-0">
          <div className="parallax-layer absolute top-8 left-10 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-20"></div>
          <div className="parallax-layer absolute bottom-8 right-10 w-48 h-48 bg-pink-200 rounded-full blur-2xl opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Why Choose Medi Voices</h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Your trusted platform for healthcare innovation and professional growth
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="group relative">
                <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-linear-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white text-2xl mb-6">
                    📚
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Cutting-Edge Content</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Access the latest research findings, clinical trials, and innovations in healthcare technology 
                    from leading experts around the world.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      Peer-reviewed articles
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      Evidence-based research
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      Clinical case studies
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="group relative">
                <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-linear-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white text-2xl mb-6">
                    🌐
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Network</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Connect with healthcare professionals, researchers, and industry leaders across 
                    multiple continents and specializations.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      International collaboration
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      Diverse perspectives
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      Cross-cultural insights
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="group relative">
                <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-linear-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white text-2xl mb-6">
                    🚀
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Growth</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Enhance your professional development with exclusive insights, research opportunities, 
                    and networking possibilities.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      Professional development
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      Research opportunities
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      Industry recognition
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-linear-to-br from-purple-100 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Connect with us for collaborations, subscriptions, or any inquiries
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">medivoicesofficial@gmail.com</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+91 9711777328</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">Global Healthcare Platform</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="scale-up">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Healthcare Innovations</h2>
            <p className="text-xl mb-8 text-purple-100">
              Subscribe to Medi Voices and get the latest insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transform focus:scale-105 transition-transform"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transform hover:scale-105 transition-all">
                Subscribe
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Popup Modal for January Edition */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-linear-to-br from-purple-900 via-pink-800 to-purple-900 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden transform animate-scaleIn">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300 transform hover:scale-110"
              aria-label="Close popup"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Content */}
            <div className="relative z-10 p-8 sm:p-12 text-center text-white">
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                  <BookOpen className="w-16 h-16 text-white" />
                </div>
              </div>

              {/* Badge */}
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/30 mb-4">
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  🎉 New Release Alert
                </p>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                January 2025 Edition
              </h2>
              
              {/* Subtitle */}
              <p className="text-xl sm:text-2xl mb-6 text-purple-100">
                Coming Soon!
              </p>

              {/* Description */}
              <p className="text-base sm:text-lg mb-8 text-purple-50 leading-relaxed max-w-md mx-auto">
                Be the first to explore groundbreaking healthcare insights, innovations, and expert perspectives in our upcoming January edition.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://forms.gle/cThLTnVJ5t7etEwA9"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowPopup(false)}
                  className="bg-white text-purple-900 px-8 py-3.5 rounded-full font-bold text-base hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Subscribe Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <button
                  onClick={() => setShowPopup(false)}
                  className="border-2 border-white text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  Maybe Later
                </button>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-linear-to-r from-purple-500 via-pink-500 to-purple-500"></div>
          </div>
        </div>
      )}
    </Layout>
  )
}
