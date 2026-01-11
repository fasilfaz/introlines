import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const Header = ({ className, ...props }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    console.log('Menu toggle clicked, current state:', menuOpen);
    setMenuOpen(!menuOpen);
    console.log('Menu state after toggle:', !menuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); // Close mobile menu after navigation
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      ref={headerRef}
      className={twMerge(
        'w-full bg-header-background shadow-[0px_4px_20px_#888888ff] relative z-50',
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
              className="block lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors z-50 relative"
              aria-label="Toggle navigation menu"
              onClick={toggleMenu}
              type="button"
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
                onClick={() => handleNavigation('/')}
                className={`text-sm xl:text-base font-bold leading-snug transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-2 rounded px-2 py-1 ${
                  isActive('/') 
                    ? 'text-primary-background' 
                    : 'text-text-primary hover:text-primary-background'
                }`}
                style={{ fontFamily: 'Epilogue' }}
              >
                Home
              </button>
              <button
                role="menuitem"
                onClick={() => handleNavigation('/catalog')}
                className={`text-sm xl:text-base font-bold leading-snug transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-2 rounded px-2 py-1 ${
                  isActive('/catalog') 
                    ? 'text-primary-background' 
                    : 'text-text-primary hover:text-primary-background'
                }`}
                style={{ fontFamily: 'Epilogue' }}
              >
                Catalog
              </button>
              <button
                role="menuitem"
                onClick={() => handleNavigation('/service')}
                className={`text-sm xl:text-base font-bold leading-snug transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-2 rounded px-2 py-1 ${
                  isActive('/service') 
                    ? 'text-primary-background' 
                    : 'text-text-primary hover:text-primary-background'
                }`}
                style={{ fontFamily: 'Epilogue' }}
              >
                Service
              </button>
              <button
                role="menuitem"
                onClick={() => handleNavigation('/contact')}
                className={`text-sm xl:text-base font-bold leading-snug transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-2 rounded px-2 py-1 ${
                  isActive('/contact') 
                    ? 'text-primary-background' 
                    : 'text-text-primary hover:text-primary-background'
                }`}
                style={{ fontFamily: 'Epilogue' }}
              >
                Contact
              </button>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`lg:hidden bg-header-background border-t border-border-primary relative z-40 overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav 
            role="navigation"
            aria-label="Mobile navigation"
            className="px-4 py-3 space-y-2"
          >
            <button
              role="menuitem"
              onClick={() => handleNavigation('/')}
              className={`block w-full text-left px-3 py-2 text-sm font-bold leading-snug transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-2 rounded ${
                isActive('/') 
                  ? 'text-primary-background bg-background-highlight' 
                  : 'text-text-primary hover:text-primary-background hover:bg-background-highlight'
              }`}
              style={{ fontFamily: 'Epilogue' }}
            >
              Home
            </button>
            <button
              role="menuitem"
              onClick={() => handleNavigation('/catalog')}
              className={`block w-full text-left px-3 py-2 text-sm font-bold leading-snug transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-2 rounded ${
                isActive('/catalog') 
                  ? 'text-primary-background bg-background-highlight' 
                  : 'text-text-primary hover:text-primary-background hover:bg-background-highlight'
              }`}
              style={{ fontFamily: 'Epilogue' }}
            >
              Catalog
            </button>
            <button
              role="menuitem"
              onClick={() => handleNavigation('/service')}
              className={`block w-full text-left px-3 py-2 text-sm font-bold leading-snug transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-2 rounded ${
                isActive('/service') 
                  ? 'text-primary-background bg-background-highlight' 
                  : 'text-text-primary hover:text-primary-background hover:bg-background-highlight'
              }`}
              style={{ fontFamily: 'Epilogue' }}
            >
              Service
            </button>
            <button
              role="menuitem"
              onClick={() => handleNavigation('/contact')}
              className={`block w-full text-left px-3 py-2 text-sm font-bold leading-snug transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-2 rounded ${
                isActive('/contact') 
                  ? 'text-primary-background bg-background-highlight' 
                  : 'text-text-primary hover:text-primary-background hover:bg-background-highlight'
              }`}
              style={{ fontFamily: 'Epilogue' }}
            >
              Contact
            </button>
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;