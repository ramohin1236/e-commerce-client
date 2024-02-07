import { Link } from 'react-router-dom';
import './SpecialProduct.css'
import ReactStars from "react-rating-stars-component";
const SpecialProduct = () => {
    return (
        <div className="col-5">
           <div className="special-product-card">
                    <div className='d-flex justify-content-between'>
                   <div>
                    <img className='img-fluid' src="https://media.wired.com/photos/64de7dca4a854832b16fd3c0/1:1/w_1500,h_1500,c_limit/Garmin-Epix-Pro-Gear.jpg" alt="" />
                   </div>
                   <div className='special-product-content'>
                       <h5 className='brand'>Havels</h5>
                       <h6 className='title'>Samsung Galaxy Head-phone</h6>
                       <ReactStars
    count={5}
    size={24}
    value={4}
    edit={false}
    activeColor="#ffd700"
  />
  <p className='price'><span className='red-p'>$100</span>&nbsp;&nbsp;
  <strike>
     $200  
    </strike></p>
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
            <p>Products : 5</p>
            <div className="progress">
  <div className="progress-bar" role="progressbar" style={{"width": "25%" }}aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
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