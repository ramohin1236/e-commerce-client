/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BreadCrump = ({title}) => {
    return (
        <div className="break-crump mb-0 py-4">
            <div className="container-xxl">
               <div className="row">
                 <div className="col-12 ">
                    <p className="text-center mb-0">
                        <Link
                        to='/'>Home 
                        </Link>/&nbsp;{title}
                    </p>
                 </div>
               </div>
            </div>
        </div>
    );
};

export default BreadCrump;