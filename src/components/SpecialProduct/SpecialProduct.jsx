/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './SpecialProduct.css'
import ReactStars from "react-rating-stars-component";
const SpecialProduct = (props) => {
    const {title, brand, ratings,price, sold,quantity}=props;
    return (
        <div className="col-6">
           <div className="special-product-card">
                    <div className='d-flex justify-content-between'>
                   <div>
                    <img className='img-fluid' src="https://media.wired.com/photos/64de7dca4a854832b16fd3c0/1:1/w_1500,h_1500,c_limit/Garmin-Epix-Pro-Gear.jpg" alt="" />
                   </div>
                   <div className='special-product-content'>
                       <h5 className='brand'>{brand}</h5>
                       <h6 className='title'>{title}</h6>
                       <ReactStars
    count={5}
    size={24}
    value={ ratings}
    edit={false}
    activeColor="#ffd700"
  />
  <p className='price'><span className='red-p'>${price}</span>&nbsp;&nbsp;
  {/* <strike>
     $200  
    </strike> */}
    </p>
    {/* discount */}
    <div className='discount-till d-flex align-items-center gap-15'>
       <p className='mb-0 d-flex gap-1'><b>5 </b>days</p>
       <div className='d-flex gap-10 align-items-center'>
         <span className='badge rounded-circle p-3 bg-danger'>a</span>:
         <span className='badge rounded-circle p-3 bg-danger'>a</span>:
         <span className='badge rounded-circle p-3 bg-danger'>a</span>
       </div>
       
      
    </div>
     {/* products count */}
     <div className='prod-count mt-3'>
            <p>Products : {quantity}</p>
            <div className="progress">
  <div className="progress-bar" role="progressbar" style={{"width": quantity /quantity+sold*100 + "%" }}aria-valuenow={quantity /quantity+sold*100} aria-valuemin={quantity} aria-valuemax={sold + quantity}></div>
</div>
       </div>
       <Link className='button-2 m-3'>Add To Cart</Link>
    
                   </div>
                    </div>
           </div>
        </div>
    );
};

export default SpecialProduct;