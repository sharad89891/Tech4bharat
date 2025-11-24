import Navigation from '@/react-app/components/Navigation'
import Gallery from '@/react-app/components/Gallery'
import Footer from '@/react-app/components/Footer'

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Gallery />
      </div>
      <Footer />
    </div>
  )
}
