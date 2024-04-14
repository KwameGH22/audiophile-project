import React from 'react';
import { Link } from 'react-router-dom';
import speaker from "../../../public/resources/assets/home/desktop/image-speaker-zx9.png"
import circle from "../../../public/resources/assets/home/mobile/pattern-circles.svg"

const ZX9Speaker = () => {
  return (
    // <div className='zx9Wrapper mx-auto  h-[630px] rounded-lg bg-orange-500 -mt-50 relative'>
        
    //     <img src="../resources/assets/home/mobile/image-speaker-zx9.png" alt="" className="speaker absolute w-44 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
    //     <div className="zx9Content w-62 mx-auto">
    //         <h2 className='-mt-10 mb-4 text-white text-center text-4xl font-bold leading-10 tracking-wide'>ZX9 SPEAKER</h2>
    //         <p className='text-white text-center text-sm font-normal leading-6 mb-6'>
    //             Upgrade to premium speakers that
    //             are phenomenally built to deliver truly remarkable sound. 
    //         </p>
    //         <div className="zx9Btn w-40 h-12 mx-auto">
    //             <button className='border-none w-full h-full bg-black text-white text-xs font-bold tracking-wide'>SEE PRODUCT</button>
    //         </div>
    //     </div>
      
    // </div>
    <div className="ad__wrapper  font-Manrope bg-[#D87D4A] h-[]  md:flex md:justify-center mb-10 mx-10">
          <div className="inner__wrapper items-center py-10 flex flex-col md:py-8 lg:flex-row md:items-center lg:items-center lg:justify-center lg:gap-20 lg:px-10 ">
           {/* Speaker image */}
            <div className="speaker__content h-full">
              <img src={speaker} alt="" className="  w-[172.25px] mb-5  md:w-[197.27px] md:mb-5 lg:w-[410.23px]"/>
            </div>

            {/* text content */}
              <div className="text__content text-white text-center lg:text-start">
                <div className="text">
                  <div className="top__header text-[36px] font-bold tracking-[1.29px] leading-9 mb-5 md:text-[56px] md:leading-[1em] md:font-bold md:mb-5 lg:tracking-[2px]">
                    <div className="p">ZX9</div>
                    <div className="p">SPEAKER</div>
                  </div>
                <div className=" text-[15px] mb-8 px-3 md:text-wrap md:mb-8 md:px-44 lg:px-0">Upgrade to premium speakers that are <br /> phenomenally built to deliver truely remarkable <br className="hidden" /> sound</div>
                </div>
                {/* product button */}
                <div className="btn">
                <Link to='/ZX9'>
                  <button className="bg-[#000000] text-white px-4 py-3 font-extrabold lg:hover:bg-[#4c4c4c]">SEE PRODUCT</button>
                </Link>
                </div>
            </div>
        </div> 
      
      </div>
  )
}

export default ZX9Speaker
