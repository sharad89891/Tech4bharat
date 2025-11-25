import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

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

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="py-6 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Gallery Images with Auto Rotation */}
          <div className="relative h-64 overflow-hidden rounded-xl">
            <div 
              className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full h-full relative"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-white font-bold text-xl mb-2">{image.title}</h3>
                      <p className="text-white/90 text-lg">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
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