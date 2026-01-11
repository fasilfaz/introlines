import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import ServiceFeatures from '../GarmentManufacturing/ServiceFeatures';
import ManufacturingCapabilities from '../GarmentManufacturing/ManufacturingCapabilities';
import ProcessSteps from '../GarmentManufacturing/ProcessSteps';
import WhyFabriclore from '../GarmentManufacturing/WhyFabriclore';
import FAQ from '../GarmentManufacturing/FAQ';
import ContactForm from '../GarmentManufacturing/ContactForm';
import Footer from '../GarmentManufacturing/Footer';

const ServicesHeroSection = () => {
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
              Our
              <br />
              Services
            </h1>
            <p 
              className="text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed text-accent-light max-w-3xl mx-auto"
              style={{ fontFamily: 'Epilogue' }}
            >
              Comprehensive garment manufacturing and fabric sourcing solutions for global fashion brands
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Garment Manufacturing Services | Fabric Sourcing & Production | Fabriclore</title>
        <meta 
          name="description" 
          content="Comprehensive garment manufacturing services including fabric sourcing, production, quality control, and global shipping. Trusted by 500+ fashion brands worldwide." 
        />
        <meta property="og:title" content="Garment Manufacturing Services | Fabric Sourcing & Production | Fabriclore" />
        <meta property="og:description" content="Comprehensive garment manufacturing services including fabric sourcing, production, quality control, and global shipping. Trusted by 500+ fashion brands worldwide." />
      </Helmet>

      <main>
        <Header className="" />
        <ServicesHeroSection />
        <ServiceFeatures />
        <ManufacturingCapabilities />
        <ProcessSteps />
        <WhyFabriclore />
        <FAQ />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
};

export default Services;