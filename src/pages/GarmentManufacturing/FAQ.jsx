import React, { useState } from 'react';

const FAQ = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev?.[index]
    }));
  };

  const faqItems = [
    'What types of garments and accessories do you manufacture?',
    'Do you offer private labeling or white-label manufacturing?',
    'What is the minimum order quantity (MOQ)?',
    'Can I submit my own designs for production?',
    'What fabrics are available for garment production?',
    'Do you provide fabric sourcing services too?',
    'Can I get samples before placing a bulk order?',
    'How long does it take to complete a wholesale garment order?',
    'Do you ship internationally?',
    'How can I get a quote or start my order?'
  ];

  return (
    <section className="w-full bg-background-card">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px] py-[64px] sm:py-[96px] lg:py-[128px]">
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[48px] items-center">
          {/* Header */}
          <div className="flex flex-col gap-6 sm:gap-7 lg:gap-[30px] text-center w-full lg:w-[52%]">
            <h2 
              className="text-[24px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold leading-[28px] sm:leading-[40px] md:leading-[46px] lg:leading-[50px] text-text-primary px-4 sm:px-6 lg:px-[56px]"
              style={{ fontFamily: 'Epilogue' }}
            >
              FAQ
            </h2>
            
            <p 
              className="text-sm sm:text-base font-normal leading-snug text-center text-text-primary"
              style={{ fontFamily: 'Epilogue' }}
            >
              Got Questions? Let us Clear The Fabric Fog.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="w-full lg:w-[52%] bg-background-section rounded-lg sm:rounded-xl lg:rounded-[26px] p-4 sm:p-6 lg:p-[48px]">
            {faqItems?.map((question, index) => (
              <div key={index} className="py-4 sm:py-5 lg:py-[20px]">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex justify-between items-center text-left hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-2 rounded"
                >
                  <span 
                    className="text-sm sm:text-base font-bold leading-snug text-text-primary pr-4"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    {question}
                  </span>
                  
                  <div className="flex-shrink-0 w-8 sm:w-9 lg:w-[40px] h-8 sm:h-9 lg:h-[40px] bg-background-secondary rounded-md lg:rounded-[12px] flex justify-center items-center p-1.5 sm:p-2 lg:p-[8px]">
                    <img 
                      src="/images/img_arrow_down_gray_900.svg"
                      alt=""
                      className={`w-4 sm:w-5 lg:w-[24px] h-4 sm:h-5 lg:h-[24px] transform transition-transform duration-200 ${expandedItems?.[index] ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>
                
                {expandedItems?.[index] && (
                  <div className="mt-3 sm:mt-4 lg:mt-[16px] pr-8 sm:pr-12 lg:pr-[48px]">
                    <p 
                      className="text-sm sm:text-base font-normal leading-relaxed text-text-primary"
                      style={{ fontFamily: 'Epilogue' }}
                    >
                      Answer content for "{question}" would go here. This is placeholder text for the FAQ answer.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Support Info */}
          <div className="flex flex-col gap-0.5 lg:gap-[2px] text-center w-full lg:w-[30%] mb-[60px] sm:mb-[90px] lg:mb-[120px]">
            <p 
              className="text-sm sm:text-base font-normal leading-snug text-center text-text-primary"
              style={{ fontFamily: 'Epilogue' }}
            >
              Our customer support is available Monday to Saturday: 10 am - 5 pm IST
            </p>
            
            <p 
              className="text-sm sm:text-base font-normal leading-snug text-center text-text-secondary"
              style={{ fontFamily: 'Epilogue' }}
            >
              Average answer time: 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;