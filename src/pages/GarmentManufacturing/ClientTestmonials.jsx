import React from 'react';

const ClientTestimonials = () => {
  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };
  const testimonials = [
    {
      name: 'Beth Strickland',
      location: 'London, UK',
      testimonial: 'Honestly, working with Fabriclore feels like working with your own team. They are super quick, understand what we need, and always deliver quality stuff. Our collections have only gotten better since we started with them.',
      rating: 5
    },
    {
      name: 'Amara Bruton', 
      location: 'Los Angeles, USA',
      testimonial: 'We were struggling to find a reliable manufacturer who could handle both fabric and production. Fabriclore not only delivered on quality but also guided us through the process step by step. Their low MOQ was perfect for our startup.',
      isItalic: true,
      rating: 5
    },
    {
      name: 'Brittany Bennington',
      location: 'Santa Fe, New Mexico',
      testimonial: 'Fabriclore is not just a vendor for us, they are like partners. They helped us pick the right fabrics, worked on custom designs, and handled everything end-to-end. Could not have scaled our brand without them!',
      rating: 5
    }
  ];

  return (
    <section className="w-full bg-background-card py-[64px] sm:py-[96px] lg:py-[128px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[160px]">
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-[48px]">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[22px] w-full lg:w-[36%]">
            <p 
              className="text-sm sm:text-base font-bold leading-snug text-text-primary"
              style={{ fontFamily: 'Epilogue' }}
            >
              Trusted by 400+ brands across the USA.
            </p>
            
            <h2 
              className="text-[24px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold leading-[28px] sm:leading-[40px] md:leading-[46px] lg:leading-[50px] text-text-primary"
              style={{ fontFamily: 'Epilogue' }}
            >
              Hear It From Our Clients
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[24px]">
            {testimonials?.map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-background-section rounded-md lg:rounded-[12px] p-6 sm:p-8 lg:p-[40px] flex flex-col gap-4 sm:gap-6 lg:gap-[24px] ${index === 2 ? 'mb-4 sm:mb-6 lg:mb-[24px]' : ''}`}
              >
                {/* Star Rating */}
                <div className="flex justify-start">
                  <StarRating rating={testimonial?.rating} />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 sm:gap-2.5 lg:gap-[10px]">
                  <p 
                    className={`text-sm sm:text-base font-normal leading-relaxed text-text-primary ${testimonial?.isItalic ? 'italic' : ''}`}
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    {testimonial?.testimonial}
                  </p>
                </div>

                {/* Customer Name */}
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <p 
                      className="text-sm sm:text-base font-bold leading-snug text-text-primary"
                      style={{ fontFamily: 'Epilogue' }}
                    >
                      {testimonial?.name}
                    </p>
                    <p 
                      className="text-sm sm:text-base font-normal leading-snug text-text-secondary"
                      style={{ fontFamily: 'Epilogue' }}
                    >
                      {testimonial?.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;