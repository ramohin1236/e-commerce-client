import BreadCrump from "../../components/BreadCrump";
import Meta from "../../components/Meta/Meta";


const ResetPassword = () => {
    return (
        <div>
              <Meta title={"Reset-Password"} />
            <BreadCrump title="Reset-Password" /> 
            <div className="login-wrapper py-5 home-wrapper-2">
 <div className="container-xxl">
 <div className="row">
   <div className="col-12">
   <div className="auth-card">
   <form>
    {/* <img className='p-card-img' src="/public/watch-2.png" alt="" /> */}
    <h1 className="login-h1 mb-3 fw-normal text-center">Reset Password</h1>

    
  
    <div className="form-floating mb-3">
      <input type="password" name="password" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label htmlFor="floatingInput">password </label>
    </div>
    <div className="form-floating mb-3">
      <input type="password" name="confirm-password" className="form-control " id="floatingPassword" placeholder="Password"/>
      <label htmlFor="floatingPassword">Confirm Password</label>
    </div>
    
        {/* <p>Already have an account? &nbsp;&nbsp;<Link className="fs-6" to='/login'>Login</Link></p> */}

<div className="d-flex justify-content-center gap-15 align-items-center mt-4">
<button className="button-3" type="submit">Ok</button>

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
        </div>
    );
};

export default ResetPassword;