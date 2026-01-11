import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import FabricCatalogue from '../GarmentManufacturing/FabricCatalogue';
import ServiceFeatures from '../GarmentManufacturing/ServiceFeatures';
import ContactForm from '../GarmentManufacturing/ContactForm';
import Footer from '../GarmentManufacturing/Footer';

const CatalogHeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-background-highlight py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 
              className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[112px] font-bold leading-[1.1] text-accent-light mb-6"
              style={{ fontFamily: 'Epilogue' }}
            >
              Fabric
              <br />
              Catalog
            </h1>
            <p 
              className="text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed text-accent-light max-w-3xl mx-auto"
              style={{ fontFamily: 'Epilogue' }}
            >
              Discover our extensive collection of premium fabrics sourced from the finest mills worldwide
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

const Catalog = () => {
  return (
    <>
      <Helmet>
        <title>Premium Fabric Catalog | RFD, Mill Dyed & Printed Fabrics | Fabriclore</title>
        <meta 
          name="description" 
          content="Browse our extensive fabric catalog featuring RFD fabrics, mill dyed fabrics, and digital printed fabrics. Quality materials for fashion designers and brands worldwide." 
        />
        <meta property="og:title" content="Premium Fabric Catalog | RFD, Mill Dyed & Printed Fabrics | Fabriclore" />
        <meta property="og:description" content="Browse our extensive fabric catalog featuring RFD fabrics, mill dyed fabrics, and digital printed fabrics. Quality materials for fashion designers and brands worldwide." />
      </Helmet>

      <main>
        <Header className="" />
        <CatalogHeroSection />
        <FabricCatalogue />
        <ServiceFeatures />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
};

export default Catalog;