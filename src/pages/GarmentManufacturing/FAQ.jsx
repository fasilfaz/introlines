import { useState } from 'react';

const FAQ = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev?.[index]
    }));
  };

  const faqItems = [
    {
      question: 'What types of garments and accessories do you manufacture?',
      answer: 'We manufacture a wide range of garments including men\'s and women\'s clothing, fashion accessories, home textiles, and custom apparel. Our capabilities include shirts, dresses, pants, jackets, bags, scarves, and more. We work with various fabric types and can accommodate both simple and complex designs.'
    },
    {
      question: 'Do you offer private labeling or white-label manufacturing?',
      answer: 'Yes, we offer comprehensive private labeling and white-label manufacturing services. We can produce garments with your brand labels, tags, and packaging. Our team works closely with you to ensure your brand identity is perfectly represented in the final product.'
    },
    {
      question: 'What is the minimum order quantity (MOQ)?',
      answer: 'Our minimum order quantity varies depending on the type of garment and complexity of the design. Generally, our MOQ starts from 100 pieces per style per color. For more complex items or specialized fabrics, the MOQ may be higher. Contact us for specific MOQ requirements for your project.'
    },
    {
      question: 'Can I submit my own designs for production?',
      answer: 'Absolutely! We welcome custom designs and can work from your sketches, tech packs, or samples. Our design team can also help refine your concepts and provide technical guidance to ensure manufacturability while maintaining your creative vision.'
    },
    {
      question: 'What fabrics are available for garment production?',
      answer: 'We work with a vast range of fabrics including cotton, linen, silk, wool, polyester, blends, and specialty fabrics. We source high-quality materials from trusted suppliers and can also work with fabrics you provide. Our fabric catalog includes options for different seasons, occasions, and price points.'
    },
    {
      question: 'Do you provide fabric sourcing services too?',
      answer: 'Yes, we offer comprehensive fabric sourcing services. Our experienced team can help you find the perfect fabrics based on your requirements, budget, and quality standards. We have established relationships with reliable fabric suppliers and can source both standard and specialty materials.'
    },
    {
      question: 'Can I get samples before placing a bulk order?',
      answer: 'Yes, we highly recommend ordering samples before bulk production. We can provide pre-production samples to ensure the design, fit, and quality meet your expectations. Sample costs are typically deducted from your bulk order once confirmed.'
    },
    {
      question: 'How long does it take to complete a wholesale garment order?',
      answer: 'Production time varies based on order quantity, complexity, and current production schedule. Typically, bulk orders take 15-30 days after sample approval and order confirmation. Rush orders may be accommodated with additional charges. We provide detailed timelines during the quotation process.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship worldwide. We have experience with international shipping requirements and can handle all necessary documentation, customs clearance, and logistics. Shipping costs and delivery times vary by destination and shipping method chosen.'
    },
    {
      question: 'How can I get a quote or start my order?',
      answer: 'Getting started is easy! Contact us through our website form, email, or phone with your requirements including design details, quantities, and timeline. Our team will review your needs and provide a detailed quote within 24-48 hours. We\'re here to guide you through every step of the process.'
    }
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
            {faqItems?.map((item, index) => (
              <div key={index} className="py-4 sm:py-5 lg:py-[20px] border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex justify-between items-center text-left hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-2 rounded"
                >
                  <span 
                    className="text-sm sm:text-base font-bold leading-snug text-text-primary pr-4"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    {item.question}
                  </span>
                  
                  <div className="flex-shrink-0 w-8 sm:w-9 lg:w-[40px] h-8 sm:h-9 lg:h-[40px] bg-background-secondary rounded-md lg:rounded-[12px] flex justify-center items-center p-1.5 sm:p-2 lg:p-[8px]">
                    <svg 
                      className={`w-4 sm:w-5 lg:w-[24px] h-4 sm:h-5 lg:h-[24px] transform transition-transform duration-300 ${expandedItems?.[index] ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {expandedItems?.[index] && (
                  <div className="mt-3 sm:mt-4 lg:mt-[16px] pr-8 sm:pr-12 lg:pr-[48px] animate-fadeIn">
                    <p 
                      className="text-sm sm:text-base font-normal leading-relaxed text-text-secondary"
                      style={{ fontFamily: 'Epilogue' }}
                    >
                      {item.answer}
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