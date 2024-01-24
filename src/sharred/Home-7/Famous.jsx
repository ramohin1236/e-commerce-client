import './Famous.css'

const Famous = () => {
    return (
        <div className="container-xxl">
            <div className="row">
                {/* first content */}
                <div className="col-3">
                    <div className="famous-card bg-dark text-white position-relative">
                        <img className='img-fluid' src="/public/watch-2.png" alt="" />
                        <div className="famous-content position-absolute">
                        <h5>Smart Watches</h5>
                        <h6 className='text-white'>Smart Watch Series 7</h6>

                       <p className='text-white'>From $377or 16.62/mo. for 24 mo.</p>
                        </div>
                     
                    </div>
                </div>
                {/* second content */}
                <div className="col-3">
                    <div className="famous-card bg-white position-relative">
                        <img className='img-fluid' src="/public/pc.png" alt="" />
                        <div className="famous-content position-absolute">
                        <h5 className='text-dark'>Big Screen</h5>
                        <h6 className='text-dark'>600 nits of brightness</h6>
                       <p className='text-dark'>34-inch 5k Retina display</p>
                    
                        </div>
                     
                    </div>
                </div>
                {/* third content */}
                <div className="col-3">
                    <div className="famous-card bg-white position-relative">
                        <img className='img-fluid' src="/public/ultra.png" alt="" />
                        <div className="famous-content position-absolute">
                        <h5 className='text-dark'>Smart Phones</h5>
                       <h6 className='text-dark'>Samsung Ultra 23</h6>
                       <p className='text-dark'>From $377or 16.62/mo. for 24 mo.</p>
                        </div>
                     
                    </div>
                </div>
                {/* fourth content */}
                <div className="col-3">
                    <div className="famous-card bg-white position-relative">
                        <img className='img-fluid' src="/public/sound-1.png" alt="" />
                        <div className="famous-content position-absolute">
                        <h5 className='text-dark'>Speakers</h5>
                       <h6 className='text-dark'>Room-filling Sound</h6>
                       <p className='text-dark'>From $377or 16.62/mo. for 24 mo.</p>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Famous;