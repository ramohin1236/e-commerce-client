/* eslint-disable no-unused-vars */
import { useState } from "react";
import BreadCrump from "../../components/BreadCrump";
import ProductCard from "../../components/FeaturedProduct/ProductCard";
import Meta from "../../components/Meta/Meta";
import "./SingleProduct.css";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';

const SingleProduct = () => {
    const props = {
        //  width: 350,
         height: 500, 
         zoomWidth: 500, 
         img: "https://media.wired.com/photos/64de7dca4a854832b16fd3c0/1:1/w_1500,h_1500,c_limit/Garmin-Epix-Pro-Gear.jpg"};
    const [orderProduct, setOrderProduct]=useState(true);
    return (
        <div>
             <Meta title={"Dyanamic product"} />
            <BreadCrump title="Dyanamic product" /> 
            <div className="main-product-wrapper py-5 home-wrapper-2">
 <div className="container-xxl ">
    <div className="row">
        <div className="col-6">
            {/* main product image */}
   <div className="main-product-image">
   <div><ReactImageZoom {...props} /></div>
    
    
    </div>  
           {/* other product image  */}

   <div className="other-product-image d-flex flex-wrap gap-15">
<div>
    <img src="https://media.wired.com/photos/64de7dca4a854832b16fd3c0/1:1/w_1500,h_1500,c_limit/Garmin-Epix-Pro-Gear.jpg" alt="" className="img-fluid small-pic"/>
    </div> 
<div>
    <img src="https://media.wired.com/photos/64de7dca4a854832b16fd3c0/1:1/w_1500,h_1500,c_limit/Garmin-Epix-Pro-Gear.jpg" alt="" className="img-fluid small-pic"/>
    </div> 
<div>
    <img src="https://media.wired.com/photos/64de7dca4a854832b16fd3c0/1:1/w_1500,h_1500,c_limit/Garmin-Epix-Pro-Gear.jpg" alt="" className="img-fluid small-pic"/>
    </div> 
<div>
    <img src="https://media.wired.com/photos/64de7dca4a854832b16fd3c0/1:1/w_1500,h_1500,c_limit/Garmin-Epix-Pro-Gear.jpg" alt="" className="img-fluid small-pic"/>
    </div> 
   </div>

        </div>
        <div className="col-6">

        </div>
    </div>
 </div>
            </div>

            {/* descriptions */}
<div className="descriptions-wrapper py-5 home-wrapper-2">
<div className="container-xxl">
    <div className="row">
        <div className="col-12">
        <h4>Descriptions</h4>
            <div className="bg-white p-3">
         
            <p >
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, cumque! Qui sequi totam voluptatibus impedit dolores optio, eos eveniet laudantium veniam porro molestiae ea. Aliquam voluptates sint iste rerum et!
 Assumenda repudiandae fuga impedit similique labore voluptatibus eveniet omnis accusamus rem, corporis nostrum ad quam est nesciunt dolores cupiditate sint eaque suscipit error excepturi alias.
            </p>
            </div>
        </div>
    </div>
</div>
</div>
{/* reviews */}
<div className="reviews-wrapper py-5 home-wrapper-2">
<div className="container-xxl">
<div className="row">
    <h4>Reviews</h4>
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
  <div className="review-form py-4">
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
</div>
</div>

            {/* product */}
            <section className='featured-wrapper py-5 home-wrapper-2'>
            <div className="container-xxl">
            <ProductCard/>
            </div>
          </section>
        </div>
    );
};

export default SingleProduct;