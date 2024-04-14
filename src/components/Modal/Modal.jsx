import React from 'react';
import { FaCheck } from "react-icons/fa6";
import { useCart } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';


const Modal = () => {
    // import the cart context into the component
    const {cartProducts, getTotalCost} = useCart()

    // get the first item from the cart
    const firstCartItem = cartProducts.length > 0 ? cartProducts[0] : null;
    // get the rest of the items in the cart
    const additionalItems = cartProducts.slice(1)

    const shipping = getTotalCost() * 0.005
    const vat = getTotalCost() * 0.15
    const grandTotal = getTotalCost() + vat + shipping


  return (
    <section className="modalOverlay">
        <div className="orderContainer w-[85%] h-auto mx-[auto] my-[0] p-[25px] mt-[60px] bg-[#FFF] rounded-[8px]">
            <div className='checkContainer rounded-[50%] bg-[#D87D4A] w-[64px] h-[64px] mb-[30px] relative'>
                <FaCheck className='checkmark text-[#fff] w-[50px] h-[40px] absolute top-[18%] left-[11%]'/>
            </div>
            <div className='orderContainerTop'>
                <h1 className='w-[210px] text-[24px] font-bold leading-[28px] tracking-[0.85px] mb-[20px]'>
                    THANK YOU FOR YOUR ORDER
                </h1>
                <p className='w-[290px] text-[15px] font-normal leading-[25px] opacity-50 mb-[20px]'>
                    You will receive an email confirmation shortly
                </p>
            </div>
            <div className="orderCenterContainer">
                <div className='orderContainerCenter bg-[#F1F1F1] rounded-[8px] p-[20px]'>
                    <div className='orderContainerContent flex justify-between'>
                        <div className="orderImage">
                            <img src={firstCartItem?.image?.mobile} alt="" className='w-[60px]'/>
                        </div>
                        <div className='orderContentTop -ml-[30%]'>
                            <h3 className='text-[15px] font-bold leading-[25px]'>{firstCartItem?.name}</h3>
                            <h3 className='text-[14px] font-bold leading-[25px] opacity-50'>${firstCartItem?.price.toLocaleString()}</h3>
                        </div>
                        <h3 id='orderQuantity text-[15px] font-bold leading-[25px] opacity-50'>x{firstCartItem?.quantity}</h3>
                    </div>
                    <hr className='mx-[auto] my-[0] w-[260px] mt-[15px] mb-[15px]' />
                    <div className='orderContentBottom text-center text-[12px] font-bold tracking-[-0.21px] opacity-50'>
                        {additionalItems.length > 0 && (<p>and {additionalItems.length} other {additionalItems.length > 0 ? "items" : "item"}</p>)}
                    </div>
                </div>
                <div className='confirmOrderTotal rounded-tl-none rounded-br-[8px] rounded-tr-none rounded-bl-[8px] bg-[#000] text-[#fff] p-[20px] mb-[20px]'>
                    <h3 className='w-[200px] text-[15px] font-normal leading-[25px] opacity-50 mb-[10px]'>GRAND TOTAL</h3>
                    <h3 className='text-[18px] font-bold mb-[8px]'>${grandTotal.toLocaleString()}</h3>
                </div>
            </div>
            <div className='orderTotalBtn flex justify-center mb-[10px]'>
                <Link to="/">
                    <button className='border-[none] px-[50px] py-[10px] bg-[#D87D4A] text-[#fff] text-[13px] font-bold tracking-[1px]'>BACK TO HOME</button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Modal
