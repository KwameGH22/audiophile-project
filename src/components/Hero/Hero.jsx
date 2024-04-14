import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="heroWrapper">
      <div className="bckImg h-[670px] text-[#fff] bg-[url('../../../resources/assets/home/mobile/image-header.jpg')]
                       md:h-[960px] md:background-image: url('../../../resources/assets/home/tablet/image-header.jpg') 
                       lg:bg-[url('../../../resources/assets/home/desktop/image-hero.jpg')] bg-cover bg-[center_-70px]lg:h-[800px] lg:bg-[center_-150px] bg-no-repeat relative">
                        
        <div className="heroContent absolute top-[50%] left-2/4 -translate-x-1/2 -translate-y-1/2 text-center lg:w-[349px] lg:absolute lg:top-[21%] lg:left-[12.5%]">
          <h2 className="mx-[auto] my-[0] w-[250px] text-center text-[14px] font-normal tracking-[10px] mt-[100px]">NEW PRODUCT</h2>
          <h1 className="mt-[20px] text-[36px] font-bold tracking-[1.3px] leading-[40px] text-center">XX99 MARK II HEADPHONES</h1>
          <p className="heroPara mt-[20px] w-[328px] text-center text-[15px] font-normal leading-[25px] opacity-75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to="/headphones">
            <button className="heroBtn border-[none] mt-[50px] bg-[#D87D4A] text-[#fff] px-[35px] lg:py-[15px] py-[20px] font-bold">SEE PRODUCT</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
