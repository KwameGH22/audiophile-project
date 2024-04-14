import React from 'react';
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Layout = () => {

  
  // create an object to handle active link styling
  const activeLinks ={
    color: "#D87D4A",
    textDecoration: "underline"
  }
  return (
    <div>
      <Header activeLinks={activeLinks}/>
      <main>
        <Outlet/>
      </main>
      <Footer activeLinks={activeLinks}/>
    </div>
  )
}

export default Layout
