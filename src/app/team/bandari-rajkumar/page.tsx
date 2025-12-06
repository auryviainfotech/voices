import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bandari Rajkumar - MediVoices',
  description: 'Co-Founder of MediVoices - A platform that unites healthcare professionals across all levels',
};

export default function BandariRajkumarProfile() {
  const content = [
    "MD (AFMC), DNB — Critical Care",
    "Co-Founder, MediVoices",
    "",
    "MediVoices is powered by a unique team of young doctors, visionary advisors, and healthcare stalwarts from India and overseas.",
    "Our strength lies in this blend of youthful energy and seasoned expertise.",
    "",
    "Our mission is simple:",
    "to reach every layer of healthcare — from an MBBS graduate in a rural PHC to a top international consultant in a metro city.",
    "",
    "We believe knowledge should not be limited by geography, seniority, or specialty.",
    "Whether you are practicing in a small town or leading a department in a global centre, MediVoices is your platform.",
    "",
    "This is just the beginning.",
    "We aim to grow into one of India's largest doctor-led healthcare knowledge networks — and we invite you to be part of this journey.",
    "",
    "Join hands with MediVoices.",
    "Let's expand this movement together…",
    "to educate, inspire, innovate, and strengthen the healthcare community across the nation.",
    "",
    "Together, we create the future of healthcare."
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Hero Section with Image */}
        <div className="relative h-115">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'url(/PIC-2.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: '0px -90px',
              backgroundRepeat: 'no-repeat'
            }}
            aria-label="Bandari Rajkumar"
          />
        </div>
        
        {/* Content Section */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Bandari Rajkumar</h1>
          <p className="text-purple-600 text-lg font-medium mb-8">Co-Founder, MediVoices</p>
          
          <div className="prose max-w-none">
            {content.map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
