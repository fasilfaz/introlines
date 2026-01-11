

const ServiceFeatures = () => {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" fill="#D4AF37"/>
        </svg>
      ),
      title: 'Secure Payments',
      description: 'Pay via direct bank transfer or use reliable payment gateways such as Razorpay for international credit cards, or UPI for India. Fabriclore is funded by international VCs ensuring trust and compliance for each customer.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 1Z" fill="#D4AF37"/>
          <circle cx="12" cy="12" r="2" fill="#FFD700"/>
        </svg>
      ),
      title: 'Exceptional Technical Support',
      description: 'With Fabriclore you get a new age tech-enabled support from expert textile engineers. Whether your questions are related fabric specs, garmenting or commercial, our experts ensure peace of mind.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" fill="#D4AF37"/>
        </svg>
      ),
      title: 'Global Export Solutions',
      description: 'Experience seamless global exports with Introlines. We provide a direct gateway from India to international destinations with official export licensing and ultra-rapid logistics to deliver your goods beyond borders.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16Z" fill="#D4AF37"/>
        </svg>
      ),
      title: 'Sea Freight Services',
      description: 'Connect with the wider world through our premier maritime solutions. We handle the complexities of international waters to ship your bulky consignments with professional ease across nautical miles.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3C15 2.45 14.55 2 14 2H10C9.45 2 9 2.45 9 3V5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM11 5H13V7H11V5ZM6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13S8 13.67 8 14.5S7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5S16.67 13 17.5 13S19 13.67 19 14.5S18.33 16 17.5 16Z" fill="#D4AF37"/>
        </svg>
      ),
      title: 'Road Network Solutions',
      description: 'From your facility to the final destination. Utilize modern roadway networks for reliable, secure, and punctual door-to-door transit, ensuring your commitments are met with confidence.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="#D4AF37"/>
        </svg>
      ),
      title: 'Air Connect Services',
      description: 'Let your business reach new heights. In an evolving global economy, speed is everything. We turn thousands of kilometers into mere numbers with our trusted, time-sensitive air transit services.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L2 12H5V20H19V12H22L12 3ZM12 8.75C12.69 8.75 13.25 9.31 13.25 10S12.69 11.25 12 11.25S10.75 10.69 10.75 10S11.31 8.75 12 8.75ZM17 18H7V12.81L12 8.69L17 12.81V18Z" fill="#D4AF37"/>
        </svg>
      ),
      title: 'Warehousing & Storage',
      description: 'Sophisticated, high-capacity storage facilities for your inventory and goods. Maintain your momentum by delegating your logistics and storage responsibilities to our expert team for complete peace of mind.'
    }
  ];

  return (
    <section className="w-full bg-background-card">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[160px] py-[64px] sm:py-[96px] lg:py-[128px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-[38px]">
          {features?.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4 sm:gap-6 lg:gap-[24px] items-center text-center">
              {/* Icon Container */}
              <div className="flex justify-center items-center w-[64px] sm:w-[72px] lg:w-[80px] h-[64px] sm:h-[72px] lg:h-[80px] bg-background-subtle rounded-[32px] sm:rounded-[36px] lg:rounded-[40px] p-4 sm:p-5 lg:p-[24px]">
                {feature?.icon}
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