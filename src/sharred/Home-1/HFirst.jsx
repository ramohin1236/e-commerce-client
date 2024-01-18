import './Hfirst.css';
import { FaCar, FaGift, FaHeadphones, FaRegCreditCard } from "react-icons/fa";
import { LuBadgePercent } from "react-icons/lu";

const HFirst = () => {
    return (
        <div className='container-xxl'>
            <div className="row">
                <div className="col-12">
                    <div className='services d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center gap-15'>
                            <FaCar className="fs-2" />
                            <div>
                                <h6>Free Shipping</h6>
                                <p className='mb-0'>From all orders over $5</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-15'>
                            <FaGift className="fs-2" />
                            <div>
                            <h6>Only Surprice Offers</h6>
                            <p className='mb-0'>Save up to 25% off</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-15'>
                            <FaHeadphones className="fs-2" />

                          <div>
                          <h6>Support 24/7</h6>
                            <p className='mb-0'>Shop with an expert</p>
                          </div>
                        </div>
                        <div className='d-flex align-items-center gap-15' >
                            <LuBadgePercent className="fs-2" />
                         <div>
                         <h6>Affordable Prices</h6>
                            <p className='mb-0'>Get Factory Default Price</p>
                         </div>
                        </div>
                        <div className='d-flex align-items-center gap-15'>
                            <FaRegCreditCard className="fs-2" />
                            <div>
                            <h6>Secure Payment</h6>
                            <p className='mb-0'>100% protected</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HFirst;