import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import ContactForm from '../GarmentManufacturing/ContactForm';
import ServiceFeatures from '../GarmentManufacturing/ServiceFeatures';
import Footer from '../GarmentManufacturing/Footer';

const ContactHeroSection = () => {
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
              Contact
              <br />
              Us
            </h1>
            <p 
              className="text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed text-accent-light max-w-3xl mx-auto"
              style={{ fontFamily: 'Epilogue' }}
            >
              Get in touch with our textile experts for your garment manufacturing needs
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

const ContactInfoSection = () => {
  return (
    <section className="w-full bg-background-card py-[64px] sm:py-[96px] lg:py-[128px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[158px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Main Offices */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <h2 
              className="text-[24px] sm:text-[32px] lg:text-[36px] font-bold leading-tight text-text-primary"
              style={{ fontFamily: 'Epilogue' }}
            >
              Our Offices
            </h2>
            
            <div className="flex flex-col gap-6 lg:gap-8">
              {/* India Office */}
              <div className="bg-background-section rounded-lg p-6 lg:p-8">
                <h3 
                  className="text-lg font-bold text-text-primary mb-4"
                  style={{ fontFamily: 'Epilogue' }}
                >
                  INDIA (Head Office)
                </h3>
                <p 
                  className="text-sm sm:text-base font-normal leading-relaxed text-text-secondary"
                  style={{ fontFamily: 'Epilogue' }}
                >
                  No.25(2)/22, Ground Floor,
                  <br />
                  Opp Vinayakar Kovil,
                  <br />
                  Kumarapuram 1st Street Ryapuram,
                  <br />
                  Tirupur, TN 641601 IN
                  <br />
                  <span className="font-semibold text-text-primary">+91 8681 800 075</span>
                </p>
              </div>
              
              {/* UAE Office */}
              <div className="bg-background-section rounded-lg p-6 lg:p-8">
                <h3 
                  className="text-lg font-bold text-text-primary mb-4"
                  style={{ fontFamily: 'Epilogue' }}
                >
                  UAE
                </h3>
                <p 
                  className="text-sm sm:text-base font-normal leading-relaxed text-text-secondary"
                  style={{ fontFamily: 'Epilogue' }}
                >
                  AL MADEENA GARMENTS TRADING L.L.C
                  <br />
                  Office No. 101, 1st Floor,
                  <br />
                  Oppo. Mashreq Bank, Murshid Bazar,
                  <br />
                  Deira Dubai - U.A.E.
                  <br />
                  <span className="font-semibold text-text-primary">+971 502 289 916</span>
                  <br />
                  <span className="font-semibold text-text-primary">+971 56 504 9779</span>
                </p>
              </div>
            </div>
          </div>

          {/* Branches */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <h2 
              className="text-[24px] sm:text-[32px] lg:text-[36px] font-bold leading-tight text-text-primary"
              style={{ fontFamily: 'Epilogue' }}
            >
              Our Branches
            </h2>
            
            <div className="bg-background-section rounded-lg p-6 lg:p-8">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center py-2 border-b border-border-primary">
                  <span className="font-medium text-text-primary" style={{ fontFamily: 'Epilogue' }}>TIRUPUR</span>
                  <span className="text-text-secondary" style={{ fontFamily: 'Epilogue' }}>+91 8681 800 073</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border-primary">
                  <span className="font-medium text-text-primary" style={{ fontFamily: 'Epilogue' }}>BANGALORE</span>
                  <span className="text-text-secondary" style={{ fontFamily: 'Epilogue' }}>+91 8681 800 095</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border-primary">
                  <span className="font-medium text-text-primary" style={{ fontFamily: 'Epilogue' }}>CALICUT</span>
                  <span className="text-text-secondary" style={{ fontFamily: 'Epilogue' }}>+91 8681 800 076</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border-primary">
                  <span className="font-medium text-text-primary" style={{ fontFamily: 'Epilogue' }}>COCHIN</span>
                  <span className="text-text-secondary" style={{ fontFamily: 'Epilogue' }}>+91 8681 800 072</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border-primary">
                  <span className="font-medium text-text-primary" style={{ fontFamily: 'Epilogue' }}>DELHI</span>
                  <span className="text-text-secondary" style={{ fontFamily: 'Epilogue' }}>+91 8681 800 081</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-text-primary" style={{ fontFamily: 'Epilogue' }}>MUMBAI</span>
                  <span className="text-text-secondary" style={{ fontFamily: 'Epilogue' }}>+91 8681 800 079</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Get in Touch with Textile Experts | Fabriclore</title>
        <meta 
          name="description" 
          content="Contact Fabriclore for garment manufacturing inquiries. Reach our textile experts through our global offices in India and UAE. Get quotes and consultation." 
        />
        <meta property="og:title" content="Contact Us | Get in Touch with Textile Experts | Fabriclore" />
        <meta property="og:description" content="Contact Fabriclore for garment manufacturing inquiries. Reach our textile experts through our global offices in India and UAE. Get quotes and consultation." />
      </Helmet>

      <main>
        <Header className="" />
        <ContactHeroSection />
        <ContactForm />
        <ContactInfoSection />
        <ServiceFeatures />
        <Footer />
      </main>
    </>
  );
};

export default Contact;