'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, Maximize, Search, MoreHorizontal, Eye } from 'lucide-react';

export default function SimplePDFViewer() {
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(10); // Default, will be updated based on PDF
  
  // PDF file path
  const pdfUrl = '/medi-voices-v1-i1.pdf';

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'madi-voices-magazine.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenPDF = () => {
    window.open(pdfUrl, '_blank');
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  const nextPage = () => {
    if (currentPage >= totalPages) return;
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* PDF Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">
                {showPreview ? 'Magazine Reader' : 'PDF Viewer'}
              </h2>
              <p className="text-purple-100 text-sm">
                {showPreview ? `Page ${currentPage} of ${totalPages}` : 'Click below to view or download the magazine'}
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={togglePreview}
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center"
              >
                <Eye className="w-4 h-4 mr-2" />
                {showPreview ? 'Hide Reader' : 'Show Reader'}
              </button>
              <button
                onClick={handleOpenPDF}
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center"
              >
                <Maximize className="w-4 h-4 mr-2" />
                Open in New Tab
              </button>
              <button
                onClick={handleDownloadPDF}
                className="bg-white text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </button>
            </div>
          </div>
        </div>

        {/* PDF Content Area */}
        <div className="w-full flex justify-center bg-gray-50 min-h-[600px]">
          {showPreview ? (
            // Simple PDF Reader Mode
            <div className="w-full p-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src={`${pdfUrl}#page=${currentPage}&zoom=auto-fit`}
                  className="w-full h-[700px] border-0"
                  title={`Magazine Page ${currentPage}`}
                />
              </div>
              
              {/* Page Navigation Controls */}
              <div className="flex items-center justify-center space-x-6 mt-6 p-4 bg-white rounded-lg shadow">
                <button
                  onClick={prevPage}
                  disabled={currentPage <= 1}
                  className="group relative p-3 text-gray-600 hover:text-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-8 h-8" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    Previous
                  </span>
                </button>
                
                <div className="text-center">
                  <span className="text-lg font-medium text-gray-800">
                    Page {currentPage} of {totalPages}
                  </span>
                </div>
                
                <button
                  onClick={nextPage}
                  disabled={currentPage >= totalPages}
                  className="group relative p-3 text-gray-600 hover:text-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-8 h-8" />
                  <span className="absolute -bottom-8 right-1/2 transform translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    Next
                  </span>
                </button>
              </div>
            </div>
          ) : (
            // Standard View Mode
            <div className="w-full p-8">
              <div className="text-center">
                {/* Magazine Icon */}
                <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="text-purple-600 text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19,2L14,6.5V17.5L19,13V2M6.5,5C4.55,5 2.45,5.4 1,6.5V21.16C1,21.41 1.25,21.66 1.5,21.66C1.6,21.66 1.65,21.59 1.75,21.59C3.1,20.94 5.05,20.5 6.5,20.5C8.45,20.5 10.55,20.9 12,22C13.35,21.15 15.8,20.5 17.5,20.5C19.15,20.5 20.85,20.81 22.25,21.56C22.35,21.61 22.4,21.59 22.5,21.59C22.75,21.59 23,21.34 23,21.09V6.5C22.4,6.05 21.75,5.75 21,5.5V19C19.9,18.65 18.7,18.5 17.5,18.5C15.8,18.5 13.35,19.15 12,20V6.5C10.55,5.4 8.45,5 6.5,5Z" />
                    </svg>
                    <p className="text-sm font-medium">Digital Magazine</p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Medi Voices Magazine
                </h3>
                <p className="text-gray-600 mb-6">
                  Volume 1, Issue 1 • October - December 2025
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={togglePreview}
                    className="gradient-bg text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center shadow-lg"
                  >
                    <Eye className="mr-2 w-5 h-5" />
                    Read Magazine
                  </button>
                  <button
                    onClick={handleOpenPDF}
                    className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center"
                  >
                    <Maximize className="mr-2 w-5 h-5" />
                    Open as PDF
                  </button>
                  <button
                    onClick={handleDownloadPDF}
                    className="border-2 border-gray-600 text-gray-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download PDF
                  </button>
                </div>
                
                {/* Features */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <Eye className="w-4 h-4 text-purple-600" />
                    <span>Inline reader</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Maximize className="w-4 h-4 text-purple-600" />
                    <span>Full screen view</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4 text-purple-600" />
                    <span>Download available</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="bg-gray-50 border-t border-gray-200 p-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <span>📖 Digital Magazine</span>
              <span>📱 Mobile Friendly</span>
              <span>💾 Offline Available</span>
              {showPreview && <span>👁️ Reading Mode</span>}
            </div>
            <div className="flex items-center space-x-2">
              <Search className="w-4 h-4" />
              <span>Searchable content</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Info */}
      <div className="mt-6 text-center text-sm text-gray-600">
        <p>
          {showPreview 
            ? "Use the navigation buttons below to browse through pages of the magazine."
            : "Click 'Read Magazine' to view the magazine in our inline reader."
          }
        </p>
        <p className="mt-1">You can also open the PDF in a new tab or download it for offline reading.</p>
      </div>
    </div>
  );
}
