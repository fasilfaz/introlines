import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import GarmentManufacturingPage from './pages/GarmentManufacturing';
import CatalogPage from './pages/Catalog';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GarmentManufacturingPage />} />
        <Route path="/garment-manufacturing" element={<GarmentManufacturingPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;