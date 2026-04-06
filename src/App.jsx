import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import SectorsPage from "./pages/sectors/SectorsPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import AmenitiesPage from "./pages/amenities/AmenitiesPage";
import ContactPage from "./pages/contact/ContactPage";
import RealEstatePage from "./pages/real-estate/RealEstatePage";
import CorporatePage from "./pages/corporate/CorporatePage";
import EducationPage from "./pages/education/EducationPage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sectors" element={<SectorsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/amenities" element={<AmenitiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/real-estate" element={<RealEstatePage />} />
          <Route path="/corporate" element={<CorporatePage />} />
          <Route path="/education"   element={<EducationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
