import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/About";
import ProgramsPage from "@/react-app/pages/Programs";
import PreviousWorkshopPage from "@/react-app/pages/PreviousWorkshop";
// import PastInternshipPage from "@/react-app/pages/PastInternship"; // Removed separate internship page
import WorkshopPage from "@/react-app/pages/Workshop";
// import GalleryPage from "@/react-app/pages/Gallery"; // Removed gallery page
import ContactPage from "@/react-app/pages/Contact";
// import RegisterPage from "@/react-app/pages/Register"; // Removed registration page
import ScrollToTop from "@/react-app/components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/previous-workshop" element={<PreviousWorkshopPage />} />
        {/* <Route path="/past-internship" element={<PastInternshipPage />} /> */} {/* Removed separate internship page */}
        <Route path="/workshop" element={<WorkshopPage />} />
        {/* <Route path="/gallery" element={<GalleryPage />} /> */} {/* Removed gallery route */}
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/register" element={<RegisterPage />} /> */} {/* Removed registration route */}
      </Routes>
    </Router>
  );
}