import React from 'react';
import Button from '../../components/ui/Button';

const FabricCatalogue = () => {
  const fabricTypes = [
    {
      image: '/RFD_Fabrics.jpg.png',
      title: 'RFD Fabrics',
      description: 'Explore Fabriclore\'s RFD fabrics, including cotton, viscose, linen, and silk, ready to bring your creative vision to life.',
      details: 'Our sustainable viscose range includes internationally acclaimed materials: - LENZING : Tencel, EcoVero, Modal - BEMBERG : Cupro range of filament fabrics - LIVA and Brila Viscose Range of fabrics'
    },
    {
      image: '/Fabric_Bundles.png',
      title: 'Mill Dyed Fabrics',
      description: 'Explore Fabriclore\'s Solid Color Mill Dyed Fabrics, offering exceptional quality, vibrant colors, and long-lasting durability.',
      details: 'With over 100 fabric varieties across Cotton, Viscose, Linen and Polyester fabrics, each fabric offers 50+ variety of color shades. With Azo-free dyes, our fabrics ensure the perfect foundation for your sustainability goals.'
    },
    {
      image: '/fab.png',
      title: 'Printed Fabrics',
      description: 'Explore Fabriclore\'s Digital printed fabrics with vibrant colors and sharp details, ideal for custom designs.',
      details: 'With low MOQs (starting at just 100 meters), fast 15-day delivery, and no setup costs, it is the perfect solution for designers and brands worldwide.'
    }
  ];

  return (
    <section className="w-full bg-background-card py-[64px] sm:py-[96px] lg:py-[128px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[158px]">
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-[48px]">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[22px] w-full lg:w-[38%]">
            <p 
              className="text-sm sm:text-base font-bold leading-snug text-text-primary"
              style={{ fontFamily: 'Epilogue' }}
            >
              Get Accurate Count, Construction and Weave
            </p>
            
            <h2 
              className="text-[24px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold leading-[28px] sm:leading-[40px] md:leading-[46px] lg:leading-[50px] text-text-primary"
              style={{ fontFamily: 'Epilogue' }}
            >
              Explore Fabric Catalogue
            </h2>
            
            <p 
              className="text-sm sm:text-base font-normal leading-snug text-text-primary mt-1 lg:mt-[6px]"
              style={{ fontFamily: 'Epilogue' }}
            >
              Browse our complete fabric collection — handpicked for quality and versatility...
            </p>
          </div>

          {/* Fabric Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[48px]">
            {fabricTypes?.map((fabric, index) => (
              <div key={index} className="flex flex-col gap-4 sm:gap-5 lg:gap-[20px]">
                <img 
                  src={fabric?.image}
                  alt={fabric?.title}
                  className="w-full max-w-[500px] h-[167px] sm:h-[250px] lg:h-[334px] object-cover rounded-lg sm:rounded-xl lg:rounded-[26px]"
                />
                
                <div className="flex flex-col">
                  <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[18px] mb-4 sm:mb-6 lg:mb-[26px]">
                    <h3 
                      className="text-[18px] sm:text-[24px] lg:text-[32px] font-bold leading-[22px] sm:leading-[28px] lg:leading-[33px] text-text-primary"
                      style={{ fontFamily: 'Epilogue' }}
                    >
                      {fabric?.title}
                    </h3>
                    
                    <p 
                      className="text-sm sm:text-base font-normal leading-relaxed text-text-primary w-full lg:w-[90%]"
                      style={{ fontFamily: 'Epilogue' }}
                    >
                      {fabric?.description}
                    </p>
                  </div>

                  {index === 0 && (
                    <p 
                      className="text-sm sm:text-base font-normal leading-relaxed text-text-primary w-full lg:w-[84%] mb-3 lg:mb-[14px]"
                      style={{ fontFamily: 'Epilogue' }}
                    >
                      <span className="font-normal">Our sustainable viscose range includes internationally
                      <br />
                      acclaimed materials:
                      <br />
                      - </span>
                      <span className="font-bold">LENZING</span>
                      <span className="font-normal"> : Tencel, EcoVero, Modal
                      <br />
                      - </span>
                      <span className="font-bold">BEMBERG</span>
                      <span className="font-normal"> : Cupro range of filament fabrics
                      <br />
                      - </span>
                      <span className="font-bold">LIVA</span>
                      <span className="font-normal"> and </span>
                      <span className="font-bold">Brila Viscose Range</span>
                      <span className="font-normal"> of fabrics</span>
                    </p>
                  )}

                  {index === 1 && (
                    <p 
                      className="text-sm sm:text-base font-normal leading-relaxed text-text-primary mb-[71px] sm:gap-[106px] lg:mb-[142px]"
                      style={{ fontFamily: 'Epilogue' }}
                    >
                      {fabric?.details}
                    </p>
                  )}

                  {index === 2 && (
                    <p 
                      className="text-sm sm:text-base font-normal leading-relaxed text-text-primary mb-[58px] sm:mb-[87px] lg:mb-[116px]"
                      style={{ fontFamily: 'Epilogue' }}
                    >
                      {fabric?.details}
                    </p>
                  )}

                  <Button
                    text="Explore Range"
                    fill_background_color="bg-primary-background"
                    text_color="text-primary-foreground"
                    border_border_radius="rounded-lg"
                    className="self-start px-6 sm:px-7 lg:px-[32px] py-3 sm:py-3.5 lg:py-[16px]"
                    layout_width=""
                    padding=""
                    margin=""
                    position=""
                    variant=""
                    size=""
                    onClick={() => {}}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FabricCatalogue;