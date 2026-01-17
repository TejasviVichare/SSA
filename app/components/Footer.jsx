import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="max-w-[90vw] mx-auto py-[4vw]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[3vw] items-start">
          {/* Logo */}
          <div>
            <div className="text-[2.2vw] font-bold leading-none">SSA</div>
            <p className="text-[1vw] text-gray-500 mt-[0.6vw]">
              Signature Slam Academy
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <ul className="flex flex-wrap gap-x-[3vw] gap-y-[1vw] text-[1vw] text-gray-700">
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Coaches</li>
              <li className="cursor-pointer">News</li>
              <li className="cursor-pointer">Matches</li>
              <li className="cursor-pointer">Events</li>
              <li className="cursor-pointer">FAQs</li>
              <li className="cursor-pointer">Program</li>
              <li className="cursor-pointer">Amenities</li>
              <li className="cursor-pointer">Blogs</li>
            </ul>

            <div className="border-t border-gray-200 mt-[2vw]" />
            {/* Contact */}
            <div className="w-full pt-3 flex flex-row justify-between gap-6">
              <div>
                <p className="text-[1vw] text-[#9bbd3a] leading-loose ">
                  Signature Slam Academy
                </p>
                <p className="text-[0.95vw] text-gray-600  leading-loose">
                  30 WIR Rd, Lovedele, NSW
                </p>
                <p className="text-[0.95vw] text-gray-600  leading-loose">
                  +91 9545487852
                </p>
                <p className="text-[0.95vw] text-gray-600  leading-loose">
                  info@ssagroup.com
                </p>
              </div>
              <div>
                <p className="text-[1vw] text-[#9bbd3a] mb-[0.8vw]">
                  Connect with Us
                </p>

                <div className="flex gap-[1vw] mb-[1vw] text-[1.2vw] text-gray-600">
                  <span className="cursor-pointer">Fb</span>
                  <span className="cursor-pointer">X</span>
                  <span className="cursor-pointer">In</span>
                  <span className="cursor-pointer">Ig</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Bar */}
      <div className="bg-gradient-to-r from-[#0f3d2e] to-[#9bbd3a]">
        <div className="max-w-[90vw] mx-auto py-[1vw] flex flex-col md:flex-row items-center justify-between text-white text-[0.9vw] gap-[1vw]">
          <span className="cursor-pointer">Terms And Condition</span>
          <span>© 2025 All Rights Reserved www.signatureislamacademy.com</span>
          <span className="cursor-pointer">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
