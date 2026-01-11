import { useState } from 'react';
import EditText from '../../components/ui/EditText';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube 
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e?.target?.value);
  };

  return (
    <footer className="w-full bg-background-card">
      {/* Support Section */}
      {/* <div className="w-full bg-background-main h-[180px] sm:h-[282px] lg:h-[376px] flex items-center justify-center overflow-hidden relative">
        <div className="flex items-center whitespace-nowrap animate-scroll">
          <span className="text-[24px] sm:text-[36px] lg:text-[48px] font-bold text-primary-background opacity-40 mx-8" style={{ fontFamily: 'Epilogue' }}>
            we support #sustainablefashion
          </span>
          <span className="text-[24px] sm:text-[36px] lg:text-[48px] font-bold text-primary-background opacity-40 mx-8" style={{ fontFamily: 'Epilogue' }}>
            we support #ethicalmanufacturing
          </span>
          <span className="text-[24px] sm:text-[36px] lg:text-[48px] font-bold text-primary-background opacity-40 mx-8" style={{ fontFamily: 'Epilogue' }}>
            we support #qualityfabrics
          </span>
          <span className="text-[24px] sm:text-[36px] lg:text-[48px] font-bold text-primary-background opacity-40 mx-8" style={{ fontFamily: 'Epilogue' }}>
            we support #sustainablefashion
          </span>
          <span className="text-[24px] sm:text-[36px] lg:text-[48px] font-bold text-primary-background opacity-40 mx-8" style={{ fontFamily: 'Epilogue' }}>
            we support #ethicalmanufacturing
          </span>
          <span className="text-[24px] sm:text-[36px] lg:text-[48px] font-bold text-primary-background opacity-40 mx-8" style={{ fontFamily: 'Epilogue' }}>
            we support #qualityfabrics
          </span>
        </div>
      </div> */}
      {/* Main Footer Content */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0 py-[32px] sm:py-[48px] lg:py-[64px]">
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-[64px]">
          {/* Footer Columns */}
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 px-4 sm:px-6 lg:px-[158px]">
            {/* Left Column - Newsletter */}
            <div className="flex flex-col gap-6 sm:gap-7 lg:gap-[30px] w-full lg:flex-1">
              <img 
                src="/introline.png"
                alt="Introline Logo"
                className="w-[200px] sm:w-[200px] lg:w-[250px] h-[21px] sm:h-[31px] lg:h-[42px]"
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
                
                <div className="flex items-center ">
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

            {/* Middle Column - Main Offices */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[24px] w-full lg:w-[30%]">
              <h4 
                className="text-sm sm:text-base font-bold leading-snug text-text-primary"
                style={{ fontFamily: 'Epilogue' }}
              >
                Our Offices
              </h4>
              
              <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[24px]">
                {/* India Office */}
                <div>
                  <h5 
                    className="text-sm font-bold text-text-primary mb-2"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    INDIA
                  </h5>
                  <p 
                    className="text-xs sm:text-sm font-normal leading-relaxed text-text-secondary"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    No.25(2)/22, Ground Floor,
                    <br />
                    Opp Vinayakar Kovil,
                    <br />
                    Kumarapuram 1st Street Ryapuram,
                    <br />
                    Tirupur, TN 641601 IN
                    <br />
                    <span className="font-semibold">+91 8681 800 075</span>
                  </p>
                </div>
                
                {/* UAE Office */}
                <div>
                  <h5 
                    className="text-sm font-bold text-text-primary mb-2"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    UAE
                  </h5>
                  <p 
                    className="text-xs sm:text-sm font-normal leading-relaxed text-text-secondary"
                    style={{ fontFamily: 'Epilogue' }}
                  >
                    AL MADEENA GARMENTS TRADING L.L.C
                    <br />
                    Office No. 101, 1st Floor,
                    <br />
                    Oppo. Mashreq Bank, Murshid Bazar,
                    <br />
                    Deira Dubai - U.A.E.
                    <br />
                    <span className="font-semibold">+971 502 289 916</span>
                    <br />
                    <span className="font-semibold">+971 56 504 9779</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Branches & Links */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[24px] w-full lg:w-[36%] px-0 lg:px-[96px]">
              {/* Branches Section */}
              <div className="mb-6">
                <h4 
                  className="text-sm sm:text-base font-bold leading-snug text-text-primary mb-4"
                  style={{ fontFamily: 'Epilogue' }}
                >
                  Our Branches
                </h4>
                
                <div className="flex flex-col gap-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-text-primary" style={{ fontFamily: 'Epilogue' }}>TIRUPUR</span>
                    <span className="text-text-secondary" style={{ fontFamily: 'Epilogue' }}>+91 8681 800 073</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-text-primary" style={{ fontFamily: 'Epilogue' }}>BANGALORE</span>
                    <span className="text-text-secondary" style={{ fontFamily: 'Epilogue' }}>+91 8681 800 095</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-text-primary" style={{ fontFamily: 'Epilogue' }}>CALICUT</span>
                    <span className="text-text-secondary" style={{ fontFamily: 'Epilogue' }}>+91 8681 800 076</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-text-primary" style={{ fontFamily: 'Epilogue' }}>COCHIN</span>
                    <span className="text-text-secondary" style={{ fontFamily: 'Epilogue' }}>+91 8681 800 072</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-text-primary" style={{ fontFamily: 'Epilogue' }}>DELHI</span>
                    <span className="text-text-secondary" style={{ fontFamily: 'Epilogue' }}>+91 8681 800 081</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-text-primary" style={{ fontFamily: 'Epilogue' }}>MUMBAI</span>
                    <span className="text-text-secondary" style={{ fontFamily: 'Epilogue' }}>+91 8681 800 079</span>
                  </div>
                </div>
              </div>

              {/* Introline Links */}
              <div>
                <h4 
                  className="text-sm sm:text-base font-bold leading-snug text-text-primary"
                  style={{ fontFamily: 'Epilogue' }}
                >
                  Introline
                </h4>
                
                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[12px] mt-4">
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
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-8 sm:gap-12 lg:gap-[48px] px-4 sm:px-6 lg:px-[158px]">
            {/* Social Links */}
            <div className="flex items-center gap-4 sm:gap-5 lg:gap-[24px]">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-5 sm:w-6 lg:w-[26px] h-5 sm:h-6 lg:h-[26px] text-text-secondary hover:text-primary-background transition-colors duration-200 flex items-center justify-center"
                aria-label="Follow us on Facebook"
              >
                <FaFacebookF className="w-full h-full" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-5 sm:w-6 lg:w-[26px] h-5 sm:h-6 lg:h-[26px] text-text-secondary hover:text-primary-background transition-colors duration-200 flex items-center justify-center"
                aria-label="Follow us on Twitter"
              >
                <FaTwitter className="w-full h-full" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-5 sm:w-6 lg:w-[26px] h-5 sm:h-6 lg:h-[26px] text-text-secondary hover:text-primary-background transition-colors duration-200 flex items-center justify-center"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="w-full h-full" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-5 sm:w-6 lg:w-[26px] h-5 sm:h-6 lg:h-[26px] text-text-secondary hover:text-primary-background transition-colors duration-200 flex items-center justify-center"
                aria-label="Follow us on LinkedIn"
              >
                <FaLinkedinIn className="w-full h-full" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-5 sm:w-6 lg:w-[26px] h-5 sm:h-6 lg:h-[26px] text-text-secondary hover:text-primary-background transition-colors duration-200 flex items-center justify-center"
                aria-label="Follow us on YouTube"
              >
                <FaYoutube className="w-full h-full" />
              </a>
            </div>

            {/* Copyright */}
            <p 
              className="text-xs sm:text-sm lg:text-[14px] font-normal leading-[13px] sm:leading-[14px] lg:leading-[15px] text-text-secondary"
              style={{ fontFamily: 'Epilogue' }}
            >
              © 2026, Introline.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;