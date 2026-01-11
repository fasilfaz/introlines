import React from 'react';

const WhyFabriclore = () => {
  const reasons = [
    {
      title: '10 Years of Trust',
      icon: '/images/img_arrow_down.svg'
    },
    {
      title: 'The Largest library for fabric selection.',
      icon: '/images/img_arrow_down.svg'
    },
    {
      title: 'Tech-enabled Process',
      icon: '/images/img_arrow_down.svg'
    }
  ];

  return (
    <section className="w-full bg-background-highlight py-[64px] sm:py-[96px] lg:py-[128px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
          {/* Left Content */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[24px] w-full lg:w-[52%] mb-7 lg:mb-[28px]">
            <img 
              src="/images/img_.png"
              alt="Why Fabriclore Icon"
              className="w-8 sm:w-9 lg:w-[40px] h-4 sm:h-4.5 lg:h-[20px]"
            />
            
            <h2 
              className="text-[24px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold leading-[28px] sm:leading-[40px] md:leading-[46px] lg:leading-[50px] text-text-primary"
              style={{ fontFamily: 'Epilogue' }}
            >
              Why Fabriclore
            </h2>
            
            <p 
              className="text-sm sm:text-base font-normal leading-relaxed text-text-primary w-full lg:w-[90%] mt-2 lg:mt-[8px]"
              style={{ fontFamily: 'Epilogue' }}
            >
              We are more than a manufacturer — we are your brand's behind-the-scenes engine. Trusted by
              <br />
              emerging designers and global labels alike, Fabriclore is redefining what it means to
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
                      
                      <button
                        className="flex justify-center items-center w-8 sm:w-9 lg:w-[40px] h-8 sm:h-9 lg:h-[40px] bg-white bg-opacity-10 rounded-md lg:rounded-[12px] p-1.5 sm:p-2 lg:p-[8px] hover:bg-opacity-20 transition-all duration-200"
                        aria-label={`Toggle ${reason?.title}`}
                      >
                        <img 
                          src={reason?.icon}
                          alt=""
                          className="w-4 sm:w-5 lg:w-[24px] h-4 sm:h-5 lg:h-[24px]"
                        />
                      </button>
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

export default WhyFabriclore;