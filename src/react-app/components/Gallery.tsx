import { useState } from 'react'
import { X } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const panoramicTop = {
    url: 'https://mocha-cdn.com/019aac49-d960-7ba3-a8eb-167145646896/WhatsApp-Image-2025-11-22-at-11.19.56-PM-(3).jpeg',
    title: 'Workshop Gathering',
    description: 'Complete team at our AI workshop'
  }

  const images = [
   
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
    }
  ]

  const panoramicBottom = {
    url: 'https://mocha-cdn.com/019aac49-d960-7ba3-a8eb-167145646896/WhatsApp-Image-2025-11-22-at-11.19.56-PM-(4).jpeg',
    title: 'Full Auditorium',
    description: 'Large group workshop session'
  }

  return (
    <div className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Gallery Images with Floating Animation */}
          <div className="mb-16">
            {/* Top Panoramic Image */}
            <div 
              className="mb-6 rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-300 group floating-element"
            >
              <div className="relative w-full panoramic-aspect">
                <img
                  src={panoramicTop.url}
                  alt={panoramicTop.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-1">{panoramicTop.title}</h3>
                  <p className="text-white/90 text-sm sm:text-base">{panoramicTop.description}</p>
                </div>
              </div>
            </div>

            {/* Main Collage */}
            <div className="gallery-collage mb-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="gallery-item group relative overflow-hidden rounded-2xl cursor-pointer hover:scale-[1.02] transition-all duration-300 floating-element"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div className="h-full overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1">{image.title}</h3>
                    <p className="text-white/90 text-xs sm:text-sm">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Panoramic Image */}
            <div 
              className="mt-6 rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-300 group floating-element"
              style={{ animationDelay: '2s' }}
            >
              <div className="relative w-full panoramic-aspect">
                <img
                  src={panoramicBottom.url}
                  alt={panoramicBottom.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-1">{panoramicBottom.title}</h3>
                  <p className="text-white/90 text-sm sm:text-base">{panoramicBottom.description}</p>
                </div>
              </div>
            </div>
          </div>
          
          <style>{`
            .panoramic-aspect {
              padding-bottom: 40%;
            }
            
            .gallery-collage {
              display: grid;
              gap: 1.5rem;
              width: 100%;
              grid-template-columns: repeat(2, 1fr);
              max-width: 1200px;
              margin: 0 auto;
            }
            
            .gallery-item {
              aspect-ratio: 1;
              min-height: 0;
              min-width: 0;
            }
            
            .floating-element {
              animation: floatRightToLeft 20s linear infinite;
            }
            
            @keyframes floatRightToLeft {
              0% {
                transform: translateX(100vw);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            
            @media (max-width: 768px) {
              .panoramic-aspect {
                padding-bottom: 56%;
              }
              
              .gallery-collage {
                gap: 1rem;
              }
            }
            
            @media (max-width: 640px) {
              .panoramic-aspect {
                padding-bottom: 75%;
              }
              
              .gallery-collage {
                grid-template-columns: 1fr;
                gap: 1rem;
              }
            }
          `}</style>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
              >
                <X className="w-6 h-6 text-white" />
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