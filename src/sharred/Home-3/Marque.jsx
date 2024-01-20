import Marquee from 'react-fast-marquee';
import './Marque.css'
const Marque = () => {
    return (
        <div className='container-xxl'>
            <div className='row'>
                <div className="col-12">
                    <div className="marquee-inner-wrapper card-wrapper">
                        <Marquee className='d-flex'> 
                           <div className='mx-4 w-25'><img src="/public/brand-1.png" alt="brand" /></div>
                           <div className='mx-4 w-25'><img src="/public/brand-2.png" alt="brand" /></div>
                           <div className='mx-4 w-25'><img src="/public/brand-3.png" alt="brand" /></div>
                           <div className='mx-4 w-25'><img src="/public/brand-5.jpg" alt="brand" /></div>
                           <div className='mx-4 w-25'><img src="/public/brand-6.png" alt="brand" /></div>
                           <div className='mx-4 w-25'><img src="/public/brand-8.png" alt="brand" /></div>
                           <div className='mx-4 w-25'><img src="/public/sandisk.png" alt="brand" /></div>
                         
                        
                          
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marque;