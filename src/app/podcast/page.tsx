import Layout from '@/components/Layout'
import { Mic, Clock, Calendar, Users, Play, Headphones, Radio } from 'lucide-react'

export default function PodcastPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <Mic className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Medi Voices Podcast
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Tune in to inspiring conversations with healthcare leaders, innovators, and changemakers
            </p>
            <div className="inline-flex items-center bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold text-lg">
              <Clock className="w-5 h-5 mr-2" />
              Coming Soon
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-12 rounded-2xl shadow-lg">
            <Radio className="w-20 h-20 text-purple-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Something Amazing is Coming!
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're working behind the scenes to bring you engaging podcast episodes featuring 
              exclusive interviews with healthcare professionals, discussions on cutting-edge medical 
              innovations, and stories that are shaping the future of healthcare.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-md mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What to Expect:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Expert Interviews</h4>
                    <p className="text-gray-600 text-sm">Conversations with leading healthcare professionals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Play className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Innovation Spotlights</h4>
                    <p className="text-gray-600 text-sm">Latest breakthroughs in medical technology</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Headphones className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Patient Stories</h4>
                    <p className="text-gray-600 text-sm">Inspiring journeys of hope and healing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Weekly Episodes</h4>
                    <p className="text-gray-600 text-sm">Regular content to keep you informed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-600 text-white p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-3">Be the First to Know!</h3>
              <p className="mb-4">Subscribe to our newsletter and get notified when we launch our podcast series.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors">
                  Notify Me
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-8 text-gray-500">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>Launching Q1 2024</span>
              </div>
              <div className="flex items-center">
                <Mic className="w-5 h-5 mr-2" />
                <span>Weekly Episodes</span>
              </div>
              <div className="flex items-center">
                <Headphones className="w-5 h-5 mr-2" />
                <span>Available Everywhere</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Episodes Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Episodes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get a glimpse of the exciting content we're preparing for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md opacity-75">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-lg">EP 01</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Future of Telemedicine</h3>
              <p className="text-gray-600 mb-4">
                Exploring how virtual healthcare is transforming patient care and accessibility.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                <span>45 min</span>
                <span className="mx-2">•</span>
                <span>Coming Soon</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md opacity-75">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-lg">EP 02</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI in Healthcare</h3>
              <p className="text-gray-600 mb-4">
                How artificial intelligence is revolutionizing diagnosis and treatment planning.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                <span>40 min</span>
                <span className="mx-2">•</span>
                <span>Coming Soon</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md opacity-75">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-lg">EP 03</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mental Health Innovation</h3>
              <p className="text-gray-600 mb-4">
                Breakthrough approaches to mental healthcare and wellness in the digital age.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                <span>50 min</span>
                <span className="mx-2">•</span>
                <span>Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mic className="w-16 h-16 mx-auto mb-6 text-purple-200" />
          <h2 className="text-3xl font-bold mb-4">Want to Be a Guest?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Share your healthcare expertise and story with our global audience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center">
              Apply as Guest Speaker
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center">
              Suggest a Topic
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
