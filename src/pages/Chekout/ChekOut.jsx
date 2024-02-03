import { Link } from "react-router-dom";
import "./ChekOut.css";
import { IoMdArrowRoundBack } from "react-icons/io";
const ChekOut = () => {
    return (
        <div className="py-4">
            <div className="chekout-wrapper">
<div className="container-xxl">
  <div className="row">
    <div className="col-7">
        <div className="chekout-left-data">
            <h3 className="website-name">CNC jullycutting</h3>
            <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link className="text-dark" to="/cart">Cart</Link></li> &nbsp;/
    <li className="breadcrumb-item active" aria-current="page">Information</li>&nbsp;/
    <li className="breadcrumb-item active">Shipping</li> &nbsp;/
    <li className="breadcrumb-item active" aria-current="page">Payment</li>
  </ol>
</nav>
<h4 className="title">Contact Information</h4>
<p className="user-details">Robiul Awal Mohin &nbsp;(mohinr26@gmail.com)</p>
{/* form */}
<form action="" className="d-flex gap-15 flex-wrap justify-content-between">
<div className="w-100">
    <select className="form-control form-select" name="" id="">
        <option value="" selected disabled>Select Country</option>
    </select>
    </div>
<div className="flex-grow-1"><input placeholder="first name" type="text" className="form-control"/></div>
<div className="flex-grow-1"><input placeholder="last name" type="text" className="form-control"/></div>
<div className="w-100"><input placeholder="Address" type="text" className="form-control"/></div>
<div className="w-100"><input placeholder="Road,Apertment, etc.." type="text" className="form-control"/></div>
<div className="flex-grow-1"><input type="text" placeholder="City" className="form-control"/></div>
<div   className="flex-grow-1">
    <select className="form-control form-select" name="" id="">
        <option value="" selected disabled
        >Select State</option>
    </select>
    </div>
<div className="flex-grow-1"><input type="text" placeholder="Zip-code" className="form-control"/></div>

<div className="w-100">
  <div className="d-flex justify-content-between align-items-center">
     <Link  className="text-dark d-flex align-items-center mt-4" to="/cart "><IoMdArrowRoundBack  className="fs-4 "/>Return to Cart</Link>
     <Link  to="/store">Continue to Shipping</Link>
  </div>
</div>
</form>
        </div>
    </div>
    <div className="col-5"></div>
  </div>
</div>
            </div>
        </div>
    );
};

export default ChekOut;