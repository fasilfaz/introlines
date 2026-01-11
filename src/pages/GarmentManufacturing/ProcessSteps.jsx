import React from 'react';

const ProcessSteps = () => {
  return (
    <section className="w-full">
      {/* How it Works Section */}
      <div className="w-full bg-gradient-to-b from-background-card to-background-highlight py-[32px] sm:py-[48px] lg:py-[64px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[158px]">
          <div className="flex flex-col items-start gap-4 sm:gap-6 lg:gap-8">
            {/* How it Works Title */}
            <h1 
              className="text-[64px] sm:text-[96px] lg:text-[128px] xl:text-[160px] font-bold leading-[0.75] text-transparent bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text"
              style={{ 
                fontFamily: 'Epilogue',
                textShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
            >
              How it
              <br />
              Works?
            </h1>
            
            {/* Description */}
            <h2 
              className="text-[18px] sm:text-[24px] lg:text-[32px] font-bold leading-[24px] sm:leading-[30px] lg:leading-[41px] text-text-primary w-full lg:w-[44%]"
              style={{ fontFamily: 'Epilogue' }}
            >
              From idea to production - in 3 simple steps.
              <br />
              Get your collection delivered starting from
              <br />
              just 40 days.
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full bg-background-card py-[64px] sm:py-[96px] lg:py-[128px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0 mb-6 lg:mb-[48px]">
            {/* Left Steps Content */}
            <div className="w-full lg:w-[40%] flex flex-col gap-8 sm:gap-12 lg:gap-[98px] mt-6 lg:mt-[48px] lg:pr-8">
              {/* Step 1 */}
              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[32px]">
                <div className="flex items-center gap-4 sm:gap-6 lg:gap-[24px]">
                  <div className="w-[30px] sm:w-[35px] lg:w-[40px] h-[1px] sm:h-[1.5px] lg:h-[2px] bg-accent-color" />
                  <span 
                    className="text-sm sm:text-base font-bold leading-snug text-accent-color"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    01
                  </span>
                </div>
                
                <div className="flex flex-col gap-6 sm:gap-7 lg:gap-[30px]">
                  <h3 
                    className="text-[30px] sm:text-[45px] md:text-[52px] lg:text-[60px] font-bold leading-[36px] sm:leading-[48px] md:leading-[56px] lg:leading-[62px] text-accent-color"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    Design Handoff
                  </h3>
                  
                  <div className="space-y-4 sm:space-y-5 lg:space-y-6 mr-0 lg:mr-[16px]">
                    <p 
                      className="text-sm sm:text-base font-normal leading-relaxed text-accent-color"
                      style={{ fontFamily: 'Epilogue' }}
                    >
                      Start your Garment Manufacturing Journey by Choosing your
                      <br />
                      Preferred Option.
                      <br />
                      <span className="font-bold">Option 1-Share Your Design: </span>
                      Send us your sketches or tech pack
                      <br />
                      along with detailed measurements, and we will bring your vision to life.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-0">
                      <span 
                        className="text-sm sm:text-base font-bold leading-relaxed text-accent-color w-full sm:w-[38%]"
                        style={{ fontFamily: 'Epilogue' }}
                      >
                        OR
                        <br />
                        Option 2- Send a Sample:
                      </span>
                      <span 
                        className="text-sm sm:text-base font-normal leading-snug text-accent-color"
                        style={{ fontFamily: 'Epilogue' }}
                      >
                        Share a physical sample with us, and we will
                      </span>
                    </div>
                    
                    <p 
                      className="text-sm sm:text-base font-normal leading-snug text-accent-color"
                      style={{ fontFamily: 'Epilogue' }}
                    >
                      replicate it with utmost precision and care.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[32px]">
                <div className="flex items-center gap-4 sm:gap-6 lg:gap-[24px]">
                  <div className="w-[30px] sm:w-[35px] lg:w-[40px] h-[1px] sm:h-[1.5px] lg:h-[2px] bg-accent-color" />
                  <span 
                    className="text-sm sm:text-base font-bold leading-snug text-accent-color"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    02
                  </span>
                </div>
                
                <div className="flex flex-col gap-6 sm:gap-7 lg:gap-[30px]">
                  <h3 
                    className="text-[30px] sm:text-[45px] md:text-[52px] lg:text-[60px] font-bold leading-[36px] sm:leading-[48px] md:leading-[56px] lg:leading-[66px] text-accent-color"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    Pattern
                    <br />
                    Development &
                    <br />
                    Prototyping
                  </h3>
                  
                  <p 
                    className="text-sm sm:text-base font-normal leading-relaxed text-accent-color"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    <span className="font-normal">• We design</span>
                    <span className="font-bold"> custom patterns</span>
                    <span className="font-normal"> based on your techpack or physical
                    <br />
                    sample
                    <br />
                    • Patterns are turned into real garment in 3 sizes, to check fit, drape,
                    <br />
                    fall, sheer and garment strength
                    <br />
                    • You</span>
                    <span className="font-bold"> review them</span>
                    <span className="font-normal">—shipped to you for in-hand inspection or via video
                    <br />
                    —and share feedback</span>
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[32px]">
                <div className="flex items-center gap-4 sm:gap-6 lg:gap-[24px]">
                  <div className="w-[30px] sm:w-[35px] lg:w-[40px] h-[1px] sm:h-[1.5px] lg:h-[2px] bg-accent-color" />
                  <span 
                    className="text-sm sm:text-base font-bold leading-snug text-accent-color"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    03
                  </span>
                </div>
                
                <div className="flex flex-col gap-10 sm:gap-12 lg:gap-[58px]">
                  <h3 
                    className="text-[30px] sm:text-[45px] md:text-[52px] lg:text-[60px] font-bold leading-[36px] sm:leading-[48px] md:leading-[56px] lg:leading-[66px] text-accent-color"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    Production, QC &
                    <br />
                    Packaging
                  </h3>
                  
                  <div className="flex flex-col gap-6 sm:gap-7 lg:gap-[28px]">
                    <p 
                      className="text-sm sm:text-base font-normal leading-relaxed text-accent-color"
                      style={{ fontFamily: 'Epilogue' }}
                    >
                      <span className="font-normal">• </span>
                      <span className="font-bold">Bulk production</span>
                      <span className="font-normal"> begins (starting at 30-day turnaround)</span>
                    </p>
                    
                    <p 
                      className="text-sm sm:text-base font-normal leading-relaxed text-accent-color w-full lg:w-[70%]"
                      style={{ fontFamily: 'Epilogue' }}
                    >
                      <span className="font-normal">• Every piece undergoes strict </span>
                      <span className="font-bold">quality checks</span>
                      <span className="font-normal">:
                      <br />
                      – Spot check, thread cleanup, seam integrity, etc.</span>
                    </p>
                    
                    <div className="space-y-4 lg:space-y-[18px]">
                      <div className="space-y-1">
                        <p 
                          className="text-sm sm:text-base font-normal leading-relaxed text-accent-color"
                          style={{ fontFamily: 'Epilogue' }}
                        >
                          <span className="font-normal">• Finished with </span>
                          <span className="font-bold">premium labeling</span>
                          <span className="font-normal"> & </span>
                        </p>
                        
                        <div className="flex flex-col gap-1 lg:gap-[4px] -mt-[20px] lg:-mt-[20px]">
                          <p 
                            className="text-sm sm:text-base font-bold leading-snug text-accent-color self-end mr-[29px] sm:mr-[43px] lg:mr-[58px]"
                            style={{ fontFamily: 'Epilogue' }}
                          >
                            sustainable, export-grade
                          </p>
                          <p 
                            className="text-sm sm:text-base font-bold leading-snug text-accent-color"
                            style={{ fontFamily: 'Epilogue' }}
                          >
                            packaging
                          </p>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => {
                          const contactForm = document.getElementById('contact-form');
                          if (contactForm) {
                            contactForm.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="text-lg sm:text-xl lg:text-[24px] font-black leading-[24px] sm:leading-[28px] lg:leading-[33px] text-accent-color w-full lg:w-[28%] text-left hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none p-0"
                        style={{ fontFamily: 'Epilogue' }}
                      >
                        <span className="font-black">CHAT NOW</span>
                        <span className="font-bold"> ➜</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image - Sticky */}
            <div className="w-full lg:w-[50%] lg:sticky lg:top-8 lg:self-start">
              <div className="w-full max-w-[686px] h-[257px] sm:h-[385px] lg:h-[514px] rounded-md lg:rounded-[12px] overflow-hidden">
                <img 
                  src="/manufa.png"
                  alt="Manufacturing Process"
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: 'url(/images/img_img_mask_group.png)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;