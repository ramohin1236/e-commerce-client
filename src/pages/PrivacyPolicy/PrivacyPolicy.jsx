import BreadCrump from '../../components/BreadCrump';
import Meta from '../../components/Meta/Meta';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div>
             <Meta title={"Privacy-policy"} />
            <BreadCrump title="Privacy-policy" /> 
            <section className="policy-wrapper py-5 home-wrpper-2">
                <div className="container-xxl">
        <div className="row">
            <div className="col-12">
             <div className="policy">
                </div>   
            </div>
        </div>
                </div>
                </section>  
        </div>
    );
};

export default PrivacyPolicy;