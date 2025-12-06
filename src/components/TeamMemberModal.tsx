'use client';

import { X } from 'lucide-react';
import Image from 'next/image';

interface TeamMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  role: string;
  imageSrc: string;
  content: string[];
}

export default function TeamMemberModal({ isOpen, onClose, name, role, imageSrc, content }: TeamMemberModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-5xl w-full max-h-[98vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none p-1 hover:bg-gray-100 rounded-full"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-4 sm:p-6">
          <div className="relative w-full h-80 md:h-[28rem] lg:h-[32rem] mb-6 rounded-lg overflow-hidden bg-gray-100">
            <img
              src={imageSrc}
              alt={name}
              className="w-full h-full object-contain"
              style={{ objectPosition: 'center center' }}
            />
          </div>
          
          <div className="text-center mb-6 px-4">
            <p className="text-purple-600 font-semibold text-lg">{role}</p>
          </div>
          
          <div className="prose max-w-3xl mx-auto">
            {content.map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
