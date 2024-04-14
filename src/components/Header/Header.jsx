import React, {useState} from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCart } from "react-icons/bs";
import { NavLink, Link } from 'react-router-dom';
// import Menu from "../ProductsCard/ProductsCard"
import Menu from '../AudioCard/AudioCard';
import Cart from '../Cart/Cart';
import logo from "../../../public/resources/assets/shared/desktop/logo.svg"
import { useCart } from '../CartContext/CartContext';


const Header = ({activeLinks}) => {

    const {cartProducts} = useCart()

    console.log(cartProducts,length);
  
    // create state for the mobile menu
    const [openMenu, setOpenMenu] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false)
  
    // create a function to toggle the mobile menu
    const toggleMobileMenu = () => {
      setOpenMenu(!openMenu)
    }
  
    const toggleCart = () => {
      setIsCartOpen(!isCartOpen)
    }
  
    // add a function to stop propagation
    const stopPropagation = (e) => {
      e.stopPropagation()
    }
  
    const closeCart = () => {
      setIsCartOpen(false)
    }

  return (
    <header className='header h-[80px] bg-[#000] text-[#fff] flex justify-center items-center relative md:flex md:relative'>
      <div className="headerContent flex justify-between items-center w-[85%]">
        <div onClick={toggleMobileMenu}>
          <RxHamburgerMenu className='burgerMenu h-[20px] w-[20px] block lg:hidden' />
          <div className="menu absolute bg-[#fff] top-full left-[0%] w-full">
            {openMenu && <Menu />} 
          </div>
        </div>
        <div className="headerLinks w-full flex justify-between items-center">
          <div className="headerLogo ml-[50px] ">
            <Link to="/">
              <img src={logo} alt="site logo" />
            </Link>
          </div>
          
          <nav className='links hidden lg:flex lg:gap-[35px]'>
            <NavLink
              to="/"
              style={({ isActive }) => isActive ? activeLinks : null}
            >
              HOME
            </NavLink>
            <NavLink
              to="/headphones"
              style={({ isActive }) => isActive ? activeLinks : null}
            >
              HEADPHONES
            </NavLink>
            <NavLink
              to="/speakers"
              style={({ isActive }) => isActive ? activeLinks : null}
            >
              SPEAKERS
            </NavLink>
            <NavLink
              to="/earphones"
              style={({ isActive }) => isActive ? activeLinks : null}
            >
              EARPHONES
            </NavLink>
          </nav>
          <div onClick={toggleCart}>
            <div className='cartProductsLength bg-[#D87D4A] rounded-[50%] text-[14px] h-[18px] w-[18px] text-center absolute top-[12px] right-[8%]'>{cartProducts.length}</div>
            <BsCart  className='cart h-[20px] w-[23px] lg:order-2 lg:w-[24px] lg:h-[20px]'/>
            {
                isCartOpen && (
                  <div className='cartOverlay' onClick={closeCart}></div>
                )
              }
            <div className={`cartOpen absolute bg-[#fff] rounded-[8px] top-full left-[7%] w-[85%] ${isCartOpen ? 'show' : ""}`} onClick={stopPropagation}>
              {isCartOpen && <Cart />}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
