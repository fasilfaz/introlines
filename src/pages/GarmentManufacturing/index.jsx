import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import HeroSection from './HeroSection';
import ManufacturingCapabilities from './ManufacturingCapabilities';
import TrustSection from './TrustSection';
import ServiceFeatures from './ServiceFeatures';
import ContactForm from './ContactForm';
import ProcessSteps from './ProcessSteps';
import FabricCatalogue from './FabricCatalogue';
import WhyFabriclore from './WhyFabriclore';
import ClientTestimonials from './ClientTestmonials';
import FAQ from './FAQ';
import CompanyDescription from './CompanyDescription';
import Footer from './Footer';

const GarmentManufacturing = () => {
  return (
    <>
      <Helmet>
        <title>Premium Garment Manufacturing Services | Women's Wear, Men's Wear & Accessories | Fabriclore</title>
        <meta 
          name="description" 
          content="Professional garment manufacturing services for women's wear, men's wear & accessories. Expert fabric sourcing, sustainable production, and quality assurance for global fashion brands." 
        />
        <meta property="og:title" content="Premium Garment Manufacturing Services | Women's Wear, Men's Wear & Accessories | Fabriclore" />
        <meta property="og:description" content="Professional garment manufacturing services for women's wear, men's wear & accessories. Expert fabric sourcing, sustainable production, and quality assurance for global fashion brands." />
      </Helmet>

      <main>
        <Header className="" />
        {/* <HeroSection /> */}
        {/* <ManufacturingCapabilities /> */}
        <TrustSection />
        <ServiceFeatures />
        <ContactForm />
        <ProcessSteps />
        <FabricCatalogue />
        <WhyFabriclore />
        {/* <ClientTestimonials /> */}
        {/* <FAQ /> */}
        {/* <CompanyDescription /> */}
        <Footer />
      </main>
    </>
  );
};

export default GarmentManufacturing;