import React from 'react';
import data from "../../../public/resources/data.json"
import Tagline from '../../components/tagline/Tagline';
import AudioCard from '../../components/AudioCard/AudioCard';
import { useParams, Link } from 'react-router-dom'

const AudioPage = () => {

    const { category } = useParams();

    // filter the data
    const filteredProducts = data.filter(item => item.category === category);

    console.log(filteredProducts);

    // flip the data
    const flippedProducts = [...filteredProducts].reverse()

    console.log(flippedProducts);

    // map over the flipped data
    const productElement = flippedProducts.map(product => (
        <div key={product.id} className='products'>
            <div 
                className="productsImage bg-center bg-no-repeat bg-cover h-[352px] w-full mb-[40px]"
                style={{backgroundImage: `url(${product.categoryImage.mobile})`}}
            >
            </div>
            <div className="productsContent">
                <h2 className='mx-[auto] my-[0] h-full w-[327px] text-center text-[28px] not-italic font-bold leading-[normal] tracking-[2px] mb-[30px]'>{product.name}</h2>
                <p className='w-full text-[15px] font-normal not-italic leading-[25px] opacity-50 mt-[24px] text-center mb-[30px]'>{product.description}</p>
                <Link to={`/${category}/${product.id}`} className='prodBtnContainer'>
                    <button className='productsBtn border-[none] px-[20px] py-[10px] text-[#fff] bg-[#D87D4A] text-[13px] font-bold leading-[normal] tracking-[1px] mt-[25px] mb-[80px] ml-[32%] lg:ml-[45%]'>SEE PRODUCT</button>
                </Link>
            </div>
        </div>
    ))

  return (
    <section>
        <div className="productsHeading bg-[#000] text-[#fff] h-[80px]">
            <h1 className='flex h-full justify-center items-center'>{flippedProducts[0].category.toUpperCase()}</h1>
        </div>
        <div className="productsWrapper mx-[auto] my-[0] w-[90%] mt-[50px] mb-[100px]">
            {productElement}
        </div>
        <AudioCard/>
        <Tagline />
    </section>
  )
}

export default AudioPage
