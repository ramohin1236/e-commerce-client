/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CiHeart } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { FaBagShopping } from 'react-icons/fa6';
import { IoIosGitCompare } from 'react-icons/io';

import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { addToWishList } from '../../features/Product/productSlice';
import './PopularCart.css'


const PopularCart = (props) => {
    const dispatch= useDispatch()
    let location = useLocation()

 const addToWish =(id)=>{

    dispatch(addToWishList(id))
 }
  const {title,brand,img,price,ratings,id}=props
    return (

           <Link className="card-productt "  to={`${location.pathname == "/store"
           ? "/store/product/:id" : location.pathname == "/store/product/:id" ? "/store/product/:id" : "/store/product/:id"}`}>
        <div className="card-image">
                 <img className="img-fluid image" src={img} alt="" />
                 
             </div>
<div className="product-details"> 
                 <h6 className='brand'>
                    {brand}
                     </h6>
                 <h5 className='title'>{title}</h5>
                 {/* <ReactStars
 count={5}
 size={24}
 value={ratings}
 edit={false}
 activeColor="#ffd700"
/> */}
                 <p className='price'>${price}</p>
             </div>
            
              <div className='icons d-flex flex-column '>
               <Link><CiHeart 
               onClick={(e)=>{addToWish(id)}}
               
               className="fs-5 icon"/> </Link>
                <Link><FaBagShopping  className="fs-5 icon"/></Link>
                <Link><FaEye className="fs-5 icon"/></Link>
                <Link><IoIosGitCompare className="fs-5 icon"/></Link>
              </div>
            
</Link>
       
     
    );
};

export default PopularCart;