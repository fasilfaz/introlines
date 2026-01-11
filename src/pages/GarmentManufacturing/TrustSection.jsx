import React from 'react';

const TrustSection = () => {
  return (
    <section className="w-full bg-background-card">
      <div 
        className="w-full h-[576px] sm:h-[768px] lg:h-[1152px] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: 'url(/bg.png)'
        }}
      >
        <div className="absolute inset-0 bg-background-overlay" />
        
        <div className="relative w-full h-full flex flex-col justify-center items-center gap-8 sm:gap-12 lg:gap-[48px] px-4 sm:px-6 lg:px-[56px] py-[200px] sm:py-[300px] lg:py-[400px]">
          <h2 
            className="text-[30px] sm:text-[45px] md:text-[52px] lg:text-[60px] font-bold leading-[36px] sm:leading-[52px] md:leading-[58px] lg:leading-[66px] text-center text-text-inverse max-w-4xl"
            style={{ fontFamily: 'Epilogue' }}
          >
            500+ Small To Large
            <br />
            Fashion Brands Trust
            <br />
            Fabriclore Across The
            <br />
            Globe.
          </h2>
          
          <p 
            className="text-sm sm:text-base font-bold leading-snug text-center text-background-card"
            style={{ fontFamily: 'Epilogue' }}
          >
            Get A Quote
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;