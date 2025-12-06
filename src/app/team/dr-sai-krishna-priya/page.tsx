import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dr. Sai Krishna Priya - MediVoices',
  description: 'Editor-in-Chief of MediVoices - A Voice That Connects Every Corner of Healthcare',
};

export default function DrSaiKrishnaProfile() {
  const content = [
    "Dr. Sai Krishna Priya MD (Pathology)",
    "",
    "Medivoices - A Voice That Connects Every Corner of Healthcare",
    "",
    "MediVoices Legacy was created with one mission — to be the platform that unites everyone in healthcare.",
    "",
    "From the public seeking clarity… to doctors seeking updates… to entrepreneurs exploring opportunities… to innovators building the future…",
    "",
    "MediVoices brings them all together.",
    "",
    "Reaching the Public with Clarity",
    "In a world filled with misinformation, people need trusted guidance.",
    "We bring:",
    "🔹 Clear, simple awareness",
    "🔹 Science-backed explanations",
    "🔹 Lifestyle guidance",
    "🔹 Early-diagnosis awareness",
    "Our goal: keep every family informed and safe.",
    "",
    "Reaching Doctors with Knowledge",
    "Medicine evolves daily — so must our learning.",
    "We deliver:",
    "✔ CME nuggets",
    "✔ Recent advances",
    "✔ Case bites",
    "✔ Spotlight stories",
    "✔ Policy insights",
    "Because doctors deserve a strong, informed voice."
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Hero Section with Image */}
              <div className="relative h-120">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'url(/PIC-1.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: '0px -56px',
              backgroundRepeat: 'no-repeat'
            }}
            aria-label="Bandari Rajkumar"
          />
        </div>
        
        {/* Content Section */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dr. Sai Krishna Priya</h1>
          <p className="text-purple-600 text-lg font-medium mb-8">Editor-in-Chief, MediVoices</p>
          
          <div className="prose max-w-none">
            {content.map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <a 
              href="mailto:medivoicesofficial@gmail.com"
              className="inline-flex items-center text-purple-600 hover:text-purple-800"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              medivoicesofficial@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
