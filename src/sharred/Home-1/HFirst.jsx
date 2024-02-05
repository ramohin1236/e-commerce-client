import './Hfirst.css';
import { services } from '../../utils/Data';

const HFirst = () => {
    return (
        <div className='container-xxl'>
            <div className="row">
                <div className="col-12">
                    <div className='services d-flex align-items-center justify-content-between'>
                        {
                           services.map((i,j)=>{
                            return(
                                <div key={j} className='d-flex align-items-center gap-15'>
                                {i.image}
                                <div>
                                    <h6>{i.title}</h6>
                                    <p className='mb-0'>{i.tagline}</p>
                                </div>
                            </div>
                            )
                           })
                        }
                        
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HFirst;