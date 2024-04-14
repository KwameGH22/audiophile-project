import React from 'react';
import headphones from "../../../public/resources/assets/home/mobile/image-product2.png";
import speaker from "../../../public/resources/assets/home/mobile/image-speaker-zx9.png";
import earphones from "../../../public/resources/assets/home/mobile/image-product -earphones.png";

import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom'


const AudioCard = () => {
  return (
    <div className='cardWrapper w-[85%] md:w-[90%] h-[700px] mx-[auto] my-[0] relative mt-[40px]  mb-[150px] md:flex md:mt-[100px] gap-4'>
      <div className='headphonesCard mt-[90px] mb-[20px] flex flex-col items-center bg-[#F1F1F1] h-[165px] rounded-[8px] relative md:w-[380px] md:h-[180px] md:flex md:flex-col'>
        <img src={headphones} alt="" className='w-[200px] absolute top-[4%] left-2/4 -translate-x-1/2 -translate-y-1/2 md:z-10'/>
        <h3 className='mt-[80px] mb-[15px] text-[15px] font-bold tracking-[1.1px]'>HEADPHONES</h3>
        <Link to="/headphones" className='shopLink text-[#000]'>
          <h4 className='text-[13px] font-bold tracking-[1.3px] opacity-50'>SHOP</h4>
          <MdKeyboardArrowRight className='arrow h-[20px] text-[#D87D4A]'/>
        </Link>
      </div>
      <div className='speakersCard mt-[90px] mb-[20px] flex flex-col items-center bg-[#F1F1F1] h-[165px] rounded-[8px] relative md:w-[380px] md:h-[180px] md:flex md:flex-col'>
        <img src={speaker} alt="" className='speakers w-[100px] h-[110px] absolute top-[0%] left-2/4 -translate-x-1/2 -translate-y-1/2 '/>
        <h3 className='mt-[80px] mb-[15px] text-[15px] font-bold tracking-[1.1px]'>SPEAKERS</h3>
        <Link to="/speakers" className='shopLink text-[#000]'>
          <h4 className=''>SHOP</h4>
          <MdKeyboardArrowRight className='arrow h-[20px] text-[#D87D4A]'/>
        </Link>
      </div>
      <div className='earphonesCard mt-[90px] mb-[20px] flex flex-col items-center bg-[#F1F1F1] h-[165px] rounded-[8px] relative md:w-[380px] md:h-[180px] md:flex md:flex-col'>
        <img src={earphones} alt="" className='earphones w-[180px] absolute top-[4%] left-2/4 -translate-x-1/2 -translate-y-1/2'/>
        <h3 className='mt-[80px] mb-[15px] text-[15px] font-bold tracking-[1.1px]'>EARPHONES</h3>
        <Link to="/earphones" className='shopLink text-[#000]'>
          <h4>SHOP</h4>
          <MdKeyboardArrowRight className='arrow h-[20px] text-[#D87D4A]'/>
        </Link>
      </div>
    </div>
  )
}

export default AudioCard
