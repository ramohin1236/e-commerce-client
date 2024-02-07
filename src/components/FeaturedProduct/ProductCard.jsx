/* eslint-disable react/prop-types */
import { Link, useLocation} from 'react-router-dom';
import './ProductCard.css';
import { CiHeart } from "react-icons/ci";
import { FaBagShopping, FaEye } from "react-icons/fa6";
import ReactStars from "react-rating-stars-component";
import { IoIosGitCompare } from "react-icons/io";

const ProductCard = () => {
    // "/store/product/:id"
    let location = useLocation()
    return (
      
         <div className='col-3'>
         
           <Link to={`${location.pathname == "/store"
           ? "/store/product/:id" : location.pathname == "/store/product/:id" ? "/store/product/:id" : "/store/product/:id"}`} className='product-card position-relative'>
           <div className="card-product" >
           <div className="card-image">
                    <img className="img-fluid" src="https://media.wired.com/photos/64de7dca4a854832b16fd3c0/1:1/w_1500,h_1500,c_limit/Garmin-Epix-Pro-Gear.jpg" alt="" />
                    <img className="img-fluid" src="https://media.wired.com/photos/64de7dca4a854832b16fd3c0/1:1/w_1500,h_1500,c_limit/Garmin-Epix-Pro-Gear.jpg" alt="" />
                    
                </div>
  <div className="product-details">
                    <h6 className='brand'>Google-Pixel </h6>
                    <h5>Google-pixel 7 pro</h5>
                    <ReactStars
    count={5}
    size={24}
    value={4}
    edit={false}
    activeColor="#ffd700"
  />
                    <p className='price'>$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                 <div className='d-flex flex-column gap-15'>
                 <Link><CiHeart  className="fs-5 icon"/> </Link>
                   <Link><FaBagShopping  className="fs-5 icon"/></Link>
                   <Link><FaEye className="fs-5 icon"/></Link>
                   <Link><IoIosGitCompare className="fs-5 icon"/></Link>
                 </div>
                </div>
</div>
            
          
           </Link>
     </div>

     
    );
};

export default ProductCard;