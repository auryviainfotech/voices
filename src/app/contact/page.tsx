"use client";
import React from 'react';
import Layout from '@/components/Layout'
import AnimatedSection from '@/components/AnimatedSection'
import { Mail, Phone, MapPin, Send, Clock, Users, Globe, BookOpen } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = React.useState<'idle'|'loading'|'success'|'error'>('idle');
  const [error, setError] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const { name, value } = target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setError('Failed to send message. Please try again.');
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
        <section className="gradient-bg text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fade-up">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Contact Medi Voices
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
                  Get in touch with our team for collaborations, subscriptions, or any inquiries
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Send Us a Message</h2>
              <form className="bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={form.subject || ''}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="subscription">Subscription</option>
                    <option value="contribution">Article Contribution</option>
                    <option value="partnership">Partnership</option>
                    <option value="advertising">Advertising</option>
                    <option value="technical">Technical Support</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : <><Send className="w-5 h-5 mr-2" />Send Message</>}
                </button>
                {status === 'success' && (
                  <p className="mt-4 text-green-600 text-center">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="mt-4 text-red-600 text-center">{error}</p>
                )}
              </form>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We're here to help and answer any questions you might have
                </p>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="fade-up" delay={100}>
                <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-4">For general inquiries and support</p>
                  <a 
                    href="mailto:medivoicesofficial@gmail.com" 
                    className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                  >
                    medivoicesofficial@gmail.com
                  </a>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-4">For urgent matters and partnerships</p>
                  <a 
                    href="tel:+919711777328" 
                    className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                  >
                    +91 9711777328
                  </a>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={300}>
                <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
                  <p className="text-gray-600 mb-4">Global healthcare platform</p>
                  <p className="text-purple-600 hover:text-purple-700 font-medium transition-colors">
                    Digital Presence Worldwide
                  </p>
                </div>
              </AnimatedSection>
            </div>
      </div>
    </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Office Hours & Response Times</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Clock className="w-6 h-6 text-purple-600 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-purple-600 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email Response</h3>
                      <p className="text-gray-600">Within 24-48 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-purple-600 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone Support</h3>
                      <p className="text-gray-600">Available during business hours</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <AnimatedSection animation="fade-right" delay={200}>
                <div className="bg-purple-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Contact Medi Voices?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-purple-600 mr-3 mt-0.5 shrink-0" />
                      <span className="text-gray-700">Connect with healthcare professionals worldwide</span>
                    </li>
                    <li className="flex items-start">
                      <Globe className="w-5 h-5 text-purple-600 mr-3 mt-0.5 shrink-0" />
                      <span className="text-gray-700">Share your healthcare innovations and research</span>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="w-5 h-5 text-purple-600 mr-3 mt-0.5 shrink-0" />
                      <span className="text-gray-700">Contribute to our quarterly healthcare magazine</span>
                    </li>
                    <li className="flex items-start">
                      <Mail className="w-5 h-5 text-purple-600 mr-3 mt-0.5 shrink-0" />
                      <span className="text-gray-700">Subscribe to receive latest healthcare insights</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="scale-up">
            <h2 className="text-3xl font-bold mb-4">Ready to Connect?</h2>
            <p className="text-xl mb-8 text-purple-100">
              Join our community of healthcare professionals and innovators
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/subscribe" 
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 hover:shadow-lg"
              >
                Subscribe to Our Magazine
              </a>
              <a 
                href="/about" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 hover:shadow-lg"
              >
                Learn More About Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  )
}
