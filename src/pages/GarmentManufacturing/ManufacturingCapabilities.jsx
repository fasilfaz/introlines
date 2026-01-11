import React from 'react';

const ManufacturingCapabilities = () => {
  return (
    <section className="w-full bg-background-card">
      
      
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[158px] pt-[60px] sm:pt-[80px] lg:pt-[128px] pb-[60px] sm:pb-[80px] lg:pb-[126px]">
        <div className="flex flex-col gap-[30px] sm:gap-[40px] lg:gap-[46px]">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center">
            <div className="flex flex-col gap-[16px] sm:gap-[20px] lg:gap-[26px] w-full lg:w-[44%]">
              <h1 
                className="text-[24px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold leading-[28px] sm:leading-[40px] md:leading-[46px] lg:leading-[52px] text-text-primary"
                style={{ fontFamily: 'Epilogue' }}
              >
                Garment Manufacturing
                <br />
                Capabilities
              </h1>
              
              <div className="flex flex-col gap-[16px] sm:gap-[20px] lg:gap-[32px]">
                <p 
                  className="text-sm sm:text-base font-normal leading-snug text-text-primary"
                  style={{ fontFamily: 'Epilogue' }}
                >
                  Built to Support Global Fashion Brands from Idea to Production.
                </p>
                
                <p 
                  className="text-sm sm:text-base font-normal leading-relaxed text-text-primary w-full lg:w-[96%]"
                  style={{ fontFamily: 'Epilogue' }}
                >
                  Whether you are creating for fashion brands, retail shelves, or e-commerce drops —
                  <br />
                  Fabriclore's garment manufacturing capabilities are tailored for quality, customization
                  <br />
                  and speed. From clothing to accessories, our production ecosystem adapts to your
                  <br />
                  brand's goals.
                </p>
              </div>
            </div>
          </div>

          {/* Product Categories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[48px]">
            {/* Women's Wear */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[20px] items-center">
              <img 
                src="/Fabriclore_Women_s_Wear.jpg.png"
                alt="Women's Wear Manufacturing"
                className="w-full max-w-[500px] h-[250px] sm:h-[350px] lg:h-[500px] object-cover rounded-lg sm:rounded-xl lg:rounded-[26px]"
              />
              
              <div className="w-full max-w-[500px] flex flex-col">
                <h2 
                  className="text-[18px] sm:text-[24px] lg:text-[32px] font-bold leading-[22px] sm:leading-[28px] lg:leading-[33px] text-text-primary mb-4 sm:mb-6 lg:mb-[60px]"
                  style={{ fontFamily: 'Epilogue' }}
                >
                  Women's Wear
                </h2>
                
                <div className="space-y-3 sm:space-y-4">
                  <p 
                    className="text-sm sm:text-base font-bold leading-relaxed text-text-primary"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    Trend-driven. Tailor-made. Technically flawless.
                    <br />
                    <span className="font-normal">
                      We specialize in women's silhouettes that blend global trends
                      <br />
                      with flawless execution
                    </span>
                  </p>
                  
                  <p 
                    className="text-sm sm:text-base leading-relaxed text-text-primary"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    <span className="font-bold">Categories includes:</span>
                    <span className="font-normal"> Tops & Blouses, Western wear, Beach</span>
                  </p>
                  
                  <p 
                    className="text-sm sm:text-base font-normal leading-snug text-text-primary"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    wear, Lounge wear, Casual wear, and Bottom wear.
                  </p>
                  
                  <p 
                    className="text-sm sm:text-base leading-relaxed text-text-primary"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    <span className="font-bold">Fabric Expertise:</span>
                    <span className="font-normal"> Cotton, linen, viscose, rayon, silk blends,</span>
                  </p>
                  
                  <p 
                    className="text-sm sm:text-base font-normal leading-relaxed text-text-primary"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    polyester blends, sustainable fabrics like LENZING, BEMBERG &
                    <br />
                    LIVA and Brila Viscose Range of fabrics
                  </p>
                </div>
              </div>
            </div>

            {/* Men's Wear */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[20px] items-center">
              <img 
                src="/Fabriclore_Men_s_Wear.jpg.png"
                alt="Men's Wear Manufacturing"
                className="w-full max-w-[500px] h-[250px] sm:h-[350px] lg:h-[500px] object-cover rounded-lg sm:rounded-xl lg:rounded-[26px]"
              />
              
              <div className="w-full max-w-[500px] flex flex-col">
                <h2 
                  className="text-[18px] sm:text-[24px] lg:text-[32px] font-bold leading-[22px] sm:leading-[28px] lg:leading-[33px] text-text-primary mb-4 sm:mb-6 lg:mb-[60px]"
                  style={{ fontFamily: 'Epilogue' }}
                >
                  Men's Wear
                </h2>
                
                <div className="space-y-3 sm:space-y-4">
                  <p 
                    className="text-sm sm:text-base font-bold leading-relaxed text-text-primary"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    Function meets finesse. Made to move, made to last.
                    <br />
                    <span className="font-normal">
                      Our men's wear production focuses on fit, fabric strength, and
                      <br />
                      finish — whether it is everyday essentials or elevated casuals.
                    </span>
                  </p>
                  
                  <p 
                    className="text-sm sm:text-base leading-relaxed text-text-primary"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    <span className="font-bold">Categories include:</span>
                    <span className="font-normal"> Casual wear, Formal wear, Active wear,</span>
                  </p>
                  
                  <p 
                    className="text-sm sm:text-base font-normal leading-snug text-text-primary"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    Ethnic wear, Lounge wear, and Sustainable wear
                  </p>
                  
                  <p 
                    className="text-sm sm:text-base leading-relaxed text-text-primary"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    <span className="font-bold">Fabric Expertise: </span>
                    <span className="font-normal">Structured shirting fabrics (poplin, twill,</span>
                  </p>
                  
                  <p 
                    className="text-sm sm:text-base font-normal leading-relaxed text-text-primary"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    oxford), bottom weights (twill, denim), sustainable fabrics, and
                    <br />
                    blends.
                  </p>
                </div>
              </div>
            </div>

            {/* Accessories */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[20px] items-center">
              <img 
                src="/Fabriclore_Fashion_Accessories_-_2.jpg.png"
                alt="Accessories Manufacturing"
                className="w-full max-w-[500px] h-[250px] sm:h-[350px] lg:h-[500px] object-cover rounded-lg sm:rounded-xl lg:rounded-[26px]"
              />
              
              <div className="w-full max-w-[500px] flex flex-col">
                <h2 
                  className="text-[18px] sm:text-[24px] lg:text-[32px] font-bold leading-[22px] sm:leading-[28px] lg:leading-[33px] text-text-primary mb-4 sm:mb-6 lg:mb-[58px]"
                  style={{ fontFamily: 'Epilogue' }}
                >
                  Accessories
                </h2>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="space-y-[18px]">
                    <p 
                      className="text-sm sm:text-base font-bold leading-relaxed text-text-primary"
                      style={{ fontFamily: 'Epilogue' }}
                    >
                      The finishing touch to complete your collection.
                      <br />
                      <span className="font-normal">
                        From statement pieces to essentials, our accessories
                        <br />
                        manufacturing extends your product line with consistency in
                        <br />
                        quality and style.
                      </span>
                    </p>
                    
                    <p 
                      className="text-sm sm:text-base leading-relaxed text-text-primary ml-5"
                      style={{ fontFamily: 'Epilogue' }}
                    >
                      <span className="font-bold">Categories includes:</span>
                      <span className="font-normal"> Scarves, stoles, scrunchies, bags, ties,</span>
                    </p>
                  </div>
                  
                  <p 
                    className="text-sm sm:text-base font-normal leading-snug text-text-primary"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    Bandhanas, Lining materials, and more.
                  </p>
                  
                  <p 
                    className="text-sm sm:text-base leading-relaxed text-text-primary ml-5"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    <span className="font-bold">Material Options: </span>
                    <span className="font-normal">Woven fabrics, lightweight blends,</span>
                  </p>
                  
                  <p 
                    className="text-sm sm:text-base font-normal leading-snug text-text-primary"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    sustainable and natural fiber blends.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Made-ups Section */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[24px] mt-8 sm:mt-12 lg:mt-[62px]">
            <img 
              src="/freepik__the-style-is-candid-image-photography-with-natural__94574.png.png"
              alt="Made-ups Manufacturing"
              className="w-full lg:w-[30%] max-w-[500px] h-[187px] sm:h-[280px] lg:h-[374px] object-cover rounded-lg sm:rounded-xl lg:rounded-[26px]"
            />
            
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[22px] lg:flex-1">
              <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[20px]">
                <h2 
                  className="text-[18px] sm:text-[24px] lg:text-[32px] font-bold leading-[22px] sm:leading-[28px] lg:leading-[33px] text-text-primary"
                  style={{ fontFamily: 'Epilogue' }}
                >
                  Made-ups
                </h2>
                
                <div className="space-y-4 sm:space-y-5 lg:space-y-[22px]">
                  <p 
                    className="text-sm sm:text-base font-bold leading-relaxed text-text-primary w-full lg:w-[96%]"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    Enhance Your Space with Durable and Stylish Made-Ups.
                    <br />
                    <span className="font-normal">
                      From daily essentials to decorative accents, our made-ups
                      <br />
                      manufacturing brings versatility and refinement to your
                      <br />
                      product range-crafted with the same commitment to quality
                      <br />
                      and design as your apparel line.
                    </span>
                  </p>
                  
                  <p 
                    className="text-sm sm:text-base font-bold leading-relaxed text-text-primary"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    Categories include:
                    <span className="font-normal"> Table mats, napkins, aprons, tea towels,
                    <br />
                    cushion covers, table runners, placemats, kitchen towels, tote
                    <br />
                    bags and more.</span>
                  </p>
                </div>
              </div>
              
              <p 
                className="text-sm sm:text-base font-bold leading-relaxed text-text-primary w-full lg:w-[86%]"
                style={{ fontFamily: 'Epilogue' }}
              >
                Material Options:
                <span className="font-normal"> Premium cotton, absorbent blends,
                <br />
                sustainable fabrics, and natural fiber textiles.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingCapabilities;