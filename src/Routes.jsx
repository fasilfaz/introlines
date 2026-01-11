import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import GarmentManufacturingPage from './pages/GarmentManufacturing';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/garment-manufacturing" element={<GarmentManufacturingPage />} />
        <Route path="/" element={<GarmentManufacturingPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;