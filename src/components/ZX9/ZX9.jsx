import React from 'react';
import speaker from "../../../public/resources/assets/home/desktop/image-speaker-zx9.png"
import circle from "../../../public/resources/assets/home/mobile/pattern-circles.svg"
import { Link } from 'react-router-dom'

const ZX9 = () => {
  return (
    <div className='zx9Wrapper mx-[auto] my-[0] w-[85%] lg:w-[90%] h-[630px] rounded-[8px] bg-[#D87D4A] -mt-[70px] md:-mt-[400px] relative md:w-[90%] md:h-[720px] lg:h-[560px]'>
    <img src={circle} alt="" className='circle w-full'/>
    <img src={speaker} alt="" className='speaker absolute w-[180px] top-[30%] left-2/4 -translate-x-1/2 -translate-y-1/2 lg:w-[350px] lg:h-[400px] lg:top-[60%] lg:left-[30%] lg:z-1 '/>
    <div className="zx9Content w-[250px] mx-[auto] my-[0] md:w-[349px] lg:w-[400px] lg:top-[27%] lg:left-[55%]">
        <h2 className='-mt-[10%] mb-[10px] text-[#FFF] text-center text-[36px] not-italic font-bold leading-[40px] tracking-[1.2px] 
                      md:-mt-[90%] lg:tracking-[2px]'>ZX9 SPEAKER</h2>
        <p className='text-[#FFF] text-center text-[15px] not-italic font-normal leading-[25px] mb-[22px]'>
          Upgrade to premium speakers that
          are phenomenally built to deliver truly remarkable sound.
        </p>
        <div className="zx9Btn w-[160px] h-[48px] mx-[auto] my-[0] ">
          <Link to="/speakers">
            <button className='border-[none] w-full h-full bg-[#000] text-[#fff] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] lg:hover:bg-[#4c4c4c] lg:hover:cursor-pointer'>SEE PRODUCT</button>
          </Link>
        </div>
    </div>
</div>
  )
}

export default ZX9
