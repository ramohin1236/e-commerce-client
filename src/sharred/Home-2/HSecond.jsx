import "./HSecond.css";

const HSecond = () => {
    return (
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="categories d-flex justify-content-between align-items-center">
                        {/* first */}
                       <div className="d-flex align-items-center gap-15">
                         <div>
                            <h6>Cameras</h6>
                            <p>10 Items</p>
                         </div>
                         <img src="/public/cam1.png" alt="" />
                       </div>
                       {/* second */}
                       <div className="d-flex align-items-center gap-15">
                         <div>
                            <h6>Cameras</h6>
                            <p>10 Items</p>
                         </div>
                         <img src="/public/cam1.png" alt="" />
                       </div>
                       {/* third */}
                       <div className="d-flex align-items-center gap-15">
                         <div>
                            <h6>Cameras</h6>
                            <p>10 Items</p>
                         </div>
                         <img src="/public/cam1.png" alt="" />
                       </div>
                       {/* fourth */}
                       <div className="d-flex align-items-center gap-15">
                         <div>
                            <h6>Cameras</h6>
                            <p>10 Items</p>
                         </div>
                         <img src="/public/cam1.png" alt="" />
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HSecond;