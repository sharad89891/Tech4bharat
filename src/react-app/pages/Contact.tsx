import Navigation from '@/react-app/components/Navigation'
import Contact from '@/react-app/components/Contact'
import Footer from '@/react-app/components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
