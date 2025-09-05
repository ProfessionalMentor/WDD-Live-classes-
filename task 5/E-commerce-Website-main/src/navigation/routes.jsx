import React from 'react'
import { BrowserRouter ,Routes as Rt,Route} from 'react-router-dom'
import Navbar from '../components/navBar'
import Home from '../pages/home'
import Cart from '../pages/cart'      
import Product from '../pages/product'
import Footer from '../components/footer'  
const AppRoutes = () => {
  return (
 <BrowserRouter>
 <Navbar />
 <Rt>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/> 
    <Route path='/products' element={<Product/>}/>       
 </Rt>
   
      <Footer />
 
 </BrowserRouter>
  )
}

export default AppRoutes