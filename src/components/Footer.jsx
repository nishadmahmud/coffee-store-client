import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot, FaLocationPin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[url(src/assets/images/more/13.jpg)] bg-cover bg-cente">
      <div className="pt-16 pb-8 mx-auto">
        <div className="w-[80%] mx-auto mb-5">
          <img src="src/assets/images/more/logo1.png" className="h-16 w-auto" />
        </div>
        <div className="mx-auto flex w-[80%] gap-24 justify-start">
          <div className="space-y-5">
            <div className="space-y-4">
              <h5 className="text-3xl text-[#331A15] [filter:drop-shadow(2px_2px_4px_rgba(0,0,0,0.5))]">
                Espresso Emporium
              </h5>
            </div>
            <p className="text-[#1B1A1A] text-sm raleway">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex gap-3 text-[#331A15]">
              <FaFacebook size={20}></FaFacebook>
              <FaTwitter size={20}></FaTwitter>
              <FaInstagram size={20}></FaInstagram>
              <FaLinkedin size={20}></FaLinkedin>
            </div>
            <h5 className="text-3xl text-[#331A15] [filter:drop-shadow(2px_2px_4px_rgba(0,0,0,0.5))]">
              Get in Touch
            </h5>
            <div className="space-y-2.5 text-[#331A15] raleway text-sm">
              <div className="flex gap-4">
                <FaPhone></FaPhone>
                <p>+88 01533 333 333</p>
              </div>
              <div className="flex gap-4">
                <FaMailBulk></FaMailBulk>
                <p>info@gmail.com</p>
              </div>
              <div className="flex gap-4">
                <FaLocationDot></FaLocationDot>
                <p>72, Wall street, King Road, Dhaka</p>
              </div>
            </div>
          </div>
          <div className="space-y-5 w-full">
            <h5 className="text-3xl text-[#331A15] [filter:drop-shadow(2px_2px_4px_rgba(0,0,0,0.5))]">
              Connect with Us
            </h5>
            <div>
              <form className="text-[#1B1A1A99] text-xs w-full raleway space-y-2.5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full py-2.5 pl-2 bg-white"
                />
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full py-2.5 pl-2 bg-white"
                />
                <br />
                <textarea
                  rows={5}
                  value="Message"
                  className="w-full py-2.5 pl-2 bg-white"
                ></textarea>
                <br />
              </form>
              <button className="text-base text-[#331A15] border-2 border-[#331A15] rounded-full px-3.5 py-1.5 hover:bg-[#331A15] hover:text-white cursor-pointer">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
