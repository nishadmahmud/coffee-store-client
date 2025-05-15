import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div>
      <div className="bg-[url(src/assets/images/more/3.png)] bg-cover bg-center text-white ">
        <div className="ml-auto w-full md:w-1/2 space-y-5 py-48">
          <div className=" space-y-2.5 w-[85%]">
            <h2 className="text-4xl">
              Would you like a Cup of Delicious Coffee?
            </h2>
            <p className="raleway text-xs">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
          </div>
          <div>
            <Link className="text-base text-[#242222] bg-[#E3B577] border-2 border-[#E3B577] px-3.5 py-1.5 hover:bg-transparent hover:text-white hover:border-white">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#ECEAE3] py-9">
        <div className="grid grid-cols-4 w-[80%] mx-auto gap-7">
          <div className="space-y-2.5">
            <img src="src/assets/images/icons/1.png" alt="" />
            <div className="space-y-1.5">
              <h4 className="text-2xl text-[#331A15]">Awesome Aroma</h4>
              <p className="raleway text-xs text-[#1B1A1A]">
                You will definitely be a fan of the design & aroma of your
                coffee
              </p>
            </div>
          </div>
          <div className="space-y-2.5">
            <img src="src/assets/images/icons/2.png" alt="" />
            <div className="space-y-1.5">
              <h4 className="text-2xl text-[#331A15]">High Quality</h4>
              <p className="raleway text-xs text-[#1B1A1A]">
                We served the coffee to you maintaining the best quality
              </p>
            </div>
          </div>
          <div className="space-y-2.5">
            <img src="src/assets/images/icons/3.png" alt="" />
            <div className="space-y-1.5">
              <h4 className="text-2xl text-[#331A15]">Pure Grades</h4>
              <p className="raleway text-xs text-[#1B1A1A]">
                The coffee is made of the green coffee beans which you will love
              </p>
            </div>
          </div>
          <div className="space-y-2.5">
            <img src="src/assets/images/icons/4.png" alt="" />
            <div className="space-y-1.5">
              <h4 className="text-2xl text-[#331A15]">Proper Roasting</h4>
              <p className="raleway text-xs text-[#1B1A1A]">
                Your coffee is brewed by first roasting the green coffee beans
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
