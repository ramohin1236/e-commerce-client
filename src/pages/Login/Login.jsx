import { Link } from "react-router-dom";
import BreadCrump from "../../components/BreadCrump";
import Meta from "../../components/Meta/Meta";
import './Login.css';
const Login = () => {
    return (
        <div>
             <Meta title={"Login"} />
            <BreadCrump title="Login" />
    <div className="login-wrapper py-5 home-wrapper-2">
   <div className="row">
    <div className="col-12">
   <div className="auth-card">
   <form>
    {/* <img className='p-card-img' src="/public/watch-2.png" alt="" /> */}
    <h1 className="login-h1 mb-3 fw-normal text-center">Login</h1>

    <div className="form-floating mb-3">
      <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating mb-3">
      <input type="password" name="password" className="form-control " id="floatingPassword" placeholder="Password"/>
      <label htmlFor="floatingPassword">Password</label>
    </div>
    
        <Link to='/forgot-password'>Forgot Password</Link>

<div className="d-flex justify-content-center gap-15 align-items-center mt-4">
<button className="button-3" type="submit">Sign In</button>
<Link to='/forgot-password' className="button-2"> Sign Up</Link>
</div>

    {/* <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
   
    <p className="mt-5 mb-3 text-muted">© 2017–2021</p> */}
  </form>
   </div>
    </div>
   </div>
    </div>
        </div>
    );
};

export default Login;