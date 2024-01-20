
import './ProductCard.css';

const ProductCard = () => {
    return (
        <div className='col-3'>
           <div className='product-card'>
           <div className="card-image">
                    <img className="img-fluid" src="/public/p-1.jpg" alt="" />
                    
                </div>
                <div className="product-details">
                    <h6 className='brand'>Google-Pixel </h6>
                    <h5>Google-pixel 7 pro</h5>
                    <p className='price'>$100.00</p>
                </div>
           </div>
     </div>
    );
};

export default ProductCard;