import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const Header = ({ className, ...props }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header 
      className={twMerge(
        'w-full bg-header-background shadow-[0px_4px_20px_#888888ff]',
        className
      )}
      {...props}
    >
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex justify-start items-center px-4 sm:px-6 lg:px-[160px] py-[17px] sm:py-[25px] lg:py-[34px]">
          {/* Logo Section */}
          <div className="flex justify-between items-center w-full lg:w-[56%]">
            {/* Logo Image */}
            <div className="flex-shrink-0 w-[220px] sm:w-[180px] lg:w-[164px]">
              <img 
                src="/introline.png" 
                alt="Introline Logo"
                className="w-full h-[20px] sm:h-[16px] lg:h-[18px] object-contain"
              />
            </div>

            {/* Hamburger Menu Icon (Mobile only) */}
            <button 
              className="block lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle navigation menu"
              onClick={toggleMenu}
            >
              <svg 
                className="w-6 h-6 text-text-primary" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-[30px] xl:gap-[118px]">
              <button
                role="menuitem"
                className="text-sm xl:text-base font-bold leading-snug text-text-primary hover:text-primary-background transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-2 rounded px-2 py-1"
                style={{ fontFamily: 'Epilogue' }}
              >
                Home
              </button>
              <button
                role="menuitem"
                className="text-sm xl:text-base font-bold leading-snug text-text-primary hover:text-primary-background transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-2 rounded px-2 py-1"
                style={{ fontFamily: 'Epilogue' }}
              >
                Catalog
              </button>
              <button
                role="menuitem"
                className="text-sm xl:text-base font-bold leading-snug text-text-primary hover:text-primary-background transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-2 rounded px-2 py-1"
                style={{ fontFamily: 'Epilogue' }}
              >
                Service
              </button>
              <button
                role="menuitem"
                className="text-sm xl:text-base font-bold leading-snug text-text-primary hover:text-primary-background transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-2 rounded px-2 py-1"
                style={{ fontFamily: 'Epilogue' }}
              >
                Contact
              </button>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <nav 
          className={`${menuOpen ? 'block' : 'hidden'} lg:hidden bg-header-background border-t border-border-primary`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-3 space-y-2">
            <button
              role="menuitem"
              className="block w-full text-left px-3 py-2 text-sm font-bold leading-snug text-text-primary hover:text-primary-background hover:bg-background-highlight transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-2 rounded"
              style={{ fontFamily: 'Epilogue' }}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </button>
            <button
              role="menuitem"
              className="block w-full text-left px-3 py-2 text-sm font-bold leading-snug text-text-primary hover:text-primary-background hover:bg-background-highlight transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-2 rounded"
              style={{ fontFamily: 'Epilogue' }}
              onClick={() => setMenuOpen(false)}
            >
              Catalog
            </button>
            <button
              role="menuitem"
              className="block w-full text-left px-3 py-2 text-sm font-bold leading-snug text-text-primary hover:text-primary-background hover:bg-background-highlight transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-2 rounded"
              style={{ fontFamily: 'Epilogue' }}
              onClick={() => setMenuOpen(false)}
            >
              Service
            </button>
            <button
              role="menuitem"
              className="block w-full text-left px-3 py-2 text-sm font-bold leading-snug text-text-primary hover:text-primary-background hover:bg-background-highlight transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-2 rounded"
              style={{ fontFamily: 'Epilogue' }}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;