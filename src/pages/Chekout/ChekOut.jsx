import { Link } from "react-router-dom";
import "./ChekOut.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import Container from "../../components/Container/Container";
const ChekOut = () => {
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
<form action="" className="d-flex gap-15 flex-wrap justify-content-between">
<div className="w-100">
    <select className="form-control form-select p-3" name="" id="">
        <option value="" selected disabled>Select Country</option>
    </select>
    </div>
<div className="flex-grow-1"><input placeholder="first name" type="text" className="form-control p-3"/></div>
<div className="flex-grow-1"><input placeholder="last name" type="text" className="form-control p-3"/></div>
<div className="w-100"><input placeholder="Address" type="text" className="form-control p-3"/></div>
<div className="w-100"><input placeholder="Road,Apertment, etc.." type="text" className="form-control p-3"/></div>
<div className="flex-grow-1"><input type="text" placeholder="City" className="form-control p-3"/></div>
<div   className="flex-grow-1">
    <select className="form-control form-select p-3" name="" id="">
        <option value="" selected disabled
        >Select State</option>
    </select>
    </div>
<div className="flex-grow-1"><input type="text" placeholder="Zip-code" className="form-control p-3"/></div>



<div className="w-100">
  <div className="d-flex justify-content-between align-items-center">
     <Link  className="text-dark d-flex align-items-center mt-4" to="/cart "><IoMdArrowRoundBack  className="fs-4 "/>Return to Cart</Link>
     <Link  className="btn-3" to="/store">Continue to Shipping</Link>
  </div>
</div>
</form>
        </div>
    </div>
    {/* right side  */}
    <div className="col-5">
        <div className="bottom-border py-4">
           <div className="d-flex align-items-center gap-10 justify-content-between mb-2">
           <div className="w-75 d-flex gap-10">
     
           <div className="w-25 position-relative">
            <span style={{top: "-14px", right: "2px"}} className="badge bg-danger text-white rounded-circle p-2 position-absolute">1</span>
           <img className="img-fluid mb-0 badge-img" src="/public/watch-1.png" alt="" />
           </div>

<div>
<h5 className="title total">asfa</h5>
<p className="total-price">a/ #agff</p>
</div>


           </div>
           <div className="flex-grow-1">
            <h5 className="total">$100</h5>
            </div>
            </div> 
               
           
        </div>
       

<div className="bottom-border py-4">
<div className="d-flex justify-content-between align-items-center">
  <p className="mb-0 total">Subtotal</p>
  <p className="mb-0 total-price">$10000</p>
        </div>
<div className="d-flex justify-content-between align-items-center">
  <p className="mb-0 total">Shipping</p>
  <p className="mb-0 total-price">$10000</p>
        </div>
</div>

        <div className="d-flex justify-content-between align-items-center bottom-border py-4">
  <h4 className="total">Total</h4>
  <h5 className="total-price">$10000</h5>
        </div>
    </div>
  </div>
</div>
            </Container>
     
    );
};

export default ChekOut;