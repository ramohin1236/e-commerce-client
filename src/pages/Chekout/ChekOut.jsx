/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import "./ChekOut.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import Container from "../../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as yup from "yup";



const shippingSchema = yup.object({

    firstName: yup.string().required("First Name is required"),
    address: yup.string().required("Address Details are required"),
    state: yup.string().required("State is required"),
    road: yup.string().required("Road is required"),
    city: yup.string().required("City is required"),
    country: yup.string().required("Country is required"),
    pincode: yup.number().required("Pincode is required"),

  

  });

const ChekOut = () => {
    // const dispatch =useDispatch();
    const cartState = useSelector((state)=>state?.auth?.cartProducts);

    const [totalAmount,setTotalAmount]= useState(null);
    // const [shippingInfo,setShippingInfo]= useState(null);

   

   
 useEffect(()=>{
        let sum =0;
        for(let index =0; index < cartState?.length; index++){
          sum = sum+(Number(cartState[index].quantity)* cartState[index].price)
          setTotalAmount(sum)
         
        }
          },[cartState])


          const formik = useFormik({
            initialValues: {
                firstName: "",
                address: "",
                state: "",
                road: "",
                city: "",
                country: "",
                pincode: "",
            },
            validationSchema: shippingSchema,
            onSubmit: (values) => {
          
            //   setShippingInfo(values)
            },
          });









    return (
    
            <Container class1="chekout-wrapper home-wrapper-2 py-5">
<div className="container-xxl">
  <div className="row">
    {/* left side */}
    <div className="col-7">
        <div className="chekout-left-data">
            <h3 className="website-name">CNC jullycutting</h3>
            <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item total-price "><Link className="text-dark" to="/cart">Cart</Link></li> &nbsp;/
    <li className="breadcrumb-item total-price active" aria-current="page">Information</li>&nbsp;/
    <li className="breadcrumb-item total-price active">Shipping</li> &nbsp;/
    <li className="breadcrumb-item total-price active" aria-current="page">Payment</li>
  </ol>
</nav>
<h4 className="title total">Contact Information</h4>
<p className="user-details">Robiul Awal Mohin &nbsp;(mohinr26@gmail.com)</p>
<h4 className="mb-3">Shipping Address</h4>


{/* form */}


<form 
onSubmit={formik.handleSubmit}
action="" className="d-flex gap-15 flex-wrap justify-content-between">
<div className="w-100">
    <select 
    value={formik.values.country}
    onChange={formik.handleChange("country")}
    onBlur={formik.handleBlur("country")}
    className="form-control form-select p-3" name="country" id="">
        <option value="" >Select Country</option>
        <option value="Bangladesh" >Bangladesh</option>
    </select>
    <div className="error" style={{"color": "red"}}>
        {
            formik.touched.country && formik.errors.country
        }
    </div>
    </div>
   
<div className="flex-grow-1"><input
 value={formik.values.firstName}
 onChange={formik.handleChange("firstName")}
 onBlur={formik.handleBlur("firstName")}
 name="firstName"
placeholder="first name" type="text" className="form-control p-3"/>
 <div className="error" style={{"color": "red"}}>
        {
            formik.touched.firstName && formik.errors.firstName
        }
    </div>
</div>

<div className="w-100">
    <input
     value={formik.values.address}
     onChange={formik.handleChange("address")}
     onBlur={formik.handleBlur("address")}
     name="address"
    placeholder="Address" type="text" className="form-control p-3"/>
    <div className="error" style={{"color": "red"}}>
        {
            formik.touched.address && formik.errors.address
        }
    </div>
</div>
<div className="w-100"><input
value={formik.values.road}
onChange={formik.handleChange("road")}
onBlur={formik.handleBlur("road")}
name="road"
placeholder="Road,Apertment, etc.." type="text" className="form-control p-3"/>
<div className="error" style={{"color": "red"}}>
        {
            formik.touched.road && formik.errors.road
        }
    </div>
</div>
<div className="flex-grow-1"><input 
value={formik.values.city}
onChange={formik.handleChange("city")}
onBlur={formik.handleBlur("city")}
name="city"
type="text" placeholder="City" className="form-control p-3"/>
<div className="error" style={{"color": "red"}}>
        {
            formik.touched.city && formik.errors.city
        }
    </div>
</div>
<div   className="flex-grow-1">
    <select 
    value={formik.values.state}
    onChange={formik.handleChange("state")}
    onBlur={formik.handleBlur("state")}
    name="state"
    className="form-control form-select p-3" id="">
        <option value="" 
        >Select State</option>
        <option value="Demra" >Demra</option>
        <option value="Dhanmondi" >Dhanmondi</option>
    </select>
    <div className="error" style={{"color": "red"}}>
        {
            formik.touched.state && formik.errors.state
        }
    </div>
    </div>
<div className="flex-grow-1"><input 
value={formik.values.pincode}
onChange={formik.handleChange("pincode")}
onBlur={formik.handleBlur("pincode")}
name="pincode"
type="text" placeholder="Zip-code" className="form-control p-3"/>
 <div className="error" style={{"color": "red"}}>
        {
            formik.touched.pincode && formik.errors.pincode
        }
    </div>
</div>



<div className="w-100">
  <div className="d-flex justify-content-between align-items-center">
     <Link  className="text-dark d-flex align-items-center mt-4" to="/cart "><IoMdArrowRoundBack  className="fs-4 "/>Return to Cart</Link>
     <Link  className="btn-3" to="/store">Continue to Shipping</Link>
     <button 
  
     style={{"backgroundColor":"blue" ,"color":"white", "padding":"10px", "borderRadius":"10px"}} color="button" type="submit">Place Order</button>
  </div>
</div>
</form>
        </div>
    </div>
    {/* right side  */}
    <div className="col-5">
        <div className="bottom-border py-4">
            {
                cartState && cartState?.map((item,idx)=>{
                    return(
                        <div key={idx} className="d-flex align-items-center gap-10 justify-content-between mb-2">
                        <div className="w-75 d-flex gap-10">
                  
                        <div className="w-25 position-relative">
                         <span style={{top: "-14px", right: "2px"}} className="badge bg-danger text-white rounded-circle p-2 position-absolute">{item?.quantity}</span>
                        <img  className=" mb-0 " src={item?.productId?.images[0]?.url} alt="" />
                        </div>
             
             <div>
             <h5 className="title total">{item?.productId?.title}</h5>
             <p className="total-price">{item?.color?.title}</p>
             </div>
             
             
                        </div>
                        <div className="flex-grow-1">
                         <h5 className="total">$ {item?.price* item?.quantity}</h5>
                         </div>
                         </div> 
                    )
                })
            }
          
               
           
        </div>
       

<div className="bottom-border py-4">
<div className="d-flex justify-content-between align-items-center">
  <p className="mb-0 total">Subtotal</p>
  <p className="mb-0 total-price">$ {totalAmount? totalAmount : "00"}</p>
        </div>
<div className="d-flex justify-content-between align-items-center">
  <p className="mb-0 total">Shipping</p>
  <p className="mb-0 total-price">$10</p>
        </div>
</div>

        <div className="d-flex justify-content-between align-items-center bottom-border py-4">
  <h4 className="total">Total</h4>
  <h5 className="total-price">$ {totalAmount? totalAmount+10 : "00"}</h5>
        </div>
    </div>
  </div>

</div>
            </Container>
        
     
    );
};

export default ChekOut;