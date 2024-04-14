import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="hero__wrapper text-white font-Manrope py-10 px-10
      bg-[url('../../../resources/assets/home/mobile/image-header.jpg')]
     md:background-image: url('../../../resources/assets/home/tablet/image-header.jpg') 
      lg:bg-[url('../../../resources/assets/home/desktop/image-hero.jpg')]
                    bg-hero-mobile bg-center bg-no-repeat bg-cover h-[600px] 
                    md:bg-hero-md md:bg-center md:bg-no-repeat md:bg-cover md:h-[720px] 
                    lg:bg-hero-desktop lg:bg-no-repeat lg:bg-cover"
    >
      {/*HERO TEXT */}
      <div className="container__wrapper text-center flex flex-col gap-5 
                      md:text-center md:flex md:flex-col md:gap-6 
                      lg:text-start">

        <div className="text_wrapper mt-40 flex flex-col gap-5 md:flex md:flex-col md:gap-8">
          <p className=" text-sm font-light -tracking-[-5px] md:-tracking-[-10px]">
            NEW PRODUCTS
          </p>
          <div className=" font-bold text-4xl -tracking-[1.29px] md:text-[56px] md:-tracking-[-2px] leading-none">
            <p>XX99 MARK II</p>
            <p>HEADPHONES</p>
          </div>
          <p className=" text-[15px] lg:text-wrap leading-6 px-3 md:px-44 lg:px-0">
            Experience natural, lifelike audio and exceptional{" "}
            <br className=" hidden" /> build quality made for the
            passionate music <br className=" hidden" />
            enthusiast.
          </p>
        </div>
        {/*SEE PRODUCT BUTTON*/}
        <div className="button tablet:mt-7">
          <Link to='/headphones'>
            <button className="bg-[#D87D4A] lg:hover:bg-[#FBAF85]  px-4 py-3 font-extrabold">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;