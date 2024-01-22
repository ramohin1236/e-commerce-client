import './SpecialProduct.css'
import ReactStars from "react-rating-stars-component";
const SpecialProduct = () => {
    return (
        <div className="col-4">
           <div className="special-product-card">
                    <div className='d-flex justify-content-between'>
                   <div>
                    <img className='img-fluid' src="/public/headphone.jpg" alt="" />
                   </div>
                   <div className='special-product-content'>
                       <h5 className='brand'>Havels</h5>
                       <h6 className='title'>Samsung Galaxy Head-phone</h6>
                       <ReactStars
    count={5}
    size={24}
    value='3'
    edit={false}
    activeColor="#ffd700"
  />
  <p className='price'><span className='red-p'>$100</span>&nbsp;&nbsp;
  <strike>
     $200  
    </strike></p>
    {/* discount */}
    <div className='discount-till d-flex align-items-center gap-15'>
       <p className='mb-0'><b>5 </b>days</p>
       <div className='d-flex gap-10 '>
         <span className='badge rounded-circle p-2 bg-alert'>a</span>:
         <span className='badge rounded-circle p-2 bg-alert'>a</span>:
         <span className='badge rounded-circle p-2 bg-alert'>a</span>
       </div>
    </div>
                   </div>
                    </div>
           </div>
        </div>
    );
};

export default SpecialProduct;