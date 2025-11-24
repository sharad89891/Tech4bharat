import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/About";
import ProgramsPage from "@/react-app/pages/Programs";
import PreviousWorkshopPage from "@/react-app/pages/PreviousWorkshop";
import PastInternshipPage from "@/react-app/pages/PastInternship";
import WorkshopPage from "@/react-app/pages/Workshop";
import GalleryPage from "@/react-app/pages/Gallery";
import ContactPage from "@/react-app/pages/Contact";
import RegisterPage from "@/react-app/pages/Register";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/previous-workshop" element={<PreviousWorkshopPage />} />
        <Route path="/past-internship" element={<PastInternshipPage />} />
        <Route path="/workshop" element={<WorkshopPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}