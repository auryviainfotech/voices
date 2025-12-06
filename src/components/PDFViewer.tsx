'use client';

import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize, Search, MoreHorizontal } from 'lucide-react';

// Configure PDF.js worker - try multiple approaches
const workerSources = [
  `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`,
  `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`,
  `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`
];

let workerLoaded = false;
for (const source of workerSources) {
  try {
    pdfjs.GlobalWorkerOptions.workerSrc = source;
    workerLoaded = true;
    console.log(`PDF.js worker loaded from: ${source}`);
    break;
  } catch (error) {
    console.warn(`Failed to load PDF.js worker from ${source}:`, error);
    continue;
  }
}

if (!workerLoaded) {
  console.warn('All CDN workers failed, trying without worker (may have limited functionality)');
  // Fallback: disable worker for basic functionality
  pdfjs.GlobalWorkerOptions.workerSrc = '';
}

export default function PDFViewer() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [pdfError, setPdfError] = useState<string | null>(null);

  // Replace this with your actual PDF path
  const pdfUrl = '/cover page_ (1).pdf';

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPdfError(null);
  }

  function onDocumentLoadError(error: Error) {
    console.error('Failed to load PDF:', error);
    setPdfError('Failed to load PDF. Please try downloading the file instead.');
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => {
      const newPage = prevPageNumber + offset;
      if (newPage < 1 || newPage > numPages) return prevPageNumber;
      return newPage;
    });
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* PDF Document */}
        <div className="w-full flex justify-center bg-gray-100 p-4 min-h-[500px]">
          {pdfError ? (
            <div className="flex flex-col items-center justify-center h-96 text-center">
              <div className="text-red-500 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-4">{pdfError}</p>
              <a 
                href={pdfUrl}
                download
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Download PDF Instead
              </a>
            </div>
          ) : (
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              className="w-full flex justify-center"
            >
              <Page 
                pageNumber={pageNumber} 
                width={800}
                className="shadow-md"
              />
            </Document>
          )}
        </div>
        
        {/* Controls */}
        <div className="flex items-center justify-between p-4 bg-gray-50 border-t">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => changePage(-1)} 
              disabled={pageNumber <= 1 || pdfError !== null}
              className="p-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <span className="text-sm font-medium">
              {pdfError ? 'PDF unavailable' : `${pageNumber} of ${numPages}`}
            </span>
            
            <button 
              onClick={() => changePage(1)} 
              disabled={pageNumber >= numPages || pdfError !== null}
              className="p-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
              aria-label="Next page"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex items-center space-x-3">
            <button 
              onClick={toggleFullscreen}
              disabled={pdfError !== null}
              className="p-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
              aria-label="Toggle fullscreen"
            >
              <Maximize className="w-5 h-5" />
            </button>
            
            <button 
              disabled={pdfError !== null}
              className="p-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            
            <button 
              disabled={pdfError !== null}
              className="p-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
              aria-label="More options"
            >
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Social Sharing */}
      <div className="mt-6 flex items-center space-x-4">
        <span className="text-sm font-medium text-gray-700">Share this:</span>
        <div className="flex space-x-3">
          <button className="text-blue-600 hover:text-blue-800">
            <span className="sr-only">Facebook</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="text-green-600 hover:text-green-800">
            <span className="sr-only">WhatsApp</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.498 14.382l-2.16-1.85a.9.9 0 00-1.292.108l-1.18 1.4a13.5 13.5 0 01-2.392-2.39l1.4-1.18a.9.9 0 00.108-1.292l-1.85-2.16a.9.9 0 00-1.292-.1l-1.34 1.01a2.5 2.5 0 00-.8 2.9 10.5 10.5 0 009.8 6.7 2.5 2.5 0 002.9-.8l1.01-1.34a.9.9 0 00-.1-1.292l-2.16-1.85zM12 2a10 10 0 00-8.66 15.02l-1.33 1.77a1 1 0 001.28 1.42l1.91-1.4A10 10 0 1012 2z" />
            </svg>
          </button>
          <button className="text-blue-500 hover:text-blue-700">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </button>
          <button className="text-red-600 hover:text-red-800">
            <span className="sr-only">Pinterest</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
