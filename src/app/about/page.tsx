'use client';

import { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { Calendar, Users, BookOpen, Target, Award, Heart, X } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import TeamMemberModal from '@/components/TeamMemberModal';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
  email?: string;
  specialization?: string;
  experience?: string;
  content: string[];
}

const advisors = [
  {
    id: 'sreedhar-kasturi',
    name: 'Dr. Sreedhar Kasturi',
    specialty: 'Intervention Cardiologist',
    qualification: 'MD, DM',
    imageSrc: '/dr.sridhar.jpg'
  },
  {
    id: 'thum-prem-sunder',
    name: 'Dr. Thum Prem Sunder',
    specialty: 'Plastic & Recon Surgeon',
    qualification: 'MCh',
    imageSrc: '/dr.premsunder.thumu.jpg'
  },
  {
    id: 'sunny-davis',
    name: 'Dr. Sunny Davis',
    specialty: 'General Physician',
    qualification: 'MBBS',
    imageSrc: '/sunny-davis.jpg'
  },
  {
    id: 'venkatramana-kola',
    name: 'Dr. Venkatramana Kola',
    specialty: 'Intensivist',
    qualification: 'MD',
    imageSrc: '/Dr.-Venkat-Ramana-Kola.png'
  },
  {
    id: 'vijay-kumar',
    name: 'Dr. Ch Vijay Kumar',
    specialty: 'Interventional Pulmonologist',
    qualification: 'MD, DM',
    imageSrc: '/vijay-kumar.png'
  },
  {
    id: 'gautam-pasuala',
    name: 'Dr. Gautam Pasuala',
    specialty: 'General Physician',
    qualification: 'MBBS',
    imageSrc: '/dr.gautam.png'
  },
  {
    id: 'sharan-sai',
    name: 'Dr. Sharan Sai',
    specialty: 'General Medicine',
    qualification: 'MD',
    imageSrc: '/dr.sharansai.jpg'
  },
  {
    id: 'savarkar',
    name: 'Dr. Savarkar',
    specialty: 'Ophthalmologist',
    qualification: 'MS',
    imageSrc: '/mohammad-savarkar.jpg'
  },
  {
    id: 'janardhan-mydam',
    name: 'Dr. Janardhan Mydam',
    specialty: 'Pediatrician',
    qualification: 'MD (USA)',
    imageSrc: '/janardhan.jpg'
  },
  {
    id: 'raghu-suprith-reddy',
    name: 'Dr. Raghu Suprith Reddy',
    specialty: 'Intensivist',
    qualification: 'MD',
    imageSrc: '/Dr Raghu Suprith Reddy.jpg'
  }
];

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const teamMembers: TeamMember[] = [
    {
      id: 'dr-sai-krishna-priya',
      name: 'Dr. Sai Krishna Priya',
      role: 'Editor-in-Chief',
      imageSrc: '/PIC-1.jpeg',
      email: 'medivoicesofficial@gmail.com',
      content: [
        'Dr. Sai Krishna Priya is a distinguished medical professional with an MD in Pathology and extensive experience in medical research and healthcare publications. As the Editor-in-Chief of Medi Voices Magazine, she leads the editorial vision with a commitment to excellence and innovation in medical journalism.',
        'With over a decade of experience in the medical field, Dr. Priya has contributed to numerous research papers and publications, establishing herself as a thought leader in healthcare communication. Her expertise bridges the gap between complex medical information and accessible healthcare knowledge for professionals and the general public alike.',
        'Under her leadership, Medi Voices Magazine has become a trusted source of medical information, featuring cutting-edge research, expert opinions, and the latest developments in healthcare.'
      ]
    },
    {
      id: 'bandari-rajkumar',
      name: 'Dr. Bandari Rajkumar',
      role: 'Editor',
      imageSrc: '/PIC-2.jpeg',
      specialization: 'Paraquat Research',
      content: [
        'Dr. Bandari Rajkumar is a dedicated researcher and editor with a focus on environmental health and toxicology. His work on paraquat, one of the most lethal herbicides known, has brought attention to critical public health issues.',
        'Despite being banned in over 50 countries including the EU, UK, and China, paraquat remains legal in India. Dr. Rajkumar\'s research highlights the significant health risks associated with this chemical and advocates for safer alternatives and better regulations.',
        'As an editor at Medi Voices, Dr. Rajkumar ensures that complex scientific information is presented accurately and accessibly, helping to educate both medical professionals and the public about important health and environmental issues.'
      ]
    },
    {
      id: 'bandi-srinivas',
      name: 'Shri Bandi Srinivas',
      role: 'Co-Founder',
      imageSrc: '/PIC-3.jpeg',
      experience: '15+ years in healthcare',
      content: [
        'Shri Bandi Srinivas is a visionary leader with over 15 years of experience in the healthcare industry. As the Co-Founder of Medi Voices, he has been instrumental in shaping the publication\'s mission to connect healthcare professionals and advance medical knowledge.',
        'With a background in healthcare administration and management, Shri Srinivas brings valuable expertise in organizational development and strategic planning. His leadership has been crucial in establishing Medi Voices as a leading platform for medical professionals to share knowledge and insights.',
        'Under his guidance, Medi Voices has grown into a dynamic community where doctors, researchers, and healthcare professionals can collaborate, learn, and contribute to the advancement of medical science and patient care.'
      ]
    }
  ];

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About Medi Voices
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
                Your trusted source for healthcare innovation, insights, and inspiring stories
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-left">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Medi Voices is dedicated to bridging the gap between healthcare innovation and practice. 
                  We strive to provide healthcare professionals, researchers, and enthusiasts with 
                  cutting-edge insights, research findings, and inspiring stories that shape the future 
                  of healthcare.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Through our quarterly publication, we bring together voices from across the healthcare 
                  ecosystem to share knowledge, experiences, and breakthrough discoveries that can 
                  transform patient care and advance medical science.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="bg-purple-50 p-8 rounded-lg">
                <Target className="w-16 h-16 text-purple-600 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To become the leading platform for healthcare knowledge sharing, 
                  fostering collaboration and innovation that improves global health outcomes.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassion</h3>
                <p className="text-gray-600">
                  We believe healthcare should be driven by empathy and a genuine desire to improve lives.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We are committed to publishing high-quality, evidence-based content that meets the highest standards.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
                <p className="text-gray-600">
                  We foster partnerships and knowledge sharing among healthcare professionals worldwide.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
                <p className="text-gray-600">
                  We maintain the highest ethical standards in all our content and partnerships.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={500}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Timeliness</h3>
                <p className="text-gray-600">
                  We deliver relevant, up-to-date information that matters to healthcare professionals today.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={600}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We champion new ideas and approaches that can transform healthcare delivery.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Photo Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the passionate professionals driving healthcare innovation
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.id} animation="fade-up" delay={(index + 1) * 100}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                  <div className="relative h-64 shrink-0">
                    <img 
                      src={member.imageSrc} 
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6 flex flex-col grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-purple-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed grow">
                      {member.content[0].substring(0, 180)}...
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">
                          {member.email && (
                            <span><span className="font-medium">Email:</span> {member.email}</span>
                          )}
                          {member.specialization && (
                            <span><span className="font-medium">Specialization:</span> {member.specialization}</span>
                          )}
                          {member.experience && (
                            <span><span className="font-medium">Experience:</span> {member.experience}</span>
                          )}
                        </p>
                        <button 
                          onClick={() => openModal(member)}
                          className="text-xs text-purple-600 hover:text-purple-800 font-medium px-2 py-1 rounded-full hover:bg-purple-50 transition-colors"
                        >
                          View More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Advisors</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experienced healthcare professionals guiding our mission
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {advisors.slice(0, showAll ? advisors.length : 4).map((advisor, index) => (
              <AnimatedSection 
                key={advisor.id} 
                animation="fade-up" 
                delay={(index % 4 + 1) * 100}
              >
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center h-full">
                  <div className="w-20 h-20 bg-purple-100 rounded-full mb-3 overflow-hidden">
                    <img 
                      src={advisor.imageSrc || '/default-avatar.png'} 
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{advisor.name}</h3>
                  <p className="text-purple-600 text-xs sm:text-sm mb-2">{advisor.specialty}</p>
                  <p className="text-gray-500 text-xs mt-auto">{advisor.qualification}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          {!showAll && advisors.length > 4 && (
            <div className="text-center mt-8">
              <button 
                onClick={() => setShowAll(true)}
                className="text-sm text-purple-600 hover:text-purple-800 font-medium px-4 py-2 rounded-full hover:bg-purple-50 transition-colors border border-purple-200"
              >
                View All Advisors ({advisors.length - 4} more)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="scale-up">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl mb-8 text-purple-100">
              Be part of the conversation shaping the future of healthcare
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/subscribe" 
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all inline-flex items-center justify-center transform hover:scale-105"
              >
                Subscribe to Our Magazine
              </a>
              <a 
                href="/contribute" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all inline-flex items-center justify-center transform hover:scale-105"
              >
                Become a Contributor
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {isModalOpen && selectedMember && (
        <TeamMemberModal
          isOpen={isModalOpen}
          onClose={closeModal}
          name={selectedMember.name}
          role={selectedMember.role}
          imageSrc={selectedMember.imageSrc}
          content={selectedMember.content}
        />
      )}
    </Layout>
  )
}
