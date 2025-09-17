import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components for Home page
import Nav from "./Componants/Home/Nav/Nav";
import Hero from "./Componants/Home/Hero/Hero";
import Gallery from "./Componants/Home/gallery/Gallery";
import Gallery2 from "./Componants/Home/Gallery2/Gallery2";
import Download from "./Componants/Home/download/Download";
import FeatureProducts from "./Componants/Home/FeatureProducts/FeatureProducts";
import QualityPaintsSection from "./Componants/Home/QualityPaintsSection/QualityPaintsSection";
import ManufacturingProcess from "./Componants/Home/ManufacturingProcess/ManufacturingProcess";
import ColorCard from "./Componants/Home/ColorCard/ColorCard";
import ContactIcons from "./Componants/Home/ContactIcons/ContactIcons";
import Footer from "./Componants/Home/Footer/Footer";
import PaintingService from "./Componants/Home/PaintingService/PaintingService";

// ProductPage components
import ProductPage from "./Componants/Product/Product"; // <-- Import your Products component here
import ConsultancyToggle from "./Componants/Services/ConsultancyToggle/ConsultancyToggle";
// ServicesPage components
import ServicesPage from "./Componants/Services/Services";
import WhatsAppChatButton from "./Componants/Home/WhatsAppChatButton/WhatsAppChatButton";
// AboutPage components
import AboutPage from "./Componants/About/AboutUs";

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-red-600">
    404 - Page Not Found
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <PaintingService />
              <Gallery />
              <Gallery2 />
              <Download />
              <FeatureProducts />
              <QualityPaintsSection />
              <ManufacturingProcess />
              <ColorCard />
            </>
          }
        />

        {/* Products Page */}
        <Route
          path="/products"
          element={
            <>
              <ProductPage />
              <ConsultancyToggle />
            </>
          }
        />

        {/* Other Pages */}
        <Route
          path="/services"
          element={
            <>
              <ServicesPage />
              <ConsultancyToggle />
            </>
          }
        />
        <Route
          path="/aboutus"
          element={
            <>
              <AboutPage />
            </>
          }
        />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <WhatsAppChatButton />
      <ContactIcons />
      <Footer />
    </BrowserRouter>
  );
}
