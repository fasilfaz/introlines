import React from 'react';

const WhyIntrolines = () => {
  const reasons = [
    {
      title: '10 Years of Trust',
    },
    {
      title: 'The Largest library for fabric selection.',
    },
    {
      title: 'Tech-enabled Process',
    }
  ];

  return (
    <section className="w-full bg-background-highlight py-[64px] sm:py-[96px] lg:py-[128px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
          {/* Left Content */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[24px] w-full lg:w-[52%] mb-7 lg:mb-[28px]">
            {/* <img 
              src="/images/img_.png"
              alt="Why Introlines Icon"
              className="w-8 sm:w-9 lg:w-[40px] h-4 sm:h-4.5 lg:h-[20px]"
            /> */}
            
            <h2 
              className="text-[24px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold leading-[28px] sm:leading-[40px] md:leading-[46px] lg:leading-[50px] text-text-primary"
              style={{ fontFamily: 'Epilogue' }}
            >
              Why Introlines
            </h2>
            
            <p 
              className="text-sm sm:text-base font-normal leading-relaxed text-text-primary w-full lg:w-[90%] mt-2 lg:mt-[8px]"
              style={{ fontFamily: 'Epilogue' }}
            >
              We are more than a manufacturer — we are your brand's behind-the-scenes engine. Trusted by
              <br />
              emerging designers and global labels alike, Introlines is redefining what it means to
              <br />
              manufacture clothing: faster, smarter, and more personal.
            </p>
          </div>

          {/* Right Accordion */}
          <div className="w-full lg:w-[48%]">
            <div className="bg-primary-background rounded-lg sm:rounded-xl lg:rounded-[26px] p-4 sm:p-6 lg:p-[48px]">
              <div className="flex flex-col">
                {reasons?.map((reason, index) => (
                  <div key={index} className="py-4 sm:py-5 lg:py-[20px]">
                    <div className="flex justify-between items-center">
                      <span 
                        className="text-sm sm:text-base font-bold leading-snug text-text-inverse"
                        style={{ fontFamily: 'Epilogue' }}
                      >
                        {reason?.title}
                      </span>
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIntrolines;