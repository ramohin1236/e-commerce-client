import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div>
          <section className="home-wrapper-1 py-5">
           <div className="container-xxl">
            <div className="row">
                <div className="col-6">
                <div className="main-banner position-relative">
                       <img src="/public/iPhone-15-2.jpg" alt=""  className='img-fluid rounded-3'/>
                       <div className="main-banner-content position-absolute text-white">
                        <h4>High quality tempared glass panel</h4>
                        <h5>Gazi Smiss - B207</h5>
                        <p>From $999.00 or $41.62/mo.</p>
                        <Link className='button'>Buy Now</Link>
                    </div>
                    </div>

                   
                </div>
                {/* 2nd column */}
                <div className="col-6">
                    <div className='container gap-15 justify-content-between align-items-center'> 
                   <div className='row'>
                     {/* 1 img */}
                     <div className="small-banner position-relative p-3 col">
                       <img src="/public/air.png" alt=""  className='img-fluid rounded-3'/>
                       <div className="small-banner-content position-absolute text-white">
                        <h4>New Arrival</h4>
                        <h5>Gazi Smiss - B207</h5>
                        <p>From $999.00 or <br /><br /> $41.62/mo.</p>
                        <Link className='button-2'>Buy Now</Link>
                    </div>
                    </div>
                    {/* 2 img */}
                    <div className="small-banner position-relative p-3 col">
                       <img src="/public/apple-wach.jpg" alt=""  className='img-fluid rounded-3'/>
                       <div className="small-banner-content position-absolute text-white">
                        <h4>New Arrival</h4>
                        <h5>Gazi Smiss - B207</h5>
                        <p>From $999.00 or <br /> <br /> $41.62/mo.</p>
                        <Link className='button-2'>Buy Now</Link>
                    </div>
                    </div>
                    </div>
                    
                    <div className='row'>
                        {/* 3 img */}
                    <div className="small-banner position-relative p-3 col">
                       <img src="/public/apple-lap.jpg" alt=""  className='img-fluid rounded-3'/>
                       <div className="small-banner-content position-absolute text-white">
                        <h4>New Arrival</h4>
                        <h5>Gazi Smiss - B207</h5>
                        <p>From $999.00 or <br /> <br /> $41.62/mo.</p>
                        <Link className='button-2'>Buy Now</Link>
                    </div>
                    </div>
                    {/* 4 img */}
                    <div className="small-banner position-relative p-3 col">
                       <img src="/public/ipad.jpg" alt=""  className='img-fluid rounded-3'/>
                       <div className="small-banner-content position-absolute text-white">
                        <h4>New Arrival</h4>
                        <h5>Gazi Smiss - B207</h5>
                        <p>From $999.00 or <br /> <br /> $41.62/mo.</p>
                        <Link className='button-2'>Buy Now</Link>
                    </div>
                    </div>
                    </div>
                   
                    </div>
                </div>
            </div>
           </div>
          
          </section>
        </div>
    );
};

export default Home;