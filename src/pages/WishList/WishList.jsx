import { RxCross2 } from "react-icons/rx";
import BreadCrump from "../../components/BreadCrump";
import Meta from "../../components/Meta/Meta";
import './WishList.css';

const WishList = () => {
    return (
        <div>
            <Meta title={"Wish-list"} />
            <BreadCrump title="Wish-list" />

            <div className="wishlist-wrapper home-wrapper-2 py-5">
   <div className="container-xxl">
      <div className="row">
        {/* 1st */}
        <div className="col-3">
             <div className='compare-product-card position-relative'>
      <RxCross2  className="fs-4 position-absolute cross-icon"/>
        <div className='product-card-image'>
  <img className='p-card-img' src="/public/watch-2.png" alt="" />
        </div>

<div className="compare-products-details">
    <h4 >
         Smart Watch
    </h4> 
    <h5 className='price mb-3 mt-3'>$100</h5>

</div>

      </div>
        </div>
        {/* 1st */}
        <div className="col-3">
             <div className='compare-product-card position-relative'>
      <RxCross2  className="fs-4 position-absolute cross-icon"/>
        <div className='product-card-image'>
  <img className='p-card-img' src="/public/watch-2.png" alt="" />
        </div>

<div className="compare-products-details">
    <h4 >
         Smart Watch
    </h4> 
    <h5 className='price mb-3 mt-3'>$100</h5>

</div>

      </div>
        </div>
        {/* 1st */}
        <div className="col-3">
             <div className='compare-product-card position-relative'>
      <RxCross2  className="fs-4 position-absolute cross-icon"/>
        <div className='product-card-image'>
  <img className='p-card-img' src="/public/watch-2.png" alt="" />
        </div>

<div className="compare-products-details">
    <h4 >
         Smart Watch
    </h4> 
    <h5 className='price mb-3 mt-3'>$100</h5>

</div>

      </div>
        </div>
      </div>
   </div>
            </div>
        </div>
    );
};

export default WishList;