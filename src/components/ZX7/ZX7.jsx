import React from 'react';
import { Link } from 'react-router-dom';

const ZX7 = () => {
  return (
    <div className='zx7Wrapper mx-[auto] my-[0] w-[85%] h-[350px] mt-[50px] rounded-[8px] 
                    bg-[url("../../../resources/assets/home/mobile/image-speaker-zx7.jpg")]
                    md:bg-[url("../../../resources/assets/home/tablet/image-speaker-zx7.jpg")]
                    lg:bg-[url("../../../resources/assets/home/desktop/image-speaker-zx7.jpg")]  
                    bg-center bg-contain bg-no-repeat relative lg:w-[90%]'>
        <div className="zx7Content w-[210px] absolute top-[30%] left-[10%]">
            <h2 className='not-italic text-[28px] font-bold leading-[normal] tracking-[2px] mb-[20px]'>ZX7 SPEAKER</h2>
            <div className="zx7Btn">
              <Link to="/speakers">
                <button className='px-[20px] py-[10px] border-[1px] border-[solid] border-[#000] bg-transparent text-[13px] not-italic font-bold leading-[normal] tracking-[1px] lg:hover:bg-[#000] lg:hover:text-[#fff]'>SEE PRODUCT</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default ZX7
