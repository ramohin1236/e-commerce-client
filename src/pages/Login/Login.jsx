import { Link } from "react-router-dom";
import BreadCrump from "../../components/BreadCrump";
import Meta from "../../components/Meta/Meta";
import './Login.css';
import Container from "../../components/Container/Container";
import CustomeInput from "../../components/CustomeInput/CustomeInput";
const Login = () => {
    return (
        <div>
             <Meta title={"Login"} />
            <BreadCrump title="Login" />
    <Container class1="login-wrapper py-5 home-wrapper-2">
    <div className="row">
    <div className="col-12">
   <div className="auth-card">
   <form>
    
    <h1 className="login-h1 mb-3 fw-normal text-center">Login</h1>
  <CustomeInput type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <CustomeInput type="password" name="password" className="form-control " id="floatingPassword" placeholder="********"/>
   
 <Link to='/forgot-password'>Forgot Password?</Link>

<div className="d-flex justify-content-center gap-15 align-items-center mt-4">
<button className="button-3" type="submit">Sign In</button>
<Link to='/signup' className="button-2 text-white"> Sign Up</Link>
</div>

  </form>
   </div>
    </div>
   </div>
    </Container>
        </div>
    );
};

export default Login;