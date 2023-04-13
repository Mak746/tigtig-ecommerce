import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Wishlist from './pages/Wishlist';
import Cart from "./pages/Cart";
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import SingleBlog from './pages/SingleBlog';
import ShoppingPloicy from './pages/ShoppingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Checkout from './pages/Checkout';

import SingleProduct from './pages/SingleProduct';

function App() {
  return (
   <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='product' element={<OurStore/>}/>
        <Route path='product/:id' element={<SingleProduct/>}/>

        <Route path='blogs' element={<Blog/>}/>
        <Route path='blog/:id' element={<SingleBlog/>}/>
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path='compare-product' element={<CompareProduct/>}/>
        <Route path='wishlist' element={<Wishlist/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='forgot-password' element={<ForgotPassword/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='reset-password' element={<Resetpassword/>}/>

        <Route path='shopping-policy' element={<ShoppingPloicy/>}/>
        <Route path='refund-policy' element={<RefundPolicy/>}/>
        <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='term-conditions' element={<TermsAndConditions/>}/>







      </Route>
     </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
