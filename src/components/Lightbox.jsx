import { useState } from 'react';

export default function Lightbox({ src, alt, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div 
        className="cursor-zoom-in relative overflow-hidden"
        onClick={() => setIsOpen(true)}
      >
        {children}
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => {
            setIsOpen(false);
            setIsZoomed(false);
          }}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
              setIsZoomed(false);
            }}
            className="absolute top-6 right-6 text-white text-3xl font-light hover:opacity-70 transition-opacity z-50 leading-none"
          >
            ×
          </button>

          {/* Zoom Toggle Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(!isZoomed);
            }}
            className="absolute top-6 left-6 text-white text-[11px] font-bold tracking-[.1em] uppercase border border-white px-4 py-2 hover:bg-white hover:text-black transition-all"
          >
            {isZoomed ? '🔍 Reset' : '🔍 Zoom'}
          </button>

          {/* Image Container */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              className={`max-w-full max-h-full object-contain transition-transform duration-300 ${
                isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(!isZoomed);
              }}
            />
          </div>

          {/* Info Text */}
          <div className="absolute bottom-6 left-6 right-6 text-white text-[11px] text-center opacity-60">
            Click image to zoom • Press ESC or click outside to close
          </div>
        </div>
      )}

      {/* CSS for cursor styles */}
      <style>{`
        .cursor-zoom-in {
          cursor: zoom-in;
        }
        .cursor-zoom-out {
          cursor: zoom-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease;
        }
      `}</style>
    </>
  );
}
