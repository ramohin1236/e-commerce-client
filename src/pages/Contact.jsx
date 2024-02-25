/* eslint-disable react/no-unknown-property */
import './Contact.css';
import Meta from "../components/Meta/Meta";
import BreadCrump from "../components/BreadCrump";
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoInformationOutline } from "react-icons/io5";
import Container from '../components/Container/Container';
import { useFormik } from 'formik';
import * as yup from "yup";


const contactSchema = yup.object({
    
    name: yup.string().required("Name is required"),
    email: yup.string().email("Email Should be Vaild").required("Email is required"),

    mobile: yup.string().default('').nullable().required("Mobile Number is required"),
    comment: yup.string().default('').nullable().required("Comments Number is required"),

  });


const Contact = () => {
    const formik = useFormik({
        initialValues: {
          name: '',
          mobile: '',
          email: '',
          comment: '',
        },
        validationSchema: contactSchema,
        onSubmit: (values) => {
         console.log(values);
        },
      });
    return (
        <div>
                <Meta title={"Contact"} />
            <BreadCrump title="Contact" />
            <Container class1="contact-wrapper py-5 home-wrapper-2">
            <div className="row">
            <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2583.175391636578!2d90.47884861821272!3d23.705919931354853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b778688fdc1f%3A0xfa8444d82c76c89b!2sSTL%20Garments!5e0!3m2!1sen!2sbd!4v1706541957338!5m2!1sen!2sbd" width="600" height="450" className="boreder-0 w-100"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {/* form */}
            <div className="col-12 mt-5">
    <div className="contact-inner-wrapper d-flex justify-content-between">
<div>
    <h3 className="contact-title ">Contact</h3>
    {/* form */}
    <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
        {/* 1 */}
        <div>
        <input 
        type="text" 
        className="form-control" 
        placeholder='Name' 
         name='name'
         onChange={formik.handleChange("name")}
         onBlur={formik.handleBlur("name")}
         value={formik.values.name}
        />
        </div>
        <p style={{"color":"red"}}>
     {
        formik.touched.name && formik.errors.name
     }
  </p>
        {/* 2 */}
        <div>
        <input 
         name='email'
         onChange={formik.handleChange("email")}
         onBlur={formik.handleBlur("email")}
         value={formik.values.email}
        type="email" 
        className="form-control" 
        placeholder='Email' />
        </div>
        <p style={{"color":"red"}}>
     {
        formik.touched.email && formik.errors.email
     }
  </p>
        {/* 3 */}
        <div>
        <input 
         name='mobile'
         onChange={formik.handleChange("mobile")}
         onBlur={formik.handleBlur("mobile")}
         value={formik.values.mobile}
        type="number" 
        className="form-control"
         placeholder='Mobile Number' />
        </div>
        <p style={{"color":"red"}}>
     {
        formik.touched.mobile && formik.errors.mobile
     }
  </p>
        {/* 4 */}
        <div>
        <textarea 
         name='comment'
         onChange={formik.handleChange("comment")}
         onBlur={formik.handleBlur("comment")}
         value={formik.values.comment}
        placeholder='Comments'
        id="" 
        cols="30"
         className='w-100 form-control' 
         rows="4"></textarea>
        </div> 
        <p style={{"color":"red"}}>
     {
        formik.touched.comment && formik.errors.comment
     }
  </p>
        <button type='submit' className='button btn-2 border-0'>Submit</button>
    </form>
    </div>
<div>
    <h3 className="contact-title ">Get in touch with us</h3>
    <div>
        <ul className='ps-0'>
            <li className='mb-3 d-flex gap-10 align-items-center'>
                <FaHome className="fs-5 icon-2"/>
            <address className='mb-0'>Hno:1361, Near Dogair, Signboard</address>
            </li>
            <li className='mb-3 d-flex gap-10 align-items-center'>
                <IoCall className="fs-5 icon-2"/>
            <a href="tel: +088 01533872264">01533872264</a>
            </li>
            <li className='mb-3 d-flex gap-10 align-items-center'>
                <MdEmail className="fs-5 icon-2"/>
                <a href="email to: mohinr26@gmail.com">
                mohinr26@gmail.com
                </a>
                </li>
            <li className='mb-3 d-flex gap-10 align-items-center'>
                <IoInformationOutline className="fs-5 icon-2"/>
                <p className='mb-0'>
                    Saturday - Thursdaty 8 AM - 8 PM
                </p>
                </li>
        </ul>
    </div>
    </div>
    
    </div>
            </div>
        </div>
            </Container>
        </div>
    );
};

export default Contact;