/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import BreadCrump from "../../components/BreadCrump";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import ProductCard from "../../components/FeaturedProduct/ProductCard";
import Meta from "../../components/Meta/Meta";
import "./SingleProduct.css";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from './../../components/Color/Color';
import Container from "../../components/Container/Container";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAProduct } from "../../features/Product/productSlice";
import { toast } from "react-toastify";


const SingleProduct = () => {
    const [color, setColor]=useState(null)
    const [quantity, setQuantity]=useState(1)
    const location =useLocation()
    const getProductId = location.pathname.split("/")[3]
    const dispatch =useDispatch()
    const productState = useSelector(state=>state?.product?.singleproduct)
    console.log(productState);
 
    useEffect(()=>{
        dispatch(getAProduct(getProductId))
       
    },[dispatch,getProductId])

    const uploadCart=()=>{
        if(color === null){
           toast.error("Please Choose Color")
        }
    }


    const props = {
         width: 400,
         height: 500, 
         zoomWidth: 500, 
         img: 
         productState?.images[0]?.url? productState?.images[0]?.url 
                      :                 
         "https://media.wired.com/photos/64de7dca4a854832b16fd3c0/1:1/w_1500,h_1500,c_limit/Garmin-Epix-Pro-Gear.jpg"
         
         };
        //  console.log(productState?.images[0]?.url);
    const [orderProduct, setOrderProduct]=useState(true);

// copy clipboard-----------
   const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }

    return (
        <div>
             <Meta title={"Dyanamic product"} />
            <BreadCrump title="Dyanamic product" /> 
            <Container class1="main-product-wrapper py-5 home-wrapper-2">
            <div className="row">
        {/* first column */}
        <div className="col-6">
            {/* main product image */}
   <div className="main-product-image">
   <div><ReactImageZoom {...props} /></div>
    
    
    </div>  
           {/* other product image  */}

   <div className="other-product-image d-flex flex-wrap gap-15">
          {
            productState?.images?.map?.((item,idx)=>{
                   return(
                    <div  key={idx}>
    <img src={item?.url}alt="" className="img-fluid small-pic"/>
</div> 
                   )
            })
          }

   </div>

        </div>
        {/* second column */}
        <div className="col-6">
  <div className="main-product-details ">
     <div className="bottom-border ">
     <h3 className="title">{productState?.title}</h3>
     </div>

     <div className="bottom-border py-3">
<p className="price ">
    $ {productState?.price}
</p>
<div className="d-flex align-items-center gap-10">
<ReactStars
    count={5}
    size={24}
 
    value={productState?.totalratings}
    activeColor="#ffd700"
  />
  <p className="mb-0">(2 Reviews)</p>
</div>
<a href="#review" className="review-btn">Write a Review</a>
</div>

<div className="py-3 ">
<div className="d-flex gap-10 align-items-center py-2">
    <h3 className="product-heading mb-0">Type: </h3> <p className="product-data mb-0">Watch</p>
</div>
<div className="d-flex gap-10 align-items-center mb-0 py-2">
    <h3 className="product-heading mb-0">Brand: </h3> <p className="product-data mb-0">{productState?.brand}</p>
</div>
<div className="d-flex gap-10 align-items-center mb-0 py-2">
    <h3 className="product-heading mb-0">Category: </h3> <p className="product-data mb-0">{productState?.category}</p>
</div>
<div className="d-flex gap-10 align-items-center mb-0 py-2">
    <h3 className="product-heading mb-0">Tags: </h3> <p className="product-data mb-0">{productState?.tags}</p>
</div>
<div className="d-flex gap-10 align-items-center mb-0 py-2">
    <h3 className="product-heading mb-0">Availability: </h3> <p className="product-data mb-0">In Stock</p>
</div>
<div className="d-flex gap-10 flex-column mt-2 mb-3 py-2">
    <h3 className="product-heading mb-0">Size: </h3> 
    <div className="d-flex flex-wrap gap-15">
<span className="badge border border-11 bg-white text-dark border-secondary">S</span>
<span className="badge border border-11 bg-white text-dark border-secondary">M</span>
<span className="badge border border-11 bg-white text-dark border-secondary">XL</span>
<span className="badge border border-11 bg-white text-dark border-secondary">XXL</span>

    </div>
</div>
<div className="d-flex gap-10 flex-column mb-0 py-2">
    <h3 className="product-heading mb-0">Color: </h3>
    <Color setColor={setColor} colorData={productState?.color}/>
</div>
<div className="d-flex align-items-center gap-15 flex-row mb-0 py-2">
    <h3 className="product-heading mb-0">Quantity: </h3>
    <div className="">
 <input 
 onChange={(e)=>setQuantity(e.target.value)}
 value={quantity}
 className="form-control" type="number" min={1} max={10} name="" id="" style={{"width": "100px"}}/>
    </div>

    <div className="d-flex align-items-center gap-30">
    <button onClick={()=>{uploadCart()}} className="button-3" type="submit">Add To Card</button>
<button to='/signup' className="button-2">Buy It Now</button>
    </div>
</div>

<div className="d-flex align-items-center gap-15 mt-3">
    <div >
      <a  href=""> <IoGitCompareOutline className="fs-4 mx-2 my-3"/>Add To Wishlist</a>  
    </div>
    <div>
      <a href=""><FaRegHeart className="fs-4 mx-2 my-3"/>Add To Compare</a>  
    </div>
</div>

{/* accordian */}
<div className="d-flex flex-column gap-10 my-3">
    <h3 className="product-heading mb-0">Shipping & Returns: </h3> <p className="product-data mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />  animi aperiam accusamus minus. <b style={{"color": "black"}}>5-7 bussiness days</b></p>
</div>
<div  className="d-flex  gap-10 align-items-center my-3">
    <h3 className="product-heading mb-0">Copy Product Link: </h3>
    <a href="javascript:void(0)"
    onClick={()=>{copyToClipboard(window.location.href)}}
    >Copy Product Link</a>
     
</div>
</div>


  </div>



        </div>
    </div>
            </Container>

            {/* descriptions */}
<Container  class1="descriptions-wrapper py-5 home-wrapper-2">
<div className="row">
        <div className="col-12">
        <h4>Descriptions</h4>
            <div className="bg-white p-3">
            
            <p dangerouslySetInnerHTML={{
                __html: productState?.description
            }} style={{fontSize: "20px"}}>
           
            </p>
            </div>
        </div>
    </div>
</Container>
{/* reviews */}
<Container class1="reviews-wrapper py-5 home-wrapper-2">
<div className="row">
    <h4 id="review">Reviews</h4>
    <div className="col-12">
  <div className="review-inner-wrapper">
  <div className="review-head d-flex justify-content-between align-items-end">
  <div >
    <h3 className="mb-2">Customer Reviews</h3>
    <div className="d-flex gap-10 align-items-center" >
    <ReactStars
    count={5}
    size={24}
 
    
    activeColor="#ffd700"
  />
  <p className="mb-0">Based on 2 Reviews</p>
    </div>
  </div>

{
    orderProduct && (
        <div>
        <a className="text-dark text-decoration-underline" href="">Write a Review</a>
      </div>
    )
}
 
</div>

{/* *******************form****************** */}
  <div  className="review-form py-4">
    <h4 className="mb-2">Customer Reviews</h4>
  <form action="" className='d-flex flex-column gap-15 '>
  <div>
    <ReactStars
    count={5}
    size={24}
 edit={true}
   value={4} 
    activeColor="#ffd700"
  />
    </div>
       
      
      
        {/* 4 */}
        <div>
        <textarea placeholder='Comments' name="" id="" cols="30" className='w-100 form-control' rows="4"></textarea>
        </div> 
       <div className="d-flex justify-content-end">
       <button className='button btn-2 border-0'>Submit Review</button>
       </div>
    </form>
  </div>

  {/* reviews shown */}
  <div className="reviews mt-4">
     <div className="review">
   <div className="d-flex gap-10 align-items-center">
    <h5 className="mb-0">Robiul Awal Mohin</h5>
   <ReactStars
    count={5}
    size={24}
 edit={true}
   value={4} 
    activeColor="#ffd700"
  />
    </div>  
   
  <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quasi dolor adipisci ea iure, culpa commodi qui excepturi ad aspernatur fugit, error, omnis quibusdam placeat! Voluptatum autem cupiditate, pariatur magni quod reprehenderit, maiores perferendis aliquid tempora libero delectus officia qui.</p>

     </div>

  </div>
  </div>
    </div>
</div>
</Container>

            {/* product */}
            <Container class1='featured-wrapper py-5 home-wrapper-2'>
         
            <ProductCard/>
         
          </Container>
        </div>
    );
};

export default SingleProduct;