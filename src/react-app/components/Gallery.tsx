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
          {/* Gallery Images in a Single Row */}
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 group"
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="relative w-full h-full">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2">
                    <h3 className="text-white font-bold text-xs mb-1 truncate">{image.title}</h3>
                    <p className="text-white/90 text-xs truncate">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Lightbox Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
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