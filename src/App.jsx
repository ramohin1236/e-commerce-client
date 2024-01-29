
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home/Home'
import Store from './pages/Store/Store'
import BlogsPages from './pages/BlogsPage/BlogsPages'
// import {  HelmetProvider } from 'react-helmet-async';
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
           <Route path='/blogs' element={<BlogsPages/>}/>

           </Route>
        
       </Routes>
       {/* </HelmetProvider> */}
    </BrowserRouter>
    
    </>
  )
}

export default App
