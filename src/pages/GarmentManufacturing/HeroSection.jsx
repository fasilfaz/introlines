import React from 'react';
import Button from '../../components/ui/Button';

const HeroSection = () => {
  return (
    <>
     {/* Second Hero Section - Large Title */}
      <section className="w-full bg-background-highlight py-12 sm:py-16 lg:py-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 
              className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[112px] font-bold leading-[1.1] text-accent-light"
              style={{ fontFamily: 'Epilogue' }}
            >
              Garment
              <br />
              Manufacturing in
              <br />
              India
            </h2>
          </div>
        </div>
      </section>
      {/* First Hero Section - Split Layout */}
      <section className="w-full bg-background-card">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row min-h-[300px] lg:min-h-[400px]">
            {/* Left Image Section */}
            <div className="w-full lg:w-1/2 relative">
              <div className="h-[300px] sm:h-[400px] lg:h-full">
                <img 
                  src="/Garment_Manufacturing.webp"
                  alt="Garment Manufacturing Process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Content Section */}
            <div className="w-full lg:w-1/2 bg-background-highlight flex items-center">
              <div className="px-6 sm:px-8 lg:px-6 py-8 sm:py-12 lg:py-6 w-full">
                <div className="max-w-lg">
                  {/* Main Heading */}
                  <h1 
                    className="text-[28px] sm:text-[32px] lg:text-[32px] xl:text-[36px] font-bold leading-[1.2] text-accent-light mb-4 sm:mb-6 lg:mb-3"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    All-in-One Garment
                    <br />
                    Manufacturing at
                    <br />
                    Low MOQ
                  </h1>

                  {/* Feature List */}
                  <div className="space-y-3 sm:space-y-4 lg:space-y-2 mb-6 sm:mb-8 lg:mb-4">
                    <div className="flex items-start gap-3">
                      <span className="text-accent-light text-lg font-bold mt-0.5 flex-shrink-0">+</span>
                      <div className="text-sm sm:text-base lg:text-sm text-accent-light leading-relaxed" style={{ fontFamily: 'Epilogue' }}>
                        <span className="font-bold">Fabric + Textile Design + Garment Manufacturing</span> all under
                        <br />
                        one roof.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-accent-light text-lg font-bold mt-0.5 flex-shrink-0">+</span>
                      <div className="text-sm sm:text-base lg:text-sm text-accent-light leading-relaxed" style={{ fontFamily: 'Epilogue' }}>
                        MOQ Starting at just <span className="font-bold">50+ pieces</span> per size.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-accent-light text-lg font-bold mt-0.5 flex-shrink-0">+</span>
                      <div className="text-sm sm:text-base lg:text-sm text-accent-light leading-relaxed font-bold" style={{ fontFamily: 'Epilogue' }}>
                        Custom Labels & Packaging
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-accent-light text-lg font-bold mt-0.5 flex-shrink-0">+</span>
                      <div className="text-sm sm:text-base lg:text-sm text-accent-light leading-relaxed font-bold" style={{ fontFamily: 'Epilogue' }}>
                        Fast Turnaround & Global Shipping
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    text="Chat Now"
                    fill_background_color="bg-primary-background"
                    text_color="text-primary-foreground"
                    border_border_radius="rounded-full"
                    className="px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold hover:bg-primary-dark transition-colors duration-200"
                    layout_width="auto"
                    padding=""
                    margin=""
                    position="relative"
                    variant="default"
                    size="medium"
                    onClick={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default HeroSection;