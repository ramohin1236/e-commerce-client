/* eslint-disable react/no-unescaped-entities */
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './footer.css';
const Footer = () => {
    return (
        <div className='footer'>
            <footer className='py-4'>
               <div className="container-xxl">
                <div className="row align-items-center">
                    <div className="col-5">
                    <div className="footer-top-data d-flex gap-30 align-items-center">
                    <img src="/public/paper.png" alt="" />
                    <h2 className='text-white mb-0'>Sign Up for Newsletter</h2>
                    </div>
                    </div>
                    <div className="col-7">
                    <div className="input-group">
  <input type="text" className="form-control py-2" placeholder="Subscribe with email..." aria-label="Subscribe with email..." aria-describedby="basic-addon2" />
  <span className="input-group-text p-3" id="basic-addon2">
  Subscribe

  </span>
</div>
                    </div>
                </div>
               </div>
            </footer>
            <footer  className='py-4'>
             <div className="container-xxl">
                <div className="row">
                    <div className="col-4">
                    <h4 className='text-white'>Contact Us</h4>
                    <div>
                        <address className='text-white fs-6'>
                            Shapla Chattor: Near Signboard, <br />Dogair Bazar, Demra,Dhaka <br />PostCode: 1361 <br />Bangladesh
                        </address>
                        <a href="+880-01533872264" className='text-white mt-4 d-block mb-3 '>+880 01533872264</a>
                        <a href="mohinr26@gmail.com" className='text-white mt-4 d-block mb-3 '>mohinr26@gmail.com</a>

                        <div className="social_icons d-flex gap-30 align-items-center mt-4">
                            <a href="" className=""><FaFacebook  className="text-white fs-4"/></a>
                            <a href="" className=""><FaLinkedin  className="text-white fs-4"/></a>
                            <a href="" className=""><FaYoutube  className="text-white fs-4"/></a>
                            <a href="" className=""><FaInstagramSquare className="text-white fs-4" /></a>
                        </div>
                    </div>
                    </div>
                    <div className="col-3">
                    <h4 className='text-white'>Information</h4>
                
                    <div className='footer-links d-flex flex-column'>
                        <Link to="/privacy" className='text-white py-2 mb-1'>Privacy Policy</Link>
                        <Link to="/refund" className='text-white py-2 mb-1'>Refund Policy</Link>
                        <Link to="/shipping" className='text-white py-2 mb-1'>Shipping Policy</Link>
                        <Link to="/blogs" className='text-white py-2 mb-1'>Blogs</Link>
                        <Link to="/terms" className='text-white py-2 mb-1'>Terms & Conditions</Link>
                    </div>
                 
                    </div>
                    <div className="col-3">
                    <h4 className='text-white'>Account</h4>
               
                    <div className='footer-links d-flex flex-column'>
                        <Link className='text-white py-2 mb-1'>About Us</Link>
                        <Link className='text-white py-2 mb-1'>Faq</Link>
                        <Link className='text-white py-2 mb-1'>Contact</Link>
                        <Link className='text-white py-2 mb-1'>Watch</Link>
                    </div>
               
                    </div>
                    <div className="col-2">
                    <h4 className='text-white'>Quick Links</h4>
                    <div className='footer-links d-flex flex-column'>
                        <Link className='text-white py-2 mb-1'>Laptops</Link>
                        <Link className='text-white py-2 mb-1'>Headphones</Link>
                        <Link className='text-white py-2 mb-1'>Tablets</Link>
                        <Link className='text-white py-2 mb-1'>Watch</Link>
                    </div>
                    </div>
                </div>
             </div>
            </footer>
            <footer  className='py-4'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                       <p className='text-center mb-0'>&copy; {new Date().getFullYear()} powered by Developer's corner</p>
                    </div>
                </div>
            </div>
            </footer>

            
        </div>
    );
};

export default Footer;