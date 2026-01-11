import React, { useState } from 'react';
import EditText from '../../components/ui/EditText';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e?.target?.value);
  };

  return (
    <footer className="w-full bg-background-card">
      {/* Support Section */}
      <div className="w-full bg-background-main h-[188px] sm:h-[282px] lg:h-[376px]" />
      {/* Main Footer Content */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0 py-[32px] sm:py-[48px] lg:py-[64px]">
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-[64px]">
          {/* Footer Columns */}
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 px-4 sm:px-6 lg:px-[158px]">
            {/* Left Column - Newsletter */}
            <div className="flex flex-col gap-6 sm:gap-7 lg:gap-[30px] w-full lg:flex-1">
              <img 
                src="/images/img_new_logo_with_i.svg"
                alt="Fabriclore Logo"
                className="w-[125px] sm:w-[187px] lg:w-[250px] h-[21px] sm:h-[31px] lg:h-[42px]"
              />
              
              <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[24px] w-full lg:w-[84%]">
                <h3 
                  className="text-[18px] sm:text-[24px] lg:text-[32px] font-bold leading-[24px] sm:leading-[30px] lg:leading-[41px] text-text-primary"
                  style={{ fontFamily: 'Epilogue' }}
                >
                  500+ fashion businesses trust us
                  <br />
                  globally.
                </h3>
                
                <div className="flex items-center bg-text-secondary">
                  <span 
                    className="text-md sm:text-lg lg:text-[20px] font-black leading-[18px] sm:leading-[19px] lg:leading-[21px] text-text-secondary"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    Chat Now
                  </span>
                </div>
                
                <EditText
                  placeholder="E-mail"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full lg:w-[74%]"
                  padding="16px 20px 22px 20px"
                />
              </div>
            </div>

            {/* Middle Column - Visit Studio */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[24px] w-full lg:w-[24%]">
              <h4 
                className="text-sm sm:text-base font-bold leading-snug text-text-primary"
                style={{ fontFamily: 'Epilogue' }}
              >
                Visit Experience Studio
              </h4>
              
              <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[24px]">
                <p 
                  className="text-sm sm:text-base font-normal leading-relaxed text-text-secondary"
                  style={{ fontFamily: 'Epilogue' }}
                >
                  Malviya Nagar, Jaipur
                  <br />
                  Monday to Saturday
                  <br />
                  10 am - 05 pm IST
                </p>
                
                <div className="flex items-center bg-text-secondary">
                  <span 
                    className="text-sm sm:text-base font-normal leading-snug text-text-secondary"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    Get Directions
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Fabriclore Links */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[24px] w-full lg:w-[36%] px-0 lg:px-[96px]">
              <h4 
                className="text-sm sm:text-base font-bold leading-snug text-text-primary"
                style={{ fontFamily: 'Epilogue' }}
              >
                Fabriclore
              </h4>
              
              <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[12px]">
                {[
                  'Our Story',
                  'Team', 
                  'Blog',
                  'In The News',
                  'Careers',
                  'Contact Us',
                  'Terms of Service',
                  'Refund policy',
                  'Privacy Policy',
                  'Your privacy choices'
                ]?.map((link, index) => (
                  <button
                    key={index}
                    className="text-sm sm:text-base font-normal leading-snug text-left text-text-primary hover:text-primary-background transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-2 rounded px-1 py-0.5"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-8 sm:gap-12 lg:gap-[48px] px-4 sm:px-6 lg:px-[158px]">
            {/* Social Links */}
            <div className="flex items-center gap-4 sm:gap-5 lg:gap-[24px]">
              <img 
                src="/images/img_link_follow_on.svg"
                alt="Social Media"
                className="w-5 sm:w-6 lg:w-[26px] h-5 sm:h-6 lg:h-[26px]"
              />
              <img 
                src="/images/img_link_follow_on_gray_900.svg"
                alt="Social Media"
                className="w-5 sm:w-6 lg:w-[26px] h-5 sm:h-6 lg:h-[26px]"
              />
              <img 
                src="/images/img_link_follow_on_gray_900_26x26.svg"
                alt="Social Media"
                className="w-5 sm:w-6 lg:w-[26px] h-5 sm:h-6 lg:h-[26px]"
              />
              <img 
                src="/images/img_link_follow_on_26x26.svg"
                alt="Social Media"
                className="w-5 sm:w-6 lg:w-[26px] h-5 sm:h-6 lg:h-[26px]"
              />
              <img 
                src="/images/img_link_follow_on_1.svg"
                alt="Social Media"
                className="w-5 sm:w-6 lg:w-[26px] h-5 sm:h-6 lg:h-[26px]"
              />
            </div>

            {/* Copyright */}
            <p 
              className="text-xs sm:text-sm lg:text-[14px] font-normal leading-[13px] sm:leading-[14px] lg:leading-[15px] text-text-secondary"
              style={{ fontFamily: 'Epilogue' }}
            >
              © 2026, Fabriclore.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;