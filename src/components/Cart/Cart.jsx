import React from 'react';
// import cartImage from "../../assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
import { useCart } from '../CartContext/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
     // this handles the navigation to the 
    // checkout page from the cart
    const navigate = useNavigate()
    const handleCheckout = () => {
        navigate("/checkout")
    }

    const { cartProducts, clearCart, removeFromCart, updateQuantity, getTotalCost } = useCart()





  return (
    <section className='overlay'>
        <div className="cartContent mx-[auto] my-[0] h-auto w-[90%] mt-[30px] rounded-[8px] p-[20px] top-[10%]">
            <div className='cartTop flex justify-between'>
                <h3 className='text-[#000] text-[18px] font-bold tracking-[1.286px]'>Cart ({cartProducts.length})</h3>
                <button className='delete border-[none] bg-transparent text-[15px] not-italic font-normal leading-[25px] [text-decoration-line:underline] opacity-50' onClick={clearCart}>Remove all</button>
            </div>
            
            {cartProducts.map((cartProduct) => (
                <div className="cartBottom text-[#000] md:mt-[30px] lg:mt-[30px] lg:flex lg:justify-between mt-[20px] flex gap-[25px] md:gap-[30px]">
                <img src={cartProduct.categoryImage.mobile} alt={cartProduct.name} className='cartImage w-[100px]'/>
                <div className='cartCenter mt-[10px]'>
                    <h3 className='text-[15px] font-bold leading-[25px]'>{cartProduct.name}</h3>
                    <h3 className='text-[14px] font-bold leading-[25px] opacity-50'>${cartProduct.price.toLocaleString()}</h3>
                </div>
                <div className='cartQty bg-[#F1F1F1] flex gap-[20px] justify-center items-center w-[32%] h-[40px] mt-[25px] text-[#000]'>
                    <p className='text-[13px] font-bold tracking-[1px] opacity-25' onClick={() => updateQuantity(cartProduct.id, Math.max(0, cartProduct.quantity - 1))}>-</p>
                    <p className=''>{cartProduct.quantity}</p>
                    <p className='text-[13px] font-bold tracking-[1px] opacity-25' onClick={() => updateQuantity(cartProduct.id, cartProduct.quantity + 1)}>+</p>
                </div>
            </div>))}

            <div className='cartTotal text-[#000] mt-[30px] flex justify-between'>
                <h3 className='text-[15px] font-normal leading-[25px] opacity-50'>TOTAL</h3>
                <h3 className='text-[18px] font-bold'>${getTotalCost().toLocaleString()}</h3>
            </div>
            <div className='chkOutBtn mt-[40px] h-[45px] md:mt-[60px]'>
                <button className='border-[none] w-full h-full bg-[#D87D4A] text-[#fff] text-[13px] font-bold tracking-[1px]' onClick={handleCheckout}>CHECKOUT</button>
            </div>
        </div>
    </section>
  )
}

export default Cart
