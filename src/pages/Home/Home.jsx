import { Link } from 'react-router-dom';
import './Home.css';
import HFirst from '../../sharred/Home-1/HFirst';
import HSecond from '../../sharred/Home-2/HSecond';
import Marque from '../../sharred/Home-3/Marque';
import Blog from '../../sharred/Home-4/Blog';
import Featured from '../../sharred/Home-1/Home-5/Featured';
import Special from '../../sharred/Home-5/Special';
import Popular from '../../sharred/Home-6/Popular';
import Famous from '../../sharred/Home-7/Famous';
import Container from '../../components/Container/Container';


const Home = () => {
    return (
        <div>
            <Container class1="home-wrapper-1 py-5">
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
            </Container>

            {/* first section */}
            <Container class1="home-wrapper-2 py-5">
               <HFirst/>
            </Container>

             {/* Featured section */}
            <Container class1="home-wrapper-2 py-5">
               <Featured/>
            </Container>

                  {/* famous section */} 
            <Container class1="home-wrapper-2 py-5">
                    <Famous/>
            </Container>

                  {/* special secton */}
            <Container class1="home-wrapper-2 py-5">
                   <Special/>
            </Container>

                   {/* Popular section */}
            <Container class1="home-wrapper-2 py-5">
                <Popular/>
            </Container>

                     {/* section second */}
            <Container class1="home-wrapper-2 py-5">
                 <HSecond/>
            </Container>

                     {/* first marquee */}
            <Container class1="home-wrapper-2 py-5">
                 <Marque/>
            </Container>
            
                      {/* blog section */}
            <Container class1="home-wrapper-2 py-5">
                  <Blog/>
            </Container>
      
        </div>
    );
};

export default Home;