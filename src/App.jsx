
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home/Home'
import Store from './pages/Store/Store'
import BlogsPages from './pages/BlogsPage/BlogsPages'
import CompareProducts from './pages/Compare/CompareProducts'
import WishList from './pages/WishList/WishList'
import Login from './pages/Login/Login'
import ForgotPassword from './pages/Login/ForgotPassword'
import Signup from './pages/Signup/Signup'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import SingleBlog from './pages/BlogsPage/SingleBlog'
import TermsConditions from './pages/TermsConditions/TermsConditions'
import ShippingPolicy from './pages/ShippingPolicy/ShippingPolicy'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import RefundPoliicy from './pages/Refund/RefundPoliicy';
import SingleProduct from './pages/SingleProduct/SingleProduct'
import Cart from './pages/Cart/Cart'
import ChekOut from './pages/Chekout/ChekOut'
import { PrivateRoute } from './pages/PrivateRoute/PrivateRoute'



function App() {


  return (
    <>
      
       
   
    <BrowserRouter>
    {/* <HelmetProvider> */}
       <Routes>
           <Route path='/' element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/store' element={<Store/>}/>
           <Route path='/store/product/:id' element={<SingleProduct/>}/>
           <Route path='/blogs' element={<BlogsPages/>}/>
           <Route path='/blogs/:id' element={<SingleBlog/>}/>
           <Route path='/compare' element={<CompareProducts/>}/>
           <Route path='/wish-list' element={<PrivateRoute><WishList/></PrivateRoute>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/signup' element={<Signup/>}/>
           <Route path='/forgot-password' element={<ForgotPassword/>}/>
           <Route path='/reset-password' element={<ResetPassword/>}/>
           <Route path='/terms' element={<TermsConditions/>}/>
           <Route path='/shipping' element={<ShippingPolicy/>}/>
           <Route path='/privacy' element={<PrivacyPolicy/>}/>
           <Route path='/refund' element={<RefundPoliicy/>}/>
           <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>}/>
           <Route path='/chekout' element={<ChekOut/>}/>

           </Route>
        
       </Routes>
       {/* </HelmetProvider> */}
    </BrowserRouter>
    
    </>
  )
}

export default App
