import Marquee from 'react-fast-marquee';
import './Marque.css'
const Marque = () => {
    return (
        <div className='container-xxl'>
            <div className='row'>
                <div className="col-12">
                    <div className="marquee-inner-wrapper card-wrapper">
                        <Marquee className='d-flex'> 
                           <div className='mx-4 w-25'><img src="https://media.wired.com/photos/64de7dca4a854832b16fd3c0/1:1/w_1500,h_1500,c_limit/Garmin-Epix-Pro-Gear.jpg" alt="brand" /></div>
                           <div className='mx-4 w-25'><img src="https://media.wired.com/photos/64de7dca4a854832b16fd3c0/1:1/w_1500,h_1500,c_limit/Garmin-Epix-Pro-Gear.jpg" alt="brand" /></div>
                           <div className='mx-4 w-25'><img src="https://media.wired.com/photos/64de7dca4a854832b16fd3c0/1:1/w_1500,h_1500,c_limit/Garmin-Epix-Pro-Gear.jpg" alt="brand" /></div>
                           <div className='mx-4 w-25'><img src="https://media.wired.com/photos/64de7dca4a854832b16fd3c0/1:1/w_1500,h_1500,c_limit/Garmin-Epix-Pro-Gear.jpg" alt="brand" /></div>
                           <div className='mx-4 w-25'><img src="https://media.wired.com/photos/64de7dca4a854832b16fd3c0/1:1/w_1500,h_1500,c_limit/Garmin-Epix-Pro-Gear.jpg" alt="brand" /></div>
                           <div className='mx-4 w-25'><img src="https://media.wired.com/photos/64de7dca4a854832b16fd3c0/1:1/w_1500,h_1500,c_limit/Garmin-Epix-Pro-Gear.jpg" alt="brand" /></div>
                           <div className='mx-4 w-25'><img src="https://media.wired.com/photos/64de7dca4a854832b16fd3c0/1:1/w_1500,h_1500,c_limit/Garmin-Epix-Pro-Gear.jpg" alt="brand" /></div>
                         
                          
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marque;