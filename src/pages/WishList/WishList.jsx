import { RxCross2 } from "react-icons/rx";
import BreadCrump from "../../components/BreadCrump";
import Meta from "../../components/Meta/Meta";
import './WishList.css';
import Container from "../../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserProductWishlist } from "../../features/user/userSlice";

const WishList = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        getWishlistFromDb()
    },[])
    const getWishlistFromDb =()=>{
        dispatch(getUserProductWishlist())
    }

    const wishListState =useSelector((state)=>state?.auth?.wishlist?.wishlist)
console.log(wishListState);
    return (

        <div>
            <Meta title={"Wish-list"} />
            <BreadCrump title="Wish-list" />

            <Container class1="wishlist-wrapper home-wrapper-2 py-5">
            <div className="row">
         {
            wishListState?.map((item,idx)=>{
                return(
<div key={idx} className="col-3">
             <div className='compare-product-card position-relative'>
      <RxCross2  className="fs-4 position-absolute cross-icon"/>
        <div className='product-card-image'>
  <img className='p-card-img' src={item?.images[0]?.url? item?.images[0]?.url:"https://images.othoba.com/images/thumbs/0604005_new-stylish-olevs-leather-quartz-movement-watch-for-men_300.webp"  } alt="" />
        </div>
        
<div className="compare-products-details">
    <h4 >
        {item?.title}
    </h4> 
    <h5 className='price mb-3 mt-3'>${item?.price}</h5>

</div>

      </div>
        </div>
                )
            })
         }
        {/* 1st */}
        
        {/* 1st */}
        
      </div>
            </Container>
        </div>
    );
};

export default WishList;