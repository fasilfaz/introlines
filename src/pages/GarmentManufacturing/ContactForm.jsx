import React, { useState } from 'react';
import EditText from '../../components/ui/EditText';
import Button from '../../components/ui/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brand: '',
    message: ''
  });

  const handleInputChange = (field) => (e) => {
    setFormData({
      ...formData,
      [field]: e?.target?.value
    });
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact-form" className="w-full bg-background-card">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px] py-[64px] sm:py-[96px] lg:py-[128px]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 xl:gap-16 mb-[64px] sm:mb-[96px] lg:mb-[128px]">
          {/* Left Content */}
          <div className="flex flex-col gap-6 sm:gap-7 lg:gap-[28px] w-full lg:w-[42%]">
            <p 
              className="text-sm sm:text-base font-bold leading-snug text-text-primary"
              style={{ fontFamily: 'Epilogue' }}
            >
              Expanding our reach globally
            </p>
            
            <h2 
              className="text-[24px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold leading-[28px] sm:leading-[40px] md:leading-[46px] lg:leading-[52px] text-text-primary"
              style={{ fontFamily: 'Epilogue' }}
            >
              Consult Your Garmenting
              <br />
              Collection With Our
              <br />
              Experts.
            </h2>
            
            <p 
              className="text-sm sm:text-base font-normal leading-snug text-text-primary mb-[94px] sm:mb-[141px] lg:mb-[188px]"
              style={{ fontFamily: 'Epilogue' }}
            >
              Our textile expert will get in touch with you.
            </p>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-[52%] bg-background-section rounded-lg sm:rounded-xl lg:rounded-[26px] p-6 sm:p-8 lg:p-[48px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6 lg:gap-[24px]">
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[16px]">
                {/* First Row */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-[16px]">
                  <EditText
                    placeholder="Name"
                    value={formData?.name}
                    onChange={handleInputChange('name')}
                    className="w-full"
                    padding="16px 20px 22px 20px"
                  />
                  <EditText
                    placeholder="E-mail"
                    type="email"
                    value={formData?.email}
                    onChange={handleInputChange('email')}
                    className="w-full"
                    padding="16px 20px 22px 20px"
                  />
                </div>

                {/* Second Row */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-[16px]">
                  <EditText
                    placeholder="Phone"
                    type="tel"
                    value={formData?.phone}
                    onChange={handleInputChange('phone')}
                    className="w-full"
                    padding="16px 20px 22px 20px"
                  />
                  <EditText
                    placeholder="Brand"
                    value={formData?.brand}
                    onChange={handleInputChange('brand')}
                    className="w-full"
                    padding="16px 20px 22px 20px"
                  />
                </div>

                {/* Message Field */}
                <div className="w-full border border-border-primary rounded-sm p-4 sm:p-5 lg:p-[20px] mb-[38px] sm:mb-[57px] lg:mb-[76px]">
                  <textarea
                    placeholder="Message"
                    value={formData?.message}
                    onChange={handleInputChange('message')}
                    className="w-full h-[80px] sm:h-[100px] lg:h-[120px] resize-none text-sm sm:text-base font-normal leading-snug text-text-primary bg-transparent border-none outline-none"
                    style={{ fontFamily: 'Epilogue' }}
                  />
                </div>
              </div>

              <Button
                text="Send message"
                fill_background_color="bg-primary-background"
                text_color="text-primary-foreground"
                border_border_radius="rounded-xl"
                className="self-start px-6 sm:px-8 lg:px-[34px] py-4 sm:py-5 lg:py-[20px]"
                type="submit"
                layout_width="auto"
                padding=""
                margin=""
                position="relative"
                variant="default"
                size="medium"
                onClick={() => {}}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;