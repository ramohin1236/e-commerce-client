import { Link } from "react-router-dom";
import BreadCrump from "../../components/BreadCrump";
import Meta from "../../components/Meta/Meta";
import Container from './../../components/Container/Container';
import CustomeInput from "../../components/CustomeInput/CustomeInput";
import { useFormik } from 'formik';
import * as yup from "yup"
import { useDispatch } from "react-redux";
import { registerUser } from "../../features/user/userSlice";



const signUpSchema = yup.object({
    firstname: yup.string().required("First Name is Required"),
    // nickName: yup.string().default('').nullable(),
    email: yup.string().required().email("Email Should be Vaild"),
    mobile: yup.string().required("Mobile no is required"),
    password: yup.string().required("Password is required"),

  });


const Signup = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
          firstname: '',
          mobile: '',
          email: '',
          password: '',
        },
        validationSchema: signUpSchema,
        onSubmit: (values) => {
        console.log(values);
        dispatch(registerUser(values))
        },
      });
    return (
        <div >
            <Meta title={"Sign-up"} />
            <BreadCrump title="Sign-up" /> 
            <Container class1="login-wrapper py-5 home-wrapper-2">
  
   <div className="row">
    <div className="col-12 " style={{"paddingBottom": "100px"}}>
   <div className="auth-card" >


   <form  onSubmit={formik.handleSubmit}> 
  
    <h1 className="login-h1 mb-3 fw-normal text-center">Sign Up</h1>

     <CustomeInput
      type="name" 
      name="firstname" 
      placeholder="first Name"
     value={formik.values.firstname}
     onChange={formik.handleChange("firstname")}
     onBlur={formik.handleBlur("firstname")}
     className="text-dark" id="firstname"/>
  <div style={{"color":"red"}}>
     {
        formik.touched.firstname && formik.errors.firstname
     }
  </div>
    
     <CustomeInput
      value={formik.values.mobile}
      onChange={formik.handleChange("mobile")}
      onBlur={formik.handleBlur("mobile")}
     type="number" 
     name="mobile" 
     className="form-control" 
     id="mobile"  
     placeholder="Mobile number"/>
    <div style={{"color":"red"}}>
     {
        formik.touched.mobile && formik.errors.mobile
     }
  </div>
     <CustomeInput
      value={formik.values.email}
      id="email"
      onChange={formik.handleChange("email")}
      onBlur={formik.handleBlur("email")}
     type="email"
      name="email" 
      className="form-control"  placeholder="name@example.com"/>
       <p style={{"color":"red"}}>
     {
        formik.touched.email && formik.errors.email
     }
  </p>
     <CustomeInput
      value={formik.values.password}
      id="password"
      onChange={formik.handleChange("password")}
      onBlur={formik.handleBlur("password")}
     type="password" 
     name="password" 
     className="form-control "
     placeholder="*******"/>
     <p style={{"color":"red"}}>
     {
        formik.touched.password && formik.errors.password
     }
     </p>
     
 
        <p>Already have an account? &nbsp;&nbsp;<Link className="fs-6" to='/login'>Login</Link></p>

<div className="d-flex justify-content-center gap-15 align-items-center mt-4">
<button type="submit" className="button-3" >Sign Up</button>

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