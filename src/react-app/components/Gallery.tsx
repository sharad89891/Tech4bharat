import { useState } from 'react'
import { X } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    {
      url: 'https://mocha-cdn.com/019aac49-d960-7ba3-a8eb-167145646896/WhatsApp-Image-2025-11-22-at-11.19.56-PM-(3).jpeg',
      title: 'Workshop Gathering',
      description: 'Complete team at our AI workshop'
    },
    {
      url: 'https://mocha-cdn.com/019aac49-d960-7ba3-a8eb-167145646896/WhatsApp-Image-2025-11-22-at-11.19.56-PM.jpeg',
      title: 'Hands-on Training',
      description: 'Interactive learning experience'
    },
    {
      url: 'https://mocha-cdn.com/019aac49-d960-7ba3-a8eb-167145646896/WhatsApp-Image-2025-11-22-at-11.19.56-PM-(1).jpeg',
      title: 'Team Collaboration',
      description: 'Students working together'
    },
    {
      url: 'https://mocha-cdn.com/019aac49-d960-7ba3-a8eb-167145646896/WhatsApp-Image-2025-11-22-at-11.19.56-PM-(2).jpeg',
      title: 'Learning Sessions',
      description: 'Active participation in workshop'
    },
    {
      url: 'https://mocha-cdn.com/019aac49-d960-7ba3-a8eb-167145646896/WhatsApp-Image-2025-11-22-at-11.19.57-PM.jpeg',
      title: 'Workshop Moments',
      description: 'Memorable learning experiences'
    },
    {
      url: 'https://mocha-cdn.com/019aac49-d960-7ba3-a8eb-167145646896/WhatsApp-Image-2025-11-22-at-11.19.56-PM-(4).jpeg',
      title: 'Full Auditorium',
      description: 'Large group workshop session'
    }
  ]

  return (
    <div className="py-6 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Marquee Gallery */}
          <div className="relative h-48 overflow-hidden rounded-xl">
            {/* Marquee animation container */}
            <div className="absolute inset-0 flex" style={{ animation: 'marquee 30s linear infinite' }}>
              {/* First set of images */}
              {images.map((image, index) => (
                <div
                  key={`first-${index}`}
                  className="mx-2 flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set of images for seamless loop */}
              {images.map((image, index) => (
                <div
                  key={`second-${index}`}
                  className="mx-2 flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Fade overlays for smooth edges */}
            <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
          </div>
          
          <style>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
          
          {/* Lightbox Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <img
                src={selectedImage}
                alt="Full size"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}