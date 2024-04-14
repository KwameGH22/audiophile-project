import React, {useState} from 'react';
import AudioCard from '../../components/AudioCard/AudioCard';
import Tagline from '../../components/tagline/Tagline';
import { useCart } from '../../components/CartContext/CartContext';
import { useParams, Link } from 'react-router-dom';
import data from "../../../public/resources/data.json"

const AudioDetails = () => {

     // create state for the functions that increase and
    // decrease the quantity ordered
    const [quantityOrdered, setQuantityOrdered] = useState(1)

    // build the functions to increase and decrease the
    // quantity of items a user would like to purchase
    const increaseQuantity = () => {
      setQuantityOrdered(prevQuantityOrdered => prevQuantityOrdered + 1)
    }

    const decreaseQuantity = () => {
      setQuantityOrdered(prevQuantityOrdered => Math.max(prevQuantityOrdered - 1, 1))
    }

    // console.log(data)

    // parameters for the url
    const { id, category } = useParams();
    
    // getting and filtering the data to use in the component
    const getProduct = data.filter((prod) => prod.id == id)
    const flippedProduct = [...getProduct].reverse()
    // console.log(flippedProduct)


    const product = getProduct[0]
    const { addToCart } = useCart()
    const handleAddTocart = () => {
      addToCart(product, quantityOrdered)
      setQuantityOrdered(1)
    }

    console.log(product);
    

    const productElement = flippedProduct.map(product => (
        <div key={product.id} className='product'>
            <Link to={`/${category}`} className='productBack no-underline'>
              <h4 className='text-[#000] text-[15px] font-normal leading-[25px] opacity-50 mb-[20px]'>Go back</h4>
            </Link>
            <div className="productContent md:flex md:gap-[30px] md:mb-[20px] lg:mb-[20px]">
              <div
                className='productImage bg-center bg-no-repeat bg-cover h-[352px] w-full mb-[50px] lg:bg-contain lg:mb-[50px] lg:rounded-[8px] lg:h-[480px] lg:w-[45%]'
                style={{backgroundImage: `url(${product.categoryImage.mobile})`}}
              >
              </div>
              <div className="productContentBottom md:w-3/5 md:mt-[50px] lg:w-[60%] lg:mt-[50px]">
                <h1 className='name w-[300px] text-[28px] font-bold tracking-[1px] mb-[30px] lg:text-[40px]'>{product.name.toUpperCase()}</h1>
                <p className='description text-[15px] font-normal leading-[25px] opacity-50 mb-[30px] lg:w-[500px]'>{product.description}</p>
                <p className='price text-[#000] text-[18px] font-bold tracking-[1.286px] mb-[30px]'>{`$ ${product.price.toLocaleString()}`}</p>
                <div className='quantity flex w-[290px] items-center gap-[20px] h-[48px] mb-[80px]'>
                  <div className="qtyBtns flex items-center justify-center w-2/5 lg:w-[40%] h-full gap-[30px] bg-[#F1F1F1]">
                    <p onClick={decreaseQuantity} className='minus opacity-25'>-</p>
                    <p>{quantityOrdered}</p>
                    <p onClick={increaseQuantity} className='add opacity-25'>+</p>
                  </div>
                  <button className='cartBtn border-[none] w-1/2 h-full px-[20px] py-[10px] bg-[#D87D4A] text-[#FFF] text-center text-[13px] font-bold tracking-[1px] lg:hover:bg-[#FBAF85] lg:hover:cursor-pointer' onClick={handleAddTocart}>ADD TO CART</button>
              </div>
              </div>
            </div>

            <div className="featuresContent lg:flex lg:mb-[50px]">
              <div className="featuresTop">
                <h3 className='features text-[24px] font-bold leading-[36px] tracking-[0.857px] mb-[30px] lg:text-[32px]'>FEATURES</h3>
                <p className='featuresPara text-[15px] font-normal leading-[25px] opacity-50 mb-[30px] lg:w-[90%]'>{product.features}</p>
              </div>
              <div className="boxContents lg:w-full lg:mr-[30px]">
                <h3 className='box text-[24px] font-bold leading-[36px] tracking-[0.857px] mb-[25px]'>IN THE BOX</h3>
                <div className="includes mb-[80px] lg:mb-[50px] ">
                  {
                    product.includes.map((include, index) => (
                      <p key={index}>
                      <span className="boxContent text-[#D87D4A] mr-[10px] text-[15px] font-bold"> {`${include.quantity}x`}
                      </span>
                      <span className="boxItem text-[15px] font-normal leading-[25px] opacity-50">{include.item}</span>
                      </p>
                    ))
                  }
                </div>
              </div>
            </div>

            <div className="gallery lg:grid lg:grid-cols-[40%_60%] lg:gap-y-[235px] lg:gap-x-[1%] lg:grid-rows-[180px]">
              <div className='gallery1 h-[180px] bg-top bg-no-repeat bg-cover mb-[20px] rounded-[8px] lg:h-[400px] lg:w-full'
                style={{backgroundImage: `url(${product.gallery.first.mobile})`}}
              ></div>
              <div className='gallery2 h-[180px] bg-top bg-no-repeat bg-cover mb-[20px] rounded-[8px] lg:h-[400px] lg:w-full lg:col-[1_/_2]'
                style={{backgroundImage: `url(${product.gallery.second.mobile})`}}
              ></div>
              <div className='gallery3 h-[380px] bg-center bg-no-repeat bg-cover rounded-[8px] mb-[100px]
              lg:h-[815px] lg:w-[99%] lg:row-[1] lg:col-[2_/_3]'
                style={{backgroundImage: `url(${product.gallery.third.mobile})`}}
              ></div>
            </div>

            <div className='recommended flex flex-col mb-[150px] lg:mt-[50%] lg:flex lg:flex-col'>
              <h3 className='mx-[auto] my-[0] text-[24px] font-bold leading-[36px] tracking-[0.857px]'>YOU MAY ALSO LIKE</h3>
              <div className="recommendedContent lg:flex lg:flex-wrap lg:justify-around">
                {
                  product.others.map((other, index) => (
                    <div key={index} className='recommendedItem'>
                      <div
                        className='recommendedImages h-[250px] bg-center bg-no-repeat bg-cover mt-[50px] lg:h-[400px] lg:w-[250px] lg:bg-[#982323] lg:mt-[30px] rounded-[8px] '
                        style={{backgroundImage: `url(${other.image.mobile})`}}>
                      </div>
                      <div className="recommendedDetails lg:p-[10px] lg:text-center">
                        <div className='recommendedName mt-[10px] text-center text-[24px] font-bold tracking-[1.714px] mb-[20px]'>{other.name}</div>
                        <Link to='/'>
                          <button className='recommendedBtn border-[none] bg-[#D87D4A] text-[#fff] px-[20px] py-[12px] text-[13px] font-bold tracking-[1px] ml-[30%] mb-[20px]'>SEE PRODUCT</button>
                        </Link>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
        </div>
    ))
  return (
    <section>
    <div className="productWrapper mx-[auto] my-[0] w-[85%] lg:w-[80%] lg:mb-[200px] mt-[30px]">
      {productElement}
    </div>
    <AudioCard />
    <Tagline />
</section>
  )
}

export default AudioDetails
