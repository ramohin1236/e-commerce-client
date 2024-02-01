/* eslint-disable react/no-unknown-property */
import './Contact.css';
import Meta from "../components/Meta/Meta";
import BreadCrump from "../components/BreadCrump";
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoInformationOutline } from "react-icons/io5";


const Contact = () => {

    return (
        <div>
                <Meta title={"Contact"} />
            <BreadCrump title="Contact" />
            <div className="contact-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
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
    <form action="" className='d-flex flex-column gap-15 '>
        {/* 1 */}
        <div>
        <input type="text" className="form-control" placeholder='Name' />
        </div>
        {/* 2 */}
        <div>
        <input type="text" className="form-control" placeholder='Email' />
        </div>
        {/* 3 */}
        <div>
        <input type="text" className="form-control" placeholder='Mobile Number' />
        </div>
        {/* 4 */}
        <div>
        <textarea placeholder='Comments' name="" id="" cols="30" className='w-100 form-control' rows="4"></textarea>
        </div> 
        <button className='button btn-2 border-0'>Submit</button>
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
      </div>
            </div>
        </div>
    );
};

export default Contact;