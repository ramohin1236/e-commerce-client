import { Link, useNavigate } from "react-router-dom";
import BreadCrump from "../../components/BreadCrump";
import Meta from "../../components/Meta/Meta";
import './Login.css';
import Container from "../../components/Container/Container";
import CustomeInput from "../../components/CustomeInput/CustomeInput";
import { useFormik } from 'formik';
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/user/userSlice";

const loginSchema = yup.object({

    email: yup.string().email("Email Should be Vaild").required("Email is required"),

    password: yup.string().required("Password is required"),

  });





const Login = () => {
    const authState =useSelector((state)=>state?.auth)
 
    const navigate= useNavigate()

  const dispatch =useDispatch()
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
          dispatch(loginUser(values))
          setTimeout(()=>{
         
            if(authState.isSuccess){
                navigate("/")
            }
          })
        },
      });
    return (
        <div>
             <Meta title={"Login"} />
            <BreadCrump title="Login" />
    <Container class1="login-wrapper py-5 home-wrapper-2">
    <div className="row">
    <div className="col-12">
   <div className="auth-card">
   <form onSubmit={formik.handleSubmit}>
    
    <h1 className="login-h1 mb-3 fw-normal text-center">Login</h1>
  <CustomeInput
  id="email"
  value={formik.values.email}
  onChange={formik.handleChange("email")}
  onBlur={formik.handleBlur("email")}
  type="email" name="email" className="form-control"  placeholder="name@example.com"/>
 <p style={{"color":"red"}}>
     {
        formik.touched.email && formik.errors.email
     }
  </p>
  <CustomeInput 
  type="password" 
  name="password" 
  value={formik.values.password}
  className="form-control "  
  id="password"
      onChange={formik.handleChange("password")}
      onBlur={formik.handleBlur("password")} placeholder="********"/>
    <p style={{"color":"red"}}>
     {
        formik.touched.password && formik.errors.password
     }
     </p>
 <Link to='/forgot-password'>Forgot Password?</Link>

<div className="d-flex justify-content-center gap-15 align-items-center mt-4">
<button 

className="button-3" type="submit">Sign In</button>
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