import { Link } from "react-router-dom";
import BreadCrump from "../../components/BreadCrump";
import Meta from "../../components/Meta/Meta";
import Container from "../../components/Container/Container";
import CustomeInput from "../../components/CustomeInput/CustomeInput";


const ForgotPassword = () => {
    return (
        <div>
               <Meta title={"Forgot-password"} />
            <BreadCrump title="Forgot-password" /> 
            <Container class1="login-wrapper py-5 home-wrapper-2">
            <div className="row">
    <div className="col-12">
   <div className="auth-card">
   <form>
    <h1 className="login-h1 mb-3 fw-normal text-center">Forget Your Password</h1>
    <p className="text-center">We will send you an email to forget your password</p>

<CustomeInput  type="email" name="email" className="form-control" id="floatingInput" placeholder="email@.com"/>
   
   
    
 

<div className="d-flex flex-column justify-content-center gap-15 align-items-center mt-4">
<button className="button-3" type="submit">Submit</button>
<Link to='/login'>Cancel</Link>

</div>

   
  </form>
   </div>
    </div>
   </div>
    </Container>
        </div>
    );
};

export default ForgotPassword;