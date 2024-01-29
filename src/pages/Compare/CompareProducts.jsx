import './CompareProduct.css';
import Meta from './../../components/Meta/Meta';
import BreadCrump from './../../components/BreadCrump';
import { RxCross2 } from "react-icons/rx";
import Color from '../../components/Color/Color';
const CompareProducts = () => {
    return (
        <div>
            <Meta title={"Compare Products"} />
            <BreadCrump title="Compare Products" />

            <div className='compare-product-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
    <div className='row'>
   <div className='col-3'>
      <div className='compare-product-card position-relative'>
      <RxCross2  className="fs-4 position-absolute cross-icon"/>
        <div className='product-card-image'>
  <img className='p-card-img' src="/public/watch-2.png" alt="" />
        </div>

<div className="compare-products-details">
    <h5 className="title">
         Smart Watch
    </h5> 
    <h6 className='price mb-3 mt-3'>$100</h6>

    <div>
        {/* 1st */}
        <div className='product-detail'>
            <h5>Brand: </h5>
            <p>Heavles</p>
        </div>
        {/* 2nd */}
        <div className='product-detail'>
            <h5>Type: </h5>
            <p>Watch</p>
        </div>
        {/* 3rd */}
        <div className='product-detail'>
            <h5>Availablity: </h5>
            <p>In Stock</p>
        </div>
        {/* 4th */}
        <div className='product-detail'>
            <h5>Color: </h5>
           <Color/>
        </div>
        {/* 5th */}
        <div className='product-detail'>
            <h5>Size: </h5>
           <div className='d-flex gap-10'>
 <p>S</p>
 <p>M</p>
           </div>
        </div>
    </div>
</div>

      </div>
     
   </div>
   <div className='col-3'>
      <div className='compare-product-card position-relative'>
      <RxCross2  className="fs-4 position-absolute cross-icon"/>
        <div className='product-card-image'>
  <img className='p-card-img' src="/public/watch-2.png" alt="" />
        </div>

<div className="compare-products-details">
    <h5 className="title">
         Smart Watch
    </h5> 
    <h6 className='price mb-3 mt-3'>$100</h6>

    <div>
        {/* 1st */}
        <div className='product-detail'>
            <h5>Brand: </h5>
            <p>Heavles</p>
        </div>
        {/* 2nd */}
        <div className='product-detail'>
            <h5>Type: </h5>
            <p>Watch</p>
        </div>
        {/* 3rd */}
        <div className='product-detail'>
            <h5>Availablity: </h5>
            <p>In Stock</p>
        </div>
        {/* 4th */}
        <div className='product-detail'>
            <h5>Color: </h5>
           <Color/>
        </div>
        {/* 5th */}
        <div className='product-detail'>
            <h5>Size: </h5>
           <div className='d-flex gap-10'>
 <p>S</p>
 <p>M</p>
           </div>
        </div>
    </div>
</div>

      </div>
     
   </div>

    </div>
            </div>
            </div>
        </div>
    );
};

export default CompareProducts;