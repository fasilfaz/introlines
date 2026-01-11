import React from 'react';

const ServiceFeatures = () => {
  const features = [
    {
      icon: '/images/img_frame.svg',
      title: 'Secure Payments',
      description: 'Pay via direct bank transfer or use reliable payment gateways such as Razorpay for international credit cards, or UPI for India. Fabriclore is funded by international VCs ensuring trust and compliance for each customer.'
    },
    {
      icon: '/images/img_frame_lime_900.svg',
      title: 'Exceptional Technical Support',
      description: 'With Fabriclore you get a new age tech-enabled support from expert textile engineers. Whether your questions are related fabric specs, garmenting or commercial, our experts ensure peave of mind.'
    },
    {
      icon: '/images/img_frame_lime_900_32x32.svg',
      title: 'Worldwide Shipping',
      description: 'Fabriclore works with top shippers including DHL, FedEx, ARAMEX, UPS to ensure lastmile global delivery. For more exonomical shipping we also offer sea routes for select location. High quality safe packaging is always a given from Fabriclore.'
    }
  ];

  return (
    <section className="w-full bg-background-card">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[160px] py-[64px] sm:py-[96px] lg:py-[128px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[38px]">
          {features?.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4 sm:gap-6 lg:gap-[24px] items-center text-center">
              {/* Icon Container */}
              <div className="flex justify-center items-center w-[64px] sm:w-[72px] lg:w-[80px] h-[64px] sm:h-[72px] lg:h-[80px] bg-background-subtle rounded-[32px] sm:rounded-[36px] lg:rounded-[40px] p-4 sm:p-5 lg:p-[24px]">
                <img 
                  src={feature?.icon}
                  alt=""
                  className="w-6 sm:w-7 lg:w-[32px] h-6 sm:h-7 lg:h-[32px]"
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[14px]">
                <h3 
                  className="text-lg sm:text-xl lg:text-[24px] font-bold leading-[22px] sm:leading-[24px] lg:leading-[25px] text-center text-text-primary"
                  style={{ fontFamily: 'Epilogue' }}
                >
                  {feature?.title}
                </h3>
                
                <p 
                  className="text-sm sm:text-base font-normal leading-relaxed text-center text-text-primary px-1 sm:px-2 lg:px-[4px]"
                  style={{ fontFamily: 'Epilogue' }}
                >
                  {feature?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;