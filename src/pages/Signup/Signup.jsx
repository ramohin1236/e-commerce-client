import { Link } from "react-router-dom";
import BreadCrump from "../../components/BreadCrump";
import Meta from "../../components/Meta/Meta";
import Container from './../../components/Container/Container';
import CustomeInput from "../../components/CustomeInput/CustomeInput";


const Signup = () => {
    return (
        <div>
            <Meta title={"Sign-up"} />
            <BreadCrump title="Sign-up" /> 
            <Container class1="login-wrapper py-5 home-wrapper-2">
  
   <div className="row">
    <div className="col-12">
   <div className="auth-card">
   <form > 
  
    <h1 className="login-h1 mb-3 fw-normal text-center">Sign Up</h1>

     <CustomeInput type="name" name="name" placeholder="Name" className="text-dark" />
  
    
     <CustomeInput type="number" name="mobile" className="form-control"  placeholder="Mobile number"/>
   
     <CustomeInput type="email" name="email" className="form-control"  placeholder="name@example.com"/>
     
     <CustomeInput  type="password" name="password" className="form-control "placeholder="*******"/>
    
        <p>Already have an account? &nbsp;&nbsp;<Link className="fs-6" to='/login'>Login</Link></p>

<div className="d-flex justify-content-center gap-15 align-items-center mt-4">
<button className="button-3" type="submit">Sign Up</button>

</div>

  </form>
   </div>
    </div>
   </div>
  
    </Container>
        </div>
    );
};

export default Signup;