import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
const HomePage = lazy(() => import("./pages/home/HomePage"));
const AboutPage = lazy(() => import("./pages/about/AboutPage"));
const SectorsPage = lazy(() => import("./pages/sectors/SectorsPage"));
const ProjectsPage = lazy(() => import("./pages/projects/ProjectsPage"));
const AmenitiesPage = lazy(() => import("./pages/amenities/AmenitiesPage"));
const ContactPage = lazy(() => import("./pages/contact/ContactPage"));
const RealEstatePage = lazy(() => import("./pages/real-estate/RealEstatePage"));
const CorporatePage = lazy(() => import("./pages/corporate/CorporatePage"));
const EducationPage = lazy(() => import("./pages/education/EducationPage"));
const HealthcarePage = lazy(() => import("./pages/healthcare/HealthcarePage"));
const TimelinePage = lazy(() => import("./pages/timeline/TimelinePage"));
const ScrollExpansionPage = lazy(() => import("./pages/scroll-expansion/ScrollExpansionPage"));
const ZoomParallaxPage = lazy(() => import("./pages/zoom-parallax/ZoomParallaxPage"));
const FeatureCarouselPage = lazy(() => import("./pages/feature-carousel/FeatureCarouselPage"));
const IntegrationsDemoPage = lazy(() => import("./pages/integrations/IntegrationsDemoPage"));
const TeamShowcasePage = lazy(() => import("./pages/team-showcase/TeamShowcasePage"));
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
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-[#f8f9ff] text-[#00263f]">
            Loading...
          </div>
        }
      >
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
            <Route path="/education" element={<EducationPage />} />
            <Route path="/healthcare" element={<HealthcarePage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/scroll-expansion-demo" element={<ScrollExpansionPage />} />
            <Route path="/zoom-parallax-demo" element={<ZoomParallaxPage />} />
            <Route path="/feature-carousel-demo" element={<FeatureCarouselPage />} />
            <Route path="/integrations-demo" element={<IntegrationsDemoPage />} />
            <Route path="/team-showcase-demo" element={<TeamShowcasePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
