import { useState,useEffect } from 'react'

// import './App.css';
import { Route, Routes, useLocation} from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Checkout from "./pages/Checkout/Checkout"
import { CartProvider } from './components/CartContext/CartContext'
import AudioPage from './pages/AudioPage/AudioPage'
import AudioDetails from './pages/AudioDetails/AudioDetails'



function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])

  return (
    <div>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/:category' element={<AudioPage/>}/>
            <Route path='/:category/:id' element={<AudioDetails/>}/>
            <Route path='/checkout' element={<Checkout />}/>
          </Route>
        </Routes>
      </CartProvider>
    </div>
  )
}

export default App
