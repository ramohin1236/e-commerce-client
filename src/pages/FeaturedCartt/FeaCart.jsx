/* eslint-disable react/prop-types */
import './FeaCart.css';
import { Link } from "react-router-dom";
import { FaBagShopping, FaEye } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

import { IoIosGitCompare } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addToWishList } from '../../features/Product/productSlice';
const FeaCart = ({ title,img,brand,price,id}) => {
    const dispatch =useDispatch()
    const addToWish =(id)=>{

        dispatch(addToWishList(id))
     }
    return (
        <div className='Featured-cart'>
            <img className='images' src={img} alt="" />
            <p className='brandd'>{brand}</p>
            <p className='titlee'>{title}</p>
           <div>
          <p className='pricee'>${price}</p>
           </div>
           <div className='icons d-flex flex-column '>
               <Link><CiHeart 
               onClick={()=>{addToWish(id)}}
               
               className="fs-5 icon"/> </Link>
                <Link><FaBagShopping  className="fs-5 icon"/></Link>
                <Link to={`/store/product/${id}`}><FaEye className="fs-5 icon"/></Link>
                <Link><IoIosGitCompare className="fs-5 icon"/></Link>
              </div>
        </div>
    );
};

export default FeaCart;