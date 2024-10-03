import React from 'react';
import { FaPhone, FaFacebookF, FaLinkedinIn, FaTwitter, } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';


const Footer = () => {
  const menuItems = [
    {
      title: 'PRODUCT',
      items: ['Product Overview', 'Omni-Channel', 'Sourcing', 'Compliance & Contracting', 'Payments', 'Data & ReportingPricing']
    },
    {
      title: 'WHY WORKSOME',
      items: ['Product Overview', 'Omni-Channel', 'Sourcing', 'Compliance & Contracting', 'Payments', 'Data & ReportingPricing']
    },
    {
      title: 'RESOURCES',
      items: ['Product Overview', 'Omni-Channel', 'Sourcing', 'Compliance & Contracting', 'Payments', 'Data & ReportingPricing']
    }
  ];

  return (
    <footer className="bg-black text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">YOUR LOGO</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <ul>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-2">
                    <a href="#" className="hover:underline hover:text-[#343434] ">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex flex-wrap justify-end gap-4">
          <a href="#" className="text-2xl hover:text-[#E7D37F]"><FaPhone /></a>
          <a href="#" className="text-2xl hover:text-[#E7D37F]"><BiLogoGmail/></a>
          <a href="#" className="text-2xl hover:text-[#E7D37F]"><FaFacebookF /></a>
          <a href="#" className="text-2xl hover:text-[#E7D37F]"><FaLinkedinIn /></a>
          <a href="#" className="text-2xl hover:text-[#E7D37F]"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;