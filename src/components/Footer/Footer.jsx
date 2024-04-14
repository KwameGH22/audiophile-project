import React from "react";
// import { Link } from 'react-router-dom'
import logo from "../../../public/resources/assets/shared/desktop/logo.svg"
import facebookIcon from "../../../public/resources/assets/shared/desktop/icon-facebook.svg"
import InstagramIcon from "../../../public/resources/assets/shared/desktop/icon-instagram.svg"
import twitterIcon from "../../../public/resources/assets/shared/desktop/icon-twitter.svg"
import { NavLink } from 'react-router-dom'


const Footer = ({ activeLinks }) => {
  return (
    <footer className="footerWrapper border-[1px] border-[solid] border-[#000] bg-[#000] text-[#fff] h-[654px]  relative">
      <div className="footerContent mx-[auto] my-[0] mt-[50px] w-[85%] md:[90%] lg:mt-[70px] lg:w-[75%] lg:h-[300px]">
        <div className="footerTop md:item=center lg:flex lg:justify-between lg:h-[25px] lg:mt-[5px]">
          <img src={logo} alt="" className="logo mx-[auto] my-[0] absolute left-[33%] top-[10%] " />
          <div className="footerLinks mt-[130px] lg:flex lg:gap-[20px]">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeLinks : null)}
              className='text-[#fff] text-[13px] not-italic font-bold leading-[25px] tracking-[2px] h-[40px] no-underline flex justify-center'
            >
              HOME
            </NavLink>
            <NavLink
              to="/headphones"
              style={({ isActive }) => (isActive ? activeLinks : null)}
              className='text-[#fff] text-[13px] not-italic font-bold leading-[25px] tracking-[2px] h-[40px] no-underline flex justify-center'
            >
              HEADPHONES
            </NavLink>
            <NavLink
              to="/speakers"
              style={({ isActive }) => (isActive ? activeLinks : null)}
              className='text-[#fff] text-[13px] not-italic font-bold leading-[25px] tracking-[2px] h-[40px] no-underline flex justify-center'
            >
              SPEAKERS
            </NavLink>
            <NavLink
              to="/earphones"
              style={({ isActive }) => (isActive ? activeLinks : null)}
              className='text-[#fff] text-[13px] not-italic font-bold leading-[25px] tracking-[2px] h-[40px] no-underline flex justify-center'
            >
              EARPHONES
            </NavLink>
          </div>
        </div>
        <p className="footerPara mx-[auto] my-[0] w-[327px] h-[150px] mt-[20px] text-[#FFF] text-center text-[15px] not-italic font-normal leading-[25px] opacity-50">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="footerBottom mt-[40px] text-center">
          <p>Copyright 2021. All Rights Reserved</p>
          <div className="footerIcons mt-[40px] flex justify-center gap-[20px]">
            <img src={facebookIcon} alt="" />
            <img src={twitterIcon} alt="" />
            <img src={InstagramIcon} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
