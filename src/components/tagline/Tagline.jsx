import React from 'react';

import BestGearDesk from '../../../public/resources/assets/shared/desktop/image-best-gear.jpg';

const Tagline = () => {
  return (
    <section className='mx-[auto] my-[0] w-[85%] h-auto mt-[20px] pb-[80px] lg:flex lg:gap-5 
                        md:my-[0] md:mx-[auto] md:w-[85%] md:h-[766px] md:mt-[60px]'>
        <div className=''>
            <img src={BestGearDesk} alt="" className='w-full h-[300px] md:w-full md:h-[400px] lg:w-[500px] lg:h-[500px]' />
        </div>
       
        <div className='bestContent lg:order-1 lg:w-1/2 lg:mt-[15%] '>
            <h2 className='w-[327px] mx-[auto] my-[0] text-center text-[28px] not-italic font-bold leading-[normal] tracking-[1px] mb-[30px]'>
                BRINGING YOU THE <span className='bestSpan text-[#D87D4A] text-[28px] not-italic font-bold leading-[normal] tracking-[1px]'>BEST</span> AUDIO GEAR
            </h2>
            <p className='bestPara text-center text-[15px] not-italic font-normal leading-[25px] opacity-50'>
                Located at the heart of New York City, Audiophile is 
                the premier store for high end headphones, earphones, 
                speakers, and audio accessories. We have a large showroom 
                and luxury demonstration rooms available for you to browse 
                and experience a wide range of our products. Stop by our store 
                to meet some of the fantastic people who make Audiophile the best
                place to buy your portable audio equipment.
            </p>
        </div>
    </section>
  )
}

export default Tagline
