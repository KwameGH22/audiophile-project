import React from 'react';
import { Link } from 'react-router-dom'

const YX1 = () => {
  return (
    <div className='yx1Wrapper mx-[auto] my-[0] w-[85%] h-[535px] mt-[50px]'>
      <div className='yx1Img h-[300px] 
                      bg-[url("../../../resources/assets/home/mobile/image-earphones-yx1.jpg")]
                      md:bg-[url("../../../resources/assets/home/tablet/image-earphones-yx1.jpg")]
                      lg:bg-[url("../../../resources/assets/home/desktop/image-earphones-yx1.jpg")] 
                      md:w-[100%]
                      bg-center bg-cover rounded-[8px] mb-[30px]'></div>
      <div className='yx1Content rounded-[8px] h-[200px] bg-[#F1F1F1] relative'>
        <h2 className='w-[300px] absolute top-1/4 left-[8%] text-[28px] not-italic font-bold leading-[normal] tracking-[2px]'>YX1 EARPHONES</h2>  
        <div className='yx1Btn absolute top-[55%] left-[8%] border-[1px] border-[solid] border-[#000] px-[30px] py-[15px] bg-transparent text-[13px] not-italic font-bold leading-[normal] tracking-[1px]'>
            <Link to="/earphones">
              <button className=''>SEE PRODUCT</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default YX1
