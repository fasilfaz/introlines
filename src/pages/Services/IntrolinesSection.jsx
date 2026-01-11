const IntrolinesSection = () => {
  return (
    <section className="w-full bg-background-subtle py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] text-text-primary mb-4 sm:mb-6"
            style={{ fontFamily: 'Epilogue' }}
          >
            Experience Seamless Global Exports
            <br />
            <span className="text-accent-primary">with Introlines</span>
          </h2>
          <p 
            className="text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed text-text-primary max-w-4xl mx-auto"
            style={{ fontFamily: 'Epilogue' }}
          >
            Giving wings to your enterprise. Introlines provides a direct gateway from India to your international destinations. 
            Leveraging our official export licensing, we offer ultra-rapid logistics to deliver your goods beyond borders.
          </p>
        </div>

        {/* Global Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {/* Sea Freight */}
          <div className="bg-background-card rounded-2xl p-6 sm:p-8 lg:p-10 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent-primary/10 rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16Z" fill="#D4AF37"/>
                </svg>
              </div>
            </div>
            <h3 
              className="text-xl sm:text-2xl font-bold text-text-primary mb-4"
              style={{ fontFamily: 'Epilogue' }}
            >
              Sea Freight
            </h3>
            <p 
              className="text-base font-normal leading-relaxed text-text-primary"
              style={{ fontFamily: 'Epilogue' }}
            >
              Connect with the wider world through our premier maritime solutions. We handle the complexities of international waters to ship your bulky consignments with professional ease.
            </p>
          </div>

          {/* Road Network */}
          <div className="bg-background-card rounded-2xl p-6 sm:p-8 lg:p-10 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent-primary/10 rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3C15 2.45 14.55 2 14 2H10C9.45 2 9 2.45 9 3V5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM11 5H13V7H11V5ZM6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13S8 13.67 8 14.5S7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5S16.67 13 17.5 13S19 13.67 19 14.5S18.33 16 17.5 16Z" fill="#D4AF37"/>
                </svg>
              </div>
            </div>
            <h3 
              className="text-xl sm:text-2xl font-bold text-text-primary mb-4"
              style={{ fontFamily: 'Epilogue' }}
            >
              Road Network
            </h3>
            <p 
              className="text-base font-normal leading-relaxed text-text-primary"
              style={{ fontFamily: 'Epilogue' }}
            >
              From your facility to the final destination. Utilize the convenience of modern roadway networks to deliver your shipments on schedule with reliable, secure transit.
            </p>
          </div>

          {/* Air Connect */}
          <div className="bg-background-card rounded-2xl p-6 sm:p-8 lg:p-10 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent-primary/10 rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="#D4AF37"/>
                </svg>
              </div>
            </div>
            <h3 
              className="text-xl sm:text-2xl font-bold text-text-primary mb-4"
              style={{ fontFamily: 'Epilogue' }}
            >
              Air Connect
            </h3>
            <p 
              className="text-base font-normal leading-relaxed text-text-primary"
              style={{ fontFamily: 'Epilogue' }}
            >
              Let your business reach new heights. In an evolving global economy, speed is everything. We turn thousands of kilometers into mere numbers with trusted air transit.
            </p>
          </div>

          {/* Warehousing */}
          <div className="bg-background-card rounded-2xl p-6 sm:p-8 lg:p-10 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent-primary/10 rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L2 12H5V20H19V12H22L12 3ZM12 8.75C12.69 8.75 13.25 9.31 13.25 10S12.69 11.25 12 11.25S10.75 10.69 10.75 10S11.31 8.75 12 8.75ZM17 18H7V12.81L12 8.69L17 12.81V18Z" fill="#D4AF37"/>
                </svg>
              </div>
            </div>
            <h3 
              className="text-xl sm:text-2xl font-bold text-text-primary mb-4"
              style={{ fontFamily: 'Epilogue' }}
            >
              Warehousing & Storage
            </h3>
            <p 
              className="text-base font-normal leading-relaxed text-text-primary"
              style={{ fontFamily: 'Epilogue' }}
            >
              Sophisticated, high-capacity storage facilities for your inventory. Maintain your momentum by delegating logistics responsibilities to our expert team.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <p 
            className="text-lg sm:text-xl font-medium text-text-primary mb-6"
            style={{ fontFamily: 'Epilogue' }}
          >
            Connect with the global market from your home station through our specialized freight solutions.
          </p>
          <p 
            className="text-base sm:text-lg font-normal text-accent-primary"
            style={{ fontFamily: 'Epilogue' }}
          >
            Choose the premier export partner to bridge the gap between your business and the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntrolinesSection;