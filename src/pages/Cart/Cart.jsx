import "./Cart.css";
import Meta from './../../components/Meta/Meta';
import BreadCrump from './../../components/BreadCrump';
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteCartProduct, getUserCart } from "../../features/user/userSlice";
import { useState } from "react";


const Cart = () => {
    const dispatch =useDispatch();
    const userCartState = useSelector((state)=>state?.auth?.cartProducts)
    
    const [totalAmount,setTotalAmount]= useState(null);
   
    useEffect(()=>{
        dispatch(getUserCart())
    },[dispatch])

 
    const deleteCartItem=(id)=>{
        dispatch(deleteCartProduct(id))
        setTimeout(()=>{
            dispatch(getUserCart())
        },200)
    }

    useEffect(()=>{
  let sum =0;
  for(let index =0; index < userCartState?.length; index++){
    sum = sum+(Number(userCartState[index].quantity)* userCartState[index].price)
    setTotalAmount(sum)
   
  }
    },[userCartState])

    return (
        <div>
                <Meta title={"Cart"} />
            <BreadCrump title="Cart" />
            <Container class1="cart-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
<div className="row">
  <div className="col-12">
     <div className="cart-header py-3 d-flex justify-content-between align-content-center">
        <h4 className="cart-col-1">Product</h4>
        <h4 className="cart-col-2">Price</h4>
        <h4 className="cart-col-3">Quantity</h4>
        <h4 className="cart-col-4">Total</h4>
     </div>
   
      {
        userCartState && userCartState?.map((item,idx)=>{
            return(
                <div key={idx} className="cart-data py-3 d-flex justify-content-between align-items-center mb-2">
                <div className="cart-col-1 d-flex align-items-center gap-15">
                 <div className="w-25">
                     <img className="img-fluid" src="https://images.othoba.com/images/thumbs/0604005_new-stylish-olevs-leather-quartz-movement-watch-for-men_300.webp" alt="" />
                 </div>
                 <div className="w-75">
                     <h5 >{item?.productId?.title}</h5>
                     <p className="d-flex gap-3">Color:
                    <ul className="colors ps-0">
                         <li style={{backgroundColor: item?.color?.title}} ></li>
                   </ul>
                  </p>
                     <p >Price: ${item?.price}</p>
                 </div>
                </div>
                <div className="cart-col-2 d-flex ">
                   <h5 className="price"> ${item?.price}</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center">
                  <div className="d-flex align-items-center gap-15"><input
                  min={1}
                  max={10}
                  value={item?.quantity}
                  type="number" 
                  name="" id=""  className="form-control"/>  
                  
                  <FaTrash onClick={()=>{deleteCartItem(item?._id)}} className="fs-3 text-danger"/></div>
                </div>
                <div className="cart-col-4 d-flex ">
                <h5 className="price">${item?.price * item?.quantity}</h5>
         
                </div>
              </div>
            )
        })
      }
   
    
    
  </div>
  {/* another column */}
  <div className="col-12 py-2 mt-4">
   <div className="d-flex justify-content-between align-items-baseline">
   <div >
   <Link to="/store" className="button-2">Continue Shopping</Link>
   </div>
    {
        (totalAmount !== null || totalAmount !==0) &&  <div className="d-flex flex-column align-items-end"><h4>SubTotal: $ {totalAmount}</h4>
        <p>Taxes and shippiing calculate at cheakout</p>
        <Link className="btn-3 w-30" to="/chekout">Chekout</Link>
        </div>
    }
  

   </div>
  </div>
</div>

                </div>
                </Container> 
        </div>
    );
};

export default Cart;