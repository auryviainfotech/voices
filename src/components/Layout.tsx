'use client';

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  // WhatsApp click handler with better iOS support
  const handleWhatsAppClick = () => {
    const phoneNumber = '918639245016'; // Remove the + for better compatibility
    const message = 'Hello, I have a question about Madi Voices.';
    // Use web API for better iOS support
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as Window & typeof globalThis & { MSStream?: unknown }).MSStream;
    
    // Format URL based on device
    let url;
    if (isIOS) {
      // iOS specific URL format
      url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    } else {
      // Standard URL for other devices
      url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    }
    
    // Open in new tab for better mobile experience
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        {children}
      </main>
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-4 md:right-6 z-50">
        <button 
          onClick={handleWhatsAppClick}
          className="bg-[#25D366] hover:bg-[#128C7E] text-white w-12 h-12 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Chat on WhatsApp"
          // iOS specific attributes
          style={{
            WebkitTapHighlightColor: 'transparent',
            WebkitTouchCallout: 'none',
          }}
        >
          <FaWhatsapp className="text-3xl md:text-4xl" />
        </button>
      </div>
    </div>
  )
}

export default Layout
