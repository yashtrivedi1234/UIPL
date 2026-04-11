import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import HealthcarePage from "./pages/healthcare/HealthcarePage";
import TimelinePage from "./pages/timeline/TimelinePage";
import ScrollExpansionPage from "./pages/scroll-expansion/ScrollExpansionPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
          <Route path="/healthcare" element={<HealthcarePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/scroll-expansion-demo" element={<ScrollExpansionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
